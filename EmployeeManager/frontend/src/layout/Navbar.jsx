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
                    <div>
                        <HomePageImage/>
                        <HomePageTitle/>
                    </div>
                </div>
                <div className="row mx-3">
                    <div className="d-flex align-items-center mx-3">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="row">
                                <ul className="navbar-nav">
                                    {isLoggedIn ?
                                        <ButtonDropdown isLoggedIn={isLoggedIn}/>
                                        :
                                        <ButtonLogin/>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <ImageSearchBar/>
                        </div>
                        <div className="col-md-8">
                            <SearchBar/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}
