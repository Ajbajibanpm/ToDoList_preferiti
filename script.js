const iconData = [
    { char: '💡', tags: 'idea luce lampadina pensiero' },
    { char: '🏛️', tags: 'istituzione museo storia edificio roma antico' },
    { char: '🏰', tags: 'castello storia medioevo fiaba' },
    { char: '📜', tags: 'pergamena storia antico documento scrittura' },
    { char: '📖', tags: 'libro lettura studio scuola biblioteca' },
    { char: '📚', tags: 'libri studio biblioteca scuola' },
    { char: '⏳', tags: 'tempo clessidra attesa storia' },
    { char: '🌍', tags: 'mondo terra viaggio geografia' },
    { char: '🧭', tags: 'bussola viaggio orientamento nord' },
    { char: '🗺️', tags: 'mappa viaggio geografia' },
    { char: '🔒', tags: 'lucchetto sicurezza chiuso privacy' },
    { char: '💻', tags: 'computer tech tecnologia pc lavoro' },
    { char: '📱', tags: 'telefono smartphone cellulare tech mobile' },
    { char: '📞', tags: 'chiamata telefono ufficio' },
    { char: '📠', tags: 'fax ufficio tech vecchio' },
    { char: '💿', tags: 'disco cd dvd tech musica' },
    { char: '⚡', tags: 'energia fulmine elettricità carica' },
    { char: '🧪', tags: 'scienza laboratorio chimica esperimento' },
    { char: '📊', tags: 'grafico dati ufficio lavoro tech' },
    { char: '📈', tags: 'crescita grafico dati ufficio' },
    { char: '🔍', tags: 'cerca lente ricerca trova' },
    { char: '🌡️', tags: 'meteo temperatura caldo freddo scienza' },
    { char: '🖋️', tags: 'penna scrittura ufficio firma' },
    { char: '✂️', tags: 'forbici taglia ufficio lavoro' },
    { char: '🛠️', tags: 'strumenti lavoro riparazione attrezzi' },
    { char: '📁', tags: 'cartella ufficio documenti' },
    { char: '💼', tags: 'lavoro valigetta ufficio business' },
    { char: '🗓️', tags: 'calendario data tempo appuntamento' },
    { char: '✉️', tags: 'mail posta lettera ufficio' },
    { char: '📦', tags: 'pacco spedizione scatola' },
    { char: '🔑', tags: 'chiave casa apri sicurezza' },
    { char: '📷', tags: 'foto macchina fotografia memoria' },
    { char: '🎨', tags: 'arte pittura disegno colore' },
    { char: '🌸', tags: 'fiore primavera natura ciliegio' },
    { char: '🌹', tags: 'rosa fiore amore natura' },
    { char: '🌷', tags: 'tulipano fiore natura primavera' },
    { char: '🌱', tags: 'pianta natura crescita verde' },
    { char: '🌳', tags: 'albero natura bosco verde' },
    { char: '🥦', tags: 'verdura cibo salute vegetale' },
    { char: '🥕', tags: 'carota verdura cibo salute' },
    { char: '🍎', tags: 'mela frutta cibo salute' },
    { char: '🐾', tags: 'impronta animali cane gatto natura' },
    { char: '🐈', tags: 'gatto animali pet casa' },
    { char: '🐶', tags: 'cane animali pet casa' },
    { char: '🐱', tags: 'gatto muso animali pet' },
    { char: '🍕', tags: 'pizza cibo cena italia' },
    { char: '🍝', tags: 'pasta cibo cena italia' },
    { char: '🥘', tags: 'cibo cucina padella cena' },
    { char: '🧀', tags: 'formaggio cibo snack' },
    { char: '🍽️', tags: 'piatti posate cibo cena ristorante' },
    { char: '🥛', tags: 'latte bicchiere acqua bere' },
    { char: '☕', tags: 'caffè colazione bere pausa' },
    { char: '🍷', tags: 'vino bere cena festa' },
    { char: '🍺', tags: 'birra bere festa pub' },
    { char: '🚗', tags: 'auto macchina viaggio trasporto' },
    { char: '🏎️', tags: 'auto corsa macchina veloce' },
    { char: '🚲', tags: 'bici bicicletta sport trasporto' },
    { char: '✈️', tags: 'aereo viaggio volo vacanza' },
    { char: '🚀', tags: 'razzo spazio tech viaggio' },
    { char: '🛸', tags: 'ufo alieni spazio mistero' },
    { char: '🧳', tags: 'valigia viaggio vacanza bagaglio' },
    { char: '⛱️', tags: 'ombrellone mare vacanza estate' },
    { char: '🚩', tags: 'bandiera segnale obiettivo' },
    { char: '🏠', tags: 'casa edificio famiglia' },
    { char: '🛌', tags: 'letto riposo dormire casa' },
    { char: '🛁', tags: 'vasca bagno doccia pulizia' },
    { char: '🧻', tags: 'carta bagno pulizia casa' },
    { char: '🎒', tags: 'zaino scuola viaggio' },
    { char: '👔', tags: 'vestito formale lavoro ufficio' },
    { char: '🛒', tags: 'spesa carrello acquisti' },
    { char: '🎁', tags: 'regalo festa compleanno' },
    { char: '🎀', tags: 'fiocco regalo decorazione' },
    { char: '💰', tags: 'soldi denaro ricchezza banca' },
    { char: '💎', tags: 'diamante valore gioiello' },
    { char: '🎸', tags: 'chitarra musica strumento rock' },
    { char: '🎵', tags: 'nota musica canzone audio' },
    { char: '🎧', tags: 'cuffie musica audio tech' },
    { char: '🎮', tags: 'videogioco gioco tech svago' },
    { char: '🕹️', tags: 'joystick gioco tech vintage' },
    { char: '⚽', tags: 'calcio sport palla gioco' },
    { char: '🎲', tags: 'dado gioco fortuna azzardo' },
    { char: '🎯', tags: 'bersaglio obiettivo gioco precisione' }
];

