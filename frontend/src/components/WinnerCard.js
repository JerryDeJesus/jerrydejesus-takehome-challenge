import RaffleNav from "./RaffleNav";
import trophy from "../assets/trophy.png";
import Confetti from 'react-confetti';

export default function Winner ({winnerInfo}){
    let formattedPhone = '';
    formattedPhone = `(${winnerInfo.phone.slice(0,3)}) ${winnerInfo.phone.slice(3,6)}-${winnerInfo.phone.slice(6)}`;
    
    return(
        <div>
            {winnerInfo.winner_name ? <Confetti width={window.width}/> : ""}
            <h1 className="subtitle">The Winner Is...</h1>
            <RaffleNav activePage={'Winner'}/>
            <div className="winner-info">
                <img alt="first-place-trophy" className="trophy-image" src={trophy}/>
                <h3>Winner Name: {winnerInfo.winner_name}</h3>
                <h3>Email Address: {winnerInfo.email}</h3>
                <h3>Phone: {formattedPhone !== "() -" ? formattedPhone : "No phone number provided."}</h3>
            </div>
        </div>
    )
}