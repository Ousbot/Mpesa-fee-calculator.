function calculateFee() {
  let amount = document.getElementById("amount").value;
  let fee = 0;

  if (amount <= 100) {
    fee = 0;
  } else if (amount <= 500) {
    fee = 10;
  } else if (amount <= 1000) {
    fee = 15;
  } else if (amount <= 2500) {
    fee = 25;
  } else if (amount <= 5000) {
    fee = 34;
  } else if (amount <= 10000) {
    fee = 56;
  } else {
    fee = 85;
  }

  document.getElementById("result").innerHTML = 
    `For Ksh ${amount}, the M-Pesa fee is <strong>Ksh ${fee}</strong>`;
}
