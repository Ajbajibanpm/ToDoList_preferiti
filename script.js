function createPage() {
    const title = document.getElementById('page-title').value.trim();
    if (!title) return;

    // Genera ID unico
    const id = title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
    
    // Salva i dati
    pages.push({ id, title, icon: selectedIcon, bg: selectedBg, description: '' });
    localStorage.setItem('fondazione_data', JSON.stringify(pages));

    // Genera l'URL completo e lo copia negli appunti
    const fullUrl = window.location.origin + window.location.pathname + '#' + id;
    
    navigator.clipboard.writeText(fullUrl).then(() => {
        alert('Pagina creata! L\'URL è stato copiato negli appunti.');
        window.location.hash = id;
    }).catch(err => {
        console.error('Errore nella copia:', err);
        window.location.hash = id;
    });
}