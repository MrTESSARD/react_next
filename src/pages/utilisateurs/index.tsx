import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';

type Users = {
    id: number;
    name: string;
    
  };
  
  type Props = {
    users: Users[];
  };

export default function Index(props:Props) {
    const users = props.users
    return (
      

<div className="container">
      <h1 className={"my-4"}>Les listes d utilisateurs</h1>
        <ListGroup as="ul">
      {users.map((user)=>(
         <ListGroup.Item key={user.id} as="li" action style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}} >
          <h5>{user.name}</h5>
            
           <Link href={`/utilisateurs/${user.id.toString()}`}>Contacter</Link>

         </ListGroup.Item>
        
         
         
         
         ))}
         </ListGroup>
      
    </div>
    );
}

export async function getServerSideProps(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
  
 
    return {
      // paths:[
      //   {params:{liste:"words"}}
      // ],
      props:{
        users
      },
     
    };
  }
  