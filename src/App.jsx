import { useEffect, useMemo, useRef, useState } from 'react';
import { APPS, CATEGORIES } from './apps.js';
import Header from './components/Header.jsx';
import Toolbar from './components/Toolbar.jsx';
import AppCard from './components/AppCard.jsx';
import AppRow from './components/AppRow.jsx';
import Footer from './components/Footer.jsx';

const VIEW_KEY = 'git-apps-view';

function readView() {
  try {
    return localStorage.getItem(VIEW_KEY) || 'grid';
  } catch {
    return 'grid';
  }
}

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [view, setView] = useState(readView);
  const searchRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(VIEW_KEY, view);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [view]);

  // Press "/" anywhere to jump to search.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const counts = useMemo(() => {
    const c = { All: APPS.length };
    for (const cat of CATEGORIES) c[cat] = APPS.filter((a) => a.category === cat).length;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return APPS.filter((a) => {
      if (category !== 'All' && a.category !== category) return false;
      if (!q) return true;
      return [a.name, a.description, a.category, a.url, ...a.audience]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [query, category]);

  // Group results by category so the listing reads as a directory.
  const groups = useMemo(
    () =>
      CATEGORIES.map((cat) => ({
        cat,
        apps: filtered.filter((a) => a.category === cat),
      })).filter((g) => g.apps.length > 0),
    [filtered]
  );

  return (
    <div className="page">
      <Header total={APPS.length} />

      <main className="container main">
        <Toolbar
          ref={searchRef}
          query={query}
          onQuery={setQuery}
          category={category}
          onCategory={setCategory}
          categories={['All', ...CATEGORIES]}
          counts={counts}
          view={view}
          onView={setView}
        />

        <p className="result-meta" aria-live="polite">
          Showing <strong>{filtered.length}</strong> of {APPS.length} applications
        </p>

        {groups.length === 0 ? (
          <div className="empty">
            <p>No applications match “{query}”.</p>
            <button
              className="btn-ghost"
              onClick={() => {
                setQuery('');
                setCategory('All');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          groups.map(({ cat, apps }) => (
            <section key={cat} className="group" aria-labelledby={`h-${cat}`}>
              <h2 id={`h-${cat}`} className="group-title">
                {cat}
                <span className="group-count">{apps.length}</span>
              </h2>
              {view === 'grid' ? (
                <div className="grid">
                  {apps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              ) : (
                <ul className="list">
                  {apps.map((app) => (
                    <AppRow key={app.id} app={app} />
                  ))}
                </ul>
              )}
            </section>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
}
