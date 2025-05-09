
const Header = (props) => {
  return (
    <h1> {props.name}</h1>
  )
}

const Content = (props) =>{

  return(
    <>
    {props.parts.map(part =>{
      
      return <p>{part.name} {part.exercises}</p>
    })}
    </>
  )
}

const Total = (props) =>{


  return(
    <>
    <p>Total exercise: {props.parts.reduce((sum, part) => {    
      return sum + part.exercises},0)}</p>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <Header props={course.name}/>
     <Content parts={course.parts} />
     <Total parts={course.parts} />
    </div>
  )
}





export default App