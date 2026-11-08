import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface DecisionNodeData {
  label: string;
}

export default function CustomDecisionNode({ data }: { data: DecisionNodeData }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full select-none">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,1 99,50 50,99 1,50"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Apex Handles */}
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ top: 1, left: '50%' }}
      />
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: 1, top: '50%' }}
      />
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ right: 1, top: '50%' }}
      />

      {/* Top-Left Facet Handle (X=15%, Y=35% touches polygon stroke: Y = 50 - X) */}
      <Handle
        type="target"
        id="top-left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: '15%', top: '35%' }}
      />

      {/* Bottom-Left Facet Handle (X=15%, Y=65% touches polygon stroke: Y = 50 + X) */}
      <Handle
        type="target"
        id="bottom-left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: '15%', top: '65%' }}
      />

      <div
        className="relative z-10 w-[72%] px-1 text-center text-[11.5px] leading-[1.2] text-black font-serif whitespace-pre-line"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {data.label}
      </div>

      {/* Apex Source Handles */}
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ top: 1, left: '50%' }}
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ bottom: 1, left: '50%' }}
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ right: 1, top: '50%' }}
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: 1, top: '50%' }}
      />

      {/* Facet Source Handles (strictly on diamond polygon stroke) */}
      <Handle
        type="source"
        id="top-left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: '15%', top: '35%' }}
      />
      <Handle
        type="source"
        id="bottom-left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: '15%', top: '65%' }}
      />
    </div>
  );
}
