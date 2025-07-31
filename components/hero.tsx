"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 animate-gradient"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary block">Data Scientist</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Transforming complex data into actionable insights
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Machine Learning
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Deep Learning
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Computer Vision
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              NLP
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Data Analysis
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Python
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              PowerBI
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
