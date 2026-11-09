import React from 'react';

export interface GroupNodeData {
  title?: string;
}

export default function CustomGroupNode({ data }: { data: GroupNodeData }) {
  return (
    <div className="w-full h-full border border-black border-[1.5px] rounded-[6px] bg-neutral-50/25 p-3 select-none pointer-events-none">
      {data.title && (
        <div className="border-b border-black pb-1.5 mb-2 bg-neutral-100/90 px-3 py-1.5 -mt-1 -mx-1 rounded-t-[4px]">
          <span
            className="text-[12px] font-bold tracking-wider text-black uppercase"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {data.title}
          </span>
        </div>
      )}
    </div>
  );
}
