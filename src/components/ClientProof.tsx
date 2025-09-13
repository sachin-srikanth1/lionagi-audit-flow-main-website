import React from "react";

type Client = { 
  name: string; 
  logo?: React.ReactNode; 
  href?: string; 
  permitted?: boolean; 
};

interface Props { 
  clients: Client[]; 
  textFallback?: string; 
}

export default function ClientProof({ 
  clients, 
  textFallback = ""
}: Props) {
  const permitted = clients.filter(c => c.permitted && c.logo);
  
  if (permitted.length === 0) {
    return (
      <section aria-label="Client proof" className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <p className="text-sm text-muted-foreground">{textFallback}</p>
      </section>
    );
  }
  
  return (
    <section aria-label="Client proof" className="max-w-7xl mx-auto px-6 pt-10 pb-6">
      <p className="text-xs text-muted-foreground mb-3">Selected teams I've advised</p>
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-80">
        {permitted.map((c) => (
          <li key={c.name} className="h-6 flex items-center">
            {c.href ? (
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-6">
                <span className="sr-only">{c.name}</span>
                <div className="h-6 [&_svg]:h-6 [&_svg]:w-auto [&_svg]:opacity-80 hover:[&_svg]:opacity-100 transition-opacity">
                  {c.logo}
                </div>
              </a>
            ) : (
              <div className="h-6 [&_svg]:h-6 [&_svg]:w-auto opacity-80">{c.logo}</div>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] text-muted-foreground/70">
        Logos used with permission. For identification only; no endorsement implied.
      </p>
    </section>
  );
}