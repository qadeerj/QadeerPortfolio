"use client"

import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react"
import ContactForm from "./contact-form"

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <ContactForm />
        </div>

        <div className="border-t pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/qadeerj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-colors p-3 rounded-full"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-colors p-3 rounded-full"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-colors p-3 rounded-full"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-colors p-3 rounded-full"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:qadeer559559@gmail.com"
              className="bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-colors p-3 rounded-full"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Qadeer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
