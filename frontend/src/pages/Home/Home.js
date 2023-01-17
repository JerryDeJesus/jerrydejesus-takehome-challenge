import Raffles from "../../components/Raffles"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import CustButton from "../../components/Button";
import Input from "../../components/Input";
import './Home.css';

const API = process.env.REACT_APP_API_URL;

export default function Home (){
    const [allRaffles, setAllRaffles] = useState([]);
    const [raffle, setRaffle] = useState({
        raffle_name: "",
        secret_token: ""
    })

    let loadRaffles = ()=>{
        axios.get(`${API}/raffles`)
            .then(res => {
                setAllRaffles(res.data.reverse())
            })
            .catch(error => console.log(error))
    };

    useEffect(loadRaffles, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`${API}/raffles`, raffle)
        .then(res => {
            toast('Raffle successfully created!')
            loadRaffles();
        })
        .catch(err => {
            toast(err.response.data.error + ', please double check fields.')
            console.log(err)
        })
    };
    
    const handleTextChange = (e) => {
        setRaffle({...raffle, [e.target.name]: e.target.value})
    };

    let { raffle_name, secret_token } = raffle;

    return(
        <div id="home-page">
            <h1 className="title">Raffle App</h1>

            <div className="create-raffle-box">
                <form onSubmit={handleSubmit} className="new-raffle-form">
                    <h2>Create a raffle below:</h2>
                    <div>
                        {Input('Raffle Name', 'raffle_name', raffle_name, handleTextChange,'standard')}
                        {Input('Secret Token/Password', 'secret_token', secret_token, handleTextChange, 'password')}
                    </div>
                    <div style={{ marginBottom: 10 }}>You will need to remember the secret token to be able to end the raffle!</div>
                    {CustButton(50, 560, "primary", handleSubmit, 'Create New Raffle')}
                </form>
            </div>

            <div className="all-raffles-box">
                <h2>All Raffles:</h2>
                <Raffles raffles={allRaffles}/>
            </div>
        </div>
    )
}