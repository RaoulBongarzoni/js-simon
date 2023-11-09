//funzione randomizzazione numeri


function random5(){
    let array_random = [];

    for (let i = 0; i < 5; i++){
        array_random[i] = parseInt(Math.floor(Math.random() * 10));
    }

    return array_random;


}