
let startet = false;
let hovedDekk = [];
let spillerDekk = [];
let dealerDekk = [];
let krigDekk=[];
let spillerScore = 26;
let dealerScore = 26;
let antallGangerSpillt = 0;
let ferdig = false;

function lagDekk(){
  const symbol = ["♥", "♦", "♠", "♣"];
  const verdi = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Knekt",
    "Dronning",
    "Konge",
    "Ess"
  ];
  for (var i = 0; i < symbol.length; i++) {
    for (var x = 0; x < verdi.length; x++) {
      let kort = {Verdi: verdi[x], Symbol: symbol[i]};
      hovedDekk.push(kort);
    }
  }
}
function sjekkKort(vinner, taper){
  let vinnerKort = taper[0];
  vinner.push(vinnerKort);
  taper.shift();
  let vKort = vinner[0];
  vinner.shift(vinner[0]);
  vinner.push(vKort);
}
function shuffle(array){
    let currentIndex = array.length, randomIndex;
    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  }
async function spill(){
if (ferdig == false) {
  if (startet == false) {
    lagDekk();
    shuffle(hovedDekk);
    var delUt = 0;
    while (delUt != hovedDekk.length) {
      spillerDekk.push(hovedDekk[delUt])
      dealerDekk.push(hovedDekk[(delUt+1)]);
      delUt += 2}
      startet = true;
    }

      if (spillerDekk[0].Verdi === dealerDekk[0].Verdi){
        await krig();
      }

      if (spillerDekk[0].Verdi > dealerDekk[0].Verdi) {
        sjekkKort(spillerDekk, dealerDekk)
        if (krigDekk.length != 0) {
          for (var i = 0; i < krigDekk.length; i++) {
            var x = krigDekk[0]
            spillerDekk.push(x)
            krigDekk.shift();
          }
        }
      }

      if(spillerDekk[0].Verdi < dealerDekk[0].Verdi) {
        sjekkKort(dealerDekk, spillerDekk)
        if (krigDekk.length != 0) {
          for (var i = 0; i < krigDekk.length; i++) {
            var x = krigDekk[0]
            dealerDekk.push(x)
            krigDekk.shift();
          }
        }
      }
    oppdater();
}
  if(spillerScore == 0){
    ferdig = true;
    console.log("Dealer vant!");
  } else if (dealerScore == 0) {
    ferdig = true;
    console.log("Spiller vant!");
  }
}
async function krig(){
  for (var i = 0; i < 3; i++) {
    krigDekk.push(spillerDekk[0]);
    krigDekk.push(dealerDekk[0]);
    spillerDekk.shift();
    dealerDekk.shift();
  }
  console.log("Krig");
  oppdater();
}
function oppdater(){
  console.log(spillerDekk.length, dealerDekk.length);
}
