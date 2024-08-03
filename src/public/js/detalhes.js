document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const destinoSlug = urlParams.get('destino');

    if (destinoSlug) {
        fetch(`/api/destinos?slug=${destinoSlug}`)
            .then(response => response.json())
            .then(destino => {
                if (destino) {
                    document.getElementById('destino-nome').innerText = destino.nome;
                    document.getElementById('destino-descricao').innerText = destino.descricao;
                    // Adicione o código para exibir o mapa com a localização do destino
                } else {
                    document.getElementById('detalhes-destino').innerText = 'Destino não encontrado';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar destino:', error);
                document.getElementById('detalhes-destino').innerText = 'Erro ao buscar destino';
            });
    } else {
        document.getElementById('detalhes-destino').innerText = 'Destino não especificado';
    }
});
