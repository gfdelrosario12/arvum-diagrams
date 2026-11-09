import { Node, Edge } from '@xyflow/react';

export interface BlockLayerInfo {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const BLOCK_LAYERS: BlockLayerInfo[] = [
  {
    id: 'layer_sensors',
    title: 'Field Sensors',
    x: 40,
    y: 60,
    width: 480,
    height: 1560,
  },
  {
    id: 'layer_comm',
    title: 'Communication',
    x: 560,
    y: 60,
    width: 380,
    height: 670,
  },
  {
    id: 'layer_gateway',
    title: 'Gateway',
    x: 980,
    y: 60,
    width: 420,
    height: 670,
  },
  {
    id: 'layer_backend',
    title: 'Backend',
    x: 1440,
    y: 60,
    width: 580,
    height: 670,
  },
  {
    id: 'layer_ai',
    title: 'AI and Decision Support',
    x: 2060,
    y: 60,
    width: 540,
    height: 670,
  },
  {
    id: 'layer_app',
    title: 'Application',
    x: 1440,
    y: 800,
    width: 1160,
    height: 270,
  },
  {
    id: 'layer_irrigation',
    title: 'Irrigation Control',
    x: 560,
    y: 1140,
    width: 2040,
    height: 480,
  },
];

export const BLOCK_NODES: Node[] = [
  // ==========================================
  // MAIN ARCHITECTURAL CARDS (Subsystem Containers)
  // ==========================================
  ...BLOCK_LAYERS.map((layer) => ({
    id: layer.id,
    type: 'groupNode',
    position: { x: layer.x, y: layer.y },
    data: {
      title: layer.title,
    },
    style: {
      width: layer.width,
      height: layer.height,
      zIndex: -1,
    },
    selectable: false,
    draggable: false,
  })),

  // ==========================================
  // FIELD SENSORS
  // Container: x=40, y=60, w=480, h=1560
  // Left padding=50 -> x=90, width=380
  // ==========================================
  {
    id: 'node_sensors_phys',
    type: 'blockNode',
    position: { x: 90, y: 140 },
    data: {
      label: 'Field Sensor Module',
      sublabel: '• Soil Moisture Sensor (Analog ADC1)\n• Ultrasonic Water Level Sensor\n(Local datum offset: 20cm - distance)',
    },
    style: { width: 380, height: 120 },
  },
  {
    id: 'node_esp32_wroom',
    type: 'blockNode',
    position: { x: 90, y: 320 },
    data: {
      label: 'Sensor Controller',
      sublabel: 'Dedicated 32-bit Microcontroller Unit\nDeep Sleep Power Cycling (55s sleep / 2s sample)\nAnalog Linearity Calibration & Timing Control',
    },
    style: { width: 380, height: 120 },
  },
  {
    id: 'node_sensor_proc',
    type: 'blockNode',
    position: { x: 90, y: 500 },
    data: {
      label: 'Data Acquisition & Processing Unit',
      sublabel: 'Outlier Rejection • Median Filtering (N=5)\nLocal Water Level Calculation (cm to soil)\nPacked Binary Telemetry Formatter',
    },
    style: { width: 380, height: 120 },
  },
  {
    id: 'node_power_solar',
    type: 'blockNode',
    position: { x: 90, y: 680 },
    data: {
      label: 'Power Supply & Management Unit',
      sublabel: 'Rechargeable Energy Storage Cell (3.7V Rail)\nSolar Harvesting Module with MPPT Regulation\nContinuous Autonomous Energy Budget (~0.25 Wh/day)',
    },
    style: { width: 380, height: 125 },
  },
  {
    id: 'node_mesh_nodes',
    type: 'blockNode',
    position: { x: 90, y: 865 },
    data: {
      label: 'Distributed Field Sensor Array',
      sublabel: 'Node 001 (Location 1: Inflow Canal Point)\nNode 002 (Location 2: Upper Elevation Plot)\nNode 003 (Location 3: Plot Center Point)\nNode 004 (Location 4: Low Center Depression)\nNode 005 (Location 5: Distal Water Basin)\nNode 006 (Location 6: Tail Drainage Outflow)',
    },
    style: { width: 380, height: 180 },
  },

  // ==========================================
  // COMMUNICATION
  // Container: x=560, y=60, w=380, h=670
  // Inner x=590, width=320
  // ==========================================
  {
    id: 'node_sx1278',
    type: 'blockNode',
    position: { x: 590, y: 140 },
    data: {
      label: 'Wireless Communication Module',
      sublabel: 'Sub-GHz RF Transceiver via Synchronous Serial Bus\nHardware Interrupt Packet Reception Trigger\nDedicated Power RF Front-End (+17 dBm Boost)',
    },
    style: { width: 320, height: 115 },
  },
  {
    id: 'node_lora_rf',
    type: 'blockNode',
    position: { x: 590, y: 320 },
    data: {
      label: 'Sub-GHz Wireless Telemetry Link',
      sublabel: 'Long-Range Spread Spectrum RF Channel\nIndustrial ISM Band Telemetry Transmission\nPrivate Network Sync Frame Verification',
    },
    style: { width: 320, height: 120 },
  },
  {
    id: 'node_tdma_scheduler',
    type: 'blockNode',
    position: { x: 590, y: 505 },
    data: {
      label: 'Transmission Coordination Unit',
      sublabel: 'Time-Division Multi-Node Access Protocol\nAirtime Contention & Collision Prevention\nDeterministic Uplink Intervals (2-5s sampling)',
    },
    style: { width: 320, height: 120 },
  },

  // ==========================================
  // GATEWAY
  // Container: x=980, y=60, w=420, h=670
  // Inner x=1020, width=340
  // ==========================================
  {
    id: 'node_gw_hw',
    type: 'blockNode',
    position: { x: 1020, y: 140 },
    data: {
      label: 'Network Gateway Controller',
      sublabel: 'Edge Aggregator MCU with Radio Reception\nLocal Diagnostic Display Interface\nWireless Local Access Service Point',
    },
    style: { width: 340, height: 115 },
  },
  {
    id: 'node_gw_modem',
    type: 'blockNode',
    position: { x: 1020, y: 320 },
    data: {
      label: 'Cellular Communication Module',
      sublabel: 'Cellular Uplink Engine (4G LTE)\nInternal Serial AT Command Interface\nAutomatic Reconnect with Backoff Management',
    },
    style: { width: 340, height: 120 },
  },
  {
    id: 'node_gw_spool',
    type: 'blockNode',
    position: { x: 1020, y: 505 },
    data: {
      label: 'Local Data Storage Buffer',
      sublabel: 'Non-Volatile Flash Spool Buffer (100 Pkts)\nFIFO Ingestion Drain upon Network Restoration\nLossless Telemetry Recovery during Outages',
    },
    style: { width: 340, height: 120 },
  },

  // ==========================================
  // BACKEND
  // Container: x=1440, y=60, w=580, h=670
  // Inner x=1470
  // ==========================================
  {
    id: 'node_caddy',
    type: 'blockNode',
    position: { x: 1470, y: 140 },
    data: {
      label: 'API Gateway & Security Proxy',
      sublabel: 'TLS Termination & Ingress Security Filter\nHardware Gateway Secret Key Authorization\nCryptographic JWT Session Token Validation',
    },
    style: { width: 245, height: 115 },
  },
  {
    id: 'node_mqtt_broker',
    type: 'blockNode',
    position: { x: 1745, y: 140 },
    data: {
      label: 'Message Broker',
      sublabel: 'Publish/Subscribe Event Streaming Service\nTopic-Based Device Telemetry Routing\nStrict Device Access Control & Namespace Isolation',
    },
    style: { width: 245, height: 115 },
  },
  {
    id: 'node_spring_boot',
    type: 'blockNode',
    position: { x: 1470, y: 315 },
    data: {
      label: 'Backend Application Server',
      sublabel: '• Telemetry Ingestion & Anomaly Validation\n• AWD Decision Engine (-15cm Reflood State Machine)\n• Irrigation Actuator Management API\n• Pre-Irrigation & Task Planning Engine\n• Command Authorization & Pending Command Queue',
    },
    style: { width: 520, height: 135 },
  },
  {
    id: 'node_postgres',
    type: 'blockNode',
    position: { x: 1470, y: 510 },
    data: {
      label: 'Relational Database Storage',
      sublabel: 'Relational Database Engine & Versioned Schemas\nHistorical Sensor Telemetry & Actuation Logs\nPre-Irrigation Plans & Water Outcome Records',
    },
    style: { width: 230, height: 125 },
  },
  {
    id: 'node_redis',
    type: 'blockNode',
    position: { x: 1760, y: 510 },
    data: {
      label: 'Cache Memory Store',
      sublabel: 'In-Memory State Store & Rate Limiting Pipeline\nSub-millisecond Device State Retrieval\n(Architecture Candidate)',
      isProposed: true,
    },
    style: { width: 230, height: 125 },
  },

  // ==========================================
  // AI AND DECISION SUPPORT
  // Container: x=2060, y=60, w=540, h=670
  // Inner x=2110, width=440
  // ==========================================
  {
    id: 'node_arva_ai_core',
    type: 'blockNode',
    position: { x: 2110, y: 140 },
    data: {
      label: 'AI Processing Service',
      sublabel: 'Agronomic Intelligence & Reasoning Service\nMulti-Layer Context & Memory Management\nAutomated Tool Calling & Context Synthesis\nEvent-Driven Advisory Generation',
    },
    style: { width: 440, height: 125 },
  },
  {
    id: 'node_ai_gemini',
    type: 'blockNode',
    position: { x: 2110, y: 320 },
    data: {
      label: 'Gemini 3.6 Flash',
      sublabel: 'Large Language Reasoning Model Service\nStructured Function Calling & Schema Validation\nStrict Non-Actuating Reasoning Guardrails',
    },
    style: { width: 440, height: 115 },
  },
  {
    id: 'node_ai_ext_sources',
    type: 'blockNode',
    position: { x: 2110, y: 495 },
    data: {
      label: 'External Agronomic & Weather Data',
      sublabel: '• Atmospheric Weather & Precipitation Forecasts\n• Agronomic Crop Reference Knowledge Base\n• Historical Farmland Soil & Hydrology Baselines',
    },
    style: { width: 440, height: 115 },
  },

  // ==========================================
  // APPLICATION
  // Container: x=1440, y=800, w=1160, h=270
  // Inner x=1475, 1850, 2225, width=340 each, gap=35px
  // ==========================================
  {
    id: 'node_arvalink_dash',
    type: 'blockNode',
    position: { x: 1475, y: 890 },
    data: {
      label: 'Operator Dashboard & Monitoring',
      sublabel: 'User Interface Application (Web & Mobile)\nReal-Time Multi-Sensor Telemetry Visualizer\nField Mapping, Node Spatial Coordinates & Status',
    },
    style: { width: 340, height: 130 },
  },
  {
    id: 'node_arvalink_ai_chat',
    type: 'blockNode',
    position: { x: 1850, y: 890 },
    data: {
      label: 'Advisory Interface & Interaction',
      sublabel: 'Interactive Agronomic Advisory Interface\nCrop Task Checklists & Suitability Analysis\nPre-Irrigation Proposals & Scheduling Forms',
    },
    style: { width: 340, height: 130 },
  },
  {
    id: 'node_arvalink_approval',
    type: 'blockNode',
    position: { x: 2225, y: 890 },
    data: {
      label: 'Command Authorization Gate',
      sublabel: 'Farmer / Operator Explicit Approval Interface\nSecondary Manual Overrides & Emergency Stop\nRole-Based Access Control & Privilege Verification',
    },
    style: { width: 340, height: 130 },
  },

  // ==========================================
  // IRRIGATION CONTROL
  // Container: x=560, y=1140, w=2040, h=480
  // Inner x=608, 1106, 1604, 2102, width=450 each, gap=48px
  // y=1260, height=145
  // ==========================================
  {
    id: 'node_ctrl_field',
    type: 'blockNode',
    position: { x: 608, y: 1260 },
    data: {
      label: 'Field Actuator Controller',
      sublabel: 'Dedicated Actuation Control Microcontroller\nAuthorized Command Polling & Execution Loop\nHardware Identity Verification & Network Failover',
    },
    style: { width: 450, height: 145 },
  },
  {
    id: 'node_interlocks',
    type: 'blockNode',
    position: { x: 1106, y: 1260 },
    data: {
      label: 'Hardware Driver & Safety Interlocks',
      sublabel: 'Optocoupled Relay Bank with Dead-Time Settling Delay\nMechanical Travel Limit Switches (Open / Close)\nHardware Travel Timeouts & Fail-Safe Watchdogs',
    },
    style: { width: 450, height: 145 },
  },
  {
    id: 'node_arvagates',
    type: 'blockNode',
    position: { x: 1604, y: 1260 },
    data: {
      label: 'Gate Actuation Unit',
      sublabel: '• Inflow Canal Distribution Motor\n• Mid-Terrace Lateral Distribution Motor\n• Distal Drainage Distribution Motor',
    },
    style: { width: 450, height: 145 },
  },
  {
    id: 'node_pump_delivery',
    type: 'blockNode',
    position: { x: 2102, y: 1260 },
    data: {
      label: 'Pump & Flow Delivery Unit',
      sublabel: 'Submersible Water Pump Actuation Relay\nIn-Line Liquid Flow Rate Sensor Pulse Feedback\nClosed-Loop Volumetric Water Delivery',
    },
    style: { width: 450, height: 145 },
  },
];

export const BLOCK_EDGES: Edge[] = [
  // ==========================================
  // PATH 1: SENSOR TELEMETRY UPLINK
  // Field Sensors -> ESP32 -> Processing -> SX1278 -> LoRa -> Gateway -> LTE -> Caddy/Backend -> DB
  // ==========================================
  {
    id: 'e_sens_esp32',
    source: 'node_sensors_phys',
    target: 'node_esp32_wroom',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Analog ADC & Ultrasonic Pulse',
      sublabel: 'GPIO Echo / Trigger Signals',
    },
  },
  {
    id: 'e_esp32_proc',
    source: 'node_esp32_wroom',
    target: 'node_sensor_proc',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Raw Sensor Values',
      sublabel: 'Calibration & Water Geometry',
    },
  },
  {
    id: 'e_power_esp32',
    source: 'node_power_solar',
    target: 'node_esp32_wroom',
    sourceHandle: 'right',
    targetHandle: 'right',
    type: 'straightBlock',
    data: {
      label: 'Regulated 3.3V Power Rail',
      sublabel: 'MPPT Solar + Li-ion Buffering',
      waypoints: [
        { x: 500, y: 742.5 },
        { x: 500, y: 380 },
      ],
      labelOffsetX: 10,
      labelOffsetY: 88,
    },
  },
  {
    id: 'e_mesh_proc',
    source: 'node_mesh_nodes',
    target: 'node_sensor_proc',
    sourceHandle: 'left',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: '6 Monitored Pitak Locations',
      sublabel: 'Spatial Water Level Gradient',
      waypoints: [
        { x: 65, y: 955 },
        { x: 65, y: 560 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 77.5,
    },
  },
  {
    id: 'e_proc_sx1278',
    source: 'node_sensor_proc',
    target: 'node_sx1278',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'SPI Data Packets',
      sublabel: '32-Byte Binary Payload',
      waypoints: [
        { x: 530, y: 560 },
        { x: 530, y: 200 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 90,
    },
  },
  {
    id: 'e_sx1278_lora',
    source: 'node_sx1278',
    target: 'node_lora_rf',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'RF Modulation (CSS)',
      sublabel: '+17 dBm Power Boost',
    },
  },
  {
    id: 'e_lora_tdma',
    source: 'node_lora_rf',
    target: 'node_tdma_scheduler',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: '433 MHz Airtime Slots',
      sublabel: 'TDMA Synchronized',
    },
  },
  {
    id: 'e_lora_gateway',
    source: 'node_lora_rf',
    target: 'node_gw_hw',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: '433 MHz LoRa Radio Link',
      sublabel: 'NTC Sub-GHz Range (~1km)',
      labelOffsetX: -15,
    },
  },
  {
    id: 'e_gw_modem',
    source: 'node_gw_hw',
    target: 'node_gw_modem',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Internal AT UART Commands',
      sublabel: 'Packet Ingestion',
    },
  },
  {
    id: 'e_gw_spool',
    source: 'node_gw_hw',
    target: 'node_gw_spool',
    sourceHandle: 'left-bottom',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'Local Data Buffering Link',
      sublabel: 'LittleFS Failover Queue',
      waypoints: [
        { x: 995, y: 226.25 },
        { x: 995, y: 565 },
      ],
      labelOffsetX: -30,
      labelOffsetY: 79.5,
    },
  },
  {
    id: 'e_modem_caddy',
    source: 'node_gw_modem',
    target: 'node_caddy',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'HTTPS REST POST Uplink',
      sublabel: 'DITO 4G LTE • X-Gateway-Key',
    },
  },
  {
    id: 'e_caddy_spring',
    source: 'node_caddy',
    target: 'node_spring_boot',
    sourceHandle: 'bottom',
    targetHandle: 'top-left',
    type: 'straightBlock',
    data: {
      label: 'Internal Reverse Proxy',
      sublabel: 'Forward to Core API Port',
    },
  },
  {
    id: 'e_mqtt_spring',
    source: 'node_mqtt_broker',
    target: 'node_spring_boot',
    sourceHandle: 'bottom',
    targetHandle: 'top-right',
    type: 'straightBlock',
    data: {
      label: 'MQTT Telemetry Stream',
      sublabel: 'Topic Ingestion (arvacore/v1/#)',
      labelOffsetX: -25,
    },
  },
  {
    id: 'e_spring_postgres',
    source: 'node_spring_boot',
    target: 'node_postgres',
    sourceHandle: 'bottom-left',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'JDBC Persistence',
      sublabel: 'Insert telemetry_records',
    },
  },
  {
    id: 'e_spring_redis',
    source: 'node_spring_boot',
    target: 'node_redis',
    sourceHandle: 'bottom-right',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Cache Management Pipeline',
      sublabel: 'Hot Telemetry Store',
    },
  },

  // ==========================================
  // PATH 2: APPLICATION MONITORING
  // Database / Backend -> REST API -> ArvaLink Dashboard -> Farmer / Operator
  // Direct vertical connection: drops straight down from Backend center (x=1730) through the inter-database gap to Dashboard top-right (x=1730)
  // ==========================================
  {
    id: 'e_spring_arvalink_dash',
    source: 'node_spring_boot',
    target: 'node_arvalink_dash',
    sourceHandle: 'bottom',
    targetHandle: 'top-right',
    type: 'straightBlock',
    data: {
      label: 'REST API / JWT Session',
      sublabel: 'GET /api/v1/telemetry/latest',
      labelOffsetX: 0,
      labelOffsetY: 35,
    },
  },

  // ==========================================
  // PATH 3: AI DECISION SUPPORT
  // Telemetry + Historical + Agronomic References + Weather -> Arva AI -> Recommendations -> User Approval
  // ==========================================
  {
    id: 'e_spring_arva_ai',
    source: 'node_spring_boot',
    target: 'node_arva_ai_core',
    sourceHandle: 'right-top',
    targetHandle: 'left-top',
    type: 'straightBlock',
    data: {
      label: 'Field Context & Telemetry Sync',
      sublabel: 'REST Inter-service Call',
      waypoints: [
        { x: 2035, y: 348.75 },
        { x: 2035, y: 171.25 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 27.5,
    },
  },
  {
    id: 'e_ai_gemini',
    source: 'node_arva_ai_core',
    target: 'node_ai_gemini',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Function Calling & Reasoning',
      sublabel: 'AWD Decision Prompting',
    },
  },
  {
    id: 'e_ai_ext_sources',
    source: 'node_arva_ai_core',
    target: 'node_ai_ext_sources',
    sourceHandle: 'right',
    targetHandle: 'right',
    type: 'straightBlock',
    data: {
      label: 'Knowledge & Weather Integrations',
      sublabel: 'PAGASA Weather & PhilRice RAG',
      labelOffsetX: 115,
      labelOffsetY: 92.5,
    },
  },
  {
    id: 'e_ai_to_chat_ui',
    source: 'node_arva_ai_core',
    target: 'node_arvalink_ai_chat',
    sourceHandle: 'left-bottom',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Agronomic Recommendations',
      sublabel: 'Advisory Hero Card & Forms',
      waypoints: [
        { x: 2075, y: 233.75 },
        { x: 2075, y: 830 },
        { x: 2020, y: 830 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 170,
    },
  },
  {
    id: 'e_chat_to_approval',
    source: 'node_arvalink_ai_chat',
    target: 'node_arvalink_approval',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'Irrigation Proposal Review',
      sublabel: 'Pre-Irrigation Plan Confirmation',
      labelOffsetY: -105,
    },
  },

  // ==========================================
  // PATH 4: IRRIGATION CONTROL (STRICT HUMAN-IN-THE-LOOP AUTHORIZED CONTROL)
  // Corridor routed:
  // e_approval_to_backend routes along eastern corridor (x=2580) and horizontal tier corridor (y=760) into Spring Boot right-bottom
  // e_spring_to_ctrl routes below upper tier (y=750) through inter-container channel to Field Controller (x=833)
  // ==========================================
  {
    id: 'e_approval_to_backend',
    source: 'node_arvalink_approval',
    target: 'node_spring_boot',
    sourceHandle: 'right',
    targetHandle: 'right-bottom',
    type: 'straightBlock',
    data: {
      label: 'Authorized Command Dispatch',
      sublabel: 'POST /api/v1/gates/command (JWT)',
      isControl: true,
      waypoints: [
        { x: 2580, y: 955 },
        { x: 2580, y: 760 },
        { x: 2005, y: 760 },
        { x: 2005, y: 416.25 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 0,
    },
  },
  {
    id: 'e_spring_to_ctrl',
    source: 'node_spring_boot',
    target: 'node_ctrl_field',
    sourceHandle: 'left-top',
    targetHandle: 'top',
    type: 'straightBlock',
    data: {
      label: 'Pending Command Polling',
      sublabel: 'GET /api/v1/gates/pending-command',
      isControl: true,
      waypoints: [
        { x: 1410, y: 348.75 },
        { x: 1410, y: 750 },
        { x: 833, y: 750 },
      ],
      labelOffsetX: -577,
      labelOffsetY: 456,
    },
  },
  {
    id: 'e_ctrl_to_interlocks',
    source: 'node_ctrl_field',
    target: 'node_interlocks',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'Electrical Interlock Signals',
      sublabel: '100ms Dead-Time Relay Control',
      isControl: true,
      labelOffsetY: -132.5,
    },
  },
  {
    id: 'e_interlocks_to_gates',
    source: 'node_interlocks',
    target: 'node_arvagates',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'Physical Actuation Lines',
      sublabel: 'Active-LOW Relays & Limit Feedback',
      isControl: true,
      labelOffsetY: -132.5,
    },
  },
  {
    id: 'e_interlocks_to_pump',
    source: 'node_interlocks',
    target: 'node_pump_delivery',
    sourceHandle: 'bottom',
    targetHandle: 'bottom',
    type: 'straightBlock',
    data: {
      label: 'Submersible Pump Relay Line',
      sublabel: '45-Min Safety Watchdog Cutoff',
      isControl: true,
      labelOffsetY: 25,
    },
  },

  // ==========================================
  // PATH 5: FEEDBACK AND MONITORING LOOP
  // Field Physical Conditions & Actuators -> Sensors -> ArvaNode -> Gateway -> Backend -> ArvaLink
  // Corridor routed:
  // e_gates_to_backend_ack routes up through the clear channel between PostgreSQL and Redis (at x=1765)
  // e_delivery_paddy_feedback routes below all Layer G cards (at y=1660) back to Field Sensors bottom
  // ==========================================
  {
    id: 'e_delivery_paddy_feedback',
    source: 'node_pump_delivery',
    target: 'node_sensors_phys',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'straightBlock',
    data: {
      label: 'Paddy Water Level & Soil Moisture Rise',
      sublabel: 'Closed-Loop Hydrological Response',
      isFeedback: true,
      waypoints: [
        { x: 2327, y: 1640 },
        { x: 20, y: 1640 },
        { x: 20, y: 200 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 0,
    },
  },
  {
    id: 'e_gates_to_backend_ack',
    source: 'node_arvagates',
    target: 'node_spring_boot',
    sourceHandle: 'top',
    targetHandle: 'left-bottom',
    type: 'straightBlock',
    data: {
      label: 'Gate Execution ACK & Status',
      sublabel: 'POST /api/v1/gates/ack (Limit Trip)',
      isFeedback: true,
      waypoints: [
        { x: 1829, y: 1100 },
        { x: 1445, y: 1100 },
        { x: 1445, y: 416.25 },
      ],
      labelOffsetX: 0,
      labelOffsetY: 0,
    },
  },
];
