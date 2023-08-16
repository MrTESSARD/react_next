import Link from "next/link";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

type Item = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  results: Item[];
};

export default function Index(props: Props) {
  return (
    <div className="container">
      <h1 className={"my-4"}>Bienvenue sur le Blog</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {props.results.map((item) => (
          <Card
            key={item.id}
            border="primary"
            style={{ width: "18rem", margin: "1%" }}
            bg={"secondary"}
            text={"white"}
          >
            <Card.Header>{item.id}</Card.Header>
            <Card.Body>
              <Card.Title>{item.title.toUpperCase()}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
              <Link href={`/blog/${item.id.toString()}`}>Blog</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await data.json();

  // const data = await import("https://jsonplaceholder.typicode.com/posts");
  // const array = data.englishList;

  return {
    props: {
      results,
    },
  };
}
