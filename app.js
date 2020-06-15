var x = "Enter your age";
var y = "Your age is:"
var a = +prompt(x,y);
var b = a + 10;
document.write("The output is"+ ""+ b)
var age = 16;
if(age == 28){
    alert("Your age is equal")
}
var x = 5;
var y = 10;
var a = 30;
var b = 15;
if(x+y === a-b){
    alert("Correct")
}
else{
    alert("Incorrect")
}
var percent =+prompt("Enter your percent")    
if(percent >=80 && percent <= 100){
    alert("A+")
}
else if(percent >= 70 && percent <= 80){
    alert("A")
}
else if(percent >= 60 && percent <= 70){
    alert("B")
}
else if(percent >= 50 && percent <= 60){
    alert("C")
}
else if(percent >= 40 && percent <= 50){
    alert("D")
}
else if(percent >= 33 && percent <= 40){
    alert("E")
}
else if(percent >= 0 && percent <= 33){
    alert("F")
}
else{
    alert("you did not write correct percentage")
}
var name = "Hanzala";
var name1 = "Noor";
var name2 = "Amin";

console.log(name1)
console.log(name2)

var students = ["Hanzala","Noor","Amin",123]

alert("Welcome" + students[3])

var names = [];

names[0]="Hanzala";
names[1]="Noor"

console.log(names)

// var students = ["Hanzala","Noor","Amin"]
// students.pop()

// students.push("Bilal","Huzaifa")

// students.shift()

// var students.unshift("Huzaifa","Hamza")

// students.splice(1,1)

// var copystudents = students.slice(1,4)

// console.log(students)

// console.log(copystudents)

var x;
for(x = 1; x <= 10 ; x++){
    console.log(x)
}
for(var i =0; i<5; i++){
    alert("Hello Sir")
}
document.write("2"+"x"+"1"+"="+2*1 +"<br>")
document.write("2"+"x"+"2"+"="+2*2 +"<br>")
document.write("2"+"x"+"3"+"="+2*3 +"<br>")
document.write("2"+"x"+"4"+"="+2*4 +"<br>")
document.write("2"+"x"+"5"+"="+2*5 +"<br>")

var names = ["Hanzala","Noor","Amin"];

for(var i = 0; i <names.length; i++){
    console.log(names[i])
}
var cities = ["karachi","islamabad","lahore","Faisalabad"];

for(var i = 0; i<cities.length; i++){
    if(cities[i] === "karachi"){
        alert(Cities[i] + "is a cleanest city!")
    }
}
for(var i =0; i > 0; i++){
    if(i === 10){
        break
    }
  console.log("Hello")
}

// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 3 j++){
//         document.write("Pakistan Zindabad" + "<br>")
//     }
// }

var firstnames = ["Hanzala","Noor","Amin"]
var lastnames = ["Ahmed","Ali"]

for(var i = 0; i < firstnames.length; i++){
    for(var x = 0; x < lastnames.length; x++){
        console.log(firstnames [i] + "" + lastnames [x])
    }
}















































