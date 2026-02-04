
// Gestione globale della tastiera
window.addEventListener('keydown', (e) => {
    const activeSection = getActiveSection();
    if (!activeSection) return;

    const items = Array.from(activeSection.querySelectorAll('.preview-item:not(.add-btn)'));
    let currentIndex = items.findIndex(item => item.classList.contains('selected'));

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].click();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].click();
    } else if (e.key === 'Enter') {
        // Se siamo sull'input del titolo, l'invio sposta allo sfondo (già gestito dall'onkeydown nell'HTML)
        // Se siamo nelle griglie, l'invio conferma e passa alla sezione successiva
        if (activeSection.id === 'bg-section') {
            scrollToSection('icon-section');
        } else if (activeSection.id === 'icon-section') {
            createPage();
        }
    }
});

function getActiveSection() {
    const sections = ['bg-section', 'icon-section'];
    for (const id of sections) {
        const rect = document.getElementById(id).getBoundingClientRect();
        // Verifica quale sezione è più visibile a schermo
        if (rect.top < window.innerHeight && rect.bottom > 0) return document.getElementById(id);
    }
    return null;
}