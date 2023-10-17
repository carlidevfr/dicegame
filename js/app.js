import User from './User.js';
import Game from './Game.js';

// On crée les utilisateurs et on les ajoute à la liste des joueurs

const user1 = new User(1);
const user2 = new User(2);
const game = new Game(user1, user2);

// On sélectionne les boutons et les champs score des joueurs
const diceLaunch = document.getElementById('dice-launch');
const hold = document.getElementById('hold');
const user1ScoreTmp = document.getElementById('score-tmp-user-1');
const user2ScoreTmp = document.getElementById('score-tmp-user-2');
const user1Score = document.getElementById('score-user-1');
const user2Score = document.getElementById('score-user-2');
const diceValue = document.getElementById('dice-value');
const newGame = document.getElementById('new-game');
const user1Zone = document.getElementById('user1-zone');
const user2Zone = document.getElementById('user2-zone');
const user1Name = document.getElementById('user1');
const user2Name = document.getElementById('user2');

const majAffichage = (value) => {
  /*
    @param {Int} value
    Affiche dans l'html les valeurs dé et scores
    Met un point rouge a côté du joueur actif
    Opacité 100 sur joueur inactif
    */
  user1ScoreTmp.innerText = game.user1.scoreTmp;
  user2ScoreTmp.innerHTML = game.user2.scoreTmp;
  user1Score.innerText = game.user1.scoreGlobal;
  user2Score.innerText = game.user2.scoreGlobal;
  diceValue.src = `./images/dice-${value}-fill.svg`;

  if (game.roundUser === 1) {
    user1Name.style.visibility = 'visible';
    user2Name.style.visibility = 'hidden';
    user2Zone.classList.remove('opacity-100');
    user1Zone.classList.remove('opacity-75');
    user1Zone.classList.contains('opacity-100') ? true : user1Zone.classList.add('opacity-100');
    user2Zone.classList.contains('opacity-75') ? true : user2Zone.classList.add('opacity-75');
  } else {
    user1Name.style.visibility = 'hidden';
    user2Name.style.visibility = 'visible';
    user1Zone.classList.remove('opacity-100');
    user2Zone.classList.remove('opacity-75');
    user2Zone.classList.contains('opacity-100') ? true : user2Zone.classList.add('opacity-100');
    user1Zone.classList.contains('opacity-75') ? true : user1Zone.classList.add('opacity-75');
  }
};

const launch = () => {
  const randDice = Game.getDice(); // On lance le dé
  game.addScoreTmp(randDice); // On ajoute au score Tmp du joueur actif
  majAffichage(randDice); // Maj de l'affichage html
};

// On soumet le bouton lancer à une action
diceLaunch.addEventListener('click', launch);

// On soumet le bouton hold à une action
hold.addEventListener('click', () => {
  game.addScoreGlobal(game.activePlayer().scoreTmp);
  game.nextPlayer();
  majAffichage(1); // Maj de l'affichage html

  if (!game.gameOn()) { // On vérifie si la partie continue
    diceLaunch.removeEventListener('click', launch);
  }
});

// On soumet le bouton new game à une action
newGame.addEventListener('click', () => {
  diceLaunch.addEventListener('click', launch); // on réactive le bouton
  user1.scoreGlobal = 0;
  user2.scoreGlobal = 0;
  user1.scoreTmp = 0;
  user2.scoreTmp = 0;
  game.roundUser = 1; // tour du joueur 1
  majAffichage(1); // Maj de l'affichage html
});
