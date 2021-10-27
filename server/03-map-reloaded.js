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
];
console.log("Original",orders);
const rta = orders.map(item => item.total);
//Con map puedo seleccionar datos, para seleccionar solo con los datos que quiero trabajar.
console.log("rta",rta);

/* const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
}) */
//Con esta rta2 si modifica el estado en memoria del array original.

const rta3 = orders.map((item)=> {
    return {
        ...item,
        tax: .19
    }
})
//En rta3 si respeta el array original.
console.log("rta3",rta3)
/*
Esta clase es otro nivel. Yo hubiera pensado que map mutó mi array, pero resulta que no, que solo lo dejó en la referencia de la memoria. Y la técnica para agregar sin cambiar la referencia vale su peso en oro.

Usos comunes o clásicos de map() sobre los arrays:
- Limpiar datos, seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.
- Añadir un nuevo elemento, modificar agregando un nuevo dato al objeto pero sin modificar el array original.
*/