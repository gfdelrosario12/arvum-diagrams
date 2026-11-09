'use client';

import React, { useState } from 'react';
import FlowDiagram from './components/FlowDiagram';
import SystemBlockDiagram from './components/SystemBlockDiagram';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'flowchart' | 'block'>('flowchart');

  return (
    <main className="w-screen h-screen overflow-hidden bg-white">
      {activeTab === 'flowchart' ? (
        <FlowDiagram activeTab="flowchart" onTabChange={setActiveTab} />
      ) : (
        <SystemBlockDiagram activeTab="block" onTabChange={setActiveTab} />
      )}
    </main>
  );
}
