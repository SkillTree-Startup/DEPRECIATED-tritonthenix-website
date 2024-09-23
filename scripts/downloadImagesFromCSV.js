const axios = require('axios');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// File paths and output directories
const inputFiles = [
  { file: 'public/events.csv', outputDir: path.resolve(__dirname, '../src/assets/eventImages') },
  { file: 'public/workouts.csv', outputDir: path.resolve(__dirname, '../src/assets/workoutImages') }
];

// Create output directory if it doesn't exist
const createOutputDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const downloadImage = async (id, outputDir) => {
  try {
    const url = `https://drive.google.com/uc?export=view&id=${id}`;
    const response = await axios.get(url, { responseType: 'stream' });
    const filePath = path.join(outputDir, `${id}.jpg`); // Adjust the file extension if needed
    response.data.pipe(fs.createWriteStream(filePath));
    console.log(`Downloaded image ${id}`);
  } catch (error) {
    console.error(`Failed to download image ${id}:`, error.message);
  }
};

const processCSV = (inputFile, outputDir) => {
  createOutputDir(outputDir);

  fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
      const imageUrl = row.picture; // Assuming 'picture' column contains the image URL
      const imageId = imageUrl.split('id=')[1]; // Extract image ID from Google Drive URL
      if (imageId) {
        downloadImage(imageId, outputDir);
      }
    })
    .on('end', () => {
      console.log(`CSV file ${inputFile} successfully processed`);
    });
};

// Process both CSV files
inputFiles.forEach(({ file, outputDir }) => {
  processCSV(file, outputDir);
});
