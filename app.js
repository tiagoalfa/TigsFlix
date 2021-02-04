const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';


// Função que cria os cards dos filmes

function MostraFilmesEmCartaz () {
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
        data: {
            api_key: '6927cabb78e4c4cd227f32dd4e3c61f8'
        }
    })
    // Receber o JSON
    .done(function (data) {
 
        let codigo_html = '';
                
         // Montar os cards
         for (i=0; i< data.results.length; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            linkFilmes = 'https://www.themoviedb.org/movie/' + data.results[i].id;
            avaliacao = data.results[i].vote_average;
            dataFilme = data.results[i].release_date;
            idioma = data.results[i].original_language;

            codigo_html += `<div class="col-lg-3"><div class="card cardjs">
                    <img src="${imagem}" class="card-img-top"
                        alt="${titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                    </div>
                    <p><strong>IMDB:</strong>${avaliacao}</p>
                    <strong>Idioma original:</strong>${idioma}
                    <p><strong>Lançamento:</strong>${dataFilme}</p>
                  
                </div>
                <a href="${linkFilmes}" class="btn btn-primary button-assistir">Assistir filme</a>
                </div>`;
         }


        // Repassar os cards para a página
         $('#lista_filmes').html(codigo_html)

    });

}
    //Mostrar filmes depois que clicar no botão CARREGARMAISFILMES
    function MostraMaisFilmes() {
    
        $.ajax({
            // Passar a URL ENDPOINT BASE + /movie/now_playing
            url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
            data: {
                api_key: '6927cabb78e4c4cd227f32dd4e3c61f8'
            }
        })
        // Receber o JSON
        .done(function (data) {
     
            let codigo_html = '';
                    
             // Montar os cards
             for (i=0; i< data.results.length; i++) {
    
                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;
                linkFilmes = 'https://www.themoviedb.org/movie/' + data.results[i].id;
                avaliacao = data.results[i].vote_average;
                dataFilme = data.results[i].release_date;
                idioma = data.results[i].original_language;
    
                codigo_html += `<div class="col-lg-3"><div class="card cardjs">
                        <img src="${imagem}" class="card-img-top"
                            alt="${titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${titulo}</h5>
                        </div>
                        <p><strong>IMDB:</strong>${avaliacao}</p>
                        <strong>Idioma original:</strong>${idioma}
                        <p><strong>Lançamento:</strong>${dataFilme}</p>
                      
                    </div>
                    <a href="${linkFilmes}" class="btn btn-primary button-assistir">Assistir filme</a>
                    </div>`;
             }
    
    
            // Repassar os cards para a página
             $('#lista_filmes2').html(codigo_html)
    
        });
    
    }


    // Receber o JSON
 
function PesquisaFilmes () {
    var element= document.getElementById('input_Pesquisar');
    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: '6927cabb78e4c4cd227f32dd4e3c61f8',
            query: element.value
            
        }
    })
    // Receber o JSON
    .done(function (data) {
 
        let codigo_html = '';
        
         // Montar os cards
         for (i=0; i< data.results.length; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            linkFilmes = 'https://www.themoviedb.org/movie/' + data.results[i].id;
            avaliacao = data.results[i].vote_average;
            dataFilme = data.results[i].release_date;
            idioma = data.results[i].original_language;

            codigo_html += `<div class="col-lg-3"><div class="card cardjs">
                    <img src="${imagem}" class="card-img-top"
                        alt="${titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                    </div>
                    <p><strong>IMDB:</strong>${avaliacao}</p>
                    <strong>Idioma original:</strong>${idioma}
                    <p><strong>Lançamento:</strong>${dataFilme}</p>
                  
                </div>
                <a href="${linkFilmes}" class="btn btn-primary button-assistir">Assistir filme</a>
                </div>`;
         }


        // Repassar os cards para a página
         $('#lista_filmes').html(codigo_html)

    });
}



$( document ).ready(function () {

    MostraFilmesEmCartaz ();

    MostraMaisFilmes();

  

    $('#btn_Pesquisar').click(PesquisaFilmes);
})
;
//Mostrar e esconder divs dos filmes
var button = document.getElementById("action-btn");

button.addEventListener("click", function() {

    var container = document.getElementById("container");
    if(container.style.display==="block"){
        container.style.display="none"
    }else{
        container.style.display="block"
    }
})

var button2 = document.getElementById("avaliation-btn");

button2.addEventListener("click", function() {

    var container2 = document.getElementById("container2");
    if(container2.style.display==="block"){
        container2.style.display="none"
    }else{
        container2.style.display="block"
    }
})
var button3 = document.getElementById("entrevista-btn");

button3.addEventListener("click", function() {

    var container3 = document.getElementById("container3");
    if(container3.style.display==="block"){
        container3.style.display="none"
    }else{
        container3.style.display="block"
    }
})

