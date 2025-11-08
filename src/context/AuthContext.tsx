import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  user: User | null
  session: Session | null
  signIn: (email: string, password: string, userType?: 'customer' | 'vendor') => Promise<void>
  signUp: (email: string, password: string, name?: string, userType?: 'customer' | 'vendor') => Promise<void>
  signOut: () => Promise<void>
  signInWithGoogle: (userType?: 'customer' | 'vendor') => Promise<void>
  loading: boolean
  error: string | null
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const clearError = () => setError(null)

  const signUp = async (email: string, password: string, name?: string, userType: 'customer' | 'vendor' = 'customer') => {
    try {
      setError(null)
      setLoading(true)

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            user_type: userType,
          },
        },
      })

      if (signUpError) throw signUpError

      // If signup successful, create user profile in database
      if (data.user) {
        const { error: profileError } = await supabase
          .from(userType === 'vendor' ? 'vendors' : 'customers')
          .insert([
            {
              id: data.user.id,
              email: email,
              name: name,
              created_at: new Date().toISOString(),
            },
          ])

        if (profileError) {
          console.error('Profile creation error:', profileError)
          // Don't throw error here as auth was successful
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during signup')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string, userType: 'customer' | 'vendor' = 'customer') => {
    try {
      setError(null)
      setLoading(true)

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      // Optionally verify user type matches
      const { data: userData } = await supabase.auth.getUser()
      if (userData.user?.user_metadata?.user_type && userData.user.user_metadata.user_type !== userType) {
        await supabase.auth.signOut()
        throw new Error(`Please use the ${userData.user.user_metadata.user_type} login page`)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during login')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async (userType: 'customer' | 'vendor' = 'customer') => {
    try {
      setError(null)
      const redirectUrl = userType === 'vendor' 
        ? `${window.location.origin}/vendor/dashboard`
        : `${window.location.origin}/dashboard`

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            user_type: userType,
          },
        },
      })

      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'An error occurred during Google sign-in')
      throw err
    }
  }

  const signOut = async () => {
    try {
      setError(null)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign out')
      throw err
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        loading,
        error,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}