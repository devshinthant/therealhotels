import { MouseEventHandler, useRef } from "react"
import gsap from "gsap"

export default function InTheWindSection() {
  const clipRef = useRef(null)

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!event.currentTarget) return
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    gsap.to(clipRef.current, {
      clipPath: `circle(141.4% at ${x}% ${y}%)`,
      duration: 0.4,
      ease: "sine",
    })
  }

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!event.currentTarget) return
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    gsap.to(clipRef.current, {
      clipPath: `circle(0% at ${x}% ${y}%)`,
      duration: 0.3,

      ease: "sine",
    })
  }

  return (
    <section
      id="space-section"
      className="relative z-10 h-screen w-screen bg-black"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-5">
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
          <div className="w-[35%] text-center text-[.75rem] leading-[1.4em] tracking-[0.1em] text-white">
            ARE YOU RELAXING ON VACATION AND CAUGHT SIGHT OF A SPRINTER VAN?
            EATING DINNER AND THE GALS WALTZ IN, ONLY TO THROW SALAD, WINE
            GLASSES, OR NAPKINS AT ONE ANOTHER? SEND US THE RECEIPTS, PROOF,
            TIMELINES, SCREENSHOTS. SUBMISSIONS WILL BE FEATURED ON OUR SITE AND
            SOCIAL MEDIA.
          </div>

          <div
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-full border transition-all hover:border-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Button Content */}
            <div className="flex h-[2.5rem] w-full bg-white px-[1rem] leading-[1] text-black">
              <div className="mx-auto flex items-center justify-center gap-1">
                <div className="relative z-[2] text-[.75rem] uppercase leading-[1.4em] group-hover:text-white">
                  Discover the wild ones
                </div>
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
                  className="relative z-[2] order-[-1] scale-[0.6] group-hover:stroke-white"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 4h-2l-3 10v2.5" />
                  <path d="M16 4h2l3 10v2.5" />
                  <path d="M10 16l4 0" />
                  <path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                  <path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
                </svg>
              </div>
            </div>

            <div
              ref={clipRef}
              className="pointer-events-none absolute inset-0 h-[2.5rem] w-full rounded-[100vw] bg-black"
              style={{ clipPath: "circle(0% at 50% 50%)" }}
            />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="absolute left-[34%] top-[2%]">
        <img
          className="h-[15vh] w-[7vw]"
          src="https://cdn.prod.website-files.com/66bdbd95953ed41b630aa4ba/66c658c0fc8c1bc4501bcb52_sunset.avif"
        />
      </div>

      <div className="absolute right-[22%] top-[17%]">
        <img
          className="h-[10vh] w-[8vw]"
          src="https://cdn.prod.website-files.com/66bdbd95953ed41b630aa4ba/66c6587ddf0ae8fd5c7d663f_12_Medley-Watson.avif"
        />
      </div>

      <div className="absolute bottom-[40%] left-[18%]">
        <img
          className="h-[11vh] w-[9vw]"
          src="https://cdn.prod.website-files.com/66bdbd95953ed41b630aa4ba/66c658b3053670fd133cf579_RHOC_ITW_Surf%20%26%20Sand%20Resort%20Laguna%20Beach_-topaz-upscale-2500w.avif"
        />
      </div>
    </section>
  )
}
