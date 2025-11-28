import type { Route } from "../+types/root"
// import { useCallback } from "react"
import { useState } from "react"
import InputSection from "~/components/Input"
import type { listOfInput } from "~/components/Input"
import RightArrow from "~/assets/Arrow right.svg?react"


export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Signup - CMS" },
    { name: "description", content: "A Content Management System that's made with React Router v7 and Django from scratch" },
  ];
}

const Signup = () => {
    const [page, setPage] = useState<"user" | "profile">("user");

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [description, setDescription] = useState<string>("");
    const [privateAccount, setPrivateAccount] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)



    const handleSignup = () => {
        // TODO: Add Sign up via Fetch/Axios
    };
    const userCreationInput: listOfInput[] = [
        {id: 1, placeholder: "Input your Username", value: username, setValue: setUsername, type:"text"},
        {id: 2, placeholder: "Input you email", value: email, setValue: setEmail, type:"email"},
        {id: 3, placeholder: "Input your Password", value: password, setValue: setPassword, type: "password"},
    ];
    const profileCreationInput: listOfInput[] = [
        {id: 1, placeholder: "Input a description for your profile", value: description, setValue: setDescription, type: "description"},
        {id: 2, placeholder: "Dropzone", value: file, setValue: setFile, type: "dropzone"},
        {id: 3, placeholder: "Create as a private account ?", value: privateAccount, setValue: setPrivateAccount, type: "checkbox"}

    ]
    return (
        <div className="page">
            { page === "user" ? (
                <div>
                    <InputSection listOfInput={userCreationInput} 
                    headingText="Create your CMS account!"
                    buttonText="Next" doTask={() =>  setPage("profile")}
                    footerText="Already signed up ?" footerLinkText="Login here !"
                    footerLink="/login"/>
                </div>
            ) : (
                <div>
                    <RightArrow className="rotate-180 fixed top-40 left-10" onClick={() => setPage("user")} />
                    <InputSection listOfInput={profileCreationInput} 
                    headingText="Create your CMS account!"
                    buttonText="Sign Up" doTask={handleSignup}
                    footerText="Already signed up ?" footerLinkText="Login here !"
                    footerLink="/login"/>
                </div>
            ) }
            
        </div>
    )
}

export default Signup;