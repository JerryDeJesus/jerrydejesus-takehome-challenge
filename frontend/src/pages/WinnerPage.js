import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WinnerCard from "../components/WinnerCard";
import SelectWinner from "../components/SelectWinner";
import RaffleNav from "../components/RaffleNav";

const API = process.env.REACT_APP_API_URL;

export default function WinnerPage (){
    const [winnerInfo, setWinnerInfo] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/raffles/${id}/winner`)
        .then((res)=> {
            if(res.data){
                setWinnerInfo(res.data)
                setLoadingStatus(false)
                // console.log('blah')
            } 
            // else navigate("/not-found")
        })
        .catch(err => console.log(err))
    }, [id]);

    console.log(winnerInfo.length !== undefined || winnerInfo.length !== 0, winnerInfo)

    

    //if no winner is found, use alternate display
    if(!winnerInfo.winner_name){
        return <SelectWinner />
    }else{ // if there is a winner,
        return(
            <div id="winner-select-page">
                <h1>Winner:</h1>
                <RaffleNav />
                {!loadingStatus ? <WinnerCard winnerInfo={winnerInfo}/> : "loading..."}
            </div>
        )
    }
}
