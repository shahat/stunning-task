import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export const Button: FC<ButtonProps> = ({
  variant = "solid",
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium px-4 py-2 rounded-md transition outline-none whitespace-nowrap border-none focus:outline-none focus:border-none  cursor-pointer rounded-xl text-md md:text-lg";
 

  return (
    <button
      className={clsx(baseClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};
