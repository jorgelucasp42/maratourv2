document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const atrativoSlug = urlParams.get('atrativo');

    if (atrativoSlug) {
        console.log("Buscando atrativo por slug:", atrativoSlug);  // Log para depuração
        fetch(`/api/atrativos/atrativo?slug=${atrativoSlug}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro na resposta da API");
                }
                return response.json();
            })
            .then(atrativo => {
                if (atrativo) {
                    console.log("Atrativo encontrado:", atrativo);  // Log para depuração
                    document.getElementById('atrativo-nome').innerText = atrativo.nome;
                    document.getElementById('atrativo-descricao').innerText = atrativo.descricao;
                    document.getElementById('atrativo-imagem').src = atrativo.imagem;
                    document.getElementById('atrativo-imagem').alt = `Imagem de ${atrativo.nome}`;
                    document.getElementById('atrativo-detalhes').innerText = `Informações adicionais sobre ${atrativo.nome}`;

                    // Verifique se a localização está definida antes de chamar initMap
                    if (atrativo.localizacao) {
                        initMap(atrativo.localizacao.latitude, atrativo.localizacao.longitude);
                    } else {
                        document.getElementById('map').innerText = 'Localização do atrativo não especificada';
                    }
                } else {
                    console.log("Atrativo não encontrado na resposta da API");  // Log para depuração
                    document.getElementById('detalhes-atrativo').innerText = 'Atrativo não encontrado';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar atrativo:', error);
                document.getElementById('detalhes-atrativo').innerText = 'Erro ao buscar atrativo';
            });
    } else {
        console.log("Slug do atrativo não especificado na URL");  // Log para depuração
        document.getElementById('detalhes-atrativo').innerText = 'Atrativo não especificado';
    }
});
