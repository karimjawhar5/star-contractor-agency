import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import WhiteHeader from '@/components/header/WhiteHeader'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const showWhiteHeader = Component.displayWhiteHeader;

  return (
    <main >
      {showWhiteHeader ? <WhiteHeader /> : <Header />}
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}