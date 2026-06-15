"use client";

import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { externalLinks } from "@/app/lib/links";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
  type?: "submit" | "button" | "reset";
}

export const Button: FC<ButtonProps> = ({
  label,
  icon,
  className,
  type = "button",
  ...props
}) => {
  const handleClick = () => {
    if (type === "button") {
      window.open(externalLinks.contactUs, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      aria-label="contact us button"
      className={`btn text-base-100 leading-4 font-bold ${className}`}
      {...props}
    >
      {label && <span className="label-container">{label}</span>}
      {icon && <span className="icon-container">{icon}</span>}
    </button>
  );
};
