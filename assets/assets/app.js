
var prindata = [];


prindata = [{
    "nameForPrint": "",
    "address": "001.test2",
    "orderId": "10",
    "isBill": false,
    "employee": "кассир пароль 1",
    "customer": "John",
    "createdDate": "19.02.2024",
    "createdTime": "16:45",
    "printedDate": "20.02.2024",
    "printedTime": "17:24",
    "isCopy": true,
    "items": [{
        "name": "Банан",
        "price": 900.0,
        "quantity": 1.0
    },
    {
        "name": "TASSAY",
        "price": 500.0,
        "quantity": 1.0
    }
    ],
    "subtotal": "4100.00",
    "totalSum": "4894.00",
    "discount": "1.0",
    "taxSum": 0.0,
    "includedTaxSum": 1.0
}];

function setDefualt() {
    document.getElementById('nameForPrint').innerHTML = prindata[0]
        .nameForPrint;
    document.getElementById('address').innerHTML = prindata[0].address;
    if (prindata[0].isBill === true) {
        document.getElementById('orderId').innerHTML =
            'Invoice for Order #' + prindata[0].orderId;
    } else {
        document.getElementById('orderId').innerHTML = 'Order #' + prindata[
            0].orderId;
    }
    document.getElementById('employee').innerHTML = 'Employee: \n' + prindata[
        0].employee;
    document.getElementById('customer').innerHTML = 'Customer: \n' + prindata[
        0].customer;
    document.getElementById('createdDate').innerHTML = 'Date: \n' + prindata[
        0].createdDate;
    document.getElementById('createdTime').innerHTML = 'Time: \n' + prindata[
        0].createdTime;
    document.getElementById('printedDate').innerHTML = 'Printing date: \n' +
        prindata[0].printedDate;
    document.getElementById('printedTime').innerHTML = 'Time: \n' + prindata[
        0].printedTime;
    document.getElementById('subtotal').innerHTML = prindata[0].subtotal;
    document.getElementById('totalSum').innerHTML = prindata[0].totalSum;
    document.getElementById('discount').innerHTML = prindata[0].discount;
    document.getElementById('taxSum').innerHTML = prindata[0].taxSum;
    document.getElementById('includedTaxSum').innerHTML = prindata[0]
        .includedTaxSum;
    var isCopy = document.getElementById('isCopy');
    if (prindata[0].isCopy) {
        isCopy.style.display = 'block';
    } else {
        isCopy.style.display = 'none';
    }
    var discountRow = document.getElementById('discountRow');
    if (prindata[0].discount > 0) {
        discountRow.style.display = 'table-row';
    } else {
        discountRow.style.display = 'none';
    }
    var includedTaxRow = document.getElementById('includedTaxRow');
    if (prindata[0].includedTaxSum > 0) {
        includedTaxRow.style.display = 'table-row';
    } else {
        includedTaxRow.style.display = 'none';
    }

}

setDefualt();


function populateTable(data) {
    var table = document.getElementById('itemsData').getElementsByTagName('tbody')[0];
    data.forEach(function (item) {
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.innerHTML = "X" + Number(item.quantity).toFixed(2) + " " + item.name;
        cell2.innerHTML = Number(item.price).toFixed(2);
    });
}

// Call the function to populate the table with data from prindata
populateTable(prindata[0].items);

function edite(obj) {
    document.getElementById('orderId').innerHTML =
        'Invoice for Order #' + obj.id;
    document.getElementById('address').innerHTML = obj.address;
    document.getElementById('customer').innerHTML = 'Customer: \n' + obj
        .customer;
    document.getElementById('employee').innerHTML = 'Employee: \n' + obj
        .employ;
    document.getElementById('createdDate').innerHTML = 'Date: \n' + obj
        .createdDate;
    document.getElementById('createdTime').innerHTML = 'Time: \n' + obj
        .createdTime;
    document.getElementById('printedDate').innerHTML =
        'Printing date: ' + obj.printedDate;
    document.getElementById('printedTime').innerHTML = 'Time: \n' + obj
        .printedTime;
}