import React from 'react'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center h-[68px] px-4 md:px-12 bg-inverse-surface border-b border-outline-variant">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-primary-fixed cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[24px]">
            {sidebarOpen ? 'close' : 'menu'}
          </span>
        </button>
        <div className="font-serif text-headline-md font-bold text-primary-fixed tracking-tight border-l-4 border-primary-container pl-2 flex items-baseline">
          <span className="text-primary-fixed">ShopSense</span>
          <span className="text-secondary-container">.</span>
        </div>
      </div>
      <div>
        <span className="font-mono text-label-mono bg-surface-highest text-primary px-3 py-1 rounded-full flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
          <span className="hidden sm:inline">Gemini Powered</span>
          <span className="sm:hidden">AI</span>
        </span>
      </div>
    </header>
  )
}
