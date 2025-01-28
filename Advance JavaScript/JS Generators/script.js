// javascript ma Generators function ko name sa pala * ka use karna hota ha is hum value ko control kar sata ha is ka lea hum ko yield name ke property ka use karna hota han yield ko means paues is sa value paues ho gaye ge aghar hum na value ko use karna ha is ka lea next property ka use karta ha 

// Example Code //
function *generateit() {
    console.log("First");
    yield 'yield No.1'
    console.log("Second");
    yield 'yield No.2'
    console.log("Third");
}
let g = generateit();
console.log(g.next());
console.log(g.next());
