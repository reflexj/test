// Buttons
document.getElementById('clickButton').addEventListener('click', function() {
  const locationOutput = document.getElementById('output');
  if (locationOutput.textContent === "") {
      locationOutput.textContent = "Check out our contact section";
  } else {
      locationOutput.textContent = ""; 
  }
  });


  

// Get references to the search bar and the list of event items
const searchBar = document.getElementById('searchBar');
const eventItems = document.querySelectorAll('[data-shop] li');

// Add an event listener for input on the search bar
searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase(); // Get the search term and convert to lowercase
  
  // Loop through each event item and hide/show based on search term
  eventItems.forEach(item => {
    const eventName = item.textContent.toLowerCase(); // Get the text content of the event
    if (eventName.includes(searchTerm)) {
      item.style.display = 'block'; // Show the event if it matches the search term
    } else {
      item.style.display = 'none'; // Hide the event if it doesn't match
    }
  });
});

