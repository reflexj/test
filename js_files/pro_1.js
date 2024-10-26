const pricePerPersonPro_1 = 20;
const quantitySelectPro_1 = document.getElementById('quantity_pro_1');
const totalPriceElementPro_1 = document.getElementById('totalPrice_pro_1');

function updateTotalPricePro_1() {
  const quantity = parseInt(quantitySelectPro_1.value);
  const totalPrice = pricePerPersonPro_1 * quantity;
  totalPriceElementPro_1.textContent = totalPrice;

  localStorage.setItem('totalPrice_pro_1', totalPrice);
  localStorage.setItem('numberOfTickets_pro_1', quantity);
}

quantitySelectPro_1.addEventListener('change', updateTotalPricePro_1);
updateTotalPricePro_1(); // Initialize the total price
