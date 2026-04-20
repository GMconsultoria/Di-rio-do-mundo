const Render = {
    // Helper para ajustar caminhos de imagem se estiver em subpastas
    getImagePath: (path) => {
        const isSubpage = window.location.pathname.includes('/pages/');
        const imgPath = isSubpage ? `../${path}` : path;
        return imgPath;
    },

    // Helper para ajustar links de páginas
    getPageLink: (page, query = "") => {
        const isSubpage = window.location.pathname.includes('/pages/');
        const prefix = isSubpage ? "" : "pages/";
        const link = `${prefix}${page}.html${query}`;
        return link;
    },

    // Componente: Card de Notícia (Lista)
    createNewsCard: (noticia) => {
        return `
            <article class="news-card">
                <img src="${Render.getImagePath(noticia.imagem)}" alt="${noticia.titulo}">
                <div class="card-body">
                    <span class="category-tag">${noticia.categoriaNome}</span>
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumo}</p>
                    <a href="${Render.getPageLink('artigo', `?id=${noticia.id}`)}" class="read-more">Leia mais</a>
                </div>
            </article>
        `;
    },

    // Componente: Item do Grid (Hero)
    createGridItem: (noticia) => {
        return `
            <article class="grid-item">
                <a href="${Render.getPageLink('artigo', `?id=${noticia.id}`)}">
                    <span class="category-tag">${noticia.categoriaNome}</span>
                    <img src="${Render.getImagePath(noticia.imagem)}" alt="${noticia.titulo}">
                    <h3>${noticia.titulo}</h3>
                </a>
            </article>
        `;
    },

    // Renderizar Destaque Principal
    renderHero: (noticia) => {
        const container = document.querySelector('.hero-left');
        if (!container) return;
        
        container.innerHTML = `
            <article class="featured-news">
                <a href="${Render.getPageLink('artigo', `?id=${noticia.id}`)}">
                    <img src="${Render.getImagePath(noticia.imagem)}" alt="${noticia.titulo}">
                    <div class="featured-content">
                        <span class="category-tag">${noticia.categoriaNome}</span>
                        <h1>${noticia.titulo}</h1>
                    </div>
                </a>
            </article>
        `;
    },

    // Renderizar Grid Lateral
    renderGrid: (noticias) => {
        const container = document.querySelector('.news-grid');
        if (!container) return;
        
        container.innerHTML = noticias.map(n => Render.createGridItem(n)).join('');
    },

    // Renderizar Lista de Notícias
    renderList: (noticias, containerId = 'newsList') => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        if (noticias.length === 0) {
            container.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
            return;
        }
        
        container.innerHTML = noticias.map(n => Render.createNewsCard(n)).join('');
    }
};

window.Render = Render;
