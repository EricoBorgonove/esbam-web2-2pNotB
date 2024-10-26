

const generos = document.getElementsByName("generos")
function abrirOutros(){
    let outros = document.querySelector("#outros")
    if (generos[2].checked) {
        outros.disabled = false
    } else{
        outros.disabled = true
        outros.value = ''
    }
}

generos.forEach ( genero => {
    genero.addEventListener('input', abrirOutros)
})


