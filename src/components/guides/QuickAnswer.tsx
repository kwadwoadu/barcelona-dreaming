import { Lightbulb } from "lucide-react";

interface QuickAnswerProps {
  content: string;
}

export function QuickAnswer({ content }: QuickAnswerProps) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Quick Answer
          </h2>
          <p className="text-foreground leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
