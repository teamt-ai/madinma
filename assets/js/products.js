/**
 * MADINMA HAVEN — PRODUCT CATALOG DATA ENGINE & STORAGE MANAGER
 * Manages all products, categories, prices, descriptions, and uploads.
 * Synchronizes with localStorage and provides export/import capabilities.
 */

const DEFAULT_PRODUCTS = [
  // 1. Perfumes
  {
    id: "perfume-1",
    category: "Perfumes",
    title: "24K Pure Gold Eau de Parfum",
    price: 45000,
    description: "100ml rich royal oriental fragrance with sparkling bergamot, golden amber, and deep oud accords. 100% authentic designer bottle.",
    image: "assets/images/fragrances-1.jpg?v=11",
    inStock: true
  },
  {
    id: "perfume-2",
    category: "Perfumes",
    title: "Dior Sauvage Parfum",
    price: 185000,
    description: "Iconic high-concentration parfum featuring radiant Calabrian bergamot, spicy Sichuan pepper, and warm Papua New Guinean vanilla absolute.",
    image: "assets/images/fragrances-2.jpg?v=11",
    inStock: true
  },
  {
    id: "perfume-3",
    category: "Perfumes",
    title: "Club de Nuit Intense Man",
    price: 55000,
    description: "World-renowned Armaf Eau de Toilette with fresh lemon, birch smoke, pineapple, and rich masculine musk base.",
    image: "assets/images/fragrances-3.jpg?v=11",
    inStock: true
  },

  // 2. Body mist
  {
    id: "mist-1",
    category: "Body mist",
    title: "Aventus Solid Perfume & Mist",
    price: 28000,
    description: "Pocket-sized concentrated solid perfume with all-day sillage featuring crisp blackcurrant, Italian bergamot, and smoky birch.",
    image: "assets/images/mists-1.jpg?v=11",
    inStock: true
  },
  {
    id: "mist-2",
    category: "Body mist",
    title: "Jean Miss Homme Trio Collection",
    price: 32000,
    description: "Three-piece artisanal body mist discovery set offering aquatic fresh, spicy woody, and amber evening fragrance profiles.",
    image: "assets/images/mists-2.jpg?v=11",
    inStock: true
  },
  {
    id: "mist-3",
    category: "Body mist",
    title: "Lastar Azure Coastal & Vanilla Sweetheart",
    price: 25000,
    description: "Dual refreshing fragrance mist duo blending fresh marine coastal air with velvety warm Madagascar vanilla.",
    image: "assets/images/mists-3.jpg?v=11",
    inStock: true
  },

  // 3. Deodorant
  {
    id: "deo-1",
    category: "Deodorant",
    title: "Sure Nonstop Protection 72H Invisible Aqua",
    price: 8500,
    description: "72-hour extreme anti-perspirant body spray with MotionSense technology and zero yellow stain formula on white clothing.",
    image: "assets/images/deodorants-1.jpg?v=11",
    inStock: true
  },
  {
    id: "deo-2",
    category: "Deodorant",
    title: "Nivea Dry Comfort 72H Anti-Perspirant",
    price: 7500,
    description: "Dual Active formula with two anti-perspirant actives for tested 72-hour dry feeling and soft floral skin comfort.",
    image: "assets/images/deodorants-2.jpg?v=11",
    inStock: true
  },
  {
    id: "deo-3",
    category: "Deodorant",
    title: "Dove Invisible Dry 48H Floral Touch",
    price: 8000,
    description: "Enriched with 1/4 moisturizing cream with proven zero white marks on 100 garment colors for delicate underarm care.",
    image: "assets/images/deodorants-3.jpg?v=11",
    inStock: true
  },

  // 4. Roll-ons
  {
    id: "rollon-1",
    category: "Roll-ons",
    title: "Nivea Men Dry Impact 72H Anti-Perspirant Roll-On",
    price: 5500,
    description: "Dermatologically approved mineral formula delivering 72-hour non-stop dryness and crisp masculine freshness.",
    image: "assets/images/rollon-1.jpg?v=11",
    inStock: true
  },
  {
    id: "rollon-2",
    category: "Roll-ons",
    title: "24K Pure Gold 48H Roll-On Deodorant",
    price: 6500,
    description: "Luxury perfumed roll-on deodorant infused with the seductive amber-gold scent of 24K Pure Gold.",
    image: "assets/images/rollon-2.jpg?v=11",
    inStock: true
  },
  {
    id: "rollon-3",
    category: "Roll-ons",
    title: "Rexona Men Sport Defence 72H Roll-On",
    price: 5500,
    description: "Motion-activated sweat defense designed for active lifestyles, keeping underarms cool and odorless for up to 72 hours.",
    image: "assets/images/rollon-3.jpg?v=11",
    inStock: true
  },

  // 5. Moisturizer
  {
    id: "moist-1",
    category: "Moisturizer",
    title: "Asnye Men Moisturizer Tight Smooth 70g",
    price: 18000,
    description: "Deep collagen hydrating facial cream formulated to tone, smooth texture, and lock in youthful dermal moisture.",
    image: "assets/images/moisturizer-1.jpg?v=11",
    inStock: true
  },
  {
    id: "moist-2",
    category: "Moisturizer",
    title: "Brmvoz Coconut Oil Moisturizing Cream With Vitamin E",
    price: 16500,
    description: "Extra-nourishing virgin coconut butter enriched with Vitamin E for radiant, deeply hydrated, supple skin.",
    image: "assets/images/moisturizer-2.jpg?v=11",
    inStock: true
  },
  {
    id: "moist-3",
    category: "Moisturizer",
    title: "Veze For Men Moisturizing Lotion",
    price: 15000,
    description: "Lightweight, non-greasy fast-absorbing daily body lotion specially formulated for tropical African weather.",
    image: "assets/images/moisturizer-3.jpg?v=11",
    inStock: true
  },

  // 6. Body scrubs & polishes
  {
    id: "scrub-1",
    category: "Body scrubs & polishes",
    title: "Evolve Organic Beauty Tropical Blossom Body Polish",
    price: 26000,
    description: "Organic sugar and fine Tahitian monoi flower oil polish that gently exfoliates and melts upon contact with water.",
    image: "assets/images/scrubs-1.jpg?v=11",
    inStock: true
  },
  {
    id: "scrub-2",
    category: "Body scrubs & polishes",
    title: "Fresh Brown Sugar Body Polish & Face Wash Trio",
    price: 38000,
    description: "World-famous natural brown sugar exfoliating treatment combined with soothing botanical oils and brightening extracts.",
    image: "assets/images/scrubs-2.jpg?v=11",
    inStock: true
  },
  {
    id: "scrub-3",
    category: "Body scrubs & polishes",
    title: "Dame Body Sunshine Polishing Body Scrub",
    price: 22000,
    description: "Invigorating citrus salt scrub designed to polish away dead skin cells and reveal velvety, radiant golden glow.",
    image: "assets/images/scrubs-3.jpg?v=11",
    inStock: true
  },

  // 7. Soap
  {
    id: "soap-1",
    category: "Soap",
    title: "Irish Spring Aloe Bar Soap 3 Pack",
    price: 9500,
    description: "Classic USA imported 3-pack deodorant soap with natural aloe vera extract, 12-hour fresh scent and rich lather.",
    image: "assets/images/soap-1.jpg?v=11",
    inStock: true
  },
  {
    id: "soap-2",
    category: "Soap",
    title: "Extract Whitening Herbal Soap Papaya Calamansi",
    price: 4500,
    description: "Potent botanical enzyme soap blending real green papaya and calamansi lime for spotless, luminous complexion.",
    image: "assets/images/soap-2.jpg?v=11",
    inStock: true
  },
  {
    id: "soap-3",
    category: "Soap",
    title: "Cussons Baby Soft & Smooth Almond & Rose Oil Soap",
    price: 3800,
    description: "Mild dermatologically tested cleansing bar with sweet almond oil and rose fragrance, gentle enough for all skin types.",
    image: "assets/images/soap-3.jpg?v=11",
    inStock: true
  },

  // 8. After shave
  {
    id: "shave-1",
    category: "After shave",
    title: "Nivea Men Sensitive Post Shave Balm",
    price: 12500,
    description: "0% alcohol soothing lotion with chamomile and Vitamin E to instantly calm razor burn, redness, and tightness.",
    image: "assets/images/aftershave-1.jpg?v=11",
    inStock: true
  },
  {
    id: "shave-2",
    category: "After shave",
    title: "Denim Black After Shave 100ml",
    price: 9500,
    description: "Timeless Italian splash after shave with intense cedarwood, patchouli, and sensual amber masculine notes.",
    image: "assets/images/aftershave-2.jpg?v=11",
    inStock: true
  },
  {
    id: "shave-3",
    category: "After shave",
    title: "Gillette Stormforce After Shave Splash 100ml",
    price: 11000,
    description: "Cooling splash that disinfects post-shave cuts, cools the skin, and leaves an energetic clean ocean breeze.",
    image: "assets/images/aftershave-3.jpg?v=11",
    inStock: true
  },

  // 9. Antiseptic
  {
    id: "anti-1",
    category: "Antiseptic",
    title: "Savlon Antiseptic Liquid 125ml",
    price: 4200,
    description: "Hospital-grade chlorhexidine & cetrimide disinfectant for first aid, hygienic bathing, and wound dressing.",
    image: "assets/images/antiseptic-1.jpg?v=11",
    inStock: true
  },
  {
    id: "anti-2",
    category: "Antiseptic",
    title: "Dettol Liquid Antiseptic Disinfectant 500ml",
    price: 6500,
    description: "Trusted antibacterial protection that kills 99.9% of bacteria for medical first aid, laundry, and daily personal hygiene.",
    image: "assets/images/antiseptic-2.jpg?v=11",
    inStock: true
  },
  {
    id: "anti-3",
    category: "Antiseptic",
    title: "Clorox Disinfecting Bleach Cleaner",
    price: 8500,
    description: "Heavy-duty hospital disinfectant and surface cleanser for total household hygiene and germ elimination.",
    image: "assets/images/antiseptic-3.jpg?v=11",
    inStock: true
  },

  // 10. Lip care
  {
    id: "lip-1",
    category: "Lip care",
    title: "Face Facts Vitamin C Lip Balm Protecting & Smoothing",
    price: 4800,
    description: "Antioxidant lip treatment with stabilized Vitamin C to shield against dryness, chapping, and hyperpigmentation.",
    image: "assets/images/lipcare-1.jpg?v=11",
    inStock: true
  },
  {
    id: "lip-2",
    category: "Lip care",
    title: "Vaseline Lip Therapy Rosy Lips 7g",
    price: 3500,
    description: "Clinically proven to heal dry lips with pure petroleum jelly, sweet almond oil, and a soft petal-pink rosy tint.",
    image: "assets/images/lipcare-2.jpg?v=11",
    inStock: true
  },
  {
    id: "lip-3",
    category: "Lip care",
    title: "Nivea 24h Moisture Strawberry Shine Lip Care",
    price: 4000,
    description: "Melt-in moisture stick with natural strawberry fruit aroma and subtle red shimmer for 24-hour hydration.",
    image: "assets/images/lipcare-3.jpg?v=11",
    inStock: true
  },

  // 11. Luxury bags
  {
    id: "bag-1",
    category: "Luxury bags",
    title: "Classic Monogram Handbag & Purse 3-Piece Set",
    price: 95000,
    description: "Designer coated monogram canvas with gold-plated hardware, structured silhouette, top handles, and crossbody clutch.",
    image: "assets/images/bags-1.jpg?v=11",
    inStock: true
  },
  {
    id: "bag-2",
    category: "Luxury bags",
    title: "Dior Black Bow Top-Handle Leather Handbag",
    price: 145000,
    description: "Ultra-luxurious Italian calfskin handbag featuring signature sculptured bow detailing, golden chain strap, and suede lining.",
    image: "assets/images/bags-2.jpg?v=11",
    inStock: true
  },
  {
    id: "bag-3",
    category: "Luxury bags",
    title: "Mini Structured Leather Crossbody Bag in Crisp White",
    price: 65000,
    description: "Architectural compact leather crossbody with magnetic envelope closure and polished pale-gold turnlock accent.",
    image: "assets/images/bags-3.jpg?v=11",
    inStock: true
  },

  // 12. Jewelry & Accessories
  {
    id: "jewel-1",
    category: "Jewelry & Accessories",
    title: "Azarai Brilliant Cut Diamond Halo Ring Set in Yellow Gold",
    price: 320000,
    description: "Exquisite halo engagement band with micro-pave simulated diamonds handset in 18k radiant yellow gold vermeil.",
    image: "assets/images/jewelry-1.jpg?v=11",
    inStock: true
  },
  {
    id: "jewel-2",
    category: "Jewelry & Accessories",
    title: "Solitaire Round Brilliant Diamond Ring in Platinum",
    price: 480000,
    description: "Timeless 6-prong cathedral setting showcasing a flawless 2.0-carat brilliant center stone mounted on solid platinum band.",
    image: "assets/images/jewelry-2.jpg?v=11",
    inStock: true
  },
  {
    id: "jewel-3",
    category: "Jewelry & Accessories",
    title: "Textured Geometric Gold Pendant & Earrings Suite",
    price: 260000,
    description: "Architectural brushed gold matching suite including collar pendant necklace and matching drop earrings.",
    image: "assets/images/jewelry-3.jpg?v=11",
    inStock: true
  },

  // 13. Luxury Shoes
  {
    id: "shoe-1",
    category: "Luxury Shoes",
    title: "Louis Vuitton Trainer Black & White Monogram Sneaker",
    price: 210000,
    description: "Virgil Abloh's iconic LV trainer in supple black and white calf leather embossed with miniature monogram flowers.",
    image: "assets/images/shoes-1.jpg?v=11",
    inStock: true
  },
  {
    id: "shoe-2",
    category: "Luxury Shoes",
    title: "Classic Black and White Tassel Leather Loafer",
    price: 85000,
    description: "Handcrafted Goodyear-welted leather loafer with two-tone black and cream vamp and braided fringe tassels.",
    image: "assets/images/shoes-2.jpg?v=11",
    inStock: true
  },
  {
    id: "shoe-3",
    category: "Luxury Shoes",
    title: "Jada Dubai Passion Diamond Stiletto Pumps in Metallic Gold",
    price: 350000,
    description: "Breathtaking 105mm evening stilettos crafted in genuine metallic gold nappa leather with sparkling crystal embellishments.",
    image: "assets/images/shoes-3.jpg?v=11",
    inStock: true
  },

  // 14. Luxury Fashion
  {
    id: "fash-1",
    category: "Luxury Fashion",
    title: "Classic Black Tweed Cropped Jacket with Gold Buttons",
    price: 75000,
    description: "Haute-couture Parisian wool-blend bouclé cropped jacket adorned with embossed lion head antique gold buttons.",
    image: "assets/images/giftset-1.jpg?v=11",
    inStock: true
  },
  {
    id: "fash-2",
    category: "Luxury Fashion",
    title: "Celine Paris Carriage Graphic Black Luxury Hoodie",
    price: 65000,
    description: "Heavyweight 450gsm organic cotton French terry hoodie with vintage Triomphe golden carriage graphic screenprint.",
    image: "assets/images/giftset-2.jpg?v=11",
    inStock: true
  },
  {
    id: "fash-3",
    category: "Luxury Fashion",
    title: "Monochrome Earth-Tone Tailored Trouser & Blazer Ensembles",
    price: 110000,
    description: "Complete double-breasted relaxed blazer and high-waisted pleated wide-leg trousers cut from premium Italian wool gabardine.",
    image: "assets/images/giftset-3.jpg?v=11",
    inStock: true
  }
];

