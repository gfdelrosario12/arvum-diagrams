/**
 * geometry.js
 * Routing, text wrapping, and shape anchor calculations for the ArvaLink technical flowchart.
 */

/**
 * Returns connection coordinates (x, y) on the perimeter of a node shape.
 * Supports stadium, process, diamond, and parallelogram geometries.
 * 
 * @param {Object} node - { id, type, x, y, w, h }
 * @param {string} side - 'top' | 'bottom' | 'left' | 'right'
 * @returns {{ x: number, y: number }}
 */
export function getAnchor(node, side) {
  const { x, y, w, h, type } = node;
  const hw = w / 2;
  const hh = h / 2;

  switch (side) {
    case 'top':
      return { x, y: y - hh };
    case 'bottom':
      return { x, y: y + hh };
    case 'left':
      if (type === 'io') {
        // Parallelogram skewed by 10px: at vertical center, x is x - hw
        return { x: x - hw, y };
      }
      return { x: x - hw, y };
    case 'right':
      if (type === 'io') {
        return { x: x + hw, y };
      }
      return { x: x + hw, y };
    default:
      return { x, y };
  }
}

/**
 * Wraps text into multiple lines fitting within maxWidth based on character estimation.
 * 
 * @param {string} text 
 * @param {number} maxCharsPerLine 
 * @returns {string[]}
 */
export function wrapText(text, maxCharsPerLine = 22) {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if (!currentLine) {
      currentLine = word;
    } else if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

/**
 * Converts a list of 2D points into an SVG path 'd' string with orthogonal lines.
 * 
 * @param {Array<{x: number, y: number}>} points 
 * @returns {string}
 */
export function pointsToSvgPath(points) {
  if (!points || points.length === 0) return '';
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
}
