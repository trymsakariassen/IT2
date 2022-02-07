function fibonaccifunc(){

    let user = document.getElementById("userinput").value;
    let tall1 = 0;
    let tall2 = 1;
    let nesteTall;

    for (let i = 1; i <= user; i++){
      console.log(tall1);
      nesteTall = tall1 + tall2;
      tall1 = tall2;
      tall2 = nesteTall;
    }

}
