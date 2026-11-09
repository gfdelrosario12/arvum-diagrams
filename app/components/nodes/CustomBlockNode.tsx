import React from 'react';
import { Handle, Position } from '@xyflow/react';

export interface BlockNodeData {
  label: string;
  sublabel?: string;
  isProposed?: boolean;
}

export default function CustomBlockNode({ data }: { data: BlockNodeData }) {
  const isProposed = data.isProposed;

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-full px-3.5 py-2.5 bg-white border ${
        isProposed ? 'border-dashed border-neutral-600' : 'border-solid border-black'
      } border-[1.4px] rounded-[4px] select-none shadow-none text-center overflow-hidden`}
    >
      {/* Top handles */}
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="top"
        position={Position.Top}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="top-left"
        position={Position.Top}
        style={{ left: '25%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="top-right"
        position={Position.Top}
        style={{ left: '75%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />

      {/* Left handles */}
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="left-top"
        position={Position.Left}
        style={{ top: '25%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="left-bottom"
        position={Position.Left}
        style={{ top: '75%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="left-top"
        position={Position.Left}
        style={{ top: '25%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="left-bottom"
        position={Position.Left}
        style={{ top: '75%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />

      {/* Right handles */}
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="right-top"
        position={Position.Right}
        style={{ top: '25%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="target"
        id="right-bottom"
        position={Position.Right}
        style={{ top: '75%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="right-top"
        position={Position.Right}
        style={{ top: '25%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="right-bottom"
        position={Position.Right}
        style={{ top: '75%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />

      {/* Bottom handles */}
      <Handle
        type="target"
        id="bottom"
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
        id="bottom-left"
        position={Position.Bottom}
        style={{ left: '25%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />
      <Handle
        type="source"
        id="bottom-right"
        position={Position.Bottom}
        style={{ left: '75%' }}
        className="!w-2 !h-2 !bg-black !border-0 opacity-0"
      />

      <span
        className="text-[12.5px] font-bold text-black leading-snug whitespace-pre-line tracking-tight"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        {data.label}
      </span>

      {data.sublabel && (
        <span
          className="text-[10px] text-neutral-700 leading-tight mt-1.5 font-serif whitespace-pre-line tracking-tight"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          {data.sublabel}
        </span>
      )}
    </div>
  );
}
