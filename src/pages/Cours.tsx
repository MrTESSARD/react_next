import React from 'react';

interface Results {
  bpi: {
    USD: {
      rate: string;
    };
  };
}

interface CoursProps {
  results: Results;
}

export default function Cours(props: CoursProps) {
  const btc = props.results.bpi.USD.rate;
  return (
    <div>Le BTC est à : {btc}</div>
  );
}

export async function getServerSideProps(context: any) {
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results: Results = await data.json();
  return {
    props: {
      results
    }
  };
}

// https://api.coindesk.com/v1/bpi/currentprice.json