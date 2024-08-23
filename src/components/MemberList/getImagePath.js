import imageList from './/imageList.json'; // Adjust the path as necessary

export const getImagePath = (firstName, lastName) => {
  const namePattern = `${firstName.trim()} ${lastName.trim()}`;
  console.log(`Searching for images for: ${namePattern}`);

  // Check against the list of image filenames
  const foundFile = imageList.find(fileName => 
    fileName.toLowerCase().includes(namePattern.toLowerCase())
  );

  if (foundFile) {
    const fileExtension = foundFile.split('.').pop();
    const basePath = '../../assets/memberImages/';
    console.log(`Found image: ${basePath}${foundFile}`);
    return require(`${basePath}${foundFile}`);
  }

  // If no image is found, return a placeholder
  console.log('No matching image found. Using default image.');
  return require('../../assets/memberImages/Profile_avatar_placeholder_large.png');
};