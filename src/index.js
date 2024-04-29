function calcularConta() {
    // Pegar os valores dos elementos HTML
    let totalConta = parseFloat(document.getElementById('totalConta').value);
    let incluirTaxa = document.getElementById('taxaServico').value === 'Sim';
    let qtdPagantes = parseInt(document.getElementById('qtdPagantes').value);

    // Calcular a taxa de serviço 
    let taxaServico = incluirTaxa ? totalConta * 0.1 : 0;

    // Calcular o total a ser dividido entre os pagantes
    let totalComTaxa = totalConta + taxaServico;
    let totalPorPessoa = totalComTaxa / qtdPagantes;

    // Exibir modal para perguntar sobre o desconto
    abrirModal('modalDesconto');
}

// Função para aplicar o desconto e mostrar o resultado
function aplicarDesconto(aplicar) {
    let totalPorPessoa = calcularTotalPorPessoa(aplicar);

    // Exibir o resultado com ou sem desconto em seus respectivos modais
    if (aplicar) {
        document.getElementById('resultadoDesconto').innerText = formatarResultado(totalPorPessoa, true);
        abrirModal('modalResultadoDesconto');
    } else {
        document.getElementById('resultadoSemDesconto').innerText = formatarResultado(totalPorPessoa, false);
        abrirModal('modalResultadoSemDesconto');
    }
}

// Função para calcular o total por pessoa com ou sem desconto
function calcularTotalPorPessoa(aplicarDesconto) {
    // Pegar os valores dos elementos HTML
    let totalConta = parseFloat(document.getElementById('totalConta').value);
    let incluirTaxa = document.getElementById('taxaServico').value === 'Sim';
    let qtdPagantes = parseInt(document.getElementById('qtdPagantes').value);

    // Calcular a taxa de serviço (se aplicável)
    let taxaServico = incluirTaxa ? totalConta * 0.1 : 0;

    // Calcular o total a ser dividido entre os pagantes
    let totalComTaxa = totalConta + taxaServico;
    let totalPorPessoa = totalComTaxa / qtdPagantes;

    // Aplicar desconto, se necessário
    if (aplicarDesconto) {
        totalPorPessoa *= 0.97; // Aplica desconto de 3%
    }

    return totalPorPessoa;
}

// Função para formatar o resultado
function formatarResultado(totalPorPessoa, aplicarDesconto) {
    let mensagem = "Total por pessoa: " + totalPorPessoa.toFixed(2) + " R$\n";

    if (aplicarDesconto) {
        mensagem += "Desconto de 3% aplicado.\n";
    }

    return mensagem;
}

// Função para abrir um modal específico
function abrirModal(idModal) {
    document.getElementById(idModal).style.display = "block";
}

// Função para fechar todos os modais
function fecharModais() {
    let modais = document.getElementsByClassName("modal");
    for (let i = 0; i < modais.length; i++) {
        modais[i].style.display = "none";
    }
}

// Fechar modais ao clicar fora deles
window.onclick = function(event) {
    let modais = document.getElementsByClassName("modal");
    for (let i = 0; i < modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = "none";
        }
    }
}

// Função para concluir e fechar os modais
function concluir() {
    fecharModais();
}