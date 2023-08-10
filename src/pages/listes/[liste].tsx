import React from 'react'
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/router';



export default function Liste(props: { listeEnCours: any[]; }) {
  const router = useRouter()
  const liste = router.query.liste as string | undefined; // Utilisation d'une assertion de type



// console.log(props)
type Item = {
  name: string;
};

type Props = {
  array: Item[];
};
if (!props.listeEnCours) {
  return <h1>Chargement</h1>
}
  return (
    <div className="container">
      <h1 className={"my-4"}>{liste&& liste.charAt(0).toUpperCase()+liste?.slice(1)}</h1>
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

  // if (!listeEnCours) {
  //   return{
  //     notFound:true
  //   }
    
  // }
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
    paths:[
      {params:{liste:"words"}}
    ],
    // paths,
    // Option 1 : fallback à true
    // Les pages qui ne sont pas générées statiquement seront rendues côté client lorsqu'elles seront visitées.
    // De nouvelles pages seront générées statiquement en arrière-plan après la première visite.
    // Le rendu initial peut contenir un avertissement "Page is missing" (page manquante).
    fallback: true,

    // Option 2 : fallback à false
    // Seules les pages définies dans paths seront accessibles. Les autres pages renverront une erreur 404.
    // Aucun rendu côté client ne se produit pour les pages non générées statiquement.
    // fallback: false,

    // Option 3 : fallback à 'blocking'
    // Les pages qui ne sont pas générées statiquement seront générées en arrière-plan lorsque visitées.
    // Le rendu initial de la page sera renvoyé côté client après la génération.
    // Aucun avertissement "Page is missing" (page manquante) ne sera affiché.
    // Cette option est utile pour les pages qui doivent être générées rapidement avant d'être rendues.
    // fallback: 'blocking',
    
  };
}