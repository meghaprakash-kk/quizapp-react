import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helper/Contexts'
import { Questions } from '../Helper/QuestionBank';

export default function EndScreen() {
    const{score, setScore, setGameState} = useContext(QuizContext);

    const restartQuiz = ()=>{
        setGameState('menu');
        setScore(0);
    }

  return (
    <div className='EndScreen'>
        <h1>Quiz Over!</h1>
        <h3>Your score is {score}/{Questions.length}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}
