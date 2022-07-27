import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => { 
    // children are all the files in app.js which we wrapping

    return ( 
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
     );
}
 
export default Layout;