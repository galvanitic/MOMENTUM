import '../styles/globals.css'
import "../styles/auth.css"
import "../styles/main.css"
import type { AppProps } from 'next/app'
import Layout from "../components/layout";

function MomentumApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname==='/login'){
    return <Component {...pageProps} />
  }else{
    return (
      <Layout title="Momentum">
        <Component {...pageProps} />
      </Layout>
    )
  }

}
export default MomentumApp
