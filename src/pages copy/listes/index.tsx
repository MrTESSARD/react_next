import Link from "next/link";
import ListGroup from 'react-bootstrap/ListGroup';

export default function index(props: { array: { name: string; }[]; }) {
  console.log(props);
  type Item = {
    name: string;
  };
  
  type Props = {
    array: Item[];
  };
  return (
    <div className="container">
      <h1 className={"my-4"}>Les listes de vocabulaire</h1>
    <ListGroup>
      {props.array.map((item: Item, index:number)=>(
        <ListGroup.Item variant="dark" key={index} >
          
          <Link href={`/listes/${item.name}`}>{item.name}
          </Link>
         </ListGroup.Item>
          


      ))}
      </ListGroup>
      
    </div>
  )
}
export async function getStaticProps() {
  const data = await import("../../data/listes.json");
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
