from flask import Flask, render_template, request, send_file, jsonify
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_resume')
def generate_resume():
    # Create a file-like buffer to receive PDF data
    buffer = io.BytesIO()
    
    # Create the PDF object, using the buffer as its "file"
    p = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter
    
    # Set font sizes
    title_size = 16
    heading_size = 14
    normal_size = 10
    small_size = 8
    
    # Add content to the PDF
    # Header
    p.setFont("Helvetica-Bold", title_size)
    p.drawCentredString(width/2, height - 1*inch, "MUHAMMAD QADEER")
    
    p.setFont("Helvetica", normal_size)
    p.drawCentredString(width/2, height - 1.3*inch, "Data Scientist")
    p.drawCentredString(width/2, height - 1.5*inch, "Faislabad, Pakistan")
    p.drawCentredString(width/2, height - 1.7*inch, "(92) 346-6279589 | qadeer559559@gmail.com")
    p.drawCentredString(width/2, height - 1.9*inch, "github.com/qadeerj | linkedin.com/in/qadeerjutt")
    
    # Professional Summary
    p.setFont("Helvetica-Bold", heading_size)
    p.drawString(1*inch, height - 2.3*inch, "PROFESSIONAL SUMMARY")
    p.line(1*inch, height - 2.4*inch, 7.5*inch, height - 2.4*inch)
    
    p.setFont("Helvetica", normal_size)
    summary_text = "Motivated Data Scientist with expertise in machine learning, deep learning, and computer vision. I excel in designing, developing, and deploying high-performance models and innovative AI solutions. I aim to leverage my technical skills and problem-solving abilities in a dynamic environment to drive impactful business outcomes."
    text_object = p.beginText(1*inch, height - 2.6*inch)
    text_object.setFont("Helvetica", normal_size)
    
    # Wrap text
    words = summary_text.split()
    line = ""
    for word in words:
        if p.stringWidth(line + " " + word, "Helvetica", normal_size) < 6*inch:
            line += " " + word
        else:
            text_object.textLine(line)
            line = word
    text_object.textLine(line)
    p.drawText(text_object)
    
    # Skills
    p.setFont("Helvetica-Bold", heading_size)
    p.drawString(1*inch, height - 3.3*inch, "SKILLS")
    p.line(1*inch, height - 3.4*inch, 7.5*inch, height - 3.4*inch)
    
    # Tools and Languages
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 3.6*inch, "Tools and Languages")
    p.setFont("Helvetica", normal_size)
    p.drawString(2.5*inch, height - 3.6*inch, "Python Programming, Machine Learning, Deep Learning, Computer Vision, PyTorch,")
    p.drawString(2.5*inch, height - 3.8*inch, "TensorFlow, Jupyter Notebook, NLP, PowerBI, C++, Java, Git, MarkDown, PHP")
    
    # Quantitative Research
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 4.0*inch, "Quantitative Research")
    p.setFont("Helvetica", normal_size)
    p.drawString(2.5*inch, height - 4.0*inch, "Mathematical Optimization, Mathematical Modeling, R, MySQL")
    
    # Communication
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 4.2*inch, "Communication")
    p.setFont("Helvetica", normal_size)
    p.drawString(2.5*inch, height - 4.2*inch, "Urdu, Punjabi, English")
    
    # Technical Experience
    p.setFont("Helvetica-Bold", heading_size)
    p.drawString(1*inch, height - 4.6*inch, "TECHNICAL EXPERIENCE")
    p.line(1*inch, height - 4.7*inch, 7.5*inch, height - 4.7*inch)
    
    # Project 1
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 4.9*inch, "Autism Spectrum Disorder Detector")
    p.setFont("Helvetica-Oblique", normal_size)
    p.drawString(4*inch, height - 4.9*inch, "December 2024 — August 2025")
    p.setFont("Helvetica-Oblique", small_size)
    p.drawString(1*inch, height - 5.1*inch, "Final Year Project")
    
    # Bullet points
    p.setFont("Helvetica", normal_size)
    p.drawString(1.2*inch, height - 5.3*inch, "• Developed a deep learning model using CNN to classify ASD alongside localization.")
    p.drawString(1.2*inch, height - 5.5*inch, "• Used TensorFlow, PyTorch, Nibabel, and Tools like FSL to build an efficient system.")
    p.drawString(1.2*inch, height - 5.7*inch, "• Achieved high accuracy of 72% by preprocessing and augmenting 3D/4D image data.")
    p.drawString(1.2*inch, height - 5.9*inch, "• Deployed the model using Flask for an interactive web interface.")
    
    # Project 2
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 6.2*inch, "American Sign Language Detection System")
    p.setFont("Helvetica-Oblique", normal_size)
    p.drawString(4*inch, height - 6.2*inch, "March 2025 — April 2025")
    p.setFont("Helvetica-Oblique", small_size)
    p.drawString(1*inch, height - 6.4*inch, "Project")
    
    # Bullet points
    p.setFont("Helvetica", normal_size)
    p.drawString(1.2*inch, height - 6.6*inch, "• Developed a deep learning model using Random Forest to recognize ASL alphabets.")
    p.drawString(1.2*inch, height - 6.8*inch, "• Used TensorFlow and OpenCV for real-time detection through webcam.")
    p.drawString(1.2*inch, height - 7.0*inch, "• Achieved high accuracy by preprocessing and augmenting image data.")
    p.drawString(1.2*inch, height - 7.2*inch, "• Deployed the model using Streamlit for an interactive web interface.")
    
    # Project 3
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 7.5*inch, "Banking Chatbot")
    p.setFont("Helvetica-Oblique", normal_size)
    p.drawString(4*inch, height - 7.5*inch, "October 2024 — November 2024")
    p.setFont("Helvetica-Oblique", small_size)
    p.drawString(1*inch, height - 7.7*inch, "Project")
    
    # Bullet points
    p.setFont("Helvetica", normal_size)
    p.drawString(1.2*inch, height - 7.9*inch, "• Built an intelligent chatbot using Natural Language Processing (NLP) techniques.")
    p.drawString(1.2*inch, height - 8.1*inch, "• Trained the model to answer banking-related queries like balance inquiry.")
    
    # Start a new page for the rest of the content
    p.showPage()
    
    # Continue with the Banking Chatbot project
    p.setFont("Helvetica", normal_size)
    p.drawString(1.2*inch, height - 1*inch, "• Used spaCy, NLTK, and custom intent classification for improved understanding.")
    p.drawString(1.2*inch, height - 1.2*inch, "• Deployed using Flask with a clean front-end UI for easy customer interaction.")
    
    # Project 4
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 1.5*inch, "Movie Recommendation System")
    p.setFont("Helvetica-Oblique", normal_size)
    p.drawString(4*inch, height - 1.5*inch, "November 2024 — December 2024")
    p.setFont("Helvetica-Oblique", small_size)
    p.drawString(1*inch, height - 1.7*inch, "Project")
    
    # Bullet points
    p.setFont("Helvetica", normal_size)
    p.drawString(1.2*inch, height - 1.9*inch, "• Designed a recommendation system using collaborative filtering techniques.")
    p.drawString(1.2*inch, height - 2.1*inch, "• Processed IMDb dataset to suggest relevant movies based on user preferences.")
    p.drawString(1.2*inch, height - 2.3*inch, "• Implemented cosine similarity and TF-IDF for content analysis.")
    p.drawString(1.2*inch, height - 2.5*inch, "• Created a user-friendly interface with Streamlit for real-time recommendations.")
    
    # Project 5
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 2.8*inch, "Stock Market Analysis Dashboard")
    p.setFont("Helvetica-Oblique", normal_size)
    p.drawString(4*inch, height - 2.8*inch, "December 2024 — January 2025")
    p.setFont("Helvetica-Oblique", small_size)
    p.drawString(1*inch, height - 3.0*inch, "Project")
    
    # Bullet points
    p.setFont("Helvetica", normal_size)
    p.drawString(1.2*inch, height - 3.2*inch, "• Created an interactive stock market dashboard using Power BI.")
    p.drawString(1.2*inch, height - 3.4*inch, "• Connected live data sources and applied DAX for dynamic calculations and KPIs.")
    p.drawString(1.2*inch, height - 3.6*inch, "• Included slicers, trend lines, and sector-wise performance breakdowns.")
    p.drawString(1.2*inch, height - 3.8*inch, "• Enabled stakeholders to monitor stock performance through intuitive visuals.")
    
    # Education
    p.setFont("Helvetica-Bold", heading_size)
    p.drawString(1*inch, height - 4.2*inch, "EDUCATION")
    p.line(1*inch, height - 4.3*inch, 7.5*inch, height - 4.3*inch)
    
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 4.5*inch, "Bachelor of Data Science, The GIFT University, Gujranwala")
    p.setFont("Helvetica", normal_size)
    p.drawString(6*inch, height - 4.5*inch, "2021 - 2025")
    
    # Activities
    p.setFont("Helvetica-Bold", heading_size)
    p.drawString(1*inch, height - 4.9*inch, "ACTIVITIES")
    p.line(1*inch, height - 5.0*inch, 7.5*inch, height - 5.0*inch)
    
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 5.2*inch, "Certificate of Achievement, 1st Position in Semester Fall 2025")
    p.setFont("Helvetica", normal_size)
    p.drawString(6*inch, height - 5.2*inch, "2025")
    
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 5.4*inch, "Short Course Data Analytics and Business Intelligence By DigiSkills.Pk")
    p.setFont("Helvetica", normal_size)
    p.drawString(6*inch, height - 5.4*inch, "October 2023")
    
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 5.6*inch, "Short Course, WordPress By DigiSkills.PK")
    p.setFont("Helvetica", normal_size)
    p.drawString(6*inch, height - 5.6*inch, "September 2023")
    
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 5.8*inch, "Short Course, Introduction to Large Language Models by Coursera")
    p.setFont("Helvetica", normal_size)
    p.drawString(6*inch, height - 5.8*inch, "April 2025")
    
    p.setFont("Helvetica-Bold", normal_size)
    p.drawString(1*inch, height - 6.0*inch, "Short Course, Freelancing By DigiSkills.PK DigiSkills.pk")
    p.setFont("Helvetica", normal_size)
    p.drawString(6*inch, height - 6.0*inch, "April 2025")
    
    # Save the PDF
    p.showPage()
    p.save()
    
    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    buffer.seek(0)
    return send_file(buffer, as_attachment=True, download_name="Muhammad_Qadeer_Resume.pdf", mimetype="application/pdf")

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        # Validate form data
        if not name or not email or not message:
            return jsonify({"error": "Name, email, and message are required"}), 400
        
        # In a real implementation, you would send an email here
        # For example, using a service like SendGrid, Mailgun, or Flask-Mail
        
        # For demonstration purposes, we'll just log the data
        print(f"Contact form submission: Name: {name}, Email: {email}, Message: {message}")
        
        # Return success response
        return jsonify({"success": True})
    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        return jsonify({"error": "Failed to process contact form submission"}), 500

if __name__ == '__main__':
    app.run(debug=True)
