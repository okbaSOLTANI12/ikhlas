"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Send, Sparkles, MessageCircle, Mail, CheckCircle2 } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

export function FeelingsForm() {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSend = async () => {
    if (!message.trim()) return

    setIsSending(true)

    try {
      const result = await sendEmail(message)

      if (result.success) {
        setIsSent(true)
      } else {
        console.error("[v0] Failed to send message:", result.error)
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Failed to send message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  if (isSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-12 text-center space-y-8 shadow-2xl border-2 border-primary/30 bg-card/95 backdrop-blur-sm">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="relative p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border-4 border-green-500/30">
                <CheckCircle2 className="w-20 h-20 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Message Sent!</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your heartfelt message has been delivered to Okba. Thank you for sharing your feelings!
            </p>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <Sparkles className="w-7 h-7 text-primary animate-pulse" />
            <Heart
              className="w-7 h-7 text-red-500 animate-pulse"
              fill="currentColor"
              style={{ animationDelay: "0.2s" }}
            />
            <Sparkles className="w-7 h-7 text-secondary animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>

          <p className="text-sm text-muted-foreground pt-4">Thank you for sharing your heart! 💙</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Heart className="absolute top-10 left-10 w-32 h-32 text-primary animate-float" />
        <MessageCircle
          className="absolute bottom-20 right-20 w-40 h-40 text-primary animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Mail
          className="absolute top-1/3 right-1/4 w-28 h-28 text-secondary animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <Card className="max-w-3xl w-full p-8 md:p-12 shadow-2xl border-2 border-primary/30 relative z-10 bg-card/95 backdrop-blur-sm">
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="relative p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full border-4 border-primary/30">
                  <MessageCircle className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Express Your Feelings</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary" />
                <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary" />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
                How do you feel after reading these messages? Share your thoughts with Okba...
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here... Share what's in your heart 💙"
                className="min-h-[320px] text-lg p-6 resize-none border-2 focus:border-primary/50 transition-colors"
                disabled={isSending}
              />
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground border border-border">
                {message.length} characters
              </div>
            </div>

            <Button
              onClick={handleSend}
              disabled={!message.trim() || isSending}
              size="lg"
              className="w-full py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {isSending ? (
                <>
                  <Heart className="w-6 h-6 mr-2 animate-pulse" />
                  Preparing Email...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-2" />
                  Send Message to Okba
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
            <Mail className="w-4 h-4" />
            <p>Your message will be sent directly to Okba</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
