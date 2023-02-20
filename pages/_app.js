import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ ChainId.Goerli }
      chainRpc={{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/333d22ce307148eeac2420c32a12c4e2'
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
  
}

export default MyApp