const STORAGE_KEY = "madinma_catalog_v1";

/**
 * Global MadinmaCatalog API
 */
window.MadinmaCatalog = {
  // Get all products (from localStorage or initialize with defaults)
  getAll() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using defaults", e);
    }
    // Save defaults
    this.saveAll(DEFAULT_PRODUCTS);
    return DEFAULT_PRODUCTS;
  },

  // Save all products to localStorage
  saveAll(products) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      window.dispatchEvent(new CustomEvent("madinma-catalog-updated", { detail: products }));
      return true;
    } catch (e) {
      console.error("Failed to save to localStorage", e);
      return false;
    }
  },

  // Add a new product
  add(productData) {
    const products = this.getAll();
    const newProduct = {
      id: "prod-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
      category: productData.category || "Perfumes",
      title: productData.title || "Untitled Product",
      price: Number(productData.price) || 0,
      description: productData.description || "",
      image: productData.image || "assets/images/fragrances-1.jpg",
      inStock: productData.inStock !== false,
      createdAt: new Date().toISOString()
    };
    products.unshift(newProduct);
    this.saveAll(products);
    return newProduct;
  },

  // Update existing product
  update(id, updatedFields) {
    const products = this.getAll();
    const idx = products.findIndex((p) => p.id === id);
    if (idx !== -1) {
      products[idx] = { ...products[idx], ...updatedFields };
      this.saveAll(products);
      return products[idx];
    }
    return null;
  },

  // Delete product
  delete(id) {
    let products = this.getAll();
    products = products.filter((p) => p.id !== id);
    this.saveAll(products);
    return true;
  },

  // Reset to default factory products
  resetToDefaults() {
    this.saveAll(DEFAULT_PRODUCTS);
    return DEFAULT_PRODUCTS;
  },

  // Get list of all unique categories
  getCategories() {
    const products = this.getAll();
    const cats = new Set();
    // Keep 14 primary categories ordered
    const primary = [
      "Perfumes",
      "Body mist",
      "Deodorant",
      "Roll-ons",
      "Moisturizer",
      "Body scrubs & polishes",
      "Soap",
      "After shave",
      "Antiseptic",
      "Lip care",
      "Luxury bags",
      "Jewelry & Accessories",
      "Luxury Shoes",
      "Luxury Fashion"
    ];
    primary.forEach((c) => cats.add(c));
    products.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  },

  // Format Nigerian Naira currency (e.g. ₦45,000)
  formatPrice(amount) {
    return "₦" + Number(amount || 0).toLocaleString("en-NG");
  },

  // Build direct WhatsApp order link
  getWhatsAppOrderLink(product) {
    const phone = "2349032407144";
    const text = `Hello Madinma Haven, I would like to order:\n\n*Product:* ${product.title}\n*Category:* ${product.category}\n*Price:* ${this.formatPrice(product.price)}\n\nPlease confirm availability and delivery to my location. Thank you!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }
};
