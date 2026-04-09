/* ═══════════════════════════════════════════════════
   EQUINE-TECH — app.js
   Full product data, cart, AI triage, chat logic
   ═══════════════════════════════════════════════════ */

// ── PRODUCT DATABASE ──────────────────────────────
const PRODUCTS = [
  // WOUND CARE
  { id: 1,  name: "Equine Wound Care Kit — Complete", category: "Wound Care", animal: ["equine"], price: 1890, unit: "per kit", bulkPrice: "₹1,512 / kit (bulk 10+)", icon: "🩹", badge: "bestseller", rating: 4.8, reviews: 234, sku: "EQ-WC-001", stock: 48, inStock: true },
  { id: 2,  name: "Veterinary Antiseptic Solution 500ml", category: "Wound Care", animal: ["equine","bovine","canine","feline"], price: 340, unit: "per bottle", bulkPrice: "₹272 / bottle (bulk 24+)", icon: "🧴", badge: null, rating: 4.6, reviews: 189, sku: "VET-AS-002", stock: 120, inStock: true },
  { id: 3,  name: "Sterile Wound Dressing Pack — Large", category: "Wound Care", animal: ["equine","bovine"], price: 520, unit: "pack of 10", bulkPrice: "₹416 / pack (bulk 20+)", icon: "🏥", badge: "new", rating: 4.5, reviews: 67, sku: "WD-LG-003", stock: 5, inStock: true },
  { id: 4,  name: "Leg Wrap System — 4-Layer Equine", category: "Wound Care", animal: ["equine"], price: 2450, unit: "set of 4", bulkPrice: "₹1,960 / set (bulk 5+)", icon: "🦵", badge: "bestseller", rating: 4.9, reviews: 312, sku: "LW-4L-004", stock: 32, inStock: true },
  { id: 5,  name: "Antimicrobial Wound Spray 200ml", category: "Wound Care", animal: ["equine","canine","feline","bovine"], price: 480, unit: "per bottle", bulkPrice: "₹384 (bulk 12+)", icon: "💊", badge: null, rating: 4.7, reviews: 145, sku: "AW-SP-005", stock: 88, inStock: true },
  { id: 6,  name: "Suture Kit — Veterinary Grade", category: "Wound Care", animal: ["equine","bovine"], price: 1250, unit: "per kit", bulkPrice: "₹1,000 (bulk 10+)", icon: "🧵", badge: null, rating: 4.6, reviews: 92, sku: "SUT-VG-006", stock: 27, inStock: true },

  // SUPPLEMENTS
  { id: 7,  name: "Equine Joint Support — 5kg Tub", category: "Supplements", animal: ["equine"], price: 3850, unit: "5kg tub", bulkPrice: "₹3,080 / tub (bulk 6+)", icon: "🧪", badge: "bulk", rating: 4.8, reviews: 401, sku: "JS-EQ-007", stock: 22, inStock: true },
  { id: 8,  name: "Vitamin B-Complex Injection 100ml", category: "Supplements", animal: ["equine","bovine","canine"], price: 680, unit: "per vial", bulkPrice: "₹544 / vial (bulk 12+)", icon: "💉", badge: null, rating: 4.5, reviews: 178, sku: "VB-INJ-008", stock: 64, inStock: true },
  { id: 9,  name: "Electrolyte Powder — Cattle 10kg", category: "Supplements", animal: ["bovine"], price: 2200, unit: "10kg bag", bulkPrice: "₹1,760 (bulk 5+)", icon: "⚡", badge: "bulk", rating: 4.7, reviews: 256, sku: "EL-BV-009", stock: 35, inStock: true },
  { id: 10, name: "Probiotic Paste — Equine 60g Tube", category: "Supplements", animal: ["equine"], price: 890, unit: "per tube", bulkPrice: "₹712 (bulk 24+)", icon: "🦠", badge: null, rating: 4.6, reviews: 134, sku: "PB-EQ-010", stock: 78, inStock: true },
  { id: 11, name: "Calcium Borogluconas 500ml IV", category: "Supplements", animal: ["bovine","equine"], price: 420, unit: "per bottle", bulkPrice: "₹336 (bulk 24+)", icon: "🩸", badge: "bestseller", rating: 4.9, reviews: 387, sku: "CA-BO-011", stock: 150, inStock: true },
  { id: 12, name: "Multivitamin Bolus — Cattle Pack 50", category: "Supplements", animal: ["bovine"], price: 1650, unit: "pack of 50", bulkPrice: "₹1,320 (bulk 10+)", icon: "💊", badge: "bulk", rating: 4.4, reviews: 89, sku: "MV-BL-012", stock: 41, inStock: true },

  // DIAGNOSTICS
  { id: 13, name: "Digital Veterinary Thermometer", category: "Diagnostics", animal: ["equine","bovine","canine","feline"], price: 750, unit: "per unit", bulkPrice: "₹600 (bulk 10+)", icon: "🌡️", badge: null, rating: 4.7, reviews: 223, sku: "DT-VET-013", stock: 95, inStock: true },
  { id: 14, name: "Stethoscope — Dual Head Veterinary", category: "Diagnostics", animal: ["equine","bovine","canine","feline"], price: 3200, unit: "per unit", bulkPrice: "₹2,560 (bulk 5+)", icon: "🩺", badge: null, rating: 4.8, reviews: 167, sku: "ST-DH-014", stock: 18, inStock: true },
  { id: 15, name: "Blood Glucose Meter — Veterinary", category: "Diagnostics", animal: ["canine","feline","equine"], price: 4800, unit: "starter kit", bulkPrice: "₹3,840 (bulk 3+)", icon: "🔬", badge: null, rating: 4.6, reviews: 94, sku: "BG-MET-015", stock: 12, inStock: true },
  { id: 16, name: "Rapid Fever Strip Packs x50", category: "Diagnostics", animal: ["bovine","equine"], price: 650, unit: "pack of 50", bulkPrice: "₹520 (bulk 20+)", icon: "📊", badge: "new", rating: 4.3, reviews: 45, sku: "RF-ST-016", stock: 3, inStock: true },

  // LIVESTOCK
  { id: 17, name: "Foot-and-Mouth Vaccine 50-dose", category: "Livestock", animal: ["bovine"], price: 2800, unit: "50-dose vial", bulkPrice: "₹2,240 (bulk 10+)", icon: "💉", badge: "bestseller", rating: 4.9, reviews: 567, sku: "FMD-VX-017", stock: 60, inStock: true },
  { id: 18, name: "Deworming Tablets — Cattle x100", category: "Livestock", animal: ["bovine"], price: 980, unit: "pack of 100", bulkPrice: "₹784 (bulk 20+)", icon: "🔬", badge: "bulk", rating: 4.7, reviews: 321, sku: "DW-CT-018", stock: 200, inStock: true },
  { id: 19, name: "Oxytocin Injection 10ml", category: "Livestock", animal: ["bovine","equine"], price: 180, unit: "per vial", bulkPrice: "₹144 (bulk 50+)", icon: "💉", badge: null, rating: 4.8, reviews: 412, sku: "OX-INJ-019", stock: 300, inStock: true },
  { id: 20, name: "Teat Dip Solution 5L Concentrate", category: "Livestock", animal: ["bovine"], price: 1850, unit: "5L can", bulkPrice: "₹1,480 (bulk 10+)", icon: "🐄", badge: "bulk", rating: 4.6, reviews: 189, sku: "TD-BV-020", stock: 44, inStock: true },
  { id: 21, name: "Anti-Mastitis Intramammary 12-pack", category: "Livestock", animal: ["bovine"], price: 2100, unit: "pack of 12", bulkPrice: "₹1,680 (bulk 5+)", icon: "🩺", badge: "bestseller", rating: 4.8, reviews: 298, sku: "AM-IM-021", stock: 55, inStock: true },
  { id: 22, name: "Colic Drench for Horses 1L", category: "Livestock", animal: ["equine"], price: 1350, unit: "1L bottle", bulkPrice: "₹1,080 (bulk 12+)", icon: "🐎", badge: null, rating: 4.7, reviews: 143, sku: "CD-EQ-022", stock: 28, inStock: true },

  // PETS
  { id: 23, name: "Canine First Aid Complete Kit", category: "Pets", animal: ["canine"], price: 1480, unit: "per kit", bulkPrice: "₹1,184 (bulk 5+)", icon: "🐕", badge: "bestseller", rating: 4.8, reviews: 445, sku: "FA-CA-023", stock: 67, inStock: true },
  { id: 24, name: "Flea & Tick Spot-On — Large Dog 3pk", category: "Pets", animal: ["canine"], price: 880, unit: "pack of 3", bulkPrice: "₹704 (bulk 12+)", icon: "🐾", badge: null, rating: 4.6, reviews: 312, sku: "FT-LD-024", stock: 145, inStock: true },
  { id: 25, name: "Feline Dental Hygiene Kit", category: "Pets", animal: ["feline"], price: 620, unit: "per kit", bulkPrice: "₹496 (bulk 10+)", icon: "🐈", badge: "new", rating: 4.4, reviews: 78, sku: "DH-FE-025", stock: 34, inStock: true },
  { id: 26, name: "Puppy Vaccination Kit — 5-in-1", category: "Pets", animal: ["canine"], price: 1900, unit: "10-dose kit", bulkPrice: "₹1,520 (bulk 5+)", icon: "💉", badge: "bestseller", rating: 4.9, reviews: 523, sku: "VX-PU-026", stock: 82, inStock: true },
  { id: 27, name: "Anti-Rabies Vaccine — 10 dose", category: "Pets", animal: ["canine","feline"], price: 2200, unit: "10-dose vial", bulkPrice: "₹1,760 (bulk 5+)", icon: "🦠", badge: null, rating: 4.9, reviews: 634, sku: "RB-VX-027", stock: 95, inStock: true },
  { id: 28, name: "Dog Ear Cleaner Solution 100ml", category: "Pets", animal: ["canine"], price: 320, unit: "per bottle", bulkPrice: "₹256 (bulk 24+)", icon: "🧴", badge: null, rating: 4.5, reviews: 201, sku: "EC-CA-028", stock: 110, inStock: true },

  // EQUIPMENT
  { id: 29, name: "Portable Ultrasound Scanner — Vet", category: "Equipment", animal: ["equine","bovine"], price: 48500, unit: "per unit", bulkPrice: null, icon: "📡", badge: null, rating: 4.8, reviews: 34, sku: "US-VT-029", stock: 7, inStock: true },
  { id: 30, name: "Surgical Instrument Tray — Vet Grade", category: "Equipment", animal: ["equine","bovine","canine","feline"], price: 7200, unit: "per tray", bulkPrice: "₹5,760 (bulk 3+)", icon: "🔧", badge: null, rating: 4.7, reviews: 56, sku: "SI-TR-030", stock: 14, inStock: true },
  { id: 31, name: "Automatic Syringe Gun 20ml", category: "Equipment", animal: ["bovine","equine"], price: 2800, unit: "per unit", bulkPrice: "₹2,240 (bulk 5+)", icon: "💉", badge: null, rating: 4.6, reviews: 123, sku: "SG-20-031", stock: 38, inStock: true },
];

