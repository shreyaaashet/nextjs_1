import Image from "next/image";
import  Head from 'next/head';
const About = () => {

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="keywords" content="nextjs|About" />

            </Head>

            <h1>About page this is a random image to see next Image tag</h1>
            <Image src="/logo-removebg-preview.png" alt="some" width={120} height={150} />


        </>
    );
}

export default About;