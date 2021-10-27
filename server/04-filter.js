const words = ["Agua","Celular","Cuchillo",
                "Trapo","Modem","Peluche",
                "Caja","Remera","Lentes",
                "Dinosaurio", "Rio","Piramide"
            ]
const newArray = [];
for (let i = 0; i < words.length; i++){
    const item = words[i];
    if(item.length >= 6){
        newArray.push(item);
    }
}
console.log("words",words)
console.log("newArray con for",newArray)

//Aplicando filter
const rta = words.filter(item => item.length>= 7);
console.log("rta con filter",rta)

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

const rta2 = orders.filter (item =>item.delivered && item.total>=100)
console.log(rta2)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
        //el método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda
    })
}
console.log(search("Ro"));
/*
filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.


Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:
- cero coincidencias
- todas coincidencias
- algunas coincidencias

Pero nunca más coincidencias que el tamaño del array original.
*/
