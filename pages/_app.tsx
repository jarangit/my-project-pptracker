import Layout from '@/components/layouts/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import AppState from '@/stores/context/app-state'
import { Provider } from 'react-redux'
import { store } from '@/app-state/redux/store'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppState>
    </Provider>
  )
}