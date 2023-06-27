import { createInterface } from "readline";
const rl = createInterface({ input: process.stdin, output: process.stdout });
const input = (text) => new Promise((r) => rl.question(text, r));
const timeout = (ms) => new Promise((r) => setTimeout(r, ms));

//////////

//const nom = await input("Quel est ton nom?");
//console.log(`Ton nom est ${nom}`);
//const prenom = await input("Quel est ton prenom?");
//console.log(`Ton nom est ${prenom}`);

const Dice = (n = 100) => Math.ceil(Math.random() * n);
// On compte à partir de 0
let compter = 0;
// L'ordinateur choisi "response" un nombre entier entre 1 et 100 inclus
let response = Dice(100);
// "Début tour": Le joueur choisi "guess" un nombre entier entre 1 et 100 inclus
while (true) {
  let guess = +(await input("Votre nombre ? "));
  console.log(`Votre nombre est ${guess}`);
  // L'ordinateur indique au joueur si le nombre "guess" est inférieur, supérieur ou égal au nombre "response"
  // On compte 1 coup à chaque réponse de l'ordinateur
  compter = compter + 1;
  // compter +=1
  // compter ++
  if (guess < response) console.log("Votre nombre est inférieur au mien");
  if (guess > response) console.log("Votre nombre est supérieur au mien");
  if (guess === response)
    console.log(`Félicitations vous avez trouvé en ${compter} coup!`);
  // Si le nombre "guess" est égal à "response" alors le jeux est finis
  // Afficher le nombre de coup une fois la réponse trouvée

  if (guess === response) break;
  // Sinon on reprend à "Début tour"
}
// "continue" permet de reprendre la boucle au début

// Est-ce que vous voulez rejouer ?
