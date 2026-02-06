export type Product = {
  name: string;
  slug: string;
  image: string;

  title: string;
  description: string;

  keyFeatures: string[];

  shortDescription?: string;

  specifications: {
    riceType: string;
    grainLength: string;
    processing: string;
    texture: string;
    color: string;
    brokenPercentage?: string;
    moisture?: string;
    packaging: string[];
    shelfLife: string;
  };

  uses: string[];
  popularDishes: string[];
  nutritionalInfo?: string;
  whyChoose: string[];
};

/* ===================================================== */
/* PRODUCTS DATA - Updated Rice Catalogue              */
/* ===================================================== */

export const products: Product[] = [

  // ── Existing ────────────────────────────────────────

  {
    name: "HMT Rice",
    slug: "hmt-rice",
    image: "/products/hmt.jpg",
    title: "Premium Quality Medium-Grain Rice for Everyday Nutrition",
    description: "HMT Rice is a premium medium-grain variety known for its delicate aroma and nutty flavor. Originally developed by farmer-scientist Dadaji Khobragade in Maharashtra, this 'Desi' variety is prized for its low glycemic index and superior cooking qualities. It is carefully sourced and processed to ensure a fluffy, non-sticky texture that serves as a healthier alternative to traditional white rice.",
    keyFeatures: [
      "Aromatic and Nutty: Subtle floral scent reminiscent of Kolam rice.",
      "Low Glycemic Index: Better for blood sugar management than many white rice varieties.",
      "Superior Yield: Grains expand significantly (up to 2.5x to 3.4x) when cooked.",
      "High Milling Recovery: Achieves approximately 80% recovery with minimal breakage.",
      "Hygienically Processed: Available in Raw, Steamed, and Parboiled varieties."
    ],
    specifications: {
      riceType: "Medium to Long Slender Grain (Non-Basmati)",
      grainLength: "5.3 mm to 6.5 mm",
      processing: "Steam, Parboiled (Sella), or Raw (Single/Double Polished)",
      moisture: "12% to 14% Max",
      brokenPercentage: "2% to 5% Max",
      color: "Natural White / Creamy White",
      texture: "Fluffy, Non-sticky, and Separated grains",
      shelfLife: "12 to 24 Months",
      packaging: [ "10 KG", "26 KG", "50 KG"]
    },
    uses: [
      "Daily household meals",
      "Premium hotel and restaurant 'Table Rice'",
      "Bulk catering for weddings and institutions",
      "South Indian staples (Idli/Dosa for parboiled variants)"
    ],
    popularDishes: [
      "Steamed White Rice",
      "Vegetable Pulao",
      "Sambar & Curd Rice",
      "Lemon Rice",
      "Soft Khichdi"
    ],
    whyChoose: [
      "Developed through natural selection (Non-GMO)",
      "Trusted bulk supply for industrial kitchens",
      "Cost-effective alternative to Basmati",
      "Strict FSSAI and quality control adherence"
    ]
  },

  // ── BPT VARIETIES (Samba Masuri / BPT 5204) ──────────────────────

  {
    name: "BPT Steam Rice",
    slug: "bpt-steam-rice",
    image: "/products/bpt.jpg",
    title: "Premium Lightweight Samba Masuri for Daily Use",
    description: "BPT Steam Rice, popularly known as Samba Masuri (BPT 5204), is a premium fine-grain variety grown primarily in Andhra Pradesh and Karnataka. The steaming process hardens the grain, reducing breakage while preserving vitamins. It cooks into a lightweight, fluffy texture that is easy to digest and perfect for daily meals.",
    keyFeatures: [
      "Premium Fine Grain: Thin, uniform grains (Samba Masuri variety).",
      "Easy Digestibility: Lightweight texture suitable for all ages.",
      "Excellent Cooking Yield: Expands well without becoming mushy.",
      "Nutrient Retention: Steaming process locks in essential vitamins.",
      "Versatile: Ideal for both south Indian curries and fried rice."
    ],
    specifications: {
      riceType: "Medium Slender (BPT 5204)",
      grainLength: "4.8 mm to 5.2 mm (Uncooked)",
      processing: "Steam / Parboiled",
      texture: "Fluffy, Discrete, Non-sticky",
      color: "Creamy White / Golden tinge",
      brokenPercentage: "Max 5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "12-24 Months",
    },
    uses: ["Daily household staple", "Premium office canteens", "Diet-conscious meals"],
    popularDishes: ["Plain Steamed Rice", "Vegetable Biryani", "Fried Rice", "Lemon Rice"],
    whyChoose: ["Low Glycemic traits", "Superior grain integrity", "Consistent year-round quality"],
  },

  {
    name: "BPT Raw Rice",
    slug: "bpt-raw-rice",
    image: "/products/bpt.jpg",
    title: "Authentic Sona Masuri Raw Rice",
    description: "BPT Raw Rice (Sona Masuri) is aged to perfection to reduce moisture and enhance cooking quality. Unlike steamed variants, this raw rice offers the most natural taste and aroma. It is widely preferred for making traditional Pongal and offerings, as well as daily meals for those who prefer soft, naturally white rice.",
    keyFeatures: [
      "Aged Rice: Store-aged for minimum 6-12 months for better cooking.",
      "Natural Aroma: Distinct, subtle sweet smell of authentic Sona Masuri.",
      "Soft Texture: Cooks softer than steam rice, ideal for mixing with gravy.",
      "High Starch Profile: Provides instant energy.",
      "Pure White: Natural bright white appearance."
    ],
    specifications: {
      riceType: "Medium Slender Raw (Sona Masuri)",
      grainLength: "5.0 mm approx",
      processing: "Raw / Double Polished",
      texture: "Soft, slightly sticky if overcooked",
      color: "Bright White",
      brokenPercentage: "Max 5%",
      moisture: "Max 13%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "12 Months",
    },
    uses: ["Traditional festivities", "Daily meals", "Temple offerings (Prasadam)"],
    popularDishes: ["Sweet Pongal", "Ven Pongal", "Curd Rice", "Steamed Rice with Dal"],
    whyChoose: ["Traditional taste profile", "No thermal processing used", "High purity standards"],
  },

  {
    name: "BPT Boiled Rice",
    slug: "bpt-boiled-rice",
    image: "/products/bpt.jpg",
    title: "Nutrient-Rich Boiled Samba Masuri",
    description: "BPT Boiled Rice is processed by boiling the paddy before milling. This traditional method drives nutrients from the bran into the grain, making it healthier than raw rice. It is extremely durable, non-sticky, and widely used for specialized dishes like Idli and Dosa batter in commercial kitchens.",
    keyFeatures: [
      "High Durability: Grains do not break easily during cooking.",
      "Nutrient Dense: Higher thiamine and mineral content.",
      "Non-Sticky: Grains remain separate even after long storage.",
      "Batter Expert: Ideal fermentation properties for Idli/Dosa.",
      "Digestive Health: Higher fiber content than raw rice."
    ],
    specifications: {
      riceType: "Boiled / Parboiled (Sona Masuri)",
      grainLength: "Medium Slender",
      processing: "Fully Boiled",
      texture: "Firm, Separate, Chewy",
      color: "Yellowish / Golden",
      brokenPercentage: "Max 2-5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "24 Months",
    },
    uses: ["Idli/Dosa Batter", "Catering & Institutions", "Lemon Rice"],
    popularDishes: ["Idli", "Dosa", "Tamarind Rice", "Lemon Rice"],
    whyChoose: ["Best for fermentation", "Longest shelf life", "High nutritional value"],
  },

  // ── JSR VARIETIES (Jai Sriram / Lachkari / Kolam) ──────────────────

  {
    name: "JSR Raw Rice",
    slug: "jsr-raw-rice",
    image: "/products/jsr.jpg",
    title: "Premium JSR Kolam Raw Rice",
    description: "JSR Raw Rice (often associated with the premium 'Jai Sriram' or 'Lachkari Kolam' trade varieties) is a high-quality, short-to-medium slender grain. Known for its pristine white color and soft melting texture, it is a favorite in Maharashtra and Telangana households for special occasions and daily luxury.",
    keyFeatures: [
      "Superior Softness: Known for a 'melt-in-the-mouth' texture.",
      "Aromatic: Possesses a distinct, pleasant floral aroma.",
      "High Purity: Sorted for 100% silky uniform grains.",
      "Excellent Appearance: Bright white grains enhance dish presentation.",
      "Daily Luxury: A step above standard Sona Masuri in softness."
    ],
    specifications: {
      riceType: "Short/Medium Slender (Kolam/JGL Variety)",
      grainLength: "4.5 mm to 5.0 mm",
      processing: "Raw / Silky Polished",
      texture: "Very Soft, slightly sticky",
      color: "Brilliant White",
      brokenPercentage: "Max 2%",
      moisture: "Max 12.5%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "12 Months",
    },
    uses: ["Premium home cooking", "Festive meals", "Gifting"],
    popularDishes: ["Masala Bhaat", "Plain Rice with Ghee", "Kheer (Rice Pudding)"],
    whyChoose: ["Premium softness", "High aesthetic appeal", "Superior taste profile"],
  },

  {
    name: "JSR Steam Rice",
    slug: "jsr-steam-rice",
    image: "/products/jsr.jpg",
    title: "JSR Steam Kolam Rice",
    description: "JSR Steam Rice offers the premium quality of the JSR/Kolam variety with the added convenience of steam processing. This ensures the grains remain separate and fluffy while retaining the characteristic softness and taste. It is an excellent choice for caterers requiring premium rice that holds its shape.",
    keyFeatures: [
      "Shape Retention: Grains do not clump together.",
      "Premium Taste: Retains the sweet, nutty flavor of Kolam.",
      "Uniform Cooking: Consistent results in large batches.",
      "Bright Appearance: Silky finish for visual appeal.",
      "Versatile: Suitable for both curries and rice mixes."
    ],
    specifications: {
      riceType: "Medium Slender (Kolam/JGL Variety)",
      grainLength: "4.5 mm to 5.0 mm",
      processing: "Steam / Sortex Cleaned",
      texture: "Fluffy but Soft",
      color: "Creamy White",
      brokenPercentage: "Max 2%",
      moisture: "Max 13.5%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "18 Months",
    },
    uses: ["Upscale Restaurants", "Weddings", "Family Gatherings"],
    popularDishes: ["Pulao", "Jeera Rice", "Fried Rice"],
    whyChoose: ["Combines taste with non-sticky traits", "Premium brand value", "Consistent grain size"],
  },

  // ── KNM VARIETIES (Kunaram / KNM 1638) ─────────────────────────────

  {
    name: "KNM Steam Rice",
    slug: "knm-steam-rice",
    image: "/products/knm.jpg",
    title: "High-Yielding KNM 1638 Steam Rice",
    description: "KNM Steam Rice is derived from the popular KNM 1638 variety (Kunaram Vari), developed in Telangana. It is a medium-slender grain that serves as a robust alternative to BPT. It is gaining popularity for its excellent elongation ratio and ability to absorb flavors, making it ideal for mass catering and daily use.",
    keyFeatures: [
      "High Elongation: Grains elongate well upon cooking.",
      "Cost-Effective: Excellent quality at a competitive price point.",
      "Robust Grain: Resistant to breakage during transit and cooking.",
      "Clean Taste: Neutral flavor profile suitable for all curries.",
      "Fresh Crop Availability: Widely available due to high local yields."
    ],
    specifications: {
      riceType: "Medium Slender (KNM 1638)",
      grainLength: "5.0 mm to 5.4 mm",
      processing: "Steam",
      texture: "Fluffy, Separate",
      color: "Natural White",
      brokenPercentage: "Max 5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "18 Months",
    },
    uses: ["Mass Catering", "Hostels & Canteens", "Budget Households"],
    popularDishes: ["Tomato Rice", "Sambar Rice", "Daily Meals"],
    whyChoose: ["Value for money", "Similar texture to BPT", "Reliable supply"],
  },

  {
    name: "KNM Boiled Rice",
    slug: "knm-boiled-rice",
    image: "/products/knm.jpg",
    title: "Durable KNM Boiled Rice",
    description: "KNM Boiled Rice utilizes the KNM 1638 variety processed through boiling. This results in a highly durable grain that is perfect for heavy-duty cooking environments. It withstands overcooking and is an excellent choice for making batters and variety rice dishes in commercial setups.",
    keyFeatures: [
      "Cooking Endurance: Does not turn mushy easily.",
      "High Volume: Swells significantly, offering good plate coverage.",
      "Nutrient Retention: Parboiling retains minerals.",
      "Uniform Size: Consistent medium-slender grains.",
      "Economical: Great choice for bulk buyers."
    ],
    specifications: {
      riceType: "Boiled (KNM 1638)",
      grainLength: "Medium Slender",
      processing: "Boiled / Parboiled",
      texture: "Firm",
      color: "Pale Yellow",
      brokenPercentage: "Max 5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "24 Months",
    },
    uses: ["Worker Canteens", "Street Food Vendors", "Batter preparation"],
    popularDishes: ["Lemon Rice", "Curd Rice", "Idli/Dosa"],
    whyChoose: ["High cooking volume", "Low cost per plate", "Long storage life"],
  },

  // ── EXPORT & BULK VARIETIES (IR 64, Swarna, NLR) ──────────────────

  {
    name: "IR 64 Boiled Rice",
    slug: "ir-64-boiled-rice",
    image: "/products/ir64.jpg",
    title: "Global Standard IR 64 Parboiled Rice",
    description: "IR 64 Boiled Rice is a long-grain non-basmati variety that is one of the most exported rice types from India. Known for its long grain length (avg 6mm), cleanliness, and free-flowing texture, it is the standard for 'Parimal' rice. It is extensively used in African and Asian markets for its balance of quality and cost.",
    keyFeatures: [
      "Long Grain: Average length of 6mm, distinct from medium varieties.",
      "Export Quality: Meets international standards for purity (95%+).",
      "Free Flowing: Non-sticky texture ideal for mixed rice dishes.",
      "High Satiety: Heavy grain that provides lasting fullness.",
      "Versatile Processing: Available in 5% to 25% broken grades."
    ],
    specifications: {
      riceType: "Long Grain (IR 64)",
      grainLength: "6.0 mm Average",
      processing: "Parboiled / Sortex",
      texture: "Firm, Non-sticky, Free-flowing",
      color: "Golden / Creamy",
      brokenPercentage: "5% Standard (available up to 25%)",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG", "Bulk PP Bags"],
      shelfLife: "24 Months",
    },
    uses: ["International Exports", "Government Supplies", "Fried Rice"],
    popularDishes: ["Jollof Rice", "Biryani (Economy)", "Fried Rice"],
    whyChoose: ["International standard", "Excellent grain length", "Competitive pricing"],
  },

  {
    name: "Swarna Raw Rice",
    slug: "swarna-raw-rice",
    image: "/products/swarna.jpg",
    title: "Short Grain Swarna (MTU 7029) Raw Rice",
    description: "Swarna Raw Rice (MTU 7029) is a widely grown short-to-medium bold grain variety. It is a staple for millions due to its affordability and adaptability. The raw variant has a natural aroma and a soft texture, making it the preferred choice for households in West Bengal, Odisha, and Bihar.",
    keyFeatures: [
      "Short Bold Grain: Thicker grain than Sona Masuri.",
      "Soft Texture: Cooks very soft, ideal for eating with hands.",
      "Economical: One of the most affordable table rice varieties.",
      "Low Glycemic Index: Often lower GI than long grains.",
      "Daily Staple: Neutral taste that pairs with spicy curries."
    ],
    specifications: {
      riceType: "Short/Medium Bold (MTU 7029)",
      grainLength: "4.8 mm to 5.0 mm (Bold)",
      processing: "Raw / Single or Double Polished",
      texture: "Soft, Clumpy",
      color: "White",
      brokenPercentage: "5% to 15% typical",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "12 Months",
    },
    uses: ["Daily meals in Eastern India", "Government schemes", "Rice flour"],
    popularDishes: ["Maach Bhaat (Fish Curry Rice)", "Khichdi"],
    whyChoose: ["Budget-friendly", "Traditional bold grain preference", "Soft eating quality"],
  },

  {
    name: "Swarna Steam Rice",
    slug: "swarna-steam-rice",
    image: "/products/swarna.jpg",
    title: "Fluffy Swarna Steam Rice",
    description: "Swarna Steam Rice offers the bold grain characteristics of MTU 7029 with the added benefit of steam processing. This results in a cleaner, whiter, and more separate grain compared to the raw variant. It is widely used in mass feeding programs and budget-friendly restaurants.",
    keyFeatures: [
      "Improved Texture: Less sticky than raw Swarna.",
      "Bright Color: Steaming improves the visual appeal.",
      "Quick Cooking: Cooks faster than parboiled varieties.",
      "Durable: Better resistance to breakage.",
      "High Energy: Rich carbohydrate source."
    ],
    specifications: {
      riceType: "Short/Medium Bold (MTU 7029)",
      grainLength: "4.8 mm to 5.0 mm",
      processing: "Steam",
      texture: "Fluffy, Semi-separate",
      color: "White / Creamy",
      brokenPercentage: "Max 5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "18 Months",
    },
    uses: ["Canteens", "Budget Restaurants", "Relief Supplies"],
    popularDishes: ["Rice and Dal", "Thali meals"],
    whyChoose: ["Best price-to-quality ratio", "Filling and satisfying", "Widely accepted taste"],
  },

  {
    name: "NLR Steam Rice",
    slug: "nlr-steam-rice",
    image: "/products/nlr.jpg",
    title: "Fine Grain Nellore Sona (NLR 34449)",
    description: "NLR Steam Rice, sourced from the famous NLR 34449 (Nellore Sona) variety, is a fine grain rice prized for its slender shape and high yield. It is blast-resistant and grown extensively in the Nellore belt. The steam variant is non-sticky and offers a premium look similar to Sona Masoori but often at a better price point.",
    keyFeatures: [
      "Fine Slender Grain: Aesthetically pleasing thin grains.",
      "High Volume Expansion: Cooks up to a large volume.",
      "Non-Sticky: Excellent separation of grains.",
      "Origin: Authentic Nellore region sourcing.",
      "Versatile: Suitable for rice items and plain consumption."
    ],
    specifications: {
      riceType: "Long Slender (NLR 34449)",
      grainLength: "5.5 mm to 6.0 mm",
      processing: "Steam",
      texture: "Dry, Fluffy",
      color: "Bright White",
      brokenPercentage: "Max 5%",
      moisture: "Max 13.5%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "18 Months",
    },
    uses: ["Hotels", "Fried Rice preparation", "Daily meals"],
    popularDishes: ["Curry Rice", "Biryani (South Indian Style)"],
    whyChoose: ["Appearance of premium rice", "Good cooking volume", "Reliable quality"],
  },

  {
    name: "NLR Boiled Rice",
    slug: "nlr-boiled-rice",
    image: "/products/nlr.jpg",
    title: "Robust Nellore Boiled Rice",
    description: "NLR Boiled Rice takes the fine grain NLR 34449 and subjects it to boiling, creating a grain that is extremely robust and nutritious. It is a preferred choice in Tamil Nadu and Kerala borders where parboiled rice is a staple. It retains the slender shape while offering the health benefits of parboiled rice.",
    keyFeatures: [
      "Slender Boiled Grain: Rare combination of fine shape and boiled processing.",
      "Nutritious: High retention of B-vitamins.",
      "Firm Texture: Excellent for soaking up gravies.",
      "Low Breakage: Very strong grain structure.",
      "Digestible: Good for gut health."
    ],
    specifications: {
      riceType: "Boiled (NLR 34449)",
      grainLength: "5.5 mm approx",
      processing: "Boiled",
      texture: "Firm, Chewy",
      color: "Golden / Reddish tinge",
      brokenPercentage: "Max 5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "24 Months",
    },
    uses: ["Kerala/TN style meals", "Rice Porridge", "Tiffin centers"],
    popularDishes: ["Fish Curry Meals", "Kanji"],
    whyChoose: ["Healthy parboiled option", "Fine grain preference", "Long shelf life"],
  },

  {
    name: "Ganga Kaveri Steam Rice",
    slug: "ganga-kaveri-steam-rice",
    image: "/products/ganga-kaveri.jpg",
    title: "Fine Grain Hybrid Ganga Kaveri Rice",
    description: "Ganga Kaveri is a popular fine-grain hybrid rice variety widely cultivated in Telangana and Karnataka. It is often marketed as a cost-effective alternative to Sona Masoori. The steam processing ensures the grains are white and separate, making it a favorite for households looking for fine rice at an economical price.",
    keyFeatures: [
      "Fine Grain Texture: Resembles premium Sona Masoori.",
      "Economic Premium: High quality appearance at lower cost.",
      "Neutral Taste: Adapts well to all condiments.",
      "Good Keeping Quality: Cooked rice stays fresh for longer.",
      "Hygienic: Processed in modern sortex mills."
    ],
    specifications: {
      riceType: "Medium/Long Slender (Hybrid)",
      grainLength: "5.0 mm to 5.5 mm",
      processing: "Steam",
      texture: "Soft and Fluffy",
      color: "White",
      brokenPercentage: "Max 5%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "18 Months",
    },
    uses: ["Daily home use", "Mid-range restaurants", "Catering"],
    popularDishes: ["Steam Rice", "Pulihora (Tamarind Rice)"],
    whyChoose: ["Budget-friendly fine rice", "Widely available", "Consistent quality"],
  },

  {
    name: "Broken Rice",
    slug: "broken-rice",
    image: "/products/broken.jpg",
    title: "High-Quality Sorted Broken Rice",
    description: "Our Broken Rice is not just a by-product but a carefully sorted selection of high-quality rice fragments. Sourced from the milling of premium varieties like Sona Masoori and IR 64, it is clean, free from stones, and perfect for specific culinary uses like porridge, batters, and brewing.",
    keyFeatures: [
      "Clean & Sorted: 100% sortex clean, free from dust/stones.",
      "Quick Cooking: Cooks much faster than whole rice.",
      "High Starch Release: Excellent for thickening soups or making batter.",
      "Cost Effective: Most affordable rice option.",
      "Versatile: Used in food, feed, and brewing industries."
    ],
    specifications: {
      riceType: "Mixed Variety Brokens",
      grainLength: "< 2.5 mm (variable)",
      processing: "Raw / Boiled / Steam (As per request)",
      texture: "Soft, Mushy",
      color: "White / Creamy",
      brokenPercentage: "100%",
      moisture: "Max 14%",
      packaging: ["25 KG", "50 KG"],
      shelfLife: "6-12 Months",
    },
    uses: ["Idli/Dosa Batter", "Rice Flour production", "Brewing (Beer)", "Animal Feed", "Instant Porridge"],
    popularDishes: ["Idli", "Rice Porridge (Ganji)", "Kheer"],
    whyChoose: ["Cheapest source of rice carbs", "Essential for batter making", "Zero waste product"],
  }
];

