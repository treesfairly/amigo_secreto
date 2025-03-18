let amigos = []; 

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    amigos.push(nomeAmigo);

    document.getElementById("amigo").value = "";
    
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(function(amigo) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let itemResultado = document.createElement("li");
    itemResultado.textContent = "🎉 Amigo Sorteado: " + amigoSorteado + " 🎉";
    resultado.appendChild(itemResultado);

}
