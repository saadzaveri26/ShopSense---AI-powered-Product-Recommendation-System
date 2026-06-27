import React from 'react'

export default function ProductCard({ product, isRecommended, reason }) {
  const bgClass = isRecommended ? 'bg-orange-50' : 'bg-white'
  const borderClass = isRecommended ? 'border-secondary-container' : 'border-border'
  const priceClass = isRecommended ? 'text-secondary-container font-bold' : 'text-ink'

  return (
    <div className={`${bgClass} border ${borderClass} p-4 flex flex-col justify-between h-full hover:shadow-md transition-shadow relative overflow-hidden group`}>
      {isRecommended && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-secondary-container opacity-10 transform rotate-45 translate-x-8 -translate-y-8" />
      )}

      <div>
        <div className="w-full h-40 bg-surface-variant mb-4 flex items-center justify-center text-4xl relative overflow-hidden">
          <span className="relative z-10">{product.emoji}</span>
        </div>

        <span className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider block mb-1">
          {product.category}
        </span>

        <h3 className="font-serif text-headline-sm text-ink mb-2 leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <span className="material-symbols-outlined fill text-[16px] text-orange-400">star</span>
          <span className="font-sans text-body-sm text-on-surface-variant">{product.rating}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-label-caps border border-outline-variant px-1 py-0.5 rounded text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className={`font-mono text-label-mono text-lg ${priceClass} flex justify-between items-center border-t border-outline-variant pt-3`}>
          <span>${product.price}</span>
          <button className="hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>

        {isRecommended && reason && (
          <div className="mt-4 p-3 bg-secondary-fixed-dim bg-opacity-20 rounded border-l-2 border-secondary-container">
            <span className="font-mono text-label-caps text-secondary-container flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              AI Pick
            </span>
            <p className="font-sans text-body-sm text-on-surface-variant italic">
              "{reason}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
