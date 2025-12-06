import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export function PremiumCTA() {
  return (
    <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-serif font-bold mb-2">
              Want the Complete Toolkit?
            </h3>
            <p className="text-muted-foreground mb-4">
              Get our pre-made templates, scripts, and checklists to make this process even easier.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span>NIE appointment script in Spanish</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span>Document checklist with templates</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span>Video walkthrough of the NIE office</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-center gap-3">
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary">€49</p>
              <p className="text-sm text-muted-foreground">one-time</p>
            </div>
            <Button size="lg" asChild>
              <Link href="/premium">
                Get Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
