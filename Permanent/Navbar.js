import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <Link href="/"><a >Home</a></Link>
                <Link href="/about"><a >About</a></Link>
                <Link href="/contact"><a >Contact</a></Link>
                
            </nav>



        </>
    );
}

export default Navbar;