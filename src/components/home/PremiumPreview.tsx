import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { premiumFeatures } from "@/lib/dummy-data";
import { Check } from "lucide-react";

export function PremiumPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4">Premium Toolkit</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Skip the Guesswork. Get the Complete Toolkit.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Everything we wish we had when we moved — checklists, templates, scripts, and direct access to our vetted contacts. One payment, lifetime access.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-serif font-bold text-primary">€49</span>
              <span className="text-muted-foreground">one-time payment</span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">{feature.title}</span>
                    <span className="text-muted-foreground"> — {feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/premium">Get Instant Access</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/premium#features">See What&apos;s Included</Link>
              </Button>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="relative">
            {/* Main Card */}
            <Card className="relative z-10 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-semibold">Pre-Move Checklist</p>
                    <p className="text-sm text-muted-foreground">90-day countdown</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Research visa options</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Gather apostilled documents</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="w-5 h-5 border-2 border-primary rounded" />
                    <span className="text-sm">Book NIE appointment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg opacity-50">
                    <div className="w-5 h-5 border-2 border-muted-foreground/30 rounded" />
                    <span className="text-sm text-muted-foreground">+ 47 more items...</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background Cards */}
            <Card className="absolute top-4 -right-4 w-full h-full -z-10 bg-muted/50 rotate-3" />
            <Card className="absolute top-8 -right-8 w-full h-full -z-20 bg-muted/30 rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
