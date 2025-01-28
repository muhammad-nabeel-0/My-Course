// using break condtion in for loop //
for(var a = 1; a<10; a++){
    console.log(a);
    if (a == 3) {
        console.log('Stop');
        break;
        
        
    }
}
// using continue in for loop //
for(var a = 1; a<100; a++){
    if (a == 78) {
        console.log('Stop');
        continue;
    }
    if (a== 80) {
        console.log('Again Start');
        break;
    }
    console.log(a);
}

for( var a =1 ; a<120; a++){
    if(a == 110){
        console.log('start');
        continue;
    }
    if(a == 120){
        console.log('start');
        break;
    }
    console.log(a);
    
    
}