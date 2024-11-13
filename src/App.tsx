import useMountLenis from "./hooks/useMountLenis"
import Navbar from "./layout/Navbar"
import HeroSection from "./sections/HeroSection"

function App() {
  useMountLenis()

  return (
    <>
      <div className="relative h-auto w-screen bg-black">
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}

export default App
