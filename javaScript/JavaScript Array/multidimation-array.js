var ary = [
    ["Ali",20,"Male","B.Com",2019],
    ["Ahmad",21,"Male","BSCS",2020],
    ["Amna",18,"Female","BSCS",2021],
    ["Saira",18,"Female","B.A",2022],
    ["Noor",18,"Female","B.A",2024],
    ["Ayesha",18,"Female","B.A",2022],
    ["Hamza",18,"Male","B.A",2021,"Toper"],
    ["Aleem",18,"Male","B.A",2020,"Averaje"],
];
// array ma aghar length add kara to add auto incresae hota raha ga
for(var a =0;a< ary.length ;a++ ){
    for(var b = 0;b<ary[a].length;b++){

        console.log(ary[a][b]);
    }
}
// arry ko change kar ka lea //
var ary  = ["Hello","World"];
ary[1] = "Nice";
console.log(ary);

// is tar use karna hoga array ka name or is ma index ke value add kar ka hum array ma kise be index ko change kar sata ha//
// or array ko delete karna ka lea // 
var b =  [
    "Hello","Nice"
];
delete b[1]; // is tara hum delete kara sata ha //
console.log(b);
