const elements = [0,1,2,3,4]
const othersElements =[5,6,7,8,9]

const newArray = [...elements]; //clonar el array para que no influya en otro caso
for (let i=0;i<othersElements.length;i++){
    const element = othersElements[i];
    newArray.push(element);
}
console.log("Usando for: ",newArray)

const rta = elements.concat(othersElements);
console.log("Usando concant: ",rta);

const rta2 = [...elements,...othersElements];
console.log("Usando split operations: ",rta2)