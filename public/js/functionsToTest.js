export const returnAnObject = (...args) => {
  /** 
   * @function returnAnObject {object} - Fonction avec un argument
   * @param {object} - Condition d'exécution de la fonction
   * @param {number} - valeur par défaut 
   * @param {Array} - Argument attendu
   */
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};

export const multiplyAllByTwo = (arrayOfNumbers) => {
  /** @function multiplyByTwo {object} - Fonction avec un Objet
   * @param {number} - Element de l'objet
   * @param {constructor} - Condition d'exécution de la fonction
   * @param {number} - Résultat de la fonction
  */
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new Array([]).constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
    console.log('arrayTimesTwo: ', arrayTimesTwo);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};
