var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve data
function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["code"] = document.getElementById("code").value;
    formData["city"] = document.getElementById("city").value;
    formData["sal"] = document.getElementById("sal").value;
    formData["phone"] = document.getElementById("phone").value;
    return formData;
}

//Insert data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.code;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.city;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.sal;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.phone;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button class="btn2" onClick='onEdit(this)'>Edit</button>
                            <button class="btn3" onClick='onDelete(this)'>Delete</button>`;
}

//Edit data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    if(confirm('Do you want to  this record?')){
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('code').value = selectedRow.cells[1].innerHTML;
    document.getElementById('city').value = selectedRow.cells[2].innerHTML;
    document.getElementById('sal').value = selectedRow.cells[3].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[4].innerHTML;
    }
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.code;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.sal;
    selectedRow.cells[4].innerHTML = formData.phone;
}

//Delete data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset data
function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('code').value = '';
    document.getElementById('city').value = '';
    document.getElementById('sal').value = '';
    document.getElementById('phone').value = '';
}
