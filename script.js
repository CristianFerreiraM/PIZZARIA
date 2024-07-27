let valorToltal = 0
document.getElementById('valorTotal').innerHTML = "R$0";
let classCorTabela = 0;

//funções auxliares
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}


//função para cadastro
function somaValorDefineClass(){
    let valorTotal = parseInt(document.getElementById('valorTotal').textContent.split('R$')[1])
    let calabresaMussarela = parseInt(document.getElementById('valorCalabresaMussarela').textContent.split('R$')[1])
    let quatroQueijos = parseInt(document.getElementById('valorQuatroQueijos').textContent.split('R$')[1])
    let frangoCatupiry = parseInt(document.getElementById('valorFrangoCatupiry').textContent.split('R$')[1])

    let sabor = document.getElementById("inputSabor")
    let sabores = sabor.options[sabor.selectedIndex]

    switch(sabores.value){
        case "1":
            valorTotal = valorTotal + calabresaMussarela
            classCorTabela = "calabresaMussarela"
            exibirTextoNaTela('#valorTotal', `R$${valorTotal}`)
            break;
        case "2":
            valorTotal = valorTotal + quatroQueijos;
            classCorTabela = "quatroQueijos"
            exibirTextoNaTela('#valorTotal', `R$${valorTotal}`)
         
            break;
        case "3":
            valorTotal = valorTotal + frangoCatupiry;
            classCorTabela = "frangoCatupiry"
            exibirTextoNaTela('#valorTotal', `R$${valorTotal}`)

            break;
    }
}

function criaTr(itemUm, itemDois, itemTres){
    let tabela = document.getElementById('tabelaPedido')

    let tr = document.createElement("tr")
    tr.classList.add("linha")
    tabela.appendChild(tr)

    tr.innerHTML=`<th  class="itensNome" >${itemUm}</th><th class="itensCpf">${itemDois}</th><th class="${classCorTabela}">${itemTres}</th>`
}


//funções validações
function validaVazio(valida){
    let nome = document.getElementById("inputNome")
    let form = document.getElementById("areaCadastro")
  
    if(valida != ''){
        nome.classList.remove('inputCadastroErro')
        nome.classList.add('inputCadastro')

        return true
    }else{
        nome.classList.remove('inputCadastro')
        nome.classList.add('inputCadastroErro')
        exibirTextoNaTela('#msgConcluindo', '')
        exibirTextoNaTela('.msgErro', '')
        exibirTextoNaTela('.msgErro', 'insira seu nome')
     
    }
}

function validaCpf(validaCpf){
    let cpf = document.getElementById("inputCPF")
    if(validaCpf.length == 11){
        cpf.classList.remove('inputCadastroErro')
        cpf.classList.add('inputCadastro')
        return true
    }else{
        cpf.classList.remove('inputCadastro')
        cpf.classList.add('inputCadastroErro')
        exibirTextoNaTela('#msgConcluindo', '')
        exibirTextoNaTela('.msgErro', '')
        exibirTextoNaTela('.msgErro', 'CPF invalido')
        
    }
}

function validaSabor(validaSabor){
    let sabor = document.getElementById("inputSabor")
    if (validaSabor != 0){
        sabor.classList.remove('inputCadastroErro')
        sabor.classList.add('inputCadastro')
        return true
    }else{
        sabor.classList.remove('inputCadastro')
        sabor.classList.add('inputCadastroErro')
        
        exibirTextoNaTela('#msgConcluindo', '')
        exibirTextoNaTela('.msgErro', '')
        exibirTextoNaTela('.msgErro', 'Escolha seu sabor')
    }
}

//função cadastro
function botaoCadastro(){
    event.preventDefault()
    let form = document.getElementById("areaCadastro")
    let nome = document.getElementById("inputNome").value
    let cpf = document.getElementById("inputCPF").value
    let sabor = document.getElementById("inputSabor")
    let sabores = sabor.options[sabor.selectedIndex]

    if (validaVazio(nome) && validaCpf(cpf) && validaSabor(sabores.value)) {         

        somaValorDefineClass()
        criaTr(nome, cpf, sabores.text)

     
        exibirTextoNaTela('.msgErro', '')
        exibirTextoNaTela('#msgConcluindo', 'Pedido realizado com sucesso')
        form.reset()

    }
}

