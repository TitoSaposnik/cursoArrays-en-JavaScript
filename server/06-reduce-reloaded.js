const items = [1,1,1,2,2,3,3,3,3,3,3,4,4,4,4,5,6,6,6,6,
                8,8,8,8,8,8,8,9];

const rta = items.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item]+1;
    }
    return obj;
},{});

console.log(rta)
const ranges = ["1-4","5-7","8-10"];
const result = items.reduce((acum,item)=>{
    if (item<=4){
        !acum[ranges[0]] ?
        acum [ranges[0]] = 1:acum[ranges[0]] +=1;
    }else if(item >4 && item <8){
        !acum[ranges[1]] ?
        acum [ranges[1]] = 1:acum[ranges[1]] +=1;
    }else{
        !acum[ranges[2]] ? 
        acum [ranges[2]] = 1:acum[ranges[2]] +=1;
    }
    return acum
},{})
/*
Operador if ternario: se lee de izq a derecha asi: ¿La condicion retornatrue? entonces se aplica lo que va seguido del signo de interrogacion, en caso de retornar false, se ejecutara lo que se encuentra despues de los dos puntos.
*/
console.log(result)

/*
Devolver un solo objeto, aunque contenga “muchos elementos” sigue siendo un solo elemento de tipo objeto, y es por eso que se dice que reduce() solo devuelve un único valor.
*/

//Practica.
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);