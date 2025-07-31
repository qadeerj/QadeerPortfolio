import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or Resend

    // For demonstration purposes, we'll just log the data
    console.log("Contact form submission:", { name, email, message, to: "qadeer559559@gmail.com" })

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form submission" }, { status: 500 })
  }
}
