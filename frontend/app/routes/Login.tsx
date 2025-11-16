import type { Route } from "../+types/root"

import { useState } from "react"
import InputSection from "~/components/Input"
import type { listOfInput } from "~/components/Input"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - CMS" },
    { name: "description", content: "A Content Management System that's made with React Router v7 and Django from scratch" },
  ];
}

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleLogin = () => {
        // TODO: Add Login via Fetch/Axios
    };
    const listOfInput: listOfInput[] = [
        {id: 1, placeholder: "Input your Username", value: username, setValue: setUsername, type:"text"},
        {id: 2, placeholder: "Input your Password", value: password, setValue: setPassword, type:"password"}
    ]
    return (
        <div className="page">
            <InputSection listOfInput={listOfInput} 
            headingText="Login back to your CMS account!"
            buttonText="Login" doTask={handleLogin}
            footerText="New here ?" footerLinkText="Sign up now !"
            footerLink="/signup"
             />
        </div>
    )
}

export default Login;