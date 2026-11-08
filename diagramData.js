/**
 * diagramData.js
 * Source of truth data for the 57-Node / 72-Connection ArvaLink Process Flowchart.
 * Formatted for US Letter Portrait (viewBox 0 0 770 1020).
 */

export const SECTIONS = [
  { id: 1, title: '1. Core & Dashboard', y: 16 },
  { id: 2, title: '2. Farm Monitoring', y: 184 },
  { id: 3, title: '3. Arva AI Decision Support & Guardrails', y: 242 },
  { id: 4, title: '4. Manual Irrigation & Interlocks', y: 808 },
];

/**
 * 57 Nodes
 * Column definitions:
 * Left Lane / Left Branch: x ~ 85 - 130
 * Center Spine: x = 275 - 280
 * Right Column (Side branch / alerts / manual): x = 475 - 540
 * Far Right Lane: x ~ 690 - 740
 */
export const NODES = [
  // --- Section 1: Core & Dashboard ---
  { id: 'A', type: 'terminator', label: 'Start', x: 275, y: 32, w: 90, h: 22, section: 1 },
  { id: 'B', type: 'process', label: 'Farmer Opens ArvaLink', x: 275, y: 64, w: 140, h: 22, section: 1 },
  { id: 'C', type: 'process', label: 'Log In to Application', x: 275, y: 96, w: 135, h: 22, section: 1 },
  { id: 'D', type: 'decision', label: 'Login Successful?', x: 275, y: 130, w: 120, h: 28, section: 1 },
  { id: 'E', type: 'io', label: 'Display Login Error', x: 495, y: 130, w: 130, h: 22, section: 1 },
  { id: 'F', type: 'io', label: 'Display Farm Dashboard', x: 275, y: 172, w: 145, h: 22, section: 1 },
  { id: 'G', type: 'decision', label: 'Select Desired Function', x: 275, y: 212, w: 145, h: 32, section: 1 },

  // --- Section 2: Farm Monitoring ---
  { id: 'H', type: 'io', label: 'Display Water Level, Soil Moisture, & Status', x: 95, y: 268, w: 145, h: 28, section: 2 },
  { id: 'I', type: 'process', label: 'Review Farm Information', x: 95, y: 312, w: 140, h: 22, section: 2 },

  // --- Section 3: Arva AI Decision Support & Guardrails ---
  { id: 'J', type: 'process', label: 'Open Arva AI Tab', x: 275, y: 268, w: 125, h: 22, section: 3 },
  { id: 'K', type: 'io', label: 'Ask Farmer Desired Crop', x: 275, y: 300, w: 145, h: 22, section: 3 },
  { id: 'L', type: 'io', label: 'Enter Desired Crop', x: 275, y: 332, w: 135, h: 22, section: 3 },
  { id: 'M', type: 'process', label: 'Analyze Field Conditions', x: 275, y: 364, w: 145, h: 22, section: 3 },
  { id: 'N', type: 'process', label: 'Retrieve ArvaNode Telemetry via MQTT', x: 275, y: 396, w: 170, h: 22, section: 3 },
  { id: 'N1', type: 'decision', label: 'Sensor Data Fresh & Valid?', x: 275, y: 432, w: 145, h: 28, section: 3 },
  { id: 'N2', type: 'io', label: 'Display Sensor Warning', x: 495, y: 432, w: 140, h: 22, section: 3 },
  { id: 'N3', type: 'process', label: 'Use Cached Baseline Readings', x: 495, y: 466, w: 155, h: 22, section: 3 },
  { id: 'O', type: 'process', label: 'Query MCP Weather & Ag Sources', x: 275, y: 498, w: 165, h: 22, section: 3 },
  { id: 'O1', type: 'decision', label: 'Did MCP Query Succeed?', x: 275, y: 532, w: 140, h: 28, section: 3 },
  { id: 'O2', type: 'io', label: 'Alert: MCP Unavailable - Fallback Mode', x: 495, y: 532, w: 175, h: 22, section: 3 },
  { id: 'O3', type: 'process', label: 'Integrate Live Forecast & Soil Norms', x: 275, y: 566, w: 170, h: 22, section: 3 },
  { id: 'P', type: 'decision', label: 'Field Suitable for Crop?', x: 275, y: 602, w: 140, h: 28, section: 3 },
  { id: 'Q', type: 'io', label: 'Display Suitability Confirmation', x: 275, y: 638, w: 165, h: 22, section: 3 },
  { id: 'R', type: 'process', label: 'Identify Irrigation & Prep Tasks', x: 275, y: 668, w: 160, h: 22, section: 3 },
  { id: 'S', type: 'decision', label: 'Can Arva Perform Tasks?', x: 275, y: 702, w: 145, h: 28, section: 3 },
  { id: 'T1', type: 'decision', label: 'Check Hardware Interlocks: Safe?', x: 275, y: 738, w: 155, h: 28, section: 3 },
  { id: 'T2', type: 'io', label: 'Abort Auto-Run: Interlock Alert', x: 435, y: 738, w: 140, h: 22, section: 3 },
  { id: 'T', type: 'process', label: 'Operate Pumps & Water Gates', x: 200, y: 772, w: 145, h: 22, section: 3 },
  { id: 'U', type: 'process', label: 'Monitor Field & Watchdog Timer', x: 200, y: 804, w: 155, h: 22, section: 3 },
  { id: 'V', type: 'decision', label: 'Target Conditions Reached?', x: 200, y: 838, w: 140, h: 28, section: 3 },
  { id: 'W', type: 'process', label: 'Stop Irrigation', x: 200, y: 872, w: 110, h: 22, section: 3 },
  { id: 'V1', type: 'decision', label: 'Runtime Timeout Exceeded?', x: 335, y: 838, w: 125, h: 28, section: 3 },
  { id: 'V2', type: 'io', label: 'Trip Max Runtime Cutoff', x: 335, y: 872, w: 125, h: 22, section: 3 },
  { id: 'X', type: 'io', label: 'Display Required Manual Tasks', x: 495, y: 772, w: 150, h: 22, section: 3 },
  { id: 'Y', type: 'io', label: 'Present Remaining Tasks', x: 335, y: 906, w: 140, h: 22, section: 3 },
  { id: 'Z', type: 'process', label: 'Save Progress in Chat History', x: 335, y: 938, w: 150, h: 22, section: 3 },

  // --- Sub-branch for Unsuitable Field (P [No] -> AA) ---
  { id: 'AA', type: 'io', label: 'Explain Field Unsuitability', x: 495, y: 602, w: 150, h: 22, section: 3 },
  { id: 'AB', type: 'process', label: 'Identify Issues via Sensors & MCP', x: 495, y: 636, w: 165, h: 22, section: 3 },
  { id: 'AC', type: 'decision', label: 'Can Arva Address Issues?', x: 495, y: 670, w: 145, h: 28, section: 3 },
  { id: 'AD', type: 'process', label: 'Perform Automated Actions with Checks', x: 440, y: 704, w: 165, h: 22, section: 3 },
  { id: 'AE', type: 'io', label: 'Display Required Manual Actions', x: 615, y: 704, w: 145, h: 22, section: 3 },
  { id: 'AF', type: 'process', label: 'Save Progress in Chat History', x: 530, y: 742, w: 145, h: 22, section: 3 },
  { id: 'AG', type: 'io', label: 'Retrieve Previous Conversation', x: 470, y: 966, w: 155, h: 22, section: 3 },
  { id: 'AH', type: 'process', label: 'Review Latest Conditions', x: 635, y: 966, w: 130, h: 22, section: 3 },
  { id: 'AI1', type: 'decision', label: 'Field Now Suitable?', x: 635, y: 890, w: 120, h: 28, section: 3 },

  // --- Section 4: Manual Irrigation & Interlocks ---
  { id: 'AJ', type: 'io', label: 'Select Pump or Water Gate', x: 565, y: 268, w: 145, h: 24, section: 4 },
  { id: 'AK', type: 'process', label: 'Check Authorization & Sump Level', x: 565, y: 304, w: 160, h: 24, section: 4 },
  { id: 'AL', type: 'decision', label: 'Is Operation Safe?', x: 565, y: 344, w: 125, h: 28, section: 4 },
  { id: 'AM', type: 'io', label: 'Display Safety Warning / Block', x: 685, y: 384, w: 145, h: 24, section: 4 },
  { id: 'AN', type: 'process', label: 'Start Pump or Open Gate', x: 565, y: 384, w: 145, h: 22, section: 4 },
  { id: 'AO', type: 'process', label: 'Monitor Water Conditions & Duration', x: 565, y: 418, w: 165, h: 22, section: 4 },
  { id: 'AP', type: 'decision', label: 'Target Level Reached?', x: 565, y: 454, w: 135, h: 28, section: 4 },
  { id: 'AP1', type: 'decision', label: 'Max Runtime Exceeded?', x: 685, y: 454, w: 130, h: 28, section: 4 },
  { id: 'AQ', type: 'process', label: 'Stop Pump or Close Gate', x: 565, y: 494, w: 145, h: 22, section: 4 },
  { id: 'AR', type: 'process', label: 'Update Farm Status & Telemetry', x: 565, y: 528, w: 155, h: 22, section: 4 },

  // --- System Continuation ---
  { id: 'AS', type: 'decision', label: 'Continue Using System?', x: 275, y: 994, w: 150, h: 28, section: null },
  { id: 'AT', type: 'terminator', label: 'End', x: 420, y: 994, w: 80, h: 22, section: null },
];

