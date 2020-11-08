import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </content>
    </AuthProvider>
  )
}

export default MyApp
