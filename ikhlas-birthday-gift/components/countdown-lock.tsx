"use client"

import { Card } from "@/components/ui/card"
import { Heart, Activity, Stethoscope, Pill } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CountdownLockProps {
  onUnlock: () => void
}

export function CountdownLock({ onUnlock }: CountdownLockProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 w-8 h-8 text-red-200 dark:text-red-900/30 animate-float" />
        <Stethoscope className="absolute top-40 right-20 w-10 h-10 text-blue-200 dark:text-blue-900/30 animate-float-delayed" />
        <Activity className="absolute bottom-32 left-20 w-12 h-12 text-teal-200 dark:text-teal-900/30 animate-float" />
        <Pill className="absolute bottom-20 right-32 w-8 h-8 text-purple-200 dark:text-purple-900/30 animate-float-delayed" />
        <Heart className="absolute top-1/2 right-10 w-6 h-6 text-pink-200 dark:text-pink-900/30 animate-float" />
      </div>

      <div className="max-w-3xl w-full space-y-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-red-400/20 dark:bg-red-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 bg-white dark:bg-slate-800 rounded-full p-6 shadow-2xl border-4 border-red-100 dark:border-red-900/50">
              <Heart className="w-20 h-20 text-red-500 dark:text-red-400 animate-heartbeat" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Activity className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent text-balance">
              Happy Birthday Ikhlas
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 text-balance max-w-2xl mx-auto font-medium">
            Dear Dr. Ikhlas (in training),
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-balance max-w-2xl mx-auto">
            Your special birthday experience is ready. Click below to begin your medical journey...
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-4 border-blue-200 dark:border-blue-900/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-12 bg-blue-600 rounded-full" />
              <div className="w-12 h-2 bg-blue-600 rounded-full absolute" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border-2 border-blue-300 dark:border-blue-700">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Birthday Protocol Ready
              </p>
            </div>

            <Button
              onClick={onUnlock}
              size="lg"
              className="w-full max-w-md mx-auto text-lg py-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Begin Birthday Experience
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
