import Badges, { hostOf } from './Badges.jsx';

export default function AppRow({ app }) {
  return (
    <li>
      <a
        className={`row ${app.status === 'legacy' ? 'is-legacy' : ''}`}
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="row-logo" src={`./logos/${app.logo}`} alt="" loading="lazy" />
        <div className="row-main">
          <span className="row-title">{app.name}</span>
          <span className="row-desc">{app.description}</span>
        </div>
        <div className="row-side">
          <Badges app={app} />
          <span className="card-host">{hostOf(app.url)}</span>
        </div>
        <svg className="row-arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </li>
  );
}
