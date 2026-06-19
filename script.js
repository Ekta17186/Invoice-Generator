document.getElementById('invoiceDate').valueAsDate = new Date();

function addRow() {
    const tbody = document.getElementById('itemRows');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td><input type="text" class="item-desc" placeholder="Item Name"></td>
        <td><input type="number" class="item-qty" value="1" min="1" oninput="calculateTotal()"></td>
        <td><input type="number" class="item-price" value="0" min="0" oninput="calculateTotal()"></td>
        <td class="item-total">₹0.00</td>
        <td><button class="btn-danger" onclick="deleteRow(this)">X</button></td>
    `;
    
    tbody.appendChild(row);
    calculateTotal();
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    calculateTotal();
}

function calculateTotal() {
    const rows = document.querySelectorAll('#itemRows tr');
    let subTotal = 0;

    rows.forEach(row => {
        const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
        const price = parseFloat(row.querySelector('.item-price').value) || 0;
        const total = qty * price;
        
        row.querySelector('.item-total').innerText = '₹' + total.toFixed(2);
        subTotal += total;
    });

    const tax = subTotal * 0.18;
    const grandTotal = subTotal + tax;

    document.getElementById('subTotal').innerText = '₹' + subTotal.toFixed(2);
    document.getElementById('taxTotal').innerText = '₹' + tax.toFixed(2);
    document.getElementById('grandTotal').innerText = '₹' + grandTotal.toFixed(2);
}