/**
 * 72 Edges with precise waypoints avoiding all node collisions.
 */
export const EDGES = [
  // Section 1
  { from: 'A', to: 'B', label: null },
  { from: 'B', to: 'C', label: null },
  { from: 'C', to: 'D', label: null },
  { from: 'D', to: 'E', label: 'No' },
  {
    from: 'E',
    to: 'C',
    label: null,
    points: [
      { x: 495, y: 119 },
      { x: 495, y: 96 },
      { x: 342.5, y: 96 },
    ],
  },
  { from: 'D', to: 'F', label: 'Yes' },
  { from: 'F', to: 'G', label: null },

  // Section 2
  { from: 'H', to: 'I', label: null },

  // Section 3
  { from: 'J', to: 'K', label: null },
  { from: 'K', to: 'L', label: null },
  { from: 'L', to: 'M', label: null },
  { from: 'M', to: 'N', label: null },
  { from: 'N', to: 'N1', label: null },
  { from: 'N1', to: 'N2', label: 'No / Stale MQTT' },
  { from: 'N2', to: 'N3', label: null },
  {
    from: 'N3',
    to: 'O',
    label: null,
    points: [
      { x: 495, y: 477 },
      { x: 495, y: 498 },
      { x: 357.5, y: 498 },
    ],
  },
  { from: 'N1', to: 'O', label: 'Yes' },
  { from: 'O', to: 'O1', label: null },
  { from: 'O1', to: 'O2', label: 'Timeout / Null' },
  {
    from: 'O2',
    to: 'P',
    label: null,
    points: [
      { x: 495, y: 543 },
      { x: 495, y: 602 },
      { x: 345, y: 602 },
    ],
  },
  { from: 'O1', to: 'O3', label: 'Success' },
  { from: 'O3', to: 'P', label: null },
  { from: 'P', to: 'Q', label: 'Yes' },
  { from: 'P', to: 'AA', label: 'No' },
  { from: 'Q', to: 'R', label: null },
  { from: 'R', to: 'S', label: null },
  { from: 'S', to: 'T1', label: 'Yes' },
  {
    from: 'S',
    to: 'X',
    label: 'No',
    points: [
      { x: 347.5, y: 702 },
      { x: 405, y: 702 },
      { x: 405, y: 755 },
      { x: 495, y: 755 },
      { x: 495, y: 761 },
    ],
  },
  { from: 'T1', to: 'T2', label: 'Unsafe / Dry-Run' },
  {
    from: 'T2',
    to: 'X',
    label: null,
    points: [
      { x: 435, y: 749 },
      { x: 435, y: 772 },
      { x: 420, y: 772 },
    ],
  },
  {
    from: 'T1',
    to: 'T',
    label: 'Safe',
    points: [
      { x: 200, y: 738 },
      { x: 200, y: 761 },
    ],
  },
  { from: 'T', to: 'U', label: null },
  { from: 'U', to: 'V', label: null },
  { from: 'V', to: 'W', label: 'Yes' },
  { from: 'V', to: 'V1', label: 'No' },
  {
    from: 'V1',
    to: 'U',
    label: 'No',
    points: [
      { x: 397.5, y: 838 },
      { x: 408, y: 838 },
      { x: 408, y: 804 },
      { x: 277.5, y: 804 },
    ],
  },
  { from: 'V1', to: 'V2', label: 'Yes / Failsafe' },
  {
    from: 'V2',
    to: 'W',
    label: null,
    points: [
      { x: 335, y: 883 },
      { x: 335, y: 894 },
      { x: 255, y: 894 },
      { x: 255, y: 883 },
    ],
  },
  {
    from: 'W',
    to: 'Y',
    label: null,
    points: [
      { x: 200, y: 883 },
      { x: 200, y: 906 },
      { x: 265, y: 906 },
    ],
  },
  {
    from: 'X',
    to: 'Y',
    label: null,
    points: [
      { x: 495, y: 783 },
      { x: 495, y: 906 },
      { x: 405, y: 906 },
    ],
  },
  { from: 'Y', to: 'Z', label: null },

  // Sub-branch for Unsuitable Field
  { from: 'AA', to: 'AB', label: null },
  { from: 'AB', to: 'AC', label: null },
  {
    from: 'AC',
    to: 'AD',
    label: 'Yes',
    points: [
      { x: 440, y: 670 },
      { x: 440, y: 693 },
    ],
  },
  {
    from: 'AC',
    to: 'AE',
    label: 'No',
    points: [
      { x: 567.5, y: 670 },
      { x: 615, y: 670 },
      { x: 615, y: 693 },
    ],
  },
  {
    from: 'AD',
    to: 'AF',
    label: null,
    points: [
      { x: 440, y: 715 },
      { x: 440, y: 742 },
      { x: 457.5, y: 742 },
    ],
  },
  {
    from: 'AE',
    to: 'AF',
    label: null,
    points: [
      { x: 615, y: 715 },
      { x: 615, y: 742 },
      { x: 602.5, y: 742 },
    ],
  },
  {
    from: 'Z',
    to: 'AG',
    label: null,
    points: [
      { x: 335, y: 949 },
      { x: 335, y: 966 },
      { x: 392.5, y: 966 },
    ],
  },
  {
    from: 'AF',
    to: 'AG',
    label: null,
    points: [
      { x: 530, y: 753 },
      { x: 530, y: 940 },
      { x: 470, y: 940 },
      { x: 470, y: 955 },
    ],
  },
  { from: 'AG', to: 'AH', label: null },
  { from: 'AH', to: 'AI1', label: null },
  {
    from: 'AI1',
    to: 'AA',
    label: 'No',
    points: [
      { x: 695, y: 890 },
      { x: 745, y: 890 },
      { x: 745, y: 602 },
      { x: 570, y: 602 },
    ],
  },
  {
    from: 'AI1',
    to: 'Q',
    label: 'Yes',
    points: [
      { x: 635, y: 876 },
      { x: 635, y: 855 },
      { x: 145, y: 855 },
      { x: 145, y: 638 },
      { x: 192.5, y: 638 },
    ],
  },

  // Section 4
  { from: 'AJ', to: 'AK', label: null },
  { from: 'AK', to: 'AL', label: null },
  {
    from: 'AL',
    to: 'AM',
    label: 'No / Lockout',
    points: [
      { x: 627.5, y: 344 },
      { x: 685, y: 344 },
      { x: 685, y: 372 },
    ],
  },
  { from: 'AL', to: 'AN', label: 'Yes' },
  { from: 'AN', to: 'AO', label: null },
  { from: 'AO', to: 'AP', label: null },
  { from: 'AP', to: 'AQ', label: 'Yes' },
  { from: 'AP', to: 'AP1', label: 'No' },
  {
    from: 'AP1',
    to: 'AO',
    label: 'No',
    points: [
      { x: 685, y: 440 },
      { x: 685, y: 418 },
      { x: 647.5, y: 418 },
    ],
  },
  {
    from: 'AP1',
    to: 'AQ',
    label: 'Yes',
    points: [
      { x: 685, y: 468 },
      { x: 685, y: 494 },
      { x: 637.5, y: 494 },
    ],
  },
  { from: 'AQ', to: 'AR', label: null },

  // Between groups & Fan-out from G
  {
    from: 'G',
    to: 'H',
    label: 'Monitor Farm',
    points: [
      { x: 202.5, y: 212 },
      { x: 95, y: 212 },
      { x: 95, y: 254 },
    ],
  },
  { from: 'G', to: 'J', label: 'Ask Arva AI' },
  {
    from: 'G',
    to: 'AJ',
    label: 'Manage Irrigation',
    points: [
      { x: 347.5, y: 212 },
      { x: 565, y: 212 },
      { x: 565, y: 256 },
    ],
  },

  // Ingress into AS
  {
    from: 'I',
    to: 'AS',
    label: null,
    points: [
      { x: 95, y: 323 },
      { x: 95, y: 994 },
      { x: 200, y: 994 },
    ],
  },
  {
    from: 'AR',
    to: 'AS',
    label: null,
    points: [
      { x: 565, y: 539 },
      { x: 565, y: 580 },
      { x: 755, y: 580 },
      { x: 755, y: 1010 },
      { x: 275, y: 1010 },
      { x: 275, y: 1008 },
    ],
  },
  {
    from: 'AM',
    to: 'AS',
    label: null,
    points: [
      { x: 685, y: 396 },
      { x: 685, y: 410 },
      { x: 760, y: 410 },
      { x: 760, y: 1015 },
      { x: 275, y: 1015 },
      { x: 275, y: 1008 },
    ],
  },
  {
    from: 'AS',
    to: 'G',
    label: 'Yes',
    points: [
      { x: 200, y: 994 },
      { x: 20, y: 994 },
      { x: 20, y: 172 },
      { x: 202.5, y: 172 },
      { x: 202.5, y: 205 },
    ],
  },
  { from: 'AS', to: 'AT', label: 'No' },
];
