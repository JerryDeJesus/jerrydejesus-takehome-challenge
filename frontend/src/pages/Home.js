import Raffles from "../components/Raffles"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Home (){
    const [raffle, setRaffle] = useState({
        raffle_name: "",
        secret_token: ""
    })

    const navigate = useNavigate();

    let { raffle_name, secret_token } = raffle;

    const handleSubmit = (e) => {
        axios.post(`${API}/raffles`, raffle)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    };
 
    const handleTextChange = (e) => {
        setRaffle({...raffle, [e.target.id]: e.target.value})
    };

    return(
        <div id="home-page">
            <h1>Raffle Home</h1>
            <div className="create-raffle-box">
                <h2>Create a raffle here:</h2>
                <form onSubmit={handleSubmit} className="new-raffle-form">
                    <div>
                        <input 
                            id = "raffle_name" 
                            value = {raffle_name} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "Raffle Name"
                            required 
                            />
                    
                        <input 
                            id = "secret_token"
                            value = {secret_token} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "Secret Token/Password"
                            required
                            />
                    </div>

                    <button id='create-raffle-button' type="Submit" >
                        Create New Raffle
                    </button>
                </form>
            </div>
            <div className="all-raffles-box">
                <Raffles />
            </div>
        </div>
    )
}