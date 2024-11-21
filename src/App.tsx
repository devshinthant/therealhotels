import useMountLenis from "./hooks/useMountLenis"
import Navbar from "./layout/Navbar"
import CavalloSection from "./sections/CavalloSection"
import HeroSection from "./sections/HeroSection"
import InTheWindSection from "./sections/InTheWindSection"
import MayFairSection from "./sections/MayFairSection"
import NorthShoreSection from "./sections/NorthShoreSection"
import TextImageSection from "./sections/TextImageSection"
import TextSection from "./sections/TextSection"

function App() {
  useMountLenis()

  return (
    <div className="h-auto w-screen bg-black">
      <Navbar />
      <HeroSection />
      <TextSection />
      <TextImageSection />
      <InTheWindSection />
      <CavalloSection />
      <NorthShoreSection />
      <MayFairSection />
    </div>
  )
}

export default App
