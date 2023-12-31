import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const navigate = useNavigate();
    const { name, onLogout } = useContext(AuthContext)

    const logout = () => {
        onLogout()
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className="nav-item nav-link text-primary"
                        to="/login"
                    >
                        {name?.name}
                    </NavLink>

                    <button
                        className='nav-item nav-link btn'
                        onClick={logout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}