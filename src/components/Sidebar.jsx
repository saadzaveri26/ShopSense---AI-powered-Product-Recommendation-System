import React from 'react'
import { PRODUCTS } from '../lib/products'

const SUGGESTIONS = ['Camera', 'Office Chair', 'Headphones', 'Espresso Maker']
const CATEGORIES = ['All', 'Phone', 'Laptop', 'Headphones', 'Earbuds', 'Tablet', 'Wearable']

export default function Sidebar({ query, setQuery, onSearch, loading, activeCategory, setActiveCategory }) {
  const getCount = (cat) => cat === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length

  return (
    <aside className="fixed left-0 top-[68px] h-[calc(100vh-68px)] w-[340px] bg-cream-2 border-r border-outline-variant p-4 flex flex-col gap-16 overflow-y-auto hidden md:flex">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-headline-sm text-ink font-semibold">Tell us what you need</h2>
        <p className="font-sans text-body-sm text-on-surface-variant">Describe your perfect product.</p>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              if (!loading && query.trim()) onSearch()
            }
          }}
          placeholder="e.g., A lightweight laptop for travel and photo editing..."
          className="w-full min-h-[96px] bg-cream border border-outline-variant rounded p-3 font-sans text-body-md text-ink focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none mt-2 placeholder:text-muted"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setQuery(`I'm looking for a great ${s.toLowerCase()}...`)}
              className="font-mono text-label-caps border border-outline-variant px-2 py-1 hover:bg-surface-highest transition-colors cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={onSearch}
          disabled={loading || !query.trim()}
          className="mt-4 bg-primary text-white font-sans text-body-md py-3 px-4 rounded w-full flex justify-center items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">search</span>
          Find Recommendations
        </button>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-2">Categories</h3>
        <nav className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-body-md text-left self-start transition-colors cursor-pointer ${
                  active
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
