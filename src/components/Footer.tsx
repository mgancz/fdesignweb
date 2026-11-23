import { Box, Flex, Image } from "@chakra-ui/react"
import { LuFacebook, LuInstagram } from "react-icons/lu"

export default function Footer() {
  return (
    <Box
      as="footer"
      className="sekcja"
      py={{ base: "6", md: "8" }}
      borderTop="1px solid rgba(255, 255, 255, 0.14)"
    >
      <Box className="kontener">
        <Flex
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "4", md: "6" }}
        >
          <Box maxW="md">
            <Image
              src="/zdjęcia/LOGO.png"
              alt="Forma Design"
              w={{ base: "170px", sm: "195px", md: "210px" }}
              mb="2"
            />
            <Box className="tresc" lineHeight="1.45">
              Projektowanie i aranżacja wnętrz
              <br />
              Meble na wymiar
              <br />
              Obróbka CNC
            </Box>
          </Box>

          <Flex flexDir="column" align={{ base: "flex-start", md: "center" }}>
            <Box className="tresc" mb="2.5">
              Media społecznościowe
            </Box>
            <Flex gap="3" align="center">
              <a
                href="https://www.facebook.com/formadesignszczecin/"
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  p="2.5"
                  className="przycisk-zalewany"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <LuFacebook size={22} />
                </Box>
              </a>

              <a
                href="https://www.instagram.com/_formadesign/"
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  p="2.5"
                  className="przycisk-zalewany"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <LuInstagram size={22} />
                </Box>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}