//Global Variables
var addItem = document.getElementById('add');
var nameInput = document.getElementById('name');
var phone = document.getElementById('phone');
var arr = [];
var tbody = document.getElementById('tbody');

function deleteRow(id) {
	var arr = JSON.parse(localStorage.table);
	for (var i = 0; i < arr.length; i++){
			if (arr[i].id == id) {
		if (confirm('Delete?')){
				arr.splice(i, 1);
			}
		}
	}
	localStorage.table = JSON.stringify(arr);
	showTable();
}

//Add Contact
addItem.addEventListener('click', function addToTable(e) {
	var id = chance.guid();
	if (nameInput.value === '' || phone.value === '') {
	//	e.preventDefault();
		console.log('no way');
	} else {
	
		getTable();
		arr.push({
			name: nameInput.value,
			phone: phone.value,
			id: id
		});
		localStorage.table = JSON.stringify(arr);
		document.getElementById('form').reset();
		showTable();
	}
});

function getTable() {
	var tableString = localStorage.table;
	if (tableString != null) arr = JSON.parse(tableString);
}

function deleteAll() {
	localStorage.removeItem('table');
}

function showTable() {
	getTable();

	var table = document.getElementsByTagName('table')[0];
	var x = table.rows.length;
	while (--x) {
		table.deleteRow(x)}

	for (i = 0; i < arr.length; i++) {
		
		var tbody = document.getElementById('tbody');
		var id = arr[i].id;
		
		tbody.innerHTML += "<tr>"+
		"<td id='count'></td>"+
		"<td>"+arr[i].name+"</td>"+
		"<td>"+arr[i].phone+"</td>"+
		"<td style='text-align:center;'><i class='fa fa-trash' onclick='deleteRow(\""+id+"\")'></i></td>"+
		"</tr>";
	}
}
showTable();

//For Eruda Console
(function () {
	var src = 'http://127.0.0.1:1495/eruda.js';
	if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
	document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
})()


/*
var t = document.getElementById('table');
if(t) {
    Array.from(t.rows).forEach((tr, row_ind) => {
        Array.from(tr.cells).forEach((cell, col_ind) => {
            //console.log('Value at row/col [' + row_ind + ',' + col_ind + '] = ' + cell.textContent);
        });
    });
}

var table = document.getElementById('table');
var count = table.rows.length;
for(var i=0; i<count; i++) {
    console.log(table.rows[i].rowIndex);
}
*/