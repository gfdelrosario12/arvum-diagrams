'use client';

import React from 'react';
import { Layers, ChevronRight, X } from 'lucide-react';

interface DiagramSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: number | null;
  onSelectSection: (sectionId: number) => void;
}

const SECTIONS_LIST = [
  {
    id: 1,
    title: '1. Core & Dashboard',
    desc: 'Authentication, Session Verification & Main Dashboard Navigation',
    nodesCount: 7,
  },
  {
    id: 2,
    title: '2. Farm Monitoring',
    desc: 'Live Telemetry Inspection (Ultrasonic Water Level & Soil Moisture)',
    nodesCount: 2,
  },
  {
    id: 3,
    title: '3. Arva AI Decision Support',
    desc: 'MCP Weather/Ag Norms, Field Readiness, AWD Planning & Interlocks',
    nodesCount: 36,
  },
  {
    id: 4,
    title: '4. Manual Irrigation & Interlocks',
    desc: 'Central Pump, 3-Gate Actuation, Sump Safeguards & Runtime Cutoff',
    nodesCount: 10,
  },
];

export default function DiagramSidebar({
  isOpen,
  onClose,
  activeSection,
  onSelectSection,
}: DiagramSidebarProps) {
  if (!isOpen) return null;

  return (
    <aside className="absolute left-4 top-16 bottom-4 w-72 bg-white border border-black shadow-lg rounded-md flex flex-col z-30 select-none overflow-hidden font-serif">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-black bg-neutral-50">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-black" />
          <span className="font-bold text-xs tracking-wide text-black uppercase">
            Section Navigator
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded hover:bg-neutral-200 transition-colors"
          title="Close Navigation"
        >
          <X className="w-4 h-4 text-black" />
        </button>
      </div>

      {/* Sections List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {SECTIONS_LIST.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => onSelectSection(sec.id)}
              className={`w-full text-left p-3 rounded border transition-all text-black flex flex-col gap-1 ${
                isActive
                  ? 'bg-neutral-100 border-black shadow-sm ring-1 ring-black'
                  : 'bg-white border-neutral-300 hover:border-black hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs">{sec.title}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5' : ''}`} />
              </div>
              <p className="text-[11px] text-neutral-600 leading-snug">
                {sec.desc}
              </p>
              <div className="mt-1 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                <span>{sec.nodesCount} Nodes</span>
                {isActive && <span className="font-semibold text-black">Active</span>}
              </div>
            </button>
          );
        })}
      </div>

      {/* Legend Footer */}
      <div className="p-3 border-t border-neutral-200 bg-neutral-50 text-[11px] text-neutral-700 space-y-1.5">
        <div className="font-bold text-black uppercase text-[10px] tracking-wider">
          Standard Shape Conventions
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-2 rounded-full border border-black bg-white inline-block" />
            <span>Terminator</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-2 rounded-[2px] border border-black bg-white inline-block" />
            <span>Process</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rotate-45 border border-black bg-white inline-block" />
            <span>Decision</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-2 skew-x-[-12deg] border border-black bg-white inline-block" />
            <span>Input / Output</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
