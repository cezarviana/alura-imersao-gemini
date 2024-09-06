function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada atleta na lista de atletas
    for (let atleta of atletas) {
        titulo = atleta.titulo.toLowerCase()
        descricao = atleta.descricao.toLowerCase()
        tags = atleta.tags.toLowerCase()
        //se titulo includes campoPesquisa, então, faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
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
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado foi encontrado</p>"

    }

    // Atribui o HTML construído à seção de resultados, atualizando a página
    section.innerHTML = resultados;
}


