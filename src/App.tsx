import {Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";
import {LoaderComponent} from "./components/LoaderComponent.tsx";

function App() {
    const {isLoading, isAuthenticated, loginWithRedirect} = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect().then();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    if (isLoading) {
        return <div><LoaderComponent/></div>
    }

    return (
        <>
            <Outlet/>
        </>
    )
}

export default App
