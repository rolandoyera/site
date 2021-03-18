import { tint } from "@theme-ui/color"

const code = {
  "[data-name='live-editor']": {
    fontSize: 1,
    "textarea, pre": {
      padding: (t: any) => `${t.space[3]} !important`,
    },
  },
  "[data-name='live-preview']": {
    padding: (t: any) => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: tint(`primary`, 0.7),
  },
  ".prism-code": {
    fontSize: [1, 1, 2],
    padding: `1rem 1rem 1rem 1rem`,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3,
      },
    },
  },
  ".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']": {
    ".prism-code": {
      pt: `1rem`,
    },
  },
  ".token": {
    display: `inline-block`,
  },
  "p > code, li > code": {
    bg: `secondaryBg`,
    color: `#d63384`,
    px: 2,
    paddingTop:`.1rem`,
    paddingBottom:`.1rem`,
    borderRadius: `0.25rem`,
    fontFamily: "Fira Code",
    fontSize: `0.95rem`,
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    bg: `rgb(1, 22, 39)`,
    borderRadius: `5px`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`,
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`,
    },
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`,
  },

  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`,
  },
  ".code-title": {
    backgroundColor: tint(`primary`, 0.7),
    color: `black`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `monospace`,
    mx: [0, 0, 0, -3],
  },
  "[data-name='live-preview'], [data-name='live-editor']": {
    mx: [0, 0, 0, -3],
    fontSize: [1, 1, 2],
  },
  ".token-line": {
    pr: 3,
  },
  ".highlight-line": {
    backgroundColor: `rgb(2, 55, 81)`,
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`,
    },
  },
  ".react-live-wrapper": {
    position: `relative`,
  },
  ".react-live-wrapper .code-copy-button": {
    right: [0, 0, 0, -3],

  },
}

export default code
