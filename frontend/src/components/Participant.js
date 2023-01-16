export default function Participant ({participant}){
    let formattedName = participant.first_name[0].toUpperCase() + participant.first_name.slice(1) + ' ' + 
                        participant.last_name[0].toUpperCase() + participant.last_name.slice(1);

    return(
        <div>
            <div>
                <h3>Ticket ID:{participant.id}</h3>
                <h3>Participant Name: {formattedName}</h3>
                <h3>Email: {participant.email}</h3>
                <h3>Phone: {participant.phone || "None"}</h3>
            </div> 
        </div>
    )
}