import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function NavBar() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to='/todo'>To-Do List</Link>
            </div>
            <div>
                <Link to='/expense'>Expense Tracker</Link>
            </div>
        </nav>
    )
}

export default NavBar
