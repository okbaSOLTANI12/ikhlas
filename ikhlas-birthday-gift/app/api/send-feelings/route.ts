import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Send email using a simple mailto approach or email service
    // For now, we'll use a simple approach that works in the browser
    const emailContent = {
      to: "oo_soltani@esi.dz",
      subject: "Birthday Message from Ikhlas 💙",
      body: `Ikhlas has shared her feelings:\n\n${message}\n\n---\nSent from your birthday gift website`,
    }

    // In a production environment, you would use an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // For this demo, we'll return success and log the message
    console.log("Email to send:", emailContent)

    // You can integrate with an email service here
    // Example with fetch to a hypothetical email API:
    // await fetch('https://api.emailservice.com/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailContent)
    // })

    return NextResponse.json({ success: true, message: "Message received" })
  } catch (error) {
    console.error("Error processing message:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
