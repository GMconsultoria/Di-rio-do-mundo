/* Reset e Estilos Globais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    color: #333;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background-color: #000000;
    color: #ffffff;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: #ffffff;
}

.logo span {
    color: #ff0000; /* Vermelho destaque */
}

nav ul {
    display: flex;
    gap: 20px;
}

nav ul li a {
    font-size: 14px;
    font-weight: 600;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #ff0000;
}

.search-box {
    display: flex;
    align-items: center;
    background: #333;
    padding: 5px 10px;
    border-radius: 4px;
}

.search-box input {
    background: transparent;
    border: none;
    color: white;
    outline: none;
    padding: 5px;
}

.search-box button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
}

/* Anúncios */
.ad-container {
    background-color: #f4f4f4;
    text-align: center;
    padding: 10px 0;
    margin: 10px 0;
}

.ad-placeholder {
    border: 1px dashed #ccc;
    color: #999;
    padding: 20px;
    font-size: 12px;
    text-transform: uppercase;
}

.ad-top {
    margin-top: 0;
}

.ad-middle {
    margin: 40px 0;
}

/* Layout Principal */
main {
    display: flex;
    gap: 30px;
    margin-top: 20px;
}

.content-wrapper {
    flex: 3;
}

.sidebar-ads {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.ad-vertical {
    background-color: #f4f4f4;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Seção Hero (Destaque) */
.hero-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-bottom: 40px;
}

.featured-news {
    position: relative;
    height: 450px;
    overflow: hidden;
    border-radius: 8px;
}

.featured-news img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.featured-news:hover img {
    transform: scale(1.05);
}

.featured-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
}

.category-tag {
    background-color: #ff0000;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: inline-block;
}

.featured-content h1 {
    font-size: 32px;
    margin-top: 10px;
}

.news-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.grid-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.grid-item img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
}

.grid-item h3 {
    font-size: 14px;
    line-height: 1.3;
}

/* Notícias Recentes */
.section-title {
    font-size: 24px;
    border-left: 5px solid #ff0000;
    padding-left: 15px;
    margin-bottom: 25px;
    text-transform: uppercase;
}

.news-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.news-card {
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.news-card img {
    width: 250px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
}

.card-body {
    flex: 1;
}

.card-body h3 {
    font-size: 20px;
    margin: 10px 0;
}

.card-body p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.read-more {
    color: #ff0000;
    font-weight: bold;
    font-size: 14px;
}

.pagination {
    text-align: center;
    margin-top: 40px;
}

.btn-more {
    background-color: #000;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

.btn-more:hover {
    background-color: #ff0000;
}

/* Footer */
footer {
    background-color: #000;
    color: white;
    padding: 40px 0;
    margin-top: 60px;
    text-align: center;
}

.footer-logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.footer-links a:hover {
    text-decoration: underline;
}

/* Responsividade */
@media (max-width: 992px) {
    main {
        flex-direction: column;
    }
    .sidebar-ads {
        display: none; /* Oculta sidebar em telas menores para focar no conteúdo */
    }
    .hero-section {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        gap: 15px;
    }
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    .news-card {
        flex-direction: column;
    }
    .news-card img {
        width: 100%;
        height: 200px;
    }
    .featured-content h1 {
        font-size: 24px;
    }
}
