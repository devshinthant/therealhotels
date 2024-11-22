import { useEffect } from "react"
import Button from "@/components/Button"
import gsap from "gsap"

export default function InTheWindSection() {
  useEffect(() => {
    gsap.to("#itw-img-wrapper", {
      scrollTrigger: {
        trigger: "#itw-section",
        start: "top center",
        end: "top top",
        toggleActions: "play none none reset",
      },
      clipPath: "inset(0% 0% 0% 0%)",
    })

    gsap.to("#itw-description", {
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#itw-section",
        start: "top center",
        end: "top top",
        toggleActions: "play none none reset",
      },
      yPercent: -100,
    })
  }, [])

  return (
    <section
      id="itw-section"
      className="relative z-10 h-screen w-screen bg-black"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-10 lg:gap-5">
          <div
            style={
              {
                "-webkit-mask-image":
                  "linear-gradient(#0000 0%,#fff 0%,#0000 85% 100%)",
              } as React.CSSProperties
            }
            className="font-heading text-[22cqw] leading-[1] text-white"
          >
            In the wild
          </div>
          <div className="w-[70%] text-center text-[.75rem] uppercase leading-[1.4em] tracking-[0.1em] text-white lg:w-full">
            <div className="overflow-hidden">
              <p id="itw-description" className="translate-y-full">
                Are you relaxing on vacation and caught sight of a
              </p>
            </div>
            <div className="overflow-hidden">
              <p id="itw-description" className="translate-y-full">
                Sprinter van? Eating dinner and the gals waltz in, only to
              </p>
            </div>
            <div className="overflow-hidden">
              <p id="itw-description" className="translate-y-full">
                throw salad, wine glasses, or napkins at one another? Send
              </p>
            </div>
            <div className="overflow-hidden">
              <p id="itw-description" className="translate-y-full">
                us the Receipts, Proof, Timelines, Screenshots. Submissions
              </p>
            </div>
            <div className="overflow-hidden">
              <p id="itw-description" className="translate-y-full">
                will be featured on our site and social media.
              </p>
            </div>
          </div>

          <Button
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
                <path d="M8 4h-2l-3 10v2.5" />
                <path d="M16 4h2l3 10v2.5" />
                <path d="M10 16l4 0" />
                <path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                <path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
              </svg>
            }
          >
            Discover the wild ones
          </Button>
        </div>
      </div>

      {/* Images */}
      <div
        id="itw-img-wrapper"
        className="absolute left-[34%] top-[15%] lg:top-[2%]"
        style={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
      >
        <img
          className="h-[9vh] w-[15vw] lg:h-[15vh] lg:w-[7vw]"
          src="https://cdn.prod.website-files.com/66bdbd95953ed41b630aa4ba/66c658c0fc8c1bc4501bcb52_sunset.avif"
        />
      </div>

      <div
        id="itw-img-wrapper"
        style={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        className="absolute right-[20%] top-[25%] lg:right-[22%] lg:top-[17%]"
      >
        <img
          className="h-[6vh] w-[18vw] lg:h-[10vh] lg:w-[8vw]"
          src="https://cdn.prod.website-files.com/66bdbd95953ed41b630aa4ba/66c6587ddf0ae8fd5c7d663f_12_Medley-Watson.avif"
        />
      </div>

      <div
        id="itw-img-wrapper"
        style={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        className="absolute bottom-[58%] left-[10%] lg:bottom-[40%] lg:left-[18%]"
      >
        <img
          className="h-[6vh] w-[17vw] lg:h-[11vh] lg:w-[9vw]"
          src="https://cdn.prod.website-files.com/66bdbd95953ed41b630aa4ba/66c658b3053670fd133cf579_RHOC_ITW_Surf%20%26%20Sand%20Resort%20Laguna%20Beach_-topaz-upscale-2500w.avif"
        />
      </div>
    </section>
  )
}
