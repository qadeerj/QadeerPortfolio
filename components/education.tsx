"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon } from "lucide-react"

const education = [
  {
    degree: "Bachelors with Data Science",
    institution: "Gift University Gujranwala",
    period: "2021-2025 (Current)",
  },
  {
    degree: "Intermediate with FSC Pre-Engineering",
    institution: "Almuraf Education System Nankana Sahib",
    period: "2019-2021",
  },
  {
    degree: "Matric With Science",
    institution: "Mission Boys High School Martin pur",
    period: "2009-2019",
  },
]

const certifications = [
  "Data Analytics and Business Intelligence By DigiSkills.Pk",
  "Freelancing By DigiSkills.PK",
  "Django By DigiSkills.PK",
  "WordPress By DigiSkills.PK",
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Academic Background</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCapIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.institution} | {edu.period}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">English</p>
                      <div className="w-full bg-secondary rounded-full h-2.5 mt-2">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Urdu</p>
                      <div className="w-full bg-secondary rounded-full h-2.5 mt-2">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
