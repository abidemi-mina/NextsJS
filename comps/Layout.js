import Footer from "./footer";
import Navabar from "./navbar";

const Layout =({children}) => {
    return(
        <div className="content">
            <Navabar/>
            {children}
            <Footer/>
        </div>

    )

}
export default Layout;