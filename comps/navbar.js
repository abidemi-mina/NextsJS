import Image from "next/image";
import Link from "next/link";


const Navabar = () =>{
    return(
        <nav>
            <div className="nav">
                <Image className="logo" src="/react-logo.png" width={60} height={50}/>   
                <div className="menu-link">
                    <Link href='/'> Home</Link>
                    <Link href='/about'> About</Link>
                    <Link href='/subs/tests'> Test</Link>
                </div>
                
            </div>
        </nav>
    )
}
export default Navabar;