// ── CART STATE ────────────────────────────────────
let cart = [];

// ── PAGE ROUTING ──────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'products') renderProducts(PRODUCTS);
  if (page === 'payment') renderCheckout();
}

function openVisualTriage() {
  showPage('home');
  setTimeout(() => {
    document.getElementById('triageSection').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// ── SEARCH ────────────────────────────────────────
function handleSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.sku.toLowerCase().includes(q) ||
    p.animal.some(a => a.includes(q))
  );
  showPage('products');
  document.getElementById('productsPageTitle').textContent = `Search: "${q}"`;
  document.getElementById('productsPageSub').textContent = `${results.length} results found`;
  renderProducts(results);
}

// ── PRODUCT RENDERING ─────────────────────────────
function renderProducts(products, containerId = 'allProductsGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  if (products.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray-500);padding:32px;text-align:center;grid-column:1/-1;">No products found matching your filters.</p>';
    document.getElementById('productCount').textContent = '0 products found';
    return;
  }
  document.getElementById('productCount').textContent = `Showing ${products.length} products`;
  grid.innerHTML = products.map(p => productCard(p)).join('');
}

function renderFeatured() {
  const featured = PRODUCTS.filter(p => p.badge === 'bestseller').slice(0, 8);
  const grid = document.getElementById('featuredGrid');
  if (grid) grid.innerHTML = featured.map(p => productCard(p)).join('');
}

