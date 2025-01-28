//javascript ma ak new method aya is ka name lterators ha loop kie tara kam karta ha 
// Example CODE //
let number = [100,200,300,400,500,600];
let arr = number[Symbol.iterator]();
let result = arr.next();

while(!result.done){
    console.log(result.value);
    result = arr.next();
}
// One more example code //
let str = "Hamza Ali";
for(let char of str){
    console.log(char);
}

// Example //
let demo = [100,120,140,160,180,200];
let num = numberIter(demo);

function numberIter(arrt){
    var nextNum = 0;
    return {
        next(){
            if(nextNum < demo.length){
                return {
                    value : demo[nextNum++],
                    done : false
                }
            }else{
                return{
                    done : true
                }
            }
        }
    }
}
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
