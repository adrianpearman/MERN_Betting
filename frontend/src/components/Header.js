import React from 'react' 
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to={'/'}>Get Me The Odds!</Link>
            </nav>
        </div>
    )
}

export default Header