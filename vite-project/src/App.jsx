import { useState } from 'react'
import Flashcard from './Flashcard'
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, front: 'What is the name of the biggest shark?', back: 'Whale shark' },
    { id: 2, front: 'How many humps does a Bactrian camel have?', back: 'Two humps' },
    { id: 3, front: 'What is the tallest mammal?', back: 'Giraffe' },
    { id: 4, front: 'What is the collective name for a group of lions?', back: 'Pride of lions' },
    { id: 5, front: 'Through what part of the body do dogs sweat?', back: 'Paw pads' },


  ]);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
///
  function handleInputChange(event) {
    setGuess(event.target.value);
    console.log("setguess has done this: " + guess)
  }

  function checkInput(flashcard) {
    if (guess === flashcards[0].back || guess === flashcards[1].back || guess === flashcards[2].back || guess === flashcards[3].back || guess === flashcards[4].back) {
      setFeedback('Correct!');
      console.log("c")
      console.log(guess)
    } else {
      setFeedback('Incorrect!');
      console.log("i")
      console.log(guess)

    }
  }
  
  function setFeedback(result){
    // Get the body element
    const body = document.querySelector('body');

    // Create a div element
    const div = document.createElement('div');

    // Set the text content of the div element
    div.textContent = result;

    // Add some styles to the div element
    div.style.backgroundColor = 'blue';
    div.style.color = 'white';
    div.style.padding = '10px';

    // Append the div element to the body element
    body.appendChild(div);

    // Remove the div element after 3 seconds
    setTimeout(() => {
        div.remove();
    }, 3000);

  }
///
  function handleNextClick() {
    if (currentFlashcardIndex === flashcards.length - 1) {
      setCurrentFlashcardIndex(0);
    } else {
      setCurrentFlashcardIndex(currentFlashcardIndex + 1);
    }
    setIsFlipped(false);
  }
  
  function handleBackClick() {
    if (currentFlashcardIndex === 0) {
      setCurrentFlashcardIndex(flashcards.length - 1);
    } else {
      setCurrentFlashcardIndex(currentFlashcardIndex - 1);
    }
    setIsFlipped(false);
  }
  

  function handleCardClick() {
    setIsFlipped(!isFlipped);
  }

  

  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <p>This is a flashcard app to test your skills on animals!</p>
      <p>Total of 5 cards</p>
      <Flashcard
        front={flashcards[currentFlashcardIndex].front}
        back={flashcards[currentFlashcardIndex].back}
        isFlipped={isFlipped}
        onCardClick={handleCardClick}
      />
      <div>
      <input className='next-button' type="text" value={guess} onChange={handleInputChange} />
      <button onClick={checkInput}>Submit</button>
      </div>
      <button className="next-button" onClick={handleNextClick}>Next</button>
      <button className="next-button" onClick={handleBackClick}>Back</button>
    </div>
    
  );
}



export default App