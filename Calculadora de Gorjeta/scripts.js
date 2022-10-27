
function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let numOfPeople = document.getElementById('people').value;

  if (bill == '' | serviceQual == 0) {
      alert("Por favor, preencha os valores.")
      return
  }

  if (numOfPeople == "" | numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById('each').style.display = "none";
  } else {
      document.getElementById('each').style.display = "inline";
  }

  let total = (bill * serviceQual) / numOfPeople;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('total-tips').style.display = "inline";
}

document.getElementById('total-tips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('form').addEventListener('submit', calculateTip);
