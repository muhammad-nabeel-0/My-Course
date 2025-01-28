// JavaScript ma Dom ka zare be styling kar raha ha //
// aghar hum ko na javaScript ma css ke styling kar gis tara mun css ma - ko use karta ha javaScript ma - kie jaka Capital Letter use karsata ha //
// Dom sa style ka method ko use kar ka //
document.querySelector(".header").style.backgroundColor = "red"; // is tara hum javascript ko use kar ka styling kar sata ha 
document.querySelector(".header").style.borderRadius = "10px";;
var styling = document.querySelector(".header").style.backgroundColor;
console.log(styling);
document.querySelector(".header").style.fontSize = "16px";

// ab hum className ka sate check kara ga is method ko use kar ka hum ak new class add kare ga   //
document.querySelector(".header").classList = "hello nice";

// classList is  class ko array ma return kata ha 


// Dom addEventLister 
document.getElementsByClassName("header").onclick = ll;
function ll(){
    document.getElementsByClassName("header").style.background = "green";
}



