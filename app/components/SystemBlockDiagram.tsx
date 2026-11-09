'use client';

import React, { useMemo, useCallback, useRef } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomBlockNode from './nodes/CustomBlockNode';
import CustomGroupNode from './nodes/CustomGroupNode';
import StraightBlockEdge from './edges/StraightBlockEdge';
import DiagramToolbar from './ui/DiagramToolbar';
import { BLOCK_NODES, BLOCK_EDGES } from '../systemBlockData';
import { downloadDiagramAsPng } from '../utils/downloadPng';

interface SystemBlockDiagramProps {
  activeTab: 'flowchart' | 'block';
  onTabChange: (tab: 'flowchart' | 'block') => void;
}

function SystemBlockDiagramContent({
  activeTab,
  onTabChange,
}: SystemBlockDiagramProps) {
  const [nodes, , onNodesChange] = useNodesState(BLOCK_NODES);
  const [edges, , onEdgesChange] = useEdgesState(BLOCK_EDGES);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const { zoomIn, zoomOut, fitView, setViewport } = useReactFlow();

  const nodeTypes = useMemo(
    () => ({
      blockNode: CustomBlockNode,
      groupNode: CustomGroupNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      straightBlock: StraightBlockEdge,
    }),
    []
  );

  // Download SVG
  const handleDownloadSvg = useCallback(() => {
    const svgElem = document.querySelector('.react-flow__viewport');
    if (!svgElem) return;
    const serializer = new XMLSerializer();
    const str = serializer.serializeToString(svgElem);
    const blob = new Blob([str], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'arvacore-system-block-diagram.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  // Download PNG with solid crisp white background
  const handleDownloadPng = useCallback(() => {
    downloadDiagramAsPng(nodes, 'arvacore-system-block-diagram.png', 60, 2);
  }, [nodes]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Top Navigation Toolbar */}
      <DiagramToolbar
        activeTab={activeTab}
        onTabChange={onTabChange}
        onZoomIn={() => zoomIn({ duration: 300 })}
        onZoomOut={() => zoomOut({ duration: 300 })}
        onFitView={() => fitView({ padding: 0.12, duration: 600 })}
        onResetView={() => setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 400 })}
        onDownloadSvg={handleDownloadSvg}
        onDownloadPng={handleDownloadPng}
        onPrint={handlePrint}
      />

      {/* Main Block Diagram Viewport Canvas - Identical Layout to Process Flowchart */}
      <div className="flex-1 w-full h-full relative bg-white" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          fitView
          fitViewOptions={{ padding: 0.12 }}
          minZoom={0.2}
          maxZoom={2.0}
          defaultEdgeOptions={{
            type: 'straightBlock',
            style: { stroke: '#000000', strokeWidth: 1.3 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 12,
              height: 12,
              color: '#000000',
            },
          }}
          className="bg-white"
        >
          <Controls
            showInteractive={false}
            className="!bg-white !border-black !border !rounded-sm !shadow-none !bottom-4 !left-4"
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default function SystemBlockDiagram({
  activeTab,
  onTabChange,
}: SystemBlockDiagramProps) {
  return (
    <ReactFlowProvider>
      <SystemBlockDiagramContent activeTab={activeTab} onTabChange={onTabChange} />
    </ReactFlowProvider>
  );
}
