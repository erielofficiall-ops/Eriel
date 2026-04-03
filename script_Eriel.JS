
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRODUCTOS — edita esta lista para agregar o quitar
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const PRODUCTOS = [
  {
    id: 1,
    nombre: "e.l.f. Lip Gloss",
    marca: "elf",
    tipo: "gloss-transparente",
    desc: "Gloss transparente con acabado brillante y fórmula hidratante. Sin fragancia.",
    precio: 180,
    stock: 5,
    imagen: ""   // ← pon aquí el nombre de tu imagen, ej: "elf-lip-gloss.jpg"
  },
  {
    id: 2,
    nombre: "NYX Fat Oil Lip Drip",
    marca: "nyx",
    tipo: "lip-oil",
    desc: "Lip oil ultra brillante con aceite de aguacate. Da volumen y nutrición.",
    precio: 210,
    stock: 3,
    imagen: ""   // ← ej: "nyx-fat-oil.jpg"
  },
  {
    id: 3,
    nombre: "Maybelline Lifter Gloss",
    marca: "maybelline",
    tipo: "gloss-color",
    desc: "Gloss con ácido hialurónico que hidrata y da volumen. Tono Silk.",
    precio: 195,
    stock: 8,
    imagen: ""
  },
  {
    id: 4,
    nombre: "e.l.f. Glossy Lip Stain",
    marca: "elf",
    tipo: "lip-stain",
    desc: "Tinte de larga duración con acabado glossy. Color vibrante que no se va.",
    precio: 165,
    stock: 0,    // ← stock: 0 = Agotado
    imagen: ""
  },
  {
    id: 5,
    nombre: "NYX Plump It Up",
    marca: "nyx",
    tipo: "plumping",
    desc: "Gloss plumping con complejo de canela y jengibre. Sensación de plenitud.",
    precio: 225,
    stock: 4,
    imagen: ""
  },
  {
    id: 6,
    nombre: "Wet n Wild MegaSlicks Glitter",
    marca: "wet-n-wild",
    tipo: "gloss-glitter",
    desc: "Gloss con partículas de glitter holográfico. Acabado festivo e irresistible.",
    precio: 120,
    stock: 10,
    imagen: ""
  },
  {
    id: 7,
    nombre: "Maybelline Color Sensational Gloss",
    marca: "maybelline",
    tipo: "gloss-color",
    desc: "Gloss con color intenso y vitamina E. Comodidad todo el día.",
    precio: 185,
    stock: 6,
    imagen: ""
  },
  {
    id: 8,
    nombre: "e.l.f. Sheer Slick Lipstick",
    marca: "elf",
    tipo: "gloss-transparente",
    desc: "Gloss transparente en barra. Hidratación con vitaminas A, C y E.",
    precio: 150,
    stock: 2,
    imagen: ""
  },

  // ───────────────────────────────────────────────
  // EJEMPLO DE CÓMO AGREGAR UN PRODUCTO NUEVO:
  // Descomenta y llena los campos.
  // ───────────────────────────────────────────────
  // {
  //   id: 9,
  //   nombre: "Nombre del producto",
  //   marca: "nyx",                    // ← clave de la marca
  //   tipo: "lip-oil",                 // ← tipo/categoría
  //   desc: "Descripción corta aquí.",
  //   precio: 200,
  //   stock: 5,
  //   imagen: "mi-foto.jpg"            // ← imagen en la misma carpeta
  // },
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NÚMERO DE WHATSAPP PARA EL PEDIDO
// Cambia esto por tu número: 521 + 10 dígitos del cel
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const WA_NUMBER = "521XXXXXXXXXX"; // ← pon aquí tu número


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHIPS DE FILTRO RÁPIDO (barra de filtros)
// Puedes agregar o quitar chips aquí.
// El "value" debe coincidir con tipo o marca del producto,
// o ser "todos" para mostrar todo.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CHIPS = [
  { label: "Todos",            value: "todos"            },
  { label: "Lip oil",          value: "lip-oil"          },
  { label: "Gloss color",      value: "gloss-color"      },
  { label: "Gloss transparente", value: "gloss-transparente" },
  { label: "Lip stain",        value: "lip-stain"        },
  { label: "Plumping",         value: "plumping"         },
  { label: "Glitter",          value: "gloss-glitter"    },
  { label: "e.l.f.",           value: "elf"              },
  { label: "NYX",              value: "nyx"              },
  { label: "Maybelline",       value: "maybelline"       },
  { label: "Wet n Wild",       value: "wet-n-wild"       },
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LÓGICA DE LA TIENDA — no necesitas modificar esto
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Mapa de marcas (clave → nombre bonito) ---
const MARCAS_LABEL = {
  "elf": "e.l.f.",
  "nyx": "NYX",
  "maybelline": "Maybelline",
  "wet-n-wild": "Wet n Wild"
};

// --- Mapa de tipos (clave → nombre bonito) ---
const TIPOS_LABEL = {
  "gloss-transparente": "Gloss transparente",
  "gloss-color":        "Gloss con color",
  "lip-oil":            "Lip oil",
  "lip-stain":          "Lip stain",
  "plumping":           "Plumping gloss",
  "gloss-glitter":      "Gloss con glitter"
};

// Estado de la app
let filtroActivo = "todos";
let busqueda     = "";
let carrito      = []; // array de { id, nombre, marca, precio, imagen }

// Placeholder cuando no hay imagen
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3e8dc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='%236b1f2a' opacity='.25'%3E%F0%9F%92%84%3C/text%3E%3C/svg%3E";


// --- Generar chips de filtro ---
function renderChips() {
  const wrap = document.getElementById("filterChips");
  wrap.innerHTML = CHIPS.map(c => `
    <button class="chip ${c.value === filtroActivo ? 'active' : ''}"
            data-filter="${c.value}">
      ${c.label}
    </button>
  `).join("");

  wrap.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      filtroActivo = btn.dataset.filter;
      renderChips();
      renderProductos();
    });
  });
}


