import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";

type Blog = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  article: Blog;
};
export default function Article(props: Props) {
  const article = props.article;
  // const router = useRouter();
  // const article = router.query.article as string | undefined; // Utilisation d'une assertion de type
  // console.log(props.article)

  if (!props.article) {
    return <h1>Chargement</h1>;
  }
  return (
    <div className="container">
      <h1 className={"my-4"}>{article && article.id}</h1>
      <Card
        border="primary"
        style={{ width: "18rem" }}
        bg={"secondary"}
        text={"white"}
      >
        <Card.Header>{article.id}</Card.Header>
        <Card.Body>
          <Card.Title>{article.title.toUpperCase()}</Card.Title>
          <Card.Text>{article.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export async function getStaticProps(context: { params: { Article: any } }) {
  const id = context.params.Article;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await data.json();
  // console.log(article);
  // if (!listeEnCours) {
  //   return{
  //     notFound:true
  //   }

  // }
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await data.json();

  const paths = results.map((item: { id: { toString: () => any } }) => ({
    params: { Article: item.id.toString() },
  }));
  return {
    // paths:[
    //   {params:{liste:"words"}}
    // ],
    paths,
    // Option 1 : fallback à true
    // Les pages qui ne sont pas générées statiquement seront rendues côté client lorsqu'elles seront visitées.
    // De nouvelles pages seront générées statiquement en arrière-plan après la première visite.
    // Le rendu initial peut contenir un avertissement "Page is missing" (page manquante).
    fallback: false,

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
