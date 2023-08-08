import React from 'react'
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/router';



export default function liste(props: { listeEnCours: any[]; }) {
  const router = useRouter()?


console.log(props)
type Item = {
  name: string;
};

type Props = {
  array: Item[];
};
  return (
    <div className="container">
      <h1 className={"my-4"}>{router.query.liste.charAt(0).toUpperCase()+router.query.liste?.slice(1)}</h1>
      <table className={styles.tableau}>
          <tbody>
            {props.listeEnCours.map((el) => (
              <tr key={el.en}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  )
}


export async function getStaticProps(context: { params: { liste: any; }; }) {
  const slug = context.params.liste
  const data = await import("../../data/listes.json");

  const listeEnCours = data.englishList.find(list=>list.name===slug)

  return {
    props: {
      listeEnCours:listeEnCours?.data,
    },
  };
}


export async function getStaticPaths() {
  const data = await import("../../data/listes.json");
  const paths = data.englishList.map(item=>({
    params:{liste:item.name}
  }))
  return {
    // paths:[
    //   {params:{liste:"words"}}
    // ],
    paths,
    fallback:false
  };
}