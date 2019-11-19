let button  = document.getElementById("submit");

function loanCalculation(){

    let loanAmount= parseInt(document.getElementById("amount").value);

    let numberOfYears = parseInt(document.getElementById("years").value);

    let numberOfPayments = numberOfYears * 12;

    let monthlyInterest = 5 / 100 / 12;

    let monthlyPayment = (monthlyInterest * loanAmount) / (1 - Math.pow((1 + monthlyInterest), -Math.abs(numberOfPayments)));

    let box = document.getElementById("result");
    
    box.innerHTML=`
    <h3>Your Monthly Payments</h3>
    <ul>
        <li>Loan Amount: <span class="orange">${loanAmount} $</span></li>
        <li>Interest Rate: <span class="orange">5%</span> </li>
        <li>Number of Years: <span class="orange">${numberOfYears}</span></li>
        <li>Number Of Payments: <span class="orange">${numberOfPayments}</span></li>
        <li>Monthly Payments: <span class="orange">${monthlyPayment.toFixed(2)} $</span></li>
    </ul>`;
}


button.addEventListener("click",loanCalculation);