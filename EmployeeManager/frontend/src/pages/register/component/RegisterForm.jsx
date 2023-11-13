import {UsernameInputField} from "./UsernameInputField.jsx"
import {PasswordInputField} from "./PasswordInputField.jsx"

export function RegisterForm({user, handleUsernameChange, handlePasswordChange}) {
    return (
        <form>
            <UsernameInputField
                user={user}
                handleUsernameChange={handleUsernameChange}
            />
            <PasswordInputField
                user={user}
                handlePasswordChange={handlePasswordChange}/>
        </form>
    )
}