import api, { waitForInitialized } from "./axiosConfig"
import useTokenState from "~/context/token";
import type { NavigateFunction } from "react-router";

export const handleLogin = async (
        username: string,
        password: string,
        navigate: NavigateFunction
    ) => {
    try{
        const response = await api.post("/token/", {
            username, password
        });
        useTokenState.getState().setTokens({
            accessToken: response.data.access,
            refreshToken: response.data.refresh,
            state: useTokenState.getState().state ?? "session"
        })

        await waitForInitialized();
        navigate("/dashboard", {replace: true});
    }
    catch{
        alert("Failed!")
    };
};

export const handleSignup = async (
        username: string,
        password: string,
        email: string,
        description: string,
        privateAcc: boolean,
        avatar: File | null,
        navigate: NavigateFunction
    ) => {
    try{
        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);

        formData.append("profile.description", description);
        formData.append("profile.private", String(privateAcc));

        if (avatar){
            formData.append("profile.avatar", avatar);
        }
        

        await api.post("/user/create", formData);
        navigate("/login", {replace: true});
    }
    catch{
        alert("Failed!")
    };
};