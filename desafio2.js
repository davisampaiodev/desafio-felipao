var vitorias = 15
var derrotas = 10
var saldoDeVitorias = vitorias - derrotas
var nivel = calcularNivel(vitorias);


function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function calculadoraDeRank(vitorias, derrotas, saldoDeVitorias){

    var nivel = calcularNivel(vitorias);
    return {saldoDeVitorias: saldoDeVitorias, nivel: nivel};
}

console.log (`O Herói tem saldo de ${saldoDeVitorias} está no Nivel ${nivel}`)




