/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:

   return string
}
//console.log(devolverString("juan"))

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var sumas
   sumas = x + y
   return sumas
}
//console.log(suma(23, 44))

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var restas 
   restas = x - y
   return restas
}
//console.log(resta(5, 10))

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let division
   division = x / y
   return division
}
//console.log(divide(50, 5))

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   let multiplicación
   multiplicación = x * y
   return multiplicación
}
//console.log(multiplica(5, 2))

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   let resto 
   resto = x % y
   return resto
}
console.log(obtenerResto(10, 500))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
