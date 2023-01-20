import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RaffleNav from "./RaffleNav";
import Input from "./Input";
import { toast } from 'react-toastify';
import CustButton from "./Button";

const API = process.env.REACT_APP_API_URL;

export default function SelectWinner (){
    const [secret_token, setSecret_token] = useState("");
    const { id } = useParams();

    const handleSubmit = () => {
      axios.put(`${API}/raffles/${id}/winner`, {id, secret_token})
          .then(res => {
            //simple frontend password verification/popup message
            if(res.data.winner_name === undefined || res.data.winner_name === ''){
              toast(`Incorrect secret token, try again.`);
            }else{
                window.location.reload();
            }
          })
          .catch(err => {
            console.log(err)
          });
    };

    const handleTextChange = (e) => {
        setSecret_token(e.target.value)
    };

    return(
      <div id="winner-select-page">
          <h1 className="subtitle">Pick a Winner</h1>

          <RaffleNav activePage={'Winner'}/>

          <form onSubmit={handleSubmit} className="secret-token-form">
            {Input('Secret Token/Password', 'secret_token', secret_token, handleTextChange, 'password')}
            {CustButton(50, 200, "primary", handleSubmit, 'Pick a Winner')}
          </form>
      </div>
    )
}