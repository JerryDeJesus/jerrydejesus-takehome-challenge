import axios from "axios";
import { useState, useEffect } from "react";
import Participant from "./Participant";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ParticipantList (){
    const [participants, setParticipants] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    let { id } = useParams();

    useEffect(()=>{
        axios.get(`${API}/raffles/${id}/participants`)
            .then(res => {
                setParticipants(res.data)
                setLoadingStatus(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [API, id]);

    let displayParticipants = participants.map((participant, index) => {
        return <Participant key={index} participant={participant} />
    });

    let noParticipants = 
    <h1 className="no-participants">No participants yet!</h1>

    
    return(
        <div className="participant-container">
            {loadingStatus ? "Loading..." : participants.length ? displayParticipants : noParticipants}
        </div>
    )
}