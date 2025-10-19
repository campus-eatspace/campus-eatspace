import React from 'react';
import type { ReactNode } from 'react';
import '../style/auth.css'

// Button Component
interface ButtonProps {
  text: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "success";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "success",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`btn login-btn btn-${variant} w-100 py-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
