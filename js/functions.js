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



function number_in(){
    
    for (let i = 0; i<5; i++){
        my_array[i]=prompt(`inserisci il ${name_helper[i]} numero`);
    }
    console.log(array);
    
}


function cleanScreen(){
    document.getElementById("numeri").innerHTML = "";
}



function verify_and_print(){

    for (let i = 0; i<5; i++){
        if (random[i] == my_array[i]){

            document.getElementById("numeri").innerHTML += ` <span class="text-light"> ${random[i]} </span>`;

        }else {

            document.getElementById("numeri").innerHTML += ` <span class="text-danger"> ${random[i]} </span>`;

        }
    }
}





