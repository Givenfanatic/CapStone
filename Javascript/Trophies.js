// Get the saved items from sessionStorage, or initialize an empty array
const savedItems = JSON.parse(sessionStorage.getItem('saved')) || [];

// Function to handle liking an item
const hasLike = () => {
  // Get the current number of likes from sessionStorage, or initialize to 0
  let likedItems = parseInt(sessionStorage.getItem('trophieslikes')) || 0;

  // Increment the number of likes
  likedItems++;

  // Save the updated number of likes to sessionStorage
  sessionStorage.setItem('trophieslikes', likedItems.toString());

  // Update the button text to display the new number of likes
  document.getElementById('likeBtn').textContent = likedItems;

  // Disable the like button
  document.getElementById('likeBtn').disabled = true;
}

// Function to handle disliking an item
const hasDislike = () => {
  // Get the current number of dislikes from sessionStorage, or initialize to 0
  let dislikedItems = parseInt(sessionStorage.getItem('trophiesdislikes')) || 0;

  // Increment the number of dislikes
  dislikedItems++;

  // Save the updated number of dislikes to sessionStorage
  sessionStorage.setItem('trophiesdislikes', dislikedItems.toString());

  // Update the button text to display the new number of dislikes
  document.getElementById('dislikeBtn').textContent = dislikedItems;

  // Disable the dislike button
  document.getElementById('dislikeBtn').disabled = true;
}

// Function for saving an item for later
const saveForLaterTrophies = () => {
  // Get the item element that contains the button
  const item = document.getElementById('Trophies').outerHTML;

  // Create an object with the item name and HTML text
  let savedItem = {
    name: 'Trophies',
    text: item
  }

  // Add the item object to the savedItems array
  savedItems.push(savedItem)

  // Save the updated savedItems array to sessionStorage
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  // Get the number of saved items and display an alert with the count
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Items you have saved: ${saveLaterAmount.length}!`);

  // Disable the save button and update its text
  document.getElementById('trophies').disabled = true;
  document.getElementById('trophies').textContent = 'saved';
}
