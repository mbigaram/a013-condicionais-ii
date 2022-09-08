
// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3


const num = Number(prompt("Digite um número:"))

// if (num%2===0){
//     console.log("É divisivel por 2")

//     if (num%3===0){
//         console.log("É divisivel por 3")

//         }else{
//             console.log("Não é divisivel por 3")
//         }
// }else if (num%3===0){
//     console.log("É divisivel por 3")
//     console.log("Não é divisivel por 2")
// }else{
//     console.log("Não é divisivel por 2 nem 3");
// }


if (num % 2 === 0 || num % 3 === 0){
    console.log("É divisivel por 2 ou 3")

}else {
    console.log("Não é divisivel por 2 ou 3")

}

