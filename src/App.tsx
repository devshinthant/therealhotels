import useMountLenis from "./hooks/useMountLenis"
import Navbar from "./layout/Navbar"
import HeroSection from "./sections/HeroSection"
import TextSection from "./sections/TextSection"

function App() {
  useMountLenis()

  return (
    <>
      <div className="relative h-auto w-screen bg-black">
        <Navbar />
        <HeroSection />
        <TextSection />
      </div>
    </>
  )
}

export default App
