import Raffle from "./Raffle.js";

export default function Raffles ({raffles}){

    let displayRaffles = raffles.map((raffle, index) => {
        return <Raffle key={index} raffle={raffle} />
    });

    return(
        <div>
            {displayRaffles}
        </div>
    )
}