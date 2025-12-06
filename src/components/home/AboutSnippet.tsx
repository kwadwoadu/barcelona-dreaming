import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSnippet() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">👨‍👩‍👧‍👦</p>
                <p className="text-muted-foreground">Family photo placeholder</p>
                <p className="text-sm text-muted-foreground/60">Your story image here</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              We Did It. You Can Too.
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                In 2024, we packed up our life in Copenhagen and moved our family of four to Barcelona. Two teenagers in Catalan public school. A new apartment in Eixample. The whole adventure.
              </p>
              <p>
                We spent months researching, made expensive mistakes, and learned things the hard way. The NIE system crashed on us three times. We almost fell for two rental scams. Our kids started school mid-year.
              </p>
              <p>
                <strong className="text-foreground">This guide exists so you don&apos;t have to figure it all out alone.</strong> Every tip here comes from our actual experience navigating the Spanish bureaucracy, Barcelona&apos;s rental market, and the Catalan school system.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
