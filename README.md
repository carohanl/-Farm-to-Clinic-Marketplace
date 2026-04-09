# -Farm-to-Clinic-Marketplace

# ⚕ Equine-Tech — Farm-to-Clinic Veterinary Marketplace

> A responsive, multi-page veterinary e-commerce prototype with AI Visual Triage, bulk ordering, and INR payments.

---

## 📁 Project Structure

```
equine-tech/
├── index.html     → All pages (Home, Products, Diagnostic, Login, Payment)
├── style.css      → Full stylesheet (Deep Navy · Clinical White · Emerald Green)
├── app.js         → Product data, cart logic, AI triage, chat assistant
└── README.md      → This file
```

---

## 🚀 Quick Start

No server, no build step, no dependencies to install.

1. Download all four files into the **same folder**
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
3. That's it — the full site runs locally

---

## 🌐 Pages & Navigation

| Page | How to reach it | Description |
|---|---|---|
| **Home** | Default / Logo click | Hero, category tiles, Visual Triage Hub, Featured Products |
| **Products** | Nav → "All Products" | Full catalogue with filters and sorting |
| **Category** | Nav links or category tiles | Pre-filtered product view |
| **Login** | Header → "Pro-Clinic Login" | Vet login and clinic registration |
| **Payment** | Cart → "Proceed to Checkout" | INR checkout with UPI / Card / Net Banking / COD |
| **AI Triage** | "Visual AI" button or Triage Hub | Photo upload + damage assessment |

---

## ✨ Key Features

### 1. Amazon-Style Header
- **Search bar** with category selector — press Enter or click the search icon
- **Visual AI button** — opens the triage upload section
- **Pro-Clinic Login** — demo login/register with Vet License field
- **Bulk Cart** — live item count badge, slide-out sidebar

### 2. Visual Triage Hub (AI Diagnostic Engine)
Upload a photo or describe a condition to trigger the damage assessment:

| Input | Output |
|---|---|
| Photo upload (JPG/PNG/HEIC) | Random scenario analysis (simulated AI) |
| Text description | Keyword-matched injury assessment |
| Quick scenario buttons | Instant pre-set analysis |

**Assessment output includes:**
- Injury severity rating
- Estimated recovery/repair cost in ₹ INR
- Treatment timeline
- Vet consultation urgency level
- Recommended medical SKUs with Add-to-Cart

**Supported scenarios:** Wound/Laceration · Fracture/Splint · Infection/Fever · Colic/Digestive · Broken Fence (structural)

### 3. Product Catalogue — 31 SKUs across 6 categories

| Category | Products | Animals |
|---|---|---|
| Wound Care | 6 | Equine, Bovine, Canine, Feline |
| Supplements | 6 | Equine, Bovine, Canine |
| Diagnostics | 4 | All species |
| Livestock | 6 | Bovine, Equine |
| Pets | 6 | Canine, Feline |
| Equipment | 3 | Multi-species |

**Filter options:** Category · Price range (₹0–₹10,000+) · Animal type · In-stock only  
**Sort options:** Featured · Price (low→high / high→low) · Name A–Z · Top Rated

### 4. Shopping Cart
- Slide-out sidebar with quantity controls (+/−)
- Live subtotal and GST (18%) calculation in ₹ INR
- Remove individual items
- Persists across page navigation within the session

### 5. Payment Page (Indian Rupees — INR)
| Method | Details |
|---|---|
| **UPI** | GPay, PhonePe, Paytm — enter UPI ID |
| **Credit / Debit Card** | Visa, Mastercard, RuPay — auto-formats card number |
| **Net Banking** | SBI, HDFC, ICICI, Axis, Kotak, BoB, PNB |
| **Cash on Delivery** | Available on orders above ₹500 |

All totals display with 18% GST and free delivery. Razorpay SSL badge shown.

### 6. VetAI Chat Assistant (Floating)
Click **"Ask AI Vet"** (bottom-right) to open the chat. It recognizes condition keywords and returns product recommendations with inline Add-to-Cart buttons.

**Recognized keywords:**

