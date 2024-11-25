import { useEffect } from "react"
import gsap from "gsap"
import SplitType, { TargetElement } from "split-type"
import { cn } from "@/lib/utils"

export default function TextSection() {
  /* Text Hover  */
  useEffect(() => {
    const container = document.getElementById("texts-section")

    if (!container) return

    const handleMouseEnter = (event: MouseEvent) => {
      if (!event.target) return
      const wrapper = (event.target as HTMLElement).closest(".textStyleWrapper")
      if (!wrapper) return

      const target = wrapper.querySelector(".textStyle")
      const sticker = wrapper.querySelector("#sticker")

      const id = wrapper.getAttribute("data-id")

      if (!target || !sticker) return

      gsap.to(".textStyle", {
        opacity: 0.2,
        duration: 0.3,
        overwrite: "auto",
      })

      gsap.to(target, {
        opacity: 1,
        duration: 0.3,
        overwrite: "auto",
      })

      const tl = gsap.timeline()

      tl.to(sticker, {
        scale: 1.5,
        rotate: "12deg",
        visibility: "visible",
        duration: 0.2,
      })

      tl.to(sticker, {
        scale: 1.2,
        rotate: "8deg",
        visibility: "visible",
        duration: 0.2,
      })

      const tl2 = gsap.timeline()
      tl2.set([`#left-img-${id}`, `#right-img-${id}`], {
        visibility: "visible",
        clipPath: "inset(0% 100% 0% 0%)",
      })

      tl2.to([`#left-img-${id}`, `#right-img-${id}`], {
        visibility: "visible",
        clipPath: "inset(0% 0% 0% 0%)",
      })
    }

    const handleMouseLeave = (event: MouseEvent) => {
      if (!event.target) return
      const wrapper = (event.target as HTMLElement).closest(".textStyleWrapper")
      if (!wrapper) return

      const id = wrapper.getAttribute("data-id")
      const sticker = wrapper.querySelector("#sticker")

      if (!sticker) return

      gsap.to(".textStyle", {
        opacity: 1,
        duration: 0.3,
        overwrite: "auto",
      })

      gsap.to([`#left-img-${id}`, `#right-img-${id}`], {
        visibility: "visible",
        clipPath: "inset(0% 0% 0% 100%)",
      })

      const tl = gsap.timeline()
      tl.to(sticker, {
        rotate: "11deg",
        scale: 1.7,
        duration: 0.2,
      })

      tl.to(
        sticker,
        {
          visibility: "invisible",
          scale: 0,
          rotate: "-8deg",
          ease: "power2.inOut",
        },
        "-=0.1"
      )
    }

    // Attach event listeners to the container
    container.addEventListener("mouseenter", handleMouseEnter, true)
    container.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter, true)
      container.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  /* Text Transition */
  useEffect(() => {
    const wrappers = document.querySelectorAll(".textStyleWrapper")

    wrappers.forEach((wrapper) => {
      const target = wrapper.querySelector(".textStyle") as TargetElement
      if (!target) return

      const text = new SplitType(target, {
        types: "chars",
        charClass: "translate-y-[110%] opacity-0",
      })

      gsap.to(text.chars, {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          toggleActions: "play none none reset",
          trigger: wrapper,
          start: "top 85%",
          end: "bottom 60%",
        },
      })
    })

    gsap.to("#texts-section-title", {
      y: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: "#texts-title-section",
        start: "top bottom",
        end: "bottom center",
      },
    })
  }, [])

  return (
    <section
      id="texts-section"
      className="relative z-10 flex w-full flex-col gap-32 py-36"
    >
      <div
        id="texts-title-section"
        className="flex flex-col items-center text-xs font-medium uppercase tracking-widest text-white"
      >
        <div className="overflow-hidden">
          <div id="texts-section-title" className="translate-y-full opacity-0">
            browse hotels by
          </div>
        </div>

        <div className="overflow-hidden">
          <div id="texts-section-title" className="translate-y-full opacity-0">
            your favorite series
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {data.map((text) => (
          <div key={text.id} data-id={text.id} className="textStyleWrapper">
            <div className="textStyle">{text.title}</div>
            <div
              id="sticker"
              className={cn("textSticker", text.stickerPosition)}
            >
              <img
                className="h-full w-full object-cover"
                src={text.stickerImg}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const data = [
  {
    id: 1,
    title: "Orange County",
    stickerPosition: "right-[8%] top-[15%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be23bb028842e774ed5158_OC-Sticker.svg",
  },
  {
    id: 2,
    title: "New York",
    stickerPosition: "bottom-[15%] left-[8%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be23e70dfd29dbb7b0e94c_NY-Sticker.svg",
  },
  {
    id: 3,
    title: "Atlanta",
    stickerPosition: "bottom-[15%] right-[8%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be2402918aa9d1a669b441_AT-Sticker.svg",
  },
  {
    id: 4,
    title: "New Jersey",
    stickerPosition: "left-[30%] top-[15%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be2419eb141f7c8c583680_NJ-Sticker.svg",
  },
  {
    id: 5,
    title: "D.C.",
    stickerPosition: "right-[20%] top-[10%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be24342b671eb3876df0c4_DA-Sticker.svg",
  },
  {
    id: 6,
    title: "Beverly Hills",
    stickerPosition: "bottom-[10%] left-[15%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be246edd9f36fde22ffe33_BH-Sticker.svg",
  },
  {
    id: 7,
    title: "Miami",
    stickerPosition: "bottom-[10%] right-[15%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be2483b52758c979bbf94a_MI-Sticker.svg",
  },
  {
    id: 8,
    title: "Potomac",
    stickerPosition: "left-[28%] top-[10%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be24975751a6e26f85a5cb_PO-Sticker.svg",
  },
  {
    id: 9,
    title: "Dallas",
    stickerPosition: "right-[20%] top-[10%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be24b52413894dd238a543_SL-Sticker.svg",
  },
  {
    id: 10,
    title: "Salt Lake City",
    stickerPosition: "bottom-[10%] left-[15%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be24cd06925c3aa28e779c_DU-Sticker.svg",
  },
  {
    id: 11,
    title: "Dubai",
    stickerPosition: "bottom-[10%] right-[15%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be250f5a91f448c142c08e_MI-Sticker-3.svg",
  },
  {
    id: 12,
    title: "Ultimate Girls Trip",
    stickerPosition: "left-[28%] top-[10%]",
    stickerImg:
      "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66be253006925c3aa28ed3d6_BH-Sticker-1.svg",
  },
]
