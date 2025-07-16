// src/components/Board.jsx
import { useGameStore } from "../store/useGameStore";

export default function Board() {
  const { board, makeMove, winner, resetGame } = useGameStore();

  return (
    <div className="game-container">
      <div className="board">
        {board.map((cell, idx) => (
          <button
            key={idx}
            className="cell"
            onClick={() => makeMove(idx)}
            disabled={!!cell || winner}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner && <h2>{winner} wins!</h2>}
      {!winner && !board.includes(null) && <h2>Draw!</h2>}
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}
