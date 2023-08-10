import React from 'react'

export default function contact(props:any) {
  console.log(props.data.data[0]);
  return (
    <>
    <h1>{props.data.data[0].avatar}</h1>
    
    </>

  )
}

export async function getStaticProps() {
  const quote = await fetch("https://reqres.in/api/users?page=1")
  // console.log(quote);
  
  const data =  await quote.json()
  return{
    props:{
      data
    },
    revalidate:20
  }
  
}
//https://goquotes-api.herokuapp.com/api/v1/random?count=1