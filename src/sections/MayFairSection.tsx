import Button from "@/components/Button"

export default function MayFairSection() {
  return (
    <section id="mayfair-section" className="relative z-10 h-screen w-screen">
      <div
        className="absolute inset-0 z-[1] h-full w-full"
        style={{
          backgroundImage: "linear-gradient(#0b0a0e00,#0b0a0ebf)",
        }}
      />

      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/672d0043e9147b9cab9aadaf_RHOC_S18E14-16_The%20May%20Fair%20Hotel_1-topaz-upscale-2000w.avif"
      />

      <div className="absolute left-1/2 z-[2] flex h-full w-full -translate-x-1/2 flex-col justify-between px-5 py-14 lg:px-0">
        <div className="text-center text-[.75rem] leading-[1.4em] tracking-[.1em] text-white">
          <p>REAL HOUSEWIVES OF ORANGE COUNTY</p>
          <p>SEASON 18 | EPISODE(S) 14-16</p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 text-white">
          <div className="text-center">
            <p className="font-heading text-5xl leading-[1.4] tracking-[-0.02em] lg:text-[4rem]">
              The May Fair Hotel
            </p>
            <p className="text-[.75rem] leading-[1.4em] tracking-[.1em]">
              LONDON, ENGLAND
            </p>
          </div>

          <div className="h-[18vh] w-[1px] bg-white" />

          <p className="line-clamp-3 w-full text-center text-[.75rem] leading-[1.4em] tracking-[.1em] lg:w-[28%]">
            SHANNON ENDS HER BIRTHDAY TRIP BENT OVER AND CRYING, BEGGING FOR
            RELIEF IN THE FORM OF AN EMERGENCY ENEMA DELIVERED BY KATIE (WHO, IT
            MUS...
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
