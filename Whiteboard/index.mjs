import { createInterface } from "readline";
const rl = createInterface({ input: process.stdin, output: process.stdout });
const input = (text) => new Promise((r) => rl.question(text, r));
const timeout = (ms) => new Promise((r) => setTimeout(r, ms));

//////////

//const nom = await input("Quel est ton nom?");
//console.log(`Ton nom est ${nom}`);
//const prenom = await input("Quel est ton prenom?");
//console.log(`Ton nom est ${prenom}`);

function Dice(n = 100) {
  return Math.ceil(Math.random() * n);
}
async function partie() {
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
    if (guess < response) console.log("Proposez un nombre supérieur.");
    if (guess > response) console.log("Proposez un nombre inférieur.");
    if (guess === response)
      console.log(`Félicitations vous avez trouvé en ${compter} coup!`);
    if (guess === response) return;
    // Si le nombre "guess" est égal à "response" alors le jeux est finis
    // Afficher le nombre de coup une fois la réponse trouvée
    // Voulez-vous rejouer ?

    //const affirmation = "OUI";
    //const negation = "NON";
    //console.log("Voulez-vous rejouer? Tapez 'OUI' ou 'NON'.");
    //let replay = +(await input("Votre choix?"));
    //if (replay === negation) break;
  }
}
async function jeu() {
  while (true) {
    // Jouer : On joue au jeu, on attend que la partie se termine.
    await partie();
    // Choix : L'ordinateur demande si l'on souhaite rejouer.
    // Le joueur choisi de rejouer ou pas.

    do {
      let replay = (await input("Voulez-vous rejouer (O/n) ? ")).toLowerCase();
      // Si le joueur écris OUI, il repasse à l'étape Jouer.
      if (replay === "o") break;
      // Sinon si le joueur écris NON, le jeu se termine.
      else if (replay === "n") return;
    } while (true);
    // Sinon l'ordinateur repasse à l'étape Choix.
  }
}
jeu();
/*function adder(a, b) {
  return a + b;
} // Fonction déclarative, n'est pas soumise à l'ordre d'écriture
const adder = function (a, b) {
  return a + b;
}; // Fonction anonyme mise dans une variable, soumise à l'ordre d'écriture mais peut-être redéfinie
const adder = (a, b) => {
  return a + b;
}; // Fonction fléchée*/

const adder = (a, b) => a + b;
function test_adder(a, b, c) {
  const r = adder(a, b);
  if (r !== c)
    console.error(`Avec ${a},${b}, retourne ${r} à la place de ${c}`);
}
test_adder(1, 1, 2);
test_adder(2, 3, 4);
