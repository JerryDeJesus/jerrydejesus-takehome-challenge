import { Link } from "react-router-dom";

export default function Winner ({winnerInfo}){
    // console.log(winnerInfo)
    return(
        <div>
            <div>
                {/* <Link to={`/${winner.id}`}> */}
                    <h3>Winner Name: {winnerInfo.winner_name}</h3>
                    <h3>Email Address: {winnerInfo.email}</h3>
                    <h3>Phone Number: {winnerInfo.phone}</h3>
                {/* </Link> */}
            </div>
        </div>
    )
}