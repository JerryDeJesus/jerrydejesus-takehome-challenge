export default function Participant ({participant}){
    let formattedName = participant.first_name[0].toUpperCase() + participant.first_name.slice(1) + ' ' + 
                        participant.last_name[0].toUpperCase() + participant.last_name.slice(1);
    
    let formattedPhone = `(${participant.phone.slice(0,3)}) ${participant.phone.slice(3,6)}-${participant.phone.slice(6)}`;

    return(
        <div className="participant-info">
                <div className="participant-display ticket-number">Ticket Number: {participant.id}</div>
                <div className="participant-display">Participant Name: {formattedName}</div>
                <div className="participant-display">Email: {participant.email}</div>
                <div className="participant-display">Phone: {formattedPhone !== "() -" ? formattedPhone : "No phone number provided."}</div>
        </div>
    )
}