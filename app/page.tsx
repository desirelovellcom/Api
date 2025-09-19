"use client"

import { useState, useEffect, useRef } from "react"

export default function LizardClick() {
  const [myClicks, setMyClicks] = useState(0)
  const [allClicks, setAllClicks] = useState(128378821)
  const [isAnimating, setIsAnimating] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Load clicks from localStorage on mount
  useEffect(() => {
    const savedMyClicks = localStorage.getItem("myClicks")
    if (savedMyClicks) setMyClicks(Number.parseInt(savedMyClicks))

    // Initialize audio element
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lizardlizardlizard-made-with-Voicemod-hrFSAVX6purDtnltyOBtAUjI1J7lfA.mp3")
    audioRef.current.load() // Preload the audio
  }, [])

  // Save clicks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("myClicks", myClicks.toString())
  }, [myClicks])

  const handleLizardClick = () => {
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }

    // Increment counters
    setMyClicks((prev) => prev + 1)
    setAllClicks((prev) => prev + 1)

    // Animation
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 200)

    // Play the provided MP3 sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Rewind to start if already playing
      audioRef.current.play().catch((e) => console.error("Error playing audio:", e))
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Click Counters */}
      <div className="flex justify-center gap-4 pt-8 px-4">
        <div className="bg-gray-800 rounded-full px-6 py-3">
          <span className="text-white font-medium text-lg">My Clicks: {myClicks.toLocaleString()}</span>
        </div>
        <div className="bg-gray-800 rounded-full px-6 py-3">
          <span className="text-white font-medium text-lg">All Clicks: {allClicks.toLocaleString()}</span>
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
            ${isAnimating ? "scale-110 bg-gray-600" : ""}
          `}
          style={{
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Updated Lizard Graphic */}
          <div className={`transition-transform duration-200 ${isAnimating ? "rotate-12 scale-110" : ""}`}>
            <svg width="120" height="120" viewBox="0 0 200 200" className="drop-shadow-lg">
              {/* Lizard body */}
              <ellipse cx="100" cy="110" rx="50" ry="28" fill="#22c55e" />
              <ellipse cx="100" cy="110" rx="45" ry="23" fill="#16a34a" />
              <ellipse cx="100" cy="110" rx="35" ry="18" fill="#22c55e" />

              {/* Lizard head */}
              <ellipse cx="65" cy="85" rx="25" ry="22" fill="#22c55e" />
              <ellipse cx="65" cy="85" rx="20" ry="17" fill="#16a34a" />

              {/* Eye */}
              <circle cx="58" cy="78" r="8" fill="#fbbf24" />
              <circle cx="58" cy="78" r="6" fill="#000" />
              <circle cx="60" cy="75" r="2" fill="#fff" />

              {/* Nostril */}
              <ellipse cx="48" cy="85" rx="2" ry="1" fill="#000" />

              {/* Mouth line */}
              <path d="M 45 90 Q 50 92 55 90" stroke="#000" strokeWidth="1" fill="none" />

              {/* Front legs */}
              <ellipse cx="75" cy="125" rx="8" ry="18" fill="#22c55e" />
              <ellipse cx="75" cy="140" rx="6" ry="12" fill="#16a34a" />
              <ellipse cx="70" cy="95" rx="7" ry="15" fill="#22c55e" />
              <ellipse cx="70" cy="108" rx="5" ry="10" fill="#16a34a" />

              {/* Back legs */}
              <ellipse cx="125" cy="130" rx="9" ry="20" fill="#22c55e" />
              <ellipse cx="125" cy="148" rx="7" ry="14" fill="#16a34a" />
              <ellipse cx="120" cy="100" rx="8" ry="16" fill="#22c55e" />
              <ellipse cx="120" cy="115" rx="6" ry="12" fill="#16a34a" />

              {/* Tail - curved and detailed */}
              <path
                d="M 150 110 Q 170 105 180 115 Q 185 120 180 125 Q 170 130 160 125 Q 155 120 150 115 Z"
                fill="#22c55e"
              />
              <path d="M 180 115 Q 190 110 195 120 Q 190 125 185 122 Q 183 118 180 115 Z" fill="#16a34a" />
              <path d="M 195 120 Q 200 118 202 125 Q 198 128 195 125 Z" fill="#22c55e" />

              {/* Body spots and texture */}
              <circle cx="85" cy="105" r="4" fill="#16a34a" />
              <circle cx="115" cy="108" r="3.5" fill="#16a34a" />
              <circle cx="100" cy="120" r="3" fill="#16a34a" />
              <circle cx="90" cy="115" r="2.5" fill="#16a34a" />
              <circle cx="110" cy="115" r="3" fill="#16a34a" />
              <circle cx="95" cy="100" r="2" fill="#16a34a" />

              {/* Head spots */}
              <circle cx="70" cy="80" r="2" fill="#16a34a" />
              <circle cx="75" cy="90" r="1.5" fill="#16a34a" />

              {/* Toe details */}
              <circle cx="72" cy="142" r="2" fill="#22c55e" />
              <circle cx="78" cy="142" r="2" fill="#22c55e" />
              <circle cx="122" cy="150" r="2" fill="#22c55e" />
              <circle cx="128" cy="150" r="2" fill="#22c55e" />
              <circle cx="67" cy="110" r="2" fill="#22c55e" />
              <circle cx="73" cy="110" r="2" fill="#22c55e" />
              <circle cx="117" cy="117" r="2" fill="#22c55e" />
              <circle cx="123" cy="117" r="2" fill="#22c55e" />

              {/* Belly highlight */}
              <ellipse cx="100" cy="115" rx="25" ry="12" fill="#34d399" opacity="0.6" />
            </svg>
          </div>
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
          <p className="text-gray-900 text-sm font-medium">Unmute your phone if you don't hear sound 🔊</p>
        </div>
      </div>
    </div>
  )
}
