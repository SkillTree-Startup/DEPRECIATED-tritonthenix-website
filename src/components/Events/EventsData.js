import Papa from 'papaparse';

export const fetchEventsData = async () => {
  return new Promise((resolve, reject) => {
    Papa.parse('/events.csv', { // Ensure correct path
      download: true,
      header: true,
      complete: (results) => {
        console.log('Parsed CSV data:', results.data); // Log the parsed data
        resolve(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error); // Log errors
        reject(error);
      }
    });
  });
};
