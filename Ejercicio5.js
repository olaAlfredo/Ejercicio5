// 5. Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.
const arreglo2 = [4,2,8,9,0,11,3];
const suma = arreglo2.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log("5. La suma de los elementos es: " + suma);