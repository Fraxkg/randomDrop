let guess
let victoria=false;
let intentos=0;
let rng= (Math.floor(Math.random()*10)) +1;

//prueba
//rng=2;

for(intentos=1;intentos<=3;intentos++){
	guess=prompt("Adivine el número entre el 1 y 10 ");
	if(guess==rng){
		document.write("<br>");
		document.write("victoria en el intento: "+ intentos);
		intentos=4; 
		victoria=true;
	}else{
		document.write("<br>");
		alert(" Lo siento, intento: "+intentos+" fallido ");
	}
}

document.write("<br>");
if(victoria){
	
	document.write("<font color=\"green\">["+" Gracias por participar :^) "+"]</font>");
}else{
	
	document.write("<font color=\"red\">["+" Buena suerte para la próxima :^(   "+"]</font>")
	document.write(" La respuesta era: " +rng);
}
//prueba
//document.write(guess+" "+rng);
//document.write(intentos);
