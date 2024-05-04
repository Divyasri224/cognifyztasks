const body=document.getElementsByTagName("body")[0]

function setColor(name){
body.style.backgroundColor=name;
}
function randomColor(){
    const pink = Math.round(Math.random()*255)
    const red = Math.round(Math.random()*255)
    const purple = Math.round(Math.random()*255)
    const color=`rgb(${pink},${red},${purple})`
    body.style.backgroundColor=color;
}
randomColor()
alert(" Welcome to Cognifyz Technologies Internship")
var a = Number(prompt("enter first number"));
var b= Number(prompt("enter second nummber"));
alert("sum of 2 numbers is "+ (a+b));