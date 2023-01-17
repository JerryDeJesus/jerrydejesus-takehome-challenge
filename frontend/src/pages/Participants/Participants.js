import ParticipantList from '../../components/ParticipantList';
import RaffleNav from '../../components/RaffleNav';
import "./Participants.css";

export default function ShowParticipants (){
  
    return(
        <div id="participants-page">
            <h1 className='subtitle'>Raffle Participants</h1>
            <RaffleNav activePage={'Participants'}/>
            <ParticipantList />
        </div>
    )
}