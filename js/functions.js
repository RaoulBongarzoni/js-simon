//funzione randomizzazione numeri


function random5(){
    let array_random = [];

    for (let i = 0; i < 5; i++){
        array_random[i] = parseInt(Math.floor(Math.random() * 10));
    }
    console.log("assegno l'array");
    console.log(array_random);
    
    return array_random;


}