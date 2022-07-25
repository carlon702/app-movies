const movies = require('./movies.js') ;

let moviesDH = {   
                listMovies : function() {
                    movies.forEach(function(movie, index){
                    console.log(index+1 + '-' + movie.title)});},              
                
                searchMovie : function(titleId) {
                    let peliTituloId = movies.find(peli => peli.title === titleId || peli.id === titleId);
                    if (peliTituloId == undefined){return console.log(null)} else {return peliTituloId};},

                searchMovieByGenre : function(genero) {
                    let peliGenero = movies.filter(peliculas => peliculas.genre === genero);
                    if (peliGenero != 0){return (peliGenero)} else {console.log(null)};},
                
                totalPrice : function(){
                    return (movies.reduce((acum, peli) => acum + peli.price, 0));},
                
                changeMovieGenre : function(id, generoNuevo){
                    let generoViejo = moviesDH.searchMovie(id);
                    generoViejo.genre = generoNuevo;
                    return generoViejo;}    
                             
                };

                


