const axios = require('axios');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const inputFile = 'public/events.csv'; // Path to your CSV file
const outputDir = path.resolve(__dirname, '../src/assets/eventImages'); // Directory to save images

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const downloadImage = async (id) => {
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

const processCSV = () => {
  fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
      const imageUrl = row.picture;
      const imageId = imageUrl.split('id=')[1];
      downloadImage(imageId);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
};

processCSV();
