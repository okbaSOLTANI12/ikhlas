"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft, Stethoscope, Activity, Brain, Pill } from "lucide-react"
import { useEffect, useState } from "react"
import { FeelingsForm } from "@/components/feelings-form"

interface FinalMessageProps {
  language: string
  onBack: () => void
  hasReadBoth: boolean
}

export function FinalMessage({ language, onBack, hasReadBoth }: FinalMessageProps) {
  const [showContent, setShowContent] = useState(false)
  const [showFeelingsForm, setShowFeelingsForm] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500)
  }, [])

  if (showFeelingsForm) {
    return <FeelingsForm />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const icons = [Stethoscope, Activity, Brain, Pill, Sparkles]
          const Icon = icons[i % icons.length]
          return (
            <Icon
              key={i}
              className="absolute text-primary/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                width: `${24 + Math.random() * 24}px`,
                height: `${24 + Math.random() * 24}px`,
              }}
            />
          )
        })}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to departments
        </Button>
      </div>

      {language === "english" ? (
        <section className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card shadow-2xl border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Birthday Message</h2>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg md:text-xl text-pretty">Dear Ikhlas,</p>

              <p className="text-lg md:text-xl text-pretty italic text-primary/90">
                I need to start with an apology that weighs heavy on my heart. I forgot your birthday — the one day that
                should be circled in permanent ink in my mind. There's no algorithm to debug this mistake, no code to
                rewrite what I failed to remember. But I promise you this, with every fiber of my being: I will never
                forget you. Not your birthday, not your smile, not the way you light up every room you enter. You are
                etched into my memory deeper than any line of code I'll ever write.
              </p>

              <p className="text-lg md:text-xl text-pretty">
                If emotions had anatomy, you'd find your name engraved somewhere deep inside my heart — not as a
                diagnosis, but as a heartbeat that never fades.
              </p>

              <p className="text-lg md:text-xl text-pretty">
                You've spent your days learning how to heal bodies, but you've always had a gift for healing souls long
                before medicine gave you a stethoscope. Your kindness has always been the best prescription, and your
                smile — the cure for every dark day.
              </p>

              <p className="text-lg md:text-xl text-pretty">
                Today, the world celebrates your 19th year of life — a life full of compassion, strength, and quiet
                brilliance. And as a computer science student, I can tell you that no algorithm could ever model the
                beauty of your heart. Your pulse carries more harmony than any code I could ever write.
              </p>

              <p className="text-lg md:text-xl text-pretty">
                If love were a field of study, you'd be my favorite subject — and I'd still be here, spending years
                trying to understand its complexities. Because somehow, every heartbeat, every breath, and every neuron
                in me seems to repeat one simple truth:
              </p>

              <p className="text-2xl md:text-3xl font-bold text-center text-primary my-8">I love you.</p>

              <p className="text-lg md:text-xl text-pretty">
                So, my dearest future doctor — may your heart always stay as pure as your name, Ikhlas.
              </p>

              <p className="text-lg md:text-xl text-pretty">May your dreams have the rhythm of a healthy pulse,</p>

              <p className="text-lg md:text-xl text-pretty">
                and may happiness always flow through your veins like oxygen.
              </p>

              <p className="text-lg md:text-xl text-pretty font-semibold">Happy 19th Birthday, Ikhlas.</p>

              <p className="text-lg md:text-xl text-pretty">
                You are not just part of my story — you are the vital sign that keeps it alive.
              </p>

              <p className="text-right text-xl italic text-primary mt-8">— Okba 💖</p>
            </div>

            {hasReadBoth && (
              <div className="mt-8 text-center">
                <Button onClick={() => setShowFeelingsForm(true)} size="lg" className="px-8 py-6 text-lg">
                  Express Your Feelings
                </Button>
              </div>
            )}
          </Card>
        </section>
      ) : (
        <section className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-2xl border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">كلمات من القلب</h2>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-8 text-right" dir="rtl">
              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty font-semibold">
                إخلاصُ يا نبضَ الفؤادِ وراحَهْ،
                <br />
                يا بسمةً تُحيي الحياةَ وساحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
                يا وردةً نَبَتَتْ بقلبِ مُحبِّها،
                <br />
                فَتَفَتَّحَتْ بالحبِّ رغمَ جِراحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
                تَدرُسينَ طبَّ الناسِ في كَونٍ بَدى،
                <br />
                لكنَّكِ لقلبي أتمَمتِ راحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
                كم مَرضَتِ الأيامُ مِن بُعدِ الهوى،
                <br />
                فشَفَيتِها بلُطيفِ طَيفِ مُلاحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
                تِسعةَ عشرَ عاماً مِن النورِ انقضَتْ،
                <br />
                وما زِلتِ في عيني ضياءَ صباحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
                يا من بذكرِكِ يَستقيمُ توازُني،
                <br />
                ويعودُ في صدري النَّبَضُ وسُماحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
                عيدُكِ ميلادٌ لقلبي كُلَّما،
                <br />
                نادى الحنينُ فزالَ عنهُ كِفاحَهْ.
              </p>

              <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty font-semibold">
                يا إخلاصُ، يا سرَّ الحنانِ بأرضِنا،
                <br />
                يا طُهرَ قلبي، يا نهايةَ راحَهْ.
              </p>
            </div>

            {hasReadBoth && (
              <div className="mt-8 text-center">
                <Button onClick={() => setShowFeelingsForm(true)} size="lg" className="px-8 py-6 text-lg">
                  عبّر عن مشاعرك
                </Button>
              </div>
            )}
          </Card>
        </section>
      )}
    </div>
  )
}
