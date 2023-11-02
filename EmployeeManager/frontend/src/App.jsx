import "./App.css" 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import Navbar from "./layout/Navbar" 
import Home from "./pages/home/Home.jsx" 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" 
import CreateEmployee from "./employee/create&edit/CreateEmployee.jsx" 
import EditEmployee from "./employee/create&edit/EditEmployee.jsx" 
import ViewEmployee from "./employee/view/ViewEmployee.jsx" 
import Statistic from "./pages/statistics/Statistic.jsx" 
import {LoginPage} from "./pages/login/LoginPage.jsx" 
import {Register} from "./pages/register/Register.jsx" 
import {createContext, useEffect, useState} from "react" 
import {getToken} from "./utils/getToken.js" 
import {DeletePage} from "./pages/delete/DeletePage.jsx" 

export const appContext = createContext(null) 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false) 
    const [appState, setAppState] = useState({searchResult: []})

    function isTokenInStorage() {
        return getToken() !== null 
    }

    useEffect(() => {
        setIsLoggedIn(isTokenInStorage())
    }, [])

    return (
        <appContext.Provider value={[appState, setAppState]}>
            <div className="App">
                <Router>
                    <Navbar isLoggedIn={isLoggedIn}/>
                    <Routes>
                        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
                        <Route exact path="/confirmDelete/:id" element={<DeletePage/>}/>
                        <Route exact path="/createEmployee" element={<CreateEmployee/>}/>
                        <Route exact path="/editEmployee/:id" element={<EditEmployee/>}/>
                        <Route exact path="/viewEmployee/:id" element={<ViewEmployee/>}/>
                        <Route exact path="/employeeURLs" element={<Statistic/>}/>
                        <Route exact path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
                        <Route exact path="/register" element={<Register/>}/>
                    </Routes>
                </Router>
            </div>
        </appContext.Provider>
    ) 
}

export default App 