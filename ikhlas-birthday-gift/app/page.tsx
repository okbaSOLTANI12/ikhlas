"use client"

import { useState, useEffect } from "react"
import { BirthdayGame } from "@/components/birthday-game"
import { CountdownLock } from "@/components/countdown-lock"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "O") {
        setIsUnlocked(true)
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen">
      {!isUnlocked ? <CountdownLock onUnlock={() => setIsUnlocked(true)} /> : <BirthdayGame />}
    </main>
  )
}
