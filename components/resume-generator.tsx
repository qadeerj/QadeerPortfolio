"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ResumeGenerator() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const generateResume = async () => {
    setIsLoading(true)

    try {
      // Dynamically import jspdf only when needed
      const jsPDFModule = await import("jspdf")
      // Get the constructor from the module
      const jsPDF = jsPDFModule.default

      // Create a new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Set font sizes
      const titleSize = 16
      const headingSize = 14
      const normalSize = 10
      const smallSize = 8

      // Add content to the PDF
      // Header
      doc.setFontSize(titleSize)
      doc.setFont("helvetica", "bold")
      doc.text("MUHAMMAD QADEER", 105, 15, { align: "center" })

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "normal")
      doc.text("Data Scientist", 105, 22, { align: "center" })
      doc.text("Faislabad, Pakistan", 105, 27, { align: "center" })
      doc.text("(92) 346-6279589 | qadeer559559@gmail.com", 105, 32, { align: "center" })
      doc.text("github.com/qadeerj | linkedin.com/in/qadeerjutt", 105, 37, { align: "center" })

      // Professional Summary
      doc.setFontSize(headingSize)
      doc.setFont("helvetica", "bold")
      doc.text("PROFESSIONAL SUMMARY", 20, 47)
      doc.line(20, 49, 190, 49)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "normal")
      const summaryText =
        "Motivated Data Scientist with expertise in machine learning, deep learning, and computer vision. I excel in designing, developing, and deploying high-performance models and innovative AI solutions. I aim to leverage my technical skills and problem-solving abilities in a dynamic environment to drive impactful business outcomes."
      const splitSummary = doc.splitTextToSize(summaryText, 170)
      doc.text(splitSummary, 20, 55)

      // Skills
      doc.setFontSize(headingSize)
      doc.setFont("helvetica", "bold")
      doc.text("SKILLS", 20, 70)
      doc.line(20, 72, 190, 72)

      // Tools and Languages
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Tools and Languages", 20, 78)
      doc.setFont("helvetica", "normal")
      const toolsText =
        "Python Programming, Machine Learning, Deep Learning, Computer Vision, PyTorch, TensorFlow, Jupyter Notebook, C++, Java, Git, MarkDown, PHP, NLP, PowerBI"
      const splitTools = doc.splitTextToSize(toolsText, 150)
      doc.text(splitTools, 60, 78)

      // Quantitative Research
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Quantitative Research", 20, 88)
      doc.setFont("helvetica", "normal")
      doc.text("Mathematical Optimization, Mathematical Modeling, R, MySQL", 60, 88)

      // Communication
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Communication", 20, 94)
      doc.setFont("helvetica", "normal")
      doc.text("Urdu, Punjabi, English", 60, 94)

      // Technical Experience
      doc.setFontSize(headingSize)
      doc.setFont("helvetica", "bold")
      doc.text("TECHNICAL EXPERIENCE", 20, 104)
      doc.line(20, 106, 190, 106)

      // Project 1
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Autism Spectrum Disorder Detector", 20, 114)
      doc.setFont("helvetica", "italic")
      doc.text("December 2024 — August 2025", 140, 114)
      doc.text("Final Year Project", 20, 119)

      // Bullet points
      doc.setFont("helvetica", "normal")
      doc.text("• Developed a deep learning model using CNN to classify ASD alongside localization.", 20, 124)
      doc.text("• Used TensorFlow, PyTorch, Nibabel, and Tools like FSL to build an efficient system.", 20, 129)
      doc.text("• Achieved high accuracy of 72% by preprocessing and augmenting 3D/4D image data.", 20, 134)
      doc.text("• Deployed the model using Flask for an interactive web interface.", 20, 139)

      // Project 2
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("American Sign Language Detection System", 20, 147)
      doc.setFont("helvetica", "italic")
      doc.text("March 2025 — April 2025", 140, 147)
      doc.text("Project", 20, 152)

      // Bullet points
      doc.setFont("helvetica", "normal")
      doc.text("• Developed a deep learning model using Random Forest to recognize ASL alphabets.", 20, 157)
      doc.text("• Used TensorFlow and OpenCV for real-time detection through webcam.", 20, 162)
      doc.text("• Achieved high accuracy by preprocessing and augmenting image data.", 20, 167)
      doc.text("• Deployed the model using Streamlit for an interactive web interface.", 20, 172)

      // Project 3
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Banking Chatbot", 20, 180)
      doc.setFont("helvetica", "italic")
      doc.text("October 2024 — November 2024", 140, 180)
      doc.text("Project", 20, 185)

      // Bullet points
      doc.setFont("helvetica", "normal")
      doc.text("• Built an intelligent chatbot using Natural Language Processing (NLP) techniques.", 20, 190)
      doc.text("• Trained the model to answer banking-related queries like balance inquiry.", 20, 195)
      doc.text("• Used spaCy, NLTK, and custom intent classification for improved understanding.", 20, 200)
      doc.text("• Deployed using Flask with a clean front-end UI for easy customer interaction.", 20, 205)

      // Project 4
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Movie Recommendation System", 20, 213)
      doc.setFont("helvetica", "italic")
      doc.text("November 2024 — December 2024", 140, 213)
      doc.text("Project", 20, 218)

      // Bullet points
      doc.setFont("helvetica", "normal")
      doc.text("• Designed a recommendation system using collaborative filtering techniques.", 20, 223)
      doc.text("• Processed IMDb dataset to suggest relevant movies based on user preferences.", 20, 228)
      doc.text("• Implemented cosine similarity and TF-IDF for content analysis.", 20, 233)
      doc.text("• Created a user-friendly interface with Streamlit for real-time recommendations.", 20, 238)

      // Start a new page for the rest of the content
      doc.addPage()

      // Project 5
      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Stock Market Analysis Dashboard", 20, 20)
      doc.setFont("helvetica", "italic")
      doc.text("December 2024 — January 2025", 140, 20)
      doc.text("Project", 20, 25)

      // Bullet points
      doc.setFont("helvetica", "normal")
      doc.text("• Created an interactive stock market dashboard using Power BI.", 20, 30)
      doc.text("• Connected live data sources and applied DAX for dynamic calculations and KPIs.", 20, 35)
      doc.text("• Included slicers, trend lines, and sector-wise performance breakdowns.", 20, 40)
      doc.text("• Enabled stakeholders to monitor stock performance through intuitive visuals.", 20, 45)

      // Education
      doc.setFontSize(headingSize)
      doc.setFont("helvetica", "bold")
      doc.text("EDUCATION", 20, 55)
      doc.line(20, 57, 190, 57)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Bachelor of Data Science, The GIFT University, Gujranwala", 20, 65)
      doc.setFont("helvetica", "normal")
      doc.text("2021 - 2025", 170, 65)

      // Activities
      doc.setFontSize(headingSize)
      doc.setFont("helvetica", "bold")
      doc.text("ACTIVITIES", 20, 75)
      doc.line(20, 77, 190, 77)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Certificate of Achievement, 1st Position in Semester Fall 2025", 20, 85)
      doc.setFont("helvetica", "normal")
      doc.text("2025", 170, 85)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Short Course Data Analytics and Business Intelligence By DigiSkills.Pk", 20, 93)
      doc.setFont("helvetica", "normal")
      doc.text("October 2023", 170, 93)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Short Course, WordPress By DigiSkills.PK", 20, 101)
      doc.setFont("helvetica", "normal")
      doc.text("September 2023", 170, 101)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Short Course, Introduction to Large Language Models by Coursera", 20, 109)
      doc.setFont("helvetica", "normal")
      doc.text("April 2025", 170, 109)

      doc.setFontSize(normalSize)
      doc.setFont("helvetica", "bold")
      doc.text("Short Course, Freelancing By DigiSkills.PK DigiSkills.pk", 20, 117)
      doc.setFont("helvetica", "normal")
      doc.text("April 2025", 170, 117)

      // Save the PDF
      doc.save("Muhammad_Qadeer_Resume.pdf")

      toast({
        title: "Success!",
        description: "Resume downloaded successfully.",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={generateResume} disabled={isLoading} className="flex items-center gap-2">
      <span>{isLoading ? "Generating..." : "Download Resume"}</span>
      <Download className="h-4 w-4 ml-1" />
    </Button>
  )
}