function productCard(p) {
  const badgeHtml = p.badge ? `<div class="product-badge ${p.badge !== 'bestseller' ? p.badge : ''}">${p.badge === 'bestseller' ? 'Best Seller' : p.badge === 'bulk' ? 'Bulk Deal' : 'New'}</div>` : '';
  const stockHtml = p.stock < 10 ? `<div class="product-stock-low">Only ${p.stock} left!</div>` : '';
  const bulkHtml = p.bulkPrice ? `<div class="product-bulk">🏷 ${p.bulkPrice}</div>` : '';
  return `
    <div class="product-card">
      <div class="product-img">
        <span>${p.icon}</span>
        ${badgeHtml}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sku">SKU: ${p.sku} | ${p.animal.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(', ')}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="product-unit">${p.unit}</span>
        </div>
        ${bulkHtml}
        ${stockHtml}
      </div>
      <div class="product-actions">
        <button class="btn-add-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        <button class="btn-wishlist" title="Wishlist">♡</button>
      </div>
    </div>
  `;
}

// ── FILTER / SORT ─────────────────────────────────
function filterCategory(cat) {
  showPage('products');
  document.getElementById('productsPageTitle').textContent = cat;
  document.getElementById('productsPageSub').textContent = `All ${cat} products`;
  const filtered = PRODUCTS.filter(p => p.category === cat);
  renderProducts(filtered);
}

