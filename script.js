const services = [
  { icon: "file-text", title: "Impuestos y Monotributo", subtitle: "Pagá lo que corresponde y cumplí sin complicaciones", description: "Nos ocupamos de que tu relación con ARCA sea clara y sin sorpresas. Te asesoramos para que aproveches cada beneficio legal y mantengas tu negocio siempre en regla.", includes: ["Alta en ARCA y encuadre inicial", "Gestión integral de Monotributo", "Recategorizaciones semestrales", "Liquidación de impuestos nacionales y provinciales", "Atención de requerimientos y notificaciones", "Planificación fiscal para nuevos proyectos"], benefit: "Seguridad frente al fisco y ahorro inteligente en tus impuestos." },
  { icon: "calculator", title: "Contabilidad", subtitle: "Información real para decidir mejor", description: "No solo armamos balances; transformamos tus números en una herramienta de gestión. Te ayudamos a entender la realidad de tu empresa para que decidas con datos precisos y objetivos.", includes: ["Análisis contable detallado", "Interpretación de resultados mensuales", "Reportes financieros fáciles de entender", "Armado y certificación de balances anuales", "Control de cumplimiento de normas vigentes"], benefit: "Claridad absoluta sobre la salud financiera de tu negocio." },
  { icon: "target", title: "Asesoramiento para Negocios y Emprendedores", subtitle: "Ordenamos tu estructura para que puedas crecer", description: "Te ayudamos a transformar tu idea en un negocio real y rentable. Nos encargamos de ordenar tu estructura administrativa y legal para que crezcas con bases firmes, evitando errores comunes que cuestan tiempo y dinero.", includes: ["Elegimos el mejor camino impositivo para que no pagues de más", "Identificamos riesgos antes de que se conviertan en problemas", "Ordenamos tus papeles y administración para que ganes tiempo", "Planes de negocio realistas para que sepas dónde estás parado", "Asesoramiento constante para que no te sientas solo al decidir"], benefit: "Una base sólida para que tu proyecto escale sin imprevistos." },
  { icon: "trending-up", title: "Certificaciones Contables y Proyecciones", subtitle: "Respaldo técnico para tus gestiones comerciales", description: "Preparamos los informes y avales técnicos que necesitás para tus trámites bancarios o comerciales, con un lenguaje claro y directo.", includes: ["Armado de carpeta de bancos", "Certificación de ingresos", "Manifestación de bienes", "Informes profesionales para terceros", "Proyecciones financieras para toma de decisiones"], benefit: "Trámites aprobados y visión clara de tu futuro financiero." },
  { icon: "handshake", title: "Laboral y Societario", subtitle: "Seguridad y cumplimiento para tu equipo y empresa", description: "Trabajamos junto a profesionales especializados para manejar la complejidad de las relaciones laborales y la estructura legal de tu sociedad con total seguridad.", includes: ["Altas y bajas de empleados", "Liquidación de sueldos y jornales", "Asesoramiento laboral preventivo", "Constitución y modificaciones de sociedades"], benefit: "Seguridad jurídica y tranquilidad en la gestión de tu personal." },
  { icon: "cpu", title: "Soluciones Digitales a Medida", subtitle: "Tecnología adaptada a tu negocio", description: "Usamos la tecnología para que la información de tu negocio fluya mejor. Automatizamos procesos repetitivos para que tengas datos en tiempo real y reduzcas los errores manuales que cuestan plata.", includes: ["Tableros de control con reportes automáticos", "Seguimiento de flujo de fondos (cash flow)", "Recordatorios de vencimientos y cobranzas", "Implementación de chatbot de WhatsApp", "Soluciones a medida según tu necesidad"], benefit: "Menos tiempo en papeles y más precisión en tu gestión diaria.", premium: true },
  { icon: "globe", title: "Desarrollo de Páginas Web", subtitle: "Tu oficina abierta al mundo las 24 horas", description: "Diseñamos tu presencia online con un enfoque comercial. Creamos sitios que no solo se ven bien, sino que facilitan que tus clientes te encuentren y te contacten rápido.", includes: ["Desarrollo de páginas web y Landing pages", "Integración directa con WhatsApp", "Enfoque en generar consultas comerciales", "Mejora de la imagen profesional digital"], benefit: "Una vidriera digital que atrae clientes y genera confianza.", premium: true }
];

