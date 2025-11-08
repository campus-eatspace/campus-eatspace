import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import AuthLayout from "../../components/Layout/AuthLayout";
import google from "../../../assets/google.png";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signIn(email, password, 'customer');
      // Redirect to customer dashboard on success
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to login. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithGoogle('customer');
      // Redirect will be handled by Supabase
    } catch (err: any) {
      setError(err.message || "Failed to login with Google.");
    }
  };

  return (
    <AuthLayout title="Login to Your Account">
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-none"
      >
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={isLoading}
          className="bg-transparent border border-white/30 placeholder-white/60 text-white focus:bg-white/10"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          disabled={isLoading}
          className="bg-transparent border border-white/30 placeholder-white/60 text-white focus:bg-white/10"
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-white/20 text-white hover:bg-white/30 border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-white mb-4">or</p>
        <button 
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="flex items-center justify-center w-full bg-white/20 text-white hover:bg-white/30 border border-white/30 py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src={google} alt="Google" className="w-5 h-5 mr-2" />
          Login with Google
        </button>
      </div>

      <div className="mt-4 text-center">
        <a
          href="/forgot-password"
          className="text-sm text-indigo-200 hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <p className="text-sm text-gray-200 mt-4 text-center">
        Don't have an account?{" "}
        <a href="/signup" className="text-indigo-200 hover:underline">
          Sign up
        </a>
      </p>
    </AuthLayout>
  );
}