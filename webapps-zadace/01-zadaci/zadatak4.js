//funkcija za pronalazak brojeva dijeljivih sa 3 u polju

var brojevi = [1,2,3,4,5,6,7,8,9,10]

for(var i = 0; i < brojevi.length; i++) {
    if(brojevi[i] % 3 === 0){
       console.log(brojevi[i]);
    }
}