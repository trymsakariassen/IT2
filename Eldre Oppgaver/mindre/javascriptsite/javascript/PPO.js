function PPOregnut(){

  let nummer = document.getElementById("OPPinput").value;
  var poresulat = document.getElementById("OPPparoddResultat");
  var presulat = document.getElementById("OPPprimResultat");
  let erPrime = true;

  if (nummer % 2 == 0){
    poresulat.innerHTML = nummer + " er et partall.";
  } else {
    poresulat.innerHTML = nummer + " er et oddetall.";
  }

  if (nummer == 1) {
    presulat.innerHTML = "1 er verken et primtall eller sammensatt tall.";
  } else if (nummer > 1){
    for (let i = 2; i < nummer; i++){
      if (nummer % i == 0) {
        erPrime = false;
        break;
      }
    }
    if (erPrime) {
      presulat.innerHTML = nummer + " er et primtall."
    } else {
      presulat.innerHTML = nummer + " er ikke et primtall."
    }
  } else {
    presulat.innerHTML = nummer + " er negativ eller ingenting."
  }

}
