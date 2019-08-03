<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
	  <link rel="stylesheet" href="css/styles.css" />
    <title>Prueba</title>
  </head>
  <body>
    <div class="container-nit">
      <div class="container-text">
        <label>Digite su numero de celuda</label>
      </div>
      <div class="input-box">
        <div>
          <input id="userId" class="input-box__input--size" type="text" placeholder="Digite su cedula" />
        </div>
        <div class="input-box__button">
          <button id="userId" type="text">Consultar</button>
        </div>
      </div>
    </div>
    <div id="containerStudents" class="container-students">
        <!--Here start the code in JS to show all students-->
    </div>
    <script type="text/javascript" src="js/consulta.js"></script>
  </body>
</html>