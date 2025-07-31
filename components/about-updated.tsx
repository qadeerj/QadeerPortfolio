"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileText, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import ResumeGenerator from "./resume-generator"

// Data science focused skills
const skills = [
  { name: "Data Analysis", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "Data Visualization", level: 90 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 75 },
  { name: "Computer Vision", level: 80 },
  { name: "NLP", level: 75 },
  { name: "PowerBI", level: 85 },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/profile.jpeg"
                alt="Muhammad Qadeer"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Muhammad Qadeer</h3>

            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Faislabad, Pakistan</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>qadeer559559@gmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>(92) 346-6279589</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Motivated Data Scientist with expertise in machine learning, deep learning, and computer vision. I excel
              in designing, developing, and deploying high-performance models and innovative AI solutions. I aim to
              leverage my technical skills and problem-solving abilities in a dynamic environment to drive impactful
              business outcomes.
            </p>

            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <ResumeGenerator />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Key Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-medium mb-2">{skill.name}</h4>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
