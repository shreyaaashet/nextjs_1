import { useRouter } from "next/router";
import { useEffect } from "react";



const NotFound = () => {
    const router=useRouter();
    useEffect(() => {
       setTimeout(()=>{
       router.push("/"); // it means router se go to home pg after 3 s
       },3000)
         
        
    }, [router]);
    return ( 
        <>
        NOT FOUND
        </>
     );
}
 
export default NotFound;