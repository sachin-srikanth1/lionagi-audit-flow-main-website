// React import only needed for JSX transform

type IconProps = { className?: string; title?: string };

/** Header blueprint (one-time draw) */
export function McpBlueprint({ className, title = "MCP blueprint" }: IconProps) {
  return (
    <svg viewBox="0 0 760 120" className={className} role="img" aria-label={title}>
      <style>{`
        .n{stroke:#cbd5e1;stroke-width:1.5;fill:none;rx:8}
        .f{stroke:currentColor;stroke-width:2;fill:none;stroke-dasharray:260;stroke-dashoffset:260}
        @media (prefers-reduced-motion:no-preference){ .on .f{animation:draw .68s ease-out forwards}}
        @keyframes draw{to{stroke-dashoffset:0}}
      `}</style>
      <g className="on">
        <rect className="n" x="90"  y="42" width="120" height="36" rx="8"/>
        <rect className="n" x="270" y="42" width="120" height="36" rx="8"/>
        <rect className="n" x="450" y="42" width="120" height="36" rx="8"/>
        <rect className="n" x="630" y="42" width="120" height="36" rx="8"/>
        <path className="f" d="M210 60 H270"/>
        <path className="f" d="M390 60 H450"/>
        <path className="f" d="M570 60 H630"/>
      </g>
    </svg>
  );
}

/** MEMORY MCP — ring + write-head dot */
export function MemoryMcpIcon({ className, title = "Memory MCP" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <style>{`
        .r{fill:none;stroke:#94a3b8;stroke-width:1.8;opacity:0.45}
        .a{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
        .p{fill:currentColor;transform-origin:center}
        svg * { vector-effect: non-scaling-stroke; }
        @media (prefers-reduced-motion:no-preference){
          svg:hover .r{animation:fade-ring 2s ease-in-out infinite}
          svg:hover .dash{animation:spin 1s linear infinite}
          svg:hover .pulse{animation:dot-pulse 2s ease-in-out infinite}
        }
        @keyframes spin{to{stroke-dashoffset:-140}}
        @keyframes dot-pulse{
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(2);opacity:0.6}
        }
        @keyframes fade-ring{
          0%,100%{opacity:0.45}
          50%{opacity:0.2}
        }
      `}</style>
      <circle className="r" cx="32" cy="32" r="18"/>
      <circle className="a dash" cx="32" cy="32" r="16" strokeDasharray="70 70" />
      <circle className="p pulse" cx="48" cy="32" r="2.2"/>
    </svg>
  );
}

/** COGNITION MCP — weighted graph */
export function CognitionMcpIcon({ className, title = "Cognition MCP" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <style>{`
        .e{stroke:#94a3b8;stroke-width:1.5;fill:none;stroke-linecap:round;transition:all .3s}
        .m{stroke:currentColor;stroke-width:2;transition:all .6s}
        .n{fill:#cbd5e1;transform-origin:center;transition:transform .3s}
        svg * { vector-effect: non-scaling-stroke; }
        @media (prefers-reduced-motion:no-preference){
          svg:hover .e{opacity:0.6}
          svg:hover .m{stroke-width:2.4}
          svg:hover .n:nth-child(1){animation:node-pulse 2s ease-in-out infinite}
          svg:hover .n:nth-child(2){animation:node-pulse 2s ease-in-out infinite .3s}
          svg:hover .n:nth-child(3){animation:node-pulse 2s ease-in-out infinite .6s}
          svg:hover .n:nth-child(4){animation:node-pulse 2s ease-in-out infinite .9s}
          svg:hover .n:nth-child(5){animation:node-pulse 2s ease-in-out infinite 1.2s}
        }
        @keyframes node-pulse{
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(1.5);opacity:0.7}
        }
      `}</style>
      <circle className="n" cx="20" cy="42" r="4.2"/>
      <circle className="n" cx="44" cy="20" r="3.6"/>
      <circle className="n" cx="48" cy="44" r="3.4"/>
      <circle className="n" cx="24" cy="20" r="3.2"/>
      <circle className="n" cx="36" cy="34" r="3.0"/>
      <path className="e" d="M24 20 L36 34"/>
      <path className="e m" d="M20 42 C28 36, 34 30, 44 20"/>
      <path className="e" d="M36 34 L48 44"/>
      <path className="e" d="M20 42 L48 44"/>
    </svg>
  );
}

