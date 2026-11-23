import { Box, Flex, Grid, Input, Textarea } from "@chakra-ui/react"
import { LuMapPinned, LuMail, LuClock, LuPhoneCall } from "react-icons/lu"
import { useState } from "react"

const contactInfo = [
  {
    icon: LuMapPinned,
    label: "Adres",
    lines: ["ul. Szczecińska 22B", "Kobylanka", "woj. zachodniopomorskie"],
  },
  {
    icon: LuMail,
    label: "E-mail",
    lines: ["robert-ganczarski@wp.pl"],
  },
  {
    icon: LuClock,
    label: "Godziny pracy",
    lines: ["Pon – Pt: 7:00 – 15:00"],
  },
  {
    icon: LuPhoneCall,
    label: "Numer telefonu",
    lines: ["+48 602 383 282"],
  },
]

const FORMSPREE_URL = "https://formspree.io/f/moejgzea"

const fieldStyles = {
  bg: "#FFFFFF",
  color: "#000000",
  border: "none",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  _hover: {
    transform: "scale(1.015)",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
  },
  _focus: {
    transform: "scale(1.015)",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
    outline: "none",
    bg: "#FFFFFF",
    color: "#000000",
  },
  _placeholder: { color: "rgba(0, 0, 0, 0.55)" },
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: "", email: "", message: "", phone: "" })
      } else {
        alert("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.")
      }
    } catch {
      alert("Błąd połączenia z serwerem.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box id="kontakt" className="sekcja">
      <Box className="kontener">
        <Box as="h2" className="naglowek-1 embossed-text" mb={{ base: "8", md: "12" }}>
          Dane kontaktowe
        </Box>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.2fr" }}
          gap={{ base: "8", lg: "12" }}
          alignItems="start"
        >
          <Flex flexDir="column" gap="4">
            {contactInfo.map((item) => (
              <Flex key={item.label} gap="3.5" align="flex-start">
                <Box
                  p="2.5"
                  rounded="full"
                  flexShrink={0}
                  border="1px solid rgba(255, 255, 255, 0.28)"
                >
                  <item.icon size={18} />
                </Box>
                <Box>
                  <Box className="tresc-mala" mb="0.5">
                    {item.label}
                  </Box>
                  {item.lines.map((line) => (
                    <Box key={line} className="tresc">
                      {line}
                    </Box>
                  ))}
                </Box>
              </Flex>
            ))}

            <Box
              h={{ base: "44", md: "48" }}
              w="full"
              overflow="hidden"
              borderRadius="16px"
              border="1px solid rgba(255, 255, 255, 0.22)"
            >
              <iframe
                title="Mapa FormaDesign"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Forma+Design+Kobylanka&output=embed&z=15"
              />
            </Box>
          </Flex>

          <Box
            w="full"
            p={{ base: "5", md: "8" }}
            borderRadius="20px"
            border="none"
            css={{
              background:
                "linear-gradient(135deg, rgba(255, 99, 71, 0.58) 0%, rgba(255, 99, 71, 0.26) 45%, #140102 100%)",
            }}
          >
            {sent ? (
              <Flex
                align="center"
                justify="center"
                flexDir="column"
                h="full"
                textAlign="center"
                gap="3"
                py="8"
              >
                <Box
                  w="12"
                  h="12"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgba(255, 255, 255, 0.4)"
                  className="czcionka-1"
                >
                  ✓
                </Box>
                <Box className="czcionka-2">Wiadomość wysłana!</Box>
                <Box className="tresc">Dziękujemy za kontakt. Odezwiemy się wkrótce.</Box>
              </Flex>
            ) : (
              <Box as="form" onSubmit={handleSubmit}>
                <Flex flexDir="column" gap="3.5">
                  <Box>
                    <Box className="tresc-mala" mb="1">
                      Imię i nazwisko
                    </Box>
                    <Input
                      name="name"
                      placeholder="np. Jan Kowalski"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      borderRadius="9999px"
                      px="4"
                      size="sm"
                      {...fieldStyles}
                    />
                  </Box>
                  <Box>
                    <Box className="tresc-mala" mb="1">
                      Adres e-mail
                    </Box>
                    <Input
                      name="email"
                      type="email"
                      placeholder="jan@kowalski.pl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      borderRadius="9999px"
                      px="4"
                      size="sm"
                      {...fieldStyles}
                    />
                  </Box>
                  <Box>
                    <Box className="tresc-mala" mb="1">
                      Numer telefonu
                    </Box>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      borderRadius="9999px"
                      px="4"
                      size="sm"
                      {...fieldStyles}
                    />
                  </Box>
                  <Box>
                    <Box className="tresc-mala" mb="1">
                      Wiadomość
                    </Box>
                    <Textarea
                      name="message"
                      placeholder="Opisz swój pomysł lub zadaj pytanie..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      borderRadius="16px"
                      p="3"
                      resize="none"
                      {...fieldStyles}
                    />
                  </Box>
                  <button
                    type="submit"
                    className="przycisk-zalewany tresc"
                    style={{
                      width: "100%",
                      paddingTop: "14px",
                      paddingBottom: "14px",
                      marginTop: "4px",
                    }}
                  >
                    {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </button>
                </Flex>
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}