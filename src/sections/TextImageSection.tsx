import { useEffect } from "react"
import gsap from "gsap"

export default function TextImageSection() {
  useEffect(() => {
    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#space-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })
  }, [])

  return (
    <section className="pinned absolute top-[200vh] h-screen w-screen bg-transparent">
      <div className="absolute left-[5%] top-[20%] grid">
        {leftImages.map((image, index) => (
          <img
            key={index}
            id={`left-img-${index + 1}`}
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="invisible col-start-1 col-end-2 row-start-1 row-end-2 h-[14vh] w-[20vw] object-cover lg:h-[24vh] lg:w-[11vw]"
            src={image}
          />
        ))}
      </div>

      <div className="absolute right-[5%] top-[26%] grid">
        {rightTopImages.map((image, index) => (
          <img
            key={index}
            id={`right-img-${index + 1}`}
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="invisible col-start-1 col-end-2 row-start-1 row-end-2 h-[6vh] w-[20vw] object-cover lg:h-[10vh] lg:w-[8vw]"
            src={image}
          />
        ))}
      </div>

      <div className="absolute bottom-[20%] right-[10%] grid">
        {rightBottomImages.map((image, index) => (
          <img
            key={index}
            id={`right-img-${index + 1}`}
            style={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            className="invisible col-start-1 col-end-2 row-start-1 row-end-2 h-[8vh] w-[25vw] object-cover lg:h-[14vh] lg:w-[12vw]"
            src={image}
          />
        ))}
      </div>
    </section>
  )
}

const leftImages = [
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66daf7564b1b2f290f4ccb7c_RHOC_S14E7-9_Miraval%20Resort_1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66db036bad5b910586483275_RHONY_S6E15-17_The%20Resort%20at%20Paws%20Up_2-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66db1b01c6f75f4c57fadc76_RHOA_S3E15_Miami-1.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66deceb807bb4e3770db189e_RHONJ_S5E13_The%20Miraval%20Resort%20and%20Spa_1.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b41eadea2670c0e9fc15_georgi-kalaydzhiev-tO5kMpIAQm0-unsplash.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e19942f51a81b6184f2630_RHOBH_S13E13-15_Barcelona%2C%20Spain-2.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1a0591dea7ecee66c6879_RHOM_S6E12-13_Mondrian%20Mexico%20City%20Condesa_2-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1a30b95c34f2839373ced_RHOP_S3E14-16_Ho%CC%82tel%20Martinez%20part%20of%20The%20Unbound%20Collection%20by%20Hyatt_1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1ae0ccc2bceb71f9cf83c_RHOD_S2E7-9_Grand%20Velas%20Resort_3-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b514e80f8497252da2c4_RHOSLC_S2E10-12_Colorado%20Vail%20Avanti%20Chalet_3.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66f434aa1e2997a6c52f521c_RHODUB_S2E8-10_Intercontinental%20Bali%20Resort_3-topaz-upscale-2000w.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1ace6f49ba3056907dc42_dorinda-medley-blue-stone-manor-entry-hall-daybed-mick-hales-1628704283636-topaz.avif",
]

const rightTopImages = [
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66daf6d5b7409c4b64695c92_1_SF-1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66db01e4d0ef5ace65b5f1c0_RHONY_S6E9_Berkshires-2-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66db23db4a719eb800358ec2_RHOA_S7E19-20_The%20Farm%20at%20San%20Benito_2-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66ded489b23da42fb7825969_RHONJ_S10E11-12_Hamptons-3.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b42143fe1e50c13bd906_daniel-j-schwarz-D7Se2JxhCYw-unsplash.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66df13976ec6d91e372d7866_RHOBH_S3E11-12_Four%20Seasons%20Hotel%20LAS%20VEGAS_1.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e19f7a968b70423f4ae47c_RHOM_S5E13-15_Grand%20Hyatt%20Baha%20Mar_3.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1a6371ead0289927c2e4f_RHOP_S4E4-6_The%20Windsor%20Court_3.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1aefbc2f6a3a0344c4ab3_RHOD_S3E3-4_Beaver%20Creek%2C%20Colorado-1.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b7b2da3371e23c6b0e67_RHOSLC_S4E2-4_Trixie%20Motel_1.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66f422a117735686ef677c46_RHODUB_S1E10-11_Nurai%20Island%20Hotel_2-topaz-upscale-2000w.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1ace8631de6ca61111d95_RHUGT_ITW_Villa%20Aye_%20.avif",
]

const rightBottomImages = [
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66dae241fda6d0cf86649e4e_RHOC_S14E7-9_Miraval%20Resort_3-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66dafd5eb8c30c4d8a394aa5_RHONY_S4E7-10_Morocco-2-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66db23d9b4b5fda8294a37ec_RHOA_S7E19-20_The%20Farm%20at%20San%20Benito_1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66ded2500ba8686872db2330_RHONJ_S8E10-11_Casa%20Baglioni%20_1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b4249bcff20b57ca4541_khadeeja-yasser-msFZE7d9KB4-unsplash.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66d1e925fb5adca466b46afc_Palms-1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1a054f8744cb18b3f05ef_RHOM_S6E12-13_Mondrian%20Mexico%20City%20Condesa_1.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1a254a8d9e69831ae1444_RHOP_S2E10-11_Newstead%20Belmont%20Hills%20Golf%20Resort%20and%20Spa_1-topaz.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b1a7a883f7d989f6a332_RHOD_S4E12-14_Thailand-2.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1b8796578dd1a8ab1a2b4_RHOSLC_S4E13-16_Bermuda-3.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66f434b2214720a53156a4fa_RHODUB_S2E8-10_Intercontinental%20Bali%20Resort_4-topaz-upscale-2000w.avif",
  "https://cdn.prod.website-files.com/66be216df5f5c498bc873efb/66e1acebbf48b3e236a3ca3e_RHUGT_ITW_Villa%20Dunes_%202-topaz.avif",
]
