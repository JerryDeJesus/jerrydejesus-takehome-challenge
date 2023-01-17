import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WinnerCard from "../../components/WinnerCard";
import SelectWinner from "../../components/SelectWinner";
import "./WinnerPage.css";

const API = process.env.REACT_APP_API_URL;

export default function WinnerPage (){
    const [winnerInfo, setWinnerInfo] = useState([]);

    const { id } = useParams();

    useEffect(()=>{
        
        axios.get(`${API}/raffles/${id}/winner`)
        .then((res)=> {
            if(res.data.winner_name !== undefined){
                setWinnerInfo(res.data)
            } 
        })
        .catch(err => console.log(err))
    }, [id]);

    //if no winner is found, use select winner component
        return(
            <div id="winner-page">
                {winnerInfo.winner_name ? <WinnerCard winnerInfo={winnerInfo}/>: <SelectWinner />}
            </div>
        )
    }