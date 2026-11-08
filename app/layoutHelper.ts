import { Node, Edge } from '@xyflow/react';

export const RAW_POSITIONED_NODES: Node[] = [
  {
    "id": "A",
    "type": "terminator",
    "position": {
      "x": 700,
      "y": 50
    },
    "data": {
      "label": "Start",
      "section": 1
    },
    "style": {
      "width": 100,
      "height": 30
    }
  },
  {
    "id": "B",
    "type": "process",
    "position": {
      "x": 665,
      "y": 140
    },
    "data": {
      "label": "Farmer Opens ArvaLink",
      "section": 1
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "C",
    "type": "process",
    "position": {
      "x": 665,
      "y": 256
    },
    "data": {
      "label": "Log In to Application",
      "section": 1
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "D",
    "type": "decision",
    "position": {
      "x": 655,
      "y": 372
    },
    "data": {
      "label": "Login Successful?",
      "section": 1
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "E",
    "type": "io",
    "position": {
      "x": 970,
      "y": 394
    },
    "data": {
      "label": "Display Login Error",
      "section": 1
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "F",
    "type": "io",
    "position": {
      "x": 665,
      "y": 532
    },
    "data": {
      "label": "Display Farm Dashboard",
      "section": 1
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "G",
    "type": "decision",
    "position": {
      "x": 655,
      "y": 648
    },
    "data": {
      "label": "Select Desired Function",
      "section": 1
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "H",
    "type": "io",
    "position": {
      "x": 665,
      "y": 828
    },
    "data": {
      "label": "Display Water Level, Soil Moisture, & Status",
      "section": 2
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "I",
    "type": "process",
    "position": {
      "x": 665,
      "y": 944
    },
    "data": {
      "label": "Review Farm Information",
      "section": 2
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AJ",
    "type": "io",
    "position": {
      "x": 265,
      "y": 828
    },
    "data": {
      "label": "Select Pump or Water Gate",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AK",
    "type": "process",
    "position": {
      "x": 265,
      "y": 944
    },
    "data": {
      "label": "Check Authorization & Sump Level",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AL",
    "type": "decision",
    "position": {
      "x": 255,
      "y": 1060
    },
    "data": {
      "label": "Is Operation Safe?",
      "section": 4
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "AM",
    "type": "io",
    "position": {
      "x": 475,
      "y": 1082
    },
    "data": {
      "label": "Display Safety Warning / Block",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AN",
    "type": "process",
    "position": {
      "x": 265,
      "y": 1220
    },
    "data": {
      "label": "Start Pump or Open Gate",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AO",
    "type": "process",
    "position": {
      "x": 265,
      "y": 1336
    },
    "data": {
      "label": "Monitor Water Conditions & Duration",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AP",
    "type": "decision",
    "position": {
      "x": 255,
      "y": 1452
    },
    "data": {
      "label": "Target Level Reached?",
      "section": 4
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "AP1",
    "type": "decision",
    "position": {
      "x": 30,
      "y": 1452
    },
    "data": {
      "label": "Max Runtime Exceeded?",
      "section": 4
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "AQ",
    "type": "process",
    "position": {
      "x": 265,
      "y": 1612
    },
    "data": {
      "label": "Stop Pump or Close Gate",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AR",
    "type": "process",
    "position": {
      "x": 265,
      "y": 1728
    },
    "data": {
      "label": "Update Farm Status & Telemetry",
      "section": 4
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AS",
    "type": "decision",
    "position": {
      "x": 655,
      "y": 1864
    },
    "data": {
      "label": "Continue Using System?"
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "AT",
    "type": "terminator",
    "position": {
      "x": 700,
      "y": 2044
    },
    "data": {
      "label": "End"
    },
    "style": {
      "width": 100,
      "height": 30
    }
  },
  {
    "id": "J",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 828
    },
    "data": {
      "label": "Open Arva AI Tab",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "K",
    "type": "io",
    "position": {
      "x": 1415,
      "y": 944
    },
    "data": {
      "label": "Ask Farmer Desired Crop",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "L",
    "type": "io",
    "position": {
      "x": 1415,
      "y": 1060
    },
    "data": {
      "label": "Enter Desired Crop",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "M",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 1176
    },
    "data": {
      "label": "Analyze Field Conditions",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "N",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 1292
    },
    "data": {
      "label": "Retrieve ArvaNode Telemetry via MQTT",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "N1",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 1408
    },
    "data": {
      "label": "Sensor Data Fresh & Valid?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "N2",
    "type": "io",
    "position": {
      "x": 1735,
      "y": 1430
    },
    "data": {
      "label": "Display Sensor Warning",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "N3",
    "type": "process",
    "position": {
      "x": 1735,
      "y": 1568
    },
    "data": {
      "label": "Use Cached Baseline Readings",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "O",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 1568
    },
    "data": {
      "label": "Query MCP Weather & Ag Sources",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "O1",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 1684
    },
    "data": {
      "label": "Did MCP Query Succeed?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "O2",
    "type": "io",
    "position": {
      "x": 1735,
      "y": 1706
    },
    "data": {
      "label": "Alert: MCP Unavailable - Fallback Mode",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "O3",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 1844
    },
    "data": {
      "label": "Integrate Live Forecast & Soil Norms",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "P",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 1960
    },
    "data": {
      "label": "Field Suitable for Crop?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "Q",
    "type": "io",
    "position": {
      "x": 1415,
      "y": 2120
    },
    "data": {
      "label": "Display Suitability Confirmation",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AA",
    "type": "io",
    "position": {
      "x": 1175,
      "y": 2126
    },
    "data": {
      "label": "Explain Field Unsuitability",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 44
    }
  },
  {
    "id": "R",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 2236
    },
    "data": {
      "label": "Identify Irrigation & Prep Tasks",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AB",
    "type": "process",
    "position": {
      "x": 1175,
      "y": 2242
    },
    "data": {
      "label": "Identify Issues via Sensors & MCP",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 44
    }
  },
  {
    "id": "S",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 2352
    },
    "data": {
      "label": "Can Arva Perform Tasks?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "AC",
    "type": "decision",
    "position": {
      "x": 1165,
      "y": 2352
    },
    "data": {
      "label": "Can Arva Address Issues?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "T1",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 2512
    },
    "data": {
      "label": "Check Hardware Interlocks: Safe?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "T2",
    "type": "io",
    "position": {
      "x": 1735,
      "y": 2534
    },
    "data": {
      "label": "Abort Auto-Run: Interlock Alert",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AD",
    "type": "process",
    "position": {
      "x": 1175,
      "y": 2540
    },
    "data": {
      "label": "Perform Automated Actions with Checks",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 44
    }
  },
  {
    "id": "T",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 2672
    },
    "data": {
      "label": "Operate Pumps & Water Gates",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "X",
    "type": "io",
    "position": {
      "x": 1735,
      "y": 2672
    },
    "data": {
      "label": "Display Required Manual Tasks",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AE",
    "type": "io",
    "position": {
      "x": 1175,
      "y": 2678
    },
    "data": {
      "label": "Display Required Manual Actions",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 44
    }
  },
  {
    "id": "U",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 2788
    },
    "data": {
      "label": "Monitor Field & Watchdog Timer",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AF",
    "type": "process",
    "position": {
      "x": 1175,
      "y": 2794
    },
    "data": {
      "label": "Save Progress in Chat History",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 44
    }
  },
  {
    "id": "V",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 2904
    },
    "data": {
      "label": "Target Conditions Reached?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "V1",
    "type": "decision",
    "position": {
      "x": 1725,
      "y": 2904
    },
    "data": {
      "label": "Runtime Timeout Exceeded?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  },
  {
    "id": "W",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 3064
    },
    "data": {
      "label": "Stop Irrigation",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "V2",
    "type": "io",
    "position": {
      "x": 1735,
      "y": 3064
    },
    "data": {
      "label": "Trip Max Runtime Cutoff",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "Y",
    "type": "io",
    "position": {
      "x": 1415,
      "y": 3180
    },
    "data": {
      "label": "Present Remaining Tasks",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "Z",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 3296
    },
    "data": {
      "label": "Save Progress in Chat History",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AG",
    "type": "io",
    "position": {
      "x": 1415,
      "y": 3412
    },
    "data": {
      "label": "Retrieve Previous Conversation",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AH",
    "type": "process",
    "position": {
      "x": 1415,
      "y": 3528
    },
    "data": {
      "label": "Review Latest Conditions",
      "section": 3
    },
    "style": {
      "width": 170,
      "height": 56
    }
  },
  {
    "id": "AI1",
    "type": "decision",
    "position": {
      "x": 1405,
      "y": 3644
    },
    "data": {
      "label": "Field Now Suitable?",
      "section": 3
    },
    "style": {
      "width": 190,
      "height": 100
    }
  }
];

export const RAW_POSITIONED_EDGES = [
  {
    "id": "e-A-B",
    "source": "A",
    "target": "B",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-B-C",
    "source": "B",
    "target": "C",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-C-D",
    "source": "C",
    "target": "D",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-D-E",
    "source": "D",
    "target": "E",
    "sourceHandle": "right",
    "targetHandle": "left",
    "label": "No"
  },
  {
    "id": "e-E-C",
    "source": "E",
    "target": "C",
    "sourceHandle": "top",
    "targetHandle": "right",
    "label": "Retry"
  },
  {
    "id": "e-D-F",
    "source": "D",
    "target": "F",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-F-G",
    "source": "F",
    "target": "G",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-H-I",
    "source": "H",
    "target": "I",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-J-K",
    "source": "J",
    "target": "K",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-K-L",
    "source": "K",
    "target": "L",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-L-M",
    "source": "L",
    "target": "M",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-M-N",
    "source": "M",
    "target": "N",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-N-N1",
    "source": "N",
    "target": "N1",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-N1-N2",
    "source": "N1",
    "target": "N2",
    "sourceHandle": "right",
    "targetHandle": "left",
    "label": "No / Stale MQTT"
  },
  {
    "id": "e-N2-N3",
    "source": "N2",
    "target": "N3",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-N3-O",
    "source": "N3",
    "target": "O",
    "sourceHandle": "left",
    "targetHandle": "right"
  },
  {
    "id": "e-N1-O",
    "source": "N1",
    "target": "O",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-O-O1",
    "source": "O",
    "target": "O1",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-O1-O2",
    "source": "O1",
    "target": "O2",
    "sourceHandle": "right",
    "targetHandle": "left",
    "label": "Timeout / Null"
  },
  {
    "id": "e-O2-P",
    "source": "O2",
    "target": "P",
    "sourceHandle": "bottom",
    "targetHandle": "right"
  },
  {
    "id": "e-O1-O3",
    "source": "O1",
    "target": "O3",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Success"
  },
  {
    "id": "e-O3-P",
    "source": "O3",
    "target": "P",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-P-Q",
    "source": "P",
    "target": "Q",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-P-AA",
    "source": "P",
    "target": "AA",
    "sourceHandle": "left",
    "targetHandle": "top",
    "label": "No"
  },
  {
    "id": "e-Q-R",
    "source": "Q",
    "target": "R",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-R-S",
    "source": "R",
    "target": "S",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-S-T1",
    "source": "S",
    "target": "T1",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-S-X",
    "source": "S",
    "target": "X",
    "sourceHandle": "right",
    "targetHandle": "top",
    "label": "No",
    "type": "corridor",
    "laneX": 1930
  },
  {
    "id": "e-T1-T2",
    "source": "T1",
    "target": "T2",
    "sourceHandle": "right",
    "targetHandle": "left",
    "label": "Unsafe / Dry-Run"
  },
  {
    "id": "e-T2-X",
    "source": "T2",
    "target": "X",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-T1-T",
    "source": "T1",
    "target": "T",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Safe"
  },
  {
    "id": "e-T-U",
    "source": "T",
    "target": "U",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-U-V",
    "source": "U",
    "target": "V",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-V-W",
    "source": "V",
    "target": "W",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-V-V1",
    "source": "V",
    "target": "V1",
    "sourceHandle": "right",
    "targetHandle": "left",
    "label": "No"
  },
  {
    "id": "e-V1-U",
    "source": "V1",
    "target": "U",
    "sourceHandle": "top",
    "targetHandle": "right",
    "label": "No"
  },
  {
    "id": "e-V1-V2",
    "source": "V1",
    "target": "V2",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes / Failsafe"
  },
  {
    "id": "e-V2-W",
    "source": "V2",
    "target": "W",
    "sourceHandle": "left",
    "targetHandle": "right"
  },
  {
    "id": "e-W-Y",
    "source": "W",
    "target": "Y",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-X-Y",
    "source": "X",
    "target": "Y",
    "sourceHandle": "bottom",
    "targetHandle": "right"
  },
  {
    "id": "e-Y-Z",
    "source": "Y",
    "target": "Z",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AA-AB",
    "source": "AA",
    "target": "AB",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AB-AC",
    "source": "AB",
    "target": "AC",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AC-AD",
    "source": "AC",
    "target": "AD",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-AC-AE",
    "source": "AC",
    "target": "AE",
    "sourceHandle": "left",
    "targetHandle": "top",
    "label": "No"
  },
  {
    "id": "e-AD-AF",
    "source": "AD",
    "target": "AF",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AE-AF",
    "source": "AE",
    "target": "AF",
    "sourceHandle": "bottom",
    "targetHandle": "left"
  },
  {
    "id": "e-Z-AG",
    "source": "Z",
    "target": "AG",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AF-AG",
    "source": "AF",
    "target": "AG",
    "sourceHandle": "bottom",
    "targetHandle": "left"
  },
  {
    "id": "e-AG-AH",
    "source": "AG",
    "target": "AH",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AH-AI1",
    "source": "AH",
    "target": "AI1",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AI1-AA",
    "source": "AI1",
    "target": "AA",
    "sourceHandle": "left",
    "targetHandle": "left",
    "label": "No",
    "type": "corridor",
    "laneX": 1130
  },
  {
    "id": "e-AI1-Q",
    "source": "AI1",
    "target": "Q",
    "sourceHandle": "right",
    "targetHandle": "right",
    "label": "Yes",
    "type": "corridor",
    "laneX": 1950
  },
  {
    "id": "e-AJ-AK",
    "source": "AJ",
    "target": "AK",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AK-AL",
    "source": "AK",
    "target": "AL",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AL-AM",
    "source": "AL",
    "target": "AM",
    "sourceHandle": "right",
    "targetHandle": "left",
    "label": "No / Lockout"
  },
  {
    "id": "e-AL-AN",
    "source": "AL",
    "target": "AN",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-AN-AO",
    "source": "AN",
    "target": "AO",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AO-AP",
    "source": "AO",
    "target": "AP",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AP-AQ",
    "source": "AP",
    "target": "AQ",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Yes"
  },
  {
    "id": "e-AP-AP1",
    "source": "AP",
    "target": "AP1",
    "sourceHandle": "left",
    "targetHandle": "right",
    "label": "No"
  },
  {
    "id": "e-AP1-AO",
    "source": "AP1",
    "target": "AO",
    "sourceHandle": "top",
    "targetHandle": "left",
    "label": "No"
  },
  {
    "id": "e-AP1-AQ",
    "source": "AP1",
    "target": "AQ",
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "label": "Yes"
  },
  {
    "id": "e-AQ-AR",
    "source": "AQ",
    "target": "AR",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-G-H",
    "source": "G",
    "target": "H",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "Monitor Farm"
  },
  {
    "id": "e-G-J",
    "source": "G",
    "target": "J",
    "sourceHandle": "right",
    "targetHandle": "top",
    "label": "Ask Arva AI"
  },
  {
    "id": "e-G-AJ",
    "source": "G",
    "target": "AJ",
    "sourceHandle": "left",
    "targetHandle": "top",
    "label": "Manage Irrigation"
  },
  {
    "id": "e-I-AS",
    "source": "I",
    "target": "AS",
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "e-AR-AS",
    "source": "AR",
    "target": "AS",
    "sourceHandle": "bottom",
    "targetHandle": "left"
  },
  {
    "id": "e-AM-AS",
    "source": "AM",
    "target": "AS",
    "sourceHandle": "bottom",
    "targetHandle": "top-left",
    "type": "corridor",
    "laneX": 560,
    "label": "Lockout Acknowledged"
  },
  {
    "id": "e-AS-G",
    "source": "AS",
    "target": "G",
    "sourceHandle": "bottom-left",
    "targetHandle": "top-left",
    "label": "Loop: Continue System",
    "type": "corridor",
    "laneX": 15,
    "labelOffsetY": 1200,
    "targetPosition": "top"
  },
  {
    "id": "e-AS-AT",
    "source": "AS",
    "target": "AT",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "label": "No"
  }
];

export const SECTION_BOUNDS = {
  "1": {
    "minX": 655,
    "minY": 50,
    "maxX": 1140,
    "maxY": 748,
    "centerX": 897,
    "centerY": 399
  },
  "2": {
    "minX": 665,
    "minY": 828,
    "maxX": 835,
    "maxY": 1000,
    "centerX": 750,
    "centerY": 914
  },
  "3": {
    "minX": 1165,
    "minY": 828,
    "maxX": 1915,
    "maxY": 3744,
    "centerX": 1540,
    "centerY": 2286
  },
  "4": {
    "minX": 30,
    "minY": 828,
    "maxX": 645,
    "maxY": 1784,
    "centerX": 337,
    "centerY": 1306
  }
};

export const SECTION_HEADINGS = [
  {
    "id": 1,
    "title": "1. Core & Dashboard",
    "bounds": {
      "minX": 655,
      "minY": 50,
      "maxX": 1140,
      "maxY": 748,
      "centerX": 897,
      "centerY": 399
    }
  },
  {
    "id": 2,
    "title": "2. Farm Monitoring",
    "bounds": {
      "minX": 665,
      "minY": 828,
      "maxX": 835,
      "maxY": 1000,
      "centerX": 750,
      "centerY": 914
    }
  },
  {
    "id": 3,
    "title": "3. Arva AI Decision Support & Guardrails",
    "bounds": {
      "minX": 1165,
      "minY": 828,
      "maxX": 1915,
      "maxY": 3744,
      "centerX": 1540,
      "centerY": 2286
    }
  },
  {
    "id": 4,
    "title": "4. Manual Irrigation & Interlocks",
    "bounds": {
      "minX": 30,
      "minY": 828,
      "maxX": 645,
      "maxY": 1784,
      "centerX": 337,
      "centerY": 1306
    }
  }
];

export function getLayoutedElements() {
  const nodes: Node[] = RAW_POSITIONED_NODES;
  const edges: Edge[] = RAW_POSITIONED_EDGES.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    sourceHandle: edge.sourceHandle,
    targetHandle: edge.targetHandle,
    type: edge.type || 'smoothstep',
    data: {
      label: edge.label,
      laneX: edge.laneX,
      labelOffsetY: edge.labelOffsetY,
      targetPosition: edge.targetPosition,
    },
    label: edge.label,
    labelStyle: {
      fill: '#000000',
      fontWeight: 600,
      fontSize: 11,
      fontFamily: '"Times New Roman", Times, serif',
    },
    labelBgStyle: {
      fill: '#FFFFFF',
      fillOpacity: 1,
    },
    labelBgPadding: [4, 2],
    labelBgBorderRadius: 2,
    style: {
      stroke: '#000000',
      strokeWidth: 1.2,
    },
    markerEnd: {
      type: 'arrowclosed' as any,
      width: 12,
      height: 12,
      color: '#000000',
    },
  }));

  return {
    nodes,
    edges,
    sectionHeadings: SECTION_HEADINGS,
    sectionBounds: SECTION_BOUNDS,
  };
}
