export const mostrarAlerta = (mensaje) => {
  const alerta = document.querySelector('.bg-red-100')

  //* Si no hay una alerta previa se genera una:
  if (!alerta) {
    const alerta = document.createElement('p')
    
    //Añado todas las clases correspondientes:
    alerta.classList.add(
      'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3',
      'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center'
    )
    
    alerta.innerHTML = 
    `
      <strong class = "font-bold">Todos los campos son obligatorios</strong>
      <!--<span class = "block sm:block">${mensaje}</span>-->
    
    `
    const formulario = document.querySelector('#formulario')
    formulario.appendChild(alerta)

    //Luego de 3 segundos la alerta desaparece:
    setTimeout(() => {
      alerta.remove()
    }, 3000)


  }

}