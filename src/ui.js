class UI {

    static addFilmToUI(newFilm) {
        /* <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> */

        const FilmList = document.getElementById("films")
        FilmList.innerHTML += `
      <tr>
      <td><img src="${newFilm.url} " class="img-fluid img-thumbnail w-75"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
    </tr>`
    }

    static clearInputs(item1, item2, item3) {
        item1.value = "";
        item2.value = "";
        item3.value = "";
    }

    static displayMessage(message, type) {
        const cardBody = document.querySelector(".card-body");

        // Alert
        const div = document.createElement("div")
        div.className = `alert alert-${type}`
        div.textContent = message;
        cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films");
        films.forEach(film => {
            filmList.innerHTML += `  <tr>
            <td><img src="${film.url} " class="img-fluid img-thumbnail w-75"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
          </tr>`
        });
    }


    static deleteFilmFromUI(element) {

        element.parentElement.parentElement.remove();

    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films")
        // * filmList.innerHtml = "";  ==>> works slowly

        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }
    }

}