import { Quote } from "lucide-react";

interface PersonalExperienceProps {
  content: string;
}

export function PersonalExperience({ content }: PersonalExperienceProps) {
  return (
    <div className="my-8 bg-secondary/50 rounded-xl p-6 border-l-4 border-primary">
      <div className="flex items-start gap-4">
        <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <p className="font-medium text-sm text-primary mb-2">From our experience:</p>
          <p className="text-foreground italic">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
