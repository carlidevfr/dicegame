export default class Game {
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
  // déclaration des propriétés d'instance

  #user1;

  #user2;

  #game = true; // Jeu en cours

  #roundUser = 1; // tour du joueur 1 ou 2

  // définition du constructeur
  constructor(user1, user2) {
    /*
    @param {User} user1
    @param {User} user2
    */
    this.#user1 = user1;
    this.#user2 = user2;
  }

  // définition de méthodes statiques
  static getDice() {
    /*
        Renvoie un entier compris entre 1 et 6 (inclus)
        @return {Int}
    */
    const minValue = Math.ceil(1);
    const maxValue = Math.floor(6);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  // définition de méthodes d'instance
  get user1() {
    return this.#user1;
  }

  get user2() {
    return this.#user2;
  }

  get game() {
    return this.#game;
  }

  get roundUser() {
    return this.#roundUser;
  }

  set roundUser(value) {
    this.#roundUser = value;
  }

  activePlayer() {
    // Renvoie le joueur actif
    if (this.#roundUser === 1) {
      return this.#user1;
    }
    return this.#user2;
  }

  nextPlayer() {
    // Change de joueur actif
    if (this.#roundUser === 1) {
      this.#roundUser = 2;
    } else {
      this.#roundUser = 1;
    }
  }

  gameOn() {
    // Vérifie si le jeu peut poursuivre. Score 100
    if (this.#user1.scoreGlobal >= 100 || this.#user2.scoreGlobal >= 100) {
      this.#game = false;
      return this.#game;
    }
    return true;
  }

  addScoreTmp(value) {
    // param valeur dé ; assigne a l'utilisateur en cours score tmp
    if (value === 1) { // Si 1 on perds son tour et le score temporaire
      this.activePlayer().scoreTmp = 0;
      this.nextPlayer();
    } else {
      this.activePlayer().scoreTmp += value;
    }
  }

  addScoreGlobal(value) {
  /*
    @param {Int} value
    Ajoute value au score global du joueur actif
  */
    this.activePlayer().scoreGlobal += value;
    this.activePlayer().scoreTmp = 0;
  }
}
