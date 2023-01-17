import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WinnerCard from "../components/WinnerCard";
import SelectWinner from "../components/SelectWinner";
import RaffleNav from "../components/RaffleNav";
import { toast } from 'react-toastify';

const API = process.env.REACT_APP_API_URL;

export default function WinnerPage (){
    const [winnerInfo, setWinnerInfo] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const { id } = useParams();

    useEffect(()=>{
        
        axios.get(`${API}/raffles/${id}/winner`)
        .then((res)=> {
            if(res.data){
                setWinnerInfo(res.data)
                setLoadingStatus(false)
            } 
        })
        .catch(err => console.log(err))
    }, [id]);
    
    //if no winner is found, use alternate display
    if(!winnerInfo.winner_name){
        return <SelectWinner />
    }else{ // if there is a winner,
        return(
            <div id="winner-select-page">
                <h1 className="title">Winner</h1>
                <RaffleNav activePage={'Winner'}/>
                {!loadingStatus ? <WinnerCard winnerInfo={winnerInfo}/> : "Loading..."}
            </div>
        )
    }
}