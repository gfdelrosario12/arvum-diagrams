# ArvaLink System Audit & Workflow Grounding Report

**Audited System:** ArvaCore Agricultural Multi-Repository Ecosystem  
**Audit Target:** Verification of the 57-Node / 72-Connection ArvaLink Process Flowchart against Live Codebase & Engineering Specifications  
**Date of Execution:** 2026-11-08  
**Auditor:** Senior Full-Stack Engineer & Technical Diagram Designer (Antigravity Assistant)  
**Audit Scope Mode:** Strictly Read-Only  

---

## 1. System Map: Multi-Repository Architecture & Ecosystem Roles

| Repository / Module | Primary Purpose & Role in Ecosystem | Technology Stack | Inter-Repository Connectivity & Data Contracts |
|:---|:---|:---|:---|
| **ArvaLink** | Edge Hardware Gateway bridge deployed in the field (LilyGO T-A7670G ESP32 + SX1278 LoRa + SIMCom LTE Cat-1); polls 6 ArvaNodes via 433MHz LoRa and uplinks to backend. | C++ / Arduino / ESP32 FreeRTOS | Receives raw sensor packets over LoRa from `arvacore_arvanode`, bridges over LTE/HTTPS to `ArvaNet_Backend` (`/api/v1/telemetry`) using `X-ArvaCore-Gateway-Key`. |
| **ArvaAI** | Advisory decision-support microservice providing context-aware agricultural chat, PhilRice/IRRI PalayCheck knowledge retrieval, and Model Context Protocol (MCP) tool orchestration. | Python 3.12 / FastAPI / Uvicorn / LangChain / Gemini 2.5 Flash / SQLite (`arva_workflow.db`) | Mediated exclusively via `ArvaNet_Backend` (`/api/v1/farming-chat/plan`). Does **not** actuate physical hardware directly (strict zero-direct-actuation invariant). |
| **ArvaCore** | Central domain logic engine and physical actuation controller firmware for central water pump and distribution valve relays. | Python 3.14 (Domain Engine) & C++ / ESP32 (Pump Controller Firmware) | Validates AI recommendations against physical field geometry (still-wells) and safety interlocks (E-Stop, safe flood limits, dry-run protection, max runtime cutoff). |
| **ArvaGate** | Dedicated 3-gate automated lateral canal actuator subsystem (Inflow Canal, Mid-Terrace Lateral, Distal Distribution). | C++ / Arduino / ESP32 FreeRTOS | Connects via Wi-Fi/LTE to `ArvaNet_Backend` (`/api/v1/gates/pending-command`, `/ack`, `/telemetry`); enforces 100ms opposing relay interlock. |
| **ArvaNet_Backend** | Central enterprise cloud backend providing REST APIs, device registry, telemetry ingestion, AWD analytics, RBAC security, and command lifecycle state machine. | Java 21 / Spring Boot 3.2.x / PostgreSQL 16+ / TimescaleDB / Flyway | Exposes REST & SSE APIs to `ArvaNet_Frontend`; mediates AI requests to `ArvaAI`; queues downlinks and verifies gateway keys for `ArvaLink`, `ArvaCore`, and `ArvaGate`. |
| **ArvaNet_Frontend** | Farmer and operator facing web and mobile monitoring and control application (branded as ArvaLink). | Flutter 3.x / Dart 3.12+ (Material 3 Responsive UI for Web & Android) | Communicates with `ArvaNet_Backend` over authenticated REST APIs (JWT bearer tokens); renders real-time telemetry, AI chat advisor cards, and manual control overrides. |
| **arvacore_arvanode** | Distributed in-field sensor nodes (`ARVANODE-001` through `ARVANODE-006`) measuring still-well water level (JSN-SR04T ultrasonic) and soil moisture (capacitive v1.2/v2.0). | C++ / Arduino / ESP32-WROOM-32 | Broadcasts sensor packets over 433MHz LoRa to `ArvaLink` gateway or directly via Wi-Fi/HTTP when AP is proximate. |
| **arvacore-whitepaper** | Academic research thesis manuscript, dynamic publication platform, interactive simulations, and documentation portal. | Next.js 16.4.0 / React 19 / TypeScript 5 / Tailwind CSS / Vercel | Standalone documentation & whitepaper site presenting the PUP Manila thesis research, AWD simulation models, and architecture. |
| **Documentations** | Engineering runbooks, wiring schematics, installation manuals, safety specs, hardware test reports, and updated system diagrams. | Markdown, Mermaid, Graphviz DOT, SVG, DXF | Cross-repository engineering reference and system documentation index. |
| **scripts** | Operational maintenance, token generation, AI/backend redeployment, and automated testing utility scripts. | Bash shell scripts & Python utility scripts | Automates administrative workflows, backend health checks, and service redeployments across VPS environments. |
| **diagrams** | React + SVG diagram presentation module and visualization workspace at workspace root. | Next.js 16.4.5 / React 19 / TypeScript 5 | Standalone Next.js application at workspace root displaying the 57-node / 72-connection ArvaLink system flowchart. |

