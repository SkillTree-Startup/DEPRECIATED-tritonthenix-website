import Papa from 'papaparse';

export const fetchEventsData = async () => {
  return new Promise((resolve, reject) => {
    Papa.parse('public\events.csv', { // Use the path relative to the public directory
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};
