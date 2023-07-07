import { useRouter } from 'next/router'
import React from 'react'
import Head from "next/head";


export default function Article() {
  const router = useRouter()
  console.log(router)
  console.log(router.route)
  console.log(router.asPath)
  console.log(router.query)
  const pushFunction = ()=>{
router.push('/')  }
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{router.query.slug}</title>
      </Head>
    
    <h1>{router.query.slug}</h1>
    <div>[slug]</div>
    <div>10 plats savoureux</div>
    <button onClick={pushFunction}>Push to Home</button>
    </>
  )
}
