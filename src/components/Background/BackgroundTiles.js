import React, { useEffect, useState } from 'react';
import './BackgroundTiles.css'; // Import your CSS for styling

const BackgroundTiles = () => {
  // Replace these with your actual SVG imports
  const svgFiles = [
    require('../../assets/svg/Dips.svg').default,
    require('../../assets/svg/Flag.svg').default,
    require('../../assets/svg/Handstand.svg').default,
    require('../../assets/svg/IronCross.svg').default,
    require('../../assets/svg/JumpRope.svg').default,
    require('../../assets/svg/LSitHang.svg').default,
    require('../../assets/svg/Planche.svg').default,
    require('../../assets/svg/PullUp.svg').default,
    require('../../assets/svg/PushUp.svg').default,
    require('../../assets/svg/Squat.svg').default,
    require('../../assets/svg/VSit.svg').default,
    // Add all your SVG imports here
  ];

  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // Function to calculate number of rows and columns based on viewport size
    const calculateGrid = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const iconWidth = 30; // Adjust based on your icon size
      const iconHeight = 30; // Adjust based on your icon size

      const calculatedCols = Math.ceil(vw / iconWidth);
      const calculatedRows = Math.ceil(vh / iconHeight);

      setNumCols(calculatedCols);
      setNumRows(calculatedRows);
    };

    // Calculate grid initially and on window resize
    calculateGrid();
    window.addEventListener('resize', calculateGrid);

    return () => {
      window.removeEventListener('resize', calculateGrid);
    };
  }, []);

  useEffect(() => {
    const createShuffledTiles = () => {
      const totalIcons = numRows * numCols;
      const iconCount = svgFiles.length;
      const fullSets = Math.ceil(totalIcons / iconCount);
      const shuffledIcons = [];

      // Generate the required number of full sets
      for (let i = 0; i < fullSets; i++) {
        const set = [...svgFiles].sort(() => Math.random() - 0.5);
        shuffledIcons.push(...set);
      }

      const newTiles = Array(numRows).fill(null).map(() => Array(numCols).fill(null));
      const isValidPosition = (row, col, icon) => {
        const directions = [
          [-1, 0], [1, 0], [0, -1], [0, 1]
        ];

        return directions.every(([dRow, dCol]) => {
          const newRow = row + dRow;
          const newCol = col + dCol;
          return (
            newRow < 0 ||
            newRow >= numRows ||
            newCol < 0 ||
            newCol >= numCols ||
            newTiles[newRow][newCol] !== icon
          );
        });
      };

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          let index;
          do {
            index = Math.floor(Math.random() * iconCount) + (Math.floor((row * numCols + col) / iconCount) * iconCount);
          } while (!isValidPosition(row, col, shuffledIcons[index % shuffledIcons.length]));

          newTiles[row][col] = shuffledIcons[index % shuffledIcons.length];
        }
      }

      const tilesToRender = newTiles.map((row, rowIndex) =>
        row.map((icon, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="tile" style={{ left: colIndex * 30, top: rowIndex * 30 }}>
            <img src={icon} alt={`icon-${icon}`} className="icon" />
          </div>
        ))
      );

      setTiles(tilesToRender);
    };

    createShuffledTiles();
  }, [numRows, numCols]);

  return (
    <div className="background-tiles">
      <div className="tiles-container">
        {tiles.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundTiles;
