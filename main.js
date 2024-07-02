const form = document.getElementById('form-entrada');
const contatos = []; // Array para armazenar os contatos

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaLista();
    totalContatos();
});

function adicionaContato() {
    const nomeContato = document.getElementById('nome').value;
    const numeroContato = document.getElementById('numero').value;

    if (existeContato(nomeContato, numeroContato)) {
        alert(`O contato ${nomeContato} ou o número ${numeroContato} já foram inseridos`);
    } else {

        contatos.push({
            nome: nomeContato,
            numero: numeroContato

        });


        atualizaLinhas();


        document.getElementById('nome').value = '';
        document.getElementById('numero').value = '';
    }

    totalContatos();

}

function atualizaLinhas() {
    linhas = '';
    contatos.forEach((contato, index) => {
        let linha = `<tr>`;
        linha += `<td>${contato.nome}</td>`;
        linha += `<td>${contato.numero}</td>`;
        linha += `<td><button onclick="excluirContato(${index})">Excluir</button></td>`;
        linha += `</tr>`;
        linhas += linha;
    });
}

function atualizaLista() {
    const corpoLista = document.querySelector('tbody');
    corpoLista.innerHTML = linhas;
}

function existeContato(nome, numero) {

    return contatos.some(contato => contato.nome === nome || contato.numero === numero);
}

function excluirContato(index) {
    contatos.splice(index, 1); 
    atualizaLinhas(); 
    atualizaLista(); 
    totalContatos();
}

function totalContatos() {
    const total = contatos.length;
    document.getElementById("total").textContent = `Total de contatos: ${total}`;
}