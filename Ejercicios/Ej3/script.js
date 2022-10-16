let array = [0,0,0,0,0];

function RandomNumbers() {
  
  for (let i = 0; i < array.length; i++) {
    let randmonNumber;
    let check = false
    while(check == false ){

        randmonNumber = Math.floor(Math.random() * (49 - 1 + 1) + 1);

        if(!array.includes(randmonNumber)){
            check = true;
        }

    }
    array[i] = randmonNumber;
    
  }

  alert(array);
};