function applyFilters() {
  let filtered = [...PRODUCTS];
  const checked = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(i => i.value);
  if (checked.length > 0) filtered = filtered.filter(p => checked.includes(p.category));
  const maxPrice = parseInt(document.getElementById('priceRange').value);
  filtered = filtered.filter(p => p.price <= maxPrice);
  const animalChecked = Array.from(document.querySelectorAll('.filter-options input[value="equine"], .filter-options input[value="bovine"], .filter-options input[value="canine"], .filter-options input[value="feline"], .filter-options input[value="avian"]').forEach ? [] : []);
  if (document.getElementById('inStockOnly').checked) filtered = filtered.filter(p => p.inStock);
  const sort = document.getElementById('sortBy').value;
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  renderProducts(filtered);
}

function updatePriceLabel(val) {
  document.getElementById('priceLabel').textContent = parseInt(val).toLocaleString('en-IN');
}

function clearFilters() {
  document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(i => i.checked = false);
  document.getElementById('priceRange').value = 10000;
  document.getElementById('priceLabel').textContent = '10,000';
  document.getElementById('sortBy').value = 'default';
  renderProducts(PRODUCTS);
}

// ── CART ──────────────────────────────────────────
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  updateCartUI();
  showToast(`✓ ${product.name.slice(0, 30)}... added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = Math.round(total * 0.18);
  const totalWithGst = total + gst;
  const count = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById('cartBadge').textContent = count;
  document.getElementById('cartCount').textContent = `${count} item${count !== 1 ? 's' : ''}`;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    footerEl.style.display = 'none';
  } else {
    footerEl.style.display = 'block';
    document.getElementById('cartTotal').textContent = `₹${totalWithGst.toLocaleString('en-IN')}`;
    document.getElementById('cartGstAmount').textContent = `₹${gst.toLocaleString('en-IN')}`;
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-img">${i.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-price">₹${i.price.toLocaleString('en-IN')} / ${i.unit}</div>
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeQty(${i.id}, -1)">−</button>
            <span class="qty-num">${i.qty}</span>
            <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
          </div>
        </div>
        <div>
          <div class="cart-item-total">₹${(i.price * i.qty).toLocaleString('en-IN')}</div>
          <button class="cart-remove" onclick="removeFromCart(${i.id})">✕</button>
        </div>
      </div>
    `).join('');
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function goToCheckout() {
  toggleCart();
  showPage('payment');
}

