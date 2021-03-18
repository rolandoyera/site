/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "./header-external-links"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
<header sx={{ mb: [5, 6], height: 70, pt: `.5rem`, backgroundColor:`navBar`, width: `100%` }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, maxWidth: `1024px`, mx: `auto` }}>
        <HeaderTitle />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /><Navigation nav={nav} />
      </Flex>
    </header>
  )
}

export default Header
