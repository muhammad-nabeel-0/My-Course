// sort array ko alphabetical order ma karna ka lea use hota ha //
// Example ka lea first ma A or end ma Z //
// Sort Method sa //
var a = ["Hello","Ali","Baber","Osman","Zeshan","Noman","Saira"];
a.sort();
console.log(a);

// Reverse array ka change karta ha jo be fist ma ha vo end ma ho gaya ka or jo end pa ha first ma ho gaya ga //
// Example Code //
// reverse Method sa // 

var b = ["Ali","Osamn","Umar","Ayesha","Saira"];
b.reverse();
console.log(b);  
// output :[ 'Saira', 'Ayesha', 'Umar', 'Osamn', 'Ali' ] //


// pop array ma last kie value ko traget kara ha or is ko delete karta ha pop array last value delete karna ka lea use hota ha.//
// Example Code//

var c = ["Osman","Ali","Hamza","Aleem"];
c.pop();
console.log(c);
// output: is na last kie value ko delete kar first vala 3 ko print kar dia//
// [ 'Osman', 'Ali', 'Hamza' ] //

// Push Method last ka value ko add kara ka lea use hota ha //
// Example Code //

var d= ["This is Example or ","Push Code"]; // + "Hello" add ho ga //
d.push("Hello"); // jo be push ka method ka add kar ga vo array ka last ma add ho gaya ga../
console.log(d);
// output: [ 'This is Example or ', 'Push Code', 'Hello' ]  ha //

// Shift Array ke first vale value ko delete karna ka lea use hota ha //
// Example Code // 

var e = ["Hello","World ","How","are","you"];
e.shift();
console.log(e);

// Unshift First ma value add ka ka lea use hota ha//
// Example Code //
var f= ["World"];
f.unshift("Hello");
console.log(f); // Hello first ma add ho gaya ga //

// Array Concat function:
                  //  concat 2 array ko add kara ka lea use hota ha. example ka lea humara pass 2 array ha or hum na in ko 1 array ma hie print ka la to hum Concat Function ka use kar..
// Example Code //

const First = ["First Value"];
const Second = First.concat("Second Value"); // OR
// var c  = First.concat(b);
console.log(Second);


// Array Join Function:
                // Join Fuction array ka sare value ko ak he value ma change ka data ha...//
// Example Code //
const Third = Second.join( " _ ")
console.log(Third);

                







