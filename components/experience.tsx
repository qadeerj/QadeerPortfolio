"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon } from "lucide-react"

const experiences = [
  {
    title: "Freelance Data Scientist",
    company: "Fiverr",
    period: "2022–Present",
    description:
      "Delivered end-to-end data science solutions to international clients, including an American Sign Language detector, a banking chatbot, and a movie recommendation system. Gained experience in machine learning, deep learning, NLP, and deploying models using Flask and Streamlit. Focused on writing clean, well-documented code and creating insightful visualizations using tools like ggplot2 and Plotly.",
  },
  {
    title: "Math and Science Teacher",
    company: "Science Academy",
    period: "2021-2022",
    description:
      "Taught mathematics and science to matric students, helping them improve their understanding of key concepts and preparing them for exams. Developed lesson plans and provided individual support to ensure academic success.",
  },
  {
    title: "WordPress Developer Assistant",
    company: "Local Client",
    period: "2022-2023",
    description:
      "Assisted a professional WordPress developer in building auto-blogging and e-commerce websites. Gained hands-on experience in WordPress development, theme customization, and website optimization.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
