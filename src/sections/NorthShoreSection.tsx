import { useEffect } from "react"
import Button from "@/components/Button"
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
      <div
        className="absolute inset-0 z-[1] h-full w-full"
        style={{
          backgroundImage: "linear-gradient(#0b0a0e00,#0b0a0ebf)",
        }}
      />
      <img
        className="absolute inset-0 h-full w-full"
        src="https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/673bbec0393321ca531d449b_RHOP_S9E4-6_North%20Shore%20Landing%20aka%20Mia%27s%20Manor_1-topaz-upscale-2000w.avif"
      />

      <div className="absolute left-1/2 z-[2] flex h-full w-full -translate-x-1/2 flex-col justify-between px-5 py-14 lg:px-0">
        <div className="text-center text-[.75rem] leading-[1.4em] tracking-[.1em] text-white">
          <p>REAL HOUSEWIVES OF POTOMAC</p>
          <p>SEASON 9 | EPISODE(S) 4-6</p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 text-white">
          <div className="text-center">
            <p className="font-heading text-4xl leading-[1.4] tracking-[-0.02em] lg:text-[4rem]">
              North Shore Landing aka Mia's Manor
            </p>
            <p className="text-[.75rem] leading-[1.4em] tracking-[.1em]">
              LAKE NORMAN, NORTH CAROLINA
            </p>
          </div>

          <div className="h-[18vh] w-[1px] bg-white" />

          <p className="line-clamp-3 w-full text-center text-[.75rem] leading-[1.4em] tracking-[.1em]">
            ALSO A SNOOZE? NEW TO THE GROUP STACEY. STACEY’S STORYLINE CENTERS
            AROUND LEAVING HER POST AS A QVC PERSONALITY AND GETTING
            SEPARATED...
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
