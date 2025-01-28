// number method ma 7 methods ha is sabe sa first ma number methods ata ha//
// Number methods string ko number ma change karna ka lea use hota ha //
//------------------------------ !!!!! ------------------------//
// Example Code //
let a = "50";
let b = Number(a);// number string ko number ma change karna ka use hota ha //
console.log(b + 20);// number ka koye or number ka be add kara sata ha //
//------------------------------ !!!!! ------------------------//
// parselnt method be number kie tara he kam karta ma magher aghar ma is ma dasemale ma value taka vo is ko integar ma change kara ka parselnt sab sa first vale integar value ko return kar ka
// Example Coed //
let c = "20.22 30 40";
let d = parseInt(c);
console.log(d);

//------------------------------ !!!!! ------------------------//
// or parseFloat  ma agahr hum is ko without disemale ma datea ha vo is ko disemale ma change karta ha  float hame vo vale dot value return karte ha  //
let e = "20.22 30 40";
let f = parseFloat(e);
console.log(f);
//------------------------------ !!!!! ------------------------//
// isFinite methods ture or false ma answer return karta ha isFinite condition ka sate use karta ha isFinite given value ko check karta ha aghar value ko count kie ga to true ho ga aghar count ni ho ta false ho ga  //

let g = 20; // aghar hum na number ma check karne ha sa to isFinite sa pala number be aya ga //
let h = Number.isFinite(g);
console.log(h);
//------------------------------ !!!!! ------------------------//
// isInteger is lea use hota ha value integer ha ka ni aghar value integer ho to ture aghar na ho to false   //
let i = 20;
let l = Number.isInteger(i);
console.log(l);

//------------------------------ !!!!! ------------------------//
// toFixed method dot ka bate ana vale value ko fixed karta ha ha toFixed dot ka bade vale value ka lea use hota ha //
let m = 20.3450;
let n = m.toFixed(3);
console.log(n);
//------------------------------ !!!!! ------------------------//
// toPrecision methods dot ka bade ane vale value ka lea use hota ha ghar dot ka bade value .5 sa zata ha to is ko change kara ka
let o = 20.567;
let p = o.toPrecision(3);
console.log(p);



 