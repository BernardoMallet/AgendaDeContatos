const form = document.getElementById('form-AddContact');
const inputContactName = document.getElementById('contactName');
const inputContactNumber = document.getElementById('contactNumber');
const contacts = [];

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    addLine();
    updateTable();
    updateTotalContacts();
    renderTotalContacts();
});

function addLine() {

    contacts.push(inputContactName.value);

    let line = '<tr>';
    line += `<td>${inputContactName.value}</td>`
    line += `<td>${inputContactNumber.value}</td>`
    line += '</tr>'

    lines += line

    inputContactName.value = '';
    inputContactNumber.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}

function renderTotalContacts() {
    const totalContacts = updateTotalContacts();

    document.getElementById('totalContactsNumber').innerHTML = totalContacts;
}

function updateTotalContacts() {
    let countAllContacts = 0;

    return countAllContacts + contacts.length;

}