import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "muted";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variant === "default" && "bg-accent/10 text-accent",
        variant === "outline" && "border border-border text-muted-foreground",
        variant === "muted" && "bg-foreground/5 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
