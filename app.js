// Função para ocultar todos os elementos com IDs iniciando com 'resultados-pesquisa-'
function desabilitaTodosItens() {
    const itens = document.querySelectorAll("[id^='resultados-pesquisa-']");

    itens.forEach(item => {
        item.style.visibility = 'collapse';
    });
}

// Função para selecionar e exibir o item correspondente ao valor selecionado no select
function selecionaItem() {
    const selectBoxPesquisa = document.getElementById("busca");
    const identificador = selectBoxPesquisa.value;
    
    var IdItemSelecionado = "resultados-pesquisa-" + identificador;

    var sectionSelecionada = document.getElementById(IdItemSelecionado);

    desabilitaTodosItens();
    desabilitaTodosItensTitulo();
    sectionSelecionada.style.visibility = 'visible';
}

// Função para ocultar todos os elementos com IDs iniciando com 'resultados-pesquisa-titulo-'
function desabilitaTodosItensTitulo() {
    const itens = document.querySelectorAll("[id^='resultados-pesquisa-titulo-']");

    itens.forEach(item => {
        item.style.visibility = 'collapse';
    });
}

// Função para selecionar e exibir o item correspondente ao valor selecionado no select
function selecionaTitulo() {
    const selectBoxPesquisa = document.getElementById("busca-titulos");
    const identificador = selectBoxPesquisa.value;
    
    var IdItemSelecionado = "resultados-pesquisa-titulo-" + identificador;

    var sectionSelecionada = document.getElementById(IdItemSelecionado);
    
    console.log("IdSelecionado = " + IdItemSelecionado);
    
    desabilitaTodosItensTitulo();
    desabilitaTodosItens();
    sectionSelecionada.style.visibility = 'visible';
}

// Funcao usada para popuplar as divs de cada atleta a partir da base de dados e da relação de títulos de campeonatos (Dados definidos no script dados.js)
function criarDivs() {

    const container = document.getElementById('pesquisa'); // Container que ira agrupar os elementos

    // Atletas
    // Itera sobre os atletas, criando divs e opções de select

    let i = 1;
    atletas.forEach(atleta => {
        
        // Cria as divs
        const div = document.createElement('div');
        div.id = "resultados-pesquisa-" + i;
        div.style.visibility = 'collapse';

        div.classList.add('c-card'); // Adiciona uma classe para estilização

        div.innerHTML = `
                <img src="imagens/${atleta.foto}">
                <h2>${atleta.nome}</h2>
                <p>${atleta.descricao}</p>
                <p><a href="${atleta.link}" target="_blank"><img class="saibamais" src="imagens/mais.png" text="Saiba mais" alt="Saiba mais"></a></p>
         `;

        container.appendChild(div);

        // Popula a select box de pesquisa
        const seleciona = document.getElementById("busca");
        var opcao = document.createElement("option");
        opcao.text = atleta.nome;
        opcao.value = i;
        seleciona.options.add(opcao, i);

        i++;
    });

    // Campeonatos
    // Itera sobre os títulos, criando divs e opções de select
    let j = 1;
    titulos.forEach(titulo => {
        
        // Cria as divs
        const div2 = document.createElement('div');
        div2.id = "resultados-pesquisa-titulo-" + j;
        div2.style.visibility = 'collapse';

        div2.classList.add('c-card'); // Adiciona uma classe para estilização

        div2.innerHTML = `
                <img src="imagens/${titulo.foto}">
                <h2>${titulo.campeonato}</h2>
                <br />
                <p>O Vasco da Gama conquistou o campeonato em:</p>
                <p>${titulo.anos}</p>
         `;

        container.appendChild(div2);

        console.log("Div2 = " + div2.id);

        // Popula a select box de pesquisa
        const seleciona = document.getElementById("busca-titulos");
        var opcao = document.createElement("option");
        opcao.text = titulo.campeonato;
        opcao.value = j;
        seleciona.options.add(opcao, j);

        j++;
    });
}