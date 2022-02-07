function yatzyfunc(){

    let user = document.getElementById("userinput2").value;
    var muligResulater = [1, 2, 3, 4, 5, 6];
    var tall;
    var antallKast = user * 5;
    var kastet = [];
    const antall = {};
    let førsteTall = kastet[0];
    let antallYatzy = 0;

    for (let i = 1; i <= user; i++){
      while (antallKast > 0) {
        tall = muligResulater[Math.floor(Math.random()*muligResulater.length)];
        kastet.push(tall);
        antallKast--;
        console.log(tall);
      }
    }
    /*
    kastet.forEach(function(x) { antall[x] = (antall[x] || 0)+1;});
    console.log(antall);
    */




}
