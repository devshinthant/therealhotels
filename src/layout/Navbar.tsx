import { useEffect, useState } from "react"

/* Covers */
import Cover1 from "@/assets/nav/nav-cover-1.avif"
import Cover2 from "@/assets/nav/nav-cover-2.avif"
import Cover3 from "@/assets/nav/nav-cover-3.avif"
import Cover4 from "@/assets/nav/nav-cover-4.avif"
import Cover5 from "@/assets/nav/nav-cover-5.avif"

/* Default */
import DefaultCover from "@/assets/nav/nav-cover.avif"
import gsap from "gsap"
import { cn } from "@/lib/utils"
import usePrevious from "@/hooks/usePrevious"

const navTitleOne = "CURATED HOTELS FROM THE REAL HOUSEWIVES"
const navTitleTwo = "BETHENNY ORDERED FOR THE TABLE"

export default function Navbar() {
  const [opened, setOpened] = useState(false)
  const previousOpened = usePrevious(opened)

  /* Nav */
  useEffect(() => {
    if (opened) {
      const entryTimeline = gsap.timeline().clear()
      entryTimeline.to("#nav-section", {
        yPercent: 100,
        onComplete: () => {
          gsap
            .timeline({ ease: "sine.inOut" })
            .to(
              "#nav-section-description",
              { yPercent: -100, stagger: 0.05 },
              "-=0.1"
            )
            .to("#nav-section-link", { yPercent: -100, stagger: 0.05 }, "<")
            .to(
              "#nav-section-image-wrapper",
              {
                clipPath: "inset(0% 0% 0% 0%)",
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
            clipPath: "inset(0% 100% 0% 0%)",
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

  /* Content Section */
  useEffect(() => {
    const descriptions = document.querySelectorAll("#nav-section-description")

    descriptions.forEach((description) => {
      description.addEventListener("mouseenter", () => {
        const coverIndex = description.getAttribute("data-cover") || 0

        gsap.set(`#nav-section-image-${coverIndex}`, {
          clipPath: "inset(0% 100% 0% 0%)",
        })

        gsap.to(`#nav-section-image-${coverIndex}`, {
          clipPath: "inset(0% 0% 0% 0%)",
          visibility: "visible",
          zIndex: 10,
        })

        gsap.to(descriptions, {
          opacity: 0.2,
          duration: 0.3,
          overwrite: "auto",
        })
        gsap.to(description, {
          opacity: 1,
          duration: 0.3,
        })
      })

      description.addEventListener("mouseleave", () => {
        gsap.to(descriptions, {
          opacity: 1,
          duration: 0.3,
        })

        const coverIndex = description.getAttribute("data-cover") || 0

        gsap.to(`#nav-section-image-${coverIndex}`, {
          clipPath: "inset(0% 0% 0% 100%)",
        })
      })
    })
  }, [])
  /* Content Section */

  return (
    <>
      <nav
        id="navbar"
        className="fixed left-0 top-0 z-50 flex h-[var(--navbar-height)] w-screen -translate-y-full items-center justify-center px-[var(--navbar-mobile-padding-x)] md:px-[var(--navbar-padding-x)]"
      >
        <div className="flex w-full items-center justify-end md:justify-between">
          <div
            id="nav-title"
            className="hidden w-[170px] border-l-[0.11rem] border-white px-3 text-[10px] font-medium leading-[1.5] text-white md:block"
          >
            {navTitleOne}
          </div>
          <button
            onClick={() => setOpened((prev) => !prev)}
            className="w-9 md:w-12"
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
      <section
        id="nav-section"
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-screen -translate-y-full bg-[#F3F1F1] px-[var(--navbar-mobile-padding-x)] pb-12 pt-[calc(var(--navbar-height)+70px)] md:px-[var(--navbar-padding-x)]"
        )}
      >
        <div className="relative flex h-full w-full items-start justify-between">
          <div
            id="nav-section-title"
            className="flex w-[70%] flex-col items-start font-heading text-[2rem] leading-[1.4] transition-all md:w-[40%] md:text-[55px]"
          >
            <div className="overflow-hidden">
              <div
                id="nav-section-description"
                data-cover="1"
                className="translate-y-full cursor-pointer"
              >
                Explore the map
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                id="nav-section-description"
                data-cover="2"
                className="translate-y-full cursor-pointer"
              >
                Browse by series
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                id="nav-section-description"
                data-cover="3"
                className="translate-y-full cursor-pointer"
              >
                Housewives in the wild
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                id="nav-section-description"
                data-cover="4"
                className="translate-y-full cursor-pointer"
              >
                About us
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                id="nav-section-description"
                data-cover="5"
                className="translate-y-full cursor-pointer"
              >
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

              <div className="image-section relative h-[130px] w-[100px] md:h-[270px] md:w-[220px]">
                <div
                  id="nav-section-image-wrapper"
                  style={{
                    clipPath: "inset(0% 100% 0% 0%)",
                  }}
                  className="absolute h-full w-full overflow-hidden"
                >
                  <img
                    id="nav-section-image"
                    className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                    src={DefaultCover}
                  />
                </div>

                <div
                  id="nav-section-image-1"
                  style={{
                    clipPath: "inset(0% 0% 0% 100%)",
                  }}
                  className="invisible absolute z-[1] h-full w-full overflow-hidden"
                >
                  <img
                    className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                    src={Cover1}
                  />
                </div>

                <div
                  id="nav-section-image-2"
                  style={{
                    clipPath: "inset(0% 0% 0% 100%)",
                  }}
                  className="invisible absolute z-[1] h-full w-full overflow-hidden"
                >
                  <img
                    className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                    src={Cover2}
                  />
                </div>

                <div
                  id="nav-section-image-3"
                  style={{
                    clipPath: "inset(0% 0% 0% 100%)",
                  }}
                  className="invisible absolute z-[1] h-full w-full overflow-hidden"
                >
                  <img
                    className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                    src={Cover3}
                  />
                </div>

                <div
                  id="nav-section-image-4"
                  style={{
                    clipPath: "inset(0% 0% 0% 100%)",
                  }}
                  className="invisible absolute z-[1] h-full w-full overflow-hidden"
                >
                  <img
                    className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                    src={Cover4}
                  />
                </div>

                <div
                  id="nav-section-image-5"
                  style={{
                    clipPath: "inset(0% 0% 0% 100%)",
                  }}
                  className="invisible absolute z-[1] h-full w-full overflow-hidden"
                >
                  <img
                    className="h-full w-full scale-[1.2] overflow-hidden object-cover"
                    src={Cover5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
