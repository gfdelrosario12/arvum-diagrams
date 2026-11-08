import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface IoNodeData {
  label: string;
}

export default function IoNode({ data }: { data: IoNodeData }) {
  return (
    <div className="relative flex items-center justify-center min-w-[145px] max-w-[210px] min-h-[42px] px-5 py-2 select-none">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 200 50"
      >
        <polygon
          points="14,1 199,1 186,49 1,49"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="1.2"
        />
      </svg>

      <Handle
        type="target"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />

      <span
        className="relative z-10 text-[12px] leading-[1.25] text-black text-center font-serif whitespace-pre-line"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {data.label}
      </span>

      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
    </div>
  );
}
