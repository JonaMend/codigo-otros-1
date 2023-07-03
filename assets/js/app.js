// Mi calificacion fue principiante en todas la secciones tube que realizar el codigo con mi compañero.


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // es necesario usar el selector de la clase para llamar al elemento
const $b = document.querySelector('.blog'); // el # se usa para el ID no para la clase, en este caso blog es una clase
const $l = document.querySelector('.location'); // no hay ninguna clase con nombre location., pero se crea en el html.

function displayUser(username) {
  $n.textContent = 'cargando...';

  fetch(`${usersEndpoint}/${username}`) // tenia await pero se usa para funciones asincronas y tenia un ; que no permitia ejecutar el then
  .then(response => {
    return response.json();
  })

    .then(data => {
      console.log(data); //esto no funciona para traer los datos de la API. Es necesario traer los datos en formato JSON primero.
      $n.textContent = `${data.name}`; // se deben usar backticks para las platillas literales
      $b.textContent = `${data.blog}`;
      $l.textContent = `${data.location}`;
    })

    .catch(error => {
      console.log("OH NO!", + error);
      //console.log(error); se puede juntar en un solo console.log
      $n.textContent = `Algo salió mal: ${error}`; //hacia falta el ; y $ a la variable


    })
}

/* No es necesario usar una funcion de error, mejor hacerlo usando catch
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
*/

displayUser('stolinski'); // no es necesario llamar. catch en la funcion