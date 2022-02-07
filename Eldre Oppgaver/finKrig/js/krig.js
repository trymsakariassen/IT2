var pot = [];
var spillerDekk = [];
var dataDekk = [];
var dekkLaget = false;
var krigDekk = [];

function lagDekk(){
  const symbol = ["♥", "♦", "♠", "♣"];
  const verdi = ["2","3","4","5","6","7","8","9","10","Knekt","Dronning","Konge","Ess"];
  for (var i = 0; i < symbol.length; i++) {
    for (var x = 0; x < verdi.length; x++) {
      let kort = {Verdi: verdi[x], Symbol: symbol[i]};
      pot.push(kort); } }
}
function shuffle(array){
    let currentIndex = array.length, randomIndex;
    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]; }
    return array;
  }
function delDekk(array, array1, array2){
  var delUt = 0;
  while (delUt != array.length) {
    array1.push(array[delUt]);
    array2.push(array[(delUt+1)]);
    delUt += 2}
}
function trekk(){
  if (dekkLaget == false) {
    lagDekk();
    shuffle(pot);
    delDekk(pot, spillerDekk, dataDekk);
    dekkLaget = true;
  }
  var sKort = spillerDekk[0];
  var dKort = dataDekk[0];
  spillerDekk.shift();
  dataDekk.shift();
  sammenlign(sKort, dKort, spillerDekk, dataDekk);
  console.log(spillerDekk,dataDekk);
}
function sammenlign(kort1, kort2, array1, array2){
  if (kort1.Verdi == kort2.Verdi) {
    console.log("Krig");
    krig(kort1, kort2, spillerDekk, dataDekk);
  } else if (kort1.Verdi > kort2.Verdi) {
    array1.push(kort1);
    array1.push(kort2);
    if (krigDekk.length != 0) {
      for (var i = 0; i < krigDekk.length; i++) {
        array1.push(krigDekk[0]);
        krigDekk.shift();
      }
    }
  } else if (kort1.Verdi < kort2.Verdi) {
    array2.push(kort1);
    array2.push(kort2);
    if (krigDekk.length >= 0) {
      for (var i = 0; i < krigDekk.length; i++) {
        array2.push(krigDekk[0]);
        krigDekk.shift();
      }
    }
  }
}
function krig(kort1, kort2, array1, array2) {
  krigDekk.push(kort1);
  krigDekk.push(kort2);
  array1.shift();
  array2.shift();
  for (var i = 0; i < 3; i++) {
    krigDekk.push(array1[0]);
    krigDekk.push(array2[0]);
    array1.shift();
    array2.shift();
  }
  var sKort = array1[0];
  var dKort = array2[0];
  console.log(krigDekk);
  sammenlign(sKort, dKort, array1, array2);
}
