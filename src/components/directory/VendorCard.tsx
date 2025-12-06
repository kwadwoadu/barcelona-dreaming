import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";

interface VendorCardProps {
  vendor: {
    name: string;
    category: string;
    description: string;
    vetted: boolean;
    href: string;
  };
}

export function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
            <span className="text-xl">🏢</span>
          </div>
          {vendor.vetted && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Vetted
            </Badge>
          )}
        </div>
        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {vendor.category}
          </p>
          <h3 className="font-semibold text-lg">{vendor.name}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          {vendor.description}
        </p>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={vendor.href}>
            Visit Website
            <ExternalLink className="w-3 h-3 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
