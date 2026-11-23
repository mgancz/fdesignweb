import { Box, Flex, Image } from "@chakra-ui/react"
import { useRef } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const cncItems = [
  { src: "/zdjęcia/cnc/PXL_20260916_165620436.jpg", alt: "Frezowanie CNC 1" },
  { src: "/zdjęcia/cnc/PXL_20260916_165632949.jpg", alt: "Frezowanie CNC 2" },
  { src: "/zdjęcia/cnc/PXL_20260916_165955685.jpg", alt: "Frezowanie CNC 3" },
  { src: "/zdjęcia/cnc/PXL_20260916_170002195.jpg", alt: "Frezowanie CNC 4" },
  { src: "/zdjęcia/cnc/PXL_20260916_170007953.jpg", alt: "Frezowanie CNC 5" },
  { src: "/zdjęcia/cnc/PXL_20260916_170044420.jpg", alt: "Frezowanie CNC 6" },
  { src: "/zdjęcia/cnc/PXL_20260916_170145233.jpg", alt: "Frezowanie CNC 7" },
  { src: "/zdjęcia/cnc/PXL_20260916_170255699.jpg", alt: "Frezowanie CNC 8" },
  { src: "/zdjęcia/cnc/PXL_20260916_170332629.jpg", alt: "Frezowanie CNC 9" },
  { src: "/zdjęcia/cnc/PXL_20260916_170420529.jpg", alt: "Frezowanie CNC 10" },
  { src: "/zdjęcia/cnc/cnc.jpg", alt: "Frezowanie CNC 11" },
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const distance = direction === "left" ? -600 : 600
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <Box id="uslugi" className="sekcja" position="relative" overflow="hidden">
      <Box className="kontener" position="relative" zIndex="3">
        <Box mb={{ base: "8", md: "12" }} maxW="xl">
          <Box as="h2" className="naglowek-1 embossed-text" mb="4">
            Frezowanie CNC
          </Box>

          <Box className="tresc">
            Oferujemy profesjonalną obróbkę elementów drewnianych
            <br />
            i drewnopochodnych na maszynie CNC.
            <br />
            Precyzyjne frezowanie, grawerowanie i cięcie według indywidualnych projektów.
          </Box>
        </Box>

        <Box className="os-pozioma">
          <button
            type="button"
            aria-label="Przewiń w lewo"
            className="strzalka-osi lewo"
            onClick={() => scrollByAmount("left")}
          >
            <LuChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Przewiń w prawo"
            className="strzalka-osi prawo"
            onClick={() => scrollByAmount("right")}
          >
            <LuChevronRight size={24} />
          </button>

          <Box ref={scrollRef} className="os-przewijanie">
            <Flex gap={{ base: "4", md: "8" }} w="max-content" align="center">
              {cncItems.map((item, index) => (
                <Box
                  key={item.src + index}
                  w={{ base: "220px", sm: "240px", md: "260px" }}
                  h={{ base: "280px", sm: "300px", md: "320px" }}
                  className="karta-obiekt"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.6s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}