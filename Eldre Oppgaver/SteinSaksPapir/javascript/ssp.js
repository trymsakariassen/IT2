
let dinscore2 = 0;
let pcscore2 = 0;

window.onload = function(){
  document.getElementById("knapper").style.display='none';
};

function SSPF() {
  var inst = setInterval(SSPFS, 500);
  var sspv = ["Stein", "Saks", "Papir"];
  var counter = 0;
  var tekst = document.getElementById("nedtellingTekst");
  var knapp = document.getElementById("startbutton")
  knapp.style.opacity = 0.2;
  tekst.innerHTML=" ";

function SSPFS(){
  tekst.style.fontSize = 40 +"px";
  tekst.innerHTML = sspv[counter];
  counter++;
  if (counter >= sspv.length + 1) {
    counter = 0;
    clearInterval(inst);
    CHOSE();
  }
}
function CHOSE(){
  tekst.innerHTML="Hvilken hånd vil du gjøre?";
  document.getElementById("knapper").style.display='inline';
}
}

function choseSSP(){
  var tekst = document.getElementById("nedtellingTekst");

  var pcvalg=["Stein", "Saks", "Papir"];
  var knapp = document.getElementById("startbutton")
  const random = Math.floor(Math.random() * pcvalg.length);
  console.log(random, pcvalg[random]);
  document.getElementById("knapper").style.display='none';
  let dinscore = document.getElementById("dinScore");
  let pcscore = document.getElementById("pcScore");

  if (event.srcElement.id == pcvalg[random]){
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Dere valgte det samme, prøv igjen";
  } else if (event.srcElement.id == "Saks" && pcvalg[random] == "Papir"){
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Du vant!";
    dinscore2++;
  }else if (event.srcElement.id == "Papir" && pcvalg[random] == "Stein")
  {
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Du vant!";
    dinscore2++;
  }else if (event.srcElement.id == "Stein" && pcvalg[random] == "Saks"){
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Du vant!";
    dinscore2++;
  } else if (event.srcElement.id == "Papir" && pcvalg[random] == "Saks"){
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Du tapte!";
    pcscore2++;
  }else if (event.srcElement.id == "Stein" && pcvalg[random] == "Papir"){
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Du tapte!";
    pcscore2++;
  }else if (event.srcElement.id == "Saks" && pcvalg[random] == "Stein"){
    tekst.innerHTML = "Du valgte " + event.srcElement.id + ", mens datamaskinen valgte " + pcvalg[random] + "." + " <br> Du tapte!";
    pcscore2++;
  }
  knapp.style.opacity = 1;
  knapp.innerHTML = "Spill Igjen"
  pcscore.innerHTML = "Datamaskinen sin score: " + pcscore2 + " ";
  dinscore.innerHTML = "Din score: " + dinscore2 + " ";

}
