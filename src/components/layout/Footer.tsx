import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  guides: [
    { name: "Neighborhoods", href: "/guides/neighborhoods" },
    { name: "Visas", href: "/guides/visas" },
    { name: "Legal", href: "/guides/legals" },
    { name: "Schools", href: "/guides/schools" },
    { name: "Housing", href: "/guides/housing" },
  ],
  premium: [
    { name: "What's Included", href: "/premium#features" },
    { name: "Pricing", href: "/premium#pricing" },
    { name: "FAQ", href: "/premium#faq" },
  ],
  resources: [
    { name: "Directory", href: "/directory" },
    { name: "Blog", href: "/blog" },
    { name: "Newsletter", href: "#newsletter" },
  ],
  connect: [
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/about#contact" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌴</span>
              <span className="font-serif text-lg font-semibold">
                Barcelona Dreaming
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your complete guide to relocating to Barcelona, written by a family who made the move.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h4 className="font-sans text-sm font-semibold mb-4 uppercase tracking-wider">
              Guides
            </h4>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div>
            <h4 className="font-sans text-sm font-semibold mb-4 uppercase tracking-wider">
              Premium
            </h4>
            <ul className="space-y-2">
              {footerLinks.premium.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sans text-sm font-semibold mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans text-sm font-semibold mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div id="newsletter" className="mt-12 pt-8 border-t border-border/50">
          <div className="max-w-md">
            <h4 className="font-serif text-lg font-semibold mb-2">
              Get the free Barcelona relocation checklist
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Join 500+ families planning their move. Weekly tips, no spam.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Barcelona Dreaming. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
