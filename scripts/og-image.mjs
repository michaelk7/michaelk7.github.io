// Renders public/og.png, the social preview image. Run with: node scripts/og-image.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0c0e0d"/>
  <g stroke="#1a1e1c" stroke-width="1">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 64}" y1="0" x2="${i * 64}" y2="630"/>`).join('')}
    ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${i * 64}" x2="1200" y2="${i * 64}"/>`).join('')}
  </g>
  <text x="96" y="120" font-family="Menlo, monospace" font-size="28" fill="#e6e8e6">~/kelnar<tspan fill="#7ee2a8">_</tspan></text>
  <circle cx="104" cy="262" r="8" fill="#7ee2a8"/>
  <text x="128" y="272" font-family="Menlo, monospace" font-size="28" fill="#7ee2a8">Cybersecurity Compliance Testing · IoT &amp; Firmware</text>
  <text x="92" y="388" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="104" font-weight="600" letter-spacing="-3" fill="#e6e8e6">Michael Kelnar</text>
  <text x="96" y="460" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="34" fill="#8a918c">I test connected products before they ship.</text>
  <rect x="96" y="540" width="1008" height="1" fill="#232825"/>
  <text x="96" y="582" font-family="Menlo, monospace" font-size="24" fill="#6b726d">michaelkelnar.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));
console.log('wrote public/og.png');
