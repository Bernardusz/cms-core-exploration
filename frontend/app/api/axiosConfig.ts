import axios from 'axios'
import useTokenState from "~/context/token";

export const waitForInitialized = () => new Promise<void>((resolve) => {
    const isInitialized = useTokenState((state) => state.isInitialized);
    if (isInitialized) return resolve;

    const unsubscribe = useTokenState.subscribe(
        (state) => {
            if (state.isInitialized){
                unsubscribe();
                resolve();
            }
        }
    )
})

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000

});

api.interceptors.request.use(async (config) => {
    const accessToken = useTokenState(state => state.accessToken);
    if (accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
})

api.interceptors.request.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            await waitForInitialized();
            const { refreshToken, state, setTokens } = useTokenState.getState();
            try {
                const response = await axios.post("http://localhost:8000/api/token/refresh/", {
                    refresh: refreshToken
                });
                setTokens({
                    accessToken: response.data.access,
                    refreshToken: response.data.refresh,
                    state
                });
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                return axios(originalRequest);
            }
            catch (_err){
                useTokenState.getState().clearTokens();
                window.location.href = "/login";
                return Promise.reject(_err)
            }
        }
        return Promise.reject(error);

    }
)


export default api