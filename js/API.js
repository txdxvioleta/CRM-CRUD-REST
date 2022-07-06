//* Variables globales:
const url = 'http://localhost:4000/clientes'

//* Funciones:

//Crea un nuevo cliente:
export const nuevoCliente = async cliente => {

  try {

    const objConfig = {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-type': 'application/json'
      },
    }

    await fetch(url, objConfig)

    window.location.href = 'index.html'

  }
  catch (error) {
    console.log(error)
  }
}

//Obtiene la lista de clientes:
export const obtenerClientes = async () => {

  try {
    const respuesta = await fetch(url)
    const clientes = await respuesta.json()
    return clientes

  } catch (error) {
    console.log(error)
  }

}

//Elimina el cliente según el id que indique:
export const eliminarCliente = async (id) => {

  try {

    const objConfig = {
      method: 'DELETE',

    }

    await fetch(`${url}/${id}`, objConfig)


  } catch (error) {
    console.log(error)
  }


}

//Obtiene un cliente por su id:
export const obtenerClienteId = async (id) => {

  try {
    const resultado = await fetch(`${url}/${id}`)
    const cliente = await resultado.json()
    return cliente

  }
  catch (error) {
    console.log(error)
  }
}


//Actualiza un registro:
export const editarCliente = async (cliente) => {

  const objConfig = {
    method: 'PUT',
    body: JSON.stringify(cliente),
    headers: {
      'Content-Type': 'application/json'
    }

  }

  try {
    await fetch(`${url}/${cliente.id}`, objConfig)
    window.location.href = 'index.html'
  } catch (error) {
    error
  }
 
}


/*
  fetch puede recibir 2 parámetros, en donde el segundo es un objeto de configuración:

  method POST: Se usa para crear un nuevo registro
  body: contenido de la petición (se envía como string o como objeto)
  headers: información de que tipo de datos estoy enviando
  uso JSON.stringify(cliente) para convertir el objeto cliente a string y lo envia a la url
  
  method: PUT y PATCH sirven para lo mismo excepto que put reescribe todo el objeto y patch es parcial

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(cliente),
    headers: {
      'Content-type': 'application/json
    }
  })


*/