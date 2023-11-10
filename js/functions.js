//funzione randomizzazione numeri


function get_n_random(n){
    let array_random = [];


    //versione con ripetizione
/*     for (let i = 0; i < n; i++){
        array_random[i] = parseInt(Math.floor(Math.random() * 100));

    }
 */
    //versione post correzione
    for (let i = 0; i < n; i++){
        let num = parseInt(Math.floor(Math.random() * 100));
        if(array_random.includes(num)){
            i--;
        }else{
            array_random.push(num);
        }
    }
    
    return array_random;


}


//array in input

function number_in(){
    
    for (let i = 0; i<n; i++){
        my_array[i]=prompt(`inserisci il ${name_helper[i]} numero`);
    }
    
}

//pulisci schermo
function clean_screen(){

    document.getElementById("numeri").innerHTML = "";
}


//verifica e stampa
function verify_and_print(){

    for (let i = 0; i<n; i++){
        if (random_array[i] == my_array[i]){

            document.getElementById("numeri").innerHTML += ` <span class="text-light"> ${random_array[i]} </span>`;

        }else {

            document.getElementById("numeri").innerHTML += ` <span class="text-danger"> ${random_array[i]} </span>`;

        }
    }
}





