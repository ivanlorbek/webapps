//funkcija za provjeru broja unutar raspona te mnozenje visekratnika

const br = 36;
var suma = 1;

const low = 0;
const high = 1000;

if (br > low && br < high) {
    for(i = 1; i < br; i++){
        if(i % 7 === 0){
           console.log(i);
           suma = suma * i;
           }
       }
    console.log(br+'->'+suma);
}
else {
  console.log('Broj nije unutar raspona');
}