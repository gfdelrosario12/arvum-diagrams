import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface DecisionNodeData {
  label: string;
}

export default function DecisionNode({ data }: { data: DecisionNodeData }) {
  return (
    <div className="relative flex items-center justify-center w-[130px] h-[80px] select-none">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 130 80"
      >
        <polygon
          points="65,2 128,40 65,78 2,40"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="1.2"
        />
      </svg>

      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ top: 2 }}
      />
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: 2 }}
      />
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ right: 2 }}
      />

      <div
        className="relative z-10 w-[84px] px-1 text-center text-[11px] leading-[1.2] text-black font-serif whitespace-pre-line"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {data.label}
      </div>

      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ right: 2 }}
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ bottom: 2 }}
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
        style={{ left: 2 }}
      />
    </div>
  );
}
