import Layout from '@/components/layouts/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}