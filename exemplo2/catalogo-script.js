function eventos(){

    const catalogo = [
    {
        'nome': 'Filme1',
        'gênero': 'Aventura',
        'tempo': '1h 39min',
        'indicação': 'Livre',
        'foto': 'url(./img/godzilla.jpg)'
    },
    {
        'nome': 'Filme2',
        'gênero': 'Ação',
        'tempo': '2h 05min',
        'indicação': 'Livre',
        'foto': 'url(./img/alladin.jpg)'
    },
    {
        'nome': 'Filme3',
        'gênero': 'Romance',
        'tempo': '1h 35min',
        'indicação': '+12',
        'foto': 'url(./img/godzilla.jpg)'
    },
    {
        'nome': 'Filme4',
        'gênero': 'Terror',
        'tempo': '1h 56min',
        'indicação': '+18',
        'foto': 'url(./img/godzilla.jpg)'
    }
    ];

    function templateCatalogo(filme){
        return `
        <div class="card">
            <div class="filtro">
                <i class="fas fa-info-circle icon-open"></i>
                <h1>${filme.nome}</h1>
            </div>
            <div class="frente" style='background-image: ${filme.foto};'></div>
            <div class="informacoes informacoes-disable">
                <div class="foto" style='background-image: ${filme.foto};'></div>
                <div class="titulos">
                    <i class="fas fa-arrow-alt-circle-right icon-close"></i>
                    <h1 class="titulo-filme">Nome:</h1><h2 class="sub-filme">${filme.nome}</h2>
                    <h1 class="titulo-filme">Gênero:</h1><h2 class="sub-filme">${filme.gênero}</h2>
                    <h1 class="titulo-filme">Tempo:</h1><h2 class="sub-filme">${filme.tempo}</h2>
                    <h1 class="titulo-filme">Indicação:</h1><h2 class="sub-filme">${filme.indicação}</h2>
                </div>
            </div>
        </div>
        `
    }

    document.getElementById('catalogo').innerHTML=`
    <h1>Filmes disponíveis (${catalogo.length})</h1>
    ${catalogo.map(templateCatalogo).join('')}
    `;

    //Click em informações
    var iconOpen = document.getElementsByClassName('icon-open');

    for (i=0; i < catalogo.length; i++) {
        iconOpen[i].onclick = function(e){
            let frente = e.target.parentNode; 
            let card = frente.parentNode;
            let informacoes = card.children[2];//esse que eu quero
            let titulos = informacoes.children[1];
            let iconClose = titulos.children[0];//e esse também

            informacoes.classList.remove('informacoes-disable');
            informacoes.classList.add('informacoes-active');

            iconClose.onclick = function(){
                informacoes.classList.remove('informacoes-active');
                informacoes.classList.add('informacoes-disable');
            }
        }
    }
}

window.addEventListener("load", function(){
 eventos();
});