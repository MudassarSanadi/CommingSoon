import React from "react";


import farmerDigitalIdentity from "../assets/ecosystem-icons/01_farmer_digital_identity.svg";
import cattleDigitalTag from "../assets/ecosystem-icons/02_cattle_digital_tag.svg";
import breedingAnalytics from "../assets/ecosystem-icons/03_breeding_analytics.svg";
import milkTemperatureControl from "../assets/ecosystem-icons/04_milk_temperature_control.svg";
import digitalWeighingTransaction from "../assets/ecosystem-icons/05_digital_weighing_transaction.svg";
import milkQualityDigitalLab from "../assets/ecosystem-icons/06_milk_quality_digital_lab.svg";
import collectionCentreAutomation from "../assets/ecosystem-icons/07_collection_centre_automation.svg";
import iotEdgeGateway from "../assets/ecosystem-icons/08_iot_edge_gateway.svg";
import bulkTankIntelligence from "../assets/ecosystem-icons/09_bulk_tank_intelligence.svg";
import dairyRouteTraceability from "../assets/ecosystem-icons/10_dairy_route_traceability.svg";

import dairyCloudCommand from "../assets/ecosystem-icons/11_dairy_cloud_command.svg";

export type EcosystemNode = {
  key: string;
  label: string;
  illustration: string;
};

export const ecosystemNodes: EcosystemNode[] = [
  { key: "farmerDigitalIdentity", label: "Farmer Digital\nIdentity", illustration: "farmerDigitalIdentity" },
  { key: "cattleDigitalTag", label: "Cattle Digital\nTag", illustration: "cattleDigitalTag" },
  { key: "breedingAnalytics", label: "Breeding\nAnalytics", illustration: "breedingAnalytics" },
  { key: "milkTemperatureControl", label: "Milk Temperature\nControl", illustration: "milkTemperatureControl" },
  { key: "digitalWeighingTransaction", label: "Digital Weighing\nTransaction", illustration: "digitalWeighingTransaction" },
  { key: "milkQualityDigitalLab", label: "Milk Quality\nDigital Lab", illustration: "milkQualityDigitalLab" },
  { key: "collectionCentreAutomation", label: "Collection Centre\nAutomation", illustration: "collectionCentreAutomation" },
  { key: "iotEdgeGateway", label: "IoT Edge\nGateway", illustration: "iotEdgeGateway" },
  { key: "bulkTankIntelligence", label: "Bulk Tank\nIntelligence", illustration: "bulkTankIntelligence" },
  { key: "dairyRouteTraceability", label: "Dairy Route\nTraceability", illustration: "dairyRouteTraceability" },
];

const iconSrc: Record<string, string> = {
  farmerDigitalIdentity,
  cattleDigitalTag,
  breedingAnalytics,
  milkTemperatureControl,
  digitalWeighingTransaction,
  milkQualityDigitalLab,
  collectionCentreAutomation,
  iotEdgeGateway,
  bulkTankIntelligence,
  dairyRouteTraceability,
};



const positions = [
  100,
  270,
  440,
  610,
  780,
  950,
  1120,
  1290,
  1460,
  1630,
];



const HUB_X = 865;
const HUB_WIDTH = 340;
const HUB_HEIGHT = 258;
const HUB_TOP_Y = 5;
const HUB_BASE_Y = HUB_TOP_Y + HUB_HEIGHT * 0.62; 
const ICON_TOP_Y = 300;


function arcControlY(x: number) {
  const distance = Math.abs(x - HUB_X);
  const maxDistance = Math.max(
    ...positions.map((position) => Math.abs(position - HUB_X))
  );
  const minControlY = 140;
  const maxControlY = 220;
  const t = distance / maxDistance;
  return maxControlY - t * (maxControlY - minControlY);
}

const Arc: React.FC<{
  id: string;
  d: string;
  delay: number;
  duration: number;
}> = ({ id, d, delay, duration }) => (
  <g>
    <path
      id={id}
      d={d}
      fill="none"
      stroke="#8582ba"
      strokeWidth="1.4"
      strokeDasharray="2 5"
      strokeOpacity="0.85"
    />
    <circle r="4.5" fill="none" stroke="#4d4a99" strokeWidth="1.5">
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      >
        <mpath href={`#${id}`} />
      </animateMotion>
    </circle>
    <circle r="2.2" fill="#211f5c">
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      >
        <mpath href={`#${id}`} />
      </animateMotion>
    </circle>
  </g>
);



