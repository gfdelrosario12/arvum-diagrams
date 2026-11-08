import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface TerminatorNodeData {
  label: string;
}

export default function TerminatorNode({ data }: { data: TerminatorNodeData }) {
  return (
    <div className="relative flex items-center justify-center min-w-[100px] h-[36px] px-6 bg-white border border-black rounded-full select-none shadow-none">
      <Handle
        type="target"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <span
        className="text-[12px] leading-tight text-black text-center font-serif whitespace-pre-line"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {data.label}
      </span>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
    </div>
  );
}
