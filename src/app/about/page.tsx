import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Barcelona Dreaming",
  description: "Meet the family behind Barcelona Dreaming. We moved from Copenhagen to Barcelona in 2024 and now help other families make the same journey.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      {/* Hero */}
      <section className="container-wide mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl mb-4">👨‍👩‍👧‍👦</p>
                <p className="text-muted-foreground">Our family in Barcelona</p>
                <p className="text-sm text-muted-foreground/60">Photo placeholder</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In early 2024, we made the decision that changed everything: packing up our life in Copenhagen and moving our family of four to Barcelona.
              </p>
              <p>
                Our kids were 17 and 19. We had stable jobs, a nice apartment, and a comfortable routine. But we wanted something different. We wanted sunshine, a new language, a slower pace of life, and an adventure we&apos;d remember forever.
              </p>
              <p className="text-foreground font-medium">
                What we didn&apos;t want was the stress that came with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-secondary/30 py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              The Journey
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                The NIE system crashed on us three times before we got our appointment. We almost fell for two different rental scams. Our kids started school mid-year in a language they didn&apos;t speak. We spent weeks researching neighborhoods, only to realize the &quot;perfect&quot; area we&apos;d chosen had no schools with spots.
              </p>
              <p>
                We made every mistake in the book. But we also learned. A lot.
              </p>
              <p>
                After months of navigating Spanish bureaucracy, the Barcelona rental market, and the Catalan school system, we finally felt settled. Our kids were thriving. We had our routines. We knew where to get good coffee and which NIE office to avoid.
              </p>
              <p className="text-foreground font-medium text-lg">
                And then friends started asking us for advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Why We Built This
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We realized that everything we&apos;d learned the hard way could help someone else. The scripts we wrote for the NIE office. The checklist we used to track our move. The contacts we&apos;d vetted through trial and error.
                </p>
                <p>
                  Barcelona Dreaming started as a Notion page for friends. Then a Google Doc. Then we realized we should just build something properly.
                </p>
                <p>
                  <strong className="text-foreground">Our mission is simple:</strong> Help families relocate to Barcelona without the stress we went through. Provide real, tested advice — not generic expat content. Be the guide we wish we&apos;d had.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/guides">
                    Start Reading Our Guides
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-serif font-bold text-primary mb-2">2024</p>
                  <p className="text-sm text-muted-foreground">Year we moved</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-serif font-bold text-primary mb-2">4</p>
                  <p className="text-sm text-muted-foreground">Family members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-serif font-bold text-primary mb-2">27</p>
                  <p className="text-sm text-muted-foreground">Free guides</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-serif font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Families helped</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary/30 py-16">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a question about moving to Barcelona? Want to share your story? We&apos;d love to hear from you.
            </p>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your name" />
                    <Input type="email" placeholder="Your email" />
                  </div>
                  <Input placeholder="Subject" />
                  <textarea
                    className="w-full min-h-[120px] px-3 py-2 border border-input rounded-md bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your message..."
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4">
              Or email us directly at hello@barcelonadreaming.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
