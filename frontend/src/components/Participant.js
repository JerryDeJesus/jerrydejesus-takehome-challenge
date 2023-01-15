// import { Link } from "react-router-dom";

export default function Participant ({participant}){
    return(
        <div>
            bing
            <div>
                <h3>Participant ID:{participant.id}</h3>
                <h3>Participant Name: {participant.first_name + participant.last_name}</h3>
                <h3>Email: {participant.email}</h3>
                <h3>Phone: {participant.phone || ""}</h3>
            </div> 
        </div>
    )
}