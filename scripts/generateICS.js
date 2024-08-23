const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvFilePaths = [
  path.resolve(__dirname, '../public/workouts.csv'), // First CSV file
  path.resolve(__dirname, '../public/events.csv')   // Second CSV file
];
const outputDir = path.resolve(__dirname, '../public/ics_files'); // Directory to save .ics files

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const generateICS = (event) => {
  const startDate = new Date(); // Adjust as needed
  const endDate = new Date(startDate);
  endDate.setHours(startDate.getHours() + 2); // Adjust duration as needed

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//NONSGML v1.0//EN
BEGIN:VEVENT
SUMMARY:${event.eventName}
DESCRIPTION:${event.description.replace(/\n/g, '\\n').replace(/,/g, '\\,')}
DTSTART:${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR
`;

  return icsContent;
};

const processCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const event = {
          eventName: row.eventName,
          description: row.description,
          imageUrl: row.imageUrl,
          time: row.time,
          days: row.days,
          location: row.location,
          other: row.other,
          theme: row.theme
        };

        const icsContent = generateICS(event);
        const icsFileName = path.join(outputDir, `${event.eventName.replace(/\s+/g, '_')}.ics`);
        fs.writeFileSync(icsFileName, icsContent);
        console.log(`Generated: ${icsFileName}`);
      })
      .on('end', () => {
        console.log(`CSV file ${filePath} successfully processed.`);
        resolve();
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

const processAllCSVFiles = async () => {
  try {
    for (const filePath of csvFilePaths) {
      await processCSV(filePath);
    }
    console.log('All CSV files have been processed.');
  } catch (err) {
    console.error('Error processing CSV files:', err);
  }
};

// Run the function
processAllCSVFiles();