// --- Construir una tarjeta de producto ---
function buildCard(p) {
  const marcaLabel = MARCAS_LABEL[p.marca] || p.marca;
  const tipoLabel  = TIPOS_LABEL[p.tipo]   || p.tipo;
  const imgSrc     = p.imagen ? p.imagen : PLACEHOLDER;
  const agotado    = p.stock === 0;

  // Texto e ícono del stock
  let stockHtml;
  if      (p.stock === 0)  stockHtml = `<span class="product-stock stock-none"><i class="fas fa-xmark-circle me-1"></i>Agotado</span>`;
  else if (p.stock <= 3)   stockHtml = `<span class="product-stock stock-low"><i class="fas fa-clock me-1"></i>Últimas ${p.stock}</span>`;
  else                      stockHtml = `<span class="product-stock stock-ok"><i class="fas fa-check-circle me-1"></i>${p.stock} disponibles</span>`;

  // Mensaje de WhatsApp para este producto individual
  const msgWa = encodeURIComponent(
    `Hola, me interesa hacer un pedido:\n\n• ${p.nombre} (${marcaLabel}) – $${p.precio}\n\n¿Sigue disponible?`
  );
  const urlWa = `https://wa.me/${WA_NUMBER}?text=${msgWa}`;
  const urlIg = `https://ig.me/m/eriel.hmo`;

  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="product-card" data-id="${p.id}">

        <!-- Imagen -->
        <div class="product-img-wrap">
          <img src="${imgSrc}" alt="${p.nombre}"
               loading="lazy"
               onerror="this.src='${PLACEHOLDER}'" />
          <span class="product-badge">${tipoLabel}</span>
          ${agotado ? `<div class="badge-agotado">Agotado</div>` : ""}
        </div>

        <!-- Info -->
        <div class="product-body">
          <span class="product-brand">${marcaLabel}</span>
          <h3 class="product-name">${p.nombre}</h3>
          <span class="product-type">${tipoLabel}</span>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <span class="product-price">$${p.precio}</span>
            ${stockHtml}
          </div>
        </div>

        <!-- Botones -->
        <div class="product-actions">
          <button class="btn-add" data-id="${p.id}"
                  ${agotado ? "disabled" : ""}
                  onclick="agregarAlCarrito(${p.id})">
            <i class="fas fa-plus"></i>
            ${agotado ? "Sin stock" : "Agregar al pedido"}
          </button>
          <div class="btn-social-row">
            <a class="btn-social" href="${urlWa}" target="_blank" rel="noopener"
               title="Consultar por WhatsApp">
              <i class="bi bi-whatsapp"></i> WhatsApp
            </a>
            <a class="btn-social" href="${urlIg}" target="_blank" rel="noopener"
               title="Consultar por Instagram">
              <i class="bi bi-instagram"></i> Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}


