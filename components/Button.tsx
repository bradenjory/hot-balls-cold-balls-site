import Link from "next/link";
import type { ComponentProps } from "react";

const styles = {
  hot: "bg-hot text-bg hover:bg-[#ff8f3f]",
  cold: "bg-cold text-bg hover:bg-[#4fe3d6]",
  outline: "text-ink ring-2 ring-inset ring-ink/70 hover:ring-ink hover:bg-ink/10",
};

export type ButtonVariant = keyof typeof styles;

export const buttonClass = (variant: ButtonVariant = "hot") =>
  `inline-flex items-center justify-center whitespace-nowrap rounded-full px-7 py-3.5 font-display text-[1.0625rem] font-semibold leading-none transition-[background-color,box-shadow,transform] duration-150 active:translate-y-px active:scale-[0.98] ${styles[variant]}`;

export function Button({
  variant = "hot",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return <Link className={`${buttonClass(variant)} ${className}`} {...props} />;
}
