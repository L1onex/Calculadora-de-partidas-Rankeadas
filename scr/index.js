let vitoria = 130
let derrota = 2
let resultado = subtracao(vitoria,derrota)
 if (resultado < 10) {
            var nivel = "Ferro"
        } else if (resultado >= 10 && resultado <= 20) {
            var nivel = "Bronze"
        } else if (resultado >= 21 && resultado <= 50) {
            var nivel = "Prata"
        } else if (resultado >= 51 && resultado <= 80) {
            var nivel = "Ouro"
        } else if (resultado >= 81 && resultado <= 90) {
            var nivel = "Diamante"
        } else if (resultado >= 91 && resultado <= 100) {
            var nivel = "Lendário"
        } else {
            var nivel = "Imortal"
        }


console.log("O Herói tem de saldo de " + resultado + " Vitorias e está no nível de " + nivel )

function subtracao(vitoria, derrota){
	let sub = vitoria - derrota
    return sub
}