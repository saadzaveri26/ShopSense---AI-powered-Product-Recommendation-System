import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import ResultBanner from './components/ResultBanner'
import LoadingState from './components/LoadingState'
import { PRODUCTS } from './lib/products'
import { getRecommendations } from './lib/gemini'

export default function App() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recs, setRecs] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const recIds = new Set(recs ? recs.map(r => r.id) : [])
  const recMap = recs
    ? recs.reduce((acc, r) => { acc[r.id] = r.reason; return acc }, {})
    : {}

  const filteredProducts = PRODUCTS
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      const aRec = recIds.has(a.id) ? 1 : 0
      const bRec = recIds.has(b.id) ? 1 : 0
      return bRec - aRec
    })

  const handleSearch = async () => {
    if (!query.trim() || loading) return
    setLoading(true)
    setError(null)
    setRecs(null)

    try {
      const result = await getRecommendations(query, PRODUCTS)
      setRecs(result)
    } catch (err) {
      setError("Couldn't get recommendations. Check your API key and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 mt-[68px]">
        <Sidebar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          loading={loading}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <main className="ml-0 md:ml-[340px] flex-1 p-5 md:p-12 bg-cream min-h-screen">
          {loading && <LoadingState />}

          {error && !loading && (
            <div className="bg-error-container text-on-error-container p-4 border-l-4 border-red-600 mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined">error</span>
              <div>
                <h3 className="font-sans text-body-lg font-semibold">Recommendation Error</h3>
                <p className="font-sans text-body-md">{error}</p>
              </div>
            </div>
          )}

          {recs && !loading && (
            <ResultBanner
              count={recs.filter(r => PRODUCTS.some(p => p.id === r.id && (activeCategory === 'All' || p.category === activeCategory))).length}
              query={query}
            />
          )}

          {!loading && (
            <>
              <div className="flex justify-between items-end mb-8">
                <h1 className="font-serif text-display-lg text-ink">Our Catalog</h1>
              </div>
              <div className="product-grid">
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    isRecommended={recIds.has(p.id)}
                    reason={recMap[p.id]}
                  />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
