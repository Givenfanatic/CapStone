// This code retrieves saved items from sessionStorage or initializes an empty array
const savedItems = JSON.parse(sessionStorage.getItem('saved')) || [];

// This function increments the 'likes' counter in sessionStorage and updates the like button
const hasLike = () => {
let likedItems = parseInt(sessionStorage.getItem('managerlikes')) || 0;
likedItems++;
sessionStorage.setItem('managerlikes', likedItems.toString());
document.getElementById('likeBtn').textContent = likedItems;
document.getElementById('likeBtn').disabled = true;
}

// This function increments the 'dislikes' counter in sessionStorage and updates the dislike button
const hasDislike = () => {
let dislikedItems = parseInt(sessionStorage.getItem('managerdislikes')) || 0;
dislikedItems++;
sessionStorage.setItem('managerdislikes', dislikedItems.toString());
document.getElementById('dislikeBtn').textContent = dislikedItems;
document.getElementById('dislikeBtn').disabled = true;
}

// This function saves an item for later by pushing an object with the item name and HTML into savedItems array and updating the sessionStorage
const saveForLaterManagers = () => {
// Get the item element that contains the button
const item = document.getElementById('table').outerHTML;

let savedItem = {
name: 'Table',
text: item
}

savedItems.push(savedItem)
sessionStorage.setItem('saved', JSON.stringify(savedItems));
const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
alert(`Item's you have saved:${saveLaterAmount.length}!`);
document.getElementById('managers').disabled = true;
document.getElementById('managers').textContent = 'saved';
}