document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const newsList = document.getElementById('newsList');
    const newsCards = document.querySelectorAll('.news-card');

    // Função de busca simples (filtra notícias na página)
    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === "") {
            newsCards.forEach(card => card.style.display = 'flex');
            return;
        }

        newsCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const description = card.querySelector('p').innerText.toLowerCase();
            const category = card.querySelector('.category-tag').innerText.toLowerCase();

            if (title.includes(query) || description.includes(query) || category.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Eventos de busca
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Simulação de carregamento de mais notícias
    const btnMore = document.querySelector('.btn-more');
    if (btnMore) {
        btnMore.addEventListener('click', () => {
            alert('Funcionalidade de carregamento de mais notícias será implementada com o backend.');
        });
    }

    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('Diário do Mundo - Script carregado com sucesso!');
});
