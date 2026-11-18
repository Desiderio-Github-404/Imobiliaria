import { agency } from "./config/agency.js";
import "./style.css";

const properties = [
  {
    id: 1, title: "Moradia contemporânea T4", type: "Moradia", purpose: "Venda",
    location: "Talatona, Luanda", price: 185000000, beds: 4, baths: 5, area: 320,
    badge: "Destaque", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    description: "Uma moradia contemporânea com espaços amplos, acabamentos de qualidade, excelente iluminação natural e uma zona exterior ideal para momentos em família."
  },
  {
    id: 2, title: "Apartamento moderno T3", type: "Apartamento", purpose: "Arrendamento",
    location: "Marginal, Luanda", price: 950000, beds: 3, baths: 2, area: 145,
    badge: "Novo", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description: "Apartamento elegante, mobilado e com uma vista agradável. Localização privilegiada, próximo de serviços, comércio e zonas de lazer."
  },
  {
    id: 3, title: "Vivenda familiar T5", type: "Moradia", purpose: "Venda",
    location: "Benfica, Luanda", price: 125000000, beds: 5, baths: 4, area: 410,
    badge: "", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description: "Vivenda espaçosa numa zona residencial tranquila, com quintal, estacionamento e áreas sociais pensadas para o conforto da família."
  },
  {
    id: 4, title: "Apartamento luminoso T2", type: "Apartamento", purpose: "Venda",
    location: "Kilamba, Luanda", price: 48000000, beds: 2, baths: 2, area: 110,
    badge: "Oportunidade", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    description: "Apartamento funcional e bem distribuído, com boa exposição solar e acesso facilitado a transportes, escolas e comércio."
  },
  {
    id: 5, title: "Moradia minimalista T3", type: "Moradia", purpose: "Arrendamento",
    location: "Nova Vida, Luanda", price: 650000, beds: 3, baths: 3, area: 210,
    badge: "", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
    description: "Moradia de linhas modernas, com sala ampla, cozinha equipada e espaço exterior. Ideal para quem procura tranquilidade e privacidade."
  },
  {
    id: 6, title: "Terreno para investimento", type: "Terreno", purpose: "Venda",
    location: "Viana, Luanda", price: 22000000, beds: 0, baths: 0, area: 600,
    badge: "", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    description: "Terreno com dimensão interessante para projeto residencial ou investimento. Consulte o nosso consultor para mais informações."
  }
];

const money = value => new Intl.NumberFormat("pt-PT").format(value) + " " + agency.currency;
const waLink = (message) => `https://wa.me/${agency.phone}?text=${encodeURIComponent(message)}`;

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#" aria-label="Página inicial">
      <span class="brand-mark">H</span>
      <span><strong data-agency-name>${agency.name}</strong><small>IMOBILIÁRIA</small></span>
    </a>
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
    <nav class="main-nav">
      <a href="#inicio" class="active">Início</a>
      <a href="#imoveis">Imóveis</a>
      <a href="#sobre">Sobre nós</a>
      <a href="#contacto">Contactos</a>
    </nav>
    <a class="header-cta" href="${waLink("Olá! Gostaria de obter informações sobre os imóveis disponíveis.")}" target="_blank" rel="noopener">Fale connosco <span>↗</span></a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-image"></div>
      <div class="hero-shade"></div>
      <div class="hero-content">
        <span class="eyebrow light"><i></i> O SEU PRÓXIMO CAPÍTULO COMEÇA AQUI</span>
        <h1>Encontre um lugar<br>para <em>pertencer.</em></h1>
        <p>Descubra imóveis selecionados em Luanda. A casa certa, o investimento certo, com acompanhamento próximo em cada passo.</p>
        <a class="button button-gold" href="#imoveis">Explorar imóveis <span>↘</span></a>
      </div>
      <div class="hero-note"><span>01 — 06</span><span>IMÓVEIS SELECIONADOS</span></div>
    </section>

    <section class="search-wrap" aria-label="Pesquisar imóveis">
      <form class="search-panel" id="search-form">
        <label class="search-field"><span>Estou à procura de</span>
          <select id="purpose"><option value="">Comprar ou arrendar</option><option>Venda</option><option>Arrendamento</option></select>
        </label>
        <label class="search-field"><span>Tipo de imóvel</span>
          <select id="type"><option value="">Todos os tipos</option><option>Moradia</option><option>Apartamento</option><option>Terreno</option></select>
        </label>
        <label class="search-field"><span>Localização</span>
          <input id="location" type="search" placeholder="Ex.: Talatona">
        </label>
        <button class="button button-dark" type="submit"><span>⌕</span> Pesquisar</button>
      </form>
    </section>

    <section class="section properties-section" id="imoveis">
      <div class="section-heading">
        <div><span class="eyebrow"><i></i> A NOSSA SELEÇÃO</span><h2>Imóveis em <em>destaque.</em></h2></div>
        <a class="text-link" href="#imoveis">Descobrir oportunidades <span>↗</span></a>
      </div>
      <div class="property-grid" id="property-grid"></div>
      <p class="empty-state" id="empty-state" hidden>Não encontrámos imóveis com esses critérios. Experimente alterar a pesquisa.</p>
    </section>

    <section class="about-section" id="sobre">
      <div class="about-photo"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Interior de uma residência moderna"><span class="photo-caption">ESPAÇOS COM SIGNIFICADO</span></div>
      <div class="about-copy"><span class="eyebrow"><i></i> MAIS DO QUE IMÓVEIS</span><h2>O próximo passo<br>merece <em>confiança.</em></h2><p>Na <span data-agency-full>${agency.fullName}</span>, acreditamos que encontrar um imóvel é encontrar novas possibilidades. Acompanhamos cada cliente com transparência, atenção e conhecimento do mercado.</p><a class="button button-outline" href="${waLink("Olá! Gostaria de conversar com um consultor imobiliário.")}" target="_blank" rel="noopener">Conheça o nosso atendimento <span>↗</span></a></div>
    </section>

    <section class="contact-band" id="contacto">
      <div><span class="eyebrow light"><i></i> VAMOS CONVERSAR?</span><h2>O imóvel ideal pode<br>estar a uma mensagem.</h2></div>
      <a class="button button-gold" href="${waLink("Olá! Estou à procura de um imóvel e gostaria de receber ajuda.")}" target="_blank" rel="noopener">Falar pelo WhatsApp <span>↗</span></a>
    </section>
  </main>

  <footer class="footer"><a class="brand brand-footer" href="#"><span class="brand-mark">H</span><span><strong data-agency-name>${agency.name}</strong><small>IMOBILIÁRIA</small></span></a><p>© ${new Date().getFullYear()} <span data-agency-full>${agency.fullName}</span>. Todos os direitos reservados.</p><span class="footer-location">LUANDA · ANGOLA</span></footer>
  <a class="floating-wa" href="${waLink("Olá! Gostaria de obter informações sobre os imóveis.")}" target="_blank" rel="noopener" aria-label="Contactar pelo WhatsApp">◔</a>
  <div class="modal" id="property-modal" aria-hidden="true"><div class="modal-backdrop" data-close></div><article class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" data-close aria-label="Fechar">×</button><img id="modal-image" src="" alt=""><div class="modal-content"><span class="eyebrow" id="modal-badge"></span><h2 id="modal-title"></h2><p class="modal-location" id="modal-location"></p><strong class="modal-price" id="modal-price"></strong><div class="modal-specs" id="modal-specs"></div><p id="modal-description"></p><a class="button button-dark" id="modal-whatsapp" target="_blank" rel="noopener">Tenho interesse neste imóvel <span>↗</span></a></div></article></div>
