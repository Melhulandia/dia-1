let nombreInput = document.querySelector('#nombre'),
 apellidoInput = document.querySelector('#apellido'),
 emailInput = document.querySelector('#email');

let cantInput = document.querySelector('#cantidad'),
    catInput = document.querySelector('#categoria'),
    total = document.querySelector('.precio');

//Calculando el precio total
let cantSelec = 0, catSelec = "sinDesc";

cantInput.addEventListener('blur', calcPrecio)
catInput.addEventListener('blur', calcPrecio);

function calcPrecio(e){
    e.preventDefault;

    e.target.id === 'cantidad' ? 
        cantSelec = e.target.value : 
        catSelec = e.target.value;
    
    precio = (cantSelec * 200);

    switch(catSelec){
        case 'estudiante':
            precio *= 0.2;
            break;
        case 'trainee':
            precio *= 0.5;
           
            break;
        case 'junior':
            precio *= .85;
           break;
        default:
            break;
    }
    total.innerHTML = `$${precio}`;

}

//Validando el formulario

nombreInput.addEventListener('blur', validateInput);
apellidoInput.addEventListener('blur', validateInput);
emailInput.addEventListener('blur', validateInput);

function validateInput(e){
    e.preventDefault();
    let errorDiv = e.target.nextElementSibling;
    
    if(e.target.value === ''){
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.innerHTML = `Debes completar este campo`;

    } else{
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        errorDiv.innerHTML = '';
    }

}

//Botones

let resumenBtn = document.querySelector('#resumen');
let borrarBtn = document.querySelector('#borrar');

// resumenBtn.setAttribute("disabled", "");
resumenBtn.addEventListener('click', handleSubmit);
borrarBtn.addEventListener('click', borrarForm);

function borrarForm(){
    nombreInput.value = "";
    apellidoInput.value = "";
    emailInput.value = "";
    cantInput.value = "";
    catInput.value = "sinDesc";

    nombreInput.classList.remove('is-valid');
    apellidoInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    total.innerHTML = "";
}


function handleSubmit(e){
  e.preventDefault
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}