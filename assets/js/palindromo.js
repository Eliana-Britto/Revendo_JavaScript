/*Solução 1*/

// function verificaPalindromo(string){
//     if(!string) return "string inexistente";

// return string.split("").reverse().join("") == string;
// }
// console.log(verificaPalindromo("omo"));
// Solução 2
//OMO metade do percuso sendo que a Último caracter é igual o primeiro 

//comparar as palavras
//omo
//012    
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for( let i = 0; i < string.length /2; i++) {
        if(string[i] !== string[string.length -1 -i]){
        return false;
        }       
    }

    return true;
}
console.log(verificaPalindromo2("omo"))


