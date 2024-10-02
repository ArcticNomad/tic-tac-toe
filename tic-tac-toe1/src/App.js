import './App.css';
import {useState} from "react";
import Square from "./components/Square";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setXNext] = useState(true);
    const [status, setStatus] = useState('Next player: X');

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const temp = squares.slice();
        temp[i] = isXNext ? 'X' : 'O';
        setSquares(temp);
        setXNext(!isXNext);

        const winner = calculateWinner(temp);
        if (winner) {
            setStatus("Winner: " + winner);
        } else {
            setStatus('Next player: ' + (isXNext ? 'O' : 'X'));
        }
    }

    function calculateWinner(squares) {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function onReset()
    {
        setStatus('Next player: X');
        setXNext(true);
        setSquares(Array(9).fill(null));
    }

    return (
        <>
            <h1 id="title">Tic Tac Toe</h1>
            <h1>{status}</h1>
            <div className="Board">
                <div className="board-row">
                    <Square onClick={() => handleClick(0)} value={squares[0]} />
                    <Square onClick={() => handleClick(1)} value={squares[1]} />
                    <Square onClick={() => handleClick(2)} value={squares[2]} />
                </div>

                <div className="board-row">
                    <Square onClick={() => handleClick(3)} value={squares[3]} />
                    <Square onClick={() => handleClick(4)} value={squares[4]} />
                    <Square onClick={() => handleClick(5)} value={squares[5]} />
                </div>

                <div className="board-row">
                    <Square onClick={() => handleClick(6)} value={squares[6]} />
                    <Square onClick={() => handleClick(7)} value={squares[7]} />
                    <Square onClick={() => handleClick(8)} value={squares[8]} />
                </div>
            </div>
            <div className="pop">
            <button className="reset" onClick={onReset}>Reset</button>

            </div>
        </>
    )
}

export default Board;
