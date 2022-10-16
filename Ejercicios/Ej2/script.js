function adivinar(){

    let acceptedValues = /^[0-9]+$/;

    let randmonNumber = Math.floor(Math.random() * 100);
    
    let result = "Te quedaste sin intentos, el número era "+ randmonNumber +", vuelve a darle para comenzar de nuevo.";
    for (let contador = 1; contador <= 6; contador++) {
      let x = prompt("introduzca un número entre 1 y 100.");
  
      if (x.match(acceptedValues)) {
        num = parseInt(x);
  
        if (num ==  randmonNumber) {
          result = "Enhorabuena, lo has conseguido en " + contador + " intentos.";
          break;
        } else if (num < randmonNumber) {
          alert(
            "Tu número es muy bajo, te quedan: " + (6 - contador) + " intentos."
          );
        } else {
          alert(
            "Tu número es muy alto, te quedan: " + (6 - contador) + " intentos."
          );
        }
      } else {
        alert("Solo se admiten números");
      }
    }
    alert(result);
  }