import { Box, Flex, Image } from "@chakra-ui/react"
import { useMemo, useRef, useState } from "react"
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu"

interface GalleryItem {
  src: string
  alt: string
  category: string
  objectPosition?: string
}

const galleryItems: GalleryItem[] = [
  // LOŻE
  { src: "/zdjęcia/loże/DSC_1362.JPG", alt: "Loża z podświetleniem LED", category: "LOŻE" },
  { src: "/zdjęcia/loże/s5.jpg", alt: "Loża premium", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_0586.JPG", alt: "Loża narożna", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_2137.JPG", alt: "Jasna loża łukowa", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_6198.JPG", alt: "Zabudowa lożowa z drewnem", category: "LOŻE" },
  { src: "/zdjęcia/loże/37.jpg", alt: "Loża tapicerowana", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_3691.JPG", alt: "Loża z niebieskim oświetleniem LED", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_0575.JPG", alt: "Loża skórzana pikowana", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_3860.JPG", alt: "Loże w strefie klubowej", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_0607.JPG", alt: "Długa loża restauracyjna", category: "LOŻE" },
  { src: "/zdjęcia/loże/DSC_1832.JPG", alt: "Loże z ciemnymi stolikami", category: "LOŻE" },

  // RESTAURACJE/PUBY (public/zdjęcia/restpub)
  { src: "/zdjęcia/restpub/1.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/2.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/4.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/5.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/6.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/7.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/8.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/9.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/00.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/01.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/02.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/03.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/04.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/05.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/06.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/07.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/08.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/09.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/10.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/_MG_1676.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/_MG_1681.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/3.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/bar1.jpg", alt: "Bar", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/bar2.jpg", alt: "Zabudowa do restauracji", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/d3.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/dolce9.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/11.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_0028.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_0041.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_0995.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_1022.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_1107.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_1182.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_1192.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_1290.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_2056.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_2098.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_3024.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_3043.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/DSC_3552.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/12.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/13.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/14.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/PXL_20260213_134234749.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/PXL_20260213_134539201.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/PXL_20260415_094517695.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/PXL_20260415_094546992.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/r1.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/r8.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/r20.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/rest1.jpg", alt: "Strefa gastronomiczna", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/rest2.jpg", alt: "Zabudowa do restauracji", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/rest3.jpg", alt: "Strefa gastronomiczna", category: "RESTAURACJE/PUBY", objectPosition: "bottom" },
  { src: "/zdjęcia/restpub/S3500215.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/S3500220.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/S3500232.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/15.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/tr9.jpg", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/16.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },
  { src: "/zdjęcia/restpub/17.JPG", alt: "Restauracja / pub", category: "RESTAURACJE/PUBY" },

  // ROZWIĄZANIA DLA TWOJEJ FIRMY (public/zdjęcia/rozw)
  { src: "/zdjęcia/rozw/rozw3.jpg", alt: "Aranżacja gabinetu", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/aranzacja salonów jubilerskich (9).JPG", alt: "Aranżacja salonów jubilerskich", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/PXL_20260827_114500832.MP.jpg", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/rozw1.jpg", alt: "Zabudowa recepcji", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY", objectPosition: "bottom" },
  { src: "/zdjęcia/rozw/DSC_1800.JPG", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/PXL_20260316_111429751.jpg", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/lof.JPG", alt: "Loft", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/rozw4.jpg", alt: "Projekty na zamówienie", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/PXL_20261106_143952946.MP.jpg", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/aranzacja salonów jubilerskich (17).JPG", alt: "Aranżacja salonów jubilerskich", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/DSC_1795.JPG", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/rozw2.jpg", alt: "Zabudowa meblowa", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/PXL_20260914_135529769.jpg", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },
  { src: "/zdjęcia/rozw/DSC_0086.JPG", alt: "Rozwiązanie firmowe", category: "ROZWIĄZANIA DLA TWOJEJ FIRMY" },

  // VINTAGE (public/zdjęcia/vintage)
  { src: "/zdjęcia/vintage/1.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/2.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/3.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/4.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/5.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/6.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/7.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/8.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/9.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/0.JPG", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/10.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/DSC_0026.JPG", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/DSC_0117.JPG", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/DSC_0743.JPG", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/13.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/12.jpg", alt: "Vintage", category: "VINTAGE" },
  { src: "/zdjęcia/vintage/11.jpg", alt: "Vintage", category: "VINTAGE" },

  // BARY (public/zdjęcia/bary) - <= 2015 włącznie (.JPG), po 2015 (.jpg)
  { src: "/zdjęcia/bary/PXL_20260610_071010070.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/Widok_2.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/20200113_114845.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/20191220_193757.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/20191129_101830.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/20191129_101114.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/S3501193.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/1.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/2.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/3.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/4.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_0341.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_0336.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/_MG_1692.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/14.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_2173.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_1818.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_1808.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/6.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/5.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/7.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_2023.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_1069.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/DSC_0625.JPG", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/bin4.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/8.jpg", alt: "Bar", category: "BARY" },
  { src: "/zdjęcia/bary/caf2.jpg", alt: "Bar", category: "BARY" },

  // KLUBY (public/zdjęcia/k1)
  { src: "/zdjęcia/k1/1.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/2.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/3.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/5.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_0115.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_0274.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_0328.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_0332.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_0735.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_0744.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_1289.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_3586.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_3596.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_3828.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_3864.JPG", alt: "Klub", category: "KLUBY" },
  { src: "/zdjęcia/k1/DSC_3940.JPG", alt: "Klub", category: "KLUBY" },

  // KAWIARNIE (public/zdjęcia/kaw) - <= 2016 włącznie (.JPG), po 2016 (.jpg)
  { src: "/zdjęcia/kaw/1.JPG", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/2.JPG", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/3.JPG", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/20191129_101106.jpg", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/20200113_114902.jpg", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/4.JPG", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/caf4.jpg", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/5.jpg", alt: "Kawiarnia", category: "KAWIARNIE" },
  { src: "/zdjęcia/kaw/S3501192.JPG", alt: "Kawiarnia", category: "KAWIARNIE" },

  // ZABUDOWY KUCHENNE (public/zdjęcia/kuchnie)
  { src: "/zdjęcia/kuchnie/PXL_20260724_072225654.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260918_095709688.MP.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260615_114313061.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260730_075151807.MP.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260724_072211480.MP.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260918_095717956.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260615_114253056.MP.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
  { src: "/zdjęcia/kuchnie/PXL_20260730_064125669.MP.jpg", alt: "Zabudowa kuchenna", category: "ZABUDOWY KUCHENNE" },
]

const categories = [
  "RESTAURACJE/PUBY",
  "ROZWIĄZANIA DLA TWOJEJ FIRMY",
  "VINTAGE",
  "BARY",
  "KLUBY",
  "KAWIARNIE",
  "LOŻE",
  "ZABUDOWY KUCHENNE",
]

export default function Gallery() {
  const [active, setActive] = useState(categories[0])
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const filtered = useMemo(() => {
    return galleryItems.filter((item) => item.category.toUpperCase() === active)
  }, [active])

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const distance = direction === "left" ? -600 : 600
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <>
      <Box id="galeria" className="sekcja">
        <Box className="kontener">
          <Flex
            flexDir="column"
            align="flex-start"
            mb={{ base: "8", md: "12" }}
            gap="5"
          >
            <Flex
              w="full"
              align={{ base: "flex-start", lg: "center" }}
              justify="space-between"
              flexDir={{ base: "column", lg: "row" }}
              gap="6"
            >
              <Box as="h2" className="naglowek-1 embossed-text" flexShrink={0}>
                Galeria realizacji
              </Box>

              <Flex gap="2.5" flexWrap="wrap" maxW={{ base: "full", lg: "62%" }}>
                {categories.map((cat) => {
                  const isActive = active === cat
                  return (
                    <Box
                      as="button"
                      key={cat}
                      px="4"
                      py="2.5"
                      className={`przycisk-zalewany tresc-mala ${isActive ? "aktywny" : ""}`}
                      onClick={() => {
                        setActive(cat)
                        if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 })
                      }}
                    >
                      {cat}
                    </Box>
                  )
                })}
              </Flex>
            </Flex>

            <Box as="p" className="tresc">
              Przegląd zrealizowanych zabudów i aranżacji wnętrz komercyjnych oraz indywidualnych 
              <br />
              przełączaj kategorie, aby zobaczyć wybrane realizacje.
            </Box>
          </Flex>

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
                {filtered.length > 0 ? (
                  filtered.map((item, index) => (
                    <Box
                      key={item.src + index}
                      w={{ base: "220px", sm: "240px", md: "260px" }}
                      h={{ base: "280px", sm: "300px", md: "320px" }}
                      className="karta-obiekt"
                      cursor="pointer"
                      overflow="hidden"
                      onClick={() => setSelectedImage(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        w="full"
                        h="full"
                        objectFit="cover"
                        objectPosition={item.objectPosition || "center"}
                        transition="transform 0.6s ease"
                        _hover={{ transform: "scale(1.05)" }}
                      />
                    </Box>
                  ))
                ) : (
                  <Box py="12" px="6" className="tresc">
                    Brak realizacji w tej kategorii w tym momencie.
                  </Box>
                )}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>

      {selectedImage && (
        <Box
          position="fixed"
          inset="0"
          bg="rgba(20, 1, 2, 0.92)"
          zIndex="1000"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: "4", md: "8" }}
          onClick={() => setSelectedImage(null)}
        >
          <Box
            position="relative"
            w="fit-content"
            maxW="90vw"
            maxH="88vh"
            bg="#140102"
            borderRadius="20px"
            p={{ base: "3", md: "5" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Zamknij"
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                zIndex: 2,
                width: "38px",
                height: "38px",
                borderRadius: "9999px",
                backgroundColor: "rgba(20, 1, 2, 0.82)",
                color: "#ffffff",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <LuX size={20} />
            </button>

            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              maxW="84vw"
              maxH="80vh"
              w="auto"
              h="auto"
              objectFit="contain"
              borderRadius="14px"
            />
          </Box>
        </Box>
      )}
    </>
  )
}