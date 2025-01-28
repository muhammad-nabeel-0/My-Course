let array = [10,20,30,40,50,60,70,80,90,100];
let sum = 0;
for(let a=0;a<10; a++){
    console.log(array[a]);
    sum = sum+array[a];

}
console.log("Total : "+ sum );
let dis = 10;
dis = sum*dis/100;
console.log("Discount:" + dis);
let total = sum-dis;
console.log("Total Bill :"+ " " + total);






