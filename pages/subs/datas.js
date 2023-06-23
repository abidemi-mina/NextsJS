import Link from "next/link";

export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return{
        props: { mina: data }
        
    }
}
const Mina = ({mina})=>{
    return(
        <>
            <h1>Ninjas</h1>
         {
            
            mina.map( ninja =>(
            <Link href={'/subs/'+ ninja.id} key={ninja.id}>
                <h3>{ninja.name}</h3>
                <p>{ninja.username}</p>
            </Link>
        ))}
        </>
       
    )
}
export default Mina;