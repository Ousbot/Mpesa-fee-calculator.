function calculateFee() {
  const amount = parseInt(document.getElementById("amount").value);
  let fee;

  if (amount <= 100) fee = 0;
  else if (amount <= 500) fee = 7;
  else if (amount <= 1000) fee = 13;
  else if (amount <= 1500) fee = 23;
  else if (amount <= 2500) fee = 33;
  else if (amount <= 3500) fee = 53;
  else if (amount <= 5000) fee = 57;
  else if (amount <= 7500) fee = 78;
  else if (amount <= 10000) fee = 90;
  else if (amount <= 15000) fee = 100;
  else if (amount <= 20000) fee = 105;
  else if (amount <= 35000) fee = 108;
  else fee = 108;  // Up to 250,000

  document.getElementById("result").innerHTML = `
    For KES ${amount}, the M-Pesa fee is <strong>KES ${fee}</strong>
  `;
}
