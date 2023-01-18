// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useQuery, apolloClient } from "@apollo/client"
import { unstable_getServerSession } from "next-auth"
import { GET_WEBSITE_KEYWORDS } from "../../graphql/queries"
import { authOptions } from "./auth/[...nextauth]"

const keywordPosition = async (req, res) => {
  // const { id, website, keyword } = req.params
  const session = await unstable_getServerSession(req, res, authOptions)
  const website = req.params.website
  const name = session.name

  console.log(req)

  res.json({ name: name, website: website, keyword: "test" })
}

export default keywordPosition



