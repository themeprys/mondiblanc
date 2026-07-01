import { FileQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className,
      )}
    >
      <FileQuestion
        className="h-12 w-12 text-muted-foreground/50"
        aria-hidden
      />
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      {description && (
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
