import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:5001/api/historical-cow",
  headers: {
    Authorization: `Apikey puertoberrio::stepzen.net+1000::f914bbb16a4fb59399c5293176e9b9c11e2463ed80e09f7c14931bc14ac43339`
  },
  cache: new InMemoryCache()
})

export default client

