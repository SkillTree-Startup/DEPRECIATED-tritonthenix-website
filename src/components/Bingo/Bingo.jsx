import React, { useState, useEffect } from 'react';
import styles from './Bingo.module.css';

const Bingo = ({ rows = 3, cols = 3, tasks = [], verificationCode = "2022", onComplete }) => {
  const [selectedCells, setSelectedCells] = useState(
    Array(rows).fill().map(() => Array(cols).fill(false))
  );
  const [showModal, setShowModal] = useState(false);
  const [currentTile, setCurrentTile] = useState(null);
  const [inputCode, setInputCode] = useState('');

  // Retrieve bingo completion state from local storage
  useEffect(() => {
    const savedState = localStorage.getItem('bingoCompleted');
    if (savedState) {
      setSelectedCells(JSON.parse(savedState));
    }
  }, []);

  const toggleCell = (row, col) => {
    setCurrentTile({ row, col });
    setShowModal(true);
  };

  const handleCodeChange = (e) => {
    setInputCode(e.target.value);
  };

  const verifyCode = () => {
    if (inputCode === verificationCode) {
      const newSelectedCells = [...selectedCells];
      newSelectedCells[currentTile.row][currentTile.col] = true;
      setSelectedCells(newSelectedCells);
      setShowModal(false);

      // Save bingo state to local storage
      localStorage.setItem('bingoCompleted', JSON.stringify(newSelectedCells));

      // Check if all cells are selected
      if (newSelectedCells.flat().every(cell => cell)) {
        setTimeout(() => {
          window.open('https://docs.google.com/forms/d/e/1FAIpQLSdZ05SXck4mhvckm-EuyqrvNI28QXCQcXIanAKA1wzQ1aUgaw/viewform?usp=sf_link', '_blank');
          onComplete(); // Call the onComplete callback to return to Hero
        }, 500); // Optional: Add delay to ensure the form opens before returning
      }
    } else {
      alert('Incorrect code. Please try again.');
    }
    setInputCode('');
  };

  return (
    <section className={styles.bingo}>
      <div className={styles.grid}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`${styles.cell} ${selectedCells[rowIndex][colIndex] ? styles.selected : ''}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            >
              {tasks[rowIndex * cols + colIndex] || 'Task'} {/* Display task or default text */}
            </div>
          ))
        ))}
      </div>
      <div className={styles.textContainer}>
        <h1>BINGO!</h1>
        <p>Complete tasks on the bingo card to connect with the club and start your journey with us!</p>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Enter Verification Code</h2>
            <input
              type="text"
              value={inputCode}
              onChange={handleCodeChange}
              placeholder="Verification Code"
            />
            <button onClick={verifyCode}>Submit</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Bingo;
