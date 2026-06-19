function createInvoice() {

    let customer = document.getElementById("customer").value;
    let product = document.getElementById("product").value;
    let qty = Number(document.getElementById("qty").value);
    let price = Number(document.getElementById("price").value);

    if(customer=="" || product=="" || qty<=0 || price<=0){
        alert("Please fill all fields.");
        return;
    }

    let subtotal = qty * price;
    let gst = subtotal * 0.18;
    let total = subtotal + gst;

    document.getElementById("result").innerHTML = `
        <h2>Invoice</h2>
        <hr>
        <p><strong>Customer:</strong> ${customer}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${qty}</p>
        <p><strong>Price:</strong> ₹${price}</p>
        <p><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</p>
        <p><strong>GST (18%):</strong> ₹${gst.toFixed(2)}</p>
        <h3>Total: ₹${total.toFixed(2)}</h3>
    `;
}
