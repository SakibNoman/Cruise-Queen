var firstClass = document.getElementById("first-class-input").value;
var firstClassNumber = parseInt(firstClass);


document.getElementById("first-class-plus").addEventListener("click",function(){
    firstClassNumber++;
    document.getElementById("first-class-input").value = firstClassNumber;
})
document.getElementById("first-class-minus").addEventListener("click",function(){
    if(firstClassNumber){
        firstClassNumber--;
    }
    document.getElementById("first-class-input").value = firstClassNumber;
})


var economyClass = document.getElementById("economy-class-input").value;
var economyClassNumber = parseInt(economyClass);


document.getElementById("economy-class-plus").addEventListener("click",function(){
    economyClassNumber++;
    document.getElementById("economy-class-input").value = economyClassNumber;
})
document.getElementById("economy-class-minus").addEventListener("click",function(){
    if(economyClassNumber){
        economyClassNumber--;
    }
    document.getElementById("economy-class-input").value = economyClassNumber;
})
