import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function NewParticipantForm(){
    const { id } = useParams();

    const [participant, setParticipant] = useState({
        raffle_id: id,
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
    });
        
    const navigate = useNavigate();

    const handleTextChange = (e) => {
        setParticipant({...participant, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let participantLink = `/${id}/participants`;
        axios.post(`${API}/tickets`, participant)
            .then(res => navigate(participantLink))
            .catch(err => console.log(err))
    };

    let { first_name, last_name, email, phone } = participant;

    return(
        <div className="newForm">
                <form onSubmit={handleSubmit} className="new-Participant-form">

                    <h3 className="signup-heading">We just need a bit of information about you to sign you up!</h3>

                    <div>
                        <input 
                            id = "first_name" 
                            value = {first_name} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "First Name"
                            required 
                            />
                    
                        <input 
                            id = "last_name"
                            value = {last_name} 
                            type = "text" 
                            onChange = {handleTextChange} 
                            placeholder = "Last Name"
                            required
                            />
                    </div>

                        <input 
                            id = "email"
                            value = {email} 
                            type = "email" 
                            onChange = {handleTextChange} 
                            placeholder = "Email"
                            required
                            />
                    
                        <input 
                            id = "phone"
                            value = {phone} 
                            type = "tel" 
                            onChange = {handleTextChange} 
                            placeholder = "10-Digit Phone Number(Numbers Only)"
                            maxLength={10}
                            />

                    <button id='join-raffle-button' type="Submit" >
                        Join the Raffle!
                    </button>
                </form>
        </div>
    )
}