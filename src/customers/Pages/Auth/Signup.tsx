import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import AuthLayout from "../../components/Layout/AuthLayout";
import google from "../../../assets/google.png";
import { useAuth } from "../../../context/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    try {
      await signUp(email, password, name, 'customer');
      setSuccess("Account created successfully! Please check your email to verify your account.");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    try {
      await signInWithGoogle('customer');
      // Redirect will be handled by Supabase
    } catch (err: any) {
      setError(err.message || "Failed to sign up with Google.");
    }
  };

  return (
    <AuthLayout title="Create an Account">
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
          disabled={isLoading}
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={isLoading}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          disabled={isLoading}
        />

        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          required
          disabled={isLoading}
        />

        <Button 
          type="submit"
          disabled={isLoading}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating Account..." : "Sign Up"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-white mb-4">or</p>
        <button 
          onClick={handleGoogleSignup}
          disabled={isLoading}
          className="flex items-center justify-center w-full bg-white/20 text-white hover:bg-white/30 border border-white/30 py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src={google} alt="Google" className="w-5 h-5 mr-2" />
          Signup with Google
        </button>
      </div>

      <p className="text-sm text-white mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-200 hover:underline">
          Login
        </a>
      </p>
    </AuthLayout>
  );
}