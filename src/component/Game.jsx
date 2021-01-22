

import React, {useState} from 'react';
import Board from './Board'
import Square from './Square'
import calculateWinner from '../CalculateWinner'

export default function Game(){
    const [board, setBoard]= useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

   const handleClick = i=>{
       const boardCopy = [...board]
       if(winner || boardCopy[i]) return 
       boardCopy[i] = xIsNext? 'X' : 'O'
       setBoard(boardCopy);
       setXisNext(!xIsNext);
   }
   const resetGame = ()=>(
       <button onClick = {()=>setBoard(Array(9).fill(null))} >Reset</button>
   )
   
   const baseButtonContent = winner ? `We have a winer: ${winner}`: `Next Player: ${xIsNext?'X':'O'}` 
 
   
       
    return (
        <div>
            <Board onClick = {handleClick} squares = {board} />
            <p>{baseButtonContent}</p>
            {resetGame()}
        </div>
    )
}