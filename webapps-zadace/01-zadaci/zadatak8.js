//funkcija za provjeru jednakosti kljuceva

function keysEqual(x, y){
    const keys1 = Object.keys(x), keys2 = Object.keys(y);
    return keys1.length === keys2.length && keys1.every(key => keys2.includes(key))
}
var objekt1 = {
        x1: 1,
        x2: 3,
        x3: 2,
};
var objekt2 = {
        x1: 156,
        x2: 654,
        x5: 22,
};
console.log(keysEqual(objekt1, objekt2));