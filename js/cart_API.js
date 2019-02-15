// pega o id do filme pela url da pagina
var url = window.location.href;
var stringUrl = url;
var result = stringUrl.split("html?").pop();


// load  da pagina 
$(window).load(function(){
$("#status").fadeOut();

$("#preloader").delay(2500).fadeOut(1500);


}) 


// pesquisa na API o filme pelo id 

var url = " https://api.themoviedb.org/3/movie/" + result +
    "?api_key=2cdf0d65c5e1dcf6d9cb6e4117a86188&language=pt-BR&append_to_response=videos,images"
fetch(url)
    .then((res) => res.json())
    .then((data) => {
            let output;

            let pano_de_fundo = "";
            if(data.backdrop_path != null){
                pano_de_fundo +=
                `
                <img id="PanoDeFundo" src='https://image.tmdb.org/t/p/w300${data.backdrop_path}'> 

                `;

            }
            
                pano_de_fundo +=
                `
                <img id="PanoDeFundo" src='images/Image-not.jpg'> 
                

                `;
                
            
            
            let poster = `
                <img  src='https://image.tmdb.org/t/p/w300${data.poster_path}'> 
                
                `;

            let tituloOriginal = `
                ${data.original_title}
                
                
                `;

            let titulo = `
                    ${data.title}
                
                `;
            let dataFilme = `
                    ${data.release_date}
                `;
            
            let sinopse = "";
            if(data.overview.length > 0){
                sinopse +=`
                    ${data.overview}
                    <br>
                    <br>
                `;

            }
            else{
                sinopse +=` <img id="foto_not_sinopse" src='images/sinopse.jpg' id="foto_not_sinopse">  `;
                
            }

                

            let popularidade =
                `
                        ${data.popularity}
                
                `;

            
            let nota_filme = `
                    ${data.vote_average}
                `;
            let genero ="";
            data.genres.forEach(function (filme) {
                genero +=
                    `
                
                                    ${filme.name}/
   
                  `;
            });

            let site = "";
            if(data.homepage != null ){
                 site +=`
                <a href="${data.homepage}">${data.homepage}<a/>
            `;

            }
            site +=` <p id="text"> NOT HOME PAGE </p>`;

                
            
            
            

            

            
        



              let image = "";
        data.production_companies.forEach(function (images) {

            if (images.logo_path != null) {
                image +=
                    `


                                <a class="example-image-link"style="margin-left: 62px" href="https://image.tmdb.org/t/p/w300${images.logo_path}"
                                    data-lightbox="example-set" data-title="${images.name}">
                                    <img class="example-image" style="width: 115px;" src="https://image.tmdb.org/t/p/w300${images.logo_path}" alt=""/>
                                </a>
                        


                        `;

            }

        });

        

        let video = "";
        let figure_video = "";
        let num = 1;
        data.videos.results.forEach(function (videos) {
            if(videos != false){
                
                video +=
                `
                <iframe class="embed-responsive-item  mySlides" id="tam-video" src="http://www.youtube.com/embed/${videos.key}"
                allowfullscreen></iframe>
                
                `;


            figure_video +=
                `
                    <div class="w3-col s4">
                    <img class="demo w3-border w3-hover-shadow" id="min_video" src="images/9.jpg" onclick="currentDiv(${num++})">
                </div>
            `


            }
            

            
            
            
        });








        



            
            



                // pegar todos os generos do filme

                // pega todas as images dos logotipo das empresas






                document.getElementById('pano_de_fundo').innerHTML = pano_de_fundo;
                document.getElementById('poster').innerHTML = poster;
                document.getElementById('tituloOriginal').innerHTML = tituloOriginal;
                document.getElementById('titulo').innerHTML = titulo;
                document.getElementById('dataFilme').innerHTML = dataFilme;
                document.getElementById('sinopse').innerHTML = sinopse;
                document.getElementById('popularidade').innerHTML = popularidade;
                document.getElementById('nota_filme').innerHTML = nota_filme;
                document.getElementById('genero').innerHTML = genero;
                document.getElementById('site').innerHTML = site;
                
                
                document.getElementById('video').innerHTML = video;
                document.getElementById('figure_video').innerHTML = figure_video;


                document.getElementById('image').innerHTML = image;

                //console.log(result);

             var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function currentDiv(n) {
            showDivs(slideIndex = n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            if (n > x.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = x.length
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" w3-border-red", "");
            }
            x[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " w3-border-red";
        }


            })
            // .catch((error)=>{
            // 	alert("ops!! ERRO");
            // });



            var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-border-red", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-border-red";
}




