import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium tracking-widest text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </Container>
  );
}
