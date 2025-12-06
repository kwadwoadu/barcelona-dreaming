import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { premiumFeatures, testimonials } from "@/lib/dummy-data";
import { Check, Star, Shield, Clock, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Toolkit | Barcelona Dreaming",
  description: "Get the complete Barcelona relocation toolkit. Checklists, templates, scripts, and vetted contacts. €49 one-time payment.",
};

export default function PremiumPage() {
  return (
    <div className="py-12 md:py-16">
      {/* Hero Section */}
      <section className="container-wide mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Premium Toolkit</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            The Complete Barcelona Relocation Toolkit
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything we wish we had when we moved — checklists, templates, scripts, and direct access to our vetted contacts. One payment, lifetime access.
          </p>

          {/* Price */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <p className="text-6xl font-serif font-bold text-primary">€49</p>
              <p className="text-muted-foreground">one-time payment</p>
            </div>
          </div>

          <Button size="lg" className="h-14 px-8 text-lg">
            Get Instant Access
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            30-day money-back guarantee • Lifetime updates • Instant access
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-secondary/30 py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to make your Barcelona move smooth and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checklists */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">
                📋 Interactive Checklists
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Pre-Move Checklist</p>
                        <p className="text-sm text-muted-foreground">
                          90-day countdown with 50+ action items
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">First Week Checklist</p>
                        <p className="text-sm text-muted-foreground">
                          Day-by-day guide for your arrival week
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">First Month Checklist</p>
                        <p className="text-sm text-muted-foreground">
                          Everything to get fully settled
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">School Enrollment Checklist</p>
                        <p className="text-sm text-muted-foreground">
                          Catalan school system decoded step-by-step
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Templates */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">
                📝 Ready-to-Use Templates
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">NIE Appointment Script</p>
                        <p className="text-sm text-muted-foreground">
                          Spanish script to communicate at the office
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Landlord Email Templates</p>
                        <p className="text-sm text-muted-foreground">
                          5 templates in Catalan and Spanish
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">School Application Letter</p>
                        <p className="text-sm text-muted-foreground">
                          Proven template that got our kids in
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Bank Appointment Script</p>
                        <p className="text-sm text-muted-foreground">
                          Works for N26, Sabadell, and more
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white border-y border-border py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              What Families Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="font-semibold mb-2">How do I access the content?</h3>
                <p className="text-muted-foreground">
                  After purchase, you&apos;ll create an account and get immediate access to the premium section. All content is available online, and you can access it from any device.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="font-semibold mb-2">Is this a one-time payment?</h3>
                <p className="text-muted-foreground">
                  Yes! €49 once, lifetime access. No subscriptions, no hidden fees. We update the content regularly and you get all updates for free.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="font-semibold mb-2">What if it doesn&apos;t work for me?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you&apos;re not satisfied, email us and we&apos;ll refund you, no questions asked.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="font-semibold mb-2">How is this different from the free guides?</h3>
                <p className="text-muted-foreground">
                  The free guides give you the information. The premium toolkit gives you the tools to act on it: checklists, templates, scripts, and our personal contacts. It&apos;s the difference between knowing what to do and having everything ready to do it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary/5 py-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 500+ families who&apos;ve used our toolkit to relocate to Barcelona stress-free.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg">
              Get Instant Access — €49
            </Button>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                30-day guarantee
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Instant access
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                500+ families
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
