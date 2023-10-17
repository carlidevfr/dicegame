export default class User {
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
  // déclaration des propriétés d'instance

  #scoreGlobal = 0;

  #scoreTmp = 0;

  #id;

  // définition du constructeur
  constructor(id) {
    this.#id = id;
  }

  // définition de méthodes d'instance
  set scoreGlobal(value) {
    this.#scoreGlobal = value;
  }

  get scoreGlobal() {
    return this.#scoreGlobal;
  }

  set scoreTmp(value) {
    this.#scoreTmp = value;
  }

  get scoreTmp() {
    return this.#scoreTmp;
  }

  get id() {
    return this.#id;
  }
}
