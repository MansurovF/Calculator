//////////TASK1///////
var first,second
let Presult= document.getElementById("Presult")
let Aresult=document.getElementById("Aresult")

function perimt() {
    first=document.getElementById("first").value
    second=document.getElementById("second").value

    Presult.innerHTML= 2*(parseFloat(first)+parseFloat(second))

}
function areasult() {
  first = document.getElementById("first").value  
  second=document.getElementById("second").value
  
  Aresult.innerHTML=first*second
}

let button=document.getElementById("button")
let button2=document.getElementById("button2")
button.onclick=perimt;
button2.onclick=areasult;



/////TASK2////

//console.log(Math.pow(2,5));

