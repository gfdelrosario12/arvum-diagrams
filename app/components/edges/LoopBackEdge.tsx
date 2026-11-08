import React from 'react';
import {
  EdgeProps,
  BaseEdge,
  getSmoothStepPath,
  EdgeLabelRenderer,
} from '@xyflow/react';

export default function LoopBackEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
  data,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 8,
  });

  // Place the label cleanly along the incoming horizontal segment, with comfortable margins:
  // targetX is the left apex of node G (Select Desired Function).
  // With targetX = 505 and label width ~130px, positioning at targetX - 90 gives a clear 25px gap from node G.
  const labelX = targetX - 90;
  const labelY = targetY;
  const labelText = (data?.label as string) || 'Loop: Continue System';

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="bg-white px-2.5 py-1 border border-black rounded-[3px] shadow-sm select-none z-20"
        >
          <span
            className="text-[11px] font-semibold text-black font-serif whitespace-nowrap block tracking-tight"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {labelText}
          </span>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
