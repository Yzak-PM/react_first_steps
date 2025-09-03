import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinner } from './logic/board.js'
import { WinnerTxt } from './components/WinnerTxt.jsx'
import './App.css'

function App() {
  //* Primera posicion = valor actual del estado
  //* 2da posicion = funcion que actualiza el estado
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')

    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (checkBoard) => {
    return checkBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return //@ Si en el board que se dio click ya hay algo, no hacer nada

    //@ Actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    //@ Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)


    //@ guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //@ Ver si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) //  empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>

      <section className='game'>
        {
          //& _ indica la primera posicion
          board.map((_, index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}>

                  {board[index]}

              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerTxt winner={winner}/>

      <section>
        <button onClick={resetGame}>Empezar de nuevo</button>
      </section>

    </main>
  )
}

export default App
