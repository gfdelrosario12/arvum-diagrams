import React from 'react';
import {
  EdgeProps,
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
} from '@xyflow/react';

interface StraightBlockEdgeData {
  label?: string;
  sublabel?: string;
  isFeedback?: boolean;
  isControl?: boolean;
  labelOffsetY?: number;
  labelOffsetX?: number;
  waypoints?: Array<{ x: number; y: number }>;
}

export default function StraightBlockEdge({
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
  const edgeData = data as StraightBlockEdgeData | undefined;

  let edgePath = '';
  let defaultLabelX = (sourceX + targetX) / 2;
  let defaultLabelY = (sourceY + targetY) / 2;

  if (edgeData?.waypoints && edgeData.waypoints.length > 0) {
    const pts = [{ x: sourceX, y: sourceY }, ...edgeData.waypoints, { x: targetX, y: targetY }];
    edgePath = `M ${pts[0].x} ${pts[0].y} ` + pts.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ');
    // Default label to midpoint of middle segment
    const midIdx = Math.floor(pts.length / 2);
    defaultLabelX = (pts[midIdx - 1].x + pts[midIdx].x) / 2;
    defaultLabelY = (pts[midIdx - 1].y + pts[midIdx].y) / 2;
  } else {
    const [path, lx, ly] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: 0, // Sharp orthogonal routing for formal engineering block diagrams
    });
    edgePath = path;
    defaultLabelX = lx;
    defaultLabelY = ly;
  }

  const finalLabelX = defaultLabelX + (edgeData?.labelOffsetX || 0);
  const finalLabelY = defaultLabelY + (edgeData?.labelOffsetY || 0);

  const isFeedback = edgeData?.isFeedback;
  const isControl = edgeData?.isControl;

  const strokeDasharray = isFeedback ? '4,4' : undefined;
  const strokeWidth = isControl ? 1.6 : 1.3;

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          ...style,
          stroke: '#000000',
          strokeWidth,
          strokeDasharray,
        }}
        markerEnd={markerEnd}
      />
      {edgeData?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${finalLabelX}px, ${finalLabelY}px)`,
              pointerEvents: 'all',
            }}
            className={`bg-white px-2 py-0.5 border ${
              isFeedback ? 'border-dashed border-neutral-600' : 'border-black'
            } rounded-[2px] select-none z-30 shadow-none`}
          >
            <span
              className="text-[10px] font-bold text-black font-serif whitespace-nowrap block tracking-tight"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {edgeData.label}
            </span>
            {edgeData.sublabel && (
              <span
                className="text-[8.5px] text-neutral-600 font-mono whitespace-nowrap block text-center"
              >
                {edgeData.sublabel}
              </span>
            )}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
