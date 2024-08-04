document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const atrativoSlug = urlParams.get('atrativo');

    if (atrativoSlug) {
        fetch(`/api/atrativos/atrativo?slug=${atrativoSlug}`)
            .then(response => response.json())
            .then(atrativo => {
                if (atrativo) {
                    document.getElementById('atrativo-nome').innerText = atrativo.nome;
                    document.getElementById('atrativo-descricao').innerText = atrativo.descricao;
                    document.getElementById('atrativo-imagem').src = atrativo.imagem;
                    document.getElementById('atrativo-imagem').alt = `Imagem de ${atrativo.nome}`;
                    document.getElementById('atrativo-detalhes').innerText = `Localizado no destino: ${atrativo.destino.nome}`;

                    // Verifique se a localização está definida antes de chamar initMap
                    if (atrativo.localizacao) {
                        initMap(atrativo.localizacao.latitude, atrativo.localizacao.longitude);
                    } else {
                        document.getElementById('map').innerText = 'Localização do atrativo não especificada';
                    }
                } else {
                    document.getElementById('detalhes-atrativo').innerText = 'Atrativo não encontrado';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar atrativo:', error);
                document.getElementById('detalhes-atrativo').innerText = 'Erro ao buscar atrativo';
            });
    } else {
        document.getElementById('detalhes-atrativo').innerText = 'Atrativo não especificado';
    }
});
