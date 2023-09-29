import '@/styles/globals.css'
import Footer from '@/components/Footer'

import { Montserrat, Roboto } from '@next/font/google';

const montserrat = Montserrat({
  subsets:["latin"],
  weight: ["300","400","500","600","700","800","900"],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
