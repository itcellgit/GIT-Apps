import { forwardRef } from 'react';

const Toolbar = forwardRef(function Toolbar(
  { query, onQuery, category, onCategory, categories, counts, view, onView },
  searchRef
) {
  return (
    <div className="toolbar">
      <div className="search">
        <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          ref={searchRef}
          type="search"
          placeholder="Search apps, e.g. elective, leave, library"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          aria-label="Search applications"
        />
        <kbd className="kbd">/</kbd>
      </div>

      <div className="toolbar-row">
        <div className="chips" role="tablist" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className={`chip ${category === c ? 'is-active' : ''}`}
              onClick={() => onCategory(c)}
            >
              {c}
              <span className="chip-count">{counts[c]}</span>
            </button>
          ))}
        </div>

        <div className="view-toggle" role="group" aria-label="Layout">
          <button
            className={view === 'grid' ? 'is-active' : ''}
            onClick={() => onView('grid')}
            aria-pressed={view === 'grid'}
            title="Card view"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="7" height="7" rx="1.5" />
              <rect x="13" y="4" width="7" height="7" rx="1.5" />
              <rect x="4" y="13" width="7" height="7" rx="1.5" />
              <rect x="13" y="13" width="7" height="7" rx="1.5" />
            </svg>
          </button>
          <button
            className={view === 'list' ? 'is-active' : ''}
            onClick={() => onView('list')}
            aria-pressed={view === 'list'}
            title="Compact list"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Toolbar;
