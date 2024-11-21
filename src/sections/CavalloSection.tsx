import { useEffect } from "react"
import gsap from "gsap"

export default function CavalloSection() {
  useEffect(() => {
    gsap.to("#cavallo-section", {
      scrollTrigger: {
        trigger: "#cavallo-section",
        start: "top top",
        endTrigger: "#northshore-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to("#cavallo-section", {
      scrollTrigger: {
        trigger: "#northshore-section",
        start: "top bottom",
        endTrigger: "#northshore-section",
        end: "top top",
        scrub: true,
      },
      scale: 0.8,
    })
  }, [])

  return (
    <section id="cavallo-section" className="relative z-10 h-screen w-screen">
      <img
        className="absolute inset-0 h-full w-full"
        src="https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/673bbf83dc74dc87ff290f6f_RHOSLC_S5E8-9_Cavallo%20Ranch_1-topaz-upscale-2000w.avif"
      />
    </section>
  )
}
