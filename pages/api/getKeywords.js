import { apolloClient, useQuery } from "@apollo/client"
import { unstable_getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { GET_WEBSITE_KEYWORDS } from "../../graphql/queries"
import { authOptions } from "./auth/[...nextauth]"

const getKeywords = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  // const { loading, error, data } = useQuery(GET_WEBSITE_KEYWORDS, { variables: { webid: 1 } })
  // const query = useQuery()
  // const keywords = data?.getKeywords
  // console.log(keywords)



  res.json("HEY!")

}



export default getKeywords