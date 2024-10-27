document.getElementById('clickButton').addEventListener('click', function() {
    document.getElementById('output').textContent = "Button clicked! Welcome to JavaScript interaction.";
  });
  


const searchBar = document.getElementById('searchBar');
const eventItems = document.querySelectorAll('[data-shop] li');


searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase(); 
  
  
  eventItems.forEach(item => {
    const eventName = item.textContent.toLowerCase();
    if (eventName.includes(searchTerm)) {
      item.style.display = 'block'; 
    } else {
      item.style.display = 'none'; 
    }
  });
});

