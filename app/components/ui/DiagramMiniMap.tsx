import React from 'react';
import { MiniMap } from '@xyflow/react';

export default function DiagramMiniMap() {
  return (
    <MiniMap
      nodeStrokeColor="#000000"
      nodeColor="#ffffff"
      nodeBorderRadius={2}
      maskColor="rgba(240, 240, 240, 0.65)"
      className="!border !border-black !rounded !shadow-sm !bottom-4 !right-4 !w-48 !h-32 bg-white"
    />
  );
}
