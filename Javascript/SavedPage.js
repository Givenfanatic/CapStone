// Retrieve the array from session storage
const storedArray = JSON.parse(sessionStorage.getItem("saved"));

//function runs as soon as the window loads
window.addEventListener("DOMContentLoaded", function() {
  //do a check on whether there are saved items
  if (storedArray === null) {
    //let the user know they have no saved items
    return alert('You have no stored items!');
  } else {
    // Iterate over each element in the array
    storedArray.forEach(item => {
       // if its a table this code will run
      if (item.name === 'Trophies') {
        // Create a list element to display the list data
        const list = document.createElement("ul");
        list.innerHTML = item.text;
        document.body.appendChild(list);
      } // if it;s a table this code will run
      else if (item.name === 'Table') {
        // Create a table element to display the table data
        const table = document.createElement("table");
        table.innerHTML = item.text;
        document.body.appendChild(table);
      } else {
        // Render the HTML markup
        const p = document.createElement("p");
        p.innerHTML = `${item.name} <br> ${item.text}`;
        document.body.appendChild(p);
      }
    });
  }
});
