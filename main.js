//this wait the DOM charge completely
document.addEventListener("DOMContentLoaded", function(){
  fetch("https://rickandmortyapi.com/api/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let buttonSearch = document.getElementById('userId').addEventListener('click', () => {
        let containerStudents = document.getElementById("containerStudents").style.display = 'inherit';
      });

      /*******Work with values*******/
  
      /********get the container in the DOM*******/
      let containerStudents = document.getElementById("containerStudents");
      /********Start to create sons to container in DOM**********/
      let studentsGrid = document.createElement("div");
      studentsGrid.classList.add("container-table--index");
      /***** Section to create the index of table*******/
      let divNameIndex = document.createElement("div");
      divNameIndex.classList.add("index-name");
      divNameIndex.innerHTML = "Nombre: ";// + myJson.nombre;

      let divLastNameIndex = document.createElement("div");
      divLastNameIndex.classList.add("index-lastname");
      divLastNameIndex.innerHTML = "Apellido: ";// + myJson.apellido;

      let divNitIndex = document.createElement("div");
      divNitIndex.classList.add("index-nit");
      divNitIndex.innerHTML = "Cedula: ";// + myJson.cedula;

      let divNotesIndex = document.createElement("div");
      divNotesIndex.classList.add("index-notes");
      divNotesIndex.innerHTML = "Notas: ";// + myJson.notas;
      /***** End of section index******/
      /*-------This section show up divs to studetsgrid, like a child from studentsGrid ------ */
      studentsGrid.appendChild(divNameIndex);
      studentsGrid.appendChild(divLastNameIndex);
      studentsGrid.appendChild(divNitIndex);
      studentsGrid.appendChild(divNotesIndex); //Here I ain't know how many elements do you work

      //take the container of sons and send to father
      containerStudents.appendChild(studentsGrid);
    });
});