import Layout from '@/components/layouts/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import AppState from '@/stores/context/app-state'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppState>
  )
}