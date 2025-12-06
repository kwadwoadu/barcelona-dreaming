import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C45C3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-wide relative py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>🇪🇸</span>
            <span>Written by a family who made the move</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Your Soft Landing in Barcelona
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            We made every mistake so you don&apos;t have to. Here&apos;s everything we learned moving our family to Barcelona — from NIE nightmares to finding the perfect school.
          </p>

          {/* Email Capture */}
          <div className="max-w-md mx-auto mb-8">
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12"
              />
              <Button type="submit" size="lg" className="h-12">
                Get Free Checklist
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              Join 500+ families planning their move. Free checklist + weekly tips.
            </p>
          </div>

          {/* CTA Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="/guides">Browse Free Guides</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/premium">See Premium Toolkit →</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container-wide pb-8">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-muted">
          {/* Placeholder for Barcelona skyline image */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">🌅</p>
              <p className="text-muted-foreground">Barcelona skyline at sunset</p>
              <p className="text-sm text-muted-foreground/60">Unsplash image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