/* ===================================================== */
/* PRODUCTS GRADE DATA (Export & Wholesale Standards)    */
/* ===================================================== */

export const gradeStandards = {
  description: "Standard grading parameters for wholesale and export rice varieties.",
  grades: [
    {
      grade: "Grade A (Premium/Export)",
      specifications: {
        broken: "Max 2% - 5%",
        moisture: "Max 12% - 13%",
        purity: "98% - 100%",
        admixture: "Max 1%",
        discolored: "Max 0.5%",
        chalky: "Max 1% - 2%",
        foreignMatter: "Nil"
      },
      suitableFor: "Retail packs, High-end HORECA, Export to EU/USA"
    },
    {
      grade: "Grade B (Standard/FAQ - Fair Average Quality)",
      specifications: {
        broken: "Max 5% - 15%",
        moisture: "Max 14%",
        purity: "95%",
        admixture: "Max 5%",
        discolored: "Max 2%",
        chalky: "Max 4% - 6%",
        foreignMatter: "Max 0.5%"
      },
      suitableFor: "Domestic bulk market, Institutions, General Catering"
    },
    {
      grade: "Grade C (Common/Economy)",
      specifications: {
        broken: "25% and above",
        moisture: "Max 14%",
        purity: "90%",
        admixture: "Max 10%",
        discolored: "Max 5%",
        foreignMatter: "Max 1%"
      },
      suitableFor: "Processing industries (Flour/Batter), Animal Feed, Alcohol production"
    }
  ]
};