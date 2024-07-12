import React, { useEffect, useState } from 'react';
import './BackgroundTiles.css'; // Import your CSS for styling

const BackgroundTiles = () => {
  // Replace these with your actual SVG imports
  const svgFiles = [
    require('../assets/svg/Dips.svg').default,
    require('../assets/svg/Flag.svg').default,
    require('../assets/svg/Handstand.svg').default,
    require('../assets/svg/IronCross.svg').default,
    require('../assets/svg/JumpRope.svg').default,
    require('../assets/svg/LSitHang.svg').default,
    require('../assets/svg/Planche.svg').default,
    require('../assets/svg/PullUp.svg').default,
    require('../assets/svg/PushUp.svg').default,
    require('../assets/svg/Squat.svg').default,
    require('../assets/svg/VSit.svg').default,
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
    // Shuffle icons array to randomize order
    const shuffledIcons = [...svgFiles].sort(() => Math.random() - 0.5);

    // Generate tiles for background
    const newTiles = [];
    for (let row = 0; row < numRows; row++) {
      const rowIcons = [];
      for (let col = 0; col < numCols; col++) {
        const index = Math.floor(Math.random() * svgFiles.length);
        rowIcons.push(
          <div key={`${row}-${col}`} className="tile" style={{ left: col * 30, top: row * 30 }}>
            <img src={shuffledIcons[index]} alt={`icon-${index}`} className="icon" />
          </div>
        );
      }
      newTiles.push(rowIcons);
    }

    setTiles(newTiles);
  }, [numRows, numCols]); // Update tiles whenever numRows or numCols change

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