// ── AI TRIAGE ─────────────────────────────────────
const SCENARIOS = {
  wound: {
    title: "Wound / Laceration Detected",
    desc: "Estimated superficial to moderate laceration on equine/bovine lower limb. Immediate wound care and infection prevention recommended.",
    severity: "Moderate", cost: "₹3,800 – ₹6,500", timeline: "14–21 days", vet: "Recommended",
    kits: [1, 4, 2, 5, 6, 8]
  },
  fracture: {
    title: "Fracture / Splint Injury Detected",
    desc: "Suspected metacarpal stress fracture or severe tendon strain. Immediate immobilization and anti-inflammatory treatment required.",
    severity: "Severe", cost: "₹12,000 – ₹28,000", timeline: "60–90 days", vet: "Urgent",
    kits: [4, 14, 30, 8, 7, 13]
  },
  infection: {
    title: "Infection / Systemic Fever",
    desc: "Signs of bacterial or viral infection with elevated temperature. Antibiotic and supportive therapy protocol recommended.",
    severity: "Moderate–High", cost: "₹2,200 – ₹5,800", timeline: "7–14 days", vet: "Recommended",
    kits: [13, 8, 11, 2, 10, 16]
  },
  colic: {
    title: "Colic / Gastrointestinal Distress",
    desc: "Symptoms consistent with large intestine displacement or spasmodic colic. Immediate pain management and gut motility support.",
    severity: "High", cost: "₹4,500 – ₹15,000", timeline: "3–14 days", vet: "Urgent",
    kits: [22, 10, 8, 13, 11, 7]
  },
  fence: {
    title: "Structural Damage — Broken Fence",
    desc: "Perimeter fencing damage detected. Multiple lacerations possible from wire contact. Immediate wound inspection and treatment of exposed animals required.",
    severity: "Environmental Risk", cost: "₹8,000 – ₹22,000", timeline: "Immediate action", vet: "Field Visit",
    kits: [1, 4, 2, 5, 16, 3]
  }
};

function runScenario(type) {
  const s = SCENARIOS[type];
  if (!s) return;
  showAIResult(s);
}

function analyzeText() {
  const text = document.getElementById('triageText').value.trim().toLowerCase();
  if (!text) { showToast('Please describe the condition first'); return; }

  let scenario = 'wound';
  if (text.includes('fractur') || text.includes('broken') || text.includes('splint') || text.includes('bone')) scenario = 'fracture';
  else if (text.includes('fever') || text.includes('infect') || text.includes('swoll') || text.includes('pus')) scenario = 'infection';
  else if (text.includes('colic') || text.includes('digest') || text.includes('stomach') || text.includes('gut')) scenario = 'colic';
  else if (text.includes('fence') || text.includes('wire') || text.includes('structure')) scenario = 'fence';

  showTriageLoading(() => showAIResult(SCENARIOS[scenario]));
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const zone = document.getElementById('uploadZone');
  zone.style.borderColor = 'var(--emerald-light)';
  zone.innerHTML = `
    <div class="upload-icon" style="color:var(--emerald-light)">📸</div>
    <p class="upload-title" style="color:white">${file.name}</p>
    <p class="upload-hint">Photo uploaded — analyzing...</p>
  `;
  const scenarios = Object.keys(SCENARIOS);
  const random = scenarios[Math.floor(Math.random() * scenarios.length)];
  showTriageLoading(() => showAIResult(SCENARIOS[random]));
}

function handleDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) {
    const input = document.getElementById('photoInput');
    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    handlePhotoUpload({ target: { files: [file] } });
  }
}

function showTriageLoading(callback) {
  const zone = document.getElementById('uploadZone');
  zone.innerHTML = `
    <div class="upload-icon"><div class="ai-pulse" style="margin:0 auto"></div></div>
    <p class="upload-title" style="color:white;margin-top:12px">AI Analyzing...</p>
    <p class="upload-hint">Running damage assessment protocol</p>
  `;
  setTimeout(callback, 1800);
}

