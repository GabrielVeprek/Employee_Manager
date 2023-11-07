import {useNavigate} from "react-router-dom"
import {CancelButton} from "../../buttonComponent/CancelButton.jsx"
import {useState} from "react"
import {employeeRegisterURL} from "../../URLs/EmployeeStatsURL.js"
import {RegisterForm} from "./component/RegisterForm.jsx";
import {DefaultMask} from "../../component/DefaultMask.jsx";

export function Register() {

    const navigate = useNavigate();
    const [isInputInvalid, setIsInvalidInput] = useState(null)
    const [message, setMessage] = useState("Register")

    const [user, setUser] = useState({
        username: "",
        password: "",
        authorities: ["USER"]
    });

    const handleUsernameChange = (event) => {
        setUser({...user, username: event.target.value});
    };

    const handlePasswordChange = (event) => {
        setUser({...user, password: event.target.value});
    };


    function handleRegister() {

        if (user.username.trim().length < 1) {
            setIsInvalidInput(true)
            setMessage("Username cannot be empty")
        } else {
            setIsInvalidInput(null)
        }
        if (user.password.trim().length < 1) {
            setIsInvalidInput(true)
            setMessage("Password cannot be empty")
        }
        if (user.password.trim().length < 8) {
            setIsInvalidInput(true)
            setMessage("Password must have at least 8 digits")
        }

        if (user.password.trim().length > 7 && user.username.trim().length > 1) {
            fetch(employeeRegisterURL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user),
            })
                .then(response => {
                    if (response.status === 400) {
                        setIsInvalidInput(true)
                        setMessage("Username already taken")
                    }
                    if (response.status === 201) {
                        navigate("/login")
                    }
                })
        }
    }


    return (
        <DefaultMask>
            <h2 className={isInputInvalid ? "text-center m-4 text-danger" : "text-center m-4"}>
                {message}
            </h2>
            <RegisterForm
                user={user}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                setIsSomethingWrong={isInputInvalid}
            />
            <button
                className="btn btn-outline-success mx-2"
                onClick={handleRegister}>
                Register
            </button>
            <CancelButton/>
        </DefaultMask>
    )
}