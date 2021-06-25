//Tijera le gana a papel
//Papel le gana a piedra
//Piedra le gana a tijera
//Si ambos jugadores eligen la misma opción es un empate
console.log("Bienvenido a...");
console.log("Cachipún contra la máquina.");

const repetitions = prompt("Ingrese la cantidad de veces que desearias repetir el juego");

const repetitionsQty = Number.parseInt(repetitions);

console.log("Deseas que el juego se repita ${repetitionsQty} veces");

for (let count = 0; count <= repetitionsQty; count = count + 1){
  //pedir respuesta
  const userMove = prompt("Ingresa tu jugada, debe ser Piedra, Papel o Tijera");
  0 - 1
  1 - 3

  const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) + 1;
  // 1 o 2 o 3;
  let machineMove ="";

  if(randomMoveIndex === 1) {
    machineMove = "Piedra";
  } else if (randomMoveIndex === 2){
    machineMove = "Papel";
  } else if (randomMoveIndex === 3){
    machineMove = "Tijera";
  } else {
    console.error("La opción randomMoveIndex no es válida: ${randomMoveIndex1}");
  }



  let winner = "";

  if(machineMove === "Piedra"){
    if(userMove ==="Papel") {
      winner = "User"
    } else if (userMove === "Tijera") {
      winner = "Machine"
    } else {
      winner = "Both"
    }
  } else if (machineMove === "Papel") {
    if(userMove ==="Tijera") {
      winner = "User";
    } else if(userMove === "Piedra"){
      winner = "Machine";
    } else {
      winner = "Both"
    }
  } else if (machineMove ==="Tijera") {
    if(userMove === "Piedra") {
      winner = "User";
    } else if (userMove === "Papel") {
      winner = "Machine";
    } else {
      winner ="Both";
    }
  } else {
    winner = "Unknown";
  }



  //mostrar resultado
  console.log({userMove, machineMove});
  console.log("El ganador es: ${winner}");

};
