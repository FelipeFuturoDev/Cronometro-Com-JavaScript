var mile = 0;//milesimos
var sec = 0;//segundos
var min = 0;//minutos
var hora = 0;//horas
var day = 0;//dias
var interval;//valor de um minuto


//A funtion thedigit organiza os digitos de forma que quando o numero e menor que dez ela coloca o zero a esquerda
function thedigit(digit){

    if(digit < 10){
        return( "0" + digit);
    }else{
        return(digit);
    }
}

// esconde os numeros de DIAS quando seu valor for zero
function fals(digit){
 
    if( digit < 1){
        return(" ");
    }else if(digit == 1){
        return( thedigit(digit) + ":");
    }

}

//a function are, esconde o numerpo de hora quando esse valor é menor que um, e esponhe o valor quando o mesmo é igual ou maior que um
function are( digit ){
    
    if( digit < 1 && day < 1){
        return(" ");
    }//else if( digit > 1 && day == 1 ){
       // return( thedigit(digit) + ":" )
    //}
    else{
        return(digit)
    }
}


//A function organiza e retorna os valores colocados em exibicao no id="aq"
//function tempo
function time(){
       mile++;
    if(mile == 60){
       sec++;
       mile=0;
  
    if( sec == 60){
 
       sec = 0;
        min++;
        
    }
  
    if(min == 60){
 
        sec = 0;
        min = 0;
        hora++;
       
    }
  
    if(hora == 23 && min == 59 && sec == 59){
 
        sec = 0;
        min = 0;
        hora = 0;
        day++;
    }
    if( day > 1 ){
        stop(day, hora, min, sec, mile);
    }
}
    document.getElementById("aq").innerText = fals(day) + thedigit(hora) + are(min) + thedigit(sec) + ":" + thedigit(mile) ;
}


//funcao iniciar
function start(){
    interval = setInterval(time,16.7);
}


//funcao pausar
function pause(){

    clearInterval(interval);

}


//funcao parar
function stop(){

    clearInterval(interval);
 
    mile = 0;
    sec = 0;
    min = 0;
    hora = 0;
    day = 0;

    document.getElementById("aq").innerText = "00:00";

}