// import { useState } from 'react';


// // function Square() {

// //   const [value, setValue] = useState(null);

// //   function handleClick() {
// //     setValue('X');
// //   }
// //   return (
// //     <button
// //       className="square"
// //       onClick={handleClick}
// //     >
// //       {value}
// //     </button>
// //   );}

// function Square({value, onSquareClick}) {
//   return <button className="square" onClick={onSquareClick}>{value}</button>;
// }


// function Board({ xIsNext, squares, onPlay }) {

//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }
//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)}  />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     // TODO
//   }
//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     console.log(squares[a])
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// 1) export default


// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }

// 2) return


// export default function Profile() {
//   return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
// }


// 3) Spot the mistake 

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// 4) Exporting and importing a component 

// import Gallery from './Gallery.js';

// export default function App() {
//   return (
//     <Gallery />
//   );
// }

// 5) Exporting and importing a component 


// import Gallery from './Gallery.js';
// import { Profile } from './Profile.js';

// export default function App() {
//   return (
//     <div>
//       <Profile />
//       <Gallery />
//     </div>
//   );
// }

// 7) Passing Props to a Component

// import { getImageUrl } from './utils.js';

// function Profile({
//   imageId,
//   name,
//   profession,
//   awards,
//   discovery,
//   imageSize = 70
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li><b>Profession:</b> {profession}</li>
//         <li>
//           <b>Awards: {awards.length} </b>
//           ({awards.join(', ')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal'
//         ]}
//       />
//       <Profile
//         imageId='YfeOqp2'
//         name='Katsuko Saruhashi'
//         profession='geochemist'
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ]}
//       />
//     </div>
//   );
// }


// 8) Passing Props to a Component


// function Card({ children }) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card>
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card>
//         <h1>About</h1>
//         <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//       </Card>
//     </div>
//   );
// }

// 9) Conditional Rendering

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? '✔' : '❌'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }


// 10) Rendering Lists




// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <h2>Chemists</h2>
//       <ul>
//         {chemists.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//       <h2>Everyone Else</h2>
//       <ul>
//         {everyoneElse.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//     </article>
//   );
// }


// 11) error useState


// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }