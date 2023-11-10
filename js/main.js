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
setTimeout(cleanScreen, 10000);  //30 secondi era troppo tempo :)

//chiedo uno alla volta i numeri visualizzati
setTimeout(number_in, 10100);



//mostro a schermo quanti numeri erano corretti
    //interazione html
setTimeout(verify_and_print, 10100);