const faqs = [
  ["¿A quiénes están dirigidos sus servicios?", "A Pymes, emprendedores y profesionales que buscan profesionalizar su gestión, optimizar su estructura impositiva y tomar decisiones con información confiable."],
  ["¿Cómo es el proceso inicial?", "Comenzamos con un análisis inicial personalizado para comprender la situación, detectar oportunidades de mejora y definir un plan de trabajo."],
  ["¿Qué beneficios tiene la digitalización?", "Permite optimizar tiempos, reducir errores y contar con información actualizada para la toma de decisiones."],
  ["¿Ofrecen asesoramiento para nuevos negocios?", "Sí, acompañamos en cada etapa del desarrollo del negocio, brindando asesoramiento para una correcta organización, cumplimiento normativo y planificación del crecimiento."],
  ["¿Cómo se adaptan a cada cliente?", "Trabajamos de manera personalizada, según la actividad y necesidades de cada cliente."],
  ["¿Cuál es el valor agregado del servicio?", "Integramos asesoramiento contable con herramientas digitales para optimizar procesos y mejorar la gestión."],
  ["¿Cuáles son las modalidades de atención?", "Atención presencial en San Martín, Mendoza, y consultas virtuales para todo el país."]
];

const chatOptions = [
  ["Ver servicios", "servicios"], ["Impuestos", "impuestos"], ["Contabilidad", "contabilidad"],
  ["Negocios", "negocios"], ["Soluciones digitales", "digitales"], ["Páginas web", "web"],
  ["Modalidad", "modalidad"], ["Ubicación", "ubicacion"], ["Sobre JAT", "nosotros"],
  ["Pedir presupuesto", "presupuesto"], ["Contactar", "contacto"]
];

