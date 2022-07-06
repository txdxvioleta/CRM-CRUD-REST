//Importaciones:
import {obtenerClienteId, editarCliente} from './API.js'
import {mostrarAlerta} from './funciones.js'
(
  () => {
    
    //* Referencias:
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')



    //* Funciones:

    //Recupera el id usando searchParams:
    const recuperaId = async () => {

      const parametrosURL = new URLSearchParams(window.location.search)
      const idCliente = parseInt(parametrosURL.get('id'))
      const cliente = await obtenerClienteId(idCliente)

      mostrarCliente(cliente)

      //Submit al formulario:
      const formulario = document.querySelector('#formulario')
      

    }

    //Llena los inputs con los datos recuperados del cliente:
    const mostrarCliente = (cliente) => {
      
      const {nombre, empresa, email, telefono, id} = cliente
      
      nombreInput.value = nombre
      empresaInput.value = empresa
      emailInput.value = email
      telefonoInput.value = telefono
      idInput.value = id

    }

    const validarCliente = (e) => {
      e.preventDefault()
      
      //* Forma alternativa de validación utilizando objetos:
      const cliente = { 
        nombre: nombreInput.value, 
        email: emailInput.value, 
        telefono: telefonoInput.value, 
        empresa: empresaInput.value, 
        id: parseInt(idInput.value) 
      }

      if (validarObj(cliente)) {

        //Muestra mensaje:
        mostrarAlerta('Todos los campos son obligatorios')
      }

      //Reescribe el objeto:
      editarCliente(cliente)

    }

    


    //Valida el objeto:
    const validarObj = (obj) => {

      //Si al menos uno está vacío retorna false:
      return !Object.values(obj).every(input => input !== '')
    }

    //Eventos:  
    document.addEventListener('DOMContentLoaded', recuperaId)
    formulario.addEventListener('submit', validarCliente)
  
  
  }



)()