import type { Route } from "../+types/root"
import { useNavigate } from "react-router";
import { useState } from "react"
import { handleLogin } from "~/api/apiFunctions";
import InputSection from "~/components/Input"
import type { listOfInput } from "~/components/Input"

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Login - CMS" },
    { name: "description", content: "A Content Management System that's made with React Router v7 and Django from scratch" },
  ];
}

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const listOfInput: listOfInput[] = [
        {id: 1, placeholder: "Input your Username", value: username, setValue: setUsername, type:"text"},
        {id: 2, placeholder: "Input your Password", value: password, setValue: setPassword, type:"password"}
    ]
    return (
        <div className="page">
            <InputSection listOfInput={listOfInput} 
            headingText="Login back to your CMS account!"
            buttonText="Login" doTask={() => handleLogin(username, password, navigate)}
            footerText="New here ?" footerLinkText="Sign up now !"
            footerLink="/signup"
             />
        </div>
    )
}

export default Login;