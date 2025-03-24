import { useState } from "react";

const App =() =>{

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0); 


  return(

    <div style={{margin: "10px"}}>
      <h1>Give Feedback</h1>
      <Button onClick={() =>setGood(good+1)} text={"Good"}  style={{margin: "10px", backgroundColor: "lightgreen" }}/>
      <Button onClick={() =>setNeutral(neutral+1)} text={"neutral"}  style={{margin: "10px", backgroundColor: "" }}/>
      <Button onClick={() =>setbad(bad+1)} text={"bad"}  style={{margin: "10px", backgroundColor: "red" }}/>
      <Statistics props={{good, neutral, bad}}/>

    </div>
  )

}

const Statistics =({props}) =>{

  if(props.good ===0 && props.neutral ===0 && props.bad ===0){
    return(
      <div style={{margin: "10px"}}>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </div>
    )
  }
  return (
    <div style={{ margin: "10px" }}>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>All:</td>
            <td>{props.good + props.neutral + props.bad}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td>
          </tr>
          <tr>
            <td>Positive Percentage:</td>
            <td>{(props.good / (props.good + props.neutral + props.bad))*100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}

const Button =({text,onClick, style})=>{

  return(
    <button onClick={onClick} style={style}> 
    {text}
    </button>
  )
}

export default App;