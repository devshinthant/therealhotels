import { useEffect } from "react"
import HeroImage1 from "@/assets/hero/hero-img-1.avif"
import HeroImage2 from "@/assets/hero/hero-img-2.avif"
import HeroImage3 from "@/assets/hero/hero-img-3.avif"
import HeroImage4 from "@/assets/hero/hero-img-4.avif"
import gsap from "gsap"

export default function HeroSection() {
  useEffect(() => {
    function parallax(e: MouseEvent) {
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

  return (
    <section id="hero-section" className="h-[200svh]">
      <div className="h-screen">
        <div className="relative h-full">
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-[13.5rem] leading-[1] text-white">
            The Real Hotels
          </div>

          {/* Images */}
          <div
            data-value={13}
            id="hero-img"
            className="absolute left-[32%] top-[10%]"
          >
            <img src={HeroImage1} className="h-[90px] w-[140px]" />
          </div>

          <div
            data-value={10}
            id="hero-img"
            className="absolute left-[8%] top-[30%] z-[1]"
          >
            <img src={HeroImage2} className="h-[160px] w-[130px]" />
          </div>

          <div
            data-value={5}
            id="hero-img"
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
            className="absolute bottom-[40%] right-[5%]"
          >
            <img src={HeroImage3} className="h-[90px] w-[130px]" />
          </div>

          <div
            data-value={7}
            id="hero-img"
            className="absolute bottom-[25%] right-[25%]"
          >
            <img src={HeroImage4} className="h-[140px] w-[114px]" />
          </div>

          <div
            data-value={7}
            id="hero-img"
            className="absolute right-[15%] top-[18%] h-[115px] w-[190px]"
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
      <div className="h-screen text-white">Image Section</div>
    </section>
  )
}
