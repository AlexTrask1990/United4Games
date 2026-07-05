"use client";

import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { externalLinks } from "@/app/lib/links";
import { SectionLink } from "@/app/ui/SectionLink/SectionLink";

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
  "aria-label": ariaLabel,
  ...props
}) => {
  if (type === "button") {
    return (
      <SectionLink
        href={externalLinks.contactUs}
        aria-label="contact us button"
        className={`btn text-base-100 leading-4 font-bold ${className}`}
      >
        {label && <span className="label-container">{label}</span>}
        {icon && <span className="icon-container">{icon}</span>}
      </SectionLink>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel ?? label ?? "button"}
      className={`btn text-base-100 leading-4 font-bold ${className}`}
      {...props}
    >
      {label && <span className="label-container">{label}</span>}
      {icon && <span className="icon-container">{icon}</span>}
    </button>
  );
};
