import ParticipantList from '../components/ParticipantList';
import RaffleNav from '../components/RaffleNav';

export default function ShowParticipants (){
  
    return(
        <div id="participants-page">
            <h1>Raffle Participants</h1>
            <RaffleNav />
            <ParticipantList />
        </div>
    )
}