/** WAVES MCP — accountability waveform */
export function WavesMcpIcon({ className, title = "Waves MCP" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <style>{`
        .w{fill:none;stroke:#94a3b8;stroke-width:1.6;opacity:0.5}
        .a{fill:none;stroke:currentColor;stroke-width:2;stroke-dasharray:60 60;stroke-dashoffset:0}
        svg * { vector-effect: non-scaling-stroke; }
        @media (prefers-reduced-motion:no-preference){
          svg:hover .w{animation:fade-wave 2s ease-in-out infinite}
          svg:hover .a{animation:sine-flow 1.5s linear infinite}
        }
        @keyframes sine-flow{
          from{stroke-dashoffset:0}
          to{stroke-dashoffset:-120}
        }
        @keyframes fade-wave{
          0%,100%{opacity:0.5}
          50%{opacity:0.2}
        }
      `}</style>
      <path className="w" d="M6 40 C14 20, 22 20, 30 40 S46 60, 58 32" />
      <path className="a" d="M6 32 C14 12, 22 12, 30 32 S46 52, 58 24" />
    </svg>
  );
}

/** IDE MCP — docking handshake */
export function IdeDockIcon({ className, title = "IDE MCP" }: IconProps) {
  return (
    <svg viewBox="0 0 140 56" className={className} role="img" aria-label={title}>
      <style>{`
        .b{fill:#0f172a;stroke:#1f2937;stroke-width:1.5;rx:8}
        .l{stroke:currentColor;stroke-width:2;fill:none;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .45s}
        .p{transform-box:fill-box;transform-origin:center;transition:transform .45s}
        text{font:600 12px ui-sans-serif,system-ui,Inter;fill:#94a3b8}
        @media (prefers-reduced-motion:no-preference){ svg:hover .p{transform:translateX(14px)} svg:hover .l{stroke-dashoffset:0} }
      `}</style>
      <rect className="b p" x="8" y="12" width="56" height="32" />
      <text x="22" y="32">Agent</text>
      <rect className="b" x="76" y="12" width="56" height="32" />
      <text x="92" y="32">MCP</text>
      <path className="l" d="M64 28 L76 28" />
    </svg>
  );
}

/** WHY #1 — capabilities (trace lines) */
export function CapabilitiesIcon({ className, title = "Enhanced capabilities" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <style>{`
        .t{stroke:#94a3b8;stroke-width:1.6;fill:none}
        .a{stroke:currentColor;stroke-width:2;fill:none;stroke-dasharray:40;stroke-dashoffset:40}
        @media (prefers-reduced-motion:no-preference){ svg:hover .a{animation:d .5s ease forwards}}
        @keyframes d{to{stroke-dashoffset:0}}
      `}</style>
      <path className="t" d="M8 24 H56"/>
      <path className="t" d="M8 34 H56"/>
      <path className="t" d="M8 44 H56"/>
      <path className="a" d="M12 34 H40"/>
    </svg>
  );
}

/** WHY #2 — production-ready (shield + heartbeat) */
export function ProductionIcon({ className, title = "Production ready" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <style>{`
        .s{fill:none;stroke:#94a3b8;stroke-width:1.8}
        .h{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
        @media (prefers-reduced-motion:no-preference){ svg:hover .h{filter:brightness(1.1)} }
      `}</style>
      <path className="s" d="M32 8 L50 16 V32 C50 42 42 50 32 54 C22 50 14 42 14 32 V16 Z"/>
      <path className="h" d="M18 32 H26 L30 26 L34 38 L38 32 H46"/>
    </svg>
  );
}

/** WHY #3 — integration (plug to port) */
export function IntegrationIcon({ className, title = "Easy integration" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <style>{`
        .p{fill:none;stroke:#94a3b8;stroke-width:1.8;stroke-linecap:round}
        .a{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-dasharray:36;stroke-dashoffset:36;transition:stroke-dashoffset .4s}
        @media (prefers-reduced-motion:no-preference){ svg:hover .a{stroke-dashoffset:0} }
      `}</style>
      <path className="p" d="M22 24 v8 h6 v-8"/>
      <path className="p" d="M42 24 v8 h-6 v-8"/>
      <path className="a" d="M28 28 H36"/>
    </svg>
  );
}