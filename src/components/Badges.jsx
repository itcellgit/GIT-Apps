export function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export default function Badges({ app }) {
  return (
    <div className="badges">
      {app.access === 'intranet' && (
        <span className="badge badge-warn" title="Reachable only from the campus network">
          Campus network
        </span>
      )}
      {app.status === 'legacy' && (
        <span className="badge badge-muted" title="Older system kept for reference">
          Legacy
        </span>
      )}
      {app.audience.map((a) => (
        <span key={a} className="badge">
          {a}
        </span>
      ))}
    </div>
  );
}
