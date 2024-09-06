function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada atleta na lista de atletas
    for (let atleta of atletas) {
        // Constrói o HTML para um item de resultado, formatando com as informações do atleta
        resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${atleta.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${atleta.descricao}</p> 
                        <a href="${atleta.link}" target="_blank">Mais informações</a>
                    </div>
        `;
    }

    // Atribui o HTML construído à seção de resultados, atualizando a página
    section.innerHTML = resultados;
}


