"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"

// Define projects from resume
const projects = [
  {
    id: 1,
    title: "American Sign Language Detector",
    description:
      "Deep learning model that recognizes American Sign Language gestures in real-time using computer vision techniques.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2000",
    tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/qadeerj/ASL-Detector",
  },
  {
    id: 2,
    title: "Banking Chatbot with NLP",
    description:
      "Intelligent chatbot for banking services using natural language processing to understand and respond to customer queries.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000",
    tags: ["Python", "NLP", "Machine Learning", "Flask"],
    githubUrl: "https://github.com/qadeerj/Banking-Chatbot",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description:
      "Collaborative filtering-based recommendation system that suggests movies based on user preferences and behavior.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000",
    tags: ["Python", "Machine Learning", "Collaborative Filtering", "Streamlit"],
    githubUrl: "https://github.com/qadeerj/Movie-Recommender",
  },
  {
    id: 4,
    title: "Hospital Management System",
    description: "A comprehensive system for managing hospital operations, patient records, and appointments.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000",
    tags: ["Python", "Django", "SQL", "Bootstrap"],
    githubUrl: "https://github.com/qadeerj/Hospital-Management-System",
  },
  {
    id: 5,
    title: "Maze Game",
    description: "An interactive maze game with pathfinding algorithms and customizable difficulty levels.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2000",
    tags: ["Python", "Pygame", "Algorithms"],
    githubUrl: "https://github.com/qadeerj/Maze-Game",
  },
  {
    id: 6,
    title: "COVID-19 Dashboard Using PowerBI",
    description: "Interactive dashboard visualizing COVID-19 statistics and trends using PowerBI.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000",
    tags: ["PowerBI", "Data Visualization", "Analytics"],
    githubUrl: "https://github.com/qadeerj/COVID-19-Dashboard",
  },
  {
    id: 7,
    title: "Real-Time Weather Prediction app using NODEMCU",
    description: "IoT-based weather prediction application using NODEMCU for real-time data collection and analysis.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000",
    tags: ["IoT", "NODEMCU", "Python", "Machine Learning"],
    githubUrl: "https://github.com/qadeerj/Weather-Prediction",
  },
  {
    id: 8,
    title: "Stock Market Prediction Model",
    description:
      "Time series analysis and prediction model for stock market trends using historical data and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000",
    tags: ["Python", "Time Series", "Machine Learning", "Data Analysis"],
    githubUrl: "https://github.com/qadeerj/Stock-Prediction",
  },
  {
    id: 9,
    title: "Customer Segmentation Analysis",
    description:
      "Clustering algorithm to segment customers based on purchasing behavior and demographics for targeted marketing.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000",
    tags: ["Python", "Clustering", "Data Analysis", "Marketing"],
    githubUrl: "https://github.com/qadeerj/Customer-Segmentation",
  },
  {
    id: 10,
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool that analyzes sentiment in text data from social media, reviews, and other sources.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2000",
    tags: ["Python", "NLP", "Sentiment Analysis", "Machine Learning"],
    githubUrl: "https://github.com/qadeerj/Sentiment-Analysis",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key projects that showcase my skills in data science and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" size="sm" className="w-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/qadeerj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
