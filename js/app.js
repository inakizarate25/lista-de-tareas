
const botonAgregar = document.querySelector('.agregar')
const lista = document.querySelector('.ul')
const inputIngreso = document.getElementById('agregar-tareas')
let contadorTareas = 0
    
botonAgregar.addEventListener('click', function(event) {
    event.preventDefault()
    
    const tareaIngresada = inputIngreso.value

    if(tareaIngresada.length >= 1) {
        
        let li = document.createElement('li')
        li.style.listStyleType = "none"
        li.innerHTML = `
        <li class="tareas">
        <div class="tareas-div">
            <input type="checkbox" class="check" name="" id="">
            <span id="tarea${contadorTareas}">${tareaIngresada}</span>
        </div>
        <button  type="button" id="eliminar${contadorTareas}" class="eliminar" ><i class="bi bi-trash3"></i></button>
    </li>`
        lista.appendChild(li)
    }
        
    inputIngreso.value = ''

        
    let botonEliminar = document.getElementById(`eliminar${contadorTareas}`)
        
    botonEliminar.addEventListener('click', function() {
        botonEliminar.parentElement.remove()
    })

    contadorTareas++   
     
})

