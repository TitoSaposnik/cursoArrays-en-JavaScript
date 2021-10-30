const elements = ["Fire","Air","Water","Earth","Wind"];

//Usando for.

let rtaFinal = " ";
const separator = " - "
for (let i=0;i<elements.length;i++){
    const item = elements[i];{
        if (i === elements.length -1){
            rtaFinal = rtaFinal + item;
        }else {
            rtaFinal = rtaFinal + item + separator;
        }
    }
}
console.log("Usando for: ",rtaFinal);

const rta = elements.join(" // ")
console.log ("Usando .join: ",rta);
/*
El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. 
Podemos pasarle cualquier elemento como separador que deseemos.
*/

//Hacer de un titulo, una url.
const title = "Curso de manipulacion de Arrays."
const urlFinal = title.split(" ").join("-").toLocaleLowerCase();
console.log(urlFinal);