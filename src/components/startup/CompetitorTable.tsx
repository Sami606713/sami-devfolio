interface TableRow {
  feature: string;
  connectxeo: string;
  tidio: string;
  gorgias: string;
  intercomFin: string;
  zendesk: string;
}

const ROWS: TableRow[] = [
  {
    feature: "Answer questions (FAQ)",
    connectxeo: "✓",
    tidio: "✓",
    gorgias: "✓",
    intercomFin: "✓",
    zendesk: "✓",
  },
  {
    feature: "Process refunds (AI)",
    connectxeo: "✓",
    tidio: "✗",
    gorgias: "Human only",
    intercomFin: "Limited",
    zendesk: "✗",
  },
  {
    feature: "Update inventory",
    connectxeo: "✓",
    tidio: "✗",
    gorgias: "✗",
    intercomFin: "✗",
    zendesk: "✗",
  },
  {
    feature: "Manage products",
    connectxeo: "✓",
    tidio: "✗",
    gorgias: "✗",
    intercomFin: "✗",
    zendesk: "✗",
  },
  {
    feature: "WhatsApp deployment",
    connectxeo: "✓",
    tidio: "✗",
    gorgias: "✗",
    intercomFin: "+$29/mo",
    zendesk: "✗",
  },
  {
    feature: "Telegram deployment",
    connectxeo: "✓",
    tidio: "✗",
    gorgias: "✗",
    intercomFin: "✗",
    zendesk: "✗",
  },
  {
    feature: "No-code builder",
    connectxeo: "✓",
    tidio: "Partial",
    gorgias: "✗",
    intercomFin: "✗",
    zendesk: "✗",
  },
  {
    feature: "Flat predictable pricing",
    connectxeo: "✓",
    tidio: "✗",
    gorgias: "✗",
    intercomFin: "✗",
    zendesk: "✗",
  },
];

function CellValue({ value, isConnectXeo }: { value: string; isConnectXeo?: boolean }) {
  if (value === "✓") {
    return (
      <span className={`font-bold text-base ${isConnectXeo ? "text-accent" : "text-green-400"}`}>
        ✓
      </span>
    );
  }
  if (value === "✗") {
    return <span className="font-bold text-base text-red-400">✗</span>;
  }
  return <span className="text-sm text-muted">{value}</span>;
}

export function CompetitorTable() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          How We Compare
        </h2>
        <p className="text-base mb-10 text-muted">
          Every competitor either just answers questions, or costs $500+/month to take actions.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-surface-2">
                <th className="px-4 py-3 text-left text-xs uppercase tracking-wider font-semibold text-muted border-b border-white/[0.08]">
                  Feature
                </th>
                <th className="px-4 py-3 text-center text-xs uppercase tracking-wider font-bold text-accent border-b border-white/[0.08]">
                  ConnectXeo
                </th>
                {["Tidio", "Gorgias", "Intercom Fin", "Zendesk"].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-center text-xs uppercase tracking-wider font-semibold text-muted border-b border-white/[0.08]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-surface" : ""}
                >
                  <td className="px-4 py-3 text-sm font-medium text-white border-b border-white/[0.08]">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-center border-b border-white/[0.08] bg-accent/10">
                    <CellValue value={row.connectxeo} isConnectXeo />
                  </td>
                  <td className="px-4 py-3 text-center border-b border-white/[0.08]">
                    <CellValue value={row.tidio} />
                  </td>
                  <td className="px-4 py-3 text-center border-b border-white/[0.08]">
                    <CellValue value={row.gorgias} />
                  </td>
                  <td className="px-4 py-3 text-center border-b border-white/[0.08]">
                    <CellValue value={row.intercomFin} />
                  </td>
                  <td className="px-4 py-3 text-center border-b border-white/[0.08]">
                    <CellValue value={row.zendesk} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
