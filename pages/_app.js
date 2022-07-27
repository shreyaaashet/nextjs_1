import '../styles/globals.css'
// import Layout from '../Permanent/Layout';

function MyApp({ Component, pageProps }) {
  return(
<>
<Component {...pageProps} /> 
     {/* this is children wrapped in navbar n footer */}
</>
  )

  
 
}

export default MyApp
