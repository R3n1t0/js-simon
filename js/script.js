
const container = document.querySelector(".rl-container");
const numberList = [];

// Funzione per generare i box con dentro i numeri da far memorizzare all'utente.
function boxGenerator(target){

  const bx = document.createElement("div");
  bx.className = "box";

  const number = unicRandomNumber(1, 99);
  bx.innerHTML = `<span>${number}</span>`;
  
  target.append(bx);
  return bx;
}


// Funzione per trarre solo numeri unici da quelli gerenerati dalla funzione randomNumber e li inserisco nel Array numberList.
function unicRandomNumber(min, max){
  
  let number, valid;

  while(!valid){

    number = randomNumber(min, max);

    if(!numberList.includes(number) && (numberList.length() <= 5 )){
      numberList.push(number);
      valid = true;
    }
    
  }

  return number;
}


// Funzione per generare un numero random.
function randomNumber(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}