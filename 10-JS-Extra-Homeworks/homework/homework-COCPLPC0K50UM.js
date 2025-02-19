// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  y=[];
  for(let i in objeto){
    x=[]
    x.push(i);
    x.push(objeto[i]);
    y.push(x);
  }
  return y;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  w={};
  for(let i=0;i<string.length;i++){
    w[string.charAt(i)]=null;
  }
  for(let n in w){
    k=0;
    for(let i=0;i<string.length;i++){
      if(n===string.charAt(i)){
        k++;
      }
    }
    w[n]=k;
  }
  return w;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  x='';
  y='';
  for(let i=0;i<s.length;i++){
    if(s.charAt(i)===s.charAt(i).toUpperCase()){
      x=x+s.charAt(i);
    }else{
      y=y+s.charAt(i);
    }
  }
  return x+y;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  x='';
  y='';
  for(let i=0;i<str.length;i++){
    if(str.charAt(i)!=' '){
      x=str.charAt(i)+x;
    }else{
      y=y+x+' ';
      x='';
    }
  }
  return y+x; 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero=numero.toString();
  x=0;
  y=numero.length-1
  z=0;
  while(x<numero.length){
    if(numero.charAt(x)!=numero.charAt(y)){
      z++;
      break;
    }
    x++;
    y--;
  }
  if(z===0){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  x='';
  for(let i=0;i<cadena.length;i++){
    if(cadena.charAt(i)!=='a' && cadena.charAt(i)!=='b' && cadena.charAt(i)!=='c'){
      x=x+cadena.charAt(i);
    }
  }
  return x;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  w=[];
  x=[];
  z=0;
  for(let i=0;i<arr.length;i++){
    console.log(arr[i].length+i);
    console.log(arr[i]);
    x[(arr[i].length+i)]=arr[i];
  }
  while(z<x.length){
    if(x[z]!=undefined){
      w[w.length]=x[z];
    }
    z++;
  }
  return w;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arreglo3=[];
  arreglo1.forEach(function(elemento){
    for(let i=0;i<arreglo2.length;i++){
      if(elemento===arreglo2[i]){
        arreglo3[arreglo3.length]=elemento;
      }
    }
  });
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

