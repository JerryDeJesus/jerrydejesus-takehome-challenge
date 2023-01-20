import Raffle from "../../components/Raffle";
import SignUp from "../../components/SignUp";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RaffleNav from "../../components/RaffleNav";
import "./RaffleDetailsAndSignUp.css";

const API = process.env.REACT_APP_API_URL;

export default function RaffleDetailsAndSignUp (){
    const [raffleInfo, setRaffleInfo] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/raffles/${id}`)
        .then((res)=> {
            if(res.data){
                setRaffleInfo(res.data)
                setLoadingStatus(false)
            } else {
                navigate("/not-found")
            }
        })
    }, [id, navigate]);

    return(
        <div id="raffle-details-and-signup-page">
            <h1 className="subtitle">Registration for {raffleInfo.raffle_name}</h1>

            <RaffleNav activePage={"Register"}/>

            {!loadingStatus ? <Raffle raffle={raffleInfo}/> : "Loading..."}

            {!loadingStatus ? raffleInfo.winner_name ? <h1 className="raffle-closed">Registration has closed, the raffle has ended.</h1> : <SignUp raffleInfo={raffleInfo}/> : "Loading..."}
        </div>
    )
}