function showAIResult(s) {
  document.getElementById('resultTitle').textContent = s.title;
  document.getElementById('resultDesc').textContent = s.desc;
  document.getElementById('resultSeverity').textContent = s.severity;
  document.getElementById('resultCost').textContent = s.cost;
  document.getElementById('resultTimeline').textContent = s.timeline;
  document.getElementById('resultVet').textContent = s.vet;

  const kitGrid = document.getElementById('kitGrid');
  const kitProducts = s.kits.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  kitGrid.innerHTML = kitProducts.map(p => `
    <div class="kit-card" onclick="addToCart(${p.id})">
      <div class="kit-card-icon">${p.icon}</div>
      <div class="kit-card-info">
        <div class="kit-card-name">${p.name}</div>
        <div class="kit-card-sku">SKU: ${p.sku}</div>
      </div>
      <div>
        <div class="kit-card-price">₹${p.price.toLocaleString('en-IN')}</div>
        <button class="kit-add-btn">+ Cart</button>
      </div>
    </div>
  `).join('');

  const section = document.getElementById('aiResultSection');
  section.style.display = 'block';
  setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function addAllToCart() {
  const kitGrid = document.getElementById('kitGrid');
  const buttons = kitGrid.querySelectorAll('.kit-card');
  let count = 0;
  buttons.forEach(card => {
    const onclick = card.getAttribute('onclick');
    const match = onclick && onclick.match(/addToCart\((\d+)\)/);
    if (match) { addToCart(parseInt(match[1])); count++; }
  });
  showToast(`✓ ${count} AI-recommended items added to cart`);
  toggleCart();
}

// ── CHAT ASSISTANT ────────────────────────────────
const CHAT_RESPONSES = {
  default: {
    message: "Based on your description, I recommend the following products:",
    products: [1, 2, 8]
  },
  hock: {
    keywords: ['hock', 'graze', 'scrape', 'abrasion'],
    message: "For a graze on the hock, you'll need: a wound cleaning agent, antiseptic dressing, and a leg wrap to prevent contamination. Here's what I recommend:",
    products: [2, 1, 4, 5]
  },
  colic: {
    keywords: ['colic', 'stomach', 'gut', 'digestive', 'belly'],
    message: "For colic symptoms, immediate attention is needed. Here are the key products:",
    products: [22, 10, 13, 11]
  },
  fever: {
    keywords: ['fever', 'temperature', 'hot', 'lethargic', 'sick'],
    message: "Elevated temperature requires prompt action. I recommend these products for managing fever:",
    products: [13, 8, 11, 16]
  },
  wound: {
    keywords: ['wound', 'cut', 'laceration', 'bleeding', 'injury'],
    message: "For wound management, here's a complete treatment protocol:",
    products: [1, 2, 4, 5, 3]
  },
  joint: {
    keywords: ['joint', 'lameness', 'lame', 'limping', 'stiff'],
    message: "For joint issues and lameness, I recommend this protocol:",
    products: [7, 4, 14, 8]
  },
  infection: {
    keywords: ['infect', 'swollen', 'discharge', 'pus', 'abscess'],
    message: "Signs of infection require antibiotic and wound care support. Recommended:",
    products: [2, 5, 8, 16, 1]
  },
  dog: {
    keywords: ['dog', 'canine', 'puppy', 'pup'],
    message: "For canine health issues, here are my recommendations:",
    products: [23, 24, 26, 28]
  },
  cat: {
    keywords: ['cat', 'feline', 'kitten'],
    message: "For feline care, I recommend:",
    products: [25, 27]
  },
  cattle: {
    keywords: ['cow', 'cattle', 'calf', 'bovine', 'bull'],
    message: "For bovine health management, here are the recommended products:",
    products: [17, 18, 20, 21, 9]
  }
};

let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatWindow').classList.toggle('open', chatOpen);
}

function sendQuickMsg(text) {
  document.getElementById('chatInput').value = text;
  sendChatMsg();
}

