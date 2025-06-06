document.getElementById('btnBusca').addEventListener('click', function() {
    const query = document.getElementById('txtBusca').value.trim();
    if (query) {
      alert('Buscar por: ' + query);
      // Exemplo: redirecionar para a página de busca
      // window.location.href = '/buscar?query=' + encodeURIComponent(query);
    } else {
      alert('Digite algo para buscar!');
    }
  });