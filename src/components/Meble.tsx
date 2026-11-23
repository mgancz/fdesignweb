import { Box, Flex, Image } from "@chakra-ui/react"
import { useRef } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const furnitureItems = [
  { src: "/zdjęcia/meble/loft1.JPG", alt: "Styl loftowy 1" },
  { src: "/zdjęcia/meble/loft2.JPG", alt: "Styl loftowy 2" },
  { src: "/zdjęcia/meble/loft3.JPG", alt: "Styl loftowy 3" },
  { src: "/zdjęcia/meble/loft4.JPG", alt: "Styl loftowy 4" },
  { src: "/zdjęcia/meble/loft5.JPG", alt: "Styl loftowy 5" },
  { src: "/zdjęcia/meble/loft6.JPG", alt: "Styl loftowy 6" },
  { src: "/zdjęcia/meble/loft7.JPG", alt: "Styl loftowy 7" },
  { src: "/zdjęcia/meble/loft8.JPG", alt: "Styl loftowy 8" },
  { src: "/zdjęcia/meble/loza1.jpg", alt: "Loża 1" },
  { src: "/zdjęcia/meble/loza2.jpg", alt: "Loża 2" },
  { src: "/zdjęcia/meble/loza3.jpg", alt: "Loża 3" },
  { src: "/zdjęcia/meble/loza4.jpg", alt: "Loża 4" },
  { src: "/zdjęcia/meble/loza5.jpg", alt: "Loża 5" },
  { src: "/zdjęcia/meble/meble2.jpeg", alt: "Garderoba" },
  { src: "/zdjęcia/meble/meble3.JPG", alt: "Stół z drewna i stali" },
  { src: "/zdjęcia/meble/meble4.JPG", alt: "Szafy wnękowe" },
  { src: "/zdjęcia/meble/PXL_20260218_132027912.MP.jpg", alt: "Zabudowa 1" },
  { src: "/zdjęcia/meble/schody.jpg", alt: "Schody na wymiar" },
  { src: "/zdjęcia/meble/PXL_20260304_111904012.jpg", alt: "Zabudowa 2" },
  { src: "/zdjęcia/meble/PXL_20260717_060329491.jpg", alt: "Zabudowa 3" },
  { src: "/zdjęcia/meble/PXL_20260226_120146397.MP.jpg", alt: "Zabudowa 4" },
  { src: "/zdjęcia/meble/PXL_20260224_142117936.MP.jpg", alt: "Zabudowa 5" },
  { src: "/zdjęcia/meble/PXL_20260224_141700032.jpg", alt: "Zabudowa 6" },
  { src: "/zdjęcia/meble/PXL_20260508_043813285.jpg", alt: "Zabudowa 7" },
  { src: "/zdjęcia/meble/PXL_20260909_111004432.jpg", alt: "Zabudowa 8" },
]

export default function Meble() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const distance = direction === "left" ? -600 : 600
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <Box id="meble" className="sekcja">
      <Box className="kontener">
        <Box as="h2" className="naglowek-1 embossed-text" mb="4">
          Meble na wymiar
        </Box>

        <Box as="p" className="tresc" mb={{ base: "8", md: "12" }}>
          Meble na wymiar dla osób, które nie szukają kompleksowej aranżacji całego lokalu, 
          <br />
          tylko konkretnego mebla lub zabudowy — także do domu i codziennego użytku.
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
              {furnitureItems.map((item, index) => (
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