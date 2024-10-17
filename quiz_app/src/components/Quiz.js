import React, {useState,useContext} from 'react'
import { QuizContext } from '../Helper/Contexts'
import { Questions } from '../Helper/QuestionBank'

export default function Quiz() {
    const {score,setScore, gameState, setGameState} = useContext(QuizContext);
    const[currQue, setCurrQue] = useState(0)
    const[optionChosen, setOptionChosen] = useState("")

    const nextQue = () =>{
        if(Questions[currQue].answer == optionChosen){
            setScore(score+1)
        }
        setCurrQue(currQue+1)
    }

    const finishQuiz = () =>{
        if(Questions[currQue].answer == optionChosen){
            setScore(score+1)
        }
        setGameState('endScreen')
    }

  return (
    <div className='Quiz'>
      <h1>{Questions[currQue].prompt}</h1>
      <div className='options'>
        <button onClick={()=>setOptionChosen("A")}>{Questions[currQue].optionA}</button>
        <button onClick={()=>setOptionChosen("B")}>{Questions[currQue].optionB}</button>
        <button onClick={()=>setOptionChosen("C")}>{Questions[currQue].optionC}</button>
        <button onClick={()=>setOptionChosen("D")}>{Questions[currQue].optionD}</button>
      </div>
      {currQue == Questions.length-1 ? 
      <button onClick={finishQuiz}>Finish Quiz</button>
    :<button onClick={nextQue}>Next Question</button>}
    </div>
  )
}
