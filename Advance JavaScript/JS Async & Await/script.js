// Asyns function hum ko promise return karta ha 
// Example Code //
 async function text(){
    console.log("2 : Message");
    await console.log("3 : Message");

    console.log("4 : Message");
}
  console.log("1 : Message");
text();
console.log("5 : Message");



// await method be async method ka inder he work karna ka lea use hota ha await method wait karnva ka lea use karta ha
