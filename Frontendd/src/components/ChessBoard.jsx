// import React, { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import Chess from 'chess.js'; // For move validation
// import '../css/ChessBoard.css';
// import whitePawn from '../images/w_p.png';
// import whiteRook from '../images/w_r.png';
// import whiteKnight from '../images/w_n.png';
// import whiteBishop from '../images/w_b.png';
// import whiteQueen from '../images/w_q.png';
// import whiteKing from '../images/w_k.png';
// import blackPawn from '../images/b_p.png';
// import blackRook from '../images/b_r.png';
// import blackKnight from '../images/b_n.png';
// import blackBishop from '../images/b_b.png';
// import blackQueen from '../images/b_q.png';
// import blackKing from '../images/b_k.png';
 
// const PIECE = 'piece';

// const pieceImages = {
//   w_p: whitePawn,
//   w_r: whiteRook,
//   w_k: whiteKnight,
//   w_b: whiteBishop,
//   w_q: whiteQueen,
//   w_k: whiteKing,
//   b_p: blackPawn,
//   b_r: blackRook,
//   b_k: blackKnight,
//   b_b: blackBishop,
//   b_q: blackQueen,
//   b_k: blackKing,
// };

 
// // Piece component for drag-and-drop functionality
// const Piece = ({ type, position }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: PIECE,
//     item: { type, position },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });
 
//   const pieceImage= pieceImages[type];
//   return (
//     <img
//       ref={drag}
//       src={pieceImage} // Adjusted to load from 'src/images'
//       alt={type}
//       className="piece"
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     />
//   );
// };
 
// // Square component for handling piece dropping
// const Square = ({ x, y, piece, movePiece }) => {
//   const [, drop] = useDrop({
//     accept: PIECE,
//     drop: (item) => movePiece(item.position, `${x}-${y}`),
//   });
 
//   const isWhite = (x + y) % 2 === 0;
//   return (
//     <div
//       ref={drop}
//       className={`square ${isWhite ? 'white-square' : 'black-square'}`}
//     >
//       {piece && <Piece type={piece} position={`${x}-${y}`} />}
//     </div>
//   );
// };
 
// const ChessBoard = () => {
//   const [game, setGame] = useState(new Chess()); // Chess.js instance
//   const [board, setBoard] = useState(createBoardFromFEN(game.fen())); // Initial board from FEN
  
 
//   // Function to update the board state
//   const movePiece = (fromPosition, toPosition) => {
//     const from = convertPosition(fromPosition);
//     const to = convertPosition(toPosition);
 
//     const move = game.move({
//       from,
//       to,
//     });
 
//     if (move) {
//       setBoard(createBoardFromFEN(game.fen())); // Update board if move is valid
//     } else {
//       alert("Invalid move!"); // Invalid move feedback
//     }
//   };
 
//   // Function to convert x-y coordinates into chess notation (e.g., 0-0 => 'a8')
//   const convertPosition = (position) => {
//     const [x, y] = position.split('-').map(Number);
//     const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//     const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
//     return `${files[x]}${ranks[y]}`;
//   };
 
//   // Function to create board state from FEN (Forsyth-Edwards Notation)
//   const createBoardFromFEN = (fen) => {
//     const boardArray = game.board();
//     const boardState = {};
//     boardArray.forEach((row, rowIndex) => {
//       row.forEach((piece, colIndex) => {
//         if (piece) {
//           boardState[`${colIndex}-${rowIndex}`] = `${piece.color}_${piece.type}`;
//         }
//       });
//     });
//     return boardState;
//   };
 
//   const renderSquares = () => {
//     const squares = [];
//     for (let row = 0; row < 8; row++) {
//       for (let col = 0; col < 8; col++) {
//         const key = `${col}-${row}`;
//         squares.push(
//           <Square
//             key={key}
//             x={col}
//             y={row}
//             piece={board[key]}
//             movePiece={movePiece}
//           />
//         );
//       }
//     }
//     return squares;
//   };
 
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="chessboard">{renderSquares()}</div>
//     </DndProvider>
//   );
// };
 
// export default ChessBoard;
 