import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

export default function Raffle ({raffle}){
    let formattedDateStarted = '';
    if(raffle.date_created) formattedDateStarted = format(parseISO(raffle.date_created), "MM/dd/yyyy hh:mm aaaaa'm'");
    let formattedDateEnded = 'No';
    if(raffle.date_ended) formattedDateEnded = format(parseISO(raffle.date_ended), "MM/dd/yyyy hh:mm aaaaa'm'");

    return(
        <Link to={`/${raffle.id}`} className="raffle-listing">
                <div className="raffle-listing-inner">
                    <h3>Raffle Name: {raffle.raffle_name}</h3>
                    <h3>Created: {formattedDateStarted}</h3>
                    {raffle.date_ended !== '3000-01-01T05:00:00.001Z' ? <h3>Ended: {formattedDateEnded}</h3> : ""}
                    {raffle.winner_name ? <h3>Winner: {raffle.winner_name}</h3> : ""}
                </div>
        </Link>
    )
}