import SettingsLogo from "~/assets/Settings.svg?react"
import useNavbar from "~/context/navbar";
import useTokenState from "~/context/token";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import HomeIcon from "~/assets/Home.svg?react"
import PersonIcon from "~/assets/person.svg?react"
const SideBar = () => {
    // const [user, setUser] = useState<userInformation>("")
    const isLoggedIn = useTokenState((state) => state.isLoggedIn);
    const setClose = useNavbar((state) => state.setClose);
    const isOpen = useNavbar((state) => state.isOpen);
    const setOpen = useNavbar((state) => state.setOpen)
    const navigate = useNavigate();
    const onClick = (to: string) => {
        navigate(to);
        setClose()
    };
    useEffect(() => {
        // --- 1. Client-Side Safety Check ---
        if (!isLoggedIn) {
            return;
        }
        if (typeof window === 'undefined') {
            return;
        }

        // Function to check width and set state
        const checkWidthAndSetState = () => {
            // Log for debugging: Check what the function is reading
            // console.log('Current width:', window.innerWidth, 'Is opening:', window.innerWidth >= 1024);
            
            if (window.innerWidth >= 1024) {
                // Open for large screens
                setOpen();
            } else {
                // Close for small screens
                setClose();
            }
        };

        // Call the check immediately on mount
        checkWidthAndSetState();


        // --- 2. Resize Listener ---
        window.addEventListener('resize', checkWidthAndSetState);
        
        // --- 3. Cleanup ---
        return () => {
            window.removeEventListener('resize', checkWidthAndSetState);
        };
    }, [setOpen, setClose]); // Make sure setOpen/setClose are stable functions
    return (
    <div className={`
        transition-all duration-1000 ease-in-out
        z-40 fixed md:sticky  flex-col justify-between top-0 h-screen bg-primary shrink-0 gap-10
        ${ isOpen ? "w-100"  : "w-0" } 
        overflow-hidden 
        flex 
    `}>
        { isLoggedIn && (
            <h1 className="hidden lg:flex mt-15 ml-8 font-heading text-[20px]">Content Management System</h1>
        ) }
        <div className="flex flex-col">
                { isLoggedIn ? (
                <nav className="flex flex-col w-full h-full pt-32">
                    <div className="nav-link" onClick={() => onClick("/dashboard") }>
                        <HomeIcon/>
                        <h1 className="font-main text-xl">Dashboard</h1>
                    </div>
                    <div className="nav-link" onClick={() => onClick("/") }>
                        <PersonIcon/>
                        <h1 className="text-xl">Feed</h1>    
                    </div> { /* TODO: Add a way to point to self user*/ }
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
        <div>
            
            <img  src="https://placehold.co/48x48" alt="" 
                className="w-12 h-12 rounded-full object-cover object-center border-4 border-white shadow-md"/>
            <SettingsLogo className="mb-10 text-white" />
        </div>
    </div>
    );
}

export default SideBar;