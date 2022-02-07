var symboler = ["H", "F", "C", "S"];
var verdi = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "D", "K", "A"];
var dekk = [];
var førsteTrekk = true;
var spillOver = false;
var timer;
var r = 0;
var spillerDekk = [];
var dataDekk = [];
var tKnapp = document.querySelector("#trekkKnapp");
var tKnapp15 = document.querySelector("#trekkKnapp15");
var tKnapp30 = document.querySelector("#trekkKnapp30");
var sImg = document.querySelector("#spillerKortImgID");
var dImg = document.querySelector("#dataKortImgID");
var sMengde = document.querySelector("#spillerMengde");
var dMengde = document.querySelector("#dataMengde");
var spillerKort = document.querySelector("#spillerKortID");
var dataKort = document.querySelector("#dataKortID");
var krigRunde = false;
var antallRunder = 0;
var spillerVunnet = 0;
var dataVunnet = 0;
var krigspillerVunnet = 0;
var krigdataVunnet = 0;

var rot = Math.floor(Math.random() * (10 - -9) + -9)
var rot2 = Math.floor(Math.random() * (10 - -9) + -9)
document.getElementById("spillerDekkHTML").style.transform = "rotate(" +rot+ "deg)";
document.getElementById("dataDekkHTML").style.transform = "rotate(" +rot2+ "deg)";


tKnapp.addEventListener('click', spill);
tKnapp15.addEventListener('click', function() {
    runder(15);
});
tKnapp30.addEventListener('click', function() {
    var nummer = document.getElementById("egenNummer").value;
    runder(nummer);
});

function runder(x) {
    r = x;
    timer = setInterval(function() {
        spill();
    }, 200);
}
function spill() {
  if (spillOver != true) {
    if (timer) {
        r--;
        console.log("Antall runder igjen er " + r);
        if (r < 1) {
            window.clearInterval(timer);
        }
    }
    if (førsteTrekk) {
        førsteTrekk = false;
        byggDekk();
        shuffleArray(dekk);
        dealKort(dekk);
    }
    trekk();
    antallRunder++;
    oppdater();
  }

}
function trekk() {
    if (!førsteTrekk && spillOver != true) {
        var sKort = spillerDekk.shift();
        var dKort = dataDekk.shift();
        var pot = [sKort, dKort];
          hvisKort(sKort, sImg);
          hvisKort(dKort, dImg);
          sjekkVinner(sKort, dKort, pot);
          sMengde.innerHTML = spillerDekk.length;
          dMengde.innerHTML = dataDekk.length;
          console.log(spillerDekk,dataDekk);
    } else {
        console.log("Spill Over");
    }
}
function byggDekk() {
    dekk = [];
    for (s in symboler) {
        for (n in verdi) {
            var kort = {
                symbol: symboler[s],
                num: verdi[n],
                kortVerdi: parseInt(n) + 2
                //num og kortVerdi er like,
                //men, num er verdien i string,
                //mens kortVerdi er verdien i en int, så bedre egnet for å sammenligne.
            }
            dekk.push(kort)
        }
    }
}
function shuffleArray(array) {
    for (var x = array.length - 1; x > 0; x--) {
        var ii = Math.floor(Math.random() * (x + 1));
        var temp = array[x];
        array[x] = array[ii];
        array[ii] = temp;
    }
    return array;
}
function dealKort(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            spillerDekk.push(array[i]);
        } else {
            dataDekk.push(array[i]);
        }
    }
    console.log(spillerDekk, dataDekk);
}
function sjekkVinner(kort1, kort2, pot) {
    if ((spillerDekk <= 4) || (dataDekk <= 4)) {
        melding("Spill Over");
        spillOver = true;
        return;
      }
        var rot = Math.floor(Math.random() * (7 - -6) + -6)
        var rot2 = Math.floor(Math.random() * (7 - -6) + -6)
        sImg.style.transform = "rotate(" +rot+ "deg)";
        dImg.style.transform = "rotate(" +rot2+ "deg)";
        if (kort1.kortVerdi > kort2.kortVerdi) {
          if (krigRunde == false) {
            melding("Spiller Vant!");
            spillerVunnet++;
          }else{
            melding("Spiller vant krig og fikk 3 kort!");
            spillerVunnet++;
            krigspillerVunnet++;
          }

            krigRunde = false
            spillerDekk = spillerDekk.concat(pot);
        } else if (kort2.kortVerdi > kort1.kortVerdi) {
          if (krigRunde == false) {
            melding("Datamaskin Vant!");
            dataVunnet++;
          }else{
            melding("Datamaskin vant krig og fikk 3 kort!");
            dataVunnet++;
            krigdataVunnet++;
          }

            krigRunde = false
            dataDekk = dataDekk.concat(pot);

        } else {
            melding("Uavgjort, begge legger på 3 kort!");
            console.log("krigg");
            krigRunde = true;
            krig(pot);
        }
    }
function krig(pot) {
    var kort1, kort2;
    if ((spillerDekk.length < 4) || (dataDekk.length < 4)) {
        return;
    } else {
        for (var i = 0; i < 4; i++) {
            kort1 = spillerDekk.shift();
            pot = pot.concat(kort1);
        }
        for (var i = 0; i < 4; i++) {
            kort2 = dataDekk.shift();
            pot = pot.concat(kort2);
        }
    }
    sjekkVinner(kort1, kort2, pot);
}
function hvisKort(kort, kortHTML) {
    symbolIMG = "H";
    verdiIMG = "2";
    if (kort.kortVerdi == 14) {
        verdiIMG = 1;
    } else {
        verdiIMG = kort.kortVerdi;
    }
    kortHTML.src = "media/" + verdiIMG + symbolIMG + ".png";
}
function melding(m) {
  document.querySelector("#vinnerTekst").innerHTML = m;
}
function oppdater() {
  document.getElementById("antallTekst").innerHTML = "Spiller har vunnet " +spillerVunnet+ " ganger, og Datamaskinen har vunnet " + dataVunnet;
  document.getElementById("scoreKrigTekst").innerHTML = "Spiller har vunnet " +krigspillerVunnet+ " kriger, og Datamaskinen har vunnet " + krigdataVunnet;
  document.getElementById("scoreTekst").innerHTML = "Det har blitt spilt " +antallRunder+ " runder."
}
