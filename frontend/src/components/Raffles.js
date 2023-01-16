import axios from "axios";
import { useState, useEffect } from "react";
import Raffle from "./Raffle.js";

export default function Raffles (){
    const [raffles, setRaffles] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(`${API}/raffles`)
            .then(res => {
                setRaffles(res.data)
            })
            .catch(error => console.log(error))
    }, [API]);

    let displayRaffles = raffles.map((raffle, index) => {
        console.log(raffle);
        return <Raffle key={index} raffle={raffle} />
    });

    return(
        <div>
            {displayRaffles}
        </div>
    )
}