import { useState } from 'react'

const App = () => {
  
  const [selected, setSelected] = useState(1)
  const [votes, setVotes] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  });


  const anecdotes = {
    1: 'If it hurts, do it more often.',
    2: 'Adding manpower to a late software project makes it later!',
    3: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    4: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    5: 'Premature optimization is the root of all evil.',
    6: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    7: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    8: 'The only way to go fast, is to go well.'
  };

  const HandleVotesClick =()=>{
    const copy = {...votes};
    copy[selected] += 1;
    setVotes(copy);
  }
   

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <h3>{anecdotes[selected]}</h3>
      <h4>Votes: {votes[selected]}</h4>
      <Button onClick={() => setSelected(Math.floor(Math.random() * 8) +1)} text={"Next Anecdote"} style={{margin: "10px", backgroundColor: "lightblue" }}/>
      <Button onClick={HandleVotesClick} text={"vote"}  style={{margin: "10px", backgroundColor: "lightgreen" }}/>

      <h1>Anecdote with most votes</h1>
      <h3>{anecdotes[Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)]}</h3>
      <h4>Votes: {votes[Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)]}</h4> 
    </div>
  )
}


const Button =({text,onClick, style})=>{

  return(
    <button onClick={onClick} style={style}> 
    {text}
    </button>
  )
}



export default App