const Arrow: React.FC<{ x: number }> = ({ x }) => (
  <g
    transform={`translate(${x},380)`}
    fill="none"
    stroke="#7775b7"
    strokeWidth="1.35"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M-10 0H10" />
    <path d="M4 -4L10 0L4 4" />
  </g>
);

/* =========================================================
   COLLECTION CLOUD
   Rendered AFTER the arcs in the main SVG tree so it visually
   covers the arc endpoints/tails, making the lines look like
   they originate from inside the cloud rather than poking out.
========================================================= */

const Hub = () => {
  return (
    <g transform={`translate(${HUB_X - HUB_WIDTH / 2}, ${HUB_TOP_Y})`}>
      <image
        href={dairyCloudCommand}
        x="0"
        y="0"
        width={HUB_WIDTH}
        height={HUB_HEIGHT}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
};

/* =========================================================
   MAIN COMPONENT

   FIX NOTES (why the diagram used to scroll on desktop):
   - The old wrapper had `overflow-x-auto` PLUS `min-w-[375px]`
     on the <svg>. A min-width on an element that already has
     `w-full` forces the browser to keep the SVG at its natural
     (unscaled) intrinsic size once the container gets narrower
     than the viewBox aspect implies, which produced a
     horizontal scrollbar and cut off the last 2 "DAIRY LEVEL"
     icons on normal desktop widths.
   - Fix: drop `overflow-x-auto` and the `min-w` class. With
     `w-full h-auto` + `preserveAspectRatio="xMidYMid meet"` the
     SVG now always scales DOWN to fit the container width, so
     every node stays visible with no scrollbar, on any screen
     size (mobile included).
   - If you still want a horizontal scroll fallback on very
     small screens instead of shrinking further, wrap in
     `<div className="w-full overflow-x-auto"><div className="min-w-[900px]">...svg...</div></div>`
     instead — but that reintroduces scrolling, so it's NOT
     used here since the goal was "no scroll, just scale down".
========================================================= */

const EcosystemDiagram: React.FC<{
  nodes?: EcosystemNode[];
}> = ({ nodes = ecosystemNodes }) => {
  const width = 1730;
  const height = 615;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="block w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Dairy ecosystem flow from farm to dairy"
      >
        <rect x="0" y="0" width={width} height={height} fill="#ffffff" />

     
        {nodes.map((node, index) => {
          const x = positions[index];
          const controlY = arcControlY(x);
          const controlX = (x + HUB_X) / 2;
          const id = `arc-${node.key}`;

          const d = `
            M ${x} ${ICON_TOP_Y}
            Q ${controlX} ${controlY},
            ${HUB_X} ${HUB_BASE_Y}
          `;

          const distance = Math.abs(x - HUB_X);
          const duration = 3.5 + (distance / 780) * 2.6;

          return (
            <Arc
              key={id}
              id={id}
              d={d}
              delay={index * 0.35}
              duration={duration}
            />
          );
        })}

    
        <Hub />

      
        {positions.slice(0, -1).map((x, index) => (
          <Arrow
            key={`arrow-${index}`}
            x={(x + positions[index + 1]) / 2}
          />
        ))}

        {nodes.map((node, index) => {
          const x = positions[index];
          const imgW = 130;
          const imgH = 130;

          return (
            <g key={node.key}>
              <image
                href={iconSrc[node.illustration]}
                x={x - imgW / 2}
                y={380 - imgH / 2}
                width={imgW}
                height={imgH}
                preserveAspectRatio="xMidYMid meet"
              />

              <text
                x={x}
                y="470"
                textAnchor="middle"
                fill="#343080"
                fontSize="13"
                fontWeight="600"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                {node.label.split("\n").map((line, lineIndex) => (
                  <tspan
                    key={lineIndex}
                    x={x}
                    dy={lineIndex === 0 ? 0 : 16}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        <text
          x="270"
          y="570"
          textAnchor="middle"
          fill="#343080"
          fontSize="19"
          fontWeight="700"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          FARM LEVEL
        </text>

        <text
          x="950"
          y="570"
          textAnchor="middle"
          fill="#343080"
          fontSize="19"
          fontWeight="700"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          COLLECTION CENTRE LEVEL
        </text>

        <text
          x="1545"
          y="570"
          textAnchor="middle"
          fill="#343080"
          fontSize="19"
          fontWeight="700"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          DAIRY LEVEL
        </text>
      </svg>
    </div>
  );
};

export default EcosystemDiagram;