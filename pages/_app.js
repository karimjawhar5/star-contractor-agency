import Footer from '@/components/new/footer/Footer'
import Header from '@/components/new/header/Header'
import WhiteHeader from '@/components/new/header/WhiteHeader'
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