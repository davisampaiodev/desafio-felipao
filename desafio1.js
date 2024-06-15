const NomeDoHeroi = "Sampa"
let XpDoHeroi = 10001
let PatenteDoHeroi = 'i'

switch(true){
case    XpDoHeroi > 0 && XpDoHeroi <= 1000:
    PatenteDoHeroi = 'Ferro'
    break;

case   XpDoHeroi > 1000 && XpDoHeroi <= 2000: 
    PatenteDoHeroi = 'Bronze'
    break;

case  XpDoHeroi > 2001 && XpDoHeroi <= 5000:
    PatenteDoHeroi = 'Prata'
    break;

case XpDoHeroi > 6001 && XpDoHeroi <= 7000:
     PatenteDoHeroi = 'Ouro'
     break;

case XpDoHeroi > 7001 && XpDoHeroi <= 8000:
    PatenteDoHeroi = 'Platina'
    break;

case XpDoHeroi => 8001 && XpDoHeroi <= 9000:
    PatenteDoHeroi = 'Ascendente'
    break;

case XpDoHeroi > 9001 && XpDoHeroi <= 10000:
    PatenteDoHeroi = 'Imortal'
    break;

case XpDoHeroi >= 10001:
    PatenteDoHeroi = 'Radiante'
    break;

default:
   PatenteDoHeroi = 'Indefinido'

}
console.log("O Heroi de nome " + NomeDoHeroi + " esta na patente " + PatenteDoHeroi + ".")