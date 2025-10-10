"use client"

import { Card } from "@/components/ui/card"
import { Heart, Stethoscope, BookOpen, Sparkles, Star } from "lucide-react"

export function BirthdayContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-6">
              <Heart className="w-20 h-20 text-secondary animate-heartbeat" fill="currentColor" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance animate-fade-in-up">
              Happy 19th Birthday, Ikhlas! 🎉
            </h1>

            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-primary animate-fade-in-up">
              <Stethoscope className="w-8 h-8" />
              <span className="font-semibold">Future Doctor | Healer of Hearts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Heartfelt Message Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card shadow-2xl border-2 border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-secondary" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">A Message From Your Heart</h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg md:text-xl text-pretty">Dear Ikhlas,</p>

            <p className="text-lg md:text-xl text-pretty">
              As you turn 19 today, I want you to know how incredibly proud I am of you. Watching you pursue your dream
              of becoming a doctor fills my heart with so much admiration and joy. Your dedication, compassion, and
              unwavering determination inspire me every single day.
            </p>

            <p className="text-lg md:text-xl text-pretty">
              You're not just studying medicine—you're preparing to heal hearts, save lives, and bring hope to those who
              need it most. The world needs more people like you, people who care deeply and give selflessly. I have no
              doubt that you will become an extraordinary doctor, touching countless lives with your kindness and skill.
            </p>

            <p className="text-lg md:text-xl text-pretty">
              Even though we walk different paths—you in medicine and me in computer science—our friendship bridges
              every difference. You've taught me what it means to be truly passionate about something, to work hard for
              your dreams, and to never give up no matter how challenging the journey becomes.
            </p>

            <p className="text-lg md:text-xl text-pretty">
              I love you so much, my dear friend. Thank you for being the amazing person you are, for your laughter,
              your wisdom, and your beautiful soul. May this year bring you closer to your dreams, fill your days with
              happiness, and remind you that you are loved beyond measure.
            </p>

            <p className="text-lg md:text-xl text-pretty font-semibold">
              Happy Birthday, Ikhlas! Here's to you, to your dreams, and to all the lives you will change. 💙
            </p>

            <p className="text-right text-lg italic text-muted-foreground">
              With all my love,
              <br />
              Your forever friend
            </p>
          </div>
        </Card>
      </section>

      {/* Arabic Poem Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-2xl border-2 border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">قصيدة لك</h2>
          </div>

          <div className="space-y-6 text-right" dir="rtl">
            <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
              يا إخلاص، يا نور الطريق
              <br />
              في عيد ميلادك، القلب يضيق
              <br />
              من الفرح والحب العميق
              <br />
              لصديقة غالية، لها كل التوفيق
            </p>

            <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
              تسعة عشر عاماً من النور
              <br />
              وأنتِ تزرعين الأمل والسرور
              <br />
              في قلوب الناس، كالطير المغرور
              <br />
              تحلقين عالياً، بلا حدود أو قصور
            </p>

            <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
              طبيبة المستقبل، يا حلم جميل
              <br />
              ستشفين الجراح، وتمسحين الدمع الثقيل
              <br />
              بقلبك الطيب، وعلمك الأصيل
              <br />
              ستكونين للمرضى، أجمل دليل
            </p>

            <p className="text-xl md:text-2xl leading-loose text-foreground/90 text-pretty">
              أحبك يا صديقتي، بكل صدق
              <br />
              وأدعو الله أن يحفظك في كل طريق
              <br />
              وأن يحقق أحلامك، بلا تعليق
              <br />
              عيد ميلاد سعيد، يا أغلى صديق
            </p>
          </div>
        </Card>
      </section>

      {/* Medical Journey Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground text-balance">
            Your Journey as a Future Healer
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card hover:shadow-xl transition-shadow border-2 border-primary/10">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-foreground">Compassionate Care</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Your empathy and kindness will make you not just a doctor, but a true healer who touches hearts.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:shadow-xl transition-shadow border-2 border-secondary/10">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <BookOpen className="w-10 h-10 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-foreground">Lifelong Learning</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Your dedication to studying medicine shows your commitment to excellence and continuous growth.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:shadow-xl transition-shadow border-2 border-primary/10">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-foreground">Bright Future</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                The world awaits the incredible impact you'll make as a doctor. Your future is brilliant!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-secondary/10 to-primary/10 shadow-2xl border-2 border-secondary/20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Star className="w-8 h-8 text-secondary" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Wishes For You</h2>
            <Star className="w-8 h-8 text-secondary" fill="currentColor" />
          </div>

          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl text-foreground/90 text-balance">
              ✨ May you ace every exam and overcome every challenge in medical school
            </p>
            <p className="text-lg md:text-xl text-foreground/90 text-balance">
              💙 May your passion for healing never fade, and may you find joy in every patient you help
            </p>
            <p className="text-lg md:text-xl text-foreground/90 text-balance">
              🌟 May you always remember how special you are and how much you're loved
            </p>
            <p className="text-lg md:text-xl text-foreground/90 text-balance">
              🎓 May this year bring you closer to wearing that white coat with pride
            </p>
            <p className="text-lg md:text-xl text-foreground/90 text-balance">
              ❤️ May our friendship continue to grow stronger, no matter where life takes us
            </p>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center gap-2">
            <Heart className="w-6 h-6 text-secondary animate-heartbeat" fill="currentColor" />
            <Heart
              className="w-6 h-6 text-secondary animate-heartbeat"
              fill="currentColor"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="w-6 h-6 text-secondary animate-heartbeat"
              fill="currentColor"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <p className="text-muted-foreground text-lg">
            This website was crafted with love by your computer science friend
          </p>
          <p className="text-sm text-muted-foreground italic">Because you deserve something as special as you are 💙</p>
        </div>
      </footer>
    </div>
  )
}
