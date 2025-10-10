"use client"

import { useState, useEffect } from "react"
import { CountdownLock } from "@/components/countdown-lock"
import { BirthdayGame } from "@/components/birthday-game"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Set the birthday date to tomorrow at midnight
  const birthdayDate = new Date()
  birthdayDate.setDate(birthdayDate.getDate() + 1)
  birthdayDate.setHours(0, 0, 0, 0)

  useEffect(() => {
    setMounted(true)

    // Check if it's already past the birthday time
    const checkTime = () => {
      const now = new Date()
      if (now >= birthdayDate) {
        setIsUnlocked(true)
      }
    }

    checkTime()
    const interval = setInterval(checkTime, 1000)

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "O") {
        setIsUnlocked(true)
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      clearInterval(interval)
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen">{!isUnlocked ? <CountdownLock targetDate={birthdayDate} /> : <BirthdayGame />}</main>
  )
}
