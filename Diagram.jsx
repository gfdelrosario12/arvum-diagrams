import React, { useMemo } from 'react';
import { NODES, EDGES, SECTIONS } from './diagramData';
import { getAnchor, pointsToSvgPath } from './geometry';
import ShapeNode from './ShapeNode';
import './Diagram.css';

/**
 * Diagram component renders the complete 57-node / 72-connection ArvaLink flowchart.
 * Pure SVG, fully data-driven, black-and-white formal manuscript styling.
 */
export default function Diagram() {
  // Dev-only validation assertions
  if (process.env.NODE_ENV !== 'production') {
    if (NODES.length !== 57) {
      console.warn(`[Diagram Validation Warning]: Expected 57 NODES, got ${NODES.length}`);
    }
    if (EDGES.length !== 72) {
      console.warn(`[Diagram Validation Warning]: Expected 72 EDGES, got ${EDGES.length}`);
    }
    const nodeMap = new Set(NODES.map((n) => n.id));
    EDGES.forEach((e) => {
      if (!nodeMap.has(e.from)) {
        console.warn(`[Diagram Validation Warning]: Edge references missing 'from' node id '${e.from}'`);
      }
      if (!nodeMap.has(e.to)) {
        console.warn(`[Diagram Validation Warning]: Edge references missing 'to' node id '${e.to}'`);
      }
    });
  }

  // Pre-index nodes for O(1) geometry lookup
  const nodeIndex = useMemo(() => {
    const map = new Map();
    NODES.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="diagram-page-container">
      <div className="diagram-toolbar">
        <button
          type="button"
          onClick={handlePrint}
          className="print-button"
          aria-label="Print or save flowchart as PDF"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="diagram-svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 770 1020"
          className="diagram-svg"
          preserveAspectRatio="xMidYMid meet"
          aria-label="ArvaLink Agricultural IoT System Complete Process Flowchart"
          role="img"
        >
          <title>ArvaLink Agricultural IoT System Complete Process Flowchart</title>

          {/* Definitions: Marker Arrowhead */}
          <defs>
            <marker
              id="arrowhead"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <polygon points="0 1.5, 9 5, 0 8.5" fill="#000000" />
            </marker>
          </defs>

          {/* Section Headings (Exact Text, Bold 11px, No boxes/dividers) */}
          <g className="section-headings">
            {SECTIONS.map((sec) => (
              <text
                key={sec.id}
                x={30}
                y={sec.y}
                className="section-heading-text"
              >
                {sec.title}
              </text>
            ))}
          </g>

          {/* Connectors & Edges (72 Connections) */}
          <g className="flowchart-edges">
            {EDGES.map((edge, idx) => {
              const fromNode = nodeIndex.get(edge.from);
              const toNode = nodeIndex.get(edge.to);
              if (!fromNode || !toNode) return null;

              let points = [];
              if (edge.points && edge.points.length > 0) {
                points = edge.points;
              } else {
                // Straight connection
                const sideFrom = fromNode.y < toNode.y ? 'bottom' : fromNode.x < toNode.x ? 'right' : 'top';
                const sideTo = fromNode.y < toNode.y ? 'top' : fromNode.x < toNode.x ? 'left' : 'bottom';
                points = [getAnchor(fromNode, sideFrom), getAnchor(toNode, sideTo)];
              }

              const pathD = pointsToSvgPath(points);

              // Calculate edge label position near source (1st segment)
              let labelPos = null;
              if (edge.label && points.length >= 2) {
                const p0 = points[0];
                const p1 = points[1];
                const t = 0.35; // 35% along first segment
                const lx = p0.x + (p1.x - p0.x) * t;
                const ly = p0.y + (p1.y - p0.y) * t;

                // Adjust slightly perpendicular to line
                const isHoriz = Math.abs(p1.y - p0.y) < 1;
                labelPos = {
                  x: isHoriz ? lx : lx + 5,
                  y: isHoriz ? ly - 4 : ly,
                };
              }

              return (
                <g key={`edge-${edge.from}-${edge.to}-${idx}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.2"
                    markerEnd="url(#arrowhead)"
                  />
                  {edge.label && labelPos && (
                    <g className="edge-label-group">
                      <rect
                        x={labelPos.x - (edge.label.length * 2.3 + 4)}
                        y={labelPos.y - 6}
                        width={edge.label.length * 4.6 + 8}
                        height={11}
                        fill="#FFFFFF"
                        stroke="none"
                      />
                      <text
                        x={labelPos.x}
                        y={labelPos.y + 2.5}
                        className="edge-label-text"
                        textAnchor="middle"
                      >
                        {edge.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </g>

          {/* Nodes (57 Nodes) */}
          <g className="flowchart-nodes">
            {NODES.map((node) => (
              <ShapeNode key={node.id} node={node} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
