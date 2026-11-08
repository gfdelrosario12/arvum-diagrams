# ArvaLink Process Flowchart Component

This package contains the complete, formal, black-and-white 57-node / 72-connection process flowchart for the **ArvaLink** agricultural monitoring and automated water management ecosystem.

## Components & File Structure

- `diagramData.js`: Centralized data store exporting `NODES` (57 nodes with exact shapes, dimensions, and coordinates), `EDGES` (72 connections with orthogonal waypoints), and `SECTIONS` (4 section headings).
- `geometry.js`: Connection anchor calculators (`getAnchor`), SVG orthogonal path string formatters (`pointsToSvgPath`), and string wrapping helpers (`wrapText`).
- `ShapeNode.jsx`: Pure SVG node shape component supporting terminators (stadium, $r_x = h/2$), process steps (rounded rectangles, $r_x \ge 10$), decision diamonds (polygon), and I/O data nodes (parallelograms skewed by 10px).
- `Diagram.jsx`: Default React export rendering the complete inline SVG flowchart, section headings, edge lines, small solid black arrowheads, and edge labels. Includes dev-time validation assertions.
- `Diagram.css`: Formal print and screen styling targeting US Letter portrait (8.5in $\times$ 11in, 0.4in margins), Times New Roman font family, and print media rules.
- `index.js`: Re-exports `Diagram` as default.
- `SYSTEM_AUDIT.md`: Complete architectural grounding audit of the 57 nodes and 15 decision branches against the live multi-repository codebase.

## How to Import & Use

```jsx
import Diagram from './Diagram'; // or from '.' inside /diagrams

export default function MyPage() {
  return <Diagram />;
}
```

## How to View and Print to PDF

1. **Start the local Next.js server**:
   ```bash
   cd diagrams
   npm run dev
   ```
2. **Open in browser**:
   Navigate to `http://localhost:3000`.
3. **Print / Export to PDF**:
   Click the **Print / Save as PDF** button at the top of the page (or press `Ctrl+P` / `Cmd+P`). In the print dialog:
   - Destination: **Save as PDF**
   - Layout: **Portrait**
   - Paper size: **Letter**
   - Margins: **Default** or **None** (internal padding is 0.4in)
   - Background graphics: **Checked** (renders pure crisp vector lines)
