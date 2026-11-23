import { Box, Flex, VStack } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const heroFadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

const lines = [
  "Projektowanie i aranżacja wnętrz",
  "Meble na wymiar",
  "Elementy CNC",
  "+30 lat doświadczenia",
]

export default function Hero() {
  return (
    <Box
      id="hero"
      className="sekcja sekcja-hero"
      position="relative"
      overflow="hidden"
      minH={{ base: "86vh", md: "94vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className="kontener"
        position="relative"
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          w="full"
          maxW="520px"
          minW="0"
          px={{ base: "3", md: "4" }}
          py={{ base: "3", md: "4" }}
          css={{ animation: `${heroFadeUp} 0.7s ease-out both` }}
        >
          <Box
            as="h1"
            fontSize={{ base: "1.85rem", md: "2.4rem" }}
            fontWeight="600"
            lineHeight="1.05"
            letterSpacing="0.04em"
            textTransform="uppercase"
            mb={{ base: "1.5", md: "2" }}
          >
            FORMA DESIGN
          </Box>

          <Box
            fontSize={{ base: "0.8rem", md: "0.9rem" }}
            fontWeight="500"
            letterSpacing="0.08em"
            textTransform="uppercase"
            opacity={0.85}
            mb={{ base: "3.5", md: "4.5" }}
          >
            KOBYLANKA - ZACHODNIOPOMORSKIE
          </Box>

          <VStack align="center" gap={{ base: "1.5", md: "2" }} mb={{ base: "5", md: "6" }}>
            {lines.map((line) => (
              <Box
                key={line}
                fontSize={{ base: "1rem", md: "1.2rem" }}
                fontWeight="500"
                lineHeight="1.35"
                textTransform="uppercase"
              >
                {line}
              </Box>
            ))}
          </VStack>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="3"
            w="full"
            maxW="440px"
            minW="0"
            justify="center"
            css={{ animation: `${heroFadeUp} 0.8s ease-out 0.15s both` }}
          >
            <Box
              as="button"
              className="przycisk-zalewany"
              h={{ base: "48px", md: "52px" }}
              flex="1"
              minW="0"
              px={{ base: "4", sm: "5" }}
              fontSize="0.9rem"
              whiteSpace="nowrap"
              onClick={() =>
                document.querySelector("#galeria")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              NASZE REALIZACJE
            </Box>

            <Box
              as="button"
              className="przycisk-zalewany"
              h={{ base: "48px", md: "52px" }}
              flex="1"
              minW="0"
              px={{ base: "4", sm: "5" }}
              fontSize="0.9rem"
              whiteSpace="nowrap"
              onClick={() =>
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              SKONTAKTUJ SIĘ
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}