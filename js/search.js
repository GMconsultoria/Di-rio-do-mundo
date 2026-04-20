const Search = {
    init: () => {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value;
                Search.performSearch(query);
            });
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    const query = searchInput.value;
                    Search.performSearch(query);
                }
            });
        }
    },

    performSearch: (query) => {
        const q = query.toLowerCase().trim();
        if (!q) return;

        const isSubpage = window.location.pathname.includes('/pages/');
        const prefix = isSubpage ? "" : "pages/";
        const searchUrl = `${prefix}categoria.html?q=${encodeURIComponent(q)}`;
        window.location.href = searchUrl;
    },

    filterByCategory: (categoria) => {
        const filtered = window.noticias.filter(n => n.categoria === categoria);
        return filtered;
    },

    filterByQuery: (query) => {
        const q = query.toLowerCase();
        const filtered = window.noticias.filter(n => 
            n.titulo.toLowerCase().includes(q) || 
            n.resumo.toLowerCase().includes(q) ||
            n.categoriaNome.toLowerCase().includes(q)
        );
        return filtered;
    }
};

window.Search = Search;
document.addEventListener('DOMContentLoaded', Search.init);
