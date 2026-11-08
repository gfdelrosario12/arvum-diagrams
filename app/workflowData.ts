export interface RawNode {
  id: string;
  type: 'terminator' | 'process' | 'decision' | 'io';
  label: string;
  section?: number;
}

export interface RawEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  sourceHandle?: string;
  targetHandle?: string;
}

export const SECTIONS = [
  { id: 1, title: '1. Core & Dashboard' },
  { id: 2, title: '2. Farm Monitoring' },
  { id: 3, title: '3. Arva AI Decision Support & Guardrails' },
  { id: 4, title: '4. Manual Irrigation & Interlocks' },
];

export const WORKFLOW_NODES: RawNode[] = [
  // --- Section 1: Core & Dashboard ---
  { id: 'A', type: 'terminator', label: 'Start', section: 1 },
  { id: 'B', type: 'process', label: 'Farmer Opens\nArvaLink', section: 1 },
  { id: 'C', type: 'process', label: 'Log In to\nApplication', section: 1 },
  { id: 'D', type: 'decision', label: 'Login\nSuccessful?', section: 1 },
  { id: 'E', type: 'io', label: 'Display Login\nError', section: 1 },
  { id: 'F', type: 'io', label: 'Display Farm\nDashboard', section: 1 },
  { id: 'G', type: 'decision', label: 'Select Desired\nFunction', section: 1 },

  // --- Section 2: Farm Monitoring ---
  { id: 'H', type: 'io', label: 'Display Water Level,\nSoil Moisture, & Status', section: 2 },
  { id: 'I', type: 'process', label: 'Review Farm\nInformation', section: 2 },

  // --- Section 3: Arva AI Decision Support & Guardrails ---
  { id: 'J', type: 'process', label: 'Open Arva AI Tab', section: 3 },
  { id: 'K', type: 'io', label: 'Ask Farmer\nDesired Crop', section: 3 },
  { id: 'L', type: 'io', label: 'Enter Desired Crop', section: 3 },
  { id: 'M', type: 'process', label: 'Analyze Field\nConditions', section: 3 },
  { id: 'N', type: 'process', label: 'Retrieve ArvaNode\nTelemetry via MQTT', section: 3 },
  { id: 'N1', type: 'decision', label: 'Sensor Data\nFresh & Valid?', section: 3 },
  { id: 'N2', type: 'io', label: 'Display Sensor\nWarning', section: 3 },
  { id: 'N3', type: 'process', label: 'Use Cached\nBaseline Readings', section: 3 },
  { id: 'O', type: 'process', label: 'Query MCP Weather\n& Ag Sources', section: 3 },
  { id: 'O1', type: 'decision', label: 'Did MCP Query\nSucceed?', section: 3 },
  { id: 'O2', type: 'io', label: 'Alert: MCP Unavailable\n- Fallback Mode', section: 3 },
  { id: 'O3', type: 'process', label: 'Integrate Live Forecast\n& Soil Norms', section: 3 },
  { id: 'P', type: 'decision', label: 'Field Suitable\nfor Crop?', section: 3 },
  { id: 'Q', type: 'io', label: 'Display Suitability\nConfirmation', section: 3 },
  { id: 'R', type: 'process', label: 'Identify Irrigation\n& Prep Tasks', section: 3 },
  { id: 'S', type: 'decision', label: 'Can Arva Perform\nTasks?', section: 3 },
  { id: 'T1', type: 'decision', label: 'Check Hardware\nInterlocks: Safe?', section: 3 },
  { id: 'T2', type: 'io', label: 'Abort Auto-Run:\nInterlock Alert', section: 3 },
  { id: 'T', type: 'process', label: 'Operate Pumps\n& Water Gates', section: 3 },
  { id: 'U', type: 'process', label: 'Monitor Field &\nWatchdog Timer', section: 3 },
  { id: 'V', type: 'decision', label: 'Target Conditions\nReached?', section: 3 },
  { id: 'W', type: 'process', label: 'Stop Irrigation', section: 3 },
  { id: 'V1', type: 'decision', label: 'Runtime Timeout\nExceeded?', section: 3 },
  { id: 'V2', type: 'io', label: 'Trip Max Runtime\nCutoff', section: 3 },
  { id: 'X', type: 'io', label: 'Display Required\nManual Tasks', section: 3 },
  { id: 'Y', type: 'io', label: 'Present Remaining\nTasks', section: 3 },
  { id: 'Z', type: 'process', label: 'Save Progress in\nChat History', section: 3 },

  { id: 'AA', type: 'io', label: 'Explain Field\nUnsuitability', section: 3 },
  { id: 'AB', type: 'process', label: 'Identify Issues via\nSensors & MCP', section: 3 },
  { id: 'AC', type: 'decision', label: 'Can Arva Address\nIssues?', section: 3 },
  { id: 'AD', type: 'process', label: 'Perform Automated\nActions with Checks', section: 3 },
  { id: 'AE', type: 'io', label: 'Display Required\nManual Actions', section: 3 },
  { id: 'AF', type: 'process', label: 'Save Progress in\nChat History', section: 3 },

  { id: 'AG', type: 'io', label: 'Retrieve Previous\nConversation', section: 3 },
  { id: 'AH', type: 'process', label: 'Review Latest\nConditions', section: 3 },
  { id: 'AI1', type: 'decision', label: 'Field Now\nSuitable?', section: 3 },

  // --- Section 4: Manual Irrigation & Interlocks ---
  { id: 'AJ', type: 'io', label: 'Select Pump or\nWater Gate', section: 4 },
  { id: 'AK', type: 'process', label: 'Check Authorization\n& Sump Level', section: 4 },
  { id: 'AL', type: 'decision', label: 'Is Operation\nSafe?', section: 4 },
  { id: 'AM', type: 'io', label: 'Display Safety\nWarning / Block', section: 4 },
  { id: 'AN', type: 'process', label: 'Start Pump or\nOpen Gate', section: 4 },
  { id: 'AO', type: 'process', label: 'Monitor Water\nConditions & Duration', section: 4 },
  { id: 'AP', type: 'decision', label: 'Target Level\nReached?', section: 4 },
  { id: 'AP1', type: 'decision', label: 'Max Runtime\nExceeded?', section: 4 },
  { id: 'AQ', type: 'process', label: 'Stop Pump or\nClose Gate', section: 4 },
  { id: 'AR', type: 'process', label: 'Update Farm Status\n& Telemetry', section: 4 },

  // --- System Continuation ---
  { id: 'AS', type: 'decision', label: 'Continue Using\nSystem?' },
  { id: 'AT', type: 'terminator', label: 'End' },
];

export const WORKFLOW_EDGES: RawEdge[] = [
  // Section 1
  { id: 'e-A-B', source: 'A', target: 'B' },
  { id: 'e-B-C', source: 'B', target: 'C' },
  { id: 'e-C-D', source: 'C', target: 'D' },
  { id: 'e-D-E', source: 'D', target: 'E', label: 'No', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e-E-C', source: 'E', target: 'C', sourceHandle: 'bottom', targetHandle: 'right' },
  { id: 'e-D-F', source: 'D', target: 'F', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-F-G', source: 'F', target: 'G' },

  // Section 2
  { id: 'e-H-I', source: 'H', target: 'I' },

  // Section 3
  { id: 'e-J-K', source: 'J', target: 'K' },
  { id: 'e-K-L', source: 'K', target: 'L' },
  { id: 'e-L-M', source: 'L', target: 'M' },
  { id: 'e-M-N', source: 'M', target: 'N' },
  { id: 'e-N-N1', source: 'N', target: 'N1' },

  { id: 'e-N1-N2', source: 'N1', target: 'N2', label: 'No / Stale MQTT', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e-N2-N3', source: 'N2', target: 'N3' },
  { id: 'e-N3-O', source: 'N3', target: 'O', sourceHandle: 'bottom', targetHandle: 'right' },
  { id: 'e-N1-O', source: 'N1', target: 'O', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },

  { id: 'e-O-O1', source: 'O', target: 'O1' },
  { id: 'e-O1-O2', source: 'O1', target: 'O2', label: 'Timeout / Null', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e-O2-P', source: 'O2', target: 'P', sourceHandle: 'bottom', targetHandle: 'right' },
  { id: 'e-O1-O3', source: 'O1', target: 'O3', label: 'Success', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-O3-P', source: 'O3', target: 'P' },

  { id: 'e-P-Q', source: 'P', target: 'Q', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-P-AA', source: 'P', target: 'AA', label: 'No', sourceHandle: 'left', targetHandle: 'top' },

  { id: 'e-Q-R', source: 'Q', target: 'R' },
  { id: 'e-R-S', source: 'R', target: 'S' },

  { id: 'e-S-T1', source: 'S', target: 'T1', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-S-X', source: 'S', target: 'X', label: 'No', sourceHandle: 'right', targetHandle: 'top' },

  { id: 'e-T1-T2', source: 'T1', target: 'T2', label: 'Unsafe / Dry-Run', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e-T2-X', source: 'T2', target: 'X' },
  { id: 'e-T1-T', source: 'T1', target: 'T', label: 'Safe', sourceHandle: 'bottom', targetHandle: 'top' },

  { id: 'e-T-U', source: 'T', target: 'U' },
  { id: 'e-U-V', source: 'U', target: 'V' },

  { id: 'e-V-W', source: 'V', target: 'W', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-V-V1', source: 'V', target: 'V1', label: 'No', sourceHandle: 'right', targetHandle: 'left' },

  { id: 'e-V1-U', source: 'V1', target: 'U', label: 'No', sourceHandle: 'top', targetHandle: 'right' },
  { id: 'e-V1-V2', source: 'V1', target: 'V2', label: 'Yes / Failsafe', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-V2-W', source: 'V2', target: 'W', sourceHandle: 'left', targetHandle: 'right' },

  { id: 'e-W-Y', source: 'W', target: 'Y' },
  { id: 'e-X-Y', source: 'X', target: 'Y', sourceHandle: 'bottom', targetHandle: 'right' },
  { id: 'e-Y-Z', source: 'Y', target: 'Z' },

  { id: 'e-AA-AB', source: 'AA', target: 'AB' },
  { id: 'e-AB-AC', source: 'AB', target: 'AC' },

  { id: 'e-AC-AD', source: 'AC', target: 'AD', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-AC-AE', source: 'AC', target: 'AE', label: 'No', sourceHandle: 'left', targetHandle: 'top' },

  { id: 'e-AD-AF', source: 'AD', target: 'AF' },
  { id: 'e-AE-AF', source: 'AE', target: 'AF', sourceHandle: 'bottom', targetHandle: 'left' },

  { id: 'e-Z-AG', source: 'Z', target: 'AG' },
  { id: 'e-AF-AG', source: 'AF', target: 'AG', sourceHandle: 'bottom', targetHandle: 'left' },

  { id: 'e-AG-AH', source: 'AG', target: 'AH' },
  { id: 'e-AH-AI1', source: 'AH', target: 'AI1' },

  { id: 'e-AI1-AA', source: 'AI1', target: 'AA', label: 'No', sourceHandle: 'left', targetHandle: 'left' },
  { id: 'e-AI1-Q', source: 'AI1', target: 'Q', label: 'Yes', sourceHandle: 'right', targetHandle: 'left' },

  // Section 4
  { id: 'e-AJ-AK', source: 'AJ', target: 'AK' },
  { id: 'e-AK-AL', source: 'AK', target: 'AL' },

  { id: 'e-AL-AM', source: 'AL', target: 'AM', label: 'No / Lockout', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e-AL-AN', source: 'AL', target: 'AN', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },

  { id: 'e-AN-AO', source: 'AN', target: 'AO' },
  { id: 'e-AO-AP', source: 'AO', target: 'AP' },

  { id: 'e-AP-AQ', source: 'AP', target: 'AQ', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-AP-AP1', source: 'AP', target: 'AP1', label: 'No', sourceHandle: 'right', targetHandle: 'left' },

  { id: 'e-AP1-AO', source: 'AP1', target: 'AO', label: 'No', sourceHandle: 'top', targetHandle: 'right' },
  { id: 'e-AP1-AQ', source: 'AP1', target: 'AQ', label: 'Yes', sourceHandle: 'bottom', targetHandle: 'right' },

  { id: 'e-AQ-AR', source: 'AQ', target: 'AR' },

  // Between groups
  { id: 'e-G-H', source: 'G', target: 'H', label: 'Monitor Farm', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e-G-J', source: 'G', target: 'J', label: 'Ask Arva AI', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-G-AJ', source: 'G', target: 'AJ', label: 'Manage Irrigation', sourceHandle: 'left', targetHandle: 'top' },

  { id: 'e-I-AS', source: 'I', target: 'AS', sourceHandle: 'bottom', targetHandle: 'right' },
  { id: 'e-AR-AS', source: 'AR', target: 'AS', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e-AM-AS', source: 'AM', target: 'AS', sourceHandle: 'bottom', targetHandle: 'right' },

  { id: 'e-AS-G', source: 'AS', target: 'G', label: 'Yes', sourceHandle: 'left', targetHandle: 'left' },
  { id: 'e-AS-AT', source: 'AS', target: 'AT', label: 'No', sourceHandle: 'bottom', targetHandle: 'top' },
];
