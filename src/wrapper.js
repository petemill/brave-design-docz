import React from 'react'
import { ThemeProvider } from 'brave-ui/theme'
import theme from 'brave-ui/theme/brave-default'


export default function ({ children }) {
  console.error('hit', theme)
  return (
    <ThemeProvider theme={theme}><div className="petemill">{children}</div></ThemeProvider>
  )
}