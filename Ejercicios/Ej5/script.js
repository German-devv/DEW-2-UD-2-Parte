function errorCheck(){
    
    let x = parseInt(prompt("Introduzca un valor númerico entre 10 y 5"));

    try{

        if(Number.isNaN(x)) throw "El valor no es un número."

        else if(x > 10) throw "El número es mayor a 10."

        else if(x < 5) throw "El número es menor a 5."

        else alert("Gracias");
    }   
    
    catch(err){
        alert(err)
    }
    
}