import Badges, { hostOf } from './Badges.jsx';

export default function AppCard({ app }) {
  return (
    <a
      className={`card ${app.status === 'legacy' ? 'is-legacy' : ''}`}
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-logo">
        <img src={`./logos/${app.logo}`} alt="" loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{app.name}</h3>
        <p className="card-desc">{app.description}</p>
        <Badges app={app} />
      </div>
      <div className="card-foot">
        <span className="card-host">{hostOf(app.url)}</span>
        <span className="card-open">
          Open
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </a>
  );
}
