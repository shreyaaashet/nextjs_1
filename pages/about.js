import Image from "next/image";


const About = () => {

    return ( 
        <>
       
        <h1>About page this is a random image to see next Image tag</h1>
        <Image src="/logo-removebg-preview.png" alt="some" width={120} height={150}/>

       
        </>
     );
}
 
export default About;