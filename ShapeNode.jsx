import React from 'react';
import { wrapText } from './geometry';

/**
 * ShapeNode component renders the 4 distinct node shapes:
 * - terminator: stadium shape (rect with rx = h / 2)
 * - process: rounded rectangle (rx = ry >= 10)
 * - decision: diamond (polygon)
 * - io: parallelogram (polygon skewed by 12px)
 */
export default function ShapeNode({ node }) {
  const { id, type, label, x, y, w, h } = node;
  const hw = w / 2;
  const hh = h / 2;

  // Manual character estimation for clean multi-line wrapping
  const maxChars = type === 'decision' ? 18 : type === 'terminator' ? 12 : 22;
  const lines = wrapText(label, maxChars);
  const fontSize = type === 'terminator' ? 8.5 : 7.5;
  const lineHeight = fontSize + 2.5;
  const totalTextHeight = lines.length * lineHeight;
  const textStartY = y - (totalTextHeight / 2) + (fontSize * 0.8);

  const commonProps = {
    fill: '#FFFFFF',
    stroke: '#000000',
    strokeWidth: 1.2,
    id: `node-${id}`,
  };

  return (
    <g className="flowchart-node">
      {type === 'terminator' && (
        <rect
          x={x - hw}
          y={y - hh}
          width={w}
          height={h}
          rx={h / 2}
          ry={h / 2}
          {...commonProps}
        />
      )}

      {type === 'process' && (
        <rect
          x={x - hw}
          y={y - hh}
          width={w}
          height={h}
          rx={10}
          ry={10}
          {...commonProps}
        />
      )}

      {type === 'decision' && (
        <polygon
          points={`${x},${y - hh} ${x + hw},${y} ${x},${y + hh} ${x - hw},${y}`}
          {...commonProps}
        />
      )}

      {type === 'io' && (
        <polygon
          points={`${x - hw + 10},${y - hh} ${x + hw},${y - hh} ${x + hw - 10},${y + hh} ${x - hw},${y + hh}`}
          {...commonProps}
        />
      )}

      {/* Node Text with tspans */}
      <text
        x={x}
        y={textStartY}
        fontFamily="'Times New Roman', Times, serif"
        fontSize={fontSize}
        fill="#000000"
        textAnchor="middle"
        dominantBaseline="central"
        pointerEvents="none"
      >
        {lines.map((line, idx) => (
          <tspan
            key={idx}
            x={x}
            y={textStartY + idx * lineHeight}
            textAnchor="middle"
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}
