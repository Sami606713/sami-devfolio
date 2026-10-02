export function AgentNetwork() {
  const nodes = [
    { x: 200, y: 200, r: 10, label: "COORDINATOR", primary: true },
    { x: 100, y: 100, r: 6, label: "AGENT A" },
    { x: 300, y: 100, r: 6, label: "AGENT B" },
    { x: 100, y: 300, r: 6, label: "AGENT C" },
    { x: 300, y: 300, r: 6, label: "AGENT D" },
    { x: 200, y: 80, r: 4, label: "TOOL" },
    { x: 320, y: 200, r: 4, label: "TOOL" },
    { x: 200, y: 320, r: 4, label: "TOOL" },
    { x: 80, y: 200, r: 4, label: "TOOL" },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [2, 6], [3, 7], [4, 8],
  ];

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      {connections.map(([from, to], i) => (
        <line
          key={i}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="var(--line)"
          strokeWidth="1"
        />
      ))}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.primary ? "var(--accent)" : "var(--text)"}
            opacity={node.primary ? 1 : 0.6}
          />
          <text
            x={node.x}
            y={node.y - node.r - 8}
            textAnchor="middle"
            fill="var(--muted)"
            fontSize="8"
            fontFamily="var(--font-mono)"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
