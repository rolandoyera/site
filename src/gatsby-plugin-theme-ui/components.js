/* eslint react/prop-types: 0 */
import React from "react"
import { preToCodeBlock } from "mdx-utils"
import { Text } from "@theme-ui/components"
import Code from "../components/code"
import Title from "../components/title"
import Card from "../components/card"
import Button from "../components/Button"
import Table from "../components/Table/Table"
import Thead from "../components/Table/Thead"
import Tbody from "../components/Table/Tbody"
import Tr from "../components/Table/Tr"
import Th from "../components/Table/Th"
import Td from "../components/Table/Td"

const components = {
  Table: ({ children, ...props }) => <Table {...props}>{children}</Table>,
  Thead: ({ children, ...props }) => <Thead {...props}>{children}</Thead>,
  Tbody: ({ children, ...props }) => <Tbody {...props}>{children}</Tbody>,
  Tr: ({ children, ...props }) => <Tr {...props}>{children}</Tr>,
  Th: ({ children, ...props }) => <Th {...props}>{children}</Th>,
  Td: ({ children, ...props }) => <Td {...props}>{children}</Td>,
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