function sendChatMsg() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  appendChatMsg(text, 'user');
  input.value = '';

  const typing = appendTyping();
  setTimeout(() => {
    typing.remove();
    const response = getChatResponse(text.toLowerCase());
    appendChatMsg(response.message, 'bot');
    if (response.products && response.products.length > 0) {
      appendProductRecs(response.products);
    }
  }, 1200 + Math.random() * 800);
}

function getChatResponse(text) {
  for (const [key, val] of Object.entries(CHAT_RESPONSES)) {
    if (key === 'default') continue;
    if (val.keywords && val.keywords.some(k => text.includes(k))) {
      return val;
    }
  }
  return CHAT_RESPONSES.default;
}

function appendChatMsg(text, type) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.innerHTML = `<div class="msg-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function appendTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function appendProductRecs(productIds) {
  const msgs = document.getElementById('chatMessages');
  const products = productIds.slice(0, 3).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `
    <div class="msg-bubble" style="padding:10px;max-width:100%;background:transparent;padding:0">
      ${products.map(p => `
        <div style="display:flex;align-items:center;gap:8px;background:var(--gray-100);border-radius:10px;padding:9px 12px;margin-bottom:6px;cursor:pointer" onclick="addToCart(${p.id})">
          <span style="font-size:20px">${p.icon}</span>
          <div style="flex:1">
            <div style="font-size:12px;font-weight:500;color:var(--gray-900);line-height:1.3">${p.name}</div>
            <div style="font-size:11px;color:var(--emerald)">₹${p.price.toLocaleString('en-IN')} · ${p.unit}</div>
          </div>
          <button style="padding:4px 8px;background:var(--emerald);color:white;border:none;border-radius:6px;font-size:11px;cursor:pointer;font-family:inherit">+ Cart</button>
        </div>
      `).join('')}
      <div style="font-size:11px;color:var(--gray-500);margin-top:4px">Click any item to add to cart</div>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// ── AUTH ──────────────────────────────────────────
function switchAuthTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('registerTab').classList.toggle('active', tab === 'register');
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  if (!email || !pass) { showToast('Please fill in all fields'); return; }
  showToast('✓ Login successful — Welcome to Pro-Clinic Portal!');
  setTimeout(() => showPage('home'), 1500);
}

function handleRegister() {
  showToast('✓ Account created! Verification email sent.');
  setTimeout(() => switchAuthTab('login'), 1500);
}

// ── PAYMENT ───────────────────────────────────────
function renderCheckout() {
  const itemsEl = document.getElementById('checkoutItems');
  if (!itemsEl) return;

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p style="color:var(--gray-500);font-size:13px">Your cart is empty. <a href="#" onclick="showPage(\'products\');return false;" style="color:var(--emerald)">Browse products</a></p>';
  } else {
    itemsEl.innerHTML = cart.map(i => `
      <div class="checkout-item">
        <div class="checkout-item-img">${i.icon}</div>
        <div class="checkout-item-name">${i.name} × ${i.qty}</div>
        <div class="checkout-item-price">₹${(i.price * i.qty).toLocaleString('en-IN')}</div>
      </div>
    `).join('');
  }

  document.getElementById('summarySubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('summaryGST').textContent = `₹${gst.toLocaleString('en-IN')}`;
  document.getElementById('summaryTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

function switchPayment(method) {
  ['upi', 'card', 'netbanking', 'cod'].forEach(m => {
    document.getElementById('payment-' + m).style.display = m === method ? 'block' : 'none';
    document.getElementById('pm-' + m).classList.toggle('selected', m === method);
  });
}

function formatCard(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = val.replace(/(.{4})/g, '$1 ').trim();
}

function handlePayment() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalWithGst = Math.round(total * 1.18);
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  showToast(`✓ Order placed! ₹${totalWithGst.toLocaleString('en-IN')} — Confirmation SMS sent`);
  setTimeout(() => {
    cart = [];
    updateCartUI();
    showPage('home');
    showToast('Your order is confirmed! Estimated delivery: 48 hours');
  }, 2000);
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  updateCartUI();
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
  });
});
