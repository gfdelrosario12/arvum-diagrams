'use client';

import React, { useMemo, useState, useCallback, useRef } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomTerminatorNode from './nodes/CustomTerminatorNode';
import CustomFlowNode from './nodes/CustomFlowNode';
import CustomDecisionNode from './nodes/CustomDecisionNode';
import CustomInputOutputNode from './nodes/CustomInputOutputNode';
import LoopBackEdge from './edges/LoopBackEdge';
import CorridorEdge from './edges/CorridorEdge';
import DiagramToolbar from './ui/DiagramToolbar';
import DiagramSidebar from './ui/DiagramSidebar';
import { getLayoutedElements } from '../layoutHelper';

function FlowDiagramContent() {
  const { nodes: initialNodes, edges: initialEdges, sectionHeadings, sectionBounds } = useMemo(
    () => getLayoutedElements(),
    []
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const { zoomIn, zoomOut, fitView, setCenter, setViewport } = useReactFlow();

  const nodeTypes = useMemo(
    () => ({
      terminator: CustomTerminatorNode,
      process: CustomFlowNode,
      decision: CustomDecisionNode,
      io: CustomInputOutputNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      loopback: LoopBackEdge,
      corridor: CorridorEdge,
    }),
    []
  );

  // Jump to section in viewport
  const handleSelectSection = useCallback(
    (sectionId: number) => {
      setActiveSection(sectionId);
      const b = (sectionBounds as Record<number, { minX: number; minY: number; maxX: number; maxY: number; centerX: number; centerY: number }>)[sectionId];
      if (b) {
        setCenter(b.centerX, b.centerY, { zoom: 0.9, duration: 800 });
      }
    },
    [sectionBounds, setCenter]
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
    link.download = 'arvalink-workflow.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-white overflow-hidden">
      {/* Top Navigation Toolbar */}
      <DiagramToolbar
        onZoomIn={() => zoomIn({ duration: 300 })}
        onZoomOut={() => zoomOut({ duration: 300 })}
        onFitView={() => fitView({ padding: 0.15, duration: 600 })}
        onResetView={() => setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 400 })}
        onDownloadSvg={handleDownloadSvg}
        onPrint={handlePrint}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Flow Viewport Canvas */}
      <div className="flex-1 w-full h-full relative bg-white" ref={reactFlowWrapper}>
        {/* Section Quick Navigator Sidebar */}
        <DiagramSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />

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
            type: 'smoothstep',
            style: { stroke: '#000000', strokeWidth: 1.2 },
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

export default function FlowDiagram() {
  return (
    <ReactFlowProvider>
      <FlowDiagramContent />
    </ReactFlowProvider>
  );
}
