import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import CustButton from './Button';

export default function RaffleNav ({activePage}) {
    const [activeNav, setActiveNav] = useState(activePage);
    let { id } = useParams();

    let handleActiveClick = (e) => {
        setActiveNav(e.target.firstChild.data);
    }

    return (
        <nav className="navbar">
            
            <Link to={`/`} className="navbar-items">
                {CustButton(50, 150, "success", handleActiveClick, 'All Raffles')}
            </Link>

            <Link to={`/${id}`} className={ activePage === "Register" ? "navbar-items active" : "navbar-items"}>
                {CustButton(50, 150, activePage === "Register" ? "primary" : "success", handleActiveClick, 'Register')}
            </Link>

            <Link to={`/${id}/participants`} className={ activePage === "Participants" ? "navbar-items active" : "navbar-items"}>
                {CustButton(50, 150, activePage === "Participants" ? "primary" : "success", handleActiveClick, 'Participants')}
            </Link>

            <Link to={`/${id}/winner`} className={ activePage === "Winner" ? "navbar-items active" : "navbar-items"}>
                {CustButton(50, 150, activePage === "Winner" ? "primary" : "success", handleActiveClick, 'Winner')}
            </Link>

        </nav>
    )
}