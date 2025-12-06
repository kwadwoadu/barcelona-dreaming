import { Badge } from "@/components/ui/badge";
import { VendorCard } from "@/components/directory/VendorCard";
import { vendors } from "@/lib/dummy-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Directory | Barcelona Dreaming",
  description: "Vetted service providers for your Barcelona relocation. Lawyers, real estate agents, banks, and more.",
};

const categories = [
  { name: "All", count: 8 },
  { name: "Lawyers", count: 2 },
  { name: "Relocation Agents", count: 1 },
  { name: "Real Estate", count: 2 },
  { name: "Banks", count: 1 },
  { name: "Insurance", count: 1 },
  { name: "Moving", count: 1 },
];

export default function DirectoryPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Trusted Service Providers
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;ve personally worked with or thoroughly vetted every provider listed here. These are the people who helped make our move smoother.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={category.name === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Vetted Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-semibold mb-1">About Our Vetting Process</h3>
              <p className="text-sm text-muted-foreground">
                Providers marked as &quot;Vetted&quot; are ones we&apos;ve personally used or thoroughly researched. We only recommend services we trust. Some listings may include affiliate links, but this never affects our recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vendors.map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} />
          ))}

          {/* Placeholder cards */}
          {[...Array(4)].map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
            >
              <span className="text-3xl mb-2">➕</span>
              <p className="text-sm text-muted-foreground">
                More providers coming soon
              </p>
            </div>
          ))}
        </div>

        {/* CTA for Vendors */}
        <div className="mt-16 bg-secondary/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Are You a Service Provider?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We&apos;re building the most trusted directory of Barcelona relocation services. If you help expats settle in Barcelona, we&apos;d love to hear from you.
          </p>
          <Badge variant="outline" className="text-base px-4 py-2">
            Contact us at hello@barcelonadreaming.com
          </Badge>
        </div>
      </div>
    </div>
  );
}
