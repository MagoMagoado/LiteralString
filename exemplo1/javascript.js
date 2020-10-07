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
            <div class="informacoes">
                <h1 class="titulo-filme">Nome:</h1><h2 class="sub-filme">${filme.nome}</h2>
                <h1 class="titulo-filme">Gênero:</h1><h2 class="sub-filme">${filme.gênero}</h2>
                <h1 class="titulo-filme">Tempo:</h1><h2 class="sub-filme">${filme.tempo}</h2>
                <h1 class="titulo-filme">Indicação:</h1><h2 class="sub-filme">${filme.indicação}</h2>
            </div>
            <ul>
                <li style='background-image: ${filme.foto} ;'></li>
                <li style='background-image: ${filme.foto} ;'></li>
                <li style='background-image: ${filme.foto} ;'></li>
                <li style='background-image: ${filme.foto} ;'></li>
            </ul>
        </div>
        `
    }

    document.getElementById('catalogo').innerHTML=`
    <h1>Filmes disponíveis (${catalogo.length})</h1>
    ${catalogo.map(templateCatalogo).join('')}
    `;

}

window.addEventListener("load", function(){
 eventos();
});