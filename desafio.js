let vitorias = 30
let derrotas = 15
let saldoVitorias = saldoRank(vitorias, derrotas)

function saldoRank(vitorias, derrotas){
    let saldoVit = vitorias - derrotas
    return saldoVit
}

switch (true) {
    case (saldoVitorias <= 10):
        nivel = "Ferro"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   
    break

    case (saldoVitorias >= 11 && saldoVitorias <= 20):
        nivel = "bronze"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   
    break    

    case (saldoVitorias >= 21 && saldoVitorias <= 50):
        nivel = "Prata"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   
    break   
    
    case (saldoVitorias >= 51 && saldoVitorias <= 80):
        nivel = "Ouro"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   
    break    

    case (saldoVitorias >= 81 && saldoVitorias <= 90):
        nivel = "Diamante"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   
    break    

    case (saldoVitorias >= 91 && saldoVitorias <= 100):
        nivel = "Lendário"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   
    break    

    default:
        nivel = "Imortal"
        console.log(`O Herói tem o saldo de ${saldoVitorias} está no nível de ${nivel}`);   

}