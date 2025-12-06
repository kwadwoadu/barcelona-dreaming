import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { guideCategories } from "@/lib/dummy-data";
import { ArrowRight } from "lucide-react";

export function GuideCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive guides covering every aspect of your Barcelona relocation. All free, all based on real experience.
          </p>
        </div>

        {/* Category Grid */}
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
                    Browse guides
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/guides"
            className="inline-flex items-center text-lg font-medium text-primary hover:underline"
          >
            View all 27 free guides
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
