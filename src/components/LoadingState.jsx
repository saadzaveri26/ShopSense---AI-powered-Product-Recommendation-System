import React from 'react'

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <span className="material-symbols-outlined animate-spin text-primary text-4xl mb-4">progress_activity</span>
      <p className="font-sans text-body-lg text-on-surface-variant">Analyzing catalog...</p>
    </div>
  )
}
