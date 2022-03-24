
// Suma
function suma(){
    var a=0;
    var b=0;
    var resultado=0;
     
    a=parseInt (prompt("por favor ingrese el valor 1"));
    b=parseInt(prompt("Por favor ingrese el valor 2"));
     
    resultado= a+b;
     
    alert ("El resultado es: " + resultado);
    }
    //Resta
    function resta(){
    var a=0;
    var b=0;
    var resultado=0;
     
    a=parseInt (prompt("por favor ingrese el valor 1"));
    b=parseInt(prompt("Por favor ingrese el valor 2"));
     
    resultado= a-b;
     
    alert ("El resultado es: " + resultado);
    }
  // SUMA, RESTA, MULTIPLICACION Y DIVISION
 
  function operaciones(){
    var a=0;
    var b=0;
        a = parseInt(prompt("Por favor ingrese el primer valor: "));
        b = parseInt(prompt("Por favor ingrese el segundo valor: "));
        var suma=a+b;
        var resta = a-b;
        var multiplicacion = a*b;
        var division = a/b;
    alert ("el resultado de la \n suma: "+ suma + "\n resta: " + resta + "\n multiplicacion: " + multiplicacion + "\n division: " + division);  
    }
 
// NUMERO MAYOR
function numeromayor () {
    var a=0;
    var b=0;
        a = parseInt(prompt("Ingrese el primer valor: "));
        b = parseInt(prompt("Ingrese el segundo valor: "));
        if(a>b){
            alert("El numero mayor es: " + a);
        }if(b>a){
        alert("El numero mayor es: " + b);
        }else
        alert  ("Gracias");
    }
 
// NUMERO MENOR
    function numeromenor () {
        var a=0;
        var b=0;
        var c=0;
            a = parseInt(prompt("Ingrese el primer valor: "));
            b = parseInt(prompt("Ingrese el segundo valor: "));
            c = parseInt(prompt("Ingrese el tercer valor: "));
        if ((a<b)&&(a<c)) {
            alert("El numero menor es: " + a);
        }if ((b<a)&&(b<c)) {
            alert("El numero menor es: " + b);
        }if ((c<a)&&(c<b)) {
            alert("El numero menor es: " + c);
        }
        alert("Hasta luego" );
        }
 
// NUMERO PAR-IMPAR
    function par_impar(){
    var a=0;
    a = parseInt(prompt("Ingrese un valor: "));
    if (a %2==0){
        alert("El numero "+ a +" es par");
    }else {
        alert("El numero " + a + " es impar" );
    }
}
 
// Cuadrado
function cuadrado (){
    var a=0;
    var elv=0;
    a = parseInt(prompt("Ingrese el numero del cual desea saber el cuadrado: "));
    elv=a*a;
    alert ("el cuadrado de "+ a + " es: "+ elv);
    }
 
// Area del triangulo
  function area_triangulo (){
    var h=0;
    var b=0;
    var total=0;
    b = parseInt(prompt("Ingrese la base del triangulo: "));
    h = parseInt(prompt("Ingrese la altura del triangulo: "));
    total = b*h/2
    alert ("El area del triangulo es: "+ total);
  }
 
//METROS A CENTIMETROS
function metros_centimetros(){
    var m=0;
    var cm=0;
    m = parseFloat(prompt("Ingrese los metros que desea convertir a centimetros: "));
cm = m*100/1.0;
alert ("Los centimetros de "+m+"m. es: "+ cm+"cm");
}
 
//EDADES
function determinar_edad (){
    var año=0;
    var edad = 0;
año = parseInt(prompt("Ingrese el año de nacimiento"));
edad = 2022 - año;
alert ("Su edad es: " + edad);
}
 
// INVIERTE A CAPITAL
function invertir(){
var cap=0;
var año=0;
var ganancia=0;
var ganacian_men=0;
 
cap= parseInt(prompt("Ingrese su capital"));
ganancia= 2*c/100;
alert("Las ganancias por mes es de: " + ganancia);
año = parseInt(prompt("Ingrese el año en meses que desea invertir el dinero: "));
gantol=gan*año
alert("lo que ganara en "+años+" meses es: "+gantol);
}
 
//Colegio
 
function colegio_ABC(){
    var nombre="";
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var e=0;
    var suma=0;
    var promedio=0;
    nombre = prompt("Ingrese el nombre del estudiante: ");
    a = parseFloat(prompt("Ingrese la primera nota: "));
    b = parseFloat(prompt("Ingrese la segunda nota: "));
    c = parseFloat(prompt("Ingrese la tercera nota: "));
    d = parseFloat(prompt("Ingrese la cuarta nota: "));
    e = parseFloat(prompt("Ingrese la quinta nota: "));
    suma = a+b+c+d+e;
    alert ("la suma de las notas es: "+suma);
    promedio = suma/5
   
    if(promedio<3.0){
     alert("No aprobo la materia, la nota de "+ nombre +" es: "+ promedio);  
    }else
     alert("Aprobo la materia, la nota de "+ nombre +" es: "+ promedio);
 
}
 
// FRUTERIA
 
function FRUTERIA(){
    var k=0;
    var td=0;
    var d=0;
    var t=0;
 
    k=parseInt(prompt("Ingrese los kilos comprados"));
    t=4500*k;
    if(k<=2){
        alert("No tiene descuento");
        alert("Su total a pagar es: " + t);
        alert("Gracias por su compra, vuelva pronto");
    }
    if((k>2)&&(k<=5)){
        alert ("Tiene un descuento del 10%");
        d=10*t/100;
        td=t-d;
        alert("Su total a pagar es: " + td);
        alert("Gracias por su compra, vuelva pronto");
    }
    if((k>5)&&(k<=10)){
        alert("Tiene un descuento del 15%");
        d=15*t/100;
        td=t-d;
        alert("Su total a pagar es: " + td);
        alert("Gracias por su compra, vuelva pronto");
    }
    if(k>=10){
        alert("Tiene un descuento del 20%");
        d=20*t/100;
        td=t-d;
        alert("Su total a pagar es: " + td);
        alert("Gracias por su compra, vuelva pronto");
    }
       
}
  