document.addEventListener("DOMContentLoaded", () => {
  const serviceList = document.querySelector("#service-list");
  const premiumList = document.querySelector("#premium-services");
  const select = document.querySelector("#service-select");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const heroVideo = document.querySelector(".hero-media video");
  const heroMedia = document.querySelector(".hero-media");

  if (!reduceMotion) {
    const showHeroVideo = () => heroMedia.classList.add("video-ready");
    if (heroVideo.readyState >= 3) showHeroVideo();
    else heroVideo.addEventListener("canplay", showHeroVideo, { once: true });
    heroVideo.play().catch(() => {});
  } else {
    document.querySelectorAll("video").forEach(video => video.pause());
  }

  if (!reduceMotion) {
    const mediaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: .08 });
    document.querySelectorAll("video").forEach(video => mediaObserver.observe(video));
  }

  const ribbon = document.querySelector(".service-ribbon > div");
  ribbon.innerHTML += ribbon.innerHTML;

  services.forEach((service, index) => {
    const option = document.createElement("option");
    option.value = service.title;
    option.textContent = service.title;
    select.append(option);

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.service = index;
    if (service.premium) {
      button.className = "premium-card";
      button.innerHTML = `<div class="icon-box"><i data-lucide="${service.icon}"></i></div><div><h3>${service.title}</h3><p>${service.description}</p></div><span class="round-arrow"><i data-lucide="arrow-up-right"></i></span>`;
      premiumList.append(button);
    } else {
      button.className = "service-item";
      button.innerHTML = `<span class="service-number">0${index + 1}</span><h3>${service.title}</h3><p>${service.subtitle}</p><span class="round-arrow"><i data-lucide="arrow-up-right"></i></span>`;
      serviceList.append(button);
    }
  });

  document.querySelector("#faq-list").innerHTML = faqs.map(([q, a], i) => `<article class="faq-item${i === 0 ? " open" : ""}"><button class="faq-question" type="button" aria-expanded="${i === 0}"><span>${q}</span><i data-lucide="plus"></i></button><div class="faq-answer"><p>${a}</p></div></article>`).join("");

  document.querySelectorAll(".faq-item").forEach(item => {
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("open")) answer.style.maxHeight = `${answer.scrollHeight}px`;
    item.querySelector("button").addEventListener("click", () => {
      const open = item.classList.toggle("open");
      item.querySelector("button").setAttribute("aria-expanded", open);
      answer.style.maxHeight = open ? `${answer.scrollHeight}px` : "0px";
    });
  });

  const serviceModal = document.querySelector("#service-modal");
  document.querySelectorAll("[data-service]").forEach(button => button.addEventListener("click", () => openService(Number(button.dataset.service))));
  document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", () => closeModal(serviceModal)));
  document.querySelector(".modal-contact").addEventListener("click", () => closeModal(serviceModal));

  function openService(index) {
    const service = services[index];
    document.querySelector("#modal-title").textContent = service.title;
    document.querySelector("#modal-subtitle").textContent = service.subtitle;
    document.querySelector("#modal-description").textContent = service.description;
    document.querySelector("#modal-includes").innerHTML = service.includes.map(item => `<li>${item}</li>`).join("");
    document.querySelector("#modal-benefit").textContent = service.benefit;
    document.querySelector(".modal-contact").dataset.serviceName = service.title;
    select.value = service.title;
    openModal(serviceModal);
  }

  const termsModal = document.querySelector("#terms-modal");
  document.querySelector("#terms-open").addEventListener("click", () => openModal(termsModal));
  document.querySelectorAll("[data-close-terms]").forEach(button => button.addEventListener("click", () => closeModal(termsModal)));

  function openModal(modal) { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); }
  function closeModal(modal) { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("modal-open"); }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.open").forEach(closeModal);
      closeChat();
    }
  });

  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".scroll-progress span");
  const hero = document.querySelector(".hero");
  const difference = document.querySelector(".difference");
  const finale = document.querySelector(".cinema-finale");
  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const updateScrollEffects = () => {
    header.classList.toggle("scrolled", window.scrollY > 25);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
    if (!reduceMotion && difference) {
      const rect = difference.getBoundingClientRect();
      const offset = Math.max(-8, Math.min(3, (window.innerHeight - rect.top) / window.innerHeight * 8 - 7));
      difference.style.setProperty("--parallax-y", `${offset}%`);
    }
    if (!reduceMotion && finale) {
      const rect = finale.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        finale.style.setProperty("--film-shift", `${(progress - .5) * 5}%`);
      }
    }
    if (!reduceMotion && window.scrollY < window.innerHeight * 1.2) {
      const ratio = Math.min(1, window.scrollY / window.innerHeight);
      heroMedia.style.setProperty("--hero-shift", `${ratio * 5}%`);
      heroMedia.style.setProperty("--hero-scale", `${1.06 + ratio * .06}`);
    }
    let current = "inicio";
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 180) current = section.id;
    });
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
    document.querySelectorAll(".reveal:not(.in-view), .reveal-stagger:not(.in-view)").forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight * .93) element.classList.add("in-view");
    });
  };
  updateScrollEffects();
  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  if (!reduceMotion) {
    hero.addEventListener("pointermove", event => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    });
  }

  const revealTargets = [
    ".intro-grid", ".answer-line", ".section-heading", ".digital-heading", ".method-grid",
    ".outcomes", ".difference-content", ".about-top", ".mission-grid", ".values",
    ".faq-grid", ".contact-heading", ".contact-grid", ".footer-top"
  ];
  revealTargets.forEach(selector => document.querySelectorAll(selector).forEach(element => element.classList.add("reveal")));
  [".pain-grid", ".service-list", ".premium-services", ".steps", ".outcome-grid", ".principles", ".value-row"]
    .forEach(selector => document.querySelectorAll(selector).forEach(element => element.classList.add("reveal-stagger")));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -7%" });
  document.querySelectorAll(".reveal, .reveal-stagger").forEach(element => observer.observe(element));

  const particleCanvas = document.querySelector("#services-particles");
  if (particleCanvas && !reduceMotion) {
    const context = particleCanvas.getContext("2d");
    let particles = [];
    let particleFrame = 0;
    let particleActive = false;
    const resizeParticles = () => {
      const rect = particleCanvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      particleCanvas.width = Math.round(rect.width * ratio);
      particleCanvas.height = Math.round(rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = window.innerWidth < 700 ? 22 : 42;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - .5) * .13,
        vy: (Math.random() - .5) * .13,
        radius: Math.random() * 1.2 + .5
      }));
    };
    const drawParticles = () => {
      if (!particleActive) return;
      const width = particleCanvas.clientWidth;
      const height = particleCanvas.clientHeight;
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        context.beginPath();
        context.fillStyle = index % 4 === 0 ? "rgba(200,170,99,.5)" : "rgba(255,255,255,.22)";
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 145) {
            context.beginPath();
            context.strokeStyle = `rgba(200,170,99,${(1 - distance / 145) * .08})`;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
      particleFrame = requestAnimationFrame(drawParticles);
    };
    resizeParticles();
    window.addEventListener("resize", resizeParticles);
    new IntersectionObserver(([entry]) => {
      particleActive = entry.isIntersecting;
      cancelAnimationFrame(particleFrame);
      if (particleActive) drawParticles();
    }, { threshold: .02 }).observe(particleCanvas);
  }
  menuButton.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", open);
    mobileNav.setAttribute("aria-hidden", !open);
    menuButton.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    lucide.createIcons();
  });
  mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    menuButton.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  }));

  document.querySelector("#contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `*Nueva Consulta desde la Web*\n\n*Nombre:* ${data.get("nombre")}\n*Email:* ${data.get("email")}\n*Servicio:* ${data.get("servicio")}\n*Mensaje:* ${data.get("mensaje") || "No proporcionado"}`;
    window.open(`https://wa.me/542634512677?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });

  const chatPanel = document.querySelector(".chat-panel");
  const chatTrigger = document.querySelector(".chat-trigger");
  const chatHistory = document.querySelector("#chat-history");
  const options = document.querySelector("#chat-options");
  options.innerHTML = chatOptions.map(([label, value]) => `<button type="button" data-chat="${value}">${label}</button>`).join("");
  chatTrigger.addEventListener("click", () => {
    const open = chatPanel.classList.toggle("open");
    chatPanel.setAttribute("aria-hidden", !open);
    chatTrigger.setAttribute("aria-expanded", open);
  });
  document.querySelector(".chat-close").addEventListener("click", closeChat);
  function closeChat() { chatPanel.classList.remove("open"); chatPanel.setAttribute("aria-hidden", "true"); chatTrigger.setAttribute("aria-expanded", "false"); }
  options.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    const label = button.textContent;
    const value = button.dataset.chat;
    addChat(label, "user");
    const responses = {
      servicios: "JAT brinda siete áreas de servicio: Impuestos y Monotributo, Contabilidad, Asesoramiento para Negocios y Emprendedores, Certificaciones Contables y Proyecciones, Laboral y Societario, Soluciones Digitales a Medida y Desarrollo de Páginas Web. Te llevo a la sección para que puedas abrir el detalle de cada una.",
      impuestos: "En Impuestos y Monotributo se incluye el alta y encuadre inicial en ARCA, gestión de Monotributo, recategorizaciones, liquidación de impuestos nacionales y provinciales, atención de requerimientos y planificación fiscal para nuevos proyectos.",
      contabilidad: "El servicio de Contabilidad transforma los números en información útil: análisis contable, interpretación de resultados, reportes financieros, balances anuales y control del cumplimiento de normas vigentes.",
      negocios: "El asesoramiento para negocios y emprendedores ayuda a ordenar la estructura administrativa e impositiva, identificar riesgos y definir un plan de trabajo con información clara para crecer sobre bases firmes.",
      digitales: "Las Soluciones Digitales a Medida incluyen tableros de control, seguimiento de flujo de fondos, recordatorios de vencimientos y cobranzas, chatbot de WhatsApp y soluciones adaptadas a cada necesidad.",
      web: "El servicio de Desarrollo de Páginas Web crea sitios y landing pages con integración a WhatsApp, enfoque comercial y una imagen digital profesional para facilitar nuevas consultas.",
      modalidad: "La atención puede ser presencial en San Martín, Mendoza, o mediante consultas virtuales para todo el país. El trabajo comienza con un análisis personalizado de la situación y un plan de trabajo.",
      nosotros: "JAT es un estudio especializado en contabilidad, asesoramiento fiscal y automatización de procesos administrativos para emprendedores, profesionales y pymes. Fue fundado por el Contador y Lic. en Administración Emiliano Talquenca.",
      ubicacion: "La oficina se encuentra en Pasco 29, San Martín, Mendoza. También se brindan consultas virtuales para todo el país.",
      presupuesto: "Perfecto. Te llevo al formulario para que puedas indicar el servicio que necesitás y solicitar un presupuesto personalizado."
    };
    if (value === "contacto") {
      addChat("Te llevo a WhatsApp para una atención personalizada.", "bot");
      setTimeout(() => window.open("https://wa.me/542634512677?text=Hola%20quiero%20comunicarme%20con%20JAT%20Estudio%20Contable", "_blank", "noopener"), 500);
      return;
    }
    addChat(responses[value], "bot");
    if (["servicios", "impuestos", "contabilidad", "negocios", "digitales", "web", "modalidad", "nosotros", "ubicacion", "presupuesto"].includes(value)) {
      const target = ["ubicacion", "presupuesto"].includes(value) ? "contacto" : (["modalidad"].includes(value) ? "faq" : (["impuestos", "contabilidad", "negocios", "digitales", "web"].includes(value) ? "servicios" : value));
      setTimeout(() => document.querySelector(`#${target}`).scrollIntoView({ behavior: "smooth" }), 450);
      if (value === "presupuesto") select.value = "Presupuesto Personalizado";
    }
  });
  function addChat(text, type) {
    const message = document.createElement("div");
    message.className = `${type}-message`;
    message.textContent = text;
    chatHistory.append(message);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  lucide.createIcons();
});
