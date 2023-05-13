import React from 'react'

export default function Grainy() {
  return (
    <svg className="hidden">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.65" />
      </filter>
    </svg>
  )
}
