/**
 * Librería de utilidades para trabajar con el DOM.
 * MATEINER: JP
 * 
 * 
 * @module $
 * 
 * import in your JS file with: 
 * import $ from './path/dom.js';
 * 
 * use $ like:
 * const city = $("#city"); 
 * city.each(element => console.log(element));
 */
/**
 * Selecciona uno o más elementos del DOM según el selector proporcionado.
 * first: Devuelve el primer elemento que coincide con el selector.
 * get: Devuelve una NodeList que contiene los elementos seleccionados.
 * each: Ejecuta una función para cada uno de los elementos seleccionados.
 * on: Agrega un evento a cada uno de los elementos seleccionados.
 * addClass: Agrega una clase CSS a cada uno de los elementos seleccionados.
 * removeClass: Elimina una clase CSS de cada uno de los elementos seleccionados.
 * 
 * @param {String} el - Selector CSS para seleccionar los elementos.
 * @returns {Object} - Un objeto que contiene los métodos para manipular los elementos seleccionados.
 */
const $ = el => {
    const elements = document.querySelectorAll(el);
    return {
        /*
         * @returns 
         */
        first: () => elements[0] || null,
        /**
         * @returns 
         */
        get: () => elements,
        /**
         * @param {*} callback 
         * @returns 
         */
        each: callback => elements.forEach(callback),
        /**
         * @param {*} event 
         * @param {*} callback 
         * @returns 
         */
        on: (event, callback) => elements.forEach(element => element.addEventListener(event, callback)),
        /**
         * @param {*} className 
         * @returns 
         */
        addClass: className => elements.forEach(element => element.classList.add(className)),
        /**
         * @param {*} className 
         * @returns 
         */
        removeClass: className => elements.forEach(element => element.classList.remove(className))
    }
}
export default $;