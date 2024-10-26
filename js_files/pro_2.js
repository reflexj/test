const pricePerPersonPro_2 = 30;
const quantitySelectPro_2 = document.getElementById('quantity_pro_2');
const totalPriceElementPro_2 = document.getElementById('totalPrice_pro_2');

function updateTotalPricePro_2() {
  const quantity = parseInt(quantitySelectPro_2.value);
  const totalPrice = pricePerPersonPro_2 * quantity;
  totalPriceElementPro_2.textContent = totalPrice;

  localStorage.setItem('totalPrice_pro_2', totalPrice);
  localStorage.setItem('numberOfTickets_pro_2', quantity);
}

quantitySelectPro_2.addEventListener('change', updateTotalPricePro_2);
updateTotalPricePro_2();
