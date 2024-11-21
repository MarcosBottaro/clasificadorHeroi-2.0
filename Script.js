const readline = require("readline-sync");

function rank(result) {
  let rank;
  if (result <= 0) {
    return "Sem classificação";
  } else if (result > 0 && result <= 10) {
    rank = "Ferro";
  } else if (result >= 11 && result <= 20) {
    rank = "Bronze";
  } else if (result >= 21 && result <= 50) {
    rank = "Prata";
  } else if (result >= 51 && result <= 80) {
    rank = "Ouro";
  } else if (result >= 81 && result <= 90) {
    rank = "Diamante";
  } else if (result >= 91 && result <= 100) {
    rank = "Lendário";
  } else {
    rank = "Imortal";
  }
  return rank;
}

let proceed = true;

while (proceed) {
  const win = readline.questionInt("How much games you won: ");
  const loses = readline.questionInt("How much games you lose: ");

  const result = win - loses;
  const classificacao = rank(result);

  console.log(
    `O Herói tem de saldo de ${result} vitórias e está no rank  ${classificacao}`
  );

  const ask = readline.question("Deseja continuar? (y/n): ");
  proceed = ask.toLowerCase() === "y";
}
