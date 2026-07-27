import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",

    secondary: "bg-zinc-800 text-white hover:bg-zinc-700",

    danger: "bg-red-600 text-white hover:bg-red-500",

    ghost: "bg-transparent text-white hover:bg-zinc-800",
  };

  return (
    <button
      {...props}
      className={`
        rounded-xl
        px-5
        py-3
        font-semibold
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
