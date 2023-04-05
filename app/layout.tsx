'use client'
import AppContextProvider from '@/components/AppContext';
import { ThemeProvider } from 'theme-ui'
import theme from '@/theme'

import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <AppContextProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
