export default function Header({ total }) {
  return (
    <header className="header">
      <div className="brand-bar">
        <div className="container">
          <img
            className="brand-banner"
            src="./logos/git-logo-new.png"
            alt="KLS Gogte Institute of Technology, Belagavi"
          />
        </div>
      </div>
      <div className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Digital Campus</p>
          <h1>Applications Directory</h1>
          <p className="hero-sub">
            Every online service used at GIT, in one place. {total} applications for students,
            faculty, staff and alumni.
          </p>
        </div>
      </div>
    </header>
  );
}
