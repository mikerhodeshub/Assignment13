const runNameClick = () => {
    let name = prompt('Enter your name');
    document.getElementById('name').append(`name: ${name}`);
    bankAccount(name).getOwnerName();
}

const runDepClick = () => {
    let custName = document.getElementById('name').innerHTML;
    if(custName.length > 0){
        let dep = prompt('Enter amount to deposit');
        dep = Number(dep);
        account.getOwnerName();
        account.getBalance();
        account.deposit(dep);
    }
    else{
        alert('First enter your name');
    }
}

const runWdClick = () => {
    let custName = document.getElementById('name').innerHTML;
    if(custName.length > 0){
        let wd = prompt('Enter amount to withdrawl');
        wd = Number(wd);
        account.getOwnerName();
        account.getBalance();
        account.withdrawal(wd);
    }
    else{
        alert('First enter your name');
    }
    
}

const bankAccount = (ownerName) => {
    let balance = 0;
    let owner = ownerName;
    return {
        deposit: function(depAmt){
            if(depAmt > 0){
                balance += depAmt;
                document.getElementById('balance').innerHTML = `balance: ${balance}`;
            }
        },
        withdrawal: function(wdAmt){
            if(wdAmt < balance){
                balance -= wdAmt;
                document.getElementById('balance').innerHTML = `balance: ${balance}`;
            }
        },
        getBalance: function(){
            return balance;
        },
        getOwnerName: function(){
            return owner;
        }
    }
}
const account = bankAccount();
document.getElementById('btnName').addEventListener('click', runNameClick);
document.getElementById('btnDisplay').addEventListener('click', runDepClick);
document.getElementById('btnWithdraw').addEventListener('click', runWdClick);