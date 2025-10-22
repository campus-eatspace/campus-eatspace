import { useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import AuthLayout from "../../components/Layout/AuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };// TODO:(Spidey)Replace with API calls

  return (
    <AuthLayout title="Login to Your Account">
      <form onSubmit={handleSubmit} className="space-y-4 bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-none">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="bg-transparent border border-white/30 placeholder-white/60 text-white focus:bg-white/10"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="bg-transparent border border-white/30 placeholder-white/60 text-white focus:bg-white/10"
        />

        <Button type="submit" className="bg-white/20 text-white hover:bg-white/30 border border-white/30">Login</Button>
      </form>

      <p className="text-sm text-gray-200 mt-4 text-center">
        Don’t have an account?{" "}
        <a href="/signup" className="text-indigo-200 hover:underline">
          Sign up
        </a>
        <span className="mx-2 text-white/50">|</span>
        <a href="/forgot-password" className="text-indigo-200 hover:underline">
          Forgot password?
        </a>
      </p>
    </AuthLayout>
  );
}
