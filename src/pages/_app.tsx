import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '@/context'
import AppWhrapper from '@/components/Layout/app-wrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppWhrapper>
      <Component {...pageProps} />
      </AppWhrapper>
    </AppProvider>
  )
}
