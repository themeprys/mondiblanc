"use client";

import { motion } from "framer-motion";
import type { Nexus, Ecosystem, NexusNode, EcosystemNode } from "@/types";

interface EcosystemDiagramProps {
  data: Nexus | Ecosystem;
}

type DiagramNode = NexusNode | EcosystemNode;

const DEFAULT_POSITIONS = [
  { x: 50, y: 12 },
  { x: 88, y: 35 },
  { x: 75, y: 78 },
  { x: 25, y: 78 },
  { x: 12, y: 35 },
];

function getNodePosition(
  node: DiagramNode,
  index: number,
): { x: number; y: number } {
  if ("position" in node && node.position) {
    return node.position;
  }
  return DEFAULT_POSITIONS[index] ?? DEFAULT_POSITIONS[0];
}

export function EcosystemDiagram({ data }: EcosystemDiagramProps) {
  const nodes = "nodes" in data ? data.nodes : [];
  const center = data.center;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        role="img"
        aria-label={`Ecosystem diagram centered on ${center}`}
      >
        {nodes.map((node, i) => {
          const pos = getNodePosition(node, i);
          return (
            <motion.line
              key={`line-${node.id}`}
              x1="50"
              y1="50"
              x2={pos.x}
              y2={pos.y}
              stroke="currentColor"
              strokeOpacity={0.15}
              strokeWidth={0.5}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          );
        })}

        <motion.circle
          cx="50"
          cy="50"
          r="12"
          className="fill-accent"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-[3px] font-medium"
        >
          {center.split(" ").map((word, i) => (
            <tspan key={i} x="50" dy={i === 0 ? -1.5 : 3.5}>
              {word}
            </tspan>
          ))}
        </text>

        {nodes.map((node, i) => {
          const pos = getNodePosition(node, i);
          return (
            <g key={node.id}>
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="8"
                className="fill-card stroke-border"
                strokeWidth={0.5}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-foreground text-[2.5px] font-medium"
              >
                {node.label.split(" ").length > 2
                  ? node.label.split(" ").map((word, j) => (
                      <tspan key={j} x={pos.x} dy={j === 0 ? -1.5 : 3}>
                        {word}
                      </tspan>
                    ))
                  : node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node) => (
          <div key={node.id} className="rounded-sm bg-card p-4">
            <h4 className="font-medium">{node.label}</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {node.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