---

## 2. Evidence Table (57 Nodes)

Status definitions:
- **Confirmed**: Direct, unambiguous implementation found in code or active configuration.
- **Partial**: Logic or UI exists, but implementation differs in mechanism, naming, or partial scoping.
- **Not found**: No code evidence found in the workspace.
- **Contradicts**: Flowchart states one behavior, but code explicitly enforces an opposing or incompatible behavior.

| Node ID | Label | Evidence (file:line) | Status | Audit Findings & Code Alignment |
|:---|:---|:---|:---|:---|
| **A** | Start | `ArvaNet_Frontend/lib/main.dart:14` | Confirmed | Flutter entry point `void main()` initializes widgets and launches `AquaFlowApp`. |
| **B** | Farmer Opens ArvaLink | `ArvaNet_Frontend/lib/main.dart:60` | Confirmed | `ValueListenableBuilder<AuthState>` renders splash/auth check; web endpoint `https://arvalink.gladwindr.me`. |
| **C** | Log In to Application | `ArvaNet_Frontend/lib/features/auth/presentation/login_screen.dart:35` | Confirmed | `_handleLogin()` submits username/email and password to `AuthNotifier`. |
| **D** | Login Successful? | `ArvaNet_Frontend/lib/features/auth/presentation/controllers/auth_controller.dart:102` | Confirmed | Checks `AuthStatus.authenticated` vs `AuthStatus.error` with JWT session persistence. |
| **E** | Display Login Error | `ArvaNet_Frontend/lib/features/auth/presentation/login_screen.dart:108` | Confirmed | `_buildErrorBanner(theme, authState.errorMessage!)` displayed inline on login failure. |
| **F** | Display Farm Dashboard | `ArvaNet_Frontend/lib/features/home/presentation/home_screen.dart:1` | Confirmed | `HomeScreen` displays active AWD recommendations, sensor cards, and urgent field conditions. |
| **G** | Select Desired Function | `ArvaNet_Frontend/lib/features/shell/presentation/app_shell.dart:45` | Confirmed | Bottom navigation bar / sidebar rail navigates between Home (0), AI (1), Sensors (2), Control (3). |
| **H** | Display Water Level, Soil Moisture, & Status | `ArvaNet_Frontend/lib/features/nodes/presentation/widgets/multi_node_sensor_matrix_widget.dart:220` | Confirmed | Displays JSN-SR04T ultrasonic water level, capacitive soil moisture %, and node health. |
| **I** | Review Farm Information | `ArvaNet_Frontend/lib/features/sensors/presentation/screens/sensors_screen.dart:54` | Confirmed | Dedicated screen for reviewing 6-node spatial matrix, AWD drying trends, and battery levels. |
| **J** | Open Arva AI Tab | `ArvaNet_Frontend/lib/features/farming_chat/presentation/farming_chatbot_screen.dart:1` | Confirmed | Dedicated AI companion tab (`FarmingChatbotScreen`) accessible from shell navigation index 1. |
| **K** | Ask Farmer Desired Crop | `ArvaAI/app/services/farming_chat_planner.py:27` | Confirmed | `INITIAL_QUESTION = "Hi, I am Arva, what do you like to plant today?"`. |
| **L** | Enter Desired Crop | `ArvaAI/app/services/farming_chat_planner.py:160` | Confirmed | Chat input accepts user crop selection (e.g., "Lowland Rice", "NSIC Rc 222"). |
| **M** | Analyze Field Conditions | `ArvaAI/app/services/farming_chat_planner.py:195` | Confirmed | Evaluates growth stage, readiness score, and field sensor telemetry. |
| **N** | Retrieve ArvaNode Telemetry via MQTT | `ArvaNet_Backend/src/main/java/com/aquaflow/backend/domain/iot/ArvaIotIngestionEngine.java:22` | Partial | Node telemetry ingestion in backend supports MQTT broker ingestion and LoRa HTTP uplink. Arva AI retrieves telemetry via REST MCP (`ReadOnlyTelemetryTools`). |
| **N1** | Sensor Data Fresh & Valid? | `ArvaAI/app/services/telemetry_quality_engine.py:35` | Confirmed | `TelemetryQualityEngine.inspect_node_reading()` checks staleness (>15m, >60m), range, and flatlines. |
| **N2** | Display Sensor Warning | `ArvaAI/app/services/telemetry_quality_engine.py:53` | Confirmed | Flags telemetry anomalies and issues UI alerts / degraded confidence warnings. |
| **N3** | Use Cached Baseline Readings | `ArvaAI/app/services/soil_fallback_engine.py:10` | Confirmed | `SoilFallbackEngine` activates when sensors fail/stale; uses last known valid and municipal baselines. |
| **O** | Query MCP Weather & Ag Sources | `ArvaAI/app/tools/mcp_pagasa_adapter.py:35` | Confirmed | `PagasaWeatherMcpAdapter` and `LopezHistoricalAgriAdapter` query external meteorological/agronomic data. |
| **O1** | Did MCP Query Succeed? | `ArvaAI/app/mcp/client.py:95` | Confirmed | `ArvaMCPClient.call_tool()` evaluates execution state (`COMPLETED` vs `FAILED` / `TIMEOUT`). |
| **O2** | Alert: MCP Unavailable - Fallback Mode | `ArvaAI/app/mcp/client.py:108` | Confirmed | Catches `httpx.TimeoutException` (15s timeout) and falls back to cached Lopez climate normals. |
| **O3** | Integrate Live Forecast & Soil Norms | `ArvaAI/app/services/multi_source_evidence_aggregator.py:25` | Confirmed | Combines PAGASA rainfall probability, temperature, and Calumpang clay soil parameters. |
| **P** | Field Suitable for Crop? | `ArvaAI/app/services/farming_chat_planner.py:202` | Confirmed | Evaluates readiness score (>=60% suitable) and physical flood depth boundaries. |
| **Q** | Display Suitability Confirmation | `ArvaAI/app/services/farming_chat_planner.py:205` | Confirmed | "Farm-Readiness assessment complete... Do you want to proceed with the proposed planting preparation?". |
| **R** | Identify Irrigation & Prep Tasks | `ArvaAI/app/services/farming_chat_planner.py:115` | Confirmed | `_build_categorized_tasks()` creates 21-day land preparation, pre-soak irrigation, and bund repair tasks. |
| **S** | Can Arva Perform Tasks? | `ArvaAI/app/services/farming_chat_planner.py:120` | Confirmed | Divides tasks into `SYSTEM_AUTOMATED` (pre-soak, gate command) vs `FARMER_MANUAL` (plowing, harrowing). |
| **T1** | Check Hardware Interlocks: Safe? | `ArvaCore/arvacore_engine.py:152` | Confirmed | `ArvaCoreDecisionEngine` evaluates physical E-Stop interlock, flood depth overflow, and dry-run state. |
| **T2** | Abort Auto-Run: Interlock Alert | `ArvaCore/arvacore_engine.py:155` | Confirmed | Returns `REJECTED_SAFETY_VIOLATION` with `SAFE_STOP` command and explicit blocking rationale. |
| **T** | Operate Pumps & Water Gates | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:195` | Partial | **Safety Discrepancy**: Firmware and backend strictly prohibit autonomous unattended pump start from chat; all actuation requires operator manual confirmation. Simulated auto-run exists in test mode. |
| **U** | Monitor Field & Watchdog Timer | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:365` | Confirmed | Controller checks runtime every loop iteration (`now - pumpStartTime >= MAX_PUMP_RUNTIME_MS`). |
| **V** | Target Conditions Reached? | `ArvaCore/arvacore_engine.py:80` | Confirmed | Evaluates target ponded water level (e.g. +5.0 cm reached in still-well). |
| **W** | Stop Irrigation | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:205` | Confirmed | De-energizes relay (`digitalWrite(RELAY_PUMP_PIN, RELAY_OFF)`), enters cooldown. |
| **V1** | Runtime Timeout Exceeded? | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:371` | Confirmed | Evaluates if continuous pump runtime exceeds `MAX_PUMP_RUNTIME_MS` (45 minutes). |
| **V2** | Trip Max Runtime Cutoff | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:373` | Confirmed | `[SAFETY INTERLOCK] Max single pulse runtime exceeded. Emergency shutoff.` |
| **X** | Display Required Manual Tasks | `ArvaAI/app/services/farming_chat_planner.py:125` | Confirmed | Displays manual farmer tasks (e.g. clearing debris, opening manual lateral sluices, leveling). |
| **Y** | Present Remaining Tasks | `ArvaNet_Frontend/lib/features/farming_chat/presentation/farming_chatbot_screen.dart:180` | Confirmed | Interactive task checklist rendered in chat with status badges (Completed, Pending, Blocked). |
| **Z** | Save Progress in Chat History | `ArvaNet_Backend/openspec/changes/archive/2026-10-31-2026-10-31-ai-chat-history-and-plan-lifecycle/design.md:15` | Confirmed | Persists task progress to `chatbot_sessions`, `planting_plans`, and `planting_tasks` in PostgreSQL. |
| **AA** | Explain Field Unsuitability | `ArvaAI/app/services/farming_chat_planner.py:185` | Confirmed | Generates structured diagnostic explaining why field is not ready (e.g. excess water, E-Stop active). |
| **AB** | Identify Issues via Sensors & MCP | `ArvaAI/app/services/farming_chat_planner.py:280` | Confirmed | Pinpoints root cause using ultrasonic distance, soil moisture %, and weather rainfall forecast. |
| **AC** | Can Arva Address Issues? | `ArvaAI/app/services/farming_chat_planner.py:310` | Confirmed | Evaluates if automated drainage or flushing is possible vs requiring physical farmer field intervention. |
| **AD** | Perform Automated Actions with Checks | `ArvaNet_Backend/src/main/java/com/aquaflow/backend/domain/agri/TillageWorkflowManager.java:176` | Partial | Prepares automated action payload subject to zero-trust hardware interlock validation. |
| **AE** | Display Required Manual Actions | `ArvaAI/app/services/farming_chat_planner.py:340` | Confirmed | Displays farmer corrective instructions (e.g. "Dig drainage trench", "Reset physical E-Stop switch"). |
| **AF** | Save Progress in Chat History | `ArvaAI/app/db/workflow_db.py:55` | Confirmed | Logs audit event and execution state to `ai_task_event` and `planting_plans`. |
| **AG** | Retrieve Previous Conversation | `ArvaNet_Backend/src/main/java/com/aquaflow/backend/domain/FarmingChatbotServiceImpl.java:210` | Confirmed | Loads historical chat session and plan context from `chatbot_messages`. |
| **AH** | Review Latest Conditions | `ArvaAI/app/services/farming_chat_planner.py:220` | Confirmed | Fetches latest sensor telemetry and recalculates readiness score against updated field state. |
| **AI1** | Field Now Suitable? | `ArvaAI/app/services/farming_chat_planner.py:230` | Confirmed | Re-evaluates readiness condition: if resolved, transitions to Q; if still blocked, loops to AA. |
| **AJ** | Select Pump or Water Gate | `ArvaNet_Frontend/lib/features/irrigation/presentation/manual_control_screen.dart:45` | Confirmed | UI allows operator to select Central Pump or ArvaGate 3-Gate Subsystem (Gates 1, 2, 3). |
| **AK** | Check Authorization & Sump Level | `ArvaNet_Backend/src/main/java/com/aquaflow/backend/domain/IrrigationCommandStateMachineImpl.java:177` | Partial | Checks RBAC role (`ROLE_ADMIN` / `ROLE_OPERATOR`) and sensor levels; explicit physical sump float switch is not present in hardware (uses canal still-well and dry-run flow meter). |
| **AL** | Is Operation Safe? | `ArvaCore/arvacore_engine.py:170` | Confirmed | Checks hardware lockout, E-Stop state, safe ponding ceiling, and operator role. |
| **AM** | Display Safety Warning / Block | `ArvaNet_Frontend/lib/features/irrigation/presentation/manual_control_screen.dart:85` | Confirmed | Shows error SnackBar / alert banner when command is rejected by safety interlock. |
| **AN** | Start Pump or Open Gate | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:195` | Confirmed | Energizes pump relay (`RELAY_ON`) or dispatches ArvaGate relay open command via backend. |
| **AO** | Monitor Water Conditions & Duration | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:360` | Confirmed | Reads YF-S201 flow sensor pulse counts and tracks elapsed pulse runtime. |
| **AP** | Target Level Reached? | `ArvaCore/arvacore_engine.py:80` | Confirmed | Checks if water depth reached desired target (e.g. +5.0 cm) or operator target duration elapsed. |
| **AP1** | Max Runtime Exceeded? | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:371` | Confirmed | Hardware safety interlock trips if runtime reaches 45 minutes (`MAX_PUMP_RUNTIME_MS`). |
| **AQ** | Stop Pump or Close Gate | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:205` | Confirmed | Shuts off pump relay (`RELAY_OFF`) and closes lateral gates; triggers cooldown state. |
| **AR** | Update Farm Status & Telemetry | `ArvaCore/sketch_pump_controller/sketch_pump_controller.ino:388` | Confirmed | Uplinks actuator state, total liters delivered, and post-irrigation telemetry to backend. |
| **AS** | Continue Using System? | `ArvaNet_Frontend/lib/features/shell/presentation/app_shell.dart:120` | Confirmed | Farmer navigation loop: returning to dashboard menu (G) or closing application/logging out. |
| **AT** | End | `ArvaNet_Frontend/lib/features/auth/presentation/controllers/auth_controller.dart:140` | Confirmed | User logs out or terminates session; app returns to unauthenticated terminal state. |

---

## 3. Decision Node Edge Check (15 Decision Nodes)

| Node ID | Decision Label | Flowchart Outgoing Edges | Actual Code Branches & Implementation Alignment | Alignment Status |
|:---|:---|:---|:---|:---|
| **D** | Login Successful? | `[Yes] -> F`<br/>`[No] -> E` | `auth_controller.dart:102`: Successful JWT auth sets `AuthStatus.authenticated` (navigates to `AppShell`/`HomeScreen`), while failed auth sets `AuthStatus.error` and displays `_buildErrorBanner`. | **MATCH** |
| **G** | Select Desired Function | `[Monitor Farm] -> H`<br/>`[Ask Arva AI] -> J`<br/>`[Manage Irrigation] -> AJ` | `app_shell.dart:45`: Tab 0/2 maps to Sensors/Home (`HomeScreen`/`SensorsScreen`), Tab 1 maps to AI (`FarmingChatbotScreen`), Tab 3 maps to Manual Control (`ManualControlScreen`). | **MATCH** |
| **N1** | Sensor Data Fresh & Valid? | `[Yes] -> O`<br/>`[No / Stale MQTT] -> N2` | `telemetry_quality_engine.py:45`: If telemetry age > 15m or anomalies detected, triggers warning and falls back to baseline; if fresh and valid, proceeds to weather query. | **MATCH** |
| **O1** | Did MCP Query Succeed? | `[Success] -> O3`<br/>`[Timeout / Null] -> O2` | `client.py:95`: MCP client catches timeout (>15s) or null response, routing to fallback mode; on success, merges forecast into live context. | **MATCH** |
| **P** | Field Suitable for Crop? | `[Yes] -> Q`<br/>`[No] -> AA` | `farming_chat_planner.py:202`: If readiness score >= 60% and water bounds acceptable, confirms suitability; otherwise explains unsuitability and diagnostic gaps. | **MATCH** |
| **S** | Can Arva Perform Tasks? | `[Yes] -> T1`<br/>`[No] -> X` | `farming_chat_planner.py:120`: Categorizes tasks into automated (`SYSTEM_AUTOMATED`) vs physical farmer actions (`FARMER_MANUAL`). | **MATCH** |
| **T1** | Check Hardware Interlocks: Safe? | `[Safe] -> T`<br/>`[Unsafe / Dry-Run] -> T2` | `arvacore_engine.py:152`: Verifies physical E-Stop, ponding overflow threshold, and dry-run state. If unsafe, returns `REJECTED_SAFETY_VIOLATION` (`T2`). | **MATCH** |
| **V** | Target Conditions Reached? | `[Yes] -> W`<br/>`[No] -> V1` | `arvacore_engine.py:80` & `sketch_pump_controller.ino:365`: If target water level (+5 cm) reached, stops pump; if not reached, evaluates runtime limit. | **MATCH** |
| **V1** | Runtime Timeout Exceeded? | `[Yes / Failsafe] -> V2`<br/>`[No] -> U` | `sketch_pump_controller.ino:371`: If elapsed pump time >= 45m (`MAX_PUMP_RUNTIME_MS`), trips cutoff (`V2`); otherwise continues loop (`U`). | **MATCH** |
| **AC** | Can Arva Address Issues? | `[Yes] -> AD`<br/>`[No] -> AE` | `farming_chat_planner.py:310`: If automated mitigation is viable (e.g. gate flush), prepares action; if manual intervention required (e.g. bund break, weed removal), alerts farmer. | **MATCH** |
| **AI1** | Field Now Suitable? | `[Yes] -> Q`<br/>`[No] -> AA` | `farming_chat_planner.py:230`: Re-evaluates field suitability after remedial actions; loops back to AA if still inadequate, proceeds to Q if resolved. | **MATCH** |
| **AL** | Is Operation Safe? | `[Yes] -> AN`<br/>`[No / Lockout] -> AM` | `arvacore_engine.py:170`: Rejects manual dispatch if E-Stop active, fault lockout unacknowledged, or unauthorized role. Blocks with warning UI (`AM`). | **MATCH** |
| **AP** | Target Level Reached? | `[Yes] -> AQ`<br/>`[No] -> AP1` | `sketch_pump_controller.ino:365`: When operator target level or duration is reached, stops pump (`AQ`); otherwise checks max safety timeout. | **MATCH** |
| **AP1** | Max Runtime Exceeded? | `[Yes] -> AQ`<br/>`[No] -> AO` | `sketch_pump_controller.ino:371`: Hard cutoff at 45 minutes stops pump immediately; otherwise continues monitoring water conditions (`AO`). | **MATCH** |
| **AS** | Continue Using System? | `[Yes] -> G`<br/>`[No] -> AT` | `app_shell.dart:120`: User selects another navigation tab or exits/logs out to end session. | **MATCH** |

---

## 4. Discrepancies & Proposed Diagram Enhancements

1. **Zero-Direct Actuation Architectural Invariant**:
   - *Code Reality*: `ArvaAI` has a strict architectural and unit-tested safety invariant (`test_ai_safety_invariant_against_direct_actuation` in `test_cross_repo_integration.py` and `read_only_tools.py`) that strictly forbids AI conversational agent tools from directly triggering physical relays or actuators. Node `T` ("Operate Pumps & Water Gates") in Section 3 can only execute in simulation mode or through an explicit operator confirmation gate in `ManualControlScreen`.
   - *Status*: **PROPOSED, NOT APPLIED** (Flowchart rendered verbatim per user instructions).
   - *Suggested Change*: Add an explicit operator authorization gate between `T1` and `T` (`Farmer Authorizes AI Pre-Soak Action`), matching the actual zero-trust safety architecture.

2. **Sump Float vs Flow-Meter Dry-Run Protection**:
   - *Code Reality*: Flowchart Node `AK` states "Check Authorization & Sump Level". In physical hardware deployment (`sketch_pump_controller.ino:378` and `controller_config.h`), there is no submersible sump float switch on the input channel; instead, dry-run protection is accomplished dynamically via the **YF-S201 Hall-Effect flow meter**: if the pump relay is energized for >15 seconds and flow rate is `< 5.0 L/min`, the controller immediately trips dry-run emergency shutoff.
   - *Status*: **PROPOSED, NOT APPLIED**.
   - *Suggested Change*: Update Node `AK` label to "Check Authorization & Water Supply / Flow Readiness" and Node `T1` to explicitly cite "Flow Meter Verification (<5 L/min)".

3. **Multi-Terrace 6-Node Spatial Aggregation**:
   - *Code Reality*: Flowchart Node `N` states "Retrieve ArvaNode Telemetry via MQTT". The physical system deploys six (6) distinct nodes (`ARVANODE-001` through `ARVANODE-006`) across six field terrace zones, transmitting via 433MHz LoRa to edge gateway `ArvaLink`, which uplinks to Spring Boot via HTTPS/REST. Ingestion also supports MQTT via `ArvaIotIngestionEngine.java`.
   - *Status*: **PROPOSED, NOT APPLIED**.
   - *Suggested Change*: Annotate Node `N` as "Retrieve 6-Node Spatial Telemetry via LoRa/MQTT Gateway".

4. **13-Step Concrete Workflow Lifecycle (S01–S13)**:
   - *Code Reality*: The actual Arva AI workflow implementation in `ArvaAI` and `arva_workflow.db` uses a formal 13-step DAG (S01 Capture Prompt $\to$ S02 Retrieve Task History $\to$ S03 Classify Intent $\to$ S04 User Decision $\to$ S05 Requirements $\to$ S06 Plan Implementation $\to$ S07 Verify Prerequisites $\to$ S08 Implement Changes $\to$ S09 Run Tests $\to$ S10 Conditional Remediation $\to$ S11 Completeness Review $\to$ S12 Persist Outcome $\to$ S13 Report Results). The flowchart condenses these into conversational steps (`J` through `AI1`).
   - *Status*: **PROPOSED, NOT APPLIED**.
   - *Suggested Change*: Maintain the existing high-level user-centric flowchart as the primary thesis diagram, and reference the 13-step DAG as an internal subsystem detail.

---

## 5. Open Questions for System Architects & Authors

1. **Thesis Manuscript Visual Fidelity**: Does the PUP Computer Engineering thesis defense committee require the formal hardware safety disclaimer ("AI Advisory Only: Actuation requires operator manual authorization") to appear as a visual note on the diagram, or should Section 3 depict the idealized automated workflow?
2. **LoRa vs MQTT Protocol Framing**: Should Node `N` reflect the primary field radio technology (Semtech SX1278 433MHz LoRa via ArvaLink Gateway) alongside MQTT, given that the physical nodes lack direct Wi-Fi/cellular backhaul and communicate via LoRa?
3. **Sump Sensor Clarification**: Is an external physical sump float switch planned for future deployment at Barangay Silang, Lopez, Quezon, or should the thesis permanently document the YF-S201 flow meter pulse verification as the dry-run prevention mechanism?
