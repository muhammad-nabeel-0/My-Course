// map methods array ma value ko change karna ka lea use hota ha maghar map kie vaga sa vo new array ma value datea ha map ko use ka rna karna sa sie array ma koye changes ni hota ha map methods ka function or statement ka sata ma use karna sata ha 
// Example Code Let's Started //
const variable = [10,20,30,40,50]// hum na ak variable banva or is ma ak array bnaya or is koye value add kie //
const newVariavle = variable.map(result);// map method ko use karna ka lea ak or variable kie zhoort hote ha is ka hum function bana ho ga //
console.log(newVariavle); // Output check karna ka lea huma gis ma map method use hova ha in ko use karna ha..

function result(x){ // function ka sata use karna ha //
    return x * 3;
}

// map method ko array or object tona ka sate use kar ka check karta ha //
const arrobject = [
    {
        name:"Nabeel",
        age:20,
    },
    {
        name:"Noman",
        age:21,
    },
    {
        name:"Hamza",
        age:22,
    }
] 
const dataObject = arrobject.map(test);
console.log(dataObject);

function test(output){
    return output.name+ " :"+ output.age
};
