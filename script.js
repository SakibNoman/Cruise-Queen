document.getElementById("first-class-plus").addEventListener("click", function() {
    btnPlusMinus("first-class-input", true);
})
document.getElementById("first-class-minus").addEventListener("click", function() {
    btnPlusMinus("first-class-input", false);
})
document.getElementById("economy-class-plus").addEventListener("click", function() {
    btnPlusMinus("economy-class-input", true);
})
document.getElementById("economy-class-minus").addEventListener("click", function() {
    btnPlusMinus("economy-class-input", false);
})

//function for increment or decrement
function btnPlusMinus(id, isPlus) {
    var numOfTicket = document.getElementById(id).value;
    var numOfTicketInt = parseInt(numOfTicket);
    if (isPlus == true) {
        numOfTicketInt++;
    } else { //prevent minus input
        if (numOfTicketInt > 0) {
            numOfTicketInt--;
        }
    }
    document.getElementById(id).value = numOfTicketInt;
    subTotal();
}

//function for calculating subtotal and calling vat function
function subTotal() {
    const firstClassFair = 150;
    const economyClassFair = 100;
    var firstClass = parseInt(document.getElementById("first-class-input").value);
    var economyClass = parseInt(document.getElementById("economy-class-input").value);
    var subTotalInt = (firstClass * firstClassFair) + (economyClass * economyClassFair);
    document.getElementById("subtotal").innerText = "$ " + subTotalInt;
    vat(subTotalInt);

    //checking if ticket number is 0 for confirmation screen
    if (firstClass == 0 && economyClass == 0) {
        return false;
    }
    return true;
}

//function for calculating vat and calling grandTotal function
function vat(subTotalInt) {
    vatRate = 0.10;
    var totalVat = subTotalInt * vatRate;
    document.getElementById("vat").innerText = "$ " + totalVat;
    grandTotal(subTotalInt, totalVat);
}

//function for calculating grand total
function grandTotal(subTotalInt, totalVat) {
    document.getElementById("total").innerText = "$ " + (subTotalInt + totalVat);
}

//functionality of confirmation part
document.getElementById("book-btn").addEventListener("click", function() {
    if (subTotal() == false) {
        document.getElementById("main-part").style.display = "none";
        document.getElementById("confirmation-text").innerText = "Your Cart is Empty!!!";
        document.getElementById("confirmation-text").style.color = "red";
        document.getElementById("confirmation-page").style.display = "block"
    } else {
        document.getElementById("main-part").style.display = "none";
        document.getElementById("confirmation-page").style.display = "block"
    }
})