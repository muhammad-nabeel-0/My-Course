for(var a = 1; a <=5; a++){
    for(var b = 1; b <=a; b++){
        console.log(b + " ");

    }
}

for(var a = 1;a <=5;a++){
    let row = " ";
    for(let i = 1; i<=a; i++){
        row+=a;
    }
    console.log(row);

}
// example code ma ham row and colume ma same value print kara ga i ka lea //
// demo code write kara ta ho //

for(var a = 1;a<=10;a++){
    let row = " "
    for(b= 1; b<=a;b++){
        row+=a;
    }
    console.log(row);

}

// 1
// 12
//123
//1234
//12345


for (let a = 1; a <= 5; a++) {
    let x='';
  for (let b = 1; b <= a; b++) {
   x+=b
}
console.log(x);
}

// task print number 1 to 10 in line//
for(let a = 1; a<=5;a++){
    let row = "";
    for (let b = 1; b<=a; b++){
        row+=a;
    }
    console.log(row);
    
}

// reverse loop // 
for(let a = 5; a>=1;a-- ){
    let row = " ";
    for (let b = 1; b<=a; b++){
        row+=b;
    }
    console.log(row);
    
}

