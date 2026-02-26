
//machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
//machine -> balance
function getBalance(){
     const balanceElement = document.getElementById('balance');
        const balance = balanceElement.innerText;
        console.log(Number(balance));
        return Number(balance);
}
// machine value -> set Balance
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
}

// machine id >> at first hide all >> Show Only One clicked id
function showOnly(id){
    // take id first
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const history = document.getElementById('history');
    // hidden all id
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
  history.classList.add('hidden');
    //show only selected id
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}