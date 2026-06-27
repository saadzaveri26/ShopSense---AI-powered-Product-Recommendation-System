import React from 'react'

export default function ResultBanner({ count, query }) {
  return (
    <div className="bg-secondary-fixed text-ink p-4 border-l-4 border-secondary-container mb-8 flex items-start gap-4">
      <span className="material-symbols-outlined text-secondary-container mt-1">auto_awesome</span>
      <div>
        <h3 className="font-sans text-body-lg font-semibold mb-1">
          AI Recommendations Ready
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant">
          Gemini picked {count} {count === 1 ? 'product' : 'products'} based on: "{query}"
        </p>
      </div>
    </div>
  )
}
