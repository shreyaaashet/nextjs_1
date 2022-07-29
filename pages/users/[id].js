// since id will be changable therfore we use [] ke ander
// to get the data from the api we use getStaticPaths

export const getStaticPaths = async ()=> // so we can get all the ids n next can generate paths out of it
{
    const  res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();

    const paths=data.map(item =>{
      return {
        params:{id: item.id.toString() }
      }
    })
        return{
        paths:paths,
        fallback:false
    
    }
       
}
// to render the data 
export const getStaticProps = async (context) => {
const id = context.params.id;
const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
const data = await res.json();

return{
    props:{user:data}
   }
}

const Details = ({user}) => {
    return ( 
        <>
        this is users/

        <h3>{user.name}</h3>
        <small>
            {user.email}
        </small>
        <p> {user.website}</p>
        </>
     );
}
 
export default Details;