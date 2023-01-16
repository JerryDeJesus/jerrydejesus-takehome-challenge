import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

export default function Raffle ({raffle}){
    // console.log(raffle)
    let formattedDateStarted = format(parseISO(raffle.date_created), "MM/dd/yyyy hh:mm aaaaa'm'");
    let formattedDateEnded = format(parseISO(raffle.date_ended), "MM/dd/yyyy hh:mm aaaaa'm'");

    return(
        <div>
            <div>
                <Link to={`/${raffle.id}`}>
                    <h3>Raffle ID:{raffle.id}</h3>
                    <h3>Raffle Name: {raffle.raffle_name}</h3>
                    <h3>Created: {formattedDateStarted}</h3>
                    <h3>Ended: {formattedDateEnded}</h3>
                    <h3>Winner: [John Smith]</h3>
                </Link>
            </div>
        </div>
    )
}