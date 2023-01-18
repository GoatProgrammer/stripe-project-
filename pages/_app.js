import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>

  )
}

export default MyApp