const defaultImages = [
    { id: 'def1', url: '#FFFFF0' },
    { id: 'def2', url: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800)' },
    { id: 'def3', url: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800)' }
];

let customImages = JSON.parse(localStorage.getItem('fondazione_custom_imgs')) || [];
let pages = JSON.parse(localStorage.getItem('fondazione_data')) || [];

let selectedIcon = iconData[0].char;
let selectedBg = defaultImages[0].url;
let currentStep = 'title';

function init() {
    renderIcons();
    renderImages();
    renderHistory();
    handleRouting();
    document.getElementById('page-title').focus();
}

// --- LOGICA NAVIGAZIONE TASTIERA ---
window.addEventListener('keydown', (e) => {
    const titleInput = document.getElementById('page-title');
    const searchInput = document.getElementById('search-icons');
    const submitBtn = document.getElementById('submit-btn');

    // 1. INPUT TITOLO -> INVIO (Passa a Sfondo)
    if (currentStep === 'title' && e.key === 'Enter') {
        if (titleInput.value.trim().length > 0) {
            e.preventDefault();
            currentStep = 'background';
            scrollToSection('bg-section');
            renderImages(); // Evidenzia la prima opzione di default
        }
    } 
    // 2. SELEZIONE SFONDO O ICONA (Frecce + Invio)
    else if (currentStep === 'background' || currentStep === 'icon-select') {
        const gridId = currentStep === 'background' ? 'image-grid' : 'icon-grid';
        const items = Array.from(document.querySelectorAll(`#${gridId} .preview-item:not(.add-btn)`));
        let idx = items.findIndex(i => i.classList.contains('selected'));
        if (idx === -1) idx = 0;

        const cols = currentStep === 'background' ? 5 : 10;
        
        if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
            if (e.key === 'ArrowRight') idx = (idx + 1) % items.length;
            if (e.key === 'ArrowLeft') idx = (idx - 1 + items.length) % items.length;
            if (e.key === 'ArrowDown') idx = Math.min(idx + cols, items.length - 1);
            if (e.key === 'ArrowUp') idx = Math.max(idx - cols, 0);
            
            // Simula click per aggiornare variabile e visualizzazione
            if (currentStep === 'background') {
                const allImgs = [...customImages, ...defaultImages];
                selectedBg = allImgs[idx].url;
                renderImages();
            } else {
                const term = searchInput.value.toLowerCase();
                const filtered = iconData.filter(i => i.tags.includes(term) || term === '').slice(0, 20);
                selectedIcon = filtered[idx].char;
                renderIcons();
            }
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            if (currentStep === 'background') {
                currentStep = 'icon-search';
                scrollToSection('icon-section');
                searchInput.focus();
            } else if (currentStep === 'icon-select') {
                currentStep = 'submit';
                submitBtn.classList.add('focused');
                submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
    // 3. INPUT RICERCA ICONE -> INVIO (Passa a Selezione Icona)
    else if (currentStep === 'icon-search' && e.key === 'Enter') {
        e.preventDefault();
        currentStep = 'icon-select';
        renderIcons(); // Blocca la scrittura e abilita le frecce sulle icone
    }
    // 4. BOTTONE FINALE -> INVIO
    else if (currentStep === 'submit' && e.key === 'Enter') {
        e.preventDefault();
        createPage();
    }
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderImages() {
    const grid = document.getElementById('image-grid');
    const addBtn = grid.querySelector('.add-btn');
    grid.innerHTML = ''; grid.appendChild(addBtn);
    const all = [...customImages, ...defaultImages];
    all.forEach((img) => {
        const div = document.createElement('div');
        div.className = `preview-item ${img.url === selectedBg ? 'selected' : ''}`;
        if(img.url.startsWith('#')) div.style.backgroundColor = img.url;
        else div.innerHTML = `<img src="${img.url.replace('url(', '').replace(')', '')}">`;
        div.onclick = () => { 
            selectedBg = img.url; 
            renderImages(); 
            if (currentStep === 'title') currentStep = 'background';
        };
        grid.appendChild(div);
    });
}

function renderIcons() {
    const grid = document.getElementById('icon-grid');
    grid.classList.add('icon-grid-smaller');
    const term = document.getElementById('search-icons').value.toLowerCase();
    grid.innerHTML = '';
    const filtered = iconData.filter(i => i.tags.includes(term) || term === '').slice(0, 20);

    filtered.forEach((icon) => {
        const div = document.createElement('div');
        div.className = `preview-item ${icon.char === selectedIcon ? 'selected' : ''}`;
        div.innerHTML = `<span>${icon.char}</span>`;
        div.onclick = () => { 
            selectedIcon = icon.char; 
            renderIcons(); 
            if (currentStep === 'icon-search') currentStep = 'icon-select';
        };
        grid.appendChild(div);
    });
}

function createPage() {
    const title = document.getElementById('page-title').value.trim();
    if (!title) return;
    const id = title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
    pages.push({ id, title, icon: selectedIcon, bg: selectedBg, description: '' });
    localStorage.setItem('fondazione_data', JSON.stringify(pages));
    renderHistory();
    window.location.hash = id;
}

function handleRouting() {
    const hash = window.location.hash.substring(1);
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.classList.remove('focused');

    if (hash) {
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('detail-view').style.display = 'flex';
        const p = pages.find(page => page.id === hash);
        if (p) {
            document.getElementById('detail-title').innerText = p.title;
            document.getElementById('detail-icon').innerText = p.icon;
            document.getElementById('detail-desc').value = p.description;
            document.body.style.background = p.bg;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
            document.title = p.title;
            const fav = document.getElementById('favicon');
            fav.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${p.icon}</text></svg>`;
            window.scrollTo(0, 0);
        }
    } else {
        document.getElementById('home-view').style.display = 'flex';
        document.getElementById('detail-view').style.display = 'none';
        document.body.style.background = 'var(--ivory)';
        document.title = "Crea una nuova task!";
        currentStep = 'title';
        const titleInp = document.getElementById('page-title');
        if (titleInp) titleInp.focus();
    }
}

function deletePage(index) {
    if (confirm("Eliminare definitivamente la risorsa?")) {
        pages.splice(index, 1);
        localStorage.setItem('fondazione_data', JSON.stringify(pages));
        renderHistory();
        if (window.location.hash) goHome();
    }
}

function deleteCurrentPage() {
    const hash = window.location.hash.substring(1);
    const idx = pages.findIndex(p => p.id === hash);
    if (idx !== -1) deletePage(idx);
}

function renderHistory() {
    const c = document.getElementById('archive-content');
    if (pages.length === 0) {
        c.innerHTML = '<p style="padding:10px;">Nessuna risorsa salvata.</p>';
        return;
    }
    c.innerHTML = pages.map((p, i) => `
        <div class="history-item">
            <span onclick="window.location.hash='${p.id}'" style="cursor:pointer"><strong>${p.icon} ${p.title}</strong></span>
            <button onclick="deletePage(${i})" style="color:red; background:none; border:1px solid red; border-radius:3px; cursor:pointer; padding:2px 8px;">X</button>
        </div>
    `).join('');
}

function toggleArchive() {
    const c = document.getElementById('archive-content');
    c.style.display = (c.style.display === 'block') ? 'none' : 'block';
}

function toggleEditor() {
    const e = document.getElementById('editor-container');
    e.style.display = (e.style.display === 'block') ? 'none' : 'block';
}

function saveDescription() {
    const page = pages.find(p => p.id === window.location.hash.substring(1));
    if (page) {
        page.description = document.getElementById('detail-desc').value;
        localStorage.setItem('fondazione_data', JSON.stringify(pages));
        toggleEditor();
        alert('Contenuto salvato.');
    }
}

function goHome() { window.location.hash = ''; }
window.addEventListener('hashchange', handleRouting);
window.onload = init;