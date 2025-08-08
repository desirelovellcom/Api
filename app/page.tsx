'use client'

import { useState, useEffect, useRef } from 'react'

export default function LizardClick() {
  const [myClicks, setMyClicks] = useState(0)
  const [allClicks, setAllClicks] = useState(128378821)
  const [isAnimating, setIsAnimating] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Load clicks from localStorage on mount
  useEffect(() => {
    const savedMyClicks = localStorage.getItem('myClicks')
    if (savedMyClicks) setMyClicks(parseInt(savedMyClicks))

    // Initialize audio element
    audioRef.current = new Audio('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lizardlizardlizard-made-with-Voicemod-hrFSAVX6purDtnltyOBtAUjI1J7lfA.mp3')
    audioRef.current.load() // Preload the audio
  }, [])

  // Save clicks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('myClicks', myClicks.toString())
  }, [myClicks])

  const handleLizardClick = () => {
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }

    // Increment counters
    setMyClicks(prev => prev + 1)
    setAllClicks(prev => prev + 1)

    // Animation
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 200)

    // Play the provided MP3 sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Rewind to start if already playing
      audioRef.current.play().catch(e => console.error("Error playing audio:", e))
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Click Counters */}
      <div className="flex justify-center gap-4 pt-8 px-4">
        <div className="bg-gray-800 rounded-full px-6 py-3">
          <span className="text-white font-medium text-lg">
            My Clicks: {myClicks.toLocaleString()}
          </span>
        </div>
        <div className="bg-gray-800 rounded-full px-6 py-3">
          <span className="text-white font-medium text-lg">
            All Clicks: {allClicks.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 -mt-20">
        {/* Lizard Button */}
        <button
          onClick={handleLizardClick}
          className={`
            w-64 h-64 bg-gray-700 rounded-full
            flex items-center justify-center
            transition-all duration-200 ease-out
            hover:bg-gray-600 hover:scale-105
            active:scale-95
            ${isAnimating ? 'scale-110 bg-gray-600' : ''}
          `}
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Lizard Emoji */}
          <span 
            className={`text-8xl transition-transform duration-200 ${isAnimating ? 'rotate-12 scale-110' : ''}`}
          >
            🦎
          </span>
        </button>

        {/* "Lizard" text animation */}
        {isAnimating && (
          <div className="absolute mt-4 animate-bounce">
            <span className="text-white text-2xl font-bold">lizard</span>
          </div>
        )}
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
        <div className="bg-white rounded-full px-6 py-3">
          <p className="text-gray-900 text-sm font-medium">
            Unmute your phone if you don't hear sound 🔊
          </p>
        </div>
      </div>
    </div>
  )
}
