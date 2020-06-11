//Conexao com BD MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user1',
    password: '1234',
    database: 'mydb'
});
var nom = 'lula';
var num = '171';
var fot = 'www.lol.com';
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["numero"] = document.getElementById("numero").value;
    formData["foto"] = document.getElementById("foto").value;

    return formData;
}
function InserirBD() {
    connection.query("INSERT INTO contato(nome,numero,foto) VALUES(?,?,?)",[nom,num,fot],function (err, result){
        if (!err){
            console.log('Contato cadastrado');
        } else{
            console.error('erro ao cadastrar');
        }
    });
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.numero;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.foto;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    InserirBD();
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("foto").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("numero").value = selectedRow.cells[1].innerHTML;
    document.getElementById("foto").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.numero;
    selectedRow.cells[2].innerHTML = formData.foto;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}