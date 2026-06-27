import React from 'react'

export default function ResultBanner({ count, query }) {
  return (
    <div className="bg-secondary-fixed text-ink p-3 md:p-4 border-l-4 border-secondary-container mb-6 md:mb-8 flex items-start gap-3 md:gap-4">
      <span className="material-symbols-outlined text-secondary-container mt-0.5 text-[20px] md:text-[24px]">auto_awesome</span>
      <div className="min-w-0">
        <h3 className="font-sans text-body-md md:text-body-lg font-semibold mb-1">
          AI Recommendations Ready
        </h3>
        <p className="font-sans text-body-sm md:text-body-md text-on-surface-variant break-words">
          Gemini picked {count} {count === 1 ? 'product' : 'products'} based on: "{query}"
        </p>
      </div>
    </div>
  )
}
