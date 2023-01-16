import axios from "axios";
import { useState, useEffect } from "react";
import Participant from "./Participant";
import { useParams } from "react-router-dom";

export default function ParticipantList (){
    const [participants, setParticipants] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    let { id } = useParams();


    useEffect(()=>{

        axios.get(`${API}/raffles/${id}/participants`)
            .then(res => {
                setParticipants(res.data)
            })
            .catch(error => console.log(error))
    }, [API, id]);

    let displayParticipants = participants.map((participant, index) => {
        return <Participant key={index} participant={participant} />
    });

    return(
        <div>
            {displayParticipants}
        </div>
    )
}