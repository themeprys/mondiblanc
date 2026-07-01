import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-[90rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
