document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      const icon = menuToggle.querySelector("i")
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement
  const themeIcon = themeToggle.querySelector("i")

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    htmlElement.classList.add("dark")
    themeIcon.classList.remove("fa-moon")
    themeIcon.classList.add("fa-sun")
  }

  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark")

    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark")
      themeIcon.classList.remove("fa-moon")
      themeIcon.classList.add("fa-sun")
    } else {
      localStorage.setItem("theme", "light")
      themeIcon.classList.remove("fa-sun")
      themeIcon.classList.add("fa-moon")
    }
  })

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
        } else {
          const categories = card.getAttribute("data-categories")
          if (categories && categories.includes(filter)) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        }
      })
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  const toast = document.getElementById("toast")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }

      // Send form data to server
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Show success toast
            toast.classList.add("show")

            // Reset form
            contactForm.reset()

            // Hide toast after 3 seconds
            setTimeout(() => {
              toast.classList.remove("show")
            }, 3000)
          } else {
            throw new Error(data.error || "Something went wrong")
          }
        })
        .catch((error) => {
          console.error("Error:", error)
          // Show error toast
          const toastMessage = toast.querySelector(".toast-message")
          const toastIcon = toast.querySelector(".toast-content i")

          toastMessage.textContent = "Failed to send message. Please try again."
          toastIcon.classList.remove("fa-check-circle")
          toastIcon.classList.add("fa-exclamation-circle")
          toastIcon.style.color = "var(--error)"

          toast.classList.add("show")

          setTimeout(() => {
            toast.classList.remove("show")
            // Reset toast to success state
            setTimeout(() => {
              toastMessage.textContent = "Message sent successfully!"
              toastIcon.classList.remove("fa-exclamation-circle")
              toastIcon.classList.add("fa-check-circle")
              toastIcon.style.color = "var(--success)"
            }, 300)
          }, 3000)
        })
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          const icon = menuToggle.querySelector("i")
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }

        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("animate")
      }
    })
  }

  // Initial check
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)
})
