"use client"

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Collapsible,
  Image,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { LuMenu, LuX } from "react-icons/lu"

const navLinks = [
  { label: "Strona główna", href: "#hero" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Galeria", href: "#galeria" },
  { label: "O firmie", href: "#o-firmie" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      transition="background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease"
      bg={scrolled || open ? "rgba(20, 1, 2, 0.55)" : "transparent"}
      backdropFilter={scrolled || open ? "blur(16px) saturate(140%)" : "none"}
      css={
        scrolled || open
          ? { WebkitBackdropFilter: "blur(16px) saturate(140%)" }
          : undefined
      }
      borderBottom="none"
      boxShadow={scrolled ? "0 8px 24px rgba(0, 0, 0, 0.25)" : "none"}
    >
      <Flex
        className="kontener"
        py={{ base: "4", md: "5" }}
        align="center"
        justify="space-between"
        gap="4"
        minW="0"
      >
        <Box
          position="relative"
          h="40px"
          w={{ base: "120px", md: "150px", lg: "180px" }}
          flexShrink={0}
          cursor="pointer"
          onClick={() => handleNav("#hero")}
          opacity={scrolled ? 1 : 0}
          visibility={scrolled ? "visible" : "hidden"}
          transition="opacity 0.3s ease, visibility 0.3s ease"
        >
          <Image
            src="/zdjęcia/LOGO.png"
            alt="Forma Design"
            h={{ base: "120px", md: "150px", lg: "180px" }}
            objectFit="contain"
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
          />
        </Box>

        <HStack gap={{ md: "4", lg: "7" }} hideBelow="md" flexShrink={0}>
          {navLinks.map((link) => (
            <Box
              as="button"
              key={link.href}
              className="tresc"
              fontSize={{ md: "0.875rem", lg: "1rem" }}
              fontWeight="500"
              letterSpacing="0.02em"
              whiteSpace="nowrap"
              transition="color 0.2s ease, transform 0.2s ease"
              _hover={{ color: "tomato", transform: "scale(1.04)" }}
              cursor="pointer"
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </Box>
          ))}
        </HStack>

        <IconButton
          hideFrom="md"
          variant="ghost"
          color="white"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <LuX /> : <LuMenu />}
        </IconButton>
      </Flex>

      <Collapsible.Root open={open}>
        <Collapsible.Content>
          <Box
            bg="rgba(20, 1, 2, 0.75)"
            backdropFilter="blur(16px)"
            borderTop="none"
            pb="4"
          >
            <Box className="kontener">
              {navLinks.map((link) => (
                <Box
                  key={link.href}
                  py="3"
                  cursor="pointer"
                  onClick={() => handleNav(link.href)}
                >
                  <Box className="tresc" fontSize="1rem" fontWeight="500">
                    {link.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  )
}