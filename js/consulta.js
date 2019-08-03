window.addEventListener('load', function() {
    let btn = document.getElementById('userId').addEventListener('click', function() {
        sendRequest()
    });
 });
 
function sendRequest() {
  let id = document.getElementById("userId")
  fetch("control/UserControl.php", {
  method: 'POST',
  body: JSON.stringify({id}),
  headers:{
   'Content-Type': 'application/json'
 }
})
.then(res => console.log(res))
.catch(error => console.error('Error:', error))

}

document.addEventListener("DOMContentLoaded", function() {
  /********get the container in the DOM*******/
  let containerStudents = document.getElementById("containerStudents");
  /********Start to create sons to container in DOM**********/
  let studentsGrid = document.createElement("div");
  studentsGrid.classList.add("container-table--index");
  /***** Section to create the index of table*******/
  let divNameIndex = document.createElement("div");
  divNameIndex.classList.add("index-name");
  divNameIndex.innerHTML = "Nombre";

  let divLastNameIndex = document.createElement("div");
  divLastNameIndex.classList.add("index-lastname");
  divLastNameIndex.innerHTML = "Apellido";

  let divNitIndex = document.createElement("div");
  divNitIndex.classList.add("index-nit");
  divNitIndex.innerHTML = "Cedula";

  let divNotesIndex = document.createElement("div");
  divNotesIndex.classList.add("index-notes");
  divNotesIndex.innerHTML = "Notas";
  /***** End of section index******/
  /*-------This section show up divs to studetsgrid, like a child from studentsGrid ------ */
  studentsGrid.appendChild(divNameIndex);
  studentsGrid.appendChild(divLastNameIndex);
  studentsGrid.appendChild(divNitIndex);
  studentsGrid.appendChild(divNotesIndex); //Here I ain't know how many elements do you work

  //take the container of sons and send to father
  containerStudents.appendChild(studentsGrid);

  /*******Here take JSON ********/
  /*                            */
  /*   use JSON to show values  */
  //if the json is in index.php
  //let objJson = getElementById("here-is-the-id-where-you-have-the-JSON");
  //else the json are directly in js doc
  fetch('control/UserControl.php')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      /*******Work with values*******/
    });
});