import {useAuth0} from "@auth0/auth0-react";

export function NavbarComponent() {
    const {logout} = useAuth0();

    function onLogoutBtnClicked() {
        localStorage.clear();
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        }).catch((err)=> {
            console.log(err);
        })
    }

    return (
        <div className={"bg-slate-800 h-[60px] text-white sticky top-0 z-50 "}>
            <div className={'flex flex-row justify-end py-4 px-10'}>
                <button onClick={onLogoutBtnClicked}
                        className={'bg-blue-600 text-slate-200 px-4 py-1 rounded-md cursor-pointer transition transform hover:scale-105 '}>
                    Logout
                </button>
            </div>
        </div>
    )
}