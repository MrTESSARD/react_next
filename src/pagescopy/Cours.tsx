import React from 'react'


export default function Cours(props: any) {
    // console.log(props.results);
    const btc = props.results.bpi.USD.rate
  return (
    <div>Le BTC est à : {btc}</div>
  )
}

export async function getServerSideProps(context: any) {
    console.log(context);
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const results = await data.json()
    return{
        props:{
            results
        }
    }
}
// https://api.coindesk.com/v1/bpi/currentprice.json