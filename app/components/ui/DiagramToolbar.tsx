'use client';

import React from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Download,
  Printer,
  Layers,
  GitBranch,
} from 'lucide-react';

interface DiagramToolbarProps {
  activeTab: 'flowchart' | 'block';
  onTabChange: (tab: 'flowchart' | 'block') => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitView: () => void;
  onResetView: () => void;
  onDownloadSvg: () => void;
  onDownloadPng?: () => void;
  onPrint: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export default function DiagramToolbar({
  activeTab,
  onTabChange,
  onZoomIn,
  onZoomOut,
  onFitView,
  onResetView,
  onDownloadSvg,
  onDownloadPng,
  onPrint,
  onToggleSidebar,
  isSidebarOpen = false,
}: DiagramToolbarProps) {
  return (
    <header className="flex flex-wrap items-center justify-between px-6 py-2.5 border-b border-black bg-white select-none z-20 gap-3">
      {/* Title & Metadata */}
      <div className="flex items-center gap-3">
        {activeTab === 'flowchart' && onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className={`p-2 rounded border border-black hover:bg-neutral-100 transition-colors ${
              isSidebarOpen ? 'bg-neutral-200' : 'bg-white'
            }`}
            title="Toggle Section Navigator"
            aria-label="Toggle Section Navigator"
          >
            <Layers className="w-4 h-4 text-black" />
          </button>
        )}

        <div>
          {activeTab === 'flowchart' ? (
            <>
              <h1
                className="text-base font-bold text-black tracking-wide font-serif leading-none"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                ArvaLink Agricultural IoT System Flowchart
              </h1>
              <p className="text-[11px] text-neutral-600 font-serif mt-1">
                57 Nodes • 72 Connections • Orthogonal Edge Routing
              </p>
            </>
          ) : (
            <>
              <h1
                className="text-base font-bold text-black tracking-wide font-serif leading-none"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                ARVACORE SYSTEM BLOCK DIAGRAM
              </h1>
              <p className="text-[11px] text-neutral-600 font-serif mt-1 italic">
                Hardware Architecture, Data Communication, Processing, and Irrigation Control
              </p>
            </>
          )}
        </div>
      </div>

      {/* Mode / Tab Switcher (Prominent Segmented Control) */}
      <div className="flex items-center border border-black rounded-[4px] p-0.5 bg-neutral-100 shadow-xs">
        <button
          type="button"
          onClick={() => onTabChange('flowchart')}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-serif font-bold rounded-[3px] transition-all ${
            activeTab === 'flowchart'
              ? 'bg-black text-white shadow-xs'
              : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
          }`}
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          <GitBranch className="w-3.5 h-3.5" />
          <span>Process Flowchart</span>
        </button>
        <button
          type="button"
          onClick={() => onTabChange('block')}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-serif font-bold rounded-[3px] transition-all ${
            activeTab === 'block'
              ? 'bg-black text-white shadow-xs'
              : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
          }`}
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>System Block Diagram</span>
        </button>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <button
          type="button"
          onClick={onZoomOut}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-serif font-medium text-black bg-white border border-black rounded hover:bg-neutral-100 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Zoom Out</span>
        </button>

        <button
          type="button"
          onClick={onZoomIn}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-serif font-medium text-black bg-white border border-black rounded hover:bg-neutral-100 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Zoom In</span>
        </button>

        <button
          type="button"
          onClick={onFitView}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-serif font-medium text-black bg-white border border-black rounded hover:bg-neutral-100 transition-colors"
          title="Fit Diagram to Screen"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Fit View</span>
        </button>

        <button
          type="button"
          onClick={onResetView}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-serif font-medium text-black bg-white border border-black rounded hover:bg-neutral-100 transition-colors"
          title="Reset View (100%)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>

        <div className="w-[1px] h-5 bg-neutral-300 mx-1" />

        {onDownloadPng && (
          <button
            type="button"
            onClick={onDownloadPng}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-serif font-bold text-white bg-black border border-black rounded hover:bg-neutral-800 transition-colors shadow-xs"
            title="Download PNG with White Background"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PNG</span>
          </button>
        )}

        <button
          type="button"
          onClick={onDownloadSvg}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-serif font-medium text-black bg-white border border-black rounded hover:bg-neutral-100 transition-colors"
          title="Download SVG Diagram"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Download SVG</span>
        </button>

        <button
          type="button"
          onClick={onPrint}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-serif font-semibold text-white bg-black rounded hover:bg-neutral-800 transition-colors"
          title="Print or Export PDF"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / PDF</span>
        </button>
      </div>
    </header>
  );
}
