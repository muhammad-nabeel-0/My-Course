// // Array ma some methods conditon ko check karta ha condition ture ha false//
var ages = [12, 16, 17, 19];
var b = ages.some(checkAdult);
console.log(b);
function checkAdult(ages) {
  return ages >= 18;
}

// // One more Function // is ma ham na ik array banva or is ka bade is ma ek
var number = [50, 60, 70, 90];
var person = number.some(checkResult); // some ma aghar ak be condition ka  hoga to condtion ture hoge
console.log(person);
function checkResult(number) {
  return number >= 70;
}
// Every array ma aghar sube conditon ka  = hoga to se conditon ture hoge//
// Example code //
var c = [21, 20, 30, 40, 50];
var d = c.every(showConditon);
console.log(d);
function showConditon(c) {
  return c >= 20;
}
// find method  conditon ko check kara ka ahar conditon ture hoge to vo first vala ka index show kara ka//
var x = [20, 30, 40, 50, 70];
var y = x.find(lastValue); // find value find karna ka lea use hota ha
console.log(y);
function lastValue(x) {
  return x >= 70;
}
// findIndex value kie index find karna ka lea use hota ha //
// Example Code //
var x = [20, 30, 40, 50, 70];
var y = x.find(lastValue); // findIndex index find karna ka lea use hota ha
console.log(y);
function lastValue(x) {
  return x >= 70;
}
// Filter array ma condition ko check krana ka bade to be value hota ha in ka ak new array banta ha..//
// Example code //
var k = [20, 50, 44, 58, 60];
var n = k.filter(filterData); // filter array ka to value ko search karta ha is ka ak new array ma change karta ha..//
console.log(n);
function filterData(k) {
  return k >= 60;
}
// Array ma toString method array ko string ma change karna ka lea use hota ha is ka bate array ka koye method use ni ho ga //
// Example Code //
const arr = ["This", "is", "String"];
let arr2 = arr.toString(); // aghar array ko string ma change karna ka lea ek or variable ma bana ka use karna ho ga //
console.log(arr2);

//Array ma ValueOf methods defults methods hota ha ValueOf array ma tobe //
const array1 = ["Hello","This","is","my","code"];
console.log(array1);
// Fill Methods sabe value ko ak he value ma change karna ka lea use hota ha //
const fillData = ["Ali","Hamza","Adil","Usman","Omar","Hassan", "Zeshan","Aleem"];
fillData.fill("ali");
console.log(fillData);

// Array ma forEach array kie value ko bara bara use karna ka lea use hota ha..//
// forEach ma value ka sate index be find ho gata ha //
// Example Code //
const bodyData = ["Hello","Ali","Hamza","Umar"];
bodyData.forEach(loop);
function loop(value,index){
    console.log(value,index);
    


} 



