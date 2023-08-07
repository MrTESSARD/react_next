import React from 'react'

export default function liste(props) {
console.log(props)
  return (
    <div>Les</div>
  )
}


export async function getStaticProps(context) {
  const slug = context.params.liste
  const data = await import("../../data/listes.json");

  const listeEnCours = data.englishList.find(list=>list.name===slug)

  return {
    props: {
      listeEnCours:listeEnCours.data,
    },
  };
}


export async function getStaticPaths() {
  const data = await import("../../data/listes.json");

  return {
    paths:[
      {params:{liste:"words"}}
    ],
    fallback:false
  };
}