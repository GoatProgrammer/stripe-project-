import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { gql, useQuery } from "@apollo/client"
// import { GET_USERS_WEBSITES } from '../../../graphql/queries';
import { GET_USERS_WEBSITES, GET_WEBSITE_KEYWORDS } from '../../../graphql/queries'
import Image from 'next/image';
import axios from 'axios'
import Websites from '../../websites'


const Dashboard = () => {
  const { data: session } = useSession();
  const [currentWeb, setCurrentWeb] = useState('test')
  const [currentWebId, setCurrentWebId] = useState('')
  const [showWebsites, setShowWebsites] = useState(0)
  const [showKeywords, setShowKeywords] = useState(0)
  const [keywordList, setKeywordList] = useState([])
  const [websiteList, setWebsiteList] = useState([])
  const [keywordTable, setKeywordTable] = useState([])

  const userid = session?.sub
  const webid = 1

  const { loading, error, data } = useQuery(GET_USERS_WEBSITES, { variables: { uid: userid } })
  const { loading: keywordLoading, error: keywordError, data: keywordData } = useQuery(GET_WEBSITE_KEYWORDS, { variables: { webid: currentWebId } })

  const websites = data?.getWebsites
  const keywords = keywordData?.getKeywords

  // populate websites 
  useEffect(() => {
    if (websites) {
      setWebsiteList(websites)
    }
  }, [websites])

  // populate keywords 
  useEffect(() => {
    if (keywords) {
      setKeywordList(keywords)
    }
  }, [keywords])

  // populate keyword table 
  useEffect(() => {
    // loop through each keyword 
    // get the keyword position  
    // populate the keywordTable state 
    keywordList.map((k) => {
      checkKeyword(k?.keyword)
    })
  }, [keywordList])


  const addWebsite = () => {
    // e.preventDefault()
    alert('ADD WEBSITE G!')
  }

  const handleShowKeywords = (web, id) => {
    setShowKeywords(1)
    setCurrentWeb(web)
    setCurrentWebId(id)
  }

  const checkKeyword = async (keyword) => {
    let position = 0

    const response = await axios.get(`http://localhost:3000/api/getKeyword/${currentWebId}`)
    // const name = response.data.name

    console.log(response)
    return name
  }

  return (
    <>
      <div><button onClick={(e) => addWebsite(e)}>Add Website</button></div>
      {showKeywords === 0 ? (
        <>
          <h2>Websites:</h2>
          <Websites />
        </>
      ) : (
        <>
          <h2>Keywords For {currentWeb}</h2>
          <button onClick={() => setShowKeywords(0)}>X</button>
          {keywords && (
            keywordList.map((k) => (
              <div key={k?.id}><b>{k?.keyword}</b></div>
            ))
          )}
        </>
      )}
    </>
  )
}

export default Dashboard