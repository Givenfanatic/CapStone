// Get the saved items from sessionStorage or create an empty array
const savedItems = JSON.parse(sessionStorage.getItem('saved')) || [];

// function for saving an item for later - CR7
const saveForLaterCR7 = () => {
  // Get the item element that contains the button
  const item = document.getElementById('CR7Title');
  const itemDesc = document.getElementById('CR7para');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  // Create an object with the item's name and text
  let savedItem = {
    name: itemName,
    text: itemText
  }

  // Add the item to the savedItems array and update sessionStorage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  // Alert the user how many items they have saved and disable the button
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Items you have saved: ${saveLaterAmount.length}!`);
  document.getElementById('CR7').disabled = true;
  document.getElementById('CR7').textContent = 'saved';
}

// function for saving an item for later - Patrice
const saveForLaterPatrice = () => {
  // Get the item element that contains the button
  const item = document.getElementById('patriceTitle');
  const itemDesc = document.getElementById('patDescp');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  // Create an object with the item's name and text
  let savedItem = {
    name: itemName,
    text: itemText
  }

  // Add the item to the savedItems array and update sessionStorage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  // Alert the user how many items they have saved and disable the button
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Items you have saved: ${saveLaterAmount.length}!`);
  document.getElementById('Patrice').disabled = true;
  document.getElementById('Patrice').textContent = 'saved';
}

// function for saving an item for later - Jose
const saveForLaterJose = () => {
  // Get the item element that contains the button
  const item = document.getElementById('JMTitle');
  const itemDesc = document.getElementById('JMpara');

  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  // Create an object with the item's name and text
  let savedItem = {
    name: itemName,
    text: itemText
  }

  // Add the item to the savedItems array and update sessionStorage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  // Alert the user how many items they have saved and disable the button
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Items you have saved: ${saveLaterAmount.length}!`);
  document.getElementById('JM').disabled = true;
  document.getElementById('JM').textContent = 'saved';
}

// function for saving an item for later - Matt
const saveForLaterMatt = () => {
  // Get the item element that contains the button
  const item = document.getElementById('MBTitle');
  const itemDesc = document.getElementById('MBTitle');

  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  // Create an object with the item's name and text
  let savedItem = {
    name: itemName,
    text: itemText
  }

  // Add the item to the savedItems array and update sessionStorage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  // Alert the user how many items they have saved and disable the button
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('MB').disabled = true;
  document.getElementById('MB').textContent = 'saved';
}

// function for saving an item for later -RVP
const saveForLaterRVP = () => {
  // Get the item element that contains the button
  const item = document.getElementById('RVPTitle');
  const itemDesc = document.getElementById('RVPpara');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  //create a new object
  let savedItem = {
    name: itemName,
    text: itemText
  }

  //add new object to array and save in session storage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  //let the user know that the item has been saved and disable the button and set it's text to saved
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('RVP').disabled = true;
  document.getElementById('RVP').textContent = 'saved';
}

// function for saving an item for later - Berb
const saveForLaterBerb = () => {
  // Get the item element that contains the button
  const item = document.getElementById('BerTitle');
  const itemDesc = document.getElementById('Berpara');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  //create new object
  let savedItem = {
    name: itemName,
    text: itemText
  }

  //add new object to array and save in session storage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  //let the user know that the item has been saved and disable the button and set it's text to saved
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('Ber').disabled = true;
  document.getElementById('Ber').textContent = 'saved';
}

// function for saving an item for later - SAF
const saveForLaterSAF = () => {
  // Get the item element that contains the button
  const item = document.getElementById('SAFTitle');
  const itemDesc = document.getElementById('SAFpara');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  //create new object
  let savedItem = {
    name: itemName,
    text: itemText
  }

  //add new object to array and save to session storage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  //let the user know that the item has been saved and disable the button and set it's text to saved
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('SAF').disabled = true;
  document.getElementById('SAF').textContent = 'saved';
}

// function for saving an item for later -ROM
const saveForLaterROM = () => {
  // Get the item element that contains the button
  const item = document.getElementById('ROMTitle');
  const itemDesc = document.getElementById('ROMpara');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  //create new object
  let savedItem = {
    name: itemName,
    text: itemText
  }

  //add to array and save to session storage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  //let the user know that the item has been saved and disable the button and set it's text to saved
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('ROM').disabled = true;
  document.getElementById('ROM').textContent = 'saved';
}

// function for saving an item for later - EC
const saveForLaterEC = () => {
  // Get the item element that contains the button
  const item = document.getElementById('ECTitle');
  const itemDesc = document.getElementById('ECpara');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  // create new object
  let savedItem = {
    name: itemName,
    text: itemText
  }

  //add to array and save item to session storage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  //let the user know that the item has been saved and disable the button and set it's text to saved
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('EC').disabled = true;
  document.getElementById('EC').textContent = 'saved';
}

// function for saving an item for later - SMB
const saveForLaterSMB = () => {
  // Get the item element that contains the button
  const item = document.getElementById('SMBTitle');
  const itemDesc = document.getElementById('SMBpara');
  // Clone the item element to create a new copy
  const itemName = item.textContent;
  const itemText = itemDesc.textContent.replace("\n", " ").replace("\"", "");

  //create new array
  let savedItem = {
    name: itemName,
    text: itemText
  }

  //add to array and save to session storage
  savedItems.push(savedItem)
  sessionStorage.setItem('saved', JSON.stringify(savedItems));

  //let the user know that the item has been saved and disable the button and set it's text to saved
  const saveLaterAmount = JSON.parse(sessionStorage.getItem('saved'))
  alert(`Item's you have saved:${saveLaterAmount.length}!`);
  document.getElementById('SMB').disabled = true;
  document.getElementById('SMB').textContent = 'saved';
}

// function to update likes when user click on like button
const hasLike = () => {
  //get previous like from session storage
  let likedItems = parseInt(sessionStorage.getItem('likes')) || 0;

  //increment likes
  likedItems++;

  //save the new amount of like, display the amount of likes and disable the button
  sessionStorage.setItem('likes', likedItems.toString());
  document.getElementById('likeBtn').textContent = likedItems;
  document.getElementById('likeBtn').disabled = true;
}

// function to update likes when user click on dislike button
const hasDislike = () => {
  //get previous dislikes from session storage
  let dislikedItems = parseInt(sessionStorage.getItem('dislikes')) || 0;

  //increment dislikes
  dislikedItems++;

  //save the new amount of like, display the amount of dislikes and disable the button
  sessionStorage.setItem('dislikes', dislikedItems.toString());
  document.getElementById('dislikeBtn').textContent = dislikedItems;
  document.getElementById('dislikeBtn').disabled = true;
}