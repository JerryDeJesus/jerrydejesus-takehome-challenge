import Raffle from "../components/Raffle";
import SignUp from "../components/SignUp";
// import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RaffleNav from "../components/RaffleNav";

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
            <h1>Register for raffle below:</h1>
            <RaffleNav />
            {!loadingStatus ? <Raffle raffle={raffleInfo}/> : "loading..."}
            <SignUp /> 
        </div>
    )
}