| Keywords | Recommended products |
|---|---|
| hock, graze, scrape, abrasion | Wound care + leg wrap |
| colic, stomach, gut, digestive | Colic drench + probiotic |
| fever, temperature, lethargic | Thermometer + B-complex |
| wound, cut, laceration, bleeding | Full wound care protocol |
| joint, lameness, lame, limping | Joint supplement + wraps |
| infect, swollen, pus, abscess | Antiseptic + antibiotic support |
| dog, canine, puppy | Canine first aid + vaccines |
| cat, feline, kitten | Feline dental + anti-rabies |
| cow, cattle, calf, bovine | FMD vaccine + deworming |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary (Navy) | `#0a1628` |
| Accent (Emerald) | `#059669` |
| Emerald Light | `#10b981` |
| Clinical White | `#f8fafc` |
| Display font | DM Serif Display (Google Fonts) |
| Body font | DM Sans (Google Fonts) |

> Fonts load from Google Fonts CDN. Works offline with system serif/sans fallback.

---

## 🔧 Customisation Guide

### Add a new product
Open `app.js` and add an entry to the `PRODUCTS` array:

```js
{
  id: 32,
  name: "Your Product Name",
  category: "Wound Care",          // must match existing category
  animal: ["equine", "canine"],     // equine | bovine | canine | feline | avian
  price: 1500,                      // in INR, no commas
  unit: "per kit",
  bulkPrice: "₹1,200 (bulk 10+)",  // or null
  icon: "🩺",                       // emoji shown as product image
  badge: "bestseller",              // bestseller | bulk | new | null
  rating: 4.7,
  reviews: 120,
  sku: "YOUR-SKU-032",
  stock: 50,
  inStock: true
}
```

### Add a new triage scenario
In `app.js`, add to the `SCENARIOS` object:

```js
myScenario: {
  title: "Condition Title",
  desc: "Brief description of the detected condition.",
  severity: "Moderate",
  cost: "₹2,000 – ₹5,000",
  timeline: "7–14 days",
  vet: "Recommended",
  kits: [1, 2, 4]   // product IDs to recommend
}
```

Then add a quick button in `index.html`:
```html
<button class="quick-btn" onclick="runScenario('myScenario')">My Scenario</button>
```

### Change the colour palette
All colours are CSS variables in `style.css` under `:root`. Change `--navy`, `--emerald`, and `--emerald-light` to retheme the entire site.

---

## 🧩 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, single-file multi-page) |
| Styling | CSS3 with custom properties, CSS Grid, Flexbox |
| Logic | Vanilla JavaScript (ES6+) — zero dependencies |
| Fonts | Google Fonts (DM Serif Display + DM Sans) |
| Icons | Emoji + inline SVG |
| Payments | Demo UI only — integrate Razorpay or PayU for live payments |

---

## 🔌 Production Integration Roadmap

To turn this prototype into a live application:

### Payment Gateway
```
Razorpay (recommended for India)
→ Replace handlePayment() in app.js with Razorpay checkout SDK
→ https://razorpay.com/docs/payments/payment-gateway/web-integration/
```

### E-commerce Backend
```
Option A — Shopify
  → Export product data to Shopify CSV
  → Use Shopify Buy SDK to replace cart logic

Option B — WooCommerce (WordPress)
  → Use WooCommerce REST API for products and orders

Option C — Custom backend
  → Node.js / Django REST API + MongoDB or PostgreSQL
  → JWT auth for Pro-Clinic accounts
```

### Real AI Vision (replacing simulated triage)
```
Google Cloud Vision API  → injury/damage detection
OR
OpenAI GPT-4o            → multimodal image analysis
OR
Custom model             → trained on equine/veterinary datasets (TensorFlow / PyTorch)
```

### Database
```
Products   → PostgreSQL / MongoDB
Orders     → PostgreSQL with INR currency fields
Users      → Auth via Firebase or Supabase (includes Vet License field)
```

---

## 📋 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Responsive |

---

## 📄 License

This is a prototype/demo project. All product names, SKUs, and prices are fictional and for demonstration purposes only. Not intended for clinical use without proper veterinary validation.

---

*Built with HTML · CSS · JavaScript — Equine-Tech Pvt. Ltd. © 2025*
