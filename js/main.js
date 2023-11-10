//genero 5 numeri casuali
    //funzione math random
    //mostro a schermo i 5 numeri


const random=random5();
var my_array=[];
const name_helper=["primo", "secondo", "terzo", "quarto", "quinto"]



for (let i = 0; i<5 ; i++){

    document.getElementById("numeri").innerHTML += ` <span class="text-white"> ${random[i]} </span>`;
}

//attendo 30 secondi
    //timing function
setTimeout( cleanScreen , 10000);

//chiedo uno alla volta i numeri visualizzati
setTimeout(number_in, 10100);



setTimeout(verify_and_print, 10100);


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
//mostro a schermo quanti numeri erano corretti
    //interazione html

