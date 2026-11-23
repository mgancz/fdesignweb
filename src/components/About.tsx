import { Box, Flex, Grid, Image } from "@chakra-ui/react"

const stats = [
  { value: "CNC", label: "Precyzyjna obróbka elementów" },
  { value: "NA WYMIAR", label: "Meble zaprojektowane dla twoich potrzeb" },
  { value: "3D", label: "Wizualizacje przed realizacją" },
  { value: "30+", label: "Lat na rynku" },
]

export default function About() {
  return (
    <Box id="o-firmie" className="sekcja">
      <Box className="kontener">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "stretch", lg: "center" }}
          justify="space-between"
          gap={{ base: "6", lg: "8" }}
        >
          <Box flex="1" maxW={{ base: "full", lg: "2xl" }}>
            <Box as="h2" className="naglowek-1 embossed-text" mb={{ base: "6", md: "8" }}>
              O firmie
            </Box>

            <Box as="p" className="tresc" mb="4">
              Forma Design to pracownia projektowania i aranżacji wnętrz z siedzibą w Kobylance (woj.
              zachodniopomorskie). Specjalizujemy się w tworzeniu mebli na wymiar oraz kompleksowym
              projektowaniu przestrzeni, zarówno mieszkalnych, jak i komercyjnych.
            </Box>

            <Box as="p" className="tresc" mb="8">
              Dysponujemy nowoczesnym parkiem maszynowym z frezarką CNC, co umożliwia realizację
              zarówno prostych, jak i bardzo precyzyjnych koncepcji według indywidualnych projektów.
              Każde zlecenie jest traktowane indywidualnie.
            </Box>

            <Grid
              templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={{ base: "4", md: "6" }}
            >
              {stats.map((stat) => (
                <Box key={stat.label} borderLeft="2px solid tomato" pl="3.5">
                  <Box className="naglowek-2" mb="1">
                    {stat.value}
                  </Box>
                  <Box className="tresc-mala">{stat.label}</Box>
                </Box>
              ))}
            </Grid>
          </Box>

          <Box
            flex={{ base: "none", lg: "0 0 560px" }}
            w={{ base: "full", lg: "560px" }}
            borderRadius="20px"
            overflow="hidden"
          >
            <Image
              src="/zdjęcia/firma2.jpg"
              alt="Forma Design — pracownia"
              w="full"
              h={{ base: "340px", sm: "420px", lg: "520px" }}
              objectFit="cover"
              display="block"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}