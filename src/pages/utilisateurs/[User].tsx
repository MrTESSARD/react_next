import Card from "react-bootstrap/Card";

type Blog = {
    id: number;
    name: string;
    username: string;
    email: string;
  };
  
  type Props = {
    user: Blog;
  };
  export default function User(props: Props) {
    // console.log(props);
    const User=props.user
    // const router = useRouter();
    // const User = router.query.User as string | undefined; // Utilisation d'une assertion de type
    // console.log(props.User)
    
    if (!props.user) {
      return <h1>Chargement</h1>;
    }
    return (
      <div className="container">
        <h1 className={"my-4"}>
        {User&&User.id}
        </h1>
        <Card
          border="primary"
          style={{ width: "18rem" }}
          bg={"secondary"}
          text={"white"}
        >
          <Card.Header>{User.name}</Card.Header>
          <Card.Body>
            <Card.Title>{User.username.toUpperCase()}</Card.Title>
            <Card.Text>{User.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
  


  export async function getStaticProps(context: { params: { User: any } }) {
    const id = context.params.User;
  
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await data.json();
    console.log(user);
    // if (!listeEnCours) {
    //   return{
    //     notFound:true
    //   }
  
    // }
    return {
      props: {
        user,
      },
    };
  }



  type Item = {
    id: Number;
  };
  
  export async function getStaticPaths()  {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
  const paths=users.map((item:Item)=>({
        params:{

            User:item.id.toString()
        }
    }))
  return {
    paths,
    fallback: false,
  }
}