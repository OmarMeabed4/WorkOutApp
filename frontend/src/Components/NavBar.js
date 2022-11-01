import {Link} from "react-router-dom"
import {useLogout} from "../Hooks/useLogout"
import { useAuthContext } from "../Hooks/useAuthContext"

const NavBar = () => {
    const {logout} = useLogout()
    const handleLogout = () => {
        logout()
    }

    const {user} = useAuthContext()

    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Bodey</h1>
                </Link>
                <nav>
                    {user && <div>
                        <span>{user.email}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>}
                    {!user && <div>
                        <Link to="/Login">
                            Login
                        </Link>
                        <Link to="Signup">
                            Signup
                        </Link>
                    </div>}
                </nav>
            </div>
        </header>
     );
}
 
export default NavBar;