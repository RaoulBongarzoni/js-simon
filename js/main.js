//genero 5 numeri casuali
    //funzione math random
    //mostro a schermo i 5 numeri


const random=random5();

for (let i = 0; i<5 ; i++){

    document.getElementById("numeri").innerHTML += ` <span class="text-white"> ${random[i]} </span>`;
}




//attendo 30 secondi
    //timing function
//chiedo uno alla volta i numeri visualizzati
    //prompt in ciclo
        //storing in array
    //verifica correttezza array
//mostro a schermo quanti numeri erano corretti
    //interazione html
