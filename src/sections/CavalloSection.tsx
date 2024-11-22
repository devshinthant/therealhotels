import { useEffect } from "react"
import Button from "@/components/Button"
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
      <div
        className="absolute inset-0 z-[1] h-full w-full"
        style={{
          backgroundImage: "linear-gradient(#0b0a0e00,#0b0a0ebf)",
        }}
      />
      <img
        className="absolute inset-0 h-full w-full"
        src="https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/673bbf83dc74dc87ff290f6f_RHOSLC_S5E8-9_Cavallo%20Ranch_1-topaz-upscale-2000w.avif"
      />

      <div className="absolute left-1/2 z-[2] flex h-full w-full -translate-x-1/2 flex-col justify-between px-5 py-14 lg:px-0">
        <div className="text-center text-[.75rem] leading-[1.4em] tracking-[.1em] text-white">
          <p>REAL HOUSEWIVES OF SALT LAKE CITY</p>
          <p>SEASON 5 | EPISODE(S) 8-9</p>
        </div>

        <div className="flex flex-col items-center gap-6 text-white">
          <div className="text-center">
            <p className="font-heading text-5xl leading-[1.4] tracking-[-0.02em] lg:text-[4rem]">
              Cavallo Ranch
            </p>
            <p className="text-[.75rem] leading-[1.4em] tracking-[.1em]">
              PALM SPRINGS, CALIFORNIA
            </p>
          </div>

          <div className="h-[18vh] w-[1px] bg-white" />

          <p className="line-clamp-3 w-full text-center text-[.75rem] leading-[1.4em] tracking-[.1em] lg:w-[28%]">
            SETH MARKS CALLED WHITNEY A BIATCH WHEN COMING TO MEREDITH’S
            DEFENSE. JOHN BARLOW MANSPLAINED HOW FIGHTING WOMEN SHOULD
            APOLOGIZE. SHAWN....
          </p>

          <Button
            iconPosition="right"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-[2] scale-[0.6] group-hover:stroke-white"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            }
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
