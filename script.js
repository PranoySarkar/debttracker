console.log('hello world')



let h1 = document.createElement('h1');
h1.innerHTML = "Hello world";
console.log(h1);

/* let body = document.querySelector('body');
body.append(h1); */

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
    /**
     * Access data entered by user 
     * and pass it
     */
    createRow('Pranoy','Debt','200 inr');
}

let addNewButton= document.querySelector('#addNew');
addNewButton.addEventListener('click',addNewButtonClicked)