`;

const grid = document.querySelector("#property-grid");
const empty = document.querySelector("#empty-state");
function renderProperties(items) {
  grid.innerHTML = items.map(p => `
    <article class="property-card">
      <button class="property-image" data-property="${p.id}" aria-label="Ver ${p.title}">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="property-badge">${p.badge}</span>` : ""}
        <span class="image-arrow">↗</span>
      </button>
      <div class="property-info">
        <div class="property-meta"><span>${p.purpose === "Venda" ? "PARA VENDA" : "PARA ARRENDAMENTO"}</span><span>${p.type.toUpperCase()}</span></div>
        <h3><button class="title-button" data-property="${p.id}">${p.title}</button></h3>
        <p class="property-location">⌖ &nbsp;${p.location}</p>
        <div class="property-bottom"><strong>${money(p.price)}${p.purpose === "Arrendamento" ? "<small> / mês</small>" : ""}</strong><span>${p.area} m²</span></div>
        <div class="property-specs"><span>⌂ ${p.beds || "—"} quartos</span><span>◫ ${p.baths || "—"} WC</span><span>▱ ${p.area} m²</span></div>
      </div>
    </article>`).join("");
  empty.hidden = items.length > 0;
}
renderProperties(properties);

document.querySelector("#search-form").addEventListener("submit", event => {
  event.preventDefault();
  const purpose = document.querySelector("#purpose").value;
  const type = document.querySelector("#type").value;
  const location = document.querySelector("#location").value.trim().toLocaleLowerCase("pt");
  const filtered = properties.filter(p =>
    (!purpose || p.purpose === purpose) &&
    (!type || p.type === type) &&
    (!location || p.location.toLocaleLowerCase("pt").includes(location))
  );
  renderProperties(filtered);
});

const modal = document.querySelector("#property-modal");
function openProperty(id) {
  const p = properties.find(item => item.id === Number(id));
  if (!p) return;
  document.querySelector("#modal-image").src = p.image;
  document.querySelector("#modal-image").alt = p.title;
  document.querySelector("#modal-badge").textContent = p.badge || p.purpose.toUpperCase();
  document.querySelector("#modal-title").textContent = p.title;
  document.querySelector("#modal-location").textContent = "⌖  " + p.location;
  document.querySelector("#modal-price").textContent = money(p.price) + (p.purpose === "Arrendamento" ? " / mês" : "");
  document.querySelector("#modal-specs").innerHTML = `<span>${p.beds || "—"} quartos</span><span>${p.baths || "—"} casas de banho</span><span>${p.area} m²</span>`;
  document.querySelector("#modal-description").textContent = p.description;
  document.querySelector("#modal-whatsapp").href = waLink(`Olá! Tenho interesse no imóvel "${p.title}", localizado em ${p.location}, anunciado por ${money(p.price)}. Gostaria de obter mais informações.`);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
grid.addEventListener("click", event => {
  const trigger = event.target.closest("[data-property]");
  if (trigger) openProperty(trigger.dataset.property);
});
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const opened = document.querySelector(".main-nav").classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-agency-name]").forEach(el => el.textContent = agency.name);
document.querySelectorAll("[data-agency-full]").forEach(el => el.textContent = agency.fullName);
