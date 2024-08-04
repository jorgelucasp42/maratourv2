let map;

function initMap() {
    const urlParams = new URLSearchParams(window.location.search);
    const destinoSlug = urlParams.get('destino');

    if (destinoSlug) {
        fetch(`/api/destinos?slug=${destinoSlug}`)
            .then(response => response.json())
            .then(destino => {
                if (destino) {
                    const location = {
                        lat: destino.localizacao.latitude,
                        lng: destino.localizacao.longitude
                    };

                    map = new google.maps.Map(document.getElementById("map"), {
                        center: location,
                        zoom: 10
                    });

                    new google.maps.Marker({
                        position: location,
                        map: map,
                        title: destino.nome
                    });

                    // Atualize os detalhes do destino na página
                    document.getElementById("destino-nome").innerText = destino.nome;
                    document.getElementById("destino-descricao").innerText = destino.descricao;
                } else {
                    document.getElementById('map').innerText = 'Destino não encontrado';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar destino:', error);
                document.getElementById('map').innerText = 'Erro ao buscar destino';
            });
    } else {
        document.getElementById('map').innerText = 'Destino não especificado';
    }
}
