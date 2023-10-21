import {useState} from "react";
import {CancelButton} from "../../buttonComponent/CancelButton.jsx";
import {FormLoginError} from "./component/FormLoginError.jsx";
import {FormLogin} from "./component/FormLogin.jsx";
import {ButtonLogin} from "./component/ButtonLogin.jsx";
import {ButtonRegister} from "./component/ButtonRegister.jsx";
import {DefaultMask} from "./component/DefaultMask.jsx";
import {setTokenToHeader} from "../../utils/sendToken.js";

export function LoginPage({setIsLoggedIn}) {
    const BACKEND_LOGIN = 'http://localhost:8080/login';
    const [wrongLogIn, setWrongLogIn] = useState(false);

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    function handleUsernameChange(event) {
        setUser({...user, username: event.target.value});
    }

    function handlePasswordChange(event) {
        setUser({...user, password: event.target.value});
    }

    function handleLogin() {
        const headers = setTokenToHeader(user);

        fetch(BACKEND_LOGIN, {method: 'GET', headers: headers})
            .then(response => {
                if (response.status !== 401) {
                    setIsLoggedIn(true);
                    history.go(-3)
                } else {
                    setWrongLogIn(true);
                }
                return response.text();
            })
    }

    const errorLoginForm =
        <DefaultMask>
            <FormLoginError user={user} handleUsernameChange={handleUsernameChange}
                            handlePasswordChange={handlePasswordChange}/>
            <ButtonLogin handleLogin={handleLogin}/>
            <ButtonRegister/>
            <CancelButton/>
        </DefaultMask>


    const loginForm =
        <DefaultMask>
            <FormLogin user={user} handleUsernameChange={handleUsernameChange}
                       handlePasswordChange={handlePasswordChange}/>
            <ButtonLogin handleLogin={handleLogin}/>
            <ButtonRegister/>
            <CancelButton/>
        </DefaultMask>

    return (wrongLogIn ? errorLoginForm : loginForm)
}




