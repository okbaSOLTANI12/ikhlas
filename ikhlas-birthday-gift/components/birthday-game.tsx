"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Stethoscope, Sparkles, Trophy, Lock, Unlock, Activity, Pill, Syringe, Brain } from "lucide-react"
import { DepartmentSelection } from "@/components/department-selection"

interface Challenge {
  id: number
  question: string
  type: "text" | "choice" | "number"
  answer: string | string[]
  hint?: string
  choices?: string[]
  icon?: "heart" | "brain" | "pill" | "syringe" | "activity"
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const baseChallenges: Challenge[] = [
  {
    id: 1,
    question: "Which structure separates the left and right ventricles of the heart?",
    type: "choice",
    choices: ["Interventricular septum", "Interatrial septum", "Atrioventricular valve", "Chordae tendineae"],
    answer: "Interventricular septum",
    hint: "It's a wall between the ventricles",
    icon: "heart",
  },
  {
    id: 2,
    question: "What is the functional unit of the kidney called?",
    type: "choice",
    choices: ["Nephron", "Glomerulus", "Bowman's capsule", "Loop of Henle"],
    answer: "Nephron",
    hint: "It's the basic structural and functional unit",
    icon: "activity",
  },
  {
    id: 3,
    question: "Which cranial nerve is responsible for facial expression?",
    type: "choice",
    choices: ["CN VII (Facial)", "CN V (Trigeminal)", "CN III (Oculomotor)", "CN X (Vagus)"],
    answer: "CN VII (Facial)",
    hint: "It's the seventh cranial nerve",
    icon: "brain",
  },
  {
    id: 4,
    question: "What is the normal range for serum sodium levels (mEq/L)?",
    type: "choice",
    choices: ["135-145", "120-130", "150-160", "100-110"],
    answer: "135-145",
    hint: "It's between 135 and 145",
    icon: "activity",
  },
  {
    id: 5,
    question: "Which phase of the cardiac cycle does the first heart sound (S1) represent?",
    type: "choice",
    choices: ["Closure of AV valves", "Closure of semilunar valves", "Ventricular filling", "Atrial contraction"],
    answer: "Closure of AV valves",
    hint: "It's the 'lub' sound",
    icon: "heart",
  },
  {
    id: 6,
    question: "What is the primary neurotransmitter of the parasympathetic nervous system?",
    type: "choice",
    choices: ["Acetylcholine", "Norepinephrine", "Dopamine", "Serotonin"],
    answer: "Acetylcholine",
    hint: "It's also used at neuromuscular junctions",
    icon: "brain",
  },
  {
    id: 7,
    question: "Which immunoglobulin is most abundant in human serum?",
    type: "choice",
    choices: ["IgG", "IgM", "IgA", "IgE"],
    answer: "IgG",
    hint: "It's the G type",
    icon: "syringe",
  },
  {
    id: 8,
    question: "What is the normal ejection fraction of the left ventricle?",
    type: "choice",
    choices: ["55-70%", "30-40%", "75-85%", "40-50%"],
    answer: "55-70%",
    hint: "It's between 55% and 70%",
    icon: "heart",
  },
  {
    id: 9,
    question: "Which enzyme is elevated in acute pancreatitis?",
    type: "choice",
    choices: ["Amylase and Lipase", "ALT and AST", "Alkaline phosphatase", "Creatine kinase"],
    answer: "Amylase and Lipase",
    hint: "Two enzymes that digest carbohydrates and fats",
    icon: "activity",
  },
  {
    id: 10,
    question: "What is the mechanism of action of aspirin?",
    type: "choice",
    choices: [
      "Irreversible COX inhibition",
      "Reversible COX inhibition",
      "Thromboxane synthesis",
      "Platelet activation",
    ],
    answer: "Irreversible COX inhibition",
    hint: "It permanently blocks an enzyme",
    icon: "pill",
  },
  {
    id: 11,
    question: "Which part of the brain is affected in Parkinson's disease?",
    type: "choice",
    choices: ["Substantia nigra", "Hippocampus", "Amygdala", "Prefrontal cortex"],
    answer: "Substantia nigra",
    hint: "It's in the midbrain and produces dopamine",
    icon: "brain",
  },
  {
    id: 12,
    question: "What is the most common cause of community-acquired pneumonia?",
    type: "choice",
    choices: ["Streptococcus pneumoniae", "Haemophilus influenzae", "Mycoplasma pneumoniae", "Staphylococcus aureus"],
    answer: "Streptococcus pneumoniae",
    hint: "It's a gram-positive diplococcus",
    icon: "activity",
  },
  {
    id: 13,
    question: "What is the first-line treatment for anaphylaxis?",
    type: "choice",
    choices: ["Epinephrine IM", "Antihistamines", "Corticosteroids", "Bronchodilators"],
    answer: "Epinephrine IM",
    hint: "It's given intramuscularly immediately",
    icon: "syringe",
  },
  {
    id: 14,
    question: "Which valve is most commonly affected in rheumatic heart disease?",
    type: "choice",
    choices: ["Mitral valve", "Aortic valve", "Tricuspid valve", "Pulmonary valve"],
    answer: "Mitral valve",
    hint: "It's between the left atrium and ventricle",
    icon: "heart",
  },
  {
    id: 15,
    question: "What is the gold standard for diagnosing pulmonary embolism?",
    type: "choice",
    choices: ["CT pulmonary angiography", "Chest X-ray", "D-dimer test", "ECG"],
    answer: "CT pulmonary angiography",
    hint: "It's a CT scan with contrast",
    icon: "activity",
  },
  {
    id: 16,
    question: "Which cells produce insulin in the pancreas?",
    type: "choice",
    choices: ["Beta cells", "Alpha cells", "Delta cells", "Acinar cells"],
    answer: "Beta cells",
    hint: "They're in the islets of Langerhans",
    icon: "pill",
  },
  {
    id: 17,
    question: "What is the most common type of renal stone?",
    type: "choice",
    choices: ["Calcium oxalate", "Uric acid", "Struvite", "Cystine"],
    answer: "Calcium oxalate",
    hint: "It contains calcium",
    icon: "activity",
  },
  {
    id: 18,
    question: "Which artery is most commonly used for arterial blood gas sampling?",
    type: "choice",
    choices: ["Radial artery", "Brachial artery", "Femoral artery", "Ulnar artery"],
    answer: "Radial artery",
    hint: "It's in the wrist",
    icon: "syringe",
  },
  {
    id: 19,
    question: "What is my date of birth?",
    type: "text",
    answer: "14-12-2006",
    hint: "Format: DD-MM-YYYY (use dashes between numbers)",
    icon: "heart",
  },
]

const challenges: Challenge[] = baseChallenges.map((challenge) => {
  if (challenge.type === "choice" && challenge.choices) {
    return {
      ...challenge,
      choices: shuffleArray(challenge.choices),
    }
  }
  return challenge
})

const getIcon = (iconType?: string) => {
  switch (iconType) {
    case "heart":
      return Heart
    case "brain":
      return Brain
    case "pill":
      return Pill
    case "syringe":
      return Syringe
    case "activity":
      return Activity
    default:
      return Stethoscope
  }
}

export function BirthdayGame() {
  const [currentStage, setCurrentStage] = useState(1)
  const [userAnswer, setUserAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [gameCompleted, setGameCompleted] = useState(false)

  const correctSoundRef = useRef<HTMLAudioElement | null>(null)
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    correctSoundRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3")
    wrongSoundRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3")

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "S") {
        e.preventDefault()
        setGameCompleted(true)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  const currentChallenge = challenges[currentStage - 1]
  const IconComponent = getIcon(currentChallenge.icon)

  const handleRetry = () => {
    setUserAnswer("")
    setIsCorrect(null)
    setShowHint(false)
  }

  const handleChoiceClick = (choice: string) => {
    setUserAnswer(choice)
    setTimeout(() => {
      const correct = currentChallenge.answer === choice
      setIsCorrect(correct)

      if (correct) {
        correctSoundRef.current?.play().catch(() => {})
        setTimeout(() => {
          if (currentStage === 19) {
            setGameCompleted(true)
          } else {
            setCurrentStage(currentStage + 1)
            setUserAnswer("")
            setIsCorrect(null)
            setShowHint(false)
          }
        }, 1500)
      } else {
        wrongSoundRef.current?.play().catch(() => {})
      }
    }, 100)
  }

  const handleTextSubmit = () => {
    const correct = userAnswer.trim() === currentChallenge.answer
    setIsCorrect(correct)

    if (correct) {
      correctSoundRef.current?.play().catch(() => {})
      setTimeout(() => {
        setGameCompleted(true)
      }, 1500)
    } else {
      wrongSoundRef.current?.play().catch(() => {})
    }
  }

  if (gameCompleted) {
    return <DepartmentSelection />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Heart className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Brain className="w-40 h-40 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Activity className="w-24 h-24 text-secondary" />
        </div>
        <div className="absolute bottom-1/3 left-1/4">
          <Stethoscope className="w-28 h-28 text-primary" />
        </div>
      </div>

      <div className="max-w-3xl w-full space-y-6 relative z-10">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-16 h-16 text-secondary animate-heartbeat" fill="currentColor" />
              <Activity className="w-8 h-8 text-primary absolute -bottom-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Medical Challenge for Dr. Ikhlas
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            <p className="text-xl text-muted-foreground">Question {currentStage} of 19</p>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-primary via-blue-500 to-secondary h-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{ width: `${(currentStage / 19) * 100}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse-wave" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                challenge.id < currentStage
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : challenge.id === currentStage
                    ? "bg-secondary text-secondary-foreground ring-4 ring-secondary/30 shadow-lg scale-110"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {challenge.id < currentStage ? (
                <Unlock className="w-4 h-4" />
              ) : challenge.id === currentStage ? (
                challenge.id
              ) : (
                <Lock className="w-4 h-4" />
              )}
            </div>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-card shadow-2xl border-2 border-primary/20 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full shadow-lg">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                  {currentChallenge.question}
                </h2>

                {currentChallenge.type === "choice" ? (
                  <div className="grid grid-cols-1 gap-3">
                    {currentChallenge.choices?.map((choice) => (
                      <Button
                        key={choice}
                        onClick={() => handleChoiceClick(choice)}
                        variant={userAnswer === choice ? "default" : "outline"}
                        className="h-auto py-4 text-lg transition-all hover:scale-105 text-left justify-start"
                        disabled={isCorrect !== null}
                      >
                        {choice}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Enter your answer..."
                      className="text-lg py-6"
                      disabled={isCorrect !== null}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && userAnswer.trim()) {
                          handleTextSubmit()
                        }
                      }}
                    />
                    <Button
                      onClick={handleTextSubmit}
                      disabled={!userAnswer.trim() || isCorrect !== null}
                      className="w-full py-6 text-lg"
                    >
                      Submit Answer
                    </Button>
                  </div>
                )}

                {isCorrect === false && (
                  <div className="mt-4 p-4 bg-destructive/10 border-2 border-destructive/20 rounded-lg animate-fade-in-up space-y-3">
                    <p className="text-destructive font-semibold">Not quite! Try again.</p>
                    <Button onClick={handleRetry} variant="outline" className="w-full bg-transparent">
                      Try Again
                    </Button>
                  </div>
                )}

                {isCorrect === true && (
                  <div className="mt-4 p-4 bg-primary/10 border-2 border-primary/20 rounded-lg animate-fade-in-up">
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {currentStage === 19
                        ? "Perfect! Unlocking your birthday surprise..."
                        : "Correct! Moving to next question..."}
                    </p>
                  </div>
                )}

                {currentChallenge.hint && (
                  <div className="mt-4">
                    {!showHint ? (
                      <Button
                        variant="ghost"
                        onClick={() => setShowHint(true)}
                        className="text-muted-foreground hover:text-primary"
                      >
                        Need a hint?
                      </Button>
                    ) : (
                      <div className="p-4 bg-muted rounded-lg border border-border animate-fade-in-up">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-primary">Hint:</strong> {currentChallenge.hint}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Complete all 19 medical questions to unlock your special birthday message
        </p>
      </div>
    </div>
  )
}
