const months = ["January","February","March","April","May","june","July","August","September","October","November","December"]
months.sort();//Ordena por peso en la tabla ascii
console.log(months)

const monthsOrders = ['Febrero', 'Julio', "fsdf", 'Diciembre', 'Enero'];
function monthValue(month) {
    switch (month.toUpperCase()) {
        case 'ENERO':
            return 1;
        case 'FEBRERO':
            return 2;
        case 'MARZO':
            return 3;
        case 'ABRIL':
            return 4;
        case 'MAYO':
            return 5;
        case 'JUNIO':
            return 6;
        case 'JULIO':
            return 7;
        case 'AGOSTO':
            return 8;
        case 'SEPTIEMBRE':
            return 9;
        case 'OCTUBRE':
            return 10;
        case 'NOVIEMBRE':
            return 11;
        case 'DICIEMBRE':
            return 12;
        default:
            //Cualquier valor que no coincida se irá de último
            return 13; 
    }
}

monthsOrders.sort((a, b) => monthValue(a) - monthValue(b))

console.log(monthsOrders);

const numbers = [ 500,  13, 9, 1000, 15, 39, 24, 17, 1, 0, -56 ]
numbers.sort((a,b) => a-b);//de esta manera los ordena de mayor a menor
console.log(numbers);

const words = ["réserve","premier","árbol","amor","ballena","eclipse","agua","miguelito","Pochica","Mari"]
words.sort((a,b)=>a.localeCompare(b));//Con este comando los ordena alfabeticamente, indiferente sea el peso en la tabla ascii
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Tito",
        total: 30,
        delivered: true,
    },
    {
        customerName: "Mari",
        total: 2240,
        delivered: true,
    },
    {
        customerName: "Jonh",
        total: 140,
        delivered: false,
    },
];
orders.sort((a,b)=>b.total - a.total);//Ordena el array por el total mas alto al mas bajo
console.log(orders);

let ordersName = orders.sort((a,b)=>a.customerName.localeCompare(b.customerName));//Ordena albabeticamente por el nombre.
console.log(ordersName);