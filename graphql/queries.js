import { gql } from "@apollo/client"

export const GET_USERS_WEBSITES = gql`
 query MyQuery($uid: ID!) {
   getWebsites(uid: $uid) {
    id,
    created_at, 
    uid, 
    url
   }
 }
`

export const GET_WEBSITE_KEYWORDS = gql`
  query MyQuery($webid: ID!) {
    getKeywords(webid: $webid) {
      id, 
      keyword, 
      webid, 
      pos, 
      last, 
      created_at
    }
  }
`
// export const GET_WEBSITES_KEYWORDS = gql`


// `