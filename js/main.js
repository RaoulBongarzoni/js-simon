
const n = parseInt(prompt("quanti numeri vuoi visualizzare?" , "5"));
const random_array=get_n_random(n);
var my_array=[];
const name_helper=["primo", "secondo", "terzo", "quarto", "quinto","sesto","settimo","ottavo","nono","decimo"]

//genero 5 numeri casuali
    //funzione math random
    //mostro a schermo i 5 numeri
for (let i = 0; i<n ; i++){

    document.getElementById("numeri").innerHTML += ` <span class="text-white"> ${random_array[i]} </span>`;
}

//attendo 30 secondi
    //timing function
setTimeout(clean_screen, 10000);  //30 secondi era troppo tempo :)

//chiedo uno alla volta i numeri visualizzati
setTimeout(number_in, 10100);

//mostro a schermo quanti numeri erano corretti
    //interazione html
setTimeout(verify_and_print, 10100);




