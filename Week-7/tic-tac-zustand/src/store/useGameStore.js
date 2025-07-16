import { create } from "zustand";

const initialBoard = Array(9).fill(null);

export const useGameStore = create((set) => ({
  board: initialBoard,
  currentPlayer: "X",
  winner: null,

  makeMove: (index) =>
    set((state) => {
      if (state.board[index] || state.winner) return state; // invalid move

      const newBoard = [...state.board];
      newBoard[index] = state.currentPlayer;

      const winner = calculateWinner(newBoard);

      return {
        board: newBoard,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
        winner,
      };
    }),

  resetGame: () =>
    set(() => ({
      board: initialBoard,
      currentPlayer: "X",
      winner: null,
    })),
}));

// helper
function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
