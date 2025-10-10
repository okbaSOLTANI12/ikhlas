"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Stethoscope, Activity, Sparkles, Pill, Syringe, Microscope } from "lucide-react"
import { FinalMessage } from "@/components/final-message"

interface Department {
  id: string
  name: string
  nameAr: string
  icon: typeof Heart
  color: string
  description: string
}

const departments: Department[] = [
  {
    id: "english",
    name: "English Department",
    nameAr: "القسم الإنجليزي",
    icon: Heart,
    color: "from-rose-500 via-pink-500 to-red-500",
    description: "Read your heartfelt message in English",
  },
  {
    id: "arabic",
    name: "Arabic Department",
    nameAr: "القسم العربي",
    icon: Sparkles,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    description: "اقرأ رسالتك الجميلة بالعربية",
  },
]

export function DepartmentSelection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [readMessages, setReadMessages] = useState<Set<string>>(new Set())

  const handleDepartmentSelect = (deptId: string) => {
    setSelectedDepartment(deptId)
  }

  const handleBackFromMessage = (deptId: string) => {
    setReadMessages((prev) => new Set(prev).add(deptId))
    setSelectedDepartment(null)
  }

  if (selectedDepartment) {
    return (
      <FinalMessage
        language={selectedDepartment}
        onBack={() => handleBackFromMessage(selectedDepartment)}
        hasReadBoth={readMessages.size >= 2}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Stethoscope className="absolute top-20 left-10 w-32 h-32 text-primary animate-float" />
        <Brain
          className="absolute top-40 right-20 w-40 h-40 text-secondary animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Activity
          className="absolute bottom-32 left-1/4 w-28 h-28 text-primary animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Pill
          className="absolute top-1/3 right-1/3 w-24 h-24 text-secondary animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <Syringe
          className="absolute bottom-20 right-1/4 w-32 h-32 text-primary animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <Microscope
          className="absolute top-1/2 left-10 w-36 h-36 text-secondary animate-float"
          style={{ animationDelay: "2.5s" }}
        />
        <Heart
          className="absolute bottom-40 right-10 w-28 h-28 text-primary animate-float"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <div className="flex justify-center items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative p-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full border-4 border-primary/30 shadow-xl">
                  <Heart className="w-20 h-20 text-primary" fill="currentColor" />
                </div>
              </div>
              <div className="h-20 w-1.5 bg-gradient-to-b from-primary via-secondary to-primary rounded-full" />
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full blur-2xl opacity-50 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="relative p-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full border-4 border-secondary/30 shadow-xl">
                  <Stethoscope className="w-20 h-20 text-secondary" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
                Congratulations, Dr. Ikhlas!
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-20 bg-gradient-to-r from-transparent to-primary rounded-full" />
                <Sparkles className="w-7 h-7 text-primary animate-pulse" />
                <div className="h-1 w-20 bg-gradient-to-l from-transparent to-primary rounded-full" />
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
                Select a department to read your special birthday message
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept) => {
              const Icon = dept.icon
              const hasRead = readMessages.has(dept.id)

              return (
                <Card
                  key={dept.id}
                  className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer bg-card/90 backdrop-blur-sm"
                  onClick={() => handleDepartmentSelect(dept.id)}
                >
                  <div className={`h-4 bg-gradient-to-r ${dept.color}`} />

                  <div className="p-10 space-y-8">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${dept.color} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                        />
                        <div
                          className={`relative p-10 rounded-full bg-gradient-to-br ${dept.color} shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">{dept.name}</h3>
                      <p className="text-xl text-muted-foreground font-semibold">{dept.nameAr}</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{dept.description}</p>
                    </div>

                    {hasRead && (
                      <div className="flex items-center justify-center gap-2 text-primary bg-primary/10 py-2 px-4 rounded-full border border-primary/30">
                        <Activity className="w-5 h-5 animate-pulse" />
                        <span className="text-sm font-semibold">Message Read ✓</span>
                      </div>
                    )}

                    <Button
                      className={`w-full py-7 text-lg font-semibold bg-gradient-to-r ${dept.color} hover:opacity-90 transition-all duration-300 border-0 text-white shadow-xl hover:shadow-2xl`}
                    >
                      Enter Department →
                    </Button>
                  </div>

                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Activity className="w-40 h-40 text-primary/10 animate-pulse" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-center space-y-4 pt-4">
            <p className="text-lg text-muted-foreground">
              Visit both departments to read your complete birthday messages
            </p>
            {readMessages.size >= 2 && (
              <div className="flex items-center justify-center gap-3 text-primary animate-fade-in-up bg-primary/10 py-3 px-6 rounded-full border-2 border-primary/30 inline-flex mx-auto">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <span className="font-semibold text-lg">
                  Both messages unlocked! Continue to express your feelings.
                </span>
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
