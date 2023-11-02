import {HomePageImage} from "./components/HomePageImage.jsx" 
import {HomePageTitle} from "./components/HomePageTitle.jsx" 
import {ButtonLogin} from "./components/ButtonLogin.jsx" 
import {SearchBar} from "./components/searchbar/SearchBar.jsx" 
import {ButtonDropdown} from "./components/ButtonDropdown.jsx" 
import {ImageSearchBar} from "./components/searchbar/ImageSearchBar.jsx" 

export default function Navbar({isLoggedIn}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mt-1">
                    <HomePageImage/>
                    <HomePageTitle/>
                </div>
                <div className="container offset-md-4">
                    <div className="d-flex align-items-center">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {isLoggedIn ?
                                    <ButtonDropdown isLoggedIn={isLoggedIn}/>
                                    :
                                    <ButtonLogin/>
                                }
                            </ul>
                        </div>
                    </div>
                    <ImageSearchBar/>
                    <SearchBar/>
                </div>
            </nav>
        </div>
    )
}
