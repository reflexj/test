// Buttons with default visible state and toggle to hide on click
document.getElementById('team').addEventListener('click', function() {
    const teamOutput = document.getElementById('teamOutput');
    if (teamOutput.style.display === "none") {  // Check if hidden
        teamOutput.style.display = "block";  // Show it
    } else {
        teamOutput.style.display = "none";  // Hide it
    }
});

document.getElementById('locations').addEventListener('click', function() {
    const locationOutput = document.getElementById('locationOutput');
    if (locationOutput.style.display === "none") {  // Check if hidden
        locationOutput.style.display = "block";  // Show it
    } else {
        locationOutput.style.display = "none";  // Hide it
    }
});

document.getElementById('contactaddress').addEventListener('click', function() {
    const contactOutput = document.getElementById('contactOutput');
    if (contactOutput.style.display === "none") {  // Check if hidden
        contactOutput.style.display = "block";  // Show it
    } else {
        contactOutput.style.display = "none";  // Hide it
    }
});

// Ensure content is displayed on page load by default
window.onload = function() {
  // Set text content for each output when the page loads
  document.getElementById('teamOutput').textContent = "Our Team currently consists of...";  // Added text content
  document.getElementById('teamOutput').style.display = "block";  // Show default text
  
  document.getElementById('locationOutput').textContent = "We are currently based out of Switzerland";  // Added text content
  document.getElementById('locationOutput').style.display = "block";  // Show default text
  
  document.getElementById('contactOutput').textContent = "Addresse: Fabrikstrasse 8, Phone: 079123456, Email: hans.peter@gmail.com";  // Added text content
  document.getElementById('contactOutput').style.display = "block";  // Show default text
};  // Ensure text content is visible on page load

// Search functionality to filter only the output paragraphs
const searchBar = document.getElementById('searchBar');

// Add an event listener for input on the search bar
searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase(); // Get the search term and convert to lowercase
  
  // Get all output paragraphs related to contact section
  const outputs = document.querySelectorAll('.output');
  
  // Loop through each output item and hide/show based on search term
  outputs.forEach(output => {
    const outputText = output.textContent.toLowerCase(); // Use textContent for searching
    if (outputText.includes(searchTerm)) {
      output.style.display = 'block'; // Show the output if it matches the search term
    } else {
      output.style.display = 'none'; // Hide the output if it doesn't match
    }
  });
});
