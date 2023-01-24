function verificaString(array) {
    let tam_max = 0;
    let nome_encontrado;
    array.forEach (item => {
        if(tam_max <= item.length){
            tam_max = item.length
            nome_encontrado = item
        }
    })

    return nome_encontrado;

}; 

 console.log(verificaString(["Joao", "Cachorro", "Calopsita", "Ana", "Ronaldo"]));

