 var valg = ["stein", "saks", "papir", "øgle", "spock"];
 var utfall = [[0,1,2,1,2],[2,0,1,1,2],[1,2,0,2,1],[2,2,1,0,1],[1,1,2,2,0]];
 var score = 0;
 var scoreD = 0;
 function start(trekk){

   var resultat = document.getElementById("tekst"); // Teksten som viser om man vinner eller ikke
   var antallVunnet = document.getElementById("tekst2"); // Spiller Score tekst
   var antallVunnetD = document.getElementById("tekst3"); // Datamaskin score tekst
   var datamaskin = Math.floor(Math.random()*5); // Hva datamaskinen velger


   if (utfall[trekk][datamaskin]==0){resultat.innerHTML = "Uavgjort..."};
    if (utfall[trekk][datamaskin]==1){resultat.innerHTML = "Du vinner!", score++}
    if (utfall[trekk][datamaskin]==2){resultat.innerHTML = "Datamaskinen vinner!", scoreD++};

    antallVunnet.innerHTML = "Du har vunnet " + score + " ganger";
    antallVunnetD.innerHTML = "Datamaskinen har vunnet " + scoreD + " ganger";
    }
   
