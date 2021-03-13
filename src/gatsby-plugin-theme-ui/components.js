/* eslint react/prop-types: 0 */
import React from "react"
import { preToCodeBlock } from "mdx-utils"
import { Text } from "@theme-ui/components"
import Code from "../components/code"
import Title from "../components/title"
import Card from "../components/card"
import Button from "../components/Button"

const components = {
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
  Button: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  Card: ({ children, ...props }) => <Card {...props}>{children}</Card>,
  Title: ({ children, text, ...props }) => (
    <Title text={text} {...props}>
      {children}
    </Title>
  ),
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export default components
