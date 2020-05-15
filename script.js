
//global array to store all transaction data//

let transactions = [];





//this is important for storing user filled data in browser//

function createRow(name, type, amount) {
    let row = document.createElement('tr');

    let nameTd = document.createElement('td');
    nameTd.innerHTML = name;
    row.append(nameTd);


    let typeTd = document.createElement('td');
    typeTd.innerHTML = type;
    row.append(typeTd);

    let priceTd = document.createElement('td');
    priceTd.innerHTML = amount;
    row.append(priceTd);

    let tbody = document.querySelector('tbody');
    tbody.append(row);

}



function addNewButtonClicked() {
    let name = document.querySelector('#name').value;
    let type = document.querySelector('#payType').value;
    let amount = document.querySelector('#amount').value;

    if (checkIfAnythingempty(name)) {
        alert('Name cannot be empty');
        return;
    }

    if (checkIfAnythingempty(amount)) {
        alert('Amount cannot be empty');
        return;
    }



    if (checkIfNameExists(name)) {
        alert('Name already exists');
        return;
    }



    /* if (nameNotEntered(name)) {
         alert('Name field cannot be empty');
         return;
     }
     */

    amount = parseInt(amount);


    let transaction = {
        name: name,
        type: type,
        amount: amount
    }
    transactions.push(transaction);
    updatePaymentUsers(name);
    createRow(name, type, amount);
    updateStatus();
}

function updatePaymentUsers(name) {
    let opt = document.createElement('option');
    opt.innerHTML = name;
    let payNames = document.querySelector('#payNames');
    payNames.append(opt);
}

function checkIfNameExists(name) {
    let result = false;
    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i];
        if (transaction.name == name) {
            result = true;
            return result;
        }
        /* else if(transaction.name==undefined) {
                 result = true;
                 return result;
         }*/
    }
    return result;
}


function checkIfAnythingempty(str) {
    let result = false;
    if (str == "") {
        result = true;
        return result;
    }

    return result;
}


/*
function nameNotEntered (name){
    let result = false;
    for(let i=0;i<transactions.length;i++){
        let transaction = transactions[i];
        if(transaction.name=='  '){
            result = true;
            return result;
        }
    }
    return result;
}


function checkIfnewAmountentered (amount) {
    for(let i=1; i>0 && i>=1 ;i=++)
}
*/
let addNewButton = document.querySelector('#addNew');
addNewButton.addEventListener('click', addNewButtonClicked)


function createNewrow(name, amount) {
    let row = document.createElement('tr');

    let nameTd = document.createElement('td');
    nameTd.innerHTML = name;
    row.append(nameTd);

    let priceTd = document.createElement('td');
    priceTd.innerHTML = amount;
    row.append(priceTd);

    let tbody = document.querySelector('tbody');
    tbody.append(row);
}

let payup = document.querySelector('#payup');
payup.addEventListener('click', addPayment);

function addPayment() {
    let name = document.querySelector('#payNames').value;
    let amount = document.querySelector('#newpayupdate').value;
    if (checkIfAnythingempty(amount)) {
        alert('Amount is needed');
        return;
    }
    amount = parseInt(amount);

    for(let i=0; i<transactions.length;i++){
        let transaction= transactions[i];
        if(transaction.name==name){
            transaction.amount=transaction.amount-amount;
        }
    }
    refreshTable();
    updateStatus();

}


function refreshTable(){
    let tbody=document.querySelector('tbody');
    tbody.innerHTML='';

    for(let i=0; i<transactions.length;i++){
        let transaction= transactions[i];
        createRow(transaction.name,transaction.type,transaction.amount);
    }
}

function updateStatus() {
    let status = 0;
    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i];
        if (transaction.type == "debt") {
            status = status - transaction.amount
        } else {
            status = status + transaction.amount
        }
    }
    let statusElement = document.querySelector('.status');
    statusElement.innerHTML = status;

}
