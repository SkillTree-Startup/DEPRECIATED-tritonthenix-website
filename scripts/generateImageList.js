const fs = require('fs');
const path = require('path');

// Path to the images directory and the output JSON file
const imageDir = path.resolve(__dirname, '../src/assets/memberImages');
const outputFile = path.resolve(__dirname, '../src/components/MemberList/imageList.json');

// Function to generate image list
const generateImageList = () => {
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Filter image files
    const imageList = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Write to JSON file
    fs.writeFile(outputFile, JSON.stringify(imageList, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('Image list JSON file generated successfully.');
      }
    });
  });
};

// Run the function
generateImageList();
