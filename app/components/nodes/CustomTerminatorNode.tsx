import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface TerminatorNodeData {
  label: string;
}

export default function CustomTerminatorNode({ data }: { data: TerminatorNodeData }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full px-6 bg-white border-[1.4px] border-black rounded-full select-none shadow-none">
      <Handle
        type="target"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <span
        className="text-[12px] font-semibold tracking-wide text-black text-center font-serif whitespace-pre-line"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {data.label}
      </span>
      <Handle
        type="source"
        position={Position.Bottom}
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
        id="right"
        position={Position.Right}
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
