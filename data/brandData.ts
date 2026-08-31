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
    name: "CYBER-DISTORTION HOODIE",
    category: "HOODIES",
    price: "€110",
    description: "Heavyweight 480GSM French Terry cotton hoodie with raw distressed seams and screenprinted cyberpunk graphics.",
    details: ["Handcrafted distress treatment", "Custom oversized boxy cut", "Thumbhole cuffs", "Made in Hungary"],
    isNew: true,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "eu-02",
    name: "RAW EDGE LOGO TEE",
    category: "TEES",
    price: "€55",
    description: "Vintage washed 260GSM organic cotton shirt featuring acid wash finish and handmade raw neck hem.",
    details: ["100% Organic Cotton", "Vintage acid wash finish", "Screen-printed front logo", "Handmade in Budapest"],
    isNew: true,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "eu-03",
    name: "EXPERIMENTAL INDUSTRIAL ZIP",
    category: "HOODIES",
    price: "€135",
    description: "Asymmetric full-zip hoodie with metal hardware accents and reinforced elbow patches.",
    details: ["Custom silver zipper pulls", "Oversized double hood", "Heavy brushed fleece interior"],
    isNew: false,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "eu-04",
    name: "DISTRESSED UTILITY BEANIE",
    category: "ACCESSORIES",
    price: "€40",
    description: "Chunky knit beanie with hand-distressed detailing and signature metal tag logo.",
    details: ["100% Heavy Merino Wool", "Hand-distressed finish", "Unisex fit"],
    isNew: false,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "eu-05",
    name: "1-OF-1 ARCHIVAL DENIM JACKET",
    category: "EXCLUSIVES",
    price: "€220",
    description: "Exclusive handmade custom patched denim jacket featuring reworked vintage fabrics.",
    details: ["One of one unique creation", "Hand-stitched patches", "Heavy Japanese selvedge denim"],
    isNew: true,
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "eu-06",
    name: "UNDERGROUND GRAPHIC LONG SLEEVE",
    category: "TEES",
    price: "€65",
    description: "Sleeve-printed heavy long sleeve tee with custom sleeve thumb cuffs.",
    details: ["High density puff print", "Ribbed collar and cuffs", "Garment dyed black"],
    isNew: false,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1000"
  }
];

export const LOOKBOOK_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    title: "DROP 01 - BUDAPEST STREETS",
    subtitle: "Shot by Abel H & Yuno Igore"
  },
  {
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
    title: "HANDMADE EXPERIMENTS",
    subtitle: "Designed by @tino_sk8z"
  },
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
    title: "INDUSTRIAL SILHOUETTES",
    subtitle: "Designed by @frigyes_varga"
  },
  {
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
    title: "RAW ARCHIVE 2026",
    subtitle: "Euphoria Clothing Hungary"
  }
];
