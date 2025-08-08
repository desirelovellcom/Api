'use client'

import { useState } from 'react'

export function LizardIcon() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [soundWaves, setSoundWaves] = useState<number[]>([])

  const handleClick = () => {
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }

    // Start animation
    setIsAnimating(true)
    
    // Create sound wave visualization
    const waves = Array.from({ length: 6 }, (_, i) => i)
    setSoundWaves(waves)

    // Reset after animation
    setTimeout(() => {
      setIsAnimating(false)
      setSoundWaves([])
    }, 1000)
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-sky-200 hover:scale-105 ${
          isAnimating ? 'animate-pulse scale-110' : ''
        }`}
      >
        {/* Lizard SVG Icon */}
        <svg
          className={`w-12 h-12 text-sky-500 transition-all duration-300 ${
            isAnimating ? 'animate-bounce' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.5 2c-1.5 0-2.8.6-3.8 1.6L7.2 5.1c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0l1.5-1.5c.7-.7 1.6-1.1 2.7-1.1 2.1 0 3.8 1.7 3.8 3.8 0 1.1-.4 2-.1 2.7l1.5 1.5c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1l-1.5-1.5C17.4 8.3 18 7 18 5.5 18 3.6 16.4 2 14.5 2h-2z"/>
          <path d="M8 8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2H8zm0 2h8v8H8v-8z"/>
          <circle cx="10" cy="12" r="1"/>
          <circle cx="14" cy="12" r="1"/>
          <path d="M9 15h6c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2z"/>
          <path d="M4 14l2-2v4l-2-2z"/>
          <path d="M20 14l-2-2v4l2-2z"/>
        </svg>
      </button>

      {/* Sound Wave Visualization */}
      {soundWaves.map((wave) => (
        <div
          key={wave}
          className={`absolute inset-0 rounded-full border-2 border-sky-400 animate-ping`}
          style={{
            animationDelay: `${wave * 100}ms`,
            animationDuration: '1s',
          }}
        />
      ))}

      {/* Lizard Sound Text Animation */}
      {isAnimating && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-sky-600 font-bold text-sm whitespace-nowrap">
            🦎 *gecko chirp* 🦎
          </span>
        </div>
      )}
    </div>
  )
}
