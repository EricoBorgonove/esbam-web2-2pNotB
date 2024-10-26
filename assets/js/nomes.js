const meuBotao = document.getElementById("meuBotao")

function juntarNomes(){
    const nome = document.getElementById("nome")
    const sobrenome = document.getElementById("sobrenome")
    // técnica da concatenação
    const nomeCompleto1 = nome.value + ' ' + sobrenome.value
    // técnica do template string
    const nomeCompleto2 = `Olá, ${nome.value} ${sobrenome.value}`

    document.getElementById("resultado").innerHTML = nomeCompleto2
}

meuBotao.addEventListener("click", juntarNomes)

