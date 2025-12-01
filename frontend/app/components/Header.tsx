import Menu from "~/assets/menu.svg?react"
import useNavbar from "~/context/navbar";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import useTokenState from "~/context/token";
const Header = () => {
    const toggleIsOpen = useNavbar((state) => state.toggleIsOpen)
    const navigate = useNavigate();
    const isLoggedIn = useTokenState((state) => state.isLoggedIn);
    return(
        <div className={`flex-col fixed top-0 w-full left-0 right-0 z-50 border-b-2 border-white ${isLoggedIn ? "lg:hidden" : "flex"}`}>
            <header className="flex flex-row min-h-20 items-center justify-between p-5 bg-primary text-secondary ">
                <h1 className="text-2xl font-heading " onClick={() => navigate("/")}>Content Management System</h1>
                <Menu className={`text-white hover:stroke-primary stroke-3 flex ${isLoggedIn ? "lg:hidden" : "md:hidden"}`} onClick={toggleIsOpen}/>
                <nav className={`hidden ${ isLoggedIn ? "hidden" : "md:flex"} flex-row gap-2 `}>
                    <Link to="/signup" className="block border border-white p-1 rounded-sm font-main text-xs" >Sign Up</Link>
                    <Link to="/login" className="block border border-white p-1 rounded-sm font-main text-xs">Sign In</Link>
                </nav>
            </header>
        </div>
    )

}

export default Header;