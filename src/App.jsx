import{useState} from 'react'
import './App.css'


export default function App(){
    const[board, setBoard] = useState(Array(9).fill(null))
    const[isTurnX, setIsTurnX] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        if(board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = isTurnX ? 'X' : 'O';
        setBoard(newBoard);
        setIsTurnX(!isTurnX);
    };
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsTurnX(true);
    };
    return (
        <div className="app">
            <h1>Tic Tac Toe</h1>
            <div className="status">
                {winner ? `Winner: ${winner}` : `Next player: ${isTurnX ? 'X' : 'O'}`}
            </div>
            <div className="board">
                {board.map((cell, index) => (
                    <button key={index} onClick={() => handleClick(index)} className="cell">
                        {cell}
                    </button>
                ))}
            </div>
            <button onClick={resetGame} className="reset-button">Reset Game</button>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],  
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}
