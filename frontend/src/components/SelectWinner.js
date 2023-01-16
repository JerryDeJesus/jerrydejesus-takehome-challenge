import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RaffleNav from "./RaffleNav";

const API = process.env.REACT_APP_API_URL;


export default function SelectWinner (){
    const [secret_token, setSecret_token] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        axios.put(`${API}/raffles/${id}/winner`, {id, secret_token})
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    };

    const handleTextChange = (e) => {
        setSecret_token(e.target.value)
    };

    return(
        <div>
            <RaffleNav />
            Pick a winner
            <form onSubmit={handleSubmit} className="secret-token-form">
                    <div>
                        <input 
                            id = "secret_token" 
                            value = {secret_token} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "Secret Token"
                            required 
                            />
                    </div>

                    <button id='select-winner-button' type="Submit" >
                        Pick a Winner
                    </button>
                </form>
        </div>


    )
}