var d = document.getElementById("dibujito");
var lienzo =d.getContext("2d");
var linea = 300;
var l = 0;
var yi, xf;

while (l < linea)

{

dibujarLinea ("blue", 0, l, 90, l);
dibujarLinea ("white", 91, l, 190, l);
dibujarLinea ("blue", 191, l, 290, l);
dibujarLinea ("brown", 291, l, 300, l);
l = l +1

}

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{

lienzo.beginPath();
lienzo.strokeStyle= color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();


}