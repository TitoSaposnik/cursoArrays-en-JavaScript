/*
El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.
*/
const pets = ["cat","dog","bat","pig"];

let includeArray = false;
for (let i=0;i<pets.length;i++){
    const element = pets [i];
    if(element==="dog"){
        includeArray = true;
        break;
    }
}
console.log("Usando for ",includeArray);
const rta = pets.includes("dog");
console.log("Usando .includes", rta)