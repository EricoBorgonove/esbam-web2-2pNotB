function searchCEP() {
    cep = document.getElementById("cep").value
    if (cep.length != 8){
        alert("O CEP está inválido")
    }else{
        viaCep(cep)
    }
}

function viaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then( response => response.json() )
        .then( response => {
            document.getElementById("inputLog").value = response.logradouro
        })
}

// async function searchCEP(cep) {
//     try{
//         const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

//         if (!response.ok || response.status != 200){
//             throw new Error(`Erro ao buscar  CEP: ${response.status}`)
//         }
//         const data = await response.json()

//         if (data.erro){
//             throw new Error ("CEP não encontrado")
//         }

//         document.getElementById("inputLog").value = response.logradouro

//     }catch (error){
//         alert(`Erro: ${error}`)

//     }
// }