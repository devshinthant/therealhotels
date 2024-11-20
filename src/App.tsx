import useMountLenis from "./hooks/useMountLenis"
import Navbar from "./layout/Navbar"
import HeroSection from "./sections/HeroSection"
import InTheWindSection from "./sections/InTheWindSection"
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
    </div>
  )
}

export default App
