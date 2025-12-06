import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { QuickAnswer } from "@/components/guides/QuickAnswer";
import { TableOfContents } from "@/components/guides/TableOfContents";
import { FAQ } from "@/components/guides/FAQ";
import { PremiumCTA } from "@/components/guides/PremiumCTA";
import { PersonalExperience } from "@/components/guides/PersonalExperience";
import { nieGuideContent } from "@/lib/dummy-data";
import { Clock, CalendarDays, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: nieGuideContent.title + " | Barcelona Dreaming",
  description: nieGuideContent.description,
};

export default function NIEGuidePage() {
  return (
    <article className="py-12 md:py-16">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides" className="hover:text-foreground transition-colors">
              Guides
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides/legals" className="hover:text-foreground transition-colors">
              Legal
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">NIE Guide</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge>Legal</Badge>
              <Badge variant="outline">Most Popular</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              {nieGuideContent.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {nieGuideContent.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {nieGuideContent.readingTime}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                Updated {nieGuideContent.updatedAt}
              </span>
            </div>
          </header>

          {/* Quick Answer */}
          <QuickAnswer content={nieGuideContent.quickAnswer} />

          {/* Table of Contents */}
          <TableOfContents sections={nieGuideContent.sections} />

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {nieGuideContent.sections.map((section, index) => (
              <section key={index} id={`section-${index}`} className="mb-12">
                <h2 className="text-2xl font-serif font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>

                {/* Add personal experience after step 2 */}
                {index === 1 && (
                  <PersonalExperience content={nieGuideContent.personalExperience} />
                )}
              </section>
            ))}
          </div>

          {/* Costs Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4">Costs & Timeline</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-medium">Item</th>
                    <th className="text-left py-3 pr-4 font-medium">Cost</th>
                    <th className="text-left py-3 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">NIE Fee (Modelo 790)</td>
                    <td className="py-3 pr-4">€12</td>
                    <td className="py-3">Paid before appointment</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Appointment Wait</td>
                    <td className="py-3 pr-4">Free</td>
                    <td className="py-3">2-4 weeks</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Processing</td>
                    <td className="py-3 pr-4">Free</td>
                    <td className="py-3">Same day to 1 week</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Total</td>
                    <td className="py-3 pr-4 font-medium">€12</td>
                    <td className="py-3 font-medium">2-5 weeks total</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <FAQ items={nieGuideContent.faqs} />

          {/* Premium CTA */}
          <PremiumCTA />

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <p className="font-medium mb-1">Written by Kwadwo Adu</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Kwadwo moved to Barcelona with his family in 2024. He went through the NIE process three times (long story) and now helps other families navigate Spanish bureaucracy.
                </p>
                <Link href="/about" className="text-sm text-primary hover:underline">
                  Read our full story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
