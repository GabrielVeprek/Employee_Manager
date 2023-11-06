import {useState} from "react"
import {CancelButton} from "../../buttonComponent/CancelButton.jsx"
import {FormLogin} from "./component/FormLogin.jsx"
import {ButtonLogin} from "./component/ButtonLogin.jsx"
import {ButtonRegister} from "./component/ButtonRegister.jsx"
import {setTokenToHeader} from "../../utils/sendToken.js"
import {employeeLoginURL} from "../../URLs/EmployeeStatsURL.js"
import {useNavigate} from "react-router-dom";
import {DefaultMask} from "../../component/DefaultMask.jsx";

export function LoginPage({setIsLoggedIn}) {

    const navigate = useNavigate();
    const [wrongLogIn, setWrongLogIn] = useState(false)
    const [user, setUser] = useState({
        username: "", password: "",
    })

    function handleUsernameChange(event) {
        setUser({...user, username: event.target.value})
    }

    function handlePasswordChange(event) {
        setUser({...user, password: event.target.value})
    }

    function handleLogin() {
        const headers = setTokenToHeader(user)

        fetch(employeeLoginURL, {method: 'GET', headers: headers})
            .then(response => {
                if (response.status !== 401) {
                    setIsLoggedIn(true)
                    navigate("/")
                } else {
                    setWrongLogIn(true)
                }
                return response.text()
            }).then(jwt => localStorage.setItem('jwt', jwt))
    }


    return (
        <DefaultMask>
            <FormLogin
                user={user}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                wrongLogIn={wrongLogIn}/>
            <ButtonLogin handleLogin={handleLogin}/>
            <ButtonRegister/>
            <CancelButton/>
        </DefaultMask>
    )
}




