//Importaiones:
import { mostrarAlerta } from './funciones.js' //!Como no es import default se usan llaves
import { nuevoCliente } from './API.js'


(
  () => {

    //Referencias:
    const formulario = document.querySelector('#formulario')



    //Funciones:
    const validarCliente = (e) => {
      e.preventDefault()

      //Referencia a los campos del formulario:
      const nombre = document.querySelector('#nombre').value
      const email = document.querySelector('#email').value
      const telefono = document.querySelector('#telefono').value
      const empresa = document.querySelector('#empresa').value

      //* Forma alternativa de validación utilizando objetos:
      const cliente = { nombre, email, telefono, empresa }

      if (validarObj(cliente)) {

        //Muestra mensaje:
        mostrarAlerta('Todos los campos son obligatorios')
      }
      else {
        nuevoCliente(cliente)
      }


    }


    //Valida el objeto:
    const validarObj = (obj) => {

      //Si al menos uno está vacío retorna false:
      return !Object.values(obj).every(input => input !== '')
    }


    //Eventos:
    formulario.addEventListener('submit', validarCliente)


  }



)()