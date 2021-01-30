
document.getElementById("first-class-plus").addEventListener("click", function () {
    btnPlusMinus("first-class-input",true);
})

document.getElementById("first-class-minus").addEventListener("click", function () {
    btnPlusMinus("first-class-input",false);
})

document.getElementById("economy-class-plus").addEventListener("click", function () {
    btnPlusMinus("economy-class-input",true);
})

document.getElementById("economy-class-minus").addEventListener("click", function () {
    btnPlusMinus("economy-class-input",false);
})

function btnPlusMinus(id,isPlus) {
    var numOfTicket = document.getElementById(id).value;
    var numOfTicketInt = parseInt(numOfTicket);
    if(isPlus == true){
        numOfTicketInt++;
    }
    else{
        if(numOfTicketInt>0){
            numOfTicketInt--;
        }
    }
    document.getElementById(id).value = numOfTicketInt;
}