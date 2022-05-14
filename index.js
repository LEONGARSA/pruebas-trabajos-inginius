
/**
contrato: number -> number 
proposito: calcular el area de un circulo en funcion de su radio  
propotito: areaCirculo(radio){...}
**/

function areaCirculo( radio ){
  return ((numeroPi() *  Math.pow(radio,2)).toFixed(4));
}

console.log ("(2.12) area circulo");
console.log (areaCirculo(9));
console.log (areaCirculo(30));
console.log (areaCirculo(40));
console.log ("-----------------------");


/**
contrato:   -> number 
proposito: retornar numero pi  
propotito: nimeroPi(){...}
**/

function numeroPi(){
  return Math.PI;
}

/**
contrato: number,number -> number 
proposito: calcular el area de un  rectangulo ingresando su Ancho y su largo 
propotito: areaRectangulo(ancho,largo){...}
**/

function areaRectangulo(ancho, largo) {
  return ancho*largo;
}

console.log ("(2.12) area cuadrado");
console.log (areaRectangulo(3,4));
console.log (areaRectangulo(5,8));
console.log (areaRectangulo(7,9));
console.log ("-----------------------");

/**
contrato: number,number -> number 
proposito: calcular el area de un terreno ingresando su Ancho y su radio  
propotito: areaTerreno(ancho,largo){...}
areaTerreno(10,9)
areaTerreno(40,40)
areaTerreno(100,60)
**/console.log ("-----------------------");

function areaTerreno(anchoT, radioT){
  return  (areaRectangulo(anchoT, (radioT*2))-(areaCirculo(radioT)/2));
}
console.log ("(2.12) area terreno");
console.log (areaTerreno(10,9));
console.log (areaTerreno(40,40));
console.log (areaTerreno(100,60));
console.log ("-----------------------");


/*----------------------------------------------------*/

/**
contrato: number,number -> number 
proposito: calcular el area de un  rectangulo ingresando su Ancho y su largo 
propotito: rectangle(ancho,largo){...}
**/

function rectangle(ancho, largo) {
  return ancho*largo;
}

console.log ("(2.11) area rectangulo");
console.log (rectangle(12, 18));
console.log (rectangle(20, 24));
console.log (rectangle(4, 6));
console.log ("-----------------------");

/*----------------------------------------------------*/



/**
contrato: number -> number
proposito: Calcular el valor medio de un intervalo de valores definido como (0,x] 
propotito: valorM{...}
ejemplo:
valorM(6) -> 3.5
valorM(10) -> 5.5
valor(21) -> 6

**/

function valorM(x)
  {
  return (sumN(x)/x);
  }
console.log ("(2.8) valor medio ");
console.log (valorM(6));
console.log (valorM(10));
console.log (valorM(11));

/**
contrato: number,number -> number 
proposito: Aplicar la formula "(a+b)*b-2" a los valores a y b que se ingresen.
propotito: formula(a,b){...}
**/
function sumN (limite)
  {
  return ((limite * (limite +1)) / 2);
  }


