document.getElementById("depodit-button").addEventListener('click', function(){
// get the amount deposit 
    const depositInput = document.getElementById("depodit-input");
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
// update deposit total 
    const depositTolale = document.getElementById('deposit-total');
    const previousDepositText = depositTolale.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newdepositAmount;

    depositTolale.innerText = newDepositTotal;
// updat account balnach 
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText);
    const allBalance = newBalanceTotal + newdepositAmount;

    balanceTotal.innerText = allBalance;

    // clear the deposit input field 
    depositInput.value= ' ';
});

document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawinput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawinput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText);
// set withdraw Tolal 
    const withdrawTolal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTolal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newpreviousWithdrawTolal = previousWithdrawTotal + newWithdrawAmount;  
    
    withdrawTolal.innerText= newpreviousWithdrawTolal;

    // update balance 
    const balanceTolal = document.getElementById("balance-total");
    const previousBalanceText = balanceTolal.innerText;
    const previousBalanceTolal = parseFloat(previousBalanceText);
    const newpreviousBalance = previousBalanceTolal - newWithdrawAmount;

    balanceTolal.innerText = newpreviousBalance;

    // clear Withdraw input 
    withdrawinput.value= '';
})