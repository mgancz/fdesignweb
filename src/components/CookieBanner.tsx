"use client"

import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const STORAGE_KEY = "fd_cookie_consent"

export type CookieConsentValue = "all" | "essential"

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null
  const val = window.localStorage.getItem(STORAGE_KEY)
  return val === "all" || val === "essential" ? val : null
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = getCookieConsent()
    if (!saved) {
      setVisible(true)
    }
  }, [])

  const handleChoice = (choice: CookieConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, choice)
    window.dispatchEvent(new CustomEvent("fd-cookie-consent-change", { detail: choice }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="overlay"
      p={{ base: "3", md: "4" }}
    >
      <Box
        className="kontener"
        maxW="1200px"
        bg="rgba(20, 1, 2, 0.94)"
        backdropFilter="blur(14px)"
        border="1px solid rgba(255, 255, 255, 0.22)"
        borderRadius="20px"
        py={{ base: "4", md: "4" }}
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.55)"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "stretch", lg: "center" }}
          justify="space-between"
          gap="4"
        >
          <Box maxW="760px">
            <Box className="czcionka-2" mb="1">
              Pliki cookies
            </Box>
            <Box className="tresc-mala" opacity={0.85} lineHeight="1.6">
              Ta strona korzysta z plików cookies, aby zapewnić prawidłowe działanie serwisu,
              poprawić komfort przeglądania oraz dopasować treści. Korzystając ze strony,
              wyrażasz zgodę na ich użycie zgodnie z ustawieniami przeglądarki.
            </Box>
          </Box>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="3"
            flexShrink={0}
            align={{ base: "stretch", sm: "center" }}
          >
            <button
              type="button"
              className="przycisk-zalewany tresc-mala"
              style={{ padding: "10px 20px", whiteSpace: "nowrap" }}
              onClick={() => handleChoice("essential")}
            >
              Tylko niezbędne
            </button>

            <button
              type="button"
              className="przycisk-zalewany aktywny tresc-mala"
              style={{ padding: "10px 20px", whiteSpace: "nowrap" }}
              onClick={() => handleChoice("all")}
            >
              Akceptuję wszystkie
            </button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}