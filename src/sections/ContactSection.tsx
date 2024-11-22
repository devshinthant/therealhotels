import { useEffect } from "react"
import gsap from "gsap"
import SplitType from "split-type"

export default function ContactSection() {
  useEffect(() => {
    const contactTitles = new SplitType("#contact-title", {
      types: "chars",
      charClass: "contactTitleEntry",
    })

    gsap.to(contactTitles.chars, {
      scrollTrigger: {
        trigger: "#contact-section",
        start: "top center",
        end: "top top",
        toggleActions: "play none none reset",
      },
      opacity: 1,
      rotateX: 0,
      yPercent: -60,
      stagger: 0.05,
    })

    gsap.to("#contact-description", {
      scrollTrigger: {
        trigger: "#contact-section",
        start: "top 40%",
        end: "top top",
        toggleActions: "play none none reset",
      },
      opacity: 1,
      yPercent: -60,
    })
  }, [])

  return (
    <section
      id="contact-section"
      className="relative z-10 flex h-screen w-screen items-center justify-center"
    >
      <div className="flex flex-col items-center gap-16">
        <div className="text-center text-white">
          <p
            id="contact-title"
            className="overflow-hidden font-heading text-9xl leading-[1.2]"
          >
            Stay in the know
          </p>
          <div className="overflow-hidden">
            <p className="translate-y-[60%] opacity-0" id="contact-description">
              Be the first to know about new hotels we’ve uncovered
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex h-12 w-[75vw] items-center rounded-full bg-[#1B1A1E]"
          >
            <input
              required
              aria-label="email address"
              placeholder="Email Address"
              className="h-full flex-1 rounded-l-full bg-transparent px-5 text-sm text-white placeholder:text-xs placeholder:uppercase placeholder:tracking-wider placeholder:text-[#9D9C9D] focus-visible:outline-none"
            />
            <button type="submit" className="h-full w-[8%] rounded-r-full p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
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
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </div>
            </button>
          </form>

          <div className="mb-4 flex items-center">
            <input
              id="checkbox"
              type="checkbox"
              value=""
              className="h-3 w-3 rounded-[4px] border border-[#3A383A] accent-[#D6BF84] checked:flex checked:items-center checked:justify-center checked:border-none checked:bg-[#D6BF84] checked:text-white focus:outline-none"
            />
            <label htmlFor="checkbox" className="ms-2 text-xs text-white">
              I accept the{" "}
              <span className="underline underline-offset-2">
                terms and conditions
              </span>
            </label>
          </div>
        </div>

        <div className="grid h-[12vh] w-full grid-cols-5">
          <div className="col-span-1 h-full">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <p className="contactLink">MAP</p>
              <p className="contactLink">SERIES</p>
              <p className="contactLink">ABOUT</p>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <p className="contactLink">SUBMIT</p>
              <p className="contactLink">PRESS</p>
              <p className="contactLink">CONTACT</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="m-auto h-full w-[1px] bg-white opacity-60" />
          </div>
          <div className="col-span-1 h-full">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <p className="contactLink">CREDITS</p>
              <p className="contactLink">ACCESSIBILITY</p>
              <p className="contactLink">PRIVACY</p>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <p className="contactLink">FACEBOOK</p>
              <p className="contactLink">INSTAGRAM</p>
              <p className="contactLink">1AX CONSULTING</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center text-xs tracking-tight text-white opacity-60">
            This site features affiliate links. When you click on a link and
            book a trip,
          </p>

          <p className="text-center text-xs tracking-tight text-white opacity-60">
            The Real Hotels may earn a small commission at no cost to you.
          </p>
        </div>
      </div>
    </section>
  )
}