// --- Renderizar la grilla de productos ---
function renderProductos() {
  const q = busqueda.trim().toLowerCase();

  // Filtrar por categoría/marca/búsqueda
  const filtrados = PRODUCTOS.filter(p => {
    const matchFiltro = filtroActivo === "todos"
      || p.tipo  === filtroActivo
      || p.marca === filtroActivo;
    const matchBusqueda = !q
      || p.nombre.toLowerCase().includes(q)
      || p.desc.toLowerCase().includes(q)
      || (MARCAS_LABEL[p.marca] || p.marca).toLowerCase().includes(q)
      || (TIPOS_LABEL[p.tipo]   || p.tipo).toLowerCase().includes(q);
    return matchFiltro && matchBusqueda;
  });

  const grid = document.getElementById("productsGrid");
  const noRes = document.getElementById("noResults");
  const count = document.getElementById("resultsCount");

  grid.innerHTML = filtrados.map(buildCard).join("");
  count.textContent = filtrados.length === 1
    ? "1 producto encontrado"
    : `${filtrados.length} productos encontrados`;

  noRes.style.display = filtrados.length === 0 ? "block" : "none";
}


// --- Agregar producto al carrito ---
function agregarAlCarrito(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p || p.stock === 0) return;

  // Si ya está en el carrito, no duplicar (puedes cambiar esto a acumular cantidad)
  if (!carrito.find(x => x.id === id)) {
    carrito.push({ id: p.id, nombre: p.nombre, marca: MARCAS_LABEL[p.marca] || p.marca,
                   precio: p.precio, imagen: p.imagen });
  }
  actualizarCarrito();
  abrirCarrito();
}


// --- Actualizar UI del carrito ---
function actualizarCarrito() {
  const body   = document.getElementById("cartBody");
  const footer = document.getElementById("cartFooter");
  const empty  = document.getElementById("cartEmpty");
  const count  = document.getElementById("cartCount");
  const total  = document.getElementById("cartTotal");
  const fab    = document.getElementById("cartFab");

  // Badge del FAB
  if (carrito.length > 0) {
    count.style.display = "flex";
    count.textContent = carrito.length;
  } else {
    count.style.display = "none";
  }

  if (carrito.length === 0) {
    empty.style.display = "block";
    footer.style.display = "none";
    // Limpiar ítems anteriores (excepto el empty msg)
    body.querySelectorAll(".cart-item").forEach(el => el.remove());
    return;
  }

  empty.style.display = "none";
  footer.style.display = "flex";

  // Renderizar ítems
  body.querySelectorAll(".cart-item").forEach(el => el.remove());
  const frag = document.createDocumentFragment();
  carrito.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.dataset.id = item.id;
    div.innerHTML = `
      <img src="${item.imagen || PLACEHOLDER}" alt="${item.nombre}"
           onerror="this.src='${PLACEHOLDER}'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-brand">${item.marca}</div>
        <div class="cart-item-price">$${item.precio}</div>
      </div>
      <button class="cart-item-remove" onclick="quitarDelCarrito(${item.id})"
              aria-label="Quitar">
        <i class="fas fa-xmark"></i>
      </button>
    `;
    frag.appendChild(div);
  });
  body.appendChild(frag);

  // Total
  const sum = carrito.reduce((s, x) => s + x.precio, 0);
  total.textContent = `$${sum}`;

  // Generar mensaje de WhatsApp con el pedido completo
  const lista = carrito.map(x => `• ${x.nombre} (${x.marca}) – $${x.precio}`).join("\n");
  const msg = encodeURIComponent(
    `Hola, me interesa hacer un pedido de los siguientes productos:\n\n${lista}\n\n¿Siguen disponibles?`
  );
  document.getElementById("btnSendWa").href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
}


// --- Quitar un producto del carrito ---
function quitarDelCarrito(id) {
  carrito = carrito.filter(x => x.id !== id);
  actualizarCarrito();
}


// --- Vaciar el carrito ---
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}


// --- Abrir / cerrar el panel del carrito ---
function abrirCarrito() {
  document.getElementById("cartPanel").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function cerrarCarrito() {
  document.getElementById("cartPanel").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener("DOMContentLoaded", () => {

  // Renderizar chips y productos
  renderChips();
  renderProductos();

  // Buscador
  document.getElementById("searchInput").addEventListener("input", e => {
    busqueda = e.target.value;
    renderProductos();
  });

  // Abrir/cerrar carrito
  document.getElementById("cartFab").addEventListener("click", abrirCarrito);
  document.getElementById("closeCart").addEventListener("click", cerrarCarrito);
  document.getElementById("cartOverlay").addEventListener("click", cerrarCarrito);
  document.getElementById("clearCart").addEventListener("click", vaciarCarrito);

  // Links del menú navbar (filtrar por categoría/marca)
  document.querySelectorAll("[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      filtroActivo = link.dataset.filter;
      renderChips();
      renderProductos();
      // Scroll suave a los productos
      document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
    });
  });

});
