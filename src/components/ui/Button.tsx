import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-full transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-gradient-to-r from-[hsl(248,75%,55%)] to-[hsl(280,85%,65%)] text-white hover:shadow-lg hover:scale-105 focus:ring-[hsl(248,75%,55%)]",
        secondary:
            "bg-[hsl(0,0%,20%)] dark:bg-[hsl(0,0%,90%)] text-white dark:text-black hover:bg-[hsl(0,0%,30%)] dark:hover:bg-[hsl(0,0%,80%)]",
        outline:
            "border-2 border-[hsl(248,75%,55%)] text-[hsl(248,75%,55%)] hover:bg-[hsl(248,75%,55%)] hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
