const paises = [
    { "nome": "Afeganistão", "sigla": "AF" },
    { "nome": "África do Sul", "sigla": "ZA" },
    { "nome": "Albânia", "sigla": "AL" },
    { "nome": "Alemanha", "sigla": "DE" },
    { "nome": "Andorra", "sigla": "AD" },
    { "nome": "Angola", "sigla": "AO" },
    { "nome": "Antígua e Barbuda", "sigla": "AG" },
    { "nome": "Arábia Saudita", "sigla": "SA" },
    { "nome": "Argélia", "sigla": "DZ" },
    { "nome": "Argentina", "sigla": "AR" },
    { "nome": "Armênia", "sigla": "AM" },
    { "nome": "Austrália", "sigla": "AU" },
    { "nome": "Áustria", "sigla": "AT" },
    { "nome": "Azerbaijão", "sigla": "AZ" },
    { "nome": "Bahamas", "sigla": "BS" },
    { "nome": "Bangladesh", "sigla": "BD" },
    { "nome": "Barbados", "sigla": "BB" },
    { "nome": "Barein", "sigla": "BH" },
    { "nome": "Belarus", "sigla": "BY" },
    { "nome": "Bélgica", "sigla": "BE" },
    { "nome": "Belize", "sigla": "BZ" },
    { "nome": "Benim", "sigla": "BJ" },
    { "nome": "Butão", "sigla": "BT" },
    { "nome": "Bolívia", "sigla": "BO" },
    { "nome": "Bósnia e Herzegovina", "sigla": "BA" },
    { "nome": "Botsuana", "sigla": "BW" },
    { "nome": "Brasil", "sigla": "BR" },
    { "nome": "Brunei", "sigla": "BN" },
    { "nome": "Bulgária", "sigla": "BG" },
    { "nome": "Burkina Faso", "sigla": "BF" },
    { "nome": "Burundi", "sigla": "BI" },
    { "nome": "Cabo Verde", "sigla": "CV" },
    { "nome": "Camarões", "sigla": "CM" },
    { "nome": "Camboja", "sigla": "KH" },
    { "nome": "Canadá", "sigla": "CA" },
    { "nome": "Catar", "sigla": "QA" },
    { "nome": "Cazaquistão", "sigla": "KZ" },
    { "nome": "Chade", "sigla": "TD" },
    { "nome": "Chile", "sigla": "CL" },
    { "nome": "China", "sigla": "CN" },
    { "nome": "Chipre", "sigla": "CY" },
    { "nome": "Colômbia", "sigla": "CO" },
    { "nome": "Comores", "sigla": "KM" },
    { "nome": "Congo", "sigla": "CG" },
    { "nome": "Coreia do Norte", "sigla": "KP" },
    { "nome": "Coreia do Sul", "sigla": "KR" },
    { "nome": "Costa do Marfim", "sigla": "CI" },
    { "nome": "Costa Rica", "sigla": "CR" },
    { "nome": "Croácia", "sigla": "HR" },
    { "nome": "Cuba", "sigla": "CU" },
    { "nome": "Dinamarca", "sigla": "DK" },
    { "nome": "Djibuti", "sigla": "DJ" },
    { "nome": "Dominica", "sigla": "DM" },
    { "nome": "Egito", "sigla": "EG" },
    { "nome": "El Salvador", "sigla": "SV" },
    { "nome": "Emirados Árabes Unidos", "sigla": "AE" },
    { "nome": "Equador", "sigla": "EC" },
    { "nome": "Eritreia", "sigla": "ER" },
    { "nome": "Eslováquia", "sigla": "SK" },
    { "nome": "Eslovênia", "sigla": "SI" },
    { "nome": "Espanha", "sigla": "ES" },
    { "nome": "Estados Unidos", "sigla": "US" },
    { "nome": "Estônia", "sigla": "EE" },
    { "nome": "Eswatini", "sigla": "SZ" },
    { "nome": "Etiópia", "sigla": "ET" },
    { "nome": "Fiji", "sigla": "FJ" },
    { "nome": "Filipinas", "sigla": "PH" },
    { "nome": "Finlândia", "sigla": "FI" },
    { "nome": "França", "sigla": "FR" },
    { "nome": "Gabão", "sigla": "GA" },
    { "nome": "Gâmbia", "sigla": "GM" },
    { "nome": "Gana", "sigla": "GH" },
    { "nome": "Geórgia", "sigla": "GE" },
    { "nome": "Grécia", "sigla": "GR" },
    { "nome": "Granada", "sigla": "GD" },
    { "nome": "Guatemala", "sigla": "GT" },
    { "nome": "Guiné", "sigla": "GN" },
    { "nome": "Guiné-Bissau", "sigla": "GW" },
    { "nome": "Guiné Equatorial", "sigla": "GQ" },
    { "nome": "Guiana", "sigla": "GY" },
    { "nome": "Haiti", "sigla": "HT" },
    { "nome": "Holanda", "sigla": "NL" },
    { "nome": "Honduras", "sigla": "HN" },
    { "nome": "Hungria", "sigla": "HU" },
    { "nome": "Iêmen", "sigla": "YE" },
    { "nome": "Ilhas Marshall", "sigla": "MH" },
    { "nome": "Índia", "sigla": "IN" },
    { "nome": "Indonésia", "sigla": "ID" },
    { "nome": "Irã", "sigla": "IR" },
    { "nome": "Iraque", "sigla": "IQ" },
    { "nome": "Irlanda", "sigla": "IE" },
    { "nome": "Islândia", "sigla": "IS" },
    { "nome": "Israel", "sigla": "IL" },
    { "nome": "Itália", "sigla": "IT" },
    { "nome": "Jamaica", "sigla": "JM" },
    { "nome": "Japão", "sigla": "JP" },
    { "nome": "Jordânia", "sigla": "JO" },
    { "nome": "Kiribati", "sigla": "KI" },
    { "nome": "Kuwait", "sigla": "KW" },
    { "nome": "Laos", "sigla": "LA" },
    { "nome": "Letônia", "sigla": "LV" },
    { "nome": "Líbano", "sigla": "LB" },
    { "nome": "Libéria", "sigla": "LR" },
    { "nome": "Líbia", "sigla": "LY" },
    { "nome": "Liechtenstein", "sigla": "LI" },
    { "nome": "Lituânia", "sigla": "LT" },
    { "nome": "Luxemburgo", "sigla": "LU" },
    { "nome": "Madagascar", "sigla": "MG" },
    { "nome": "Malásia", "sigla": "MY" },
    { "nome": "Malawi", "sigla": "MW" },
    { "nome": "Maldivas", "sigla": "MV" },
    { "nome": "Mali", "sigla": "ML" },
    { "nome": "Malta", "sigla": "MT" },
    { "nome": "Marrocos", "sigla": "MA" },
    { "nome": "Maurício", "sigla": "MU" },
    { "nome": "Mauritânia", "sigla": "MR" },
    { "nome": "México", "sigla": "MX" },
    { "nome": "Micronésia", "sigla": "FM" },
    { "nome": "Moçambique", "sigla": "MZ" },
    { "nome": "Moldávia", "sigla": "MD" },
    { "nome": "Mônaco", "sigla": "MC" },
    { "nome": "Mongólia", "sigla": "MN" },
    { "nome": "Montenegro", "sigla": "ME" },
    { "nome": "Myanmar", "sigla": "MM" },
    { "nome": "Namíbia", "sigla": "NA" },
    { "nome": "Nauru", "sigla": "NR" },
    { "nome": "Nepal", "sigla": "NP" },
    { "nome": "Nicarágua", "sigla": "NI" },
    { "nome": "Níger", "sigla": "NE" },
    { "nome": "Nigéria", "sigla": "NG" },
    { "nome": "Noruega", "sigla": "NO" },
    { "nome": "Nova Zelândia", "sigla": "NZ" },
    { "nome": "Omã", "sigla": "OM" },
    { "nome": "nomees Baixos", "sigla": "NL" },
    { "nome": "Palau", "sigla": "PW" },
    { "nome": "Panamá", "sigla": "PA" },
    { "nome": "Papua-Nova Guiné", "sigla": "PG" },
    { "nome": "Paquistão", "sigla": "PK" },
    { "nome": "Paraguai", "sigla": "PY" },
    { "nome": "Peru", "sigla": "PE" },
    { "nome": "Polônia", "sigla": "PL" },
    { "nome": "Portugal", "sigla": "PT" },
    { "nome": "Quênia", "sigla": "KE" },
    { "nome": "Quirguistão", "sigla": "KG" },
    { "nome": "Reino Unido", "sigla": "GB" },
    { "nome": "República Centro-Africana", "sigla": "CF" },
    { "nome": "República Dominicana", "sigla": "DO" },
    { "nome": "República Tcheca", "sigla": "CZ" },
    { "nome": "Romênia", "sigla": "RO" },
    { "nome": "Ruanda", "sigla": "RW" },
    { "nome": "Rússia", "sigla": "RU" },
    { "nome": "Salomão", "sigla": "SB" },
    { "nome": "Samoa", "sigla": "WS" },
    { "nome": "San Marino", "sigla": "SM" },
    { "nome": "Santa Lúcia", "sigla": "LC" },
    { "nome": "São Cristóvão e Nevis", "sigla": "KN" },
    { "nome": "São Tomé e Príncipe", "sigla": "ST" },
    { "nome": "São Vicente e Granadinas", "sigla": "VC" },
    { "nome": "Senegal", "sigla": "SN" },
    { "nome": "Serra Leoa", "sigla": "SL" },
    { "nome": "Sérvia", "sigla": "RS" },
    { "nome": "Singapura", "sigla": "SG" },
    { "nome": "Síria", "sigla": "SY" },
    { "nome": "Somália", "sigla": "SO" },
    { "nome": "Sri Lanka", "sigla": "LK" },
    { "nome": "Suazilândia", "sigla": "SZ" },
    { "nome": "Sudão", "sigla": "SD" },
    { "nome": "Sudão do Sul", "sigla": "SS" },
    { "nome": "Suécia", "sigla": "SE" },
    { "nome": "Suíça", "sigla": "CH" },
    { "nome": "Suriname", "sigla": "SR" },
    { "nome": "Tailândia", "sigla": "TH" },
    { "nome": "Taiwan", "sigla": "TW" },
    { "nome": "Tajiquistão", "sigla": "TJ" },
    { "nome": "Tanzânia", "sigla": "TZ" },
    { "nome": "Timor-Leste", "sigla": "TL" },
    { "nome": "Togo", "sigla": "TG" },
    { "nome": "Tonga", "sigla": "TO" },
    { "nome": "Trinidad e Tobago", "sigla": "TT" },
    { "nome": "Tunísia", "sigla": "TN" },
    { "nome": "Turcomenistão", "sigla": "TM" },
    { "nome": "Turquia", "sigla": "TR" },
    { "nome": "Tuvalu", "sigla": "TV" },
    { "nome": "Ucrânia", "sigla": "UA" },
    { "nome": "Uganda", "sigla": "UG" },
    { "nome": "Uruguai", "sigla": "UY" },
    { "nome": "Uzbequistão", "sigla": "UZ" },
    { "nome": "Vanuatu", "sigla": "VU" },
    { "nome": "Vaticano", "sigla": "VA" },
    { "nome": "Venezuela", "sigla": "VE" },
    { "nome": "Vietnã", "sigla": "VN" },
    { "nome": "Zâmbia", "sigla": "ZM" },
    { "nome": "Zimbábue", "sigla": "ZW" }
  ]
  
  const estadosBrasileiros = [
    { "nome": "Acre", "sigla": "AC" },
    { "nome": "Alagoas", "sigla": "AL" },
    { "nome": "Amapá", "sigla": "AP" },
    { "nome": "Amazonas", "sigla": "AM" },
    { "nome": "Bahia", "sigla": "BA" },
    { "nome": "Ceará", "sigla": "CE" },
    { "nome": "Distrito Federal", "sigla": "DF" },
    { "nome": "Espírito Santo", "sigla": "ES" },
    { "nome": "Goiás", "sigla": "GO" },
    { "nome": "Maranhão", "sigla": "MA" },
    { "nome": "Mato Grosso", "sigla": "MT" },
    { "nome": "Mato Grosso do Sul", "sigla": "MS" },
    { "nome": "Minas Gerais", "sigla": "MG" },
    { "nome": "Pará", "sigla": "PA" },
    { "nome": "Paraíba", "sigla": "PB" },
    { "nome": "Paraná", "sigla": "PR" },
    { "nome": "Pernambuco", "sigla": "PE" },
    { "nome": "Piauí", "sigla": "PI" },
    { "nome": "Rio de Janeiro", "sigla": "RJ" },
    { "nome": "Rio Grande do Norte", "sigla": "RN" },
    { "nome": "Rio Grande do Sul", "sigla": "RS" },
    { "nome": "Rondônia", "sigla": "RO" },
    { "nome": "Roraima", "sigla": "RR" },
    { "nome": "Santa Catarina", "sigla": "SC" },
    { "nome": "São Paulo", "sigla": "SP" },
    { "nome": "Sergipe", "sigla": "SE" },
    { "nome": "Tocantins", "sigla": "TO" }
  ]
  
const generos = document.getElementsByName("generos")
let selectPais = document.getElementById("selectPais")
function abrirOutros(){
    let outros = document.querySelector("#outros")
    if (generos[2].checked) {
        outros.disabled = false
    } else{
        outros.disabled = true
        outros.value = ''
    }
}

function verPaises(){
    //for (let i n=0; i< paises.length ; i++)
    paises.forEach(pais => {
        let option = document.createElement("option")
        option.textContent = pais.nome
        option.setAttribute("value", pais.sigla)
        selectPais.appendChild(option)
    })
}

function verEstados(){
    let selectEstados = document.getElementById("selectEstados")
    let labelEstados = document.getElementById("labelEstados")

    if (selectPais.value == "BR"){
        estadosBrasileiros.forEach(estado => {
            let option = document.createElement("option")
            option.textContent = estado.nome
            option.setAttribute("value", estado.sigla)
            selectEstados.appendChild(option)
        })
        selectEstados.hidden = false
        labelEstados.hidden = false
    }else{
        selectEstados.hidden = true
        labelEstados.hidden = true
    }


}

generos.forEach ( genero => {
    genero.addEventListener('input', abrirOutros)
})
verPaises()
selectPais.addEventListener("click", verEstados)


