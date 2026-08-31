export interface Product {
  id: string;
  name: string;
  category: "HOODIES" | "TEES" | "ACCESSORIES" | "EXCLUSIVES";
  price: string;
  description: string;
  details: string[];
  isNew?: boolean;
  image: string;
}

export const BRAND_INFO = {
  name: "EUPHORIA",
  tagline: "DESIGNED & HANDMADE IN HUNGARY",
  handle: "euphoria.clthng",
  instagram: "https://www.instagram.com/euphoria.clthng/",
  tiktok: "https://www.tiktok.com/@euphoria.clthng",
  location: "Budapest, Hungary",
  designers: [
    { name: "Tino", handle: "@tino_sk8z" },
    { name: "Frigyes Varga", handle: "@frigyes_varga" }
  ],
  management: [
    { name: "Abel H", handle: "@ab3l_h" },
    { name: "Yuno Igore", handle: "@yunoigore" }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: "eu-01",
    name: "RAW EDGE CYBER HOODIE",
    category: "HOODIES",
    price: "€110",
    description: "Heavyweight 480GSM French Terry cotton hoodie with custom hand-distressed raw seams, acid washed finish, and screenprinted cyberpunk graphics.",
    details: ["Handcrafted distress treatment", "Custom oversized boxy cut", "Thumbhole cuffs", "Made in Hungary"],
    isNew: true,
    image: "/clothing/item_01.png"
  },
  {
    id: "eu-02",
    name: "DISTRESSED LOGO TEE",
    category: "TEES",
    price: "€55",
    description: "Vintage washed 260GSM organic cotton shirt featuring custom acid wash finish and handmade raw neck hem.",
    details: ["100% Organic Cotton", "Vintage acid wash finish", "Screen-printed front logo", "Handmade in Budapest"],
    isNew: true,
    image: "/clothing/item_02.png"
  },
  {
    id: "eu-03",
    name: "INDUSTRIAL ZIP HOODIE",
    category: "HOODIES",
    price: "€135",
    description: "Asymmetric full-zip hoodie with silver metal hardware accents, double layered hood, and reinforced patches.",
    details: ["Custom silver zipper pulls", "Oversized double hood", "Heavy brushed fleece interior"],
    isNew: false,
    image: "/clothing/item_03.png"
  },
  {
    id: "eu-04",
    name: "HANDMADE UTILITY BEANIE",
    category: "ACCESSORIES",
    price: "€40",
    description: "Chunky knit beanie with hand-distressed detailing, raw fraying, and signature metal tag logo.",
    details: ["100% Heavy Merino Wool", "Hand-distressed finish", "Unisex fit"],
    isNew: false,
    image: "/clothing/item_04.png"
  },
  {
    id: "eu-05",
    name: "ARCHIVAL REWORKED DENIM",
    category: "EXCLUSIVES",
    price: "€220",
    description: "Exclusive handmade 1-of-1 custom patched denim jacket featuring reworked vintage fabrics and hand-stitched details.",
    details: ["One of one unique creation", "Hand-stitched patches", "Heavy Japanese selvedge denim"],
    isNew: true,
    image: "/clothing/item_05.png"
  },
  {
    id: "eu-06",
    name: "SLEEVE GRAPHIC LONG SLEEVE",
    category: "TEES",
    price: "€65",
    description: "Sleeve-printed heavy long sleeve tee with custom sleeve thumb cuffs and high-density puff print.",
    details: ["High density puff print", "Ribbed collar and cuffs", "Garment dyed black"],
    isNew: false,
    image: "/clothing/item_06.png"
  },
  {
    id: "eu-07",
    name: "EXPERIMENTAL CUT SWEATSHIRT",
    category: "HOODIES",
    price: "€105",
    description: "Custom cropped heavyweight crewneck sweatshirt with raw frayed hem and distressing.",
    details: ["450GSM Cotton", "Hand-cropped distressed hem", "Drop shoulder boxy silhouette"],
    isNew: true,
    image: "/clothing/item_07.png"
  },
  {
    id: "eu-08",
    name: "UNDERGROUND OVERSIZED TEE",
    category: "TEES",
    price: "€50",
    description: "Heavy 280GSM cotton boxy tee with high density print and raw edge sleeves.",
    details: ["280GSM Heavy Cotton", "Custom oversized cut", "Made in Hungary"],
    isNew: false,
    image: "/clothing/item_08.png"
  }
];

export const LOOKBOOK_IMAGES = [
  {
    url: "/clothing/item_09.png",
    title: "DROP 01 - BUDAPEST STREETS",
    subtitle: "Shot by Abel H & Yuno Igore"
  },
  {
    url: "/clothing/item_10.png",
    title: "HANDMADE EXPERIMENTS",
    subtitle: "Designed by @tino_sk8z"
  },
  {
    url: "/clothing/item_11.png",
    title: "INDUSTRIAL SILHOUETTES",
    subtitle: "Designed by @frigyes_varga"
  },
  {
    url: "/clothing/item_12.png",
    title: "RAW ARCHIVE 2026",
    subtitle: "Euphoria Clothing Hungary"
  },
  {
    url: "/clothing/item_13.png",
    title: "1-OF-1 CUSTOM CUTS",
    subtitle: "Hand-distressed in Budapest"
  },
  {
    url: "/clothing/item_14.png",
    title: "UNDERGROUND CULTURE",
    subtitle: "Euphoria Hungary"
  }
];
