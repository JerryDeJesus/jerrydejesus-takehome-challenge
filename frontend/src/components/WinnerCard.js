export default function Winner ({winnerInfo}){

    let formattedPhone = `(${winnerInfo.phone.slice(0,3)}) ${winnerInfo.phone.slice(3,6)}-${winnerInfo.phone.slice(6)}`;

    return(
        <div>
            <div>
                <h3>Winner Name: {winnerInfo.winner_name}</h3>
                <h3>Email Address: {winnerInfo.email}</h3>
                <h3>Phone: {formattedPhone !== "() -" ? formattedPhone : "No phone number provided."}</h3>
            </div>
        </div>
    )
}