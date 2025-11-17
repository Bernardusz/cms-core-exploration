import useTokenState from "~/context/token";
import useNavbar from "~/context/navbar";
import { useNavigate } from "react-router";
const Navbar = () => {
    const isLoggedIn = useTokenState((state) => state.isLoggedIn);
    const isOpen = useNavbar((state) => state.isOpen);
    const setClose = useNavbar((state) => state.setClose);
    const navigate = useNavigate();
    const onClick = (to: string) => {
        navigate(to);
        setClose()
    }
    return (
        <div className={`
            ${isOpen ? "max-h-96 opacity-100" : "h-0 opacity-0"}
            transition-all duration-1000 ease-in-out
            w-full overflow-hidden
        `}>
            { isLoggedIn ? (
                <nav className="flex flex-col w-full h-full">
                    <div className="nav-link" onClick={() => onClick("/home") }>Home</div>
                    <div className="nav-link" onClick={() => onClick("/") }>Profile</div> { /* TODO: Add a way to point to self user*/ }
                    <div className="nav-link" onClick={() => onClick("/dashboard")}>Dashboard</div>
                </nav>  
            ) : (
                <nav className="flex flex-col w-full h-full">
                    <div className="nav-link" onClick={() => onClick("/") }>Landing Page</div>
                    <div className="nav-link" onClick={() => onClick("/login") }>Login</div>
                    <div className="nav-link" onClick={() => onClick("/signup") }>Sign up</div>
                </nav>
            )}
        </div>
    );
}

export default Navbar;