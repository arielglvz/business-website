import { useEffect, useState } from "react"
import Header from "@/components/ui/Header"
import Home from "@/pages/home/Home"
import Services from "@/pages/services/Services"
import HowItWorks from "@/pages/how-it-works/HowItWorks"
import OurStory from "@/pages/ourstory/OurStory"
import OurExperts from "@/pages/our-experts/OurExperts"
import Faqs from "@/pages/faqs/Faqs"
import Contact from "@/pages/contact/Contact"
import Footer from "@/components/ui/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // controls when section becomes active
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 0 // match your header height (h-20 = 80px)

    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    console.log(elementPosition, offsetPosition)
    window.scrollTo({
      top: offsetPosition, // add some extra spacing
      behavior: "smooth",
    })

    el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      <Header
        scrolled={scrolled}
        handleScroll={handleScroll}
        activeSection={activeSection}
      />
      <Home handleScroll={handleScroll} />
      <Services handleScroll={handleScroll} />
      <HowItWorks handleScroll={handleScroll} />
      <OurStory />
      <OurExperts />
      <Faqs handleScroll={handleScroll} />
      <Contact handleScroll={handleScroll} />
      <Footer handleScroll={handleScroll} />
    </main>
  )
}

export default App
