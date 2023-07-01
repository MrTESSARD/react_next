import { useRouter } from 'next/router'
import React from 'react'

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
    <h1>{router.query.slug}</h1>
    <div>[slug]</div>
    <div>10 plats savoureux</div>
    <button onClick={pushFunction}>Push to Home</button>
    </>
  )
}
