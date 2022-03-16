const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")



// All Event upload

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
       UI.loadAllFilms(films);
    })
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        // ! Error
       UI.displayMessage("Fülle alle Feld aus...", "danger")
    }else{
        // * New Film
        const newFilm = new Film(title,director,url)
       UI.addFilmToUI(newFilm); // ? Add Film on Interface
        Storage.addFilmToStorage(newFilm); // Add films storage 
       UI.displayMessage("Film wurde erfolgreich hinzugefügt...", "success")
    }

    

   UI.clearInputs(titleElement, urlElement,directorElement)

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
       UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
       UI.displayMessage("Erfolgreich gelöscht", "success")
    }
}

function clearAllFilms(){
 if(confirm("Bist du sicher???")){
   UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
 }
}