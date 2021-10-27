const numbers =[1,30,21,24,29,13,12,41]

let rta = true;
for (let i = 0; i< numbers.length;i++){
    const element = numbers[i];
    if (element >= 40){
        rta = false
    }
}
console.log("Con For",rta);

const rta2 = numbers.every(item => item <= 40);//Este método es el contrario a some(), devuelve true o false sí TODOS los elementos del array cumplen la condición.
console.log("Con every",rta2)

//practica
const team = [
    {
        name: "Nicolas",
        age: 2,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 9,
    },
];

const allAreYounger = team.every(item => item.age < 18);
console.log(allAreYounger)