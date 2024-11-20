import { useEffect } from "react"
import HeroImage1 from "@/assets/hero/hero-img-1.avif"
import HeroImage2 from "@/assets/hero/hero-img-2.avif"
import HeroImage3 from "@/assets/hero/hero-img-3.avif"
import HeroImage4 from "@/assets/hero/hero-img-4.avif"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SplitType from "split-type"

export default function HeroSection() {
  /* Mouse Hover Animation */
  useEffect(() => {
    function parallax(e: MouseEvent) {
      if (window.scrollY !== 0) return

      const IMAGES = Array.from(document.querySelectorAll("#hero-img"))

      if (!IMAGES.length) return

      IMAGES.forEach((image) => {
        const moving_value = Number(image.getAttribute("data-value")) || 0
        const x = (e.clientX * moving_value) / 200
        const y = (e.clientY * moving_value) / 200

        gsap.to(image, {
          x,
          y,
          duration: 0.5,
        })
      })
    }

    document.addEventListener("mousemove", parallax)

    return () => {
      document.removeEventListener("mousemove", parallax)
    }
  }, [])

  /* Intro Transition */
  useEffect(() => {
    const titleCharacters = new SplitType("#hero-title", {
      types: "chars",
      charClass: "opacity-0 translate-y-full",
    })

    const timeline = gsap.timeline()

    timeline.to("#navbar", {
      yPercent: 100,
      delay: 0.5,
    })

    timeline.to(
      titleCharacters.chars,
      {
        opacity: 1,
        yPercent: -100,
        stagger: 0.05,
      },
      "-=0.2"
    )

    timeline.to(
      "#content",
      {
        opacity: 1,
        ease: "none",
      },
      "-=0.4"
    )

    timeline.to("#hero-img", {
      ease: "sine",
      clipPath: "inset(0% 0% 0% 0%)",
    })
  }, [])

  /* Gif Scroll */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".main-img", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "50% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      width: "100svw",
      height: "100svh",
      y: "85svh",
      x: "11%",
    })
  }, [])

  /* Content Scroll */
  useEffect(() => {
    gsap.to("#image-text", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "80% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      opacity: 1,
      yPercent: -60,
    })

    gsap.to("#image-bar", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "90% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      opacity: 1,
    })

    gsap.to("#image-btn", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "bottom bottom",
      },
      ease: "none",
      opacity: 1,
      yPercent: -60,
    })
  }, [])

  return (
    <section id="hero-section" className="relative z-10 h-[200vh]">
      <div className="h-screen">
        <div className="relative h-full">
          <div
            id="content"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 opacity-0"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-2">
                <div className="font-heading text-[2rem] leading-[1] text-white">
                  Money can’t buy you class,
                </div>
                <div className="font-heading text-[2rem] leading-[1] text-white">
                  but it can buy you a vacation.
                </div>
              </div>
              <div className="flex flex-col items-center opacity-50">
                <div className="text-white">
                  Check in to the iconic hotels and resorts
                </div>
                <div className="text-white">
                  featured on The Real Housewives.
                </div>
              </div>
            </div>
          </div>
          <div
            id="hero-title"
            className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-heading text-[13.5rem] leading-[1] text-white"
          >
            The Real Hotels
          </div>

          {/* Images */}
          <div
            data-value={13}
            id="hero-img"
            className="absolute left-[32%] top-[10%]"
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
          >
            <img src={HeroImage1} className="h-[90px] w-[140px]" />
          </div>

          <div
            data-value={10}
            id="hero-img"
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="absolute left-[8%] top-[30%] z-[1]"
          >
            <img src={HeroImage2} className="h-[160px] w-[130px]" />
          </div>

          <div
            data-value={5}
            id="hero-img"
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="absolute left-[12%] top-[45%] z-0 h-[98px] w-[160px]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              src="https://cdn.jsdelivr.net/gh/madebykin/trh/TRH_home_hero-2.mp4"
            ></video>
          </div>

          <div
            data-value={13}
            id="hero-img"
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="absolute bottom-[40%] right-[5%]"
          >
            <img src={HeroImage3} className="h-[90px] w-[130px]" />
          </div>

          <div
            data-value={7}
            id="hero-img"
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="absolute bottom-[25%] right-[25%]"
          >
            <img src={HeroImage4} className="h-[140px] w-[114px]" />
          </div>

          <div
            data-value={7}
            id="hero-img"
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
              inset: "15% 11% auto auto",
            }}
            className="main-img absolute z-[1] h-[115px] w-[190px] will-change-transform"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              src="https://cdn.jsdelivr.net/gh/madebykin/trh/TRH_home_hero.mp4"
            ></video>
          </div>
        </div>
      </div>
      <div className="relative z-20 flex h-screen w-full items-end justify-center pb-16">
        <div className="flex min-h-[50svh] flex-col items-center gap-[2.5rem]">
          <div className="overflow-hidden">
            <div
              id="image-text"
              className="max-w-[44ch] translate-y-[60%] text-center text-[0.75rem] font-medium uppercase text-white opacity-0"
            >
              Our collections span the globe, offering you the chance to stay in
              the luxurious, beautiful, and bizarre accommodations you see on
              The Real Housewives. Get the gang together in the family van and
              prepare to squabble over who gets their own room.
            </div>
          </div>
          <div id="image-bar" className="w-[0.5px] flex-1 bg-white opacity-0" />
          <div className="overflow-hidden">
            <button
              id="image-btn"
              className="flex h-[2.5rem] translate-y-[60%] items-center gap-1 rounded-full bg-white px-3 text-[0.75rem] opacity-0 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="scale-75"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              <p className="font-medium tracking-wide">EXPLORE THE MAP</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
