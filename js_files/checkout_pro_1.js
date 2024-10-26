const numberOfTicketsPro_1 = localStorage.getItem('numberOfTickets_pro_1');
const totalPricePro_1 = localStorage.getItem('totalPrice_pro_1');

// Display values
document.getElementById('numberOfProducts_pro_1_display').textContent = numberOfTicketsPro_1;
document.getElementById('totalPrice_pro_1_display').textContent = totalPricePro_1;

// Set values to hidden inputs
document.getElementById('numberOfProducts_pro_1').value = numberOfTicketsPro_1;
document.getElementById('totalPrice_pro_1').value = totalPricePro_1;
