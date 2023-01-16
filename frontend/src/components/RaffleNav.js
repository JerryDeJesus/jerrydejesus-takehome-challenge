import { Link, useParams } from 'react-router-dom';

export default function RaffleNav () {
    let { id } = useParams();

    return (
        <nav className="NavBar">
            <Link to={`/`} className="navbar-all-raffles">All Raffles</Link>
            <Link to={`/${id}`} className='navbar-register'>Register</Link>
            <Link to={`/${id}/participants`} className='navbar-register'>Participants</Link>
            <Link to={`/${id}/winner`} className='navbar-register'>Pick Winner</Link>
        </nav>
    )
}