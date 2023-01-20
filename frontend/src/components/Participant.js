export default function Participant ({participant}){
    
    let formattedPhone = `(${participant.phone.slice(0,3)}) ${participant.phone.slice(3,6)}-${participant.phone.slice(6)}`;

    return(
        <div className="participant-info">
                <div className="participant-display ticket-number">Ticket Number: {participant.id}</div>
                <div className="participant-display">Participant Name: {participant?.first_name} {participant?.last_name}</div>
                <div className="participant-display">Email: {participant.email}</div>
                <div className="participant-display">Phone: {participant.phone ? formattedPhone : "No phone number provided."}</div>
        </div>
    )
}