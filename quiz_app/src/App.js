import './App.css';
import {useState, useContext} from 'react';
import { QuizContext } from './Helper/Contexts';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen'

function App() {
  const[gameState, setGameState] = useState('menu');
  const[score, setScore] = useState(0);

  return (
    <div className="App">
     <h1>Quiz App</h1>
     <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
     {gameState === 'menu' && <Menu/>}
     {gameState === 'quiz' && <Quiz/>}
     {gameState === 'endScreen' && <EndScreen/>}
     </QuizContext.Provider>
     

    </div>
  );
}

export default App;
