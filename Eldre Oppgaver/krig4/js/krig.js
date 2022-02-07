
var krigArray = [], spillerHaand = [], compHaand = [];
var spillerDekk = '', compDekk = '', spillerKort = '', compKort = '';
//Funksjon for å fylle en array med 52 nummer
function fyllArray() {
    var dekk = [];
    for (var i = 0; i < 52; i++) {
      dekk[i] = i
    }
    shuffle(dekk);
    splitBunke(dekk);
}
//Funksjon for å blande en array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while(currentIndex != 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }
  return array;

}
//Funksjon for å dele en array i to
function splitBunke(dekk) {
  var i = 0;
  while (i != dekk.length) {
      spillerHaand.push(dekk[i]);
      compHaand.push(dekk[(i+1)]);
      i+=2
  }
}
//Funskjon for å trekke det overste kort og plasser det i kort hendene
function trekk(){
  spillerKort = spillerHaand[0];
  compKort = compHaand[0];
  sammenlign(spillerKort,compKort);
}
//Funksjon for å sammenligne kort
function sammenlign(spiller, comp) {
  if ((spiller % 13)>(comp % 13)) {
    spillerHaand.push(comp);
    spillerHaand.push(spiller);
    spillerHaand.shift();
    compHaand.shift();
    oppdater();
		sjekkVinn();
  } else if ((spiller % 13)<(comp % 13)) {
    compHaand.push(spiller);
    compHaand.push(comp);
    compHaand.shift();
    spillerHaand.shift();
    oppdater();
		sjekkVinn();
  } else if ((spiller % 13) === (comp % 13)) {
    krig();
  }
}
//Funksjon for når krig skjer
function krig(){
  var lengde = 0;
  console.log("Krig");
  if (spillerHaand.length < 5 || compHaand.length < 5) {
    if (spillerHaand.length > compHaand.length) {
        lengde = compHaand.length - 1;
    }else if (spillerHaand.length < compHaand.length) {
        lengde = spillerHaand.length - 1;
    }else{
      lengde = 3
    }
}
  for (var i = 0; i < lengde; i++) {
    krigArray.push(spillerHaand[0]);
    spillerHaand.shift();
    krigArray.push(compHaand[0]);
    compHaand.shift();
}
  sammenlignKrig(spillerHaand[0],compHaand[0]);
}
//Funksjon som sammenligner og deler ut krig kort
function sammenlignKrig(spiller, comp){
  if ((spiller % 13)>(comp % 13)){
    spillerHaand.push(spillerHaand, krigArray);
    spillerHaand.push(comp);
    spillerHaand.push(spiller);
    spillerHaand.shift();
    compHaand.shift();
    krigArray.length = 0;
    oppdater();
    sjekkVinn();
  } if ((spiller % 13)<(comp % 13)){
    compHaand.push(compHaand, krigArray);
    compHaand.push(comp);
    compHaand.push(spiller);
    spillerHaand.shift();
    compHaand.shift();
    krigArray.length = 0;
    oppdater();
    sjekkVinn();
  }else if ((spiller % 13) === (comp % 13)) {
    krig();
  }
}
//Funksjon som sjekker hvem som vinner
function sjekkVinn(){
  if (spillerHaand == 0) {
    console.log("Datamaskin vant!");
  } else if (compHaand == 0) {
    console.log("Spiller vant!");
  }
}
function oppdater(){
  console.log("Spiller har " + spillerHaand.length + ", Datamaskin har " + compHaand.length + ".");
}
window.onload = function(){
  fyllArray();
}
