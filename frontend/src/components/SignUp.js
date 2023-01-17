import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "./Input";
import { TextField } from "@mui/material";
import CustButton from "./Button";

const API = process.env.REACT_APP_API_URL;

export default function SignUp(){
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
        setParticipant({...participant, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let participantLink = `/${id}/participants`;

        axios.post(`${API}/tickets`, participant)
        .then(res => {
            let formattedName = participant.first_name[0].toUpperCase() + participant.first_name.slice(1) + ' ' + 
            participant.last_name[0].toUpperCase() + participant.last_name.slice(1);

            navigate(participantLink)
            toast(`${formattedName} has been added to the raffle.`)
        })
        .catch(err => {
            toast('Error adding participant to the raffle.')
            console.log(err)
        })
    };

    const handleReset = (e) => {
        e.preventDefault();
        setParticipant({
            raffle_id: id,
            first_name: "",
            last_name: "",
            email: "",
            phone: ""
        })
    }

    let { first_name, last_name, email, phone } = participant;

    return(
        <div className="signup">
            <form onSubmit={handleSubmit} className="new-participant-form">

                <h2 className="signup-heading">We just need a bit of information about you to sign you up!</h2>

                <div>
                    {Input('First Name', 'first_name', first_name, handleTextChange, 'standard')}
                    {Input('Last Name', 'last_name', last_name, handleTextChange, 'standard')}
                    {Input('Email', 'email', email, handleTextChange, 'standard')}

                    <div className="text-field">
                        <TextField
                            variant="standard"
                            margin="normal"
                            label="Phone Number(10 Digits only)"
                            inputProps={{ maxLength:10, style: { fontSize: 20, width:'550px'} }}
                            InputLabelProps={{
                            style: { fontSize: 20 },
                            }}
                            name="phone"
                            value={phone}
                            onChange={handleTextChange}
                            type="standard"
                            onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }}
                        />
                    </div>
                </div>
                <span className="signup-buttons">{CustButton(50,274,"primary",handleSubmit,'Join the Raffle')}</span>
                <span className="signup-buttons">{CustButton(50,274,"secondary",handleReset,'Reset')}</span>
            </form>
        </div>
    )
}