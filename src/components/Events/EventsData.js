import Papa from 'papaparse';

export const fetchEventsData = async () => {
  return new Promise((resolve, reject) => {
    Papa.parse('/events.csv', { // Ensure correct path
      download: true,
      header: true,
      complete: (results) => {
        // Function to extract the file ID from a Google Drive URL
        const extractFileId = (url) => {
          if (!url) return null;  // Add a check to handle undefined or empty URLs
          const regex = /id=([^&]+)/;
          const match = url.match(regex);
          return match ? match[1] : null;
        };

        // Map through results and construct the correct image URL
        const dataWithImages = results.data.map(event => {
          const fileId = extractFileId(event.picture);
          let imageUrl = null;

          try {
            imageUrl = fileId ? require(`../../assets/eventImages/${fileId}.jpg`) : null;
          } catch (error) {
            console.error(`Image not found for file ID: ${fileId}`, error);
          }

          return {
            ...event,
            imageUrl
          };
        });

        console.log('Parsed CSV data with images:', dataWithImages); // Log the parsed data
        resolve(dataWithImages);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error); // Log errors
        reject(error);
      }
    });
  });
};
