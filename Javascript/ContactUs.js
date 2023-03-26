//function to submit contact details
const submitContact = () => {
  // Retrieve the list of contacts from sessionStorage or create a new empty list.
  const contactUs = JSON.parse(sessionStorage.getItem("contactList")) || [];

  // Retrieve the form input fields using their IDs.
  const email = document.getElementById('Youremail');
  const number = document.getElementById('YourNumber');
  const comments = document.getElementById('comment');
  const name = document.getElementById('Name');

  // Create an object with the user's details.
  userDetails = {
    name: name.value,
    email: email.value,
    number: number.value,
    comments: comments.value
  }

  // Add the user's details to the list of contacts and store it in sessionStorage.
  contactUs.push(userDetails);
  sessionStorage.setItem('contactList', JSON.stringify(contactUs));

  // Display a confirmation message to the user.
  alert(`${name.value} we will be in contact soon thank you for submitting your details and comments`)

  // Clear the form input fields.
  document.getElementById('Youremail').value = '';
  document.getElementById('YourNumber').value = '';
  document.getElementById('comment').value = '';
  document.getElementById('Name').value = '';
}

// This function is triggered when the user clicks the like button.
const hasLike = () => {
  // Retrieve the number of likes from sessionStorage or set it to 0 if it doesn't exist.
  let likedItems = parseInt(sessionStorage.getItem('likes')) || 0;

  // Increment the number of likes.
  likedItems++;

  // Store the updated number of likes in sessionStorage
  sessionStorage.setItem('likes', likedItems.toString());

  // Update the text of the like button to display the updated number of likes.
  document.getElementById('likeBtn').textContent = likedItems;

  // Disable the like button to prevent the user from clicking it again.
  document.getElementById('likeBtn').disabled = true;
}

// This function is triggered when the user clicks the dislike button.
const hasDislike = () => {
  // Retrieve the number of dislikes from sessionStorage or set it to 0 if it doesn't exist.
  let dislikedItems = parseInt(sessionStorage.getItem('dislikes')) || 0;

  // Increment the number of dislikes.
  dislikedItems++;

  // Store the updated number of dislikes in sessionStorage.
  sessionStorage.setItem('dislikes', dislikedItems.toString());

  // Update the text of the dislike button to display the updated number of dislikes.
  document.getElementById('dislikeBtn').textContent = dislikedItems;

  // Disable the dislike button to prevent the user from clicking it again.
  document.getElementById('dislikeBtn').disabled = true;
}