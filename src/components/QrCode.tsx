const SIZE = 25;
const FINDERS = [
  [0, 0],
  [SIZE - 7, 0],
  [0, SIZE - 7],
];

const inFinder = (x: number, y: number) => FINDERS.some(([fx, fy]) => x >= fx - 1 && x <= fx + 7 && y >= fy - 1 && y <= fy + 7);

const modules = Array.from({ length: SIZE * SIZE }, (_, i) => [i % SIZE, Math.floor(i / SIZE)])
  .filter(([x, y]) => !inFinder(x, y) && (x * 31 + y * 17 + ((x * y) ^ (x + y))) % 7 < 3)
  .map(([x, y]) => `M${x} ${y}h1v1h-1z`)
  .join("");

export function QrCode({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`} shapeRendering="crispEdges" className={className}>
      <rect x="-1" y="-1" width={SIZE + 2} height={SIZE + 2} fill="#fff" />
      <path d={modules} fill="#000" />
      {FINDERS.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="#000" />
          <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="#000" />
        </g>
      ))}
    </svg>
  );
}
