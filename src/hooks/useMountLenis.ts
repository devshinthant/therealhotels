import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import TextPlugin from "gsap/dist/TextPlugin"
import Lenis from "lenis"

export default function useMountLenis() {
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis()

    // Listen for the 'scroll' event and log the event data to the console
    lenis.on("scroll", (e) => {
      console.log(e)
    })

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update)

    gsap.registerPlugin(TextPlugin)

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000) // Convert time from seconds to milliseconds
    })

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
