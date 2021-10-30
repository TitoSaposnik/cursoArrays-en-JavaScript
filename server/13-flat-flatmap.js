const matriz = [
    [1,2,3],
    [4,5,6,[1,2,[3,4]]],
    [7,8,9]
];

const newArray = []
for (let i = 0; i<matriz.length; i++){
    const array = matriz[i];
    for (let j=0;j<array.length;j++){
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log("Usando for: ",newArray);


//Método flat : manipular arrays que tienen arrays dentro y volverlos un solo array.
const rta = matriz.flat(3); //Le podemos decir hasta que nivel queremos aplanar el array
console.log("Usando flat: ",rta)

//Aplicando FlatMap.
const users = [
    {userId:1, username:"Tito", attributes:["Ugly","Cute","Strong"]},
    {userId:2, username:"Mari", attributes:["Lovely","Pretty"]},
    {userId:3, username:"Facu", attributes:["Good","Beautiful"]},
    {userId:4, username:"Jonh", attributes:["Nice","Intelligent","Handle"]},
]
const rta2 = users.map(users => users.attributes).flat();
console.log(".map y .flat por separados: ",rta2)

const rta3 = users.flatMap(user=> user.attributes);
console.log("usando flatmap: ",rta3)

//Reto
const calendars = {
    primaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
        },
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
        },
        {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
        },
    ],
};
const rta4 = Object.values(calendars).flatMap(i=>{
    return i.map(date => date.startDate);
});
console.log(rta4);