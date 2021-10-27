const numbers = [1,1,3,7,5,7,7,9,2];

let rta = false;
for (let i = 0; i<numbers.length; i++) {
    const element = numbers[i];
    if(element % 2 === 0){
        rta = true;
        break;
    }
}

console.log(rta)

const rta2 = numbers.some(element=> element % 2 === 0);
console.log("Aplicando some",rta2) //Este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición.

//Practica
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Rotina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "roberto",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Roque",
        total: 40,
        delivered: false,
    },
];
const rta3 = orders.some(item=>item.delivered);
console.log("rta3",rta3)