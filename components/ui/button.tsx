import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark border border-transparent",
  dark: "bg-ink text-white hover:bg-[#1f2937] border border-transparent",
  outline:
    "border border-line bg-surface text-ink hover:border-ink/30 hover:bg-canvas",
  ghost:
    "border border-transparent bg-transparent text-brand hover:bg-brand-soft",
  danger:
    "bg-danger text-white hover:bg-[#b3261e] border border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-[13px]",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-[15px]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
