import React from 'react'

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
