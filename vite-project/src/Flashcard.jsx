import { useState } from 'react'
import './App.css'



function Flashcard(props) {
  return (
    <div className={`flashcard ${props.isFlipped ? 'flipped' : ''}`} onClick={props.onCardClick}>
      <div className="flashcard-content">
        <div className="flashcard-front">
          <h2>{props.front}</h2>
        </div>
        <div className="flashcard-back">
          <h2>{props.back}</h2>
        </div>
      </div>
    </div>
  );
}
export default Flashcard;