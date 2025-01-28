// javascript ma dom ko animation karna ka lea setInterval method use hota ha is ko use kar ka is method use karna ka lea hum sabe sa pala method ka name or is bate example ka lea => setInterval(functionName,millisecond) is tara ues karna ha /
// is ko hum millisecond ka se use kar sata ha  1000ms = 1second 
// clearInterval animation ko stop karna ka lea use ho ta ha //
// Example Code //
var a = 0;
var run = setInterval(Anim,100);
function Anim(){
    a = a + 10;
    console.log(a);
    
    if(a == 250){
        
        
        clearInterval(run);

    }else{
        var target = document.getElementById("test");
    target.style.marginLeft = a + "px";
    

    }
    
}
var id = setTimeout(Hello,4000);

function Hello(){
    var demo = document.getElementById("test1");
        demo.style.width = "500px";
    
}
function stopAnimation(){
    clearTimeout(id);
    console.log("stop");
    
}

