"use server"

export async function sendEmail(message: string) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "3d79d67d-7236-44dd-923f-a781b4f013c8",
        subject: "Birthday Message from Ikhlas",
        from_name: "Ikhlas Birthday Website",
        to_email: "oo_soltani@esi.dz",
        message: message,
      }),
    })

    const data = await response.json()

    if (data.success) {
      return { success: true }
    } else {
      console.error("[v0] Email sending failed:", data)
      return { success: false, error: data.message }
    }
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
