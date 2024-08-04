document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const destinoSlug = urlParams.get('destino');

    if (destinoSlug) {
        fetch(`/api/destinos/destino?slug=${destinoSlug}`)
            .then(response => response.json())
            .then(destino => {
                console.log("Destino retornado:", destino); // Log para verificar a estrutura do destino
                if (destino) {
                    document.getElementById('destino-nome').innerText = destino.nome;
                    document.getElementById('destino-descricao').innerText = destino.descricao;

                    // Verifique se a localização está definida antes de chamar initMap
                    if (destino.localizacao) {
                        initMap(destino.localizacao.latitude, destino.localizacao.longitude);
                    } else {
                        document.getElementById('map').innerText = 'Localização do destino não especificada';
                    }
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
