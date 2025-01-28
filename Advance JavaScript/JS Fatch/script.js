// JS ma Fatch ka use ajax ka tor par use kar sata ha fatch() method server sa data recive karna or update karna ga lea 
/* fetch() methods
 .Insert =>
 .Update =>
 .Read =>
 .Delete =>
 fetch() sytax 
 fetch() method ka inder he file ka path dana hota ha fatch() method hum ko promise retrun karta ha
*/
// Example Code //

fetch('./data.json').then((res)=>{
    return (res.json());
    
})
.then((data)=>{
    console.log(data);
    for(var x in data){
        var a = `${data[x].name} - ${data[x].age} - ${data[x].city}`;
        console.log(a);
    }
})
.catch((error)=>{
    console.log(error);
    

});

