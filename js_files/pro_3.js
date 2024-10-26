const pricePerPersonPro_3 = 15;
const quantitySelectPro_3 = document.getElementById('quantity_pro_3');
const totalPriceElementPro_3 = document.getElementById('totalPrice_pro_3');

function updateTotalPricePro_3() {
  const quantity = parseInt(quantitySelectPro_3.value);
  const totalPrice = pricePerPersonPro_3 * quantity;
  totalPriceElementPro_3.textContent = totalPrice;

  localStorage.setItem('totalPrice_pro_3', totalPrice);
  localStorage.setItem('numberOfProducts_pro_3', quantity);
}

quantitySelectPro_3.addEventListener('change', updateTotalPricePro_3);
updateTotalPricePro_3();
