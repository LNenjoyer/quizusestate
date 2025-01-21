import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  // const [isSpoilerShown, setIsSpoilerShown] = useState(false); 
  // const [isWarningShown, setIsWarningShown] = useState(true); 
  const [isYes, setIsYes] = useState(false); 
  const [isNo, setIsNo] = useState(false); 

  function handleShowSpoilerClick() { 
    setIsSpoilerShown(true); 
    setIsWarningShown(false); 
  } 
  function handleYes() { 
    setIsNo(false); 
    setIsYes(true);
  } 
  function handleNo() { 
    setIsYes(false); 
    setIsNo(true); 
  } 
  return ( 
    <> 
    <p>Pytanie quizu nr xd</p>

      {isYes ? ( 
        <p>Poprawmie</p> 
      ) : ( 
        <button onClick={handleYes}>Yes</button> 
        
      )} 
      {isNo ? ( 
        <p>Jeszcze raz</p> 
      ) : ( 
        <button onClick={handleNo}>Yes</button> 
        
      )} 
      
    </> 
  ); 
} 

export default App
