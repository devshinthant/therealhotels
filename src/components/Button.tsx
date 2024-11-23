import { useRef } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

interface Props
  extends Omit<
    React.DOMAttributes<HTMLButtonElement>,
    "onMouseEnter" | "onMouseLeave"
  > {
  children: React.ReactNode
  icon: React.ReactNode
  iconPosition?: "left" | "right"
  gap?: number
}

export default function Button({
  children,
  icon,
  iconPosition = "left",
  gap,
  ...rest
}: Props) {
  const clipRef = useRef<HTMLDivElement>(null)
  const gsapContext = useRef<gsap.Context | null>(null)

  const handleMouseEnter: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (!clipRef.current) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    gsapContext.current?.kill() // Kill any ongoing animations
    gsapContext.current = gsap.context(() => {
      gsap.to(clipRef.current, {
        clipPath: `circle(141.4% at ${x}% ${y}%)`,
        duration: 0.4,
        ease: "sine.out",
      })
    })
  }

  const handleMouseLeave: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (!clipRef.current) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    gsapContext.current?.kill() // Kill any ongoing animations
    gsapContext.current = gsap.context(() => {
      gsap.to(clipRef.current, {
        clipPath: `circle(0% at ${x}% ${y}%)`,
        duration: 0.3,
        ease: "sine.in",
      })
    })
  }

  return (
    <button
      aria-label="button"
      className="group relative mt-3 flex flex-col items-center justify-center overflow-hidden rounded-full border transition-all hover:border-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Button Content */}
      <div
        className={
          "flex h-[2.5rem] w-full bg-white px-[1rem] leading-[1] text-black"
        }
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-center gap-1",
            `gap-${gap}`
          )}
        >
          {iconPosition === "left" && icon}
          <div className="relative z-[2] text-[.75rem] font-medium uppercase leading-[1.4em] group-hover:text-white">
            {children}
          </div>
          {iconPosition === "right" && icon}
        </div>
      </div>

      <div
        ref={clipRef}
        className="pointer-events-none absolute inset-0 h-[2.5rem] w-full rounded-[100vw] bg-black"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      />
    </button>
  )
}
