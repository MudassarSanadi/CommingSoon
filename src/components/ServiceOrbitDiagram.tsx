import React from "react";
import {
  Code2,
  LayoutGrid,
  Smartphone,
  Building2,
  Users,
  ShoppingBag,
  Shield,
  Cloud,
  Database,
  Milk,
  type LucideIcon,
} from "lucide-react";

interface OrbitNode {
  icon: LucideIcon;
  label: string;
  variant: "software" | "machinery";
}

export const serviceOrbitNodes: OrbitNode[] = [
  { icon: Code2, label: "Custom Software", variant: "software" },
  { icon: LayoutGrid, label: "Web Development", variant: "software" },
  { icon: Smartphone, label: "Mobile Apps", variant: "software" },
  { icon: Building2, label: "ERP Solutions", variant: "software" },
  { icon: Users, label: "CRM Systems", variant: "software" },
  { icon: ShoppingBag, label: "POS & Billing", variant: "software" },
  { icon: Shield, label: "Automation", variant: "software" },
  { icon: Cloud, label: "Cloud Apps", variant: "software" },
  { icon: Database, label: "Database & Backend", variant: "software" },
  { icon: Milk, label: "Dairy Machinery", variant: "machinery" },
];

interface ServiceOrbitDiagramProps {
  nodes?: OrbitNode[];
}

const RADIUS_PCT = 40;
const HUB_SIZE_PCT = 20;

const ServiceOrbitDiagram: React.FC<ServiceOrbitDiagramProps> = ({
  nodes = serviceOrbitNodes,
}) => {
  const total = nodes.length;

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square sm:aspect-[4/3.2] md:aspect-4/3 px-2 sm:px-6 select-none">
      <style>{`
        @keyframes ls-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ls-pulse-ring {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @keyframes ls-rise-in {
          from { opacity: 0; transform: translate(-50%, -40%) scale(0.6); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes ls-hub-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .ls-orbit-ring {
          animation: ls-spin-slow 40s linear infinite;
        }
        .ls-halo {
          animation: ls-pulse-ring 3.2s ease-in-out infinite;
        }
        .ls-node-enter {
          animation: ls-rise-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ls-hub-enter {
          animation: ls-hub-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .ls-orbit-ring, .ls-halo, .ls-node-enter, .ls-hub-enter {
            animation: none !important;
          }
        }
      `}</style>

      {/* Segmented hex-dash orbit ring, slowly rotating */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none ls-orbit-ring"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ transformOrigin: "50% 50%" }}
      >
        <circle
          cx="50"
          cy="50"
          r={RADIUS_PCT}
          fill="none"
          stroke="#C7D2FE"
          strokeWidth="0.35"
          strokeDasharray="0.5 4.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Straight spokes from hub to each node */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {nodes.map((_, i) => {
          const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + RADIUS_PCT * Math.cos(angle);
          const y = 50 + RADIUS_PCT * Math.sin(angle) * 0.82;
          const hx = 50 + (HUB_SIZE_PCT / 2 - 1) * Math.cos(angle);
          const hy = 50 + (HUB_SIZE_PCT / 2 - 1) * Math.sin(angle) * 0.82;
          return (
            <line
              key={i}
              x1={hx}
              y1={hy}
              x2={x}
              y2={y}
              stroke="#E0E7FF"
              strokeWidth="0.25"
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute rounded-full pointer-events-none ls-halo"
        style={{
          width: `${HUB_SIZE_PCT * 1.5}%`,
          height: `${HUB_SIZE_PCT * 1.5}%`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 70%)",
        }}
      />
      <div
        className="absolute rounded-full flex flex-col items-center justify-center text-center shadow-xl ls-hub-enter"
        style={{
          width: `${HUB_SIZE_PCT}%`,
          height: `${HUB_SIZE_PCT}%`,
          left: "50%",
          top: "50%",
          background: "linear-gradient(135deg, #4338CA 0%, #3B82F6 100%)",
          boxShadow:
            "0 10px 30px -5px rgba(67,56,202,0.45), inset 0 1px 1px rgba(255,255,255,0.25)",
          animationDelay: "0.05s",
        }}
      >
        <span className="font-syne font-bold text-white text-[clamp(10px,1.6vw,16px)] leading-tight px-2">
          LogicShell
        </span>
        <span className="text-indigo-100 text-[clamp(7px,1vw,10px)] mt-0.5 tracking-wide">
          Digital Ecosystem
        </span>
      </div>

      {/* Orbiting service nodes: hexagonal chips, staggered entrance */}
      {nodes.map((node, i) => {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
        const xPct = 50 + RADIUS_PCT * Math.cos(angle);
        const yPct = 50 + RADIUS_PCT * Math.sin(angle) * 0.82;
        const isMachinery = node.variant === "machinery";
        const delay = 0.15 + i * 0.06;

        return (
          <div
            key={node.label}
            className="absolute flex flex-col items-center gap-1.5 group ls-node-enter"
            style={{
              left: `${xPct}%`,
              top: `${yPct}%`,
              animationDelay: `${delay}s`,
            }}
          >
            <div
              className="relative flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5"
              style={{
                width: "clamp(40px, 8vw, 58px)",
                height: "clamp(40px, 8vw, 58px)",
                clipPath:
                  "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                background: "linear-gradient(160deg, #EEF2FF 0%, #E0E7FF 100%)",
                border: "1px solid #A5B4FC",
                boxShadow: "0 1px 3px rgba(15,23,42,0.08)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath:
                    "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                  background: isMachinery
                    ? "linear-gradient(160deg, #6366F1 0%, #4338CA 100%)"
                    : "linear-gradient(160deg, #3B82F6 0%, #2563EB 100%)",
                }}
              />
              <node.icon
                className="relative z-10 transition-colors duration-300 text-indigo-500 group-hover:text-white"
                style={{
                  width: "clamp(16px,3.2vw,24px)",
                  height: "clamp(16px,3.2vw,24px)",
                }}
              />
            </div>
            <span className="text-[clamp(8px,1.3vw,12px)] font-semibold text-slate-600 text-center leading-tight group-hover:text-slate-900 transition-colors max-w-17.5 sm:max-w-24">
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceOrbitDiagram;