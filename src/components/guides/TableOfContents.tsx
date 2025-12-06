interface TableOfContentsProps {
  sections: Array<{ title: string }>;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav className="bg-muted rounded-xl p-6 mb-8">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">
        In This Guide
      </h2>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#section-${index}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
            >
              <span className="text-primary font-medium">{index + 1}.</span>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
