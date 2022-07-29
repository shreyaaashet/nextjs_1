
import Head from 'next/head';
import Footer from '../Permanent/footer';
import Navbar from './../Permanent/Navbar';

export default function Home() {

  return (
    <>
      {/* this head will be insetrted in index.html ka head */}
      <Head>
        <title>Next js tut 1</title>
        <meta name="keywords" content="nextjs" />

      </Head>

      <Navbar />
      <h3>index page </h3>
      <Footer />
    </>
  )
}
