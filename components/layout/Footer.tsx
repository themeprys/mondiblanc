import Link from "next/link";
import type { Footer as FooterType } from "@/types";
import { Container } from "@/components/shared/Container";

interface FooterProps {
  footer: FooterType;
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-border bg-foreground/[0.02]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-tight"
            >
              MondiBlanc
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
            <ul className="mt-6 flex gap-4">
              {footer.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium tracking-wide uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
