import { getNodesBounds, Node } from '@xyflow/react';

export async function downloadDiagramAsPng(
  nodes: Node[],
  filename: string = 'arvacore-system-block-diagram.png',
  padding: number = 60,
  scale: number = 2
) {
  const viewportElem = document.querySelector('.react-flow__viewport') as HTMLElement | null;
  if (!viewportElem) return;

  const bounds = getNodesBounds(nodes);
  const minX = bounds.x - padding;
  const minY = bounds.y - padding;
  const width = bounds.width + padding * 2;
  const height = bounds.height + padding * 2;

  // Deep clone viewportElem
  const clone = viewportElem.cloneNode(true) as HTMLElement;

  // Reset transform on clone so it renders in coordinate space
  clone.style.transform = `translate(${-minX}px, ${-minY}px)`;
  clone.style.transformOrigin = '0 0';

  // Inline computed styles from original DOM into clone elements to ensure fonts, colors, and borders render in SVG/Canvas
  const origElements = Array.from(viewportElem.querySelectorAll('*'));
  const cloneElements = Array.from(clone.querySelectorAll('*'));

  for (let i = 0; i < origElements.length; i++) {
    const orig = origElements[i] as HTMLElement | SVGElement;
    const cl = cloneElements[i] as HTMLElement | SVGElement;
    if (orig && cl && orig.nodeType === 1) {
      const computed = window.getComputedStyle(orig);
      let css = '';
      const props = [
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'line-height',
        'letter-spacing',
        'text-transform',
        'color',
        'background-color',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'padding',
        'margin',
        'display',
        'flex-direction',
        'align-items',
        'justify-content',
        'width',
        'height',
        'box-sizing',
        'position',
        'top',
        'left',
        'right',
        'bottom',
        'transform',
        'stroke',
        'stroke-width',
        'stroke-dasharray',
        'fill',
        'opacity',
        'text-align',
        'white-space',
      ];
      for (const p of props) {
        const val = computed.getPropertyValue(p);
        if (val) css += `${p}:${val};`;
      }
      cl.setAttribute('style', css);
    }
  }

  // Construct SVG foreignObject wrapping the cloned HTML
  const serializer = new XMLSerializer();
  const serializedClone = serializer.serializeToString(clone);

  const svgXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#ffffff" />
  <foreignObject width="${width}" height="${height}">
    <div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;position:relative;background:#ffffff;">
      ${serializedClone}
    </div>
  </foreignObject>
</svg>`;

  const blob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.crossOrigin = 'anonymous';

  img.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        return;
      }

      // Draw pure white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Scale for crisp high-DPI output
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((pngBlob) => {
        if (!pngBlob) {
          URL.revokeObjectURL(url);
          return;
        }
        const pngUrl = URL.createObjectURL(pngBlob);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
      }, 'image/png');
    } catch {
      URL.revokeObjectURL(url);
    }
  };

  img.onerror = () => {
    URL.revokeObjectURL(url);
  };

  img.src = url;
}
