import NavBar from '../components/navbar/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <NavBar username="fetcher@fetch.com"/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
