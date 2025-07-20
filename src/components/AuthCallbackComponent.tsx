import {useAuth0} from "@auth0/auth0-react";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {LoaderComponent} from "./LoaderComponent.tsx";

export function AuthCallbackComponent() {
    const {handleRedirectCallback, isLoading} = useAuth0();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        async function processRedirect() {
            try {
                await handleRedirectCallback();
                navigate("/", {replace: true});
            } catch (e) {
                console.error('Error handling redirect callback:', e);
            }
        }
        processRedirect().then(data=> console.log(data));
    }, [handleRedirectCallback,navigate]);

    if (isLoading) {
        return <div><LoaderComponent/></div>;
    }

    return null;
}