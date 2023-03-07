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

  function handleNextClick() {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentFlashcardIndex((prevIndex) => {
      return randomIndex === prevIndex ? (prevIndex + 1) % flashcards.length : randomIndex;
    });
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
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
}



export default App