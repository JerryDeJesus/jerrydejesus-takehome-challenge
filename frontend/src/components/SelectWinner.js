import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RaffleNav from "./RaffleNav";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Input from "./Input";
import Confetti from 'react-confetti';
import { toast } from 'react-toastify';

const API = process.env.REACT_APP_API_URL;

export default function SelectWinner (){
    const [secret_token, setSecret_token] = useState("");
    const [raffleOver, setRaffleOver] = useState(false)
    const { id } = useParams();

    const handleSubmit = () => {

      axios.put(`${API}/raffles/${id}/winner`, {id, secret_token})
          .then(res => {
            setRaffleOver(true)

          })
          .catch(err => {
            toast(`${err.response.data.error}, please double-check your secret token.`)
          });
      axios.put(`${API}/raffles/${id}`)
    };

    const handleTextChange = (e) => {
        setSecret_token(e.target.value)
    };

    return(
      <div id="winner-select-page">
        {raffleOver ? <Confetti width={window.width}/> : ""}
          <h1 className="title">Pick a Winner</h1>

          <RaffleNav activePage={'Winner'}/>

          <form onSubmit={handleSubmit} className="secret-token-form">
            {Input('Secret Token/Password', 'secret_token', secret_token, handleTextChange, 'password')}

            <Button
                sx={{
                  height: 50,
                  // width: 200,
                }}
                variant="contained"
                size="large"
                color="success"
                onClick={handleSubmit}
              >
                Pick a Winner
            </Button>
          </form>
      </div>
    )
}

// const colorButton = styled(Button)(({ theme }) => ({
//     color: "rgb(241, 250, 238)",
//     backgroundColor: "rgb(69, 123, 157)",
//     "&:hover": {
//       backgroundColor: "rgb(29, 53, 87)",
//     },
//   }));