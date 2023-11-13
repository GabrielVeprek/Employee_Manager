import {useNavigate} from "react-router-dom"
import {CancelButton} from "../../buttonComponent/CancelButton.jsx"
import {useState} from "react"
import {employeeRegisterURL} from "../../URLs/EmployeeStatsURL.js"
import {RegisterForm} from "./component/RegisterForm.jsx";
import {DefaultMask} from "../../component/DefaultMask.jsx";

export function Register() {

    const navigate = useNavigate();
    const [isInputValid, setIsValidInput] = useState(true)
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
        switch (true) {
            case user.username.trim().length < 1:
                setIsValidInput(false);
                setMessage("Username cannot be empty");
                break;
            case user.password.trim().length < 1:
                setIsValidInput(false);
                setMessage("Password cannot be empty");
                break;
            case user.password.trim().length < 8:
                setIsValidInput(false);
                setMessage("Password must have at least 8 digits");
                break;
            case user.password.trim().length > 7 && user.username.trim().length > 1:
                setIsValidInput(true)
                register();
        }


        function register() {
            fetch(employeeRegisterURL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user),
            })
                .then(response => {
                    if (response.status === 400) {
                        setIsValidInput(false)
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
            <h2 className={isInputValid ? "text-center m-4 " : "text-center m-4 text-danger"}>
                {message}
            </h2>
            <RegisterForm
                user={user}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                setIsSomethingWrong={isInputValid}
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