// Alert box code //
// var a = 78;
// var b = 2
// if (a > b) {
//     alert("A is Greater");
// }
// else{
//     alert("B is Greater");
// }

// Confirm box code // 

// var a  = confirm("Do You Like Our Websits")
// if (a) {
//     alert("Thanks")
    
// }
// else{
//     alert("Sorry")
// }
// prompt code// 
var a = prompt("Enter your Percentage ?")
if (a >=80 && a <=100)   {
    document.write("You are in Merit.")
}
else if (a >=60 && a < 80) {
    document.write("You are in Ist Division.")
    
}
else if (a >=45 && a < 60) {
    document.write("You are in IInd Division.")
    
}
else if (a >=33 && a < 45) {
    document.write("You are in IIIrd Division.")
    
}
else if (a < 33) {
    document.write("You are Fail.")
    
}
else{
    document.write(" Please Enter a Vaild Percentage")
}
