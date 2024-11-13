import { useEffect, useState } from "react"
import Cover from "@/assets/nav-cover.avif"
import gsap from "gsap"
import { cn } from "@/lib/utils"
import usePrevious from "@/hooks/usePrevious"

const navTitleOne = "CURATED HOTELS FROM THE REAL HOUSEWIVES"
const navTitleTwo = "BETHENNY ORDERED FOR THE TABLE"

export default function Navbar() {
  const [opened, setOpened] = useState(false)
  const previousOpened = usePrevious(opened)

  /* Icon */
  useEffect(() => {
    if (opened) {
      const entryTimeline = gsap.timeline()

      entryTimeline.to("#nav-section", {
        yPercent: 100,
        ease: "sine.in",
        duration: 0.4,
        delay: 0.15,
        onComplete: () => {
          gsap
            .timeline({ ease: "sine.inOut" })
            .to("#nav-section-description", { yPercent: -100, stagger: 0.05 })
            .to("#nav-section-link", { yPercent: -100, stagger: 0.05 }, "<")
            .to(
              "#nav-section-image-wrapper",
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.4,
                ease: "power4.inOut",
              },
              "-=0.6"
            )
            .to("#nav-section-image", { scale: 1, duration: 0.8 }, "<")
        },
      })
    } else if (previousOpened && !opened) {
      const exitTimeline = gsap.timeline()
      exitTimeline
        .to("#nav-section-description", { yPercent: 100, stagger: 0.05 })
        .to("#nav-section-link", { yPercent: 100, stagger: 0.05 }, "<")
        .to(
          "#nav-section-image-wrapper",
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            duration: 0.4,
            ease: "power4.inOut",
          },
          "<"
        )
        .to("#nav-section-image", { scale: 1.2, duration: 0.4 }, "<")
        .to("#nav-section", { yPercent: -100, ease: "none", duration: 0.45 })
    }

    gsap.to("#top-bar", {
      y: opened ? 5 : 0,
      rotate: opened ? "45%" : "0%",
      duration: 0.3,
      ease: "sine",
    })
    gsap.to("#bottom-bar", {
      y: opened ? -5 : 0,
      rotate: opened ? "-45%" : "0%",
      duration: 0.3,
      ease: "sine",
    })
  }, [opened, previousOpened])

  /* Icon */

  /* Nav */
  useEffect(() => {
    if (opened) {
      gsap.to("#middle-bar", {
        opacity: 0,
        ease: "none",
        duration: 0,
      })
    } else if (previousOpened && !opened) {
      gsap.to("#middle-bar", {
        opacity: 1,
        ease: "none",
        duration: 0,
        delay: 0.25,
      })
    }

    if (opened) {
      gsap.to(["#top-bar", "#bottom-bar", "#middle-bar"], {
        background: "black",
        ease: "none",
        duration: 0.6,
      })
    } else if (previousOpened && !opened) {
      gsap.to(["#top-bar", "#bottom-bar", "#middle-bar"], {
        background: "white",
        ease: "none",
        duration: 0.6,
        delay: 0.5,
      })
    }

    gsap.to("#nav-title", {
      text: opened ? navTitleTwo : navTitleOne,
      ease: "power1",
      duration: 1.2,
    })

    if (opened) {
      gsap.to("#nav-title", {
        borderColor: "black",
        color: "black",
      })
    } else if (previousOpened && !opened) {
      gsap.to("#nav-title", {
        borderColor: "white",
        color: "white",
        delay: 0.5,
      })
    }
  }, [opened, previousOpened])
  /* Nav */

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex h-[var(--navbar-height)] w-full items-center justify-center px-[var(--navbar-padding-x)]">
        <div className="flex w-full items-center justify-between">
          <div
            id="nav-title"
            className="w-[170px] border-l-[0.11rem] border-white px-3 text-[10px] font-medium leading-[1.5] text-white"
          >
            {navTitleOne}
          </div>
          <button
            onClick={() => setOpened((prev) => !prev)}
            className="w-12"
            type="button"
            aria-label="menu-button"
          >
            <div className="flex flex-col items-start gap-[5px]">
              <div
                id="top-bar"
                className="h-[1px] w-full origin-center bg-white"
              />
              <div
                id="middle-bar"
                className="h-[1px] w-full origin-center bg-white"
              />
              <div
                id="bottom-bar"
                className="h-[1px] w-full origin-center bg-white"
              />
            </div>
          </button>
        </div>
      </nav>
      <div
        id="nav-section"
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-full -translate-y-full bg-[#F3F1F1] px-[var(--navbar-padding-x)] pb-12 pt-[calc(var(--navbar-height)+70px)]"
        )}
      >
        <div className="relative flex h-full w-full items-start justify-between">
          <div
            id="nav-section-title"
            className="flex w-[40%] flex-col items-start font-heading text-[55px] leading-[1.4]"
          >
            <div className="overflow-hidden">
              <div id="nav-section-description" className="translate-y-full">
                Explore the map
              </div>
            </div>
            <div className="overflow-hidden">
              <div id="nav-section-description" className="translate-y-full">
                Browse by series
              </div>
            </div>

            <div className="overflow-hidden">
              <div id="nav-section-description" className="translate-y-full">
                Housewives in the wild
              </div>
            </div>
            <div className="overflow-hidden">
              <div id="nav-section-description" className="translate-y-full">
                About us
              </div>
            </div>
            <div className="overflow-hidden">
              <div id="nav-section-description" className="translate-y-full">
                Get in touch
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 h-fit w-fit">
            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-col items-start text-[10px] font-medium">
                <div className="overflow-hidden">
                  <div id="nav-section-link" className="translate-y-full">
                    FACEBOOK
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div id="nav-section-link" className="translate-y-full">
                    INSTAGRAM
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div id="nav-section-link" className="translate-y-full">
                    1AX CONSULTING
                  </div>
                </div>
              </div>
              <div
                id="nav-section-image-wrapper"
                style={{
                  clipPath: "polygon(0% 0%,0% 0%, 0% 100%,0% 100%)",
                }}
                className="h-[270px] w-[220px] overflow-hidden"
              >
                <img
                  id="nav-section-image"
                  className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                  src={Cover}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
