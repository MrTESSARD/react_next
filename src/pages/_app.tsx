import '@/styles/globals.css'
import "node_modules/bootstrap/dist/css/bootstrap.min.css"
import Container from '@/components/Container/Container'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />

    </Container>
  )
}
