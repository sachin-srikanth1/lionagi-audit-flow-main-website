// React import only needed for JSX transform
type IconProps = { className?: string; title?: string };

/** CONSISTENT STROKES ACROSS SCALES */
const base = `
  svg * { vector-effect: non-scaling-stroke; }
  .muted { stroke:#94a3b8; }
  .accent { stroke:currentColor; }
`;

/** 1) FAN-IN TO BUS — One protocol for many tools */
export function FanInBusIcon({ className, title="One protocol" }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" className={className} role="img" aria-label={title}>
      <style>{`
        ${base}
        .m{fill:none;stroke-width:1.8}
        .a{fill:none;stroke-width:2.2;stroke-linecap:round}
        @media (prefers-reduced-motion:no-preference){
          svg:hover .a{filter:brightness(1.12)}
        }
      `}</style>
      {/* sockets */}
      <path className="m muted" d="M10 18 h12 v10 h-12 z" />
      <path className="m muted" d="M10 32 h12 v10 h-12 z" />
      <path className="m muted" d="M10 46 h12 v10 h-12 z" />
      {/* fan-in lines */}
      <path className="a accent" d="M22 23 C30 26, 40 28, 50 34" />
      <path className="a accent" d="M22 37 C32 38, 40 38, 50 38" />
      <path className="a accent" d="M22 51 C30 48, 40 46, 50 40" />
      {/* bus */}
      <path className="a accent" d="M50 30 v16" />
      <path className="m muted" d="M52 30 v16" />
    </svg>
  );
}

/** 2) SLIDING WINDOW — Live streaming context */
export function SlidingWindowIcon({ className, title="Live context streaming" }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" className={className} role="img" aria-label={title}>
      <style>{`
        ${base}
        .m{fill:none;stroke-width:1.8}
        .a{fill:none;stroke-width:2.2}
        @media (prefers-reduced-motion:no-preference){
          svg:hover .win{transform:translateX(6px)}
        }
        .win{transition:transform .35s ease}
      `}</style>
      {/* static frames */}
      <rect className="m muted" x="8" y="20" width="18" height="12" rx="2"/>
      <rect className="m muted" x="18" y="32" width="18" height="12" rx="2"/>
      {/* sliding "current" window */}
      <g className="win">
        <rect className="a accent" x="30" y="24" width="24" height="18" rx="3"/>
      </g>
      {/* timeline */}
      <path className="m muted" d="M10 52 H62" />
      <path className="a accent" d="M30 52 H54" />
    </svg>
  );
}

/** 3) BRIDGE LINK — Model-to-tool last mile */
export function BridgeLinkIcon({ className, title="Model–tool bridge" }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" className={className} role="img" aria-label={title}>
      <style>{`
        ${base}
        .m{fill:none;stroke-width:1.8}
        .a{fill:none;stroke-width:2.2;stroke-linecap:round}
        @media (prefers-reduced-motion:no-preference){
          svg:hover .a{filter:brightness(1.12)}
        }
      `}</style>
      {/* endpoints */}
      <rect className="m muted" x="8" y="24" width="16" height="20" rx="3"/>
      <rect className="m muted" x="48" y="24" width="16" height="20" rx="3"/>
      {/* bridge */}
      <path className="a accent" d="M24 34 C34 22, 38 22, 48 34" />
      <path className="a accent" d="M24 34 C34 46, 38 46, 48 34" />
    </svg>
  );
}