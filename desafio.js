let vitorias = 30
let derrotas = 15
let saldoVitorias = saldoVit

function saldoRank(){
    let saldoVit = vitorias - derrotas
    return saldoVit

}

switch (true) {
    case (saldoVitorias <= 10):
        nivel = "Ferro"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   
    break

    case (saldoVitorias >= 11 && xp <= 20):
        nivel = "bronze"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   
    break    

    case (saldoVitorias >= 21 && xp <= 50):
        nivel = "Prata"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   
    break   
    
    case (saldoVitorias >= 51 && xp <= 80):
        nivel = "Ouro"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   
    break    

    case (saldoVitorias >= 81 && xp <= 90):
        nivel = "Diamante"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   
    break    

    case (saldoVitorias >= 91 && xp <= 100):
        nivel = "Lendário"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   
    break    

    default:
        nivel = "Imortal"
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);   

}