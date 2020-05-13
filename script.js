
let transactions=[];







function createRow(name,type,amount) {
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

function addNewButtonClicked(){
    let name= document.querySelector('#name').value;
    let type= document.querySelector('#payType').value;
    let amount=  document.querySelector('#amount').value;
    if(checkIfNameExists(name)){
        alert('Name already exists');
        return;
    }

    let transaction={
        name:name,
        type:type,
        amount:amount
    }
    transactions.push(transaction);
    updatePaymentUsers(name);
    createRow(name, type, amount);
}

function updatePaymentUsers(name){
    let opt= document.createElement('option');
    opt.innerHTML=name;
    let payNames= document.querySelector('#payNames');
    payNames.append(opt);
}

function checkIfNameExists(name){
    let result = false;
    for(let i=0;i<transactions.length;i++){
        let transaction = transactions[i];
        if(transaction.name==name){
            result = true;
            return result;
        }
    }
    return result;
}

let addNewButton= document.querySelector('#addNew');
addNewButton.addEventListener('click',addNewButtonClicked)


function createNewrow (name,amount) {
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

function addPayment () {
}
