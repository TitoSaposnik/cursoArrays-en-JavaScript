const letters = ["a","b","c"];

//Aplicando un for.
for (let i = 0; i < letters.length; i++){
    const element = letters [i];
    console.log("Usando for",element);
}

//Haciendo lo mismo pero con forEach
letters.forEach(item => console.log("Usando forEach",item))

//Practica
const products = [
    { title: "Burger", price: 12},
    { title: "Pizza", price: 24},
    { title: "HotDog", price: 8},
    { title: "Asado", price: 30},
]
const app = document.getElementById("app");
products.forEach(product =>{
    app.innerHTML += `<li>${product.title} - ${product.price}</li>`;
})