import { ButtonStatistics } from "./ButtonStatistics.jsx";
import { ButtonCreateEmpl } from "./ButtonCreateEmpl.jsx";
import { ButtonLogout } from "./ButtonLogout.jsx";

export function ButtonDropdown({ isLoggedIn }) {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle btn bg-primary text-light"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                More
            </a>
            <div
                className="dropdown-menu bg-white"
                aria-labelledby="navbarDropdown"
                data-bs-popper="static"
                style={{
                    left: '-100%',
                }}
            >
                <div className="container modal-dialog-centered">
                    <ol className="li my-1">
                        <ButtonStatistics />
                    </ol>
                    <ol className="li my-1">
                        <ButtonCreateEmpl />
                    </ol>
                    <ol className="li my-1">
                        <ButtonLogout isLoggedIn={isLoggedIn} />
                    </ol>
                </div>
            </div>
        </li>
    );
}
