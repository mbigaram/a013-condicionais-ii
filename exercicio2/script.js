
let nacionalidade2
const nacao = prompt("digite aqui a nacionalidade").toLowerCase()

switch (nacao) {
    case "brasileiro":
        nacionalidade2 = "a pessoa é do Brasil!"
        console.log(nacionalidade2)
        break
    case "argentina":
        nacionalidade2 = "a pessoa é da Argentina!"
        console.log(nacionalidade2)
        break; 
    case "uruguaio":
        nacionalidade2 = "a pessoa é do Uruguai!"
        console.log(nacionalidade2)
        break
    case "chileno":
        nacionalidade2 = "a pessoa é do Chile!"
        console.log(nacionalidade2)
        break;
    case "colombiano":
        nacionalidade2 = "a pessoa é do Colombia!"
        console.log(nacionalidade2)
        break;     
    default:
        console.log("nacionalidade não encontrada")
        
}

// let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }