"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium tracking-widest text-accent uppercase">
        Error
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl">Something Went Wrong</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        We encountered an unexpected error. Please try again or return to the
        homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </Container>
  );
}
