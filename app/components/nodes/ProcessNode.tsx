import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface ProcessNodeData {
  label: string;
}

export default function ProcessNode({ data }: { data: ProcessNodeData }) {
  return (
    <div className="relative flex items-center justify-center min-w-[140px] max-w-[200px] min-h-[40px] px-3 py-2 bg-white border border-black rounded-[8px] select-none shadow-none">
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
        className="text-[12px] leading-[1.25] text-black text-center font-serif whitespace-pre-line"
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
