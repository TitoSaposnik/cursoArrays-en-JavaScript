const names = ["Lui","Andres","Facu","Jonh","Krakosia"]
const newArray = []

for (let i = 0; i < names.length; i++){
    const element = names[i];
    newArray.push("The " + element);
}

//Aplicandolo con map: con .map se genera un nuevo array con la transformacion aplicada.
const newArrayMAP = names.map(item => "Le " + item);

console.log("original", names);
console.log("new", newArray);
console.log("Con Map", newArrayMAP);

//Caso de practica
const personas = [
    {name: "Tito", edad: 30},
    {name: "Mari", edad: 26},
    {name: "Pepe", edad: 37},
    {name: "Susi", edad: 100},
];
const app = document.getElementById("app");
const lis = personas.map(name => {
    return `<li>${name.name} - ${name.edad}</li>`
})
app.innerHTML = lis.join(" "); //Con join agarramos un array y lo ponemos en un string.