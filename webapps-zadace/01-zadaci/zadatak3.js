//funkcija za pretvorbu broja u sate i minute

function br2vrijeme(x) { 
    var sati = Math.floor(x / 60);  
    var minute = x % 60;
    if (minute + ''.length < 2) {
      minute = '0' + minute; 
    }
    return sati + " sat(a) i " + minute + "minuta";
  }
  
  console.log(br2vrijeme(4315));