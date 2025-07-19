import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {Store} from "./store/ConfigStore.ts";
import {RouterProvider} from "react-router-dom";
import {AppRoutes} from "./config/Routes.tsx";
import {Auth0Provider} from "@auth0/auth0-react";

createRoot(document.getElementById('root')!).render(

    <Auth0Provider
        domain={"dev-6qj807foiplf7q1h.us.auth0.com"}
        clientId={"PslXqjs2HoqvSsqJVmvhPvgkPMZsSec7"}
        authorizationParams={{
            redirect_uri: window.location.origin + '/auth/callback',
            audience: "https://skycast-api",
        }}
        cacheLocation={'localstorage'}
    >
        <Provider store={Store}>
            <RouterProvider router={AppRoutes}/>
        </Provider>
    </Auth0Provider>
)
