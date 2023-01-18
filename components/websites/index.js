import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { GET_USERS_WEBSITES } from '../../graphql/queries'

const Websites = () => {
  const { data: session } = useSession()
  const [websiteList, setWebsiteList] = useState([])
  const userid = session?.uid

  const { loading, error, data } = useQuery(GET_USERS_WEBSITES, { variables: { uid: userid } })
  const websites = data?.getWebsites

  useEffect(() => {
    if (websites) {
      setWebsiteList(websites)
    }
  }, [websites])

  return (
    <div>
      <div>test</div>
      {websites && (
        websiteList.map((w) => (
          <div key={w?.id} key={w?.id}>{w?.url}</div>
        ))
      )}
    </div>
  )
}

export default Websites