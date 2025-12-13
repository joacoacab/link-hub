/**
 * Carga dinámica de enlaces desde links.json
 * Compatible con GitHub Pages
 */

async function loadLinks() {
    try {
        const response = await fetch('links.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar links.json');
        }
        
        const data = await response.json();
        
        // Actualizar tagline si existe
        const taglineElement = document.getElementById('tagline');
        if (taglineElement && data.tagline) {
            taglineElement.textContent = data.tagline;
        }
        
        // Renderizar enlaces
        const linksContainer = document.getElementById('linksContainer');
        if (!linksContainer) return;
        
        // Ordenar enlaces por prioridad
        const priorityOrder = { primary: 1, secondary: 2, tertiary: 3 };
        const sortedLinks = data.links.sort((a, b) => {
            return (priorityOrder[a.priority] || 99) - (priorityOrder[b.priority] || 99);
        });
        
        // Crear tarjetas de enlaces
        sortedLinks.forEach(link => {
            const linkCard = createLinkCard(link);
            linksContainer.appendChild(linkCard);
        });
        
    } catch (error) {
        console.error('Error al cargar enlaces:', error);
        showError();
    }
}

function createLinkCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = `link-card link-card--${link.priority}`;
    card.setAttribute('aria-label', `${link.title}: ${link.description}`);
    
    card.innerHTML = `
        <span class="link-icon" aria-hidden="true">${link.icon}</span>
        <div class="link-content">
            <h2 class="link-title">${link.title}</h2>
            <p class="link-description">${link.description}</p>
        </div>
        <span class="link-arrow" aria-hidden="true">→</span>
    `;
    
    return card;
}

function showError() {
    const linksContainer = document.getElementById('linksContainer');
    if (linksContainer) {
        linksContainer.innerHTML = `
            <div class="error-message">
                <p>No se pudieron cargar los enlaces.</p>
                <p>Por favor, verifica la conexión o contacta al administrador.</p>
            </div>
        `;
    }
}

// Cargar enlaces cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLinks);
} else {
    loadLinks();
}

