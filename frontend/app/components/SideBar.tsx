import SettingsLogo from "~/assets/Settings.svg?react"
import useNavbar from "~/context/navbar";
import useTokenState from "~/context/token";
import { useNavigate } from "react-router";


const SideBar = () => {
    // const [user, setUser] = useState<userInformation>("")
    const isLoggedIn = useTokenState((state) => state.isLoggedIn);
    const setClose = useNavbar((state) => state.setClose);
    const isOpen = useNavbar((state) => state.isOpen);
    const navigate = useNavigate();
    const onClick = (to: string) => {
        navigate(to);
        setClose()
    };
    return (
    <div className={`
        transition-all duration-1000 ease-in-out
        z-40 fixed md:sticky  flex-col justify-end top-0 h-screen bg-primary shrink-0 gap-10
        ${ isOpen ? "w-[80vw] md:w-[20vw]" : "w-0" } 
        overflow-hidden 
        flex 
    `}>
            <div className="flex flex-col">
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
            <img  src="https://placehold.co/48x48" alt="" 
            className="w-12 h-12 rounded-full object-cover object-center border-4 border-white shadow-md"/>
            <SettingsLogo className="mb-10 text-white" />
        </div>
    );
}

export default SideBar;