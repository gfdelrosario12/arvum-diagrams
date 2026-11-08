import React from 'react';
import {
  EdgeProps,
  BaseEdge,
  EdgeLabelRenderer,
} from '@xyflow/react';

interface CorridorEdgeData {
  laneX: number;
  label?: string;
  labelOffsetY?: number; // absolute Y override for label
  targetPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export default function CorridorEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
  markerEnd,
  data,
}: EdgeProps) {
  const edgeData = data as CorridorEdgeData | undefined;
  const laneX = edgeData?.laneX ?? (sourceX > 600 ? 1185 : 60);
  const r = 8; // border radius for smooth bends

  // Direction indicators
  const sDir = laneX > sourceX ? 1 : -1;
  const tDir = targetX > laneX ? 1 : -1;
  const vDir = targetY > sourceY ? 1 : -1;

  let path = '';

  // Check if target is approached from Top
  const entersFromTop = edgeData?.targetPosition === 'top';

  if (entersFromTop) {
    const approachY = targetY - 30;
    const sweep1 = (sDir === 1 && vDir === 1) || (sDir === -1 && vDir === -1) ? 1 : 0;
    const sweep2 = (tDir === 1 && vDir === -1) || (tDir === -1 && vDir === 1) ? 1 : 0;
    const sweep3 = tDir === 1 ? 1 : 0;

    path =
      `M ${sourceX} ${sourceY} ` +
      `L ${laneX - sDir * r} ${sourceY} ` +
      `A ${r} ${r} 0 0 ${sweep1} ${laneX} ${sourceY + vDir * r} ` +
      `L ${laneX} ${approachY - vDir * r} ` +
      `A ${r} ${r} 0 0 ${sweep2} ${laneX + tDir * r} ${approachY} ` +
      `L ${targetX - tDir * r} ${approachY} ` +
      `A ${r} ${r} 0 0 ${sweep3} ${targetX} ${approachY + r} ` +
      `L ${targetX} ${targetY}`;
  } else if (Math.abs(sourceX - laneX) < 2) {
    // If source handle is already directly on the lane axis (e.g. exiting Bottom of an aligned node)
    const sweep = (tDir === 1 && vDir === -1) || (tDir === -1 && vDir === 1) ? 1 : 0;
    path =
      `M ${sourceX} ${sourceY} ` +
      `L ${sourceX} ${targetY - vDir * r} ` +
      `A ${r} ${r} 0 0 ${sweep} ${sourceX + tDir * r} ${targetY} ` +
      `L ${targetX} ${targetY}`;
  } else {
    // Normal 2-bend corridor path: Horizontal to lane -> Vertical along lane -> Horizontal to target
    const sweep1 = (sDir === 1 && vDir === 1) || (sDir === -1 && vDir === -1) ? 1 : 0;
    const sweep2 = (tDir === 1 && vDir === -1) || (tDir === -1 && vDir === 1) ? 1 : 0;

    path =
      `M ${sourceX} ${sourceY} ` +
      `L ${laneX - sDir * r} ${sourceY} ` +
      `A ${r} ${r} 0 0 ${sweep1} ${laneX} ${sourceY + vDir * r} ` +
      `L ${laneX} ${targetY - vDir * r} ` +
      `A ${r} ${r} 0 0 ${sweep2} ${laneX + tDir * r} ${targetY} ` +
      `L ${targetX} ${targetY}`;
  }

  // Label positioning along the clear corridor lane
  const labelText = edgeData?.label;
  const labelX = laneX;
  let labelY = sourceY + vDir * 40;

  if (edgeData?.labelOffsetY !== undefined) {
    labelY = edgeData.labelOffsetY;
  }

  return (
    <>
      <BaseEdge id={id} path={path} style={style} markerEnd={markerEnd} />
      {labelText && (
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
      )}
    </>
  );
}
