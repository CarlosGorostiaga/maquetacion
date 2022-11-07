//PROFESSIONAL
class Professional {

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    information() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
        console.log(this.photo);
    }

//Pasa true o false a un string para la card
    checkRetirement(){
    if(this.isRetired == true)
      {return "Retirado"} else {return "En Activo"}
    }

    checkOscars(){
    if(this.oscarsNumber == 0)
      {return "No tiene Premios Oscar"} else {return "El numero de premios Oscar es  : " + this.oscarsNumber}
    }


}

//MOVIE
class Movie 
{
    constructor(title, releaseYear, nationality, genre, movieImage){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.movieImage = movieImage;
        this.actors = [];
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre;
    }
    showMovieData(){
        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.actors);
        console.log(this.nationality);
        console.log(this.director);
        console.log(this.writer);
        console.log(this.language);
        console.log(this.plataforma);
        console.log(this.isMCU);
        console.log(this.mainCharacterName);
        console.log(this.producer);
        console.log(this.distributor); 
        console.log(this.genre);       
    }
}
//IMDB
class IMDB
{
    constructor(peliculas){ //new Imdb ([movie1,movie2])
        this.peliculas = peliculas;//tipo: array de Movies.
    }

    showmovies(){
        console.log(this.peliculas);
    }
}

//CREAR NUEVA PELÍCULA

let hardcoded1= new Movie("Avatar: The Way of Water ",2022,"USA","Fantasia","https://teranautas.es/wp-content/uploads/Avatar-2-The-Way-of-Water-estrena-trailer-de-James.webp.webp");

let allMoviesArray = []


function createNewMovie(){
    let newTitle = document.getElementById("titulo").value;
    let newReleaseYear = document.getElementById("lanzamiento").value;
    let newNationality= document.getElementById("nationality").value;
    let newGenre= document.getElementById("genre").value;
    let newMovieImage= document.getElementById("movie_image").value; 

    //condicional
    if(newTitle == "" || newReleaseYear == "" || newNationality == "" || newGenre == "" || newMovieImage == ""){

        document.getElementById("moviesAre").innerHTML= "";
        for (let i = 0; i < allMoviesArray.length; i++) {
            document.getElementById("moviesAre").innerHTML+=
            ` <div class="card mb-3" style="width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${allMoviesArray[i].movieImage}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${allMoviesArray[i].title}</h5>
                  <h6 class="card-title">Release Year: ${allMoviesArray[i].releaseYear}</h6>
                  <h6 class="card-title">Nationality: ${allMoviesArray[i].nationality}</h6>
                  <h6 class="card-title">Genre: ${allMoviesArray[i].genre}</h6>
                  <p class="card-text">Movie description</p>
                </div>
              </div>
            </div>
          </div> `;
            
        }


    }
    else{
        let createdMovie = new Movie(newTitle,newReleaseYear,newNationality,newGenre,newMovieImage)
    
        allMoviesArray.push(createdMovie)

        document.getElementById("moviesAre").innerHTML= "";
        for (let i = 0; i < allMoviesArray.length; i++) {
            document.getElementById("moviesAre").innerHTML+=
            ` <div class="card mb-3" style="width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${allMoviesArray[i].movieImage}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${allMoviesArray[i].title}</h5>
                  <h6 class="card-title">Release Year: ${allMoviesArray[i].releaseYear}</h6>
                  <h6 class="card-title">Nationality: ${allMoviesArray[i].nationality}</h6>
                  <h6 class="card-title">Genre: ${allMoviesArray[i].genre}</h6>
                  <p class="card-text">Movie description</p>
                </div>
              </div>
            </div>
          </div> `;
            
        }
    }
    //condicional




}

//CREAR NUEVO PROFESIONAL


let allProsArray = [];


//boton radial//
function checkRadio(){
  let retireRadio = document.getElementsByName("retiredOptions")
  for (let i = 0; i < retireRadio.length; i++) {
    if(retireRadio[i].checked){
      return retireRadio[i].value
    }
  }
}


function createNewPro (){
  let newName = document.getElementById("name").value;
  let newAge = document.getElementById("age").value;
  let newWeight= document.getElementById("weight").value;
  let newHeight= document.getElementById("height").value;
  let newRetired = checkRadio();
  let newNationality= document.getElementById("personNationality").value; 
  let newOscars= document.getElementById("oscars").value;
  let newProfession= document.getElementById("profession").value;
  let newPhoto = document.getElementById("pro-photo").value;



  if(newName=="" || newAge=="" || newWeight=="" || newHeight=="" || newRetired==undefined
  || newNationality=="" || newOscars=="" || newProfession=="" || newPhoto=="")
  {
//name, age, weight, height, isRetired, nationality, oscarsNumber, profession
    document.getElementById("professionalsAre").innerHTML= "";
        for (let i = 0; i < allProsArray.length; i++) {
            document.getElementById("professionalsAre").innerHTML+=
            ` <div class="card mb-3" style="width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${allProsArray[i].photo}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${allProsArray[i].name}</h5>
                  <h6 class="card-title">Age: ${allProsArray[i].age}</h6>
                  <h6 class="card-title">Height: ${allProsArray[i].height}; Weight: ${allProsArray[i].weight}</h6>
                  <h6 class="card-title">${allProsArray[i].checkRetirement()}</h6>
                  <h6 class="card-title">${allProsArray[i].nationality}</h6>
                  <h6 class="card-title">${allProsArray[i].checkOscars()}</h6>
                </div>
              </div>
            </div>
          </div> `;
            
        }
  }

  else
  {
    let createdPro = new Professional(newName,newAge,newWeight,newHeight,newRetired,newNationality,newOscars,newProfession,newPhoto)

    allProsArray.push(createdPro); 
  
    document.getElementById("professionalsAre").innerHTML= "";
    for (let i = 0; i < allProsArray.length; i++) {
        document.getElementById("professionalsAre").innerHTML+=
        ` <div class="card mb-3" style="width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${allProsArray[i].photo}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${allProsArray[i].name}</h5>
              <h6 class="card-title">Age: ${allProsArray[i].age}</h6>
              <h6 class="card-title">Height: ${allProsArray[i].height}; Weight: ${allProsArray[i].weight}</h6>
              <h6 class="card-title">${allProsArray[i].checkRetirement()}</h6>
              <h6 class="card-title">${allProsArray[i].nationality}</h6>
              <h6 class="card-title">${allProsArray[i].checkOscars()}</h6>
            </div>
          </div>
        </div>
      </div> `;
        
    }

  }

}
