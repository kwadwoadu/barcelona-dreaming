import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { guideCategories } from "@/lib/dummy-data";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";

const featuredGuides = [
  {
    title: "Moving to Barcelona: Complete 2025 Guide",
    description: "Everything you need to know about relocating to Barcelona, from visas to finding the perfect neighborhood.",
    href: "/guides/moving-to-barcelona",
    category: "Pillar Guide",
    readingTime: "25 min",
    updatedAt: "Dec 2025",
    featured: true,
  },
  {
    title: "How to Get Your NIE in Barcelona",
    description: "Step-by-step guide to obtaining your foreigner identification number, with appointment tips and document checklist.",
    href: "/guides/nie-guide",
    category: "Legal",
    readingTime: "8 min",
    updatedAt: "Dec 2025",
    featured: true,
  },
  {
    title: "Digital Nomad Visa Spain 2025",
    description: "Complete guide to Spain's digital nomad visa, including requirements, application process, and timeline.",
    href: "/guides/digital-nomad-visa",
    category: "Visas",
    readingTime: "12 min",
    updatedAt: "Dec 2025",
    featured: true,
  },
];

export default function GuidesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Free Barcelona Relocation Guides
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive guides covering every aspect of moving to Barcelona. Written from real experience, updated regularly, and always free.
          </p>
        </div>

        {/* Featured Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold mb-6">Featured Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide.href} href={guide.href}>
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant={guide.featured ? "default" : "secondary"}>
                        {guide.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readingTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {guide.updatedAt}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* All Categories */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideCategories.map((category) => (
              <Link key={category.href} href={category.href}>
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{category.icon}</span>
                      <Badge variant="secondary" className="font-normal">
                        {category.count} guides
                      </Badge>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      View guides
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
