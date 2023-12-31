import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  // ReactElement,
  // JSXElementConstructor,
  ReactNode,
  // ReactPortal,
  // PromiseLikeOfReactNode,
} from "react";
import Card from "react-bootstrap/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Cours React Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <Navbar/> */}
        <div className="container row justify-content-sm-between ">
          <h1 className={styles.titre}>Bienvenue sur Blog </h1>
          <h3 className={styles.titre}>Le blog des développeurs </h3>
          <Card
            border="primary"
            style={{ width: "18rem", minHeight: "200px", margin: "10px" }}
            bg={"secondary"}
            text={"white"}
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <Link href={"/blog"}>Blog</Link>
            </Card.Body>
          </Card>
          <Card
            border="primary"
            style={{ width: "18rem", minHeight: "200px", margin: "10px" }}
            bg={"secondary"}
            text={"white"}
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <Link href={"/liste"}>liste</Link>
            </Card.Body>
          </Card>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../data/vocabulary.json");
  const array = data.vocabulary;
  // if (array.length===0) {
  //   return{
  //     notFound: true
  //   }

  // }
  if (array.length === 0) {
    return {
      redirect: {
        destination: "/isr",
      },
    };
  }
  return {
    props: {
      array,
    },
  };
}
