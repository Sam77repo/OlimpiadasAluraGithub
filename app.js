function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    console.log(section); // Loga a seção no console para fins de depuração

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ""

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        // Concatena HTML para criar um novo item de resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Mais informações </a>
        </div>
        `
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados
}



