"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Navigation } from "@/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";


interface NavbarProps {
  navigation: Navigation;
}

export function Navbar({ navigation }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-20"
          aria-label="Main navigation"
        >

          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight md:text-2xl"
          >
            <Image 
            width="200"
            height="20"
            alt=""
            src="/logo.png"/>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <Container className="py-4">
          <ul className="space-y-3">
            {navigation.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full">
                <Link
                  href={navigation.cta.href}
                  onClick={() => setOpen(false)}
                >
                  {navigation.cta.label}
                </Link>
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
