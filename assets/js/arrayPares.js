//Atividades:
//Trocar todos os elementos pares diferente de zero pelo número zero e se o array for vazio retornar -1 

function substituiPares(array){
    if (!array.length) return -1;
    for(let i = 0; i < array.length; i++ ){
        if(array[i] === 0){
            console.log("O valor já é zero!")
        }else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0`)
            array[i] = 0;
            
        }
    }
    
    return array; 
}
let arr = [1, 3, 4, 6, 80, 33, 23, 90, 0]


console.log(substituiPares(arr));