"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const guideCategories = [
  { name: "Neighborhoods", href: "/guides/neighborhoods" },
  { name: "Visas & Immigration", href: "/guides/visas" },
  { name: "Legal Requirements", href: "/guides/legals" },
  { name: "Schools & Education", href: "/guides/schools" },
  { name: "Housing", href: "/guides/housing" },
  { name: "Finances", href: "/guides/finances" },
  { name: "Lifestyle", href: "/guides/lifestyle" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌴</span>
            <span className="font-serif text-xl font-semibold text-foreground">
              Barcelona Dreaming
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Guides Dropdown */}
            <div className="relative">
              <button
                onClick={() => setGuidesOpen(!guidesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Guides
                <ChevronDown className="w-4 h-4" />
              </button>
              {guidesOpen && (
                <>
                  <div
                    className="fixed inset-0"
                    onClick={() => setGuidesOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border py-2">
                    {guideCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        onClick={() => setGuidesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                    <div className="border-t border-border my-2" />
                    <Link
                      href="/guides"
                      className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
                      onClick={() => setGuidesOpen(false)}
                    >
                      View All Guides
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/premium"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Premium
            </Link>
            <Link
              href="/directory"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>

            <Button asChild>
              <Link href="/premium">Get Full Access</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-1">
              <p className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Guides
              </p>
              {guideCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <Link
                href="/premium"
                className="block px-2 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Premium
              </Link>
              <Link
                href="/directory"
                className="block px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Directory
              </Link>
              <Link
                href="/about"
                className="block px-2 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/premium">Get Full Access</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
