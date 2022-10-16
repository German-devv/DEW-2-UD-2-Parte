function errorCheck(){
    
    let option = confirm("Por favor, haga click en Aceptar o Cancelar");

    try{
        if(option == false) throw  "../../index.html";


        
    }
    catch(err){
        location.href = err;
    }
    
}