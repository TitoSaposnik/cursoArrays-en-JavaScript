const numbers = [1,20,11,320,10,13]

let rta = undefined;
for (let i=0;i<numbers.length;i++){
    const element = numbers[i];
    if(element===30){
        rta = element;
        break;
    }
}
console.log("Usando for: ",rta);

const rta2= numbers.find(i => i === 30)
console.log("Usando .find: ",rta2);
/*
El método find() devuelve el primer elemento del array que cumpla con la condición dada o no devuelve undefined si es que no encuentra ningún elemento que cumpla los requisitos pedidos.
*/


//Practica.
const products = [
    {
        name: "Pizza",
        price: 50,
        id: "🍕",
    },
    {
        name: "Burguer",
        price: 80,
        id: "🍔",
    },
    {
        name: "Fries",
        price: 20,
        id: "🍟",
    },
    {
        name: "HotDog",
        price: 10,
        id: "🌭",
    },
    {
        name: "HotCake",
        price: 35,
        id: "🥞",
    }
]
const rta3 = products.find(i=>i.id === "🍔")
const rta4 = products.findIndex(i=>i.id === "🍔")//con findIndex busca la posicion del elemento
console.log("Usando .find y emojis xd: ",rta3)
console.log("Posicion de 🍔 es: ",rta4)
