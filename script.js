// Tip Calculator JavaScript Code
const billAmount = document.getElementById('billAmount');
const tipResult = document.getElementById('tipResult');
const totalResult = document.getElementById('totalResult');

const tip15 = document.getElementById('tip15').onclick = function() {    
    const bill = parseFloat(billAmount.value); // Get the bill amount and convert it to a number
    const tip = Number((bill * 0.15).toFixed(2)); // Calculate 15% tip and round it to 2 decimal places
    const total = Number((bill + tip).toFixed(2)); // Calculate the total amount and round it to 2 decimal places
    tipResult.innerText = `15%: $${tip}`; // Display the result 
    totalResult.innerText = `Total: $${total}`; // Display the result     
};

const tip18 = document.getElementById('tip18').onclick = function() {    
    const bill = parseFloat(billAmount.value); // Get the bill amount and convert it to a number
    const tip = Number((bill * 0.18).toFixed(2)); // Calculate 15% tip and round it to 2 decimal places
    const total = Number((bill + tip).toFixed(2)); // Calculate the total amount and round it to 2 decimal places
    tipResult.innerText = `18%: $${tip}`; // Display the result 
    totalResult.innerText = `Total: $${total}`; // Display the result     
};

const tip20 = document.getElementById('tip20').onclick = function() {    
    const bill = parseFloat(billAmount.value); // Get the bill amount and convert it to a number
    const tip = Number((bill * 0.20).toFixed(2)); // Calculate 15% tip and round it to 2 decimal places
    const total = Number((bill + tip).toFixed(2)); // Calculate the total amount and round it to 2 decimal places
    tipResult.innerText = `20%: $${tip}`; // Display the result 
    totalResult.innerText = `Total: $${total}`; // Display the result     
};







