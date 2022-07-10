let input = document.querySelector(".input")
let boton_agregar = document.querySelector(".boton-agregar")
let contenedor = document.querySelector(".container")

//crear clase item

class Item{
  constructor(nueva_tarea){
    this.crearDiv(nueva_tarea)
  }
  crearDiv(tarea) {
    //agregar div
    const divnuevo = document.createElement('div')
    //atributo del div
    divnuevo.classList.add('item')
    //atributo del input
    const createInput = document.createElement('input');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('disabled', 'true');
    createInput.classList.add('item-input');
    createInput.value = tarea;
    divnuevo.appendChild(createInput);
    contenedor.appendChild(divnuevo);

    const editButton = document.createElement('boton-editar')
    editButton.classList.add('boton-editar')
    editButton.innerHTML=`<i class="fa-solid fa-lock"></i>`
    divnuevo.appendChild(editButton)
    contenedor.appendChild(divnuevo)
    editButton.addEventListener("click",function (){
      if (createInput.disabled){
        createInput.disabled = false
        editButton.innerHTML =  "<i class='fa-solid fa-lock-open'></i>"
      }
      else{
        createInput.disabled = true
        editButton.innerHTML = '<i class="fa-solid fa-lock"></i>'
      } 
    })

    const removeButton = document.createElement('boton-remover');
        removeButton.classList.add('boton-remover')
        removeButton.innerHTML=`<i class="fa-solid fa-trash"></i>`
        divnuevo.appendChild(removeButton)
        contenedor.appendChild(divnuevo)
        removeButton.addEventListener("click",function (){
          contenedor.removeChild(divnuevo)
        })

      

  }   
    
}

boton_agregar.addEventListener("click",chequearInput)
function chequearInput(){
  if(input.value === ""){
  }else{
    const x = new Item(input.value.trim())
    input.value = " "
  }
}
input.addEventListener("keyup", function(eve){
  if(eve.keyCode === 13){
    chequearInput()
  }
})