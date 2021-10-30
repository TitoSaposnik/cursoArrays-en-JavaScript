const products = [
    { title: "Pizza", price: 90, id: "🍕" },
    { title: "Burger", price: 80, id: "🍔" },
    { title: "Hot cakes", price: 20, id: "🥞" },
    { title: "Hot dogs", price: 15, id: "🌭" },
    { title: "Fries", price: 10, id: "🍟" },
    { title: "Hard-boiled egg", price: 5, id: "🥚" },
    { title: "Salad", price: 20, id: "🥗" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(i=>i.id === "🥚");
if(productIndex !== -1 ){
    myProducts.push(products[productIndex]);//Si encuentra el elemento lo agrega a mis productos
    products.splice(productIndex,1)
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update
const productsV2= [
    { title: "Pizza", price: 90, id: "🍕" },
    { title: "Burger", price: 80, id: "🍔" },
    { title: "Hot cakes", price: 20, id: "🥞" },
    { title: "Hot dogs", price: 15, id: "🌭" },
    { title: "Fries", price: 10, id: "🍟" },
    { title: "Hard-boiled egg", price: 5, id: "🥚" },
    { title: "Salad", price: 20, id: "🥗" },
]
const update ={
    id: "🍔",
    changes: {
        price: 200,
        description: "Delicioso"
    }
}
const productV2Index = productsV2.findIndex(i=> i.id === update.id);
productsV2[productV2Index] = {
    ...productsV2[productV2Index],
    ...update.changes,
}
console.log(productsV2) //Sobrescribio todo el objeto