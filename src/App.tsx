import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Meble from "./components/Meble"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <Box
      className="app-container"
      minH="100vh"
      w="100%"
      overflowX="hidden"
      position="relative"
      bg="#140102"
    >
      <Navbar />
      <Hero />
      <Gallery />
      <Meble />
      <Services />
      <About />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App