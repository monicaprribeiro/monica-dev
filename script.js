const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.14 }
);

document.querySelectorAll(".reference-layout .reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll(".reference-layout .contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => event.preventDefault());
});

if (window.location.pathname.endsWith("/bellograo.html")) {
  document.body.classList.add("reference-layout");
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="new-site project-site">
      <header class="ref-header"><div class="container ref-nav"><a class="ref-logo" href="../index.html#inicio">monica<span class="brand-dot">.</span><b>dev.br</b></a><nav class="ref-links"><a href="../index.html#sobre">Sobre</a><a href="../index.html#portfolio">Portfólio</a><a href="../index.html#curriculo">Currículo</a><a href="../index.html#loja">Loja</a><a href="../index.html#contato">Contato</a></nav><a class="ref-cta" href="../index.html#contato">Falar Comigo <span>↗</span></a></div></header>
      <main class="detail-page"><section class="detail-hero"><div class="container detail-hero-grid"><div class="reveal is-visible"><a class="detail-back" href="../index.html#portfolio">← Voltar ao portfólio</a><p class="ref-label">PROJETO WEB / 04</p><h1>BelloGrão</h1><p>Site institucional para cafeteria, com presença digital elegante, cardápio online e caminho claro para o cliente conhecer a marca e fazer contato.</p><div class="ref-actions"><a class="ref-button primary" href="../index.html#contato">Quero um projeto assim <span>↗</span></a><a class="ref-button secondary" href="financeo.html">Próximo projeto <span>→</span></a></div></div><div class="detail-screen law reveal is-visible"><header><span>BELLO<span>GRÃO</span></span><small>CAFETERIA DIGITAL</small></header><div class="screen-nav"></div><div class="screen-content"><div class="screen-kpis"><i></i><i></i><i></i></div><div class="screen-table"><i></i><i></i><i></i><i></i></div></div></div></div></section><section class="ref-section detail-summary"><div class="container"><p class="ref-label">CONTEXTO DO PROJETO</p><div class="detail-grid"><article class="reveal is-visible"><small>01 / DESAFIO</small><h2>Informação rápida para quem está no celular.</h2><p>Pequenos negócios precisam apresentar produtos, horários, diferenciais e canais de contato de forma simples e direta.</p></article><article class="reveal is-visible"><small>02 / SOLUÇÃO</small><h2>Uma vitrine acolhedora.</h2><p>Uma landing page responsiva com identidade visual, vitrine de produtos, cardápio online e chamadas diretas para contato e visita.</p></article><article class="reveal is-visible"><small>03 / RESULTADO</small><h2>Uma experiência sem ruído.</h2><p>Mais clareza para o cliente e menos perguntas repetidas no atendimento.</p></article></div></div></section><section class="ref-section detail-features"><div class="container feature-grid"><div><p class="ref-label">FUNCIONALIDADES</p><h2>Uma presença que convida a conhecer.</h2><ul><li>Apresentação da cafeteria e proposta da marca.</li><li>Cardápio organizado por categorias.</li><li>Layout responsivo para celular, tablet e desktop.</li><li>Chamadas para contato, localização e redes sociais.</li></ul></div><div class="detail-tech"><p class="ref-label">TECNOLOGIAS</p><div class="stack"><div><span>HTML</span><span>CSS</span><span>JavaScript</span><span>UX</span><span>Responsivo</span></div></div><p>Uma base visual pensada para tornar a marca acessível em qualquer tela.</p></div></div></section></main>
      <footer class="ref-footer"><div class="container"><div><a class="ref-logo" href="../index.html#inicio">monica<span class="brand-dot">.</span><b>dev.br</b></a><p>Tecnologia com intenção. Soluções mais simples.</p></div><nav><a href="../index.html#sobre">Sobre</a><a href="../index.html#portfolio">Portfólio</a><a href="../index.html#contato">Contato</a></nav><small>© 2026 monica.dev.br</small></div></footer>
    </div>`
  );
}

const whatsappUrl = "https://wa.me/5511998939919";

document.querySelectorAll(".reference-layout .ref-cta").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll('.reference-layout a[href$="#curriculo"]').forEach((link) => {
  if (link.textContent.includes("Currículo")) {
    link.textContent = "Experiência";
  }
});

const heroExperienceLink = document.querySelector(".reference-layout .ref-hero .secondary");
if (heroExperienceLink) {
  heroExperienceLink.href = "#curriculo";
  heroExperienceLink.innerHTML = "Minha experiência <span>↓</span>";
}

const ideasSection = document.querySelector(".reference-layout .portfolio");
if (ideasSection) {
  const label = ideasSection.querySelector(".ref-label");
  const title = ideasSection.querySelector("h2");
  const subtitle = ideasSection.querySelector(".section-subtitle");
  const cards = ideasSection.querySelectorAll(".project-tile");
  if (label) label.textContent = "03 / IDEIAS & SOLUÇÕES";
  if (title) title.textContent = "Possibilidades para o seu negócio.";
  if (subtitle) {
    subtitle.textContent = "Exemplos do que posso criar para organizar processos, apresentar serviços e tornar dados mais fáceis de usar. São demonstrações conceituais.";
  }
  const ideas = [
    ["Site para apresentar seu negócio", "Uma presença digital clara para mostrar serviços, diferenciais e facilitar o primeiro contato.", "Explorar possibilidade"],
    ["Automação que reduz tarefas manuais", "Fluxos para receber solicitações, organizar informações e manter a rotina andando com menos repetição.", "Explorar possibilidade"],
    ["Painel para entender seus dados", "Indicadores e filtros que transformam números do dia a dia em uma leitura mais simples para decidir.", "Explorar possibilidade"],
  ];
  cards.forEach((card, index) => {
    const idea = ideas[index];
    if (!idea) return;
    const cardTitle = card.querySelector("h3");
    const cardText = card.querySelector("p");
    const cardLink = card.querySelector("a");
    if (cardTitle) cardTitle.textContent = idea[0];
    if (cardText) cardText.textContent = idea[1];
    if (cardLink) {
      cardLink.href = "#contato";
      cardLink.innerHTML = `${idea[2]} <b>→</b>`;
    }
  });
}

const experienceSection = document.querySelector(".reference-layout .resume");
if (experienceSection) {
  experienceSection.innerHTML = `
    <div class="container experience-content">
      <div class="experience-heading">
        <div>
          <p class="ref-label">04 / MINHA EXPERIÊNCIA</p>
          <h2>Conhecimento aplicado para simplificar o dia a dia.</h2>
          <p class="section-subtitle">Uma trajetória que conecta dados, automação, desenvolvimento web e visão de operação.</p>
        </div>
      </div>
      <div class="experience-grid">
        <article class="experience-card reveal"><span>01</span><h3>Dados &amp; indicadores</h3><p>Gestão e análise de dados, acompanhamento de KPIs, identificação de padrões e apoio à tomada de decisão.</p><footer><b>Power BI</b><b>SQL</b><b>Excel</b><b>Databricks</b></footer></article>
        <article class="experience-card reveal"><span>02</span><h3>Automação de processos</h3><p>Automação de relatórios e rotinas para reduzir retrabalho, conectar informações e dar mais fluidez à operação.</p><footer><b>Python</b><b>n8n</b><b>Power Automate</b><b>APIs</b></footer></article>
        <article class="experience-card reveal"><span>03</span><h3>Desenvolvimento web</h3><p>Interfaces responsivas e aplicações simples, com foco em clareza, boa experiência de uso e soluções úteis.</p><footer><b>HTML</b><b>CSS</b><b>JavaScript</b><b>UX</b></footer></article>
        <article class="experience-card reveal"><span>04</span><h3>Operação &amp; cliente</h3><p>Experiência em atendimento, Customer Success, supervisão e processos operacionais conectando tecnologia ao contexto do negócio.</p><footer><b>KPIs</b><b>Processos</b><b>Customer Success</b></footer></article>
      </div>
    </div>`;
  experienceSection.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const contactSection = document.querySelector(".reference-layout .contact");
if (contactSection) {
  contactSection.innerHTML = `
    <div class="container direct-contact">
      <div>
        <p class="ref-label">06 / CONTATO</p>
        <h2>Vamos <span>conversar</span> sobre a sua ideia?</h2>
        <p>Se você precisa de um site, automação ou dashboard, entre em contato. Podemos começar pelo seu desafio.</p>
      </div>
      <div class="direct-actions">
        <a class="ref-button primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp <span>↗</span></a>
        <a class="ref-button secondary" href="mailto:contato@monica.dev.br">Enviar e-mail <span>↗</span></a>
        <a class="linkedin-link" href="https://www.linkedin.com/in/monicaprribeiro" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
      </div>
    </div>`;
}

const logoTypingTargets = document.querySelectorAll(".reference-layout .ref-logo");
if (logoTypingTargets.length) {
  const logoParts = [];
  logoTypingTargets.forEach((logo) => {
    logo.setAttribute("aria-label", "Monica.dev.br");
    logo.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE || node.nodeName === "B") node.remove();
    });
    const typed = document.createElement("span");
    typed.className = "logo-typed";
    typed.setAttribute("aria-hidden", "true");
    const suffix = document.createElement("span");
    suffix.className = "logo-suffix";
    suffix.setAttribute("aria-hidden", "true");
    logo.append(typed);
    logo.append(suffix);
    logoParts.push({ dot: logo.querySelector(".brand-dot"), typed, suffix });
  });

  const namePart = "onica";
  const suffixPart = "dev.br";
  const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
  const setName = (value) => logoParts.forEach(({ dot, typed }) => {
    typed.textContent = value;
    typed.after(dot);
  });
  const setSuffix = (value) => logoParts.forEach(({ dot, suffix }) => {
    suffix.textContent = value;
    dot.after(suffix);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setName(namePart);
    setSuffix(suffixPart);
  } else (async function animateLogoName() {
    while (true) {
      setName("");
      setSuffix("");
      await wait(1800);
      for (let index = 1; index <= namePart.length; index += 1) {
        setName(namePart.slice(0, index));
        await wait(115);
      }
      for (let index = 1; index <= suffixPart.length; index += 1) {
        setSuffix(suffixPart.slice(0, index));
        await wait(115);
      }
      await wait(2600);
      for (let index = suffixPart.length - 1; index >= 0; index -= 1) {
        setSuffix(suffixPart.slice(0, index));
        await wait(70);
      }
      for (let index = namePart.length - 1; index >= 0; index -= 1) {
        setName(namePart.slice(0, index));
        await wait(70);
      }
      await wait(700);
    }
  }());
}
