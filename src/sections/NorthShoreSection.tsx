import { useEffect } from "react"
import gsap from "gsap"

export default function NorthShoreSection() {
  useEffect(() => {
    gsap.to("#northshore-section", {
      scrollTrigger: {
        trigger: "#northshore-section",
        start: "top top",
        endTrigger: "#mayfair-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to("#northshore-section", {
      scrollTrigger: {
        trigger: "#mayfair-section",
        start: "top bottom",
        endTrigger: "#mayfair-section",
        end: "top top",
        scrub: true,
      },
      scale: 0.8,
    })
  }, [])
  return (
    <section
      id="northshore-section"
      className="relative z-10 h-screen w-screen"
    >
      <img
        className="absolute inset-0 h-full w-full"
        src="https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/673bbec0393321ca531d449b_RHOP_S9E4-6_North%20Shore%20Landing%20aka%20Mia%27s%20Manor_1-topaz-upscale-2000w.avif"
      />
    </section>
  )
}
