import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      accept: [
        "bg-main-accept",
        "text-white",
        "border-transparent",
        "hover:bg-green-600",
      ],
      denied: [
        "bg-main-denied",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-red-600",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "accept", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "accept",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;
