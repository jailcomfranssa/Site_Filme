// Pesquisa os filmes Lançamento


var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=2cdf0d65c5e1dcf6d9cb6e4117a86188&language=pt-BR&page=1"
fetch(url)
    .then((res) => res.json())
    .then((data) => {

        let image = "";
        data.results.forEach(function (filmes) {
            
            // função para tirar as "" simples e dublado do texto
            if(filmes.overview!= ""){
                var RegExp = /["|']/g;
                var texto=filmes.overview.replace(RegExp,"");
            }
            else{
                texto = "Esse filme ainda não possui tradução para o portuguẽs ...";
            }

           
           
            image +=
                `
                    
                <li class="example-item ">
                        
                        
                        <a href="https://image.tmdb.org/t/p/w300${filmes.poster_path}"id="tam" data-lightbox="mygallery" data-title="${texto}" >
                           <img src="https://image.tmdb.org/t/p/w300${filmes.poster_path}"id="tam" alt="ststststs"> </a>
                        
                        <div class="product_title link"> 
                            <div class="product_content">
								<div class="product_title"><a href="cart.html?${filmes.id}">${filmes.title}</a></div>	
						</div>
                        </div></li>


                        `;

        
        
       
      
        document.getElementById('lista-filme').innerHTML = image;


        });

       



    })