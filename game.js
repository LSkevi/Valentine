console.log("[Garden] game.js loading...");
let toastTimer;
const FLOWERS = {
  // ── Common (59) ─────────────────────────────────────────────
  pinkTulip: {
    name: "Pink Tulip",
    kind: "tulip",
    appearance: "tulip",
    rarity: "common",
    w: 32,
    petal: "#f06292",
    stem: "#66bb6a",
    sell: 5,
  },
  redTulip: {
    name: "Red Tulip",
    kind: "tulip",
    appearance: "tulip",
    rarity: "common",
    w: 28,
    petal: "#e53935",
    stem: "#66bb6a",
    sell: 6,
  },
  yellowTulip: {
    name: "Yellow Tulip",
    kind: "tulip",
    appearance: "tulip",
    rarity: "common",
    w: 24,
    petal: "#fdd835",
    stem: "#66bb6a",
    sell: 6,
  },
  purpleViolet: {
    name: "Purple Violet",
    kind: "violet",
    appearance: "violet",
    rarity: "common",
    w: 20,
    petal: "#7e57c2",
    stem: "#66bb6a",
    sell: 5,
  },
  blueViolet: {
    name: "Blue Violet",
    kind: "violet",
    appearance: "violet",
    rarity: "common",
    w: 18,
    petal: "#5c6bc0",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleIris: {
    name: "Purple Iris",
    kind: "iris",
    appearance: "iris",
    rarity: "common",
    w: 14,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 6,
  },
  yellowDaffodil: {
    name: "Yellow Daffodil",
    kind: "daffodil",
    appearance: "daffodil",
    rarity: "common",
    w: 18,
    petal: "#fff176",
    stem: "#66bb6a",
    sell: 6,
  },
  whiteDaisy: {
    name: "White Daisy",
    kind: "daisy",
    appearance: "daisy",
    rarity: "common",
    w: 22,
    petal: "#f5f5f5",
    stem: "#66bb6a",
    sell: 5,
  },
  yellowDaisy: {
    name: "Yellow Daisy",
    kind: "daisy",
    appearance: "daisy",
    rarity: "common",
    w: 18,
    petal: "#fff176",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkDaisy: {
    name: "Pink Daisy",
    kind: "daisy",
    appearance: "daisy",
    rarity: "common",
    w: 14,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 6,
  },
  pinkCarnation: {
    name: "Pink Carnation",
    kind: "carnation",
    appearance: "carnation",
    rarity: "common",
    w: 25,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  redCarnation: {
    name: "Red Carnation",
    kind: "carnation",
    appearance: "carnation",
    rarity: "common",
    w: 22,
    petal: "#f44336",
    stem: "#66bb6a",
    sell: 5,
  },
  whiteCarnation: {
    name: "White Carnation",
    kind: "carnation",
    appearance: "carnation",
    rarity: "common",
    w: 20,
    petal: "#fafafa",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleHyacinth: {
    name: "Purple Hyacinth",
    kind: "hyacinth",
    appearance: "hyacinth",
    rarity: "common",
    w: 22,
    petal: "#7b1fa2",
    stem: "#66bb6a",
    sell: 6,
  },
  pinkHyacinth: {
    name: "Pink Hyacinth",
    kind: "hyacinth",
    appearance: "hyacinth",
    rarity: "common",
    w: 18,
    petal: "#ec407a",
    stem: "#66bb6a",
    sell: 6,
  },
  yellowChrysanthemum: {
    name: "Yellow Chrysanthemum",
    kind: "chrysanthemum",
    appearance: "chrysanthemum",
    rarity: "common",
    w: 18,
    petal: "#fdd835",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkChrysanthemum: {
    name: "Pink Chrysanthemum",
    kind: "chrysanthemum",
    appearance: "chrysanthemum",
    rarity: "common",
    w: 16,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  redGeranium: {
    name: "Red Geranium",
    kind: "geranium",
    appearance: "geranium",
    rarity: "common",
    w: 22,
    petal: "#e53935",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkGeranium: {
    name: "Pink Geranium",
    kind: "geranium",
    appearance: "geranium",
    rarity: "common",
    w: 20,
    petal: "#f06292",
    stem: "#66bb6a",
    sell: 5,
  },
  blueBluebell: {
    name: "Blue Bluebell",
    kind: "bluebell",
    appearance: "bluebell",
    rarity: "common",
    w: 20,
    petal: "#7986cb",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleBluebell: {
    name: "Purple Bluebell",
    kind: "bluebell",
    appearance: "bluebell",
    rarity: "common",
    w: 16,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 5,
  },
  yellowMarigold: {
    name: "Yellow Marigold",
    kind: "marigold",
    appearance: "marigold",
    rarity: "common",
    w: 24,
    petal: "#fdd835",
    stem: "#558b2f",
    sell: 5,
  },
  orangeMarigold: {
    name: "Orange Marigold",
    kind: "marigold",
    appearance: "marigold",
    rarity: "common",
    w: 20,
    petal: "#ff8a65",
    stem: "#558b2f",
    sell: 5,
  },
  purplePansy: {
    name: "Purple Pansy",
    kind: "pansy",
    appearance: "pansy",
    rarity: "common",
    w: 22,
    petal: "#7b1fa2",
    stem: "#66bb6a",
    sell: 5,
  },
  yellowPansy: {
    name: "Yellow Pansy",
    kind: "pansy",
    appearance: "pansy",
    rarity: "common",
    w: 20,
    petal: "#fdd835",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkPetunia: {
    name: "Pink Petunia",
    kind: "petunia",
    appearance: "petunia",
    rarity: "common",
    w: 22,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  purplePetunia: {
    name: "Purple Petunia",
    kind: "petunia",
    appearance: "petunia",
    rarity: "common",
    w: 20,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 5,
  },
  yellowPrimrose: {
    name: "Yellow Primrose",
    kind: "primrose",
    appearance: "primrose",
    rarity: "common",
    w: 22,
    petal: "#fff176",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkPrimrose: {
    name: "Pink Primrose",
    kind: "primrose",
    appearance: "primrose",
    rarity: "common",
    w: 18,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleCrocus: {
    name: "Purple Crocus",
    kind: "crocus",
    appearance: "crocus",
    rarity: "common",
    w: 20,
    petal: "#7b1fa2",
    stem: "#66bb6a",
    sell: 5,
  },
  yellowCrocus: {
    name: "Yellow Crocus",
    kind: "crocus",
    appearance: "crocus",
    rarity: "common",
    w: 18,
    petal: "#fdd835",
    stem: "#66bb6a",
    sell: 5,
  },
  orangeCalendula: {
    name: "Orange Calendula",
    kind: "calendula",
    appearance: "calendula",
    rarity: "common",
    w: 22,
    petal: "#ff8a65",
    stem: "#558b2f",
    sell: 5,
  },
  yellowCalendula: {
    name: "Yellow Calendula",
    kind: "calendula",
    appearance: "calendula",
    rarity: "common",
    w: 20,
    petal: "#fdd835",
    stem: "#558b2f",
    sell: 5,
  },
  pinkCosmos: {
    name: "Pink Cosmos",
    kind: "cosmos",
    appearance: "cosmos",
    rarity: "common",
    w: 22,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  whiteCosmos: {
    name: "White Cosmos",
    kind: "cosmos",
    appearance: "cosmos",
    rarity: "common",
    w: 18,
    petal: "#f5f5f5",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkZinnia: {
    name: "Pink Zinnia",
    kind: "zinnia",
    appearance: "zinnia",
    rarity: "common",
    w: 20,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  orangeZinnia: {
    name: "Orange Zinnia",
    kind: "zinnia",
    appearance: "zinnia",
    rarity: "common",
    w: 18,
    petal: "#ff8a65",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkSnapdragon: {
    name: "Pink Snapdragon",
    kind: "snapdragon",
    appearance: "snapdragon",
    rarity: "common",
    w: 18,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  yellowSnapdragon: {
    name: "Yellow Snapdragon",
    kind: "snapdragon",
    appearance: "snapdragon",
    rarity: "common",
    w: 16,
    petal: "#fdd835",
    stem: "#66bb6a",
    sell: 5,
  },
  blueForgetMeNot: {
    name: "Blue Forget-me-not",
    kind: "forgetmenot",
    appearance: "forgetmenot",
    rarity: "common",
    w: 24,
    petal: "#64b5f6",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkAster: {
    name: "Pink Aster",
    kind: "aster",
    appearance: "aster",
    rarity: "common",
    w: 18,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleAster: {
    name: "Purple Aster",
    kind: "aster",
    appearance: "aster",
    rarity: "common",
    w: 16,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 5,
  },
  blueCornflower: {
    name: "Blue Cornflower",
    kind: "cornflower",
    appearance: "cornflower",
    rarity: "common",
    w: 22,
    petal: "#1e88e5",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkImpatiens: {
    name: "Pink Impatiens",
    kind: "impatiens",
    appearance: "impatiens",
    rarity: "common",
    w: 20,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkVerbena: {
    name: "Pink Verbena",
    kind: "verbena",
    appearance: "verbena",
    rarity: "common",
    w: 18,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleHeather: {
    name: "Purple Heather",
    kind: "heather",
    appearance: "heather",
    rarity: "common",
    w: 18,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 6,
  },
  purpleStatice: {
    name: "Purple Statice",
    kind: "statice",
    appearance: "statice",
    rarity: "common",
    w: 20,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 5,
  },
  orangeGerbera: {
    name: "Orange Gerbera Daisy",
    kind: "gerbera",
    appearance: "gerbera",
    rarity: "common",
    w: 20,
    petal: "#ff8a65",
    stem: "#558b2f",
    sell: 5,
  },
  pinkGerbera: {
    name: "Pink Gerbera Daisy",
    kind: "gerbera",
    appearance: "gerbera",
    rarity: "common",
    w: 18,
    petal: "#f48fb1",
    stem: "#558b2f",
    sell: 5,
  },
  blackEyedSusan: {
    name: "Black-eyed Susan",
    kind: "blackeyedsusan",
    appearance: "blackeyedsusan",
    rarity: "common",
    w: 20,
    petal: "#fdd835",
    stem: "#558b2f",
    sell: 5,
  },
  blueSalvia: {
    name: "Blue Salvia",
    kind: "salvia",
    appearance: "salvia",
    rarity: "common",
    w: 18,
    petal: "#3949ab",
    stem: "#33691e",
    sell: 5,
  },
  yellowAlstroemeria: {
    name: "Yellow Alstroemeria",
    kind: "alstroemeria",
    appearance: "alstroemeria",
    rarity: "common",
    w: 18,
    petal: "#fff176",
    stem: "#66bb6a",
    sell: 6,
  },
  orangeNasturtium: {
    name: "Orange Nasturtium",
    kind: "nasturtium",
    appearance: "nasturtium",
    rarity: "common",
    w: 20,
    petal: "#ff8a65",
    stem: "#558b2f",
    sell: 5,
  },
  pinkPhlox: {
    name: "Pink Phlox",
    kind: "phlox",
    appearance: "phlox",
    rarity: "common",
    w: 18,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 5,
  },
  purpleVeronica: {
    name: "Purple Veronica",
    kind: "veronica",
    appearance: "veronica",
    rarity: "common",
    w: 16,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 5,
  },
  pinkSweetPea: {
    name: "Pink Sweet Pea",
    kind: "sweetpea",
    appearance: "sweetpea",
    rarity: "common",
    w: 18,
    petal: "#f8bbd0",
    stem: "#aed581",
    sell: 5,
  },
  yellowWallflower: {
    name: "Yellow Wallflower",
    kind: "wallflower",
    appearance: "wallflower",
    rarity: "common",
    w: 16,
    petal: "#fdd835",
    stem: "#66bb6a",
    sell: 5,
  },
  redGaillardia: {
    name: "Red Gaillardia",
    kind: "gaillardia",
    appearance: "gaillardia",
    rarity: "common",
    w: 16,
    petal: "#f44336",
    stem: "#558b2f",
    sell: 5,
  },
  pinkStock: {
    name: "Pink Stock",
    kind: "stock",
    appearance: "stock",
    rarity: "common",
    w: 18,
    petal: "#f06292",
    stem: "#66bb6a",
    sell: 5,
  },
  // ── Uncommon (46) ───────────────────────────────────────────
  sunflower: {
    name: "Sunflower",
    kind: "sunflower",
    appearance: "sunflower",
    rarity: "uncommon",
    w: 16,
    petal: "#fdd835",
    stem: "#558b2f",
    sell: 18,
  },
  lavender: {
    name: "Lavender",
    kind: "lavender",
    appearance: "lavender",
    rarity: "uncommon",
    w: 14,
    petal: "#b39ddb",
    stem: "#7cb342",
    sell: 16,
  },
  whiteTulip: {
    name: "White Tulip",
    kind: "tulip",
    appearance: "tulip",
    rarity: "uncommon",
    w: 12,
    petal: "#eceff1",
    stem: "#66bb6a",
    sell: 12,
  },
  redRose: {
    name: "Red Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "uncommon",
    w: 12,
    petal: "#c62828",
    stem: "#43a047",
    sell: 18,
  },
  pinkRose: {
    name: "Pink Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "uncommon",
    w: 8,
    petal: "#e91e63",
    stem: "#43a047",
    sell: 22,
  },
  pinkLily: {
    name: "Pink Lily",
    kind: "lily",
    appearance: "lily",
    rarity: "uncommon",
    w: 12,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 14,
  },
  blueIris: {
    name: "Blue Iris",
    kind: "iris",
    appearance: "iris",
    rarity: "uncommon",
    w: 10,
    petal: "#1976d2",
    stem: "#66bb6a",
    sell: 16,
  },
  whiteDaffodil: {
    name: "White Daffodil",
    kind: "daffodil",
    appearance: "daffodil",
    rarity: "uncommon",
    w: 10,
    petal: "#f5f5f5",
    stem: "#66bb6a",
    sell: 15,
  },
  whiteViolet: {
    name: "White Violet",
    kind: "violet",
    appearance: "violet",
    rarity: "uncommon",
    w: 8,
    petal: "#ede7f6",
    stem: "#66bb6a",
    sell: 14,
  },
  pinkPeony: {
    name: "Pink Peony",
    kind: "peony",
    appearance: "peony",
    rarity: "uncommon",
    w: 10,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 18,
  },
  redPoppy: {
    name: "Red Poppy",
    kind: "poppy",
    appearance: "poppy",
    rarity: "uncommon",
    w: 18,
    petal: "#f44336",
    stem: "#558b2f",
    sell: 15,
  },
  orangePoppy: {
    name: "Orange Poppy",
    kind: "poppy",
    appearance: "poppy",
    rarity: "uncommon",
    w: 14,
    petal: "#ff6d00",
    stem: "#558b2f",
    sell: 16,
  },
  cherryBlossom: {
    name: "Cherry Blossom",
    kind: "cherry",
    appearance: "cherry",
    rarity: "uncommon",
    w: 16,
    petal: "#fce4ec",
    stem: "#795548",
    sell: 20,
  },
  deepCherry: {
    name: "Deep Cherry",
    kind: "cherry",
    appearance: "cherry",
    rarity: "uncommon",
    w: 10,
    petal: "#e91e63",
    stem: "#795548",
    sell: 22,
  },
  yellowRose: {
    name: "Yellow Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "uncommon",
    w: 10,
    petal: "#f9a825",
    stem: "#43a047",
    sell: 20,
  },
  peachRose: {
    name: "Peach Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "uncommon",
    w: 8,
    petal: "#ffcc80",
    stem: "#43a047",
    sell: 20,
  },
  purpleRose: {
    name: "Purple Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "uncommon",
    w: 6,
    petal: "#7b1fa2",
    stem: "#388e3c",
    sell: 25,
  },
  pinkAlstroemeria: {
    name: "Pink Alstroemeria",
    kind: "alstroemeria",
    appearance: "alstroemeria",
    rarity: "uncommon",
    w: 14,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 16,
  },
  blueHyacinth: {
    name: "Blue Hyacinth",
    kind: "hyacinth",
    appearance: "hyacinth",
    rarity: "uncommon",
    w: 12,
    petal: "#1e88e5",
    stem: "#66bb6a",
    sell: 16,
  },
  purpleChrysanthemum: {
    name: "Purple Chrysanthemum",
    kind: "chrysanthemum",
    appearance: "chrysanthemum",
    rarity: "uncommon",
    w: 12,
    petal: "#7b1fa2",
    stem: "#66bb6a",
    sell: 16,
  },
  whiteMagnolia: {
    name: "White Magnolia",
    kind: "magnolia",
    appearance: "magnolia",
    rarity: "uncommon",
    w: 14,
    petal: "#fafafa",
    stem: "#795548",
    sell: 18,
  },
  pinkMagnolia: {
    name: "Pink Magnolia",
    kind: "magnolia",
    appearance: "magnolia",
    rarity: "uncommon",
    w: 10,
    petal: "#ffcdd2",
    stem: "#795548",
    sell: 20,
  },
  redBegonia: {
    name: "Red Begonia",
    kind: "begonia",
    appearance: "begonia",
    rarity: "uncommon",
    w: 14,
    petal: "#f44336",
    stem: "#66bb6a",
    sell: 15,
  },
  pinkBegonia: {
    name: "Pink Begonia",
    kind: "begonia",
    appearance: "begonia",
    rarity: "uncommon",
    w: 12,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 15,
  },
  pinkDahlia: {
    name: "Pink Dahlia",
    kind: "dahlia",
    appearance: "dahlia",
    rarity: "uncommon",
    w: 14,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 18,
  },
  purpleDahlia: {
    name: "Purple Dahlia",
    kind: "dahlia",
    appearance: "dahlia",
    rarity: "uncommon",
    w: 12,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 18,
  },
  orangeDahlia: {
    name: "Orange Dahlia",
    kind: "dahlia",
    appearance: "dahlia",
    rarity: "uncommon",
    w: 10,
    petal: "#ff8a65",
    stem: "#66bb6a",
    sell: 18,
  },
  pinkAzalea: {
    name: "Pink Azalea",
    kind: "azalea",
    appearance: "azalea",
    rarity: "uncommon",
    w: 14,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 16,
  },
  redAnemone: {
    name: "Red Anemone",
    kind: "anemone",
    appearance: "anemone",
    rarity: "uncommon",
    w: 14,
    petal: "#f44336",
    stem: "#66bb6a",
    sell: 15,
  },
  purpleAnemone: {
    name: "Purple Anemone",
    kind: "anemone",
    appearance: "anemone",
    rarity: "uncommon",
    w: 12,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 16,
  },
  yellowFreesia: {
    name: "Yellow Freesia",
    kind: "freesia",
    appearance: "freesia",
    rarity: "uncommon",
    w: 14,
    petal: "#fff176",
    stem: "#66bb6a",
    sell: 16,
  },
  pinkFreesia: {
    name: "Pink Freesia",
    kind: "freesia",
    appearance: "freesia",
    rarity: "uncommon",
    w: 12,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 16,
  },
  pinkGladiolus: {
    name: "Pink Gladiolus",
    kind: "gladiolus",
    appearance: "gladiolus",
    rarity: "uncommon",
    w: 14,
    petal: "#f48fb1",
    stem: "#558b2f",
    sell: 18,
  },
  purpleGladiolus: {
    name: "Purple Gladiolus",
    kind: "gladiolus",
    appearance: "gladiolus",
    rarity: "uncommon",
    w: 12,
    petal: "#9c27b0",
    stem: "#558b2f",
    sell: 18,
  },
  pinkHibiscus: {
    name: "Pink Hibiscus",
    kind: "hibiscus",
    appearance: "hibiscus",
    rarity: "uncommon",
    w: 14,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 18,
  },
  redHibiscus: {
    name: "Red Hibiscus",
    kind: "hibiscus",
    appearance: "hibiscus",
    rarity: "uncommon",
    w: 12,
    petal: "#f44336",
    stem: "#66bb6a",
    sell: 18,
  },
  lilyValley: {
    name: "Lily of the Valley",
    kind: "lilyvalley",
    appearance: "lilyvalley",
    rarity: "uncommon",
    w: 12,
    petal: "#f5f5f5",
    stem: "#aed581",
    sell: 20,
  },
  purpleWisteria: {
    name: "Purple Wisteria",
    kind: "wisteria",
    appearance: "wisteria",
    rarity: "uncommon",
    w: 10,
    petal: "#9c27b0",
    stem: "#795548",
    sell: 22,
  },
  purpleFoxglove: {
    name: "Purple Foxglove",
    kind: "foxglove",
    appearance: "foxglove",
    rarity: "uncommon",
    w: 12,
    petal: "#9c27b0",
    stem: "#558b2f",
    sell: 18,
  },
  pinkFoxglove: {
    name: "Pink Foxglove",
    kind: "foxglove",
    appearance: "foxglove",
    rarity: "uncommon",
    w: 14,
    petal: "#f48fb1",
    stem: "#558b2f",
    sell: 16,
  },
  whiteGardenia: {
    name: "White Gardenia",
    kind: "gardenia",
    appearance: "gardenia",
    rarity: "uncommon",
    w: 10,
    petal: "#fafafa",
    stem: "#43a047",
    sell: 22,
  },
  pinkCyclamen: {
    name: "Pink Cyclamen",
    kind: "cyclamen",
    appearance: "cyclamen",
    rarity: "uncommon",
    w: 12,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 18,
  },
  pinkRanunculus: {
    name: "Pink Ranunculus",
    kind: "ranunculus",
    appearance: "ranunculus",
    rarity: "uncommon",
    w: 12,
    petal: "#f48fb1",
    stem: "#66bb6a",
    sell: 20,
  },
  whiteJasmine: {
    name: "White Jasmine",
    kind: "jasmine",
    appearance: "jasmine",
    rarity: "uncommon",
    w: 12,
    petal: "#fafafa",
    stem: "#aed581",
    sell: 18,
  },
  purpleBuddleia: {
    name: "Purple Buddleia",
    kind: "buddleia",
    appearance: "buddleia",
    rarity: "uncommon",
    w: 12,
    petal: "#9c27b0",
    stem: "#558b2f",
    sell: 18,
  },
  purpleLantana: {
    name: "Purple Lantana",
    kind: "lantana",
    appearance: "lantana",
    rarity: "uncommon",
    w: 12,
    petal: "#9c27b0",
    stem: "#66bb6a",
    sell: 16,
  },
  // ── Rare (27) ───────────────────────────────────────────────
  tigerLily: {
    name: "Tiger Lily",
    kind: "lily",
    appearance: "lily",
    rarity: "rare",
    w: 4,
    petal: "#ff7043",
    stem: "#558b2f",
    sell: 60,
  },
  goldenIris: {
    name: "Golden Iris",
    kind: "iris",
    appearance: "iris",
    rarity: "rare",
    w: 4,
    petal: "#f9a825",
    stem: "#558b2f",
    sell: 62,
  },
  pinkDaffodil: {
    name: "Pink Daffodil",
    kind: "daffodil",
    appearance: "daffodil",
    rarity: "rare",
    w: 3,
    petal: "#f8bbd0",
    stem: "#558b2f",
    sell: 58,
  },
  redPeony: {
    name: "Red Peony",
    kind: "peony",
    appearance: "peony",
    rarity: "rare",
    w: 3,
    petal: "#e53935",
    stem: "#558b2f",
    sell: 65,
  },
  purpleOrchid: {
    name: "Purple Orchid",
    kind: "orchid",
    appearance: "orchid",
    rarity: "rare",
    w: 3,
    petal: "#ab47bc",
    stem: "#558b2f",
    sell: 68,
  },
  blackTulip: {
    name: "Black Tulip",
    kind: "tulip",
    appearance: "tulip",
    rarity: "rare",
    w: 2,
    petal: "#263238",
    stem: "#1b5e20",
    sell: 70,
  },
  silverRose: {
    name: "Silver Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "rare",
    w: 2,
    petal: "#90a4ae",
    stem: "#546e7a",
    sell: 75,
  },
  crystalDaisy: {
    name: "Crystal Daisy",
    kind: "daisy",
    appearance: "daisy",
    rarity: "rare",
    w: 2,
    petal: "#e3f2fd",
    stem: "#0288d1",
    sell: 65,
  },
  violetPoppy: {
    name: "Violet Poppy",
    kind: "poppy",
    appearance: "poppy",
    rarity: "rare",
    w: 2,
    petal: "#6a1b9a",
    stem: "#1a237e",
    sell: 70,
  },
  goldenCherry: {
    name: "Golden Cherry",
    kind: "cherry",
    appearance: "cherry",
    rarity: "rare",
    w: 1,
    petal: "#f9a825",
    stem: "#5d4037",
    sell: 80,
  },
  midnightRose: {
    name: "Midnight Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "rare",
    w: 1,
    petal: "#37474f",
    stem: "#212121",
    sell: 90,
  },
  purpleCarnation: {
    name: "Purple Carnation",
    kind: "carnation",
    appearance: "carnation",
    rarity: "rare",
    w: 4,
    petal: "#9c27b0",
    stem: "#1b5e20",
    sell: 60,
  },
  pinkFuchsia: {
    name: "Pink Fuchsia",
    kind: "fuchsia",
    appearance: "fuchsia",
    rarity: "rare",
    w: 4,
    petal: "#f06292",
    stem: "#33691e",
    sell: 62,
  },
  purpleClematis: {
    name: "Purple Clematis",
    kind: "clematis",
    appearance: "clematis",
    rarity: "rare",
    w: 4,
    petal: "#7b1fa2",
    stem: "#1b5e20",
    sell: 60,
  },
  blueHydrangea: {
    name: "Blue Hydrangea",
    kind: "hydrangea",
    appearance: "hydrangea",
    rarity: "rare",
    w: 4,
    petal: "#64b5f6",
    stem: "#33691e",
    sell: 62,
  },
  pinkHydrangea: {
    name: "Pink Hydrangea",
    kind: "hydrangea",
    appearance: "hydrangea",
    rarity: "rare",
    w: 3,
    petal: "#f48fb1",
    stem: "#33691e",
    sell: 65,
  },
  whiteCamellia: {
    name: "White Camellia",
    kind: "camellia",
    appearance: "camellia",
    rarity: "rare",
    w: 4,
    petal: "#fafafa",
    stem: "#33691e",
    sell: 60,
  },
  redCamellia: {
    name: "Red Camellia",
    kind: "camellia",
    appearance: "camellia",
    rarity: "rare",
    w: 3,
    petal: "#e53935",
    stem: "#33691e",
    sell: 62,
  },
  pinkLotus: {
    name: "Pink Lotus",
    kind: "lotus",
    appearance: "lotus",
    rarity: "rare",
    w: 3,
    petal: "#f48fb1",
    stem: "#006064",
    sell: 70,
  },
  pinkPlumeria: {
    name: "Pink Plumeria",
    kind: "plumeria",
    appearance: "plumeria",
    rarity: "rare",
    w: 3,
    petal: "#f8bbd0",
    stem: "#5d4037",
    sell: 68,
  },
  pinkBleedingHeart: {
    name: "Pink Bleeding Heart",
    kind: "bleedingheart",
    appearance: "bleedingheart",
    rarity: "rare",
    w: 3,
    petal: "#f48fb1",
    stem: "#558b2f",
    sell: 65,
  },
  blueMorningGlory: {
    name: "Blue Morning Glory",
    kind: "morningglory",
    appearance: "morningglory",
    rarity: "rare",
    w: 3,
    petal: "#1e88e5",
    stem: "#558b2f",
    sell: 65,
  },
  purpleHellebore: {
    name: "Purple Hellebore",
    kind: "hellebore",
    appearance: "hellebore",
    rarity: "rare",
    w: 3,
    petal: "#6a1b9a",
    stem: "#1b5e20",
    sell: 68,
  },
  purpleAllium: {
    name: "Purple Allium",
    kind: "allium",
    appearance: "allium",
    rarity: "rare",
    w: 3,
    petal: "#9c27b0",
    stem: "#558b2f",
    sell: 65,
  },
  purpleGloxinia: {
    name: "Purple Gloxinia",
    kind: "gloxinia",
    appearance: "gloxinia",
    rarity: "rare",
    w: 3,
    petal: "#9c27b0",
    stem: "#33691e",
    sell: 70,
  },
  yellowPlumeria: {
    name: "Yellow Plumeria",
    kind: "plumeria",
    appearance: "plumeria",
    rarity: "rare",
    w: 2,
    petal: "#fff176",
    stem: "#5d4037",
    sell: 72,
  },
  magentaBougainvillea: {
    name: "Magenta Bougainvillea",
    kind: "bougainvillea",
    appearance: "bougainvillea",
    rarity: "rare",
    w: 3,
    petal: "#e91e63",
    stem: "#795548",
    sell: 68,
  },
  // ── Legendary (15) ──────────────────────────────────────────
  blueRose: {
    name: "Blue Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "legendary",
    w: 3,
    petal: "#3f51b5",
    stem: "#388e3c",
    sell: 60,
  },
  blueTulip: {
    name: "Blue Tulip",
    kind: "tulip",
    appearance: "tulip",
    rarity: "legendary",
    w: 3,
    petal: "#1565c0",
    stem: "#1b5e20",
    sell: 65,
  },
  goldenRose: {
    name: "Golden Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "legendary",
    w: 2,
    petal: "#f9a825",
    stem: "#33691e",
    sell: 75,
  },
  blackRose: {
    name: "Black Rose",
    kind: "rose",
    appearance: "rose",
    rarity: "legendary",
    w: 1,
    petal: "#212121",
    stem: "#1b5e20",
    sell: 85,
  },
  whitePeony: {
    name: "White Peony",
    kind: "peony",
    appearance: "peony",
    rarity: "legendary",
    w: 2,
    petal: "#fafafa",
    stem: "#33691e",
    sell: 80,
  },
  pinkOrchid: {
    name: "Pink Orchid",
    kind: "orchid",
    appearance: "orchid",
    rarity: "legendary",
    w: 2,
    petal: "#f06292",
    stem: "#33691e",
    sell: 85,
  },
  blueOrchid: {
    name: "Blue Orchid",
    kind: "orchid",
    appearance: "orchid",
    rarity: "legendary",
    w: 1,
    petal: "#42a5f5",
    stem: "#1b5e20",
    sell: 90,
  },
  whiteLotus: {
    name: "White Lotus",
    kind: "lotus",
    appearance: "lotus",
    rarity: "legendary",
    w: 3,
    petal: "#fafafa",
    stem: "#006064",
    sell: 80,
  },
  saffron: {
    name: "Saffron Crocus",
    kind: "saffron",
    appearance: "saffron",
    rarity: "legendary",
    w: 2,
    petal: "#ba68c8",
    stem: "#f9a825",
    sell: 85,
  },
  whitePlumeria: {
    name: "White Plumeria",
    kind: "plumeria",
    appearance: "plumeria",
    rarity: "legendary",
    w: 2,
    petal: "#fafafa",
    stem: "#5d4037",
    sell: 80,
  },
  greenHydrangea: {
    name: "Green Hydrangea",
    kind: "hydrangea",
    appearance: "hydrangea",
    rarity: "legendary",
    w: 2,
    petal: "#a5d6a7",
    stem: "#33691e",
    sell: 80,
  },
  whiteWisteria: {
    name: "White Wisteria",
    kind: "wisteria",
    appearance: "wisteria",
    rarity: "legendary",
    w: 2,
    petal: "#fafafa",
    stem: "#795548",
    sell: 82,
  },
  redAmaryllis: {
    name: "Red Amaryllis",
    kind: "amaryllis",
    appearance: "amaryllis",
    rarity: "legendary",
    w: 2,
    petal: "#f44336",
    stem: "#33691e",
    sell: 78,
  },
  orangeBromeliad: {
    name: "Orange Bromeliad",
    kind: "bromeliad",
    appearance: "bromeliad",
    rarity: "legendary",
    w: 2,
    petal: "#ff8a65",
    stem: "#795548",
    sell: 80,
  },
  darkHellebore: {
    name: "Dark Hellebore",
    kind: "hellebore",
    appearance: "hellebore",
    rarity: "legendary",
    w: 1,
    petal: "#4a148c",
    stem: "#1b5e20",
    sell: 90,
  },
  // ── Unique (1) ──────────────────────────────────────────────
  whiteLily: {
    name: "White Lily",
    kind: "lily",
    appearance: "lily",
    rarity: "unique",
    w: 1,
    petal: "#f5f5f5",
    stem: "#66bb6a",
    sell: 200,
  },
  // ── Hybrid-Only Flowers (cannot drop from packets) ────────
  sunsetRose: { name: "Sunset Rose", kind: "rose", appearance: "rose", rarity: "hybrid", w: 0, petal: "#ff7043", stem: "#66bb6a", sell: 45, parents: ["rose", "tulip"] },
  moonlightLily: { name: "Moonlight Lily", kind: "lily", appearance: "lily", rarity: "hybrid", w: 0, petal: "#b0bec5", stem: "#558b2f", sell: 50, parents: ["lily", "violet"] },
  crimsonOrchid: { name: "Crimson Orchid", kind: "orchid", appearance: "orchid", rarity: "hybrid", w: 0, petal: "#c62828", stem: "#33691e", sell: 55, parents: ["orchid", "rose"] },
  goldenDaisy: { name: "Golden Daisy", kind: "daisy", appearance: "daisy", rarity: "hybrid", w: 0, petal: "#ffd600", stem: "#558b2f", sell: 35, parents: ["daisy", "sunflower"] },
  frostedCherry: { name: "Frosted Cherry", kind: "cherry", appearance: "cherry", rarity: "hybrid", w: 0, petal: "#e1bee7", stem: "#66bb6a", sell: 40, parents: ["cherry", "lily"] },
  shadowIris: { name: "Shadow Iris", kind: "iris", appearance: "iris", rarity: "hybrid", w: 0, petal: "#37474f", stem: "#33691e", sell: 50, parents: ["iris", "tulip"] },
  coralPeony: { name: "Coral Peony", kind: "peony", appearance: "peony", rarity: "hybrid", w: 0, petal: "#ff8a65", stem: "#558b2f", sell: 45, parents: ["peony", "poppy"] },
  stardustLavender: { name: "Stardust Lavender", kind: "lavender", appearance: "lavender", rarity: "hybrid", w: 0, petal: "#ce93d8", stem: "#558b2f", sell: 40, parents: ["lavender", "violet"] },
  emeraldTulip: { name: "Emerald Tulip", kind: "tulip", appearance: "tulip", rarity: "hybrid", w: 0, petal: "#4caf50", stem: "#33691e", sell: 55, parents: ["tulip", "iris"] },
  phoenixSunflower: { name: "Phoenix Sunflower", kind: "sunflower", appearance: "sunflower", rarity: "hybrid", w: 0, petal: "#ff5722", stem: "#558b2f", sell: 60, parents: ["sunflower", "rose"] },
  crystalViolet: { name: "Crystal Violet", kind: "violet", appearance: "violet", rarity: "hybrid", w: 0, petal: "#80deea", stem: "#66bb6a", sell: 45, parents: ["violet", "daisy"] },
  midnightPoppy: { name: "Midnight Poppy", kind: "poppy", appearance: "poppy", rarity: "hybrid", w: 0, petal: "#1a237e", stem: "#33691e", sell: 50, parents: ["poppy", "iris"] },
};
const RARITY_LABEL = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "\u2605 Rare",
  legendary: "\u2726 Legendary",
  unique: "\u2726\u2726 Unique \u2726\u2726",
  hybrid: "\ud83e\uddec Fusion",
};
// ── Dynamic Hybrid Name Generator ────────────────────────
function generateHybridName(name1, name2) {
  var words1 = name1.split(" "), words2 = name2.split(" ");
  var prefix, species;
  // Single-word names: use special prefixes
  var singlePrefixes = {
    "Sunflower": "Solar", "Lavender": "Misty", "Snapdragon": "Dragon",
  };
  if (words1.length >= 2) {
    prefix = words1[0];
  } else {
    prefix = singlePrefixes[name1] || (name1.slice(0, -2));
  }
  if (words2.length >= 2) {
    species = words2[words2.length - 1];
  } else {
    species = name2;
  }
  // Same species? Mix the color adjectives instead
  if (words1[words1.length - 1] === words2[words2.length - 1] && words1.length >= 2 && words2.length >= 2) {
    prefix = words1[0] + "-" + words2[0];
    species = words1[words1.length - 1];
  }
  return prefix + " " + species;
}

function generateHybridKey(key1, key2) {
  // Consistent ordering so rose+tulip = tulip+rose
  var sorted = [key1, key2].sort();
  return "dyn_" + sorted[0] + "_" + sorted[1];
}

function mixColors(hex1, hex2) {
  var r1 = parseInt(hex1.slice(1, 3), 16), g1 = parseInt(hex1.slice(3, 5), 16), b1 = parseInt(hex1.slice(5, 7), 16);
  var r2 = parseInt(hex2.slice(1, 3), 16), g2 = parseInt(hex2.slice(3, 5), 16), b2 = parseInt(hex2.slice(5, 7), 16);
  var r = Math.round((r1 + r2) / 2), g = Math.round((g1 + g2) / 2), b = Math.round((b1 + b2) / 2);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Map kind to display species name (capitalized)
var KIND_DISPLAY = {
  tulip:"Tulip", rose:"Rose", daisy:"Daisy", sunflower:"Sunflower",
  poppy:"Poppy", cherry:"Cherry Blossom", violet:"Violet", lily:"Lily",
  iris:"Iris", daffodil:"Daffodil", peony:"Peony", orchid:"Orchid",
  lavender:"Lavender", carnation:"Carnation", chrysanthemum:"Mum",
  hyacinth:"Hyacinth", bluebell:"Bluebell", cosmos:"Cosmos",
};

// Color name from hex (approximate) — expanded palette for hybrid variety
// Azure, Jade, Teal are mutation-only (returned by colorNameForMutation)
function colorNameFromHex(hex) {
  var r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  var max = Math.max(r,g,b), min = Math.min(r,g,b), sat = max - min;
  var brightness = (r + g + b) / 3;
  // Achromatic
  if (brightness > 230) return "Snow";
  if (brightness > 200 && sat < 30) return "Ivory";
  if (brightness < 35) return "Midnight";
  if (brightness < 60 && sat < 40) return "Shadow";
  if (sat < 25) return brightness > 160 ? "Silver" : brightness > 100 ? "Ash" : "Dusk";
  // Compute hue (0-360)
  var h = 0;
  if (sat > 0) {
    if (max === r) h = ((g - b) / sat + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / sat + 2) * 60;
    else h = ((r - g) / sat + 4) * 60;
  }
  // Reds (0-15, 345-360)
  if (h >= 345 || h < 15) {
    if (brightness > 190) return "Blush";
    if (brightness > 140) return "Rose";
    if (brightness > 100) return "Scarlet";
    return "Crimson";
  }
  // Red-Orange (15-30)
  if (h >= 15 && h < 30) {
    if (brightness > 160) return "Peach";
    return "Rust";
  }
  // Orange (30-45)
  if (h >= 30 && h < 45) {
    if (brightness > 170) return "Apricot";
    return "Amber";
  }
  // Gold-Yellow (45-65)
  if (h >= 45 && h < 65) {
    if (brightness > 180) return "Golden";
    return "Honey";
  }
  // Yellow-Green (65-90)
  if (h >= 65 && h < 90) {
    if (brightness > 160) return "Lemon";
    return "Olive";
  }
  // Green (90-150) — rare from mixing, reserved names for mutations
  if (h >= 90 && h < 150) {
    if (brightness > 160) return "Spring";
    if (brightness > 100) return "Fern";
    return "Forest";
  }
  // Cyan-Teal (150-190) — rare from mixing
  if (h >= 150 && h < 190) {
    if (brightness > 150) return "Seafoam";
    return "Pine";
  }
  // Blue (190-250)
  if (h >= 190 && h < 250) {
    if (brightness > 170) return "Sky";
    if (brightness > 120) return "Sapphire";
    return "Cobalt";
  }
  // Blue-Purple (250-280)
  if (h >= 250 && h < 280) {
    if (brightness > 150) return "Lavender";
    if (brightness > 100) return "Violet";
    return "Indigo";
  }
  // Purple-Magenta (280-320)
  if (h >= 280 && h < 320) {
    if (brightness > 160) return "Orchid";
    if (brightness > 100) return "Plum";
    return "Royal";
  }
  // Magenta-Pink (320-345)
  if (h >= 320 && h < 345) {
    if (brightness > 170) return "Coral";
    if (brightness > 120) return "Magenta";
    return "Berry";
  }
  return "Mystic";
}

// Mutation-only color names — rarer, more exotic
function colorNameForMutation(hex) {
  var r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  var max = Math.max(r,g,b), sat = max - Math.min(r,g,b);
  var brightness = (r + g + b) / 3;
  if (sat < 20) return brightness > 150 ? "Ghostly" : "Obsidian";
  var h = 0;
  if (sat > 0) {
    if (max === r) h = ((g - b) / sat + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / sat + 2) * 60;
    else h = ((r - g) / sat + 4) * 60;
  }
  if (h >= 90 && h < 160) return brightness > 140 ? "Jade" : "Emerald";
  if (h >= 160 && h < 200) return brightness > 140 ? "Teal" : "Abyssal";
  if (h >= 200 && h < 260) return brightness > 150 ? "Azure" : "Celestial";
  if (h >= 260 && h < 310) return "Ethereal";
  if (h >= 310 || h < 20) return brightness > 160 ? "Flamingo" : "Garnet";
  if (h >= 20 && h < 50) return "Solar";
  if (h >= 50 && h < 90) return "Aurora";
  return "Phantom";
}

// Shift hex color hue by degrees (for mutations)
function shiftHue(hex, degrees) {
  var r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
  var max = Math.max(r,g,b), min = Math.min(r,g,b), d = max - min;
  var h = 0, s = max === 0 ? 0 : d / max, v = max;
  if (d > 0) {
    if (max === r) h = ((g-b)/d + (g<b?6:0)) / 6;
    else if (max === g) h = ((b-r)/d + 2) / 6;
    else h = ((r-g)/d + 4) / 6;
  }
  h = ((h * 360 + degrees) % 360) / 360;
  if (h < 0) h += 1;
  var hi = Math.floor(h * 6), f = h * 6 - hi, p = v*(1-s), q = v*(1-f*s), t = v*(1-(1-f)*s);
  var ro, go, bo;
  switch(hi % 6) {
    case 0: ro=v; go=t; bo=p; break;
    case 1: ro=q; go=v; bo=p; break;
    case 2: ro=p; go=v; bo=t; break;
    case 3: ro=p; go=q; bo=v; break;
    case 4: ro=t; go=p; bo=v; break;
    case 5: ro=v; go=p; bo=q; break;
  }
  return "#" + [ro,go,bo].map(function(c) { return Math.round(c*255).toString(16).padStart(2,"0"); }).join("");
}

// Look up a breed recipe for two flower kinds
function findBreedRecipe(kind1, kind2) {
  var sorted = [kind1, kind2].sort();
  var key = sorted[0] + "+" + sorted[1];
  return BREED_RECIPES[key] || null;
}

function getOrCreateDynamicHybrid(key1, key2) {
  var hybKey = generateHybridKey(key1, key2);
  // Already exists?
  if (FLOWERS[hybKey]) return hybKey;
  var f1 = FLOWERS[key1], f2 = FLOWERS[key2];
  if (!f1 || !f2) return key1; // fallback
  // Use parent1's appearance (shape) with mixed colors + random jitter
  var mixedPetal = mixColors(f1.petal, f2.petal);
  var mixedStem = mixColors(f1.stem, f2.stem);
  // Add slight random hue jitter so similar parents don't produce identical colors
  var jitter = (Math.random() - 0.5) * 20; // +/-10 degrees
  mixedPetal = shiftHue(mixedPetal, jitter);
  // Randomly pick which parent's shape to use (not always parent1)
  var shapeParent = Math.random() < 0.5 ? f1 : f2;
  // Name = color adjective from mixed petal + species from the shape
  var colorAdj = colorNameFromHex(mixedPetal);
  var speciesName = KIND_DISPLAY[shapeParent.kind] || shapeParent.kind.charAt(0).toUpperCase() + shapeParent.kind.slice(1);
  var hybridName = colorAdj + " " + speciesName;
  // Sell value: average scaled by parent rarity
  var rarityBonus = { common: 1, uncommon: 1.2, rare: 1.5, legendary: 2, unique: 2.5, hybrid: 1.3 };
  var bonus = Math.max(rarityBonus[f1.rarity] || 1, rarityBonus[f2.rarity] || 1);
  var avgSell = Math.round((f1.sell + f2.sell) * 0.8 * bonus);
  FLOWERS[hybKey] = {
    name: hybridName,
    kind: shapeParent.kind,
    appearance: shapeParent.appearance,
    rarity: "hybrid",
    w: 0,
    petal: mixedPetal,
    stem: mixedStem,
    sell: Math.max(avgSell, 20),
    dynamic: true,
    parent1: key1,
    parent2: key2,
  };
  return hybKey;
}

// ── Breeding Recipes (kind1+kind2 → possible offspring) ─────
// Each recipe maps a sorted kind pair to weighted outcomes
const BREED_RECIPES = {
  "rose+tulip":     [{ key: "sunsetRose", w: 60 }, { key: "emeraldTulip", w: 25 }],
  "lily+violet":    [{ key: "moonlightLily", w: 55 }, { key: "crystalViolet", w: 30 }],
  "orchid+rose":    [{ key: "crimsonOrchid", w: 60 }],
  "daisy+sunflower":[{ key: "goldenDaisy", w: 65 }],
  "cherry+lily":    [{ key: "frostedCherry", w: 55 }],
  "iris+tulip":     [{ key: "shadowIris", w: 45 }, { key: "emeraldTulip", w: 40 }],
  "peony+poppy":    [{ key: "coralPeony", w: 60 }],
  "lavender+violet":[{ key: "stardustLavender", w: 55 }],
  "rose+sunflower": [{ key: "phoenixSunflower", w: 60 }],
  "daisy+violet":   [{ key: "crystalViolet", w: 55 }],
  "iris+poppy":     [{ key: "midnightPoppy", w: 60 }],
  // Additional cross-kind recipes for broader coverage
  "cherry+rose":    [{ key: "crimsonOrchid", w: 30 }, { key: "sunsetRose", w: 40 }],
  "daffodil+lily":  [{ key: "moonlightLily", w: 40 }, { key: "goldenDaisy", w: 30 }],
  "lavender+peony": [{ key: "coralPeony", w: 35 }, { key: "stardustLavender", w: 40 }],
  "orchid+violet":  [{ key: "crystalViolet", w: 40 }, { key: "crimsonOrchid", w: 30 }],
  "poppy+sunflower":[{ key: "phoenixSunflower", w: 45 }, { key: "midnightPoppy", w: 30 }],
  "daisy+tulip":    [{ key: "goldenDaisy", w: 45 }, { key: "emeraldTulip", w: 30 }],
  "peony+rose":     [{ key: "coralPeony", w: 40 }, { key: "sunsetRose", w: 35 }],
  "iris+lily":      [{ key: "shadowIris", w: 40 }, { key: "moonlightLily", w: 35 }],
};
// Mutation name prefixes
var MUTATION_PREFIXES = ["Vivid", "Pale", "Deep", "Bright", "Dusky", "Frosty", "Warm", "Wild", "Radiant", "Twilight", "Misty", "Ember", "Silken", "Starlit", "Ancient", "Neon"];

const STAGE_NAMES = ["🌰 Seed", "🌱 Sprout", "🌿 Growing", "🌸 Bloomed!"];
const STAGE_WATERS = 3,
  MAX_STAGE = 3;

const PKT_COST = { common: 12, uncommon: 35, rare: 80, legendary: 160 };
const POT_PRICES = [0, 0, 25, 60, 120, 250, 450, 750, 1200, 1800, 3000, 5000];
const MAX_PLOTS = 12;
const WATER_CAP_UPGRADES = [
  { cap: 10, cost: 100, label: "Water Can +4 (10 max)" },
  { cap: 14, cost: 300, label: "Water Can +4 (14 max)" },
  { cap: 18, cost: 600, label: "Water Can +4 (18 max)" },
];
const WEATHER_TYPES = ["sunny", "rainy", "drought", "snowy"];
const WEATHER_LABELS = { sunny: "\u2600\ufe0f Sunny", rainy: "\ud83c\udf27\ufe0f Rainy", drought: "\ud83c\udf35 Drought", snowy: "\u2744\ufe0f Snowy" };
const WEATHER_CLASSES = { sunny: "weather-sunny", rainy: "weather-rainy", drought: "weather-drought", snowy: "weather-snowy" };
const WEATHER_INTERVAL_MIN = 120000; // 2 min
const WEATHER_INTERVAL_MAX = 300000; // 5 min

const POT_COLORS = {
  terracotta: { rH: "#e8724e", rM: "#c9522a", rD: "#a83e18", bM: "#c24e26", bS: "#7a3010", deco: "" },
  ceramic:    { rH: "#5b9bd5", rM: "#2e75b6", rD: "#1f5c99", bM: "#f5f2ed", bS: "#ddd8d0",
    deco: '<line x1="20" y1="78" x2="60" y2="78" stroke="#5b9bd5" stroke-width="1.5" opacity=".6"/>' +
          '<line x1="20" y1="82" x2="60" y2="82" stroke="#5b9bd5" stroke-width="1" opacity=".4"/>' +
          '<circle cx="30" cy="80" r="1.5" fill="#5b9bd5" opacity=".5"/>' +
          '<circle cx="40" cy="80" r="1.5" fill="#5b9bd5" opacity=".5"/>' +
          '<circle cx="50" cy="80" r="1.5" fill="#5b9bd5" opacity=".5"/>'
  },
  golden:     { rH: "#fdd835", rM: "#f9a825", rD: "#f57f17", bM: "#e8b800", bS: "#b48a00",
    deco: '<line x1="18" y1="78" x2="62" y2="78" stroke="#fff" stroke-width="1" opacity=".5"/>' +
          '<line x1="18" y1="86" x2="62" y2="86" stroke="#fff" stroke-width="1" opacity=".5"/>'
  },
};
const PKT_LABEL = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  legendary: "✦ Legendary",
};
const PKT_ICON = { common: "📦", uncommon: "🌹", rare: "💎", legendary: "✨" };

let G = {
  coins: 5,
  pkt: { common: 2, uncommon: 0, rare: 0, legendary: 0 },
  seeds: [],
  seedId: 0,
  plots: Array(2)
    .fill(0)
    .map((_, i) => ({
      id: i,
      state: "empty",
      key: null,
      stage: 0,
      waters: 0,
      rewarded: false,
    })),
  water: 6,
  maxWater: 6,
  inventory: [],
  bloomPlot: null,
  openedKey: null,
  plantPlot: null,
  pendingPktType: "common",
  discovered: [],
  opening: false,
  tutorialDone: false,
  // NPC system
  npcs: [],
  npcTimer: 0,
  npcIdCounter: 0,
  // Weather
  weather: "sunny",
  weatherTimer: 0,
  // Achievements
  achievements: [],
  // Stats
  totalSold: 0,
  totalCoins: 0,
  totalWaters: 0,
  totalBlooms: 0,
  npcSales: 0,
  npcStreak: 0,
  npcBestStreak: 0,
  hybridCount: 0,
  daysPlayed: [],
  // Cosmetics
  potStyle: "terracotta",
  bgStyle: "default",
  lastLoginDate: null,
  loginStreak: 0,
  gardenDecor: [],
  soundEnabled: true,
  musicEnabled: true, // on by default
  musicVolume: 0.045,
  sfxVolume: 1.0,
  breedDiscovered: [],
  mutations: [],
  contextTips: {},
};

const SAVE_KEY = "yurieGarden_v1";
function saveG() {
  const s = {
    coins: G.coins,
    pkt: G.pkt,
    seeds: G.seeds,
    seedId: G.seedId,
    plots: G.plots,
    water: G.water,
    maxWater: G.maxWater,
    inventory: G.inventory,
    discovered: G.discovered,
    npcs: G.npcs,
    npcTimer: G.npcTimer,
    npcIdCounter: G.npcIdCounter,
    weather: G.weather,
    weatherTimer: G.weatherTimer,
    achievements: G.achievements,
    totalSold: G.totalSold,
    totalCoins: G.totalCoins,
    totalWaters: G.totalWaters,
    totalBlooms: G.totalBlooms,
    npcSales: G.npcSales,
    npcStreak: G.npcStreak,
    npcBestStreak: G.npcBestStreak,
    hybridCount: G.hybridCount,
    daysPlayed: G.daysPlayed,
    potStyle: G.potStyle,
    bgStyle: G.bgStyle,
    tutorialDone: G.tutorialDone,
    lastLoginDate: G.lastLoginDate,
    loginStreak: G.loginStreak,
    gardenDecor: G.gardenDecor,
    soundEnabled: G.soundEnabled,
    musicEnabled: G.musicEnabled,
    musicVolume: G.musicVolume,
    sfxVolume: G.sfxVolume,
    breedDiscovered: G.breedDiscovered,
    mutations: G.mutations,
    contextTips: G.contextTips,
    _bugfix_pkt_v1: G._bugfix_pkt_v1,
    _bugfix_pkt_v3: G._bugfix_pkt_v3,
    _lastTickTime: Date.now(),
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(s));
  } catch (e) {
    console.warn("[Garden] Save failed:", e);
  }
}
function loadG() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const s = JSON.parse(raw);
    Object.assign(G, {
      coins: s.coins ?? G.coins,
      pkt: s.pkt ?? G.pkt,
      seeds: s.seeds ?? [],
      seedId: s.seedId ?? 0,
      plots: s.plots ?? G.plots,
      water: s.water ?? G.water,
      maxWater: s.maxWater ?? G.maxWater,
      inventory: s.inventory ?? [],
      discovered: s.discovered ?? [],
      npcs: s.npcs ?? [],
      npcTimer: s.npcTimer ?? 0,
      npcIdCounter: s.npcIdCounter ?? 0,
      weather: s.weather ?? "sunny",
      weatherTimer: s.weatherTimer ?? 0,
      achievements: s.achievements ?? [],
      totalSold: s.totalSold ?? 0,
      totalCoins: s.totalCoins ?? 0,
      totalWaters: s.totalWaters ?? 0,
      totalBlooms: s.totalBlooms ?? 0,
      npcSales: s.npcSales ?? 0,
      npcStreak: s.npcStreak ?? 0,
      npcBestStreak: s.npcBestStreak ?? 0,
      hybridCount: s.hybridCount ?? 0,
      daysPlayed: s.daysPlayed ?? [],
      potStyle: s.potStyle ?? "terracotta",
      bgStyle: s.bgStyle ?? "default",
      tutorialDone: s.tutorialDone ?? false,
      lastLoginDate: s.lastLoginDate ?? null,
      loginStreak: s.loginStreak ?? 0,
      gardenDecor: s.gardenDecor ?? [],
      soundEnabled: s.soundEnabled !== false,
      musicEnabled: s.musicEnabled === true,
      musicVolume: s.musicVolume ?? 0.045,
      sfxVolume: s.sfxVolume ?? 1.0,
      breedDiscovered: s.breedDiscovered ?? [],
      mutations: s.mutations ?? [],
      contextTips: s.contextTips ?? {},
      _bugfix_pkt_v1: s._bugfix_pkt_v1 ?? false,
      _bugfix_pkt_v3: s._bugfix_pkt_v3 ?? false,
      _lastTickTime: s._lastTickTime ?? 0,
    });
    // Rebuild dynamic hybrid FLOWERS entries from save data
    // Check seeds, inventory, plots, discovered for dyn_ keys
    var allKeys = [].concat(
      G.seeds.map(function(s) { return s.key; }),
      G.inventory.map(function(i) { return i.key; }),
      G.plots.filter(function(p) { return p.key; }).map(function(p) { return p.key; }),
      G.discovered
    );
    allKeys.forEach(function(k) {
      if (k && k.indexOf("dyn_") === 0 && !FLOWERS[k]) {
        // Parse parent keys from dyn_key1_key2
        var parts = k.slice(4).split("_");
        // Find the split point — keys can contain underscores so try all splits
        for (var si = 1; si < parts.length; si++) {
          var p1 = parts.slice(0, si).join("_");
          var p2 = parts.slice(si).join("_");
          if (FLOWERS[p1] && FLOWERS[p2]) {
            getOrCreateDynamicHybrid(p1, p2);
            break;
          }
        }
      }
    });
    return true;
  } catch (e) {
    return false;
  }
}

// ── One-time bug compensation (shown after entering game) ────────
function applyBugfixGift() {
  // v2 flag: ensures ALL players see the visible gift (v1 fired silently behind title screen)
  if (G._bugfix_pkt_v3) return;
  var uncommonKeys = Object.keys(FLOWERS).filter(function(k) {
    return FLOWERS[k].rarity === "uncommon" && FLOWERS[k].w > 0;
  });
  if (!uncommonKeys.length) return;
  for (var ci = 0; ci < 10; ci++) {
    var compKey = uncommonKeys[Math.floor(Math.random() * uncommonKeys.length)];
    G.seeds.push({ id: G.seedId++, key: compKey });
    if (!G.discovered.includes(compKey)) G.discovered.push(compKey);
  }
  G._bugfix_pkt_v3 = true;
  renderTray();
  updateHUD();
  saveG();
  playSound("achieve");
  haptic(60);
  // Show as a modal card so the player definitely sees it
  var overlay = document.createElement("div");
  overlay.className = "overlay tutorial-overlay on";
  overlay.style.zIndex = "99999";
  document.body.appendChild(overlay);
  var card = document.createElement("div");
  card.className = "login-gift-card";
  var icon = document.createElement("div");
  icon.style.cssText = "font-size:2.5em;text-align:center;margin-bottom:8px;";
  icon.textContent = "\ud83c\udf81";
  card.appendChild(icon);
  var title = document.createElement("div");
  title.className = "tutorial-title";
  title.textContent = "Bug Fix Gift!";
  card.appendChild(title);
  var msg = document.createElement("div");
  msg.className = "login-reward";
  msg.style.cssText = "font-size:.85em;line-height:1.5;margin:8px 0 16px;";
  msg.textContent = "We fixed a bug that caused lost seeds when opening packets. As compensation, here are 10 uncommon seeds!";
  card.appendChild(msg);
  var btn = document.createElement("button");
  btn.className = "btn-login-claim";
  btn.textContent = "Thank you! \ud83c\udf3a";
  btn.onclick = function() {
    overlay.remove();
    playSound("click");
  };
  card.appendChild(btn);
  overlay.appendChild(card);
}

// ── Offline progress — grant passive water + expire NPCs ────────
function applyOfflineProgress() {
  if (!G._lastTickTime) { G._lastTickTime = Date.now(); saveG(); return; }
  var elapsed = Date.now() - G._lastTickTime;
  if (elapsed < 60000) { G._lastTickTime = Date.now(); return; } // less than 1 min away
  var minutes = Math.floor(elapsed / 60000);
  var rewards = [];
  // Passive water accumulation (1 per 45s, capped at max)
  var waterGained = Math.min(G.maxWater - G.water, Math.floor(elapsed / 45000));
  if (waterGained > 0) {
    G.water += waterGained;
    renderDrops();
    rewards.push("+" + waterGained + " water");
  }
  // Expire old NPCs
  var expiredCount = 0;
  G.npcs = G.npcs.filter(function(npc) {
    if (Date.now() - npc.spawnedAt > npc.patience) { expiredCount++; return false; }
    return true;
  });
  if (expiredCount > 0) {
    G.npcStreak = 0;
    rewards.push(expiredCount + " customer" + (expiredCount > 1 ? "s" : "") + " left");
  }
  // Coin bonus for time away (1 coin per 10 min, max 30)
  var bonusCoins = Math.min(30, Math.floor(minutes / 10));
  if (bonusCoins > 0) {
    G.coins += bonusCoins;
    G.totalCoins += bonusCoins;
    rewards.push("+" + bonusCoins + " coins");
  }
  G._lastTickTime = Date.now();
  renderNPCs();
  updateHUD();
  saveG();
  if (rewards.length > 0) {
    var timeStr = minutes >= 60 ? Math.floor(minutes / 60) + "h " + (minutes % 60) + "m" : minutes + "m";
    toast("\ud83c\udf1f Welcome back! (" + timeStr + " away) " + rewards.join(", "), 4500);
  }
}

function lighter(hex, a = 52) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.min(255, r + a)},${Math.min(255, g + a)},${Math.min(255, b + a)})`;
}
function darker(hex, a = 44) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.max(0, r - a)},${Math.max(0, g - a)},${Math.max(0, b - a)})`;
}

function isLightColor(hex) {
  if (!hex || hex.length < 7) return false;
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  // Perceived brightness (ITU-R BT.709)
  return (0.299 * r + 0.587 * g + 0.114 * b) > 200;
}

// ── Parametric Flower Engine ─────────────────────────────────
function _fc(f) {
  const p = f.petal,
    S = f.stem;
  return {
    p,
    S,
    pl: lighter(p),
    pll: lighter(p, 85),
    pd: darker(p),
    SD: darker(S, 25),
    rare: f.rarity === "rare" || f.rarity === "unique",
  };
}
function _aura(cy, r, pll, rare) {
  if (!rare) return "";
  return (
    `<circle cx="30" cy="${cy}" r="${r}" fill="${pll}" opacity=".4"/>` +
    `<circle cx="30" cy="${cy}" r="${r}" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/>` +
    `<text x="30" y="${cy - r + 7}" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`
  );
}
function _ring(n, rx, ry, cy, fill, sc) {
  sc = sc || 1;
  const parts = [];
  for (let i = 0; i < n; i++) {
    const a = ((360 / n) * i).toFixed(1);
    parts.push(`<ellipse cx="30" cy="${(cy - ry * sc).toFixed(1)}" rx="${(rx * sc).toFixed(1)}" ry="${(ry * sc).toFixed(1)}" fill="${fill}" transform="rotate(${a},30,${cy})"/>`);
  }
  return parts.join("");
}
function _svg(body) {
  return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}
function _stem(S, sw, y2) {
  // thin line for full height + thick trunk rect visible below the leaf shapes
  return (
    `<line x1="30" y1="92" x2="30" y2="${y2}" stroke="${S}" stroke-width="${sw}" stroke-linecap="round"/>` +
    `<rect x="26.5" y="75" width="7" height="17" rx="3.5" fill="${S}"/>`
  );
}
function _leaf(S) {
  return `<path d="M30 76 Q12 64 10 50 Q23 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>`;
}
const _sh = `<ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/>`;
const _sh1 = `<ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/>`;

// 1. RADIAL — n ellipse petals evenly rotating from center (daisy, sunflower, cosmos…)
function renderRadial(f, stage, P) {
  const { p, pll, pd, S, rare } = _fc(f);
  const { n, rx, ry, cy, cR, cFill, c2R, c2Fill, leaves } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 65) +
        `<path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/>` +
        `<ellipse cx="30" cy="60" rx="${(rx * 0.6).toFixed(1)}" ry="${(ry * 0.45).toFixed(1)}" fill="${pd}" opacity=".7"/>`,
    );
  const lv = leaves ? _leaf(S) : "";
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        _ring(n, rx, ry, cy, p, 0.7) +
        `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 50) +
      lv +
      _aura(cy, cR + 9, pll, rare) +
      _ring(n, rx, ry, cy, p, 1) +
      `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>` +
      (c2R ? `<circle cx="30" cy="${cy}" r="${c2R}" fill="${c2Fill}"/>` : ""),
  );
}

// 2. CUP — goblet shape (open:0=tight tulip → open:1=wide poppy)
function renderCup(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const o = P.open;
  const cy = Math.round(36 + o * 4);
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 62) +
        `<path d="M30 80 Q18 72 16 62 Q24 67 30 77" fill="${S}"/>` +
        `<path d="M${25 - o * 3} 65 Q${23 - o * 2} ${51 + o * 6} 30 ${47 + o * 7} Q${37 + o * 2} ${51 + o * 6} ${35 + o * 3} 65 Q32 68 30 69 Q28 68 ${25 - o * 3} 65Z" fill="${p}" opacity=".82"/>`,
    );
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 52) +
        `<path d="M30 78 Q14 67 12 54 Q23 61 30 73" fill="${S}"/>` +
        `<path d="M30 78 Q46 67 48 54 Q37 61 30 73" fill="${S}"/>` +
        `<path d="M${22 - o * 3} 55 Q${20 - o * 3} ${38 + o * 6} 30 ${33 + o * 7} Q${40 + o * 3} ${38 + o * 6} ${38 + o * 3} 55 Q35 60 30 61 Q25 60 ${22 - o * 3} 55Z" fill="${p}"/>` +
        `<path d="M${26 - o * 2} 55 Q${24 - o * 2} ${41 + o * 5} 30 ${36 + o * 6}" fill="${pl}" opacity=".3"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 48) +
      `<path d="M30 75 Q12 62 10 47 Q22 55 30 68" fill="${S}"/>` +
      `<path d="M30 75 Q48 62 50 47 Q38 55 30 68" fill="${S}"/>` +
      _aura(cy, 22 + o * 3, pll, rare) +
      `<path d="M${18 - o * 5} 49 Q${16 - o * 4} ${29 + o * 9} 30 ${22 + o * 11} Q${44 + o * 4} ${29 + o * 9} ${42 + o * 5} 49 Q${38 + o * 2} 55 30 ${57 + o * 5} Q${22 - o * 2} 55 ${18 - o * 5} 49Z" fill="${p}"/>` +
      `<path d="M${23 - o * 3} 49 Q${22 - o * 2} ${32 + o * 8} 30 ${25 + o * 9}" fill="${pl}" opacity=".28"/>` +
      `<path d="M24 31 Q27 24 30 23" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>` +
      `<ellipse cx="30" cy="${50 + o * 4}" rx="${(5 + o * 2).toFixed(1)}" ry="${(4 + o).toFixed(1)}" fill="${pd}" opacity=".35"/>`,
  );
}

// 3. SPIKE — vertical column of tiny oval blobs (lavender, hyacinth, foxglove…)
function renderSpike(f, stage, P) {
  const { p, pd, pll, S, rare } = _fc(f);
  const { cols, rows } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2, 62) +
        `<path d="M30 82 Q20 76 18 68 Q25 72 30 79" fill="${S}"/>` +
        `<ellipse cx="28" cy="60" rx="2.5" ry="3.5" fill="${p}" opacity=".65"/>` +
        `<ellipse cx="32" cy="57" rx="2.5" ry="3.5" fill="${p}" opacity=".65"/>`,
    );
  const topY = stage === 2 ? 52 : 55;
  const bR = stage === 2 ? Math.ceil(rows * 0.65) : rows;
  const blobParts = [];
  for (let r = 0; r < bR; r++) {
    const y = topY - r * 4.5;
    const xs = cols === 2 ? (r % 2 === 0 ? [27, 33] : [30]) : [30];
    const fill = r === bR - 1 ? pd : p;
    const op = Math.min(0.93, 0.65 + r * 0.03).toFixed(2);
    xs.forEach((x) => {
      blobParts.push(`<ellipse cx="${x}" cy="${y.toFixed(1)}" rx="3" ry="4" fill="${fill}" opacity="${op}"/>`);
    });
  }
  const blobs = blobParts.join("");
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 80 Q17 73 15 63 Q24 67 30 75" fill="${S}"/>` +
        `<path d="M30 80 Q43 73 45 63 Q36 67 30 75" fill="${S}"/>` +
        blobs,
    );
  const tipY = topY - (bR - 1) * 4.5;
  return _svg(
    _sh +
      _stem(S, 3, 55) +
      `<path d="M30 78 Q15 70 13 58 Q23 64 30 72" fill="${S}"/>` +
      `<path d="M30 78 Q45 70 47 58 Q37 64 30 72" fill="${S}"/>` +
      _aura(tipY, 14, pll, rare) +
      blobs,
  );
}

// 4. STAR — wide flat petals at alternating tilts (lily, iris, orchid, daffodil…)
function renderStar(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { n, rx, ry, cy, cR, cFill } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 60) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<path d="M25 62 Q24 52 30 47 Q36 52 35 62 Q32 65 30 66 Q28 65 25 62Z" fill="${p}" opacity=".85"/>`,
    );
  const petals = (sc) => {
    const parts = [];
    for (let i = 0; i < n; i++) {
      const a = ((360 / n) * i).toFixed(1);
      parts.push(`<ellipse cx="30" cy="${(cy - ry * sc).toFixed(1)}" rx="${(rx * sc).toFixed(1)}" ry="${(ry * sc).toFixed(1)}" fill="${i % 2 ? pl : p}" transform="rotate(${a},30,${cy})"/>`);
    }
    return parts.join("");
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        petals(0.75) +
        (cR
          ? `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>`
          : ""),
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 52) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, (cR || 12) + 8, pll, rare) +
      petals(1) +
      (cR
        ? `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/><circle cx="30" cy="${cy}" r="${(cR * 0.55).toFixed(1)}" fill="${pll}"/>`
        : ""),
  );
}

// 5. BELL — drooping bell/pendant shapes (bluebell, wisteria, fuchsia…)
function renderBell(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { bells, bw, bh } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 62) +
        `<path d="M30 82 Q20 76 18 68 Q25 72 30 79" fill="${S}"/>` +
        `<ellipse cx="30" cy="60" rx="${(bw * 0.6).toFixed(1)}" ry="${(bh * 0.5).toFixed(1)}" fill="${p}" opacity=".7"/>`,
    );
  const pts =
    bells <= 1
      ? [[30, 43]]
      : bells === 2
        ? [
            [23, 42],
            [37, 43],
          ]
        : bells === 3
          ? [
              [21, 40],
              [30, 43],
              [39, 41],
            ]
          : [
              [19, 39],
              [27, 42],
              [33, 42],
              [41, 40],
            ];
  const bellSVG = (x, y, sc) =>
    `<path d="M${x - bw * sc} ${y - bh * sc * 0.3} Q${x - bw * sc * 1.1} ${y + bh * sc * 0.7} ${x} ${y + bh * sc} Q${x + bw * sc * 1.1} ${y + bh * sc * 0.7} ${x + bw * sc} ${y - bh * sc * 0.3} Q${x} ${y - bh * sc * 0.6} ${x - bw * sc} ${y - bh * sc * 0.3}Z" fill="${p}"/>` +
    `<path d="M${x - bw * sc * 0.45} ${y - bh * sc * 0.2} Q${x} ${y + bh * sc * 0.35} ${x + bw * sc * 0.45} ${y - bh * sc * 0.2}" fill="${pl}" opacity=".4"/>` +
    `<circle cx="${x}" cy="${y + bh * sc * 0.9}" r="1.5" fill="${pd}" opacity=".6"/>`;
  const branches = pts
    .map(
      ([x, y]) =>
        `<line x1="30" y1="55" x2="${x}" y2="${y}" stroke="${S}" stroke-width="1.2"/>`,
    )
    .join("");
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 55) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        branches +
        pts.map(([x, y]) => bellSVG(x, y, 0.8)).join(""),
    );
  return _svg(
    _sh +
      _stem(S, 3, 55) +
      `<path d="M30 78 Q14 68 12 55 Q23 61 30 72" fill="${S}"/>` +
      `<path d="M30 78 Q46 68 48 55 Q37 61 30 72" fill="${S}"/>` +
      _aura(43, 17, pll, rare) +
      branches +
      pts.map(([x, y]) => bellSVG(x, y, 1)).join(""),
  );
}

// 6. ROSETTE — layered overlapping circles (rose, peony, carnation, dahlia…)
function renderRosette(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, r0, tight, yellowCenter } = P;
  const d = r0 * (1 - (tight || 0.5));
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 62) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<circle cx="30" cy="55" r="${(r0 * 0.5).toFixed(1)}" fill="${p}" opacity=".88"/>` +
        `<circle cx="30" cy="53" r="${(r0 * 0.32).toFixed(1)}" fill="${pl}" opacity=".65"/>` +
        `<circle cx="30" cy="51" r="${(r0 * 0.18).toFixed(1)}" fill="${pll}" opacity=".5"/>`,
    );
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        `<path d="M30 78 Q45 68 47 55 Q37 62 30 72" fill="${S}"/>` +
        `<circle cx="30" cy="${cy}" r="${(r0 * 0.85).toFixed(1)}" fill="${p}" opacity=".9"/>` +
        `<circle cx="${(30 - d).toFixed(1)}" cy="${(cy - d * 0.7).toFixed(1)}" r="${(r0 * 0.68).toFixed(1)}" fill="${pl}"/>` +
        `<circle cx="${(30 + d).toFixed(1)}" cy="${(cy - d * 0.7).toFixed(1)}" r="${(r0 * 0.68).toFixed(1)}" fill="${pl}"/>` +
        `<circle cx="30" cy="${(cy - d * 1.2).toFixed(1)}" r="${(r0 * 0.63).toFixed(1)}" fill="${p}"/>` +
        `<circle cx="30" cy="${(cy + d * 0.4).toFixed(1)}" r="${(r0 * 0.5).toFixed(1)}" fill="${pd}"/>` +
        `<circle cx="30" cy="${(cy - d * 0.3).toFixed(1)}" r="${(r0 * 0.37).toFixed(1)}" fill="${pl}"/>` +
        `<circle cx="30" cy="${(cy - d * 0.6).toFixed(1)}" r="${(r0 * 0.22).toFixed(1)}" fill="${pll}" opacity=".8"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 50) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, r0 + 7, pll, rare) +
      `<circle cx="30" cy="${cy}" r="${r0}" fill="${p}"/>` +
      `<circle cx="${(30 - d * 1.2).toFixed(1)}" cy="${(cy - d).toFixed(1)}" r="${(r0 * 0.75).toFixed(1)}" fill="${pl}"/>` +
      `<circle cx="${(30 + d * 1.2).toFixed(1)}" cy="${(cy - d).toFixed(1)}" r="${(r0 * 0.75).toFixed(1)}" fill="${pl}"/>` +
      `<circle cx="30" cy="${(cy - d * 1.5).toFixed(1)}" r="${(r0 * 0.72).toFixed(1)}" fill="${p}"/>` +
      `<circle cx="${(30 - d).toFixed(1)}" cy="${(cy + d * 0.7).toFixed(1)}" r="${(r0 * 0.62).toFixed(1)}" fill="${pd}"/>` +
      `<circle cx="${(30 + d).toFixed(1)}" cy="${(cy + d * 0.7).toFixed(1)}" r="${(r0 * 0.62).toFixed(1)}" fill="${pd}"/>` +
      `<circle cx="30" cy="${(cy + d * 0.4).toFixed(1)}" r="${(r0 * 0.6).toFixed(1)}" fill="${p}"/>` +
      `<circle cx="30" cy="${(cy - d * 0.5).toFixed(1)}" r="${(r0 * 0.46).toFixed(1)}" fill="${pl}"/>` +
      `<circle cx="30" cy="${(cy - d).toFixed(1)}" r="${(r0 * 0.3).toFixed(1)}" fill="${pll}"/>` +
      (yellowCenter
        ? `<circle cx="${(30 - d * 0.35).toFixed(1)}" cy="${(cy - d * 0.5).toFixed(1)}" r="1.5" fill="#fdd835" opacity=".9"/><circle cx="${(30 + d * 0.35).toFixed(1)}" cy="${(cy - d * 0.5).toFixed(1)}" r="1.5" fill="#fdd835" opacity=".9"/><circle cx="30" cy="${(cy - d * 0.8).toFixed(1)}" r="1.5" fill="#fdd835" opacity=".9"/>`
        : ""),
  );
}

// 7. NOTCHED — heart-shaped petals with notched tips (cherry blossom)
function renderNotched(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { n, cy, cR, cFill } = P;
  const petalPath = (cx, ccy, r, angle) => {
    const a = (angle * Math.PI) / 180;
    const cos = Math.cos(a), sin = Math.sin(a);
    const dx = r * 0.6, dy = r;
    const notch = r * 0.18;
    // heart-shaped petal: two arcs meeting at a notched tip
    const pts = [
      [0, 0],
      [-dx * 0.7, -dy * 0.4],
      [-dx * 0.3, -dy * 0.95],
      [0, -dy + notch], // notch dip
      [dx * 0.3, -dy * 0.95],
      [dx * 0.7, -dy * 0.4],
      [0, 0],
    ];
    const rotated = pts.map(([x, y]) => [
      cx + x * cos - y * sin,
      ccy + x * sin + y * cos,
    ]);
    return `M${rotated[0].map(v => v.toFixed(1)).join(",")} C${rotated[1].map(v => v.toFixed(1)).join(",")} ${rotated[2].map(v => v.toFixed(1)).join(",")} ${rotated[3].map(v => v.toFixed(1)).join(",")} C${rotated[4].map(v => v.toFixed(1)).join(",")} ${rotated[5].map(v => v.toFixed(1)).join(",")} ${rotated[6].map(v => v.toFixed(1)).join(",")}Z`;
  };
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 65) +
        `<path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/>` +
        `<path d="${petalPath(30, 58, 8, 0)}" fill="${p}" opacity=".75"/>`,
    );
  const petals = (sc) => {
    const parts = [];
    for (let i = 0; i < n; i++) {
      const a = (360 / n) * i;
      parts.push(`<path d="${petalPath(30, cy, 12 * sc, a)}" fill="${i % 2 ? pl : p}"/>`);
    }
    return parts.join("");
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        petals(0.7) +
        `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 50) +
      _leaf(S) +
      _aura(cy, cR + 10, pll, rare) +
      petals(1) +
      `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>`,
  );
}

// 8. ASYMMETRIC — larger bottom petal, fan shape (violet)
function renderAsymmetric(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, cR, cFill } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 2.5, 65) +
        `<path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/>` +
        `<ellipse cx="30" cy="58" rx="6" ry="8" fill="${p}" opacity=".75"/>`,
    );
  const violetPetals = (sc) => {
    // 2 upper petals, 2 side petals, 1 larger bottom petal
    const rx = 7 * sc, ry = 8 * sc;
    const brx = 9 * sc, bry = 11 * sc; // bigger bottom
    return (
      // upper pair
      `<ellipse cx="${(30 - 5 * sc).toFixed(1)}" cy="${(cy - 8 * sc).toFixed(1)}" rx="${(rx * 0.85).toFixed(1)}" ry="${(ry * 0.9).toFixed(1)}" fill="${p}" transform="rotate(-15,30,${cy})"/>` +
      `<ellipse cx="${(30 + 5 * sc).toFixed(1)}" cy="${(cy - 8 * sc).toFixed(1)}" rx="${(rx * 0.85).toFixed(1)}" ry="${(ry * 0.9).toFixed(1)}" fill="${p}" transform="rotate(15,30,${cy})"/>` +
      // side pair
      `<ellipse cx="${(30 - 9 * sc).toFixed(1)}" cy="${(cy - 2 * sc).toFixed(1)}" rx="${(rx * 0.9).toFixed(1)}" ry="${(ry * 0.8).toFixed(1)}" fill="${pl}" transform="rotate(-35,30,${cy})"/>` +
      `<ellipse cx="${(30 + 9 * sc).toFixed(1)}" cy="${(cy - 2 * sc).toFixed(1)}" rx="${(rx * 0.9).toFixed(1)}" ry="${(ry * 0.8).toFixed(1)}" fill="${pl}" transform="rotate(35,30,${cy})"/>` +
      // large bottom petal with dark veins
      `<ellipse cx="30" cy="${(cy + 4 * sc).toFixed(1)}" rx="${brx.toFixed(1)}" ry="${bry.toFixed(1)}" fill="${p}"/>` +
      `<line x1="30" y1="${(cy + 1 * sc).toFixed(1)}" x2="30" y2="${(cy + 12 * sc).toFixed(1)}" stroke="${pd}" stroke-width="0.7" opacity=".4"/>` +
      `<line x1="30" y1="${(cy + 3 * sc).toFixed(1)}" x2="${(30 - 3 * sc).toFixed(1)}" y2="${(cy + 10 * sc).toFixed(1)}" stroke="${pd}" stroke-width="0.5" opacity=".3"/>`
    );
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 2.5, 52) +
        `<path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/>` +
        violetPetals(0.75) +
        `<circle cx="30" cy="${cy}" r="${(cR * 0.7).toFixed(1)}" fill="${cFill}"/>`,
    );
  return _svg(
    _sh +
      _stem(S, 3, 50) +
      _leaf(S) +
      _aura(cy, 18, pll, rare) +
      violetPetals(1) +
      `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>`,
  );
}

// 9. STANDARDS — 3 upright + 3 drooping petals (iris)
function renderStandards(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, cR, cFill } = P;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 60) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<path d="M25 62 Q24 52 30 47 Q36 52 35 62 Q32 65 30 66 Q28 65 25 62Z" fill="${p}" opacity=".85"/>`,
    );
  const irisPetals = (sc) => {
    // 3 upright "standards" — narrow tall petals pointing up
    const standards = [0, 120, 240].map(a => {
      const rad = (a * Math.PI) / 180;
      const x = 30 + Math.sin(rad) * 4 * sc;
      const uy = cy - 14 * sc;
      return `<ellipse cx="${x.toFixed(1)}" cy="${uy.toFixed(1)}" rx="${(3.5 * sc).toFixed(1)}" ry="${(10 * sc).toFixed(1)}" fill="${pl}" transform="rotate(${(a * 0.15).toFixed(1)},${x.toFixed(1)},${uy.toFixed(1)})"/>`;
    }).join("");
    // 3 drooping "falls" — wider petals curving downward
    const falls = [60, 180, 300].map(a => {
      const rad = (a * Math.PI) / 180;
      const x = 30 + Math.sin(rad) * 10 * sc;
      const fy = cy + 4 * sc;
      return (
        `<ellipse cx="${x.toFixed(1)}" cy="${fy.toFixed(1)}" rx="${(5 * sc).toFixed(1)}" ry="${(8 * sc).toFixed(1)}" fill="${p}" transform="rotate(${(a * 0.12 - 10).toFixed(1)},${x.toFixed(1)},${fy.toFixed(1)})"/>` +
        `<ellipse cx="${x.toFixed(1)}" cy="${(fy + 2 * sc).toFixed(1)}" rx="${(3 * sc).toFixed(1)}" ry="${(2 * sc).toFixed(1)}" fill="${pd}" opacity=".5"/>`
      );
    }).join("");
    return falls + standards;
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        irisPetals(0.75) +
        (cR ? `<circle cx="30" cy="${cy}" r="${(cR * 0.75).toFixed(1)}" fill="${cFill}"/>` : ""),
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 52) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, 20, pll, rare) +
      irisPetals(1) +
      (cR ? `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>` : ""),
  );
}

// 10. LABELLUM — orchid with large decorative lip petal
function renderLabellum(f, stage, P) {
  const { p, pl, pll, pd, S, rare } = _fc(f);
  const { cy, cR, cFill, lipColor } = P;
  const lip = lipColor || pd;
  if (stage === 1)
    return _svg(
      _sh1 +
        _stem(S, 3, 60) +
        `<path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/>` +
        `<ellipse cx="30" cy="55" rx="6" ry="9" fill="${p}" opacity=".8"/>`,
    );
  const orchidPetals = (sc) => {
    // 3 outer sepals — narrow pointed
    const sepals = [0, 120, 240].map(a =>
      `<ellipse cx="30" cy="${(cy - 11 * sc).toFixed(1)}" rx="${(3 * sc).toFixed(1)}" ry="${(10 * sc).toFixed(1)}" fill="${p}" transform="rotate(${a},30,${cy})"/>`
    ).join("");
    // 2 lateral petals — slightly wider
    const laterals =
      `<ellipse cx="${(30 - 8 * sc).toFixed(1)}" cy="${(cy - 3 * sc).toFixed(1)}" rx="${(4 * sc).toFixed(1)}" ry="${(7 * sc).toFixed(1)}" fill="${pl}" transform="rotate(-25,30,${cy})"/>` +
      `<ellipse cx="${(30 + 8 * sc).toFixed(1)}" cy="${(cy - 3 * sc).toFixed(1)}" rx="${(4 * sc).toFixed(1)}" ry="${(7 * sc).toFixed(1)}" fill="${pl}" transform="rotate(25,30,${cy})"/>`;
    // labellum — large ornate lip
    const lipPetal =
      `<path d="M${(30 - 7 * sc).toFixed(1)} ${cy.toFixed(1)} Q${(30 - 9 * sc).toFixed(1)} ${(cy + 10 * sc).toFixed(1)} 30 ${(cy + 14 * sc).toFixed(1)} Q${(30 + 9 * sc).toFixed(1)} ${(cy + 10 * sc).toFixed(1)} ${(30 + 7 * sc).toFixed(1)} ${cy.toFixed(1)} Q30 ${(cy + 5 * sc).toFixed(1)} ${(30 - 7 * sc).toFixed(1)} ${cy.toFixed(1)}Z" fill="${lip}"/>` +
      `<circle cx="30" cy="${(cy + 6 * sc).toFixed(1)}" r="${(2.5 * sc).toFixed(1)}" fill="${pll}" opacity=".6"/>` +
      `<circle cx="${(30 - 2 * sc).toFixed(1)}" cy="${(cy + 4 * sc).toFixed(1)}" r="${(1 * sc).toFixed(1)}" fill="${pd}" opacity=".5"/>` +
      `<circle cx="${(30 + 2 * sc).toFixed(1)}" cy="${(cy + 4 * sc).toFixed(1)}" r="${(1 * sc).toFixed(1)}" fill="${pd}" opacity=".5"/>`;
    return sepals + laterals + lipPetal;
  };
  if (stage === 2)
    return _svg(
      _sh +
        _stem(S, 3, 54) +
        `<path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/>` +
        orchidPetals(0.75) +
        (cR ? `<circle cx="30" cy="${cy}" r="${(cR * 0.6).toFixed(1)}" fill="${cFill}"/>` : ""),
    );
  return _svg(
    _sh +
      _stem(S, 3.5, 52) +
      `<path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/>` +
      `<path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>` +
      _aura(cy, 20, pll, rare) +
      orchidPetals(1) +
      (cR ? `<circle cx="30" cy="${cy}" r="${cR}" fill="${cFill}"/>` : ""),
  );
}

const FLOWER_RENDERERS = {
  radial: renderRadial,
  cup: renderCup,
  spike: renderSpike,
  star: renderStar,
  bell: renderBell,
  rosette: renderRosette,
  notched: renderNotched,
  asymmetric: renderAsymmetric,
  standards: renderStandards,
  labellum: renderLabellum,
};

// Shape parameters for all 77 flower appearances
// fn: renderer key | radial: n petals | cup: open 0=tight→1=wide
// spike: cols/rows | star: n wide petals | bell: bells count
// rosette: cy center, r0 outer radius, tight packing ratio
const SHAPE_PARAMS = {
  // ── RADIAL ───────────────────────────────────────────────────
  sunflower: {
    fn: "radial",
    n: 8,
    rx: 5.5,
    ry: 11,
    cy: 33,
    cR: 10,
    cFill: "#795548",
    c2R: 8,
    c2Fill: "#4e342e",
    leaves: true,
  },
  daisy: {
    fn: "radial",
    n: 12,
    rx: 3.5,
    ry: 9,
    cy: 41,
    cR: 10,
    cFill: "#fdd835",
    c2R: 8,
    c2Fill: "#f9a825",
    leaves: true,
  },
  cosmos: {
    fn: "radial",
    n: 8,
    rx: 4,
    ry: 10,
    cy: 40,
    cR: 8,
    cFill: "#ce93d8",
    leaves: true,
  },
  zinnia: {
    fn: "radial",
    n: 10,
    rx: 3.5,
    ry: 9,
    cy: 40,
    cR: 8,
    cFill: "#fdd835",
    c2R: 6,
    c2Fill: "#f9a825",
    leaves: true,
  },
  aster: {
    fn: "radial",
    n: 14,
    rx: 3,
    ry: 8,
    cy: 40,
    cR: 8,
    cFill: "#fdd835",
    leaves: true,
  },
  gerbera: {
    fn: "radial",
    n: 16,
    rx: 3,
    ry: 8,
    cy: 40,
    cR: 7,
    cFill: "#1a1a1a",
    c2R: 5,
    c2Fill: "#263238",
    leaves: true,
  },
  marigold: {
    fn: "radial",
    n: 14,
    rx: 3,
    ry: 7,
    cy: 38,
    cR: 8,
    cFill: "#e65100",
    leaves: true,
  },
  calendula: {
    fn: "radial",
    n: 12,
    rx: 3,
    ry: 8,
    cy: 40,
    cR: 7,
    cFill: "#e65100",
    c2R: 5,
    c2Fill: "#bf360c",
    leaves: true,
  },
  blackeyedsusan: {
    fn: "radial",
    n: 12,
    rx: 3.5,
    ry: 9,
    cy: 40,
    cR: 7,
    cFill: "#1a1a1a",
    c2R: 5,
    c2Fill: "#37474f",
    leaves: true,
  },
  cornflower: {
    fn: "radial",
    n: 12,
    rx: 3,
    ry: 7,
    cy: 40,
    cR: 6,
    cFill: "#1e88e5",
    leaves: true,
  },
  allium: {
    fn: "radial",
    n: 16,
    rx: 2,
    ry: 5,
    cy: 36,
    cR: 5,
    cFill: "#6a1b9a",
    leaves: true,
  },
  forgetmenot: {
    fn: "radial",
    n: 5,
    rx: 4,
    ry: 7,
    cy: 40,
    cR: 5,
    cFill: "#fdd835",
    leaves: false,
  },
  cherry: {
    fn: "notched",
    n: 5,
    cy: 40,
    cR: 7,
    cFill: "#c62828",
  },
  violet: {
    fn: "asymmetric",
    cy: 38,
    cR: 5,
    cFill: "#fdd835",
  },
  anemone: {
    fn: "radial",
    n: 6,
    rx: 6.5,
    ry: 10,
    cy: 40,
    cR: 8,
    cFill: "#1a1a1a",
    c2R: 5,
    c2Fill: "#263238",
    leaves: true,
  },
  pansy: {
    fn: "radial",
    n: 5,
    rx: 9,
    ry: 9,
    cy: 38,
    cR: 6,
    cFill: "#f9a825",
    leaves: true,
  },
  jasmine: {
    fn: "radial",
    n: 5,
    rx: 3,
    ry: 9,
    cy: 40,
    cR: 4,
    cFill: "#f9a825",
    leaves: false,
  },
  geranium: {
    fn: "radial",
    n: 5,
    rx: 7,
    ry: 7,
    cy: 40,
    cR: 7,
    cFill: "#fdd835",
    leaves: true,
  },
  primrose: {
    fn: "radial",
    n: 5,
    rx: 5,
    ry: 10,
    cy: 38,
    cR: 6,
    cFill: "#fdd835",
    c2R: 4,
    c2Fill: "#f9a825",
    leaves: false,
  },
  phlox: {
    fn: "radial",
    n: 5,
    rx: 5.5,
    ry: 7,
    cy: 40,
    cR: 4,
    cFill: "#fdd835",
    leaves: false,
  },
  impatiens: {
    fn: "radial",
    n: 5,
    rx: 7,
    ry: 6,
    cy: 40,
    cR: 5,
    cFill: "#fdd835",
    leaves: false,
  },
  nasturtium: {
    fn: "radial",
    n: 5,
    rx: 8.5,
    ry: 8,
    cy: 39,
    cR: 4,
    cFill: "#f9a825",
    leaves: true,
  },
  sweetpea: {
    fn: "radial",
    n: 5,
    rx: 3.5,
    ry: 7,
    cy: 42,
    cR: 3,
    cFill: "#fce4ec",
    leaves: false,
  },
  wallflower: {
    fn: "radial",
    n: 4,
    rx: 5,
    ry: 8,
    cy: 40,
    cR: 5,
    cFill: "#795548",
    leaves: false,
  },
  clematis: {
    fn: "radial",
    n: 6,
    rx: 7.5,
    ry: 9,
    cy: 39,
    cR: 6,
    cFill: "#fdd835",
    c2R: 4,
    c2Fill: "#f9a825",
    leaves: false,
  },
  alstroemeria: {
    fn: "radial",
    n: 6,
    rx: 3.5,
    ry: 11,
    cy: 38,
    cR: 5,
    cFill: "#f9a825",
    leaves: true,
  },
  verbena: {
    fn: "radial",
    n: 5,
    rx: 3,
    ry: 5,
    cy: 42,
    cR: 3,
    cFill: "#fdd835",
    leaves: false,
  },
  gaillardia: {
    fn: "radial",
    n: 12,
    rx: 3.5,
    ry: 8,
    cy: 40,
    cR: 7,
    cFill: "#795548",
    c2R: 5,
    c2Fill: "#4e342e",
    leaves: true,
  },
  plumeria: {
    fn: "radial",
    n: 5,
    rx: 4,
    ry: 13,
    cy: 37,
    cR: 6,
    cFill: "#fdd835",
    leaves: false,
  },
  lotus: {
    fn: "radial",
    n: 8,
    rx: 5,
    ry: 10,
    cy: 38,
    cR: 7,
    cFill: "#fdd835",
    c2R: 5,
    c2Fill: "#f9a825",
    leaves: true,
  },
  lantana: {
    fn: "radial",
    n: 5,
    rx: 3.5,
    ry: 6,
    cy: 40,
    cR: 5,
    cFill: "#fdd835",
    leaves: false,
  },
  hellebore: {
    fn: "radial",
    n: 5,
    rx: 8,
    ry: 7,
    cy: 39,
    cR: 7,
    cFill: "#fdd835",
    leaves: true,
  },
  // ── CUP (open: 0=tight tulip → 1=wide poppy) ─────────────────
  tulip: { fn: "cup", open: 0 },
  crocus: { fn: "cup", open: 0.3 },
  poppy: { fn: "cup", open: 1 },
  hibiscus: { fn: "cup", open: 0.9 },
  petunia: { fn: "cup", open: 0.85 },
  morningglory: { fn: "cup", open: 0.8 },
  azalea: { fn: "cup", open: 0.6 },
  cyclamen: { fn: "cup", open: 0.35 },
  // ── SPIKE (cols:1=single|2=paired; rows:blob count) ───────────
  lavender: { fn: "spike", cols: 2, rows: 8 },
  hyacinth: { fn: "spike", cols: 2, rows: 9 },
  foxglove: { fn: "spike", cols: 1, rows: 9 },
  gladiolus: { fn: "spike", cols: 1, rows: 4 },
  snapdragon: { fn: "spike", cols: 1, rows: 6 },
  salvia: { fn: "spike", cols: 2, rows: 10 },
  veronica: { fn: "spike", cols: 1, rows: 7 },
  buddleia: { fn: "spike", cols: 2, rows: 11 },
  stock: { fn: "spike", cols: 2, rows: 7 },
  statice: { fn: "spike", cols: 2, rows: 6 },
  freesia: { fn: "spike", cols: 1, rows: 5 },
  heather: { fn: "spike", cols: 2, rows: 5 },
  // ── STAR (wide flat petals: lily/iris/orchid type) ────────────
  lily: { fn: "star", n: 6, rx: 5, ry: 12, cy: 38, cR: 0, cFill: "" },
  iris: { fn: "standards", cy: 38, cR: 5, cFill: "#fdd835" },
  orchid: {
    fn: "labellum",
    cy: 36,
    cR: 5,
    cFill: "#f06292",
    lipColor: "#e91e63",
  },
  daffodil: {
    fn: "star",
    n: 6,
    rx: 5.5,
    ry: 12,
    cy: 38,
    cR: 11,
    cFill: "#f9a825",
  },
  magnolia: { fn: "star", n: 6, rx: 7, ry: 12, cy: 37, cR: 0, cFill: "" },
  saffron: { fn: "star", n: 6, rx: 4, ry: 10, cy: 40, cR: 5, cFill: "#f9a825" },
  amaryllis: {
    fn: "star",
    n: 6,
    rx: 6,
    ry: 11,
    cy: 37,
    cR: 6,
    cFill: "#fdd835",
  },
  // ── BELL (drooping pendant bells) ────────────────────────────
  bluebell: { fn: "bell", bells: 4, bw: 5, bh: 8 },
  lilyvalley: { fn: "bell", bells: 4, bw: 4, bh: 6 },
  fuchsia: { fn: "bell", bells: 2, bw: 6, bh: 9 },
  wisteria: { fn: "bell", bells: 4, bw: 5, bh: 7 },
  gloxinia: { fn: "bell", bells: 2, bw: 7, bh: 9 },
  bleedingheart: { fn: "bell", bells: 3, bw: 5, bh: 9 },
  bromeliad: { fn: "bell", bells: 2, bw: 7, bh: 8 },
  bougainvillea: { fn: "bell", bells: 4, bw: 6, bh: 7 },
  // ── ROSETTE (layered concentric petal circles) ─────────────────
  rose: { fn: "rosette", cy: 35, r0: 18, tight: 0.5 },
  peony: { fn: "rosette", cy: 33, r0: 19, tight: 0.45, yellowCenter: true },
  carnation: { fn: "rosette", cy: 36, r0: 14, tight: 0.59 },
  dahlia: { fn: "rosette", cy: 33, r0: 20, tight: 0.43 },
  chrysanthemum: { fn: "rosette", cy: 37, r0: 15, tight: 0.5 },
  ranunculus: { fn: "rosette", cy: 37, r0: 17, tight: 0.44 },
  begonia: { fn: "rosette", cy: 38, r0: 13, tight: 0.52 },
  hydrangea: { fn: "rosette", cy: 39, r0: 11, tight: 0.65 },
  gardenia: { fn: "rosette", cy: 36, r0: 18, tight: 0.42 },
  camellia: { fn: "rosette", cy: 36, r0: 15, tight: 0.54 },
};

function flowerSVG(key, stage) {
  const f = FLOWERS[key];
  if (!f) return _svg(`<text x="30" y="52" text-anchor="middle" font-size="9" fill="#aaa">?</text>`);
  const p = f.petal,
    S = f.stem;
  const pl = lighter(p),
    pll = lighter(p, 85),
    pd = darker(p),
    SD = darker(S, 25);
  if (stage === 0)
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="95" rx="14" ry="4" fill="#6d4c41" opacity=".3"/>
    <path d="M30 93 Q26 78 28 64 Q30 70 32 64 Q34 78 30 93" fill="${S}"/>
    <ellipse cx="30" cy="62" rx="5" ry="4" fill="${SD}" opacity=".9"/>
  </svg>`;
  const P = SHAPE_PARAMS[f.appearance] || SHAPE_PARAMS[f.kind];
  if (!P)
    return _svg(
      `<text x="30" y="52" text-anchor="middle" font-size="9" fill="#aaa">?</text>`,
    );
  return FLOWER_RENDERERS[P.fn](f, stage, P);
}
function initPetals() {
  const pool = ["🌸", "🌷", "✿", "❀", "💮", "🌺"];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement("div");
    el.className = "petal";
    el.textContent = pool[Math.floor(Math.random() * pool.length)];
    const left = 5 + Math.random() * 90,
      dur = 13 + Math.random() * 18,
      delay = Math.random() * 20;
    el.style.cssText = `left:${left}%;font-size:${0.7 + Math.random() * 0.8}em;animation-duration:${dur}s;animation-delay:-${delay}s;`;
    document.body.appendChild(el);
  }
}

// Start game immediately — no welcome screen
loadG();

initGame();

function initGame() {
  console.log("[Garden] initGame started");
  try { initPetals(); } catch(e) { console.error("[Garden] initPetals failed:", e); }
  try { renderGarden(); } catch(e) { console.error("[Garden] renderGarden failed:", e); }
  try { renderTray(); } catch(e) { console.error("[Garden] renderTray failed:", e); }
  try { renderDrops(); } catch(e) { console.error("[Garden] renderDrops failed:", e); }
  try { updateHUD(); } catch(e) { console.error("[Garden] updateHUD failed:", e); }
  try { updateShopPot(); } catch(e) { console.error("[Garden] updateShopPot failed:", e); }
  try { renderNPCs(); } catch(e) { console.error("[Garden] renderNPCs failed:", e); }
  try { renderWeather(); } catch(e) { console.error("[Garden] renderWeather failed:", e); }
  try { applyBgStyle(); } catch(e) { console.error("[Garden] applyBgStyle failed:", e); }
  console.log("[Garden] initGame core done");
  // Hide game until title screen dismissed
  document.getElementById("gameScreen").style.display = "none";

  // Defer features that depend on later-defined data
  setTimeout(function() {
    try {
    console.log("[Garden] deferred init started");
    checkAchievements();
    checkNightMode();
    initParticles();
    initFireflies();
    updateParticleVisibility();
    applyGardenDecor();
    console.log("[Garden] deferred init — wiring buttons");
    _soundEnabled = G.soundEnabled;
    // Wire inline audio buttons (in top-row-stats)
    var soundBtn = document.getElementById("soundBtn");
    if (soundBtn) {
      soundBtn.textContent = _soundEnabled ? "\ud83d\udd0a" : "\ud83d\udd07";
      soundBtn.classList.toggle("active", _soundEnabled);
      soundBtn.onclick = function(e) {
        e.stopPropagation();
        var existing = document.getElementById("sfxVolPopup");
        if (existing) { existing.remove(); return; }
        var popup = document.createElement("div");
        popup.id = "sfxVolPopup";
        popup.style.cssText = "position:fixed;top:44px;right:10px;background:var(--surface,#fffcf7);border:1.5px solid var(--border,rgba(60,50,40,0.08));border-radius:14px;padding:10px 14px;box-shadow:0 4px 20px rgba(0,0,0,0.15);z-index:200;display:flex;flex-direction:column;gap:6px;min-width:160px;";
        var row1 = document.createElement("div");
        row1.style.cssText = "display:flex;align-items:center;justify-content:space-between;";
        var lbl = document.createElement("span");
        lbl.style.cssText = "font-size:0.78em;font-weight:700;color:var(--text,#3a3530);";
        lbl.textContent = "Sound FX";
        row1.appendChild(lbl);
        var tog = document.createElement("button");
        tog.style.cssText = "padding:4px 12px;border-radius:12px;border:1px solid var(--border,#ccc);font-family:inherit;font-size:0.75em;font-weight:700;cursor:pointer;touch-action:manipulation;background:" + (_soundEnabled ? "var(--primary,#527a5f)" : "var(--surface-alt,#f0ece4)") + ";color:" + (_soundEnabled ? "#fff" : "var(--text-muted,#6e6860)") + ";";
        tog.textContent = _soundEnabled ? "ON" : "OFF";
        tog.onclick = function(ev) {
          ev.stopPropagation();
          _soundEnabled = !_soundEnabled;
          G.soundEnabled = _soundEnabled;
          tog.textContent = _soundEnabled ? "ON" : "OFF";
          tog.style.background = _soundEnabled ? "var(--primary,#527a5f)" : "var(--surface-alt,#f0ece4)";
          tog.style.color = _soundEnabled ? "#fff" : "var(--text-muted,#6e6860)";
          soundBtn.textContent = _soundEnabled ? "\ud83d\udd0a" : "\ud83d\udd07";
          soundBtn.classList.toggle("active", _soundEnabled);
          saveG();
        };
        row1.appendChild(tog);
        popup.appendChild(row1);
        var row2 = document.createElement("div");
        row2.style.cssText = "display:flex;align-items:center;gap:8px;";
        var volLbl = document.createElement("span");
        volLbl.style.cssText = "font-size:0.7em;color:var(--text-muted,#6e6860);";
        volLbl.textContent = "Vol";
        row2.appendChild(volLbl);
        var slider = document.createElement("input");
        slider.type = "range"; slider.min = "0"; slider.max = "150";
        slider.value = String(Math.round((G.sfxVolume || 1.0) * 100));
        slider.style.cssText = "flex:1;accent-color:var(--primary,#527a5f);";
        slider.oninput = function(ev) {
          ev.stopPropagation();
          G.sfxVolume = parseInt(this.value) / 100;
          if (_sfxGain) _sfxGain.gain.value = G.sfxVolume;
          saveG();
        };
        row2.appendChild(slider);
        popup.appendChild(row2);
        document.body.appendChild(popup);
        setTimeout(function() {
          function closePopup(ev) {
            if (!popup.contains(ev.target) && ev.target !== soundBtn) { popup.remove(); document.removeEventListener("click",closePopup); document.removeEventListener("touchstart",closePopup); }
          }
          document.addEventListener("click", closePopup);
          document.addEventListener("touchstart", closePopup);
        }, 50);
      };
    }
    var musicBtn = document.getElementById("musicBtn");
    if (musicBtn) {
      musicBtn.textContent = "\ud83c\udfb5";
      musicBtn.classList.toggle("active", G.musicEnabled);
      musicBtn.onclick = function(e) {
        e.stopPropagation();
        // Toggle popup slider
        var existing = document.getElementById("musicVolPopup");
        if (existing) { existing.remove(); return; }
        var popup = document.createElement("div");
        popup.id = "musicVolPopup";
        popup.style.cssText = "position:fixed;top:44px;right:60px;background:var(--surface,#fffcf7);border:1.5px solid var(--border,rgba(60,50,40,0.08));border-radius:14px;padding:10px 14px;box-shadow:0 4px 20px rgba(0,0,0,0.15);z-index:200;display:flex;flex-direction:column;gap:6px;min-width:160px;";
        // On/Off toggle
        var row1 = document.createElement("div");
        row1.style.cssText = "display:flex;align-items:center;justify-content:space-between;";
        var lbl = document.createElement("span");
        lbl.style.cssText = "font-size:0.78em;font-weight:700;color:var(--text,#3a3530);";
        lbl.textContent = "Music";
        row1.appendChild(lbl);
        var tog = document.createElement("button");
        tog.style.cssText = "padding:4px 12px;border-radius:12px;border:1px solid var(--border,#ccc);font-family:inherit;font-size:0.75em;font-weight:700;cursor:pointer;touch-action:manipulation;background:" + (_musicEnabled ? "var(--primary,#527a5f)" : "var(--surface-alt,#f0ece4)") + ";color:" + (_musicEnabled ? "#fff" : "var(--text-muted,#6e6860)") + ";";
        tog.textContent = _musicEnabled ? "ON" : "OFF";
        tog.onclick = function(ev) {
          ev.stopPropagation();
          _musicEnabled = !_musicEnabled;
          G.musicEnabled = _musicEnabled;
          if (_musicEnabled) { startAmbientMusic(); updateMusicForWeather(); }
          else { stopAmbientMusic(); }
          tog.textContent = _musicEnabled ? "ON" : "OFF";
          tog.style.background = _musicEnabled ? "var(--primary,#527a5f)" : "var(--surface-alt,#f0ece4)";
          tog.style.color = _musicEnabled ? "#fff" : "var(--text-muted,#6e6860)";
          musicBtn.classList.toggle("active", _musicEnabled);
          saveG();
        };
        row1.appendChild(tog);
        popup.appendChild(row1);
        // Volume slider
        var row2 = document.createElement("div");
        row2.style.cssText = "display:flex;align-items:center;gap:8px;";
        var volLbl = document.createElement("span");
        volLbl.style.cssText = "font-size:0.7em;color:var(--text-muted,#6e6860);";
        volLbl.textContent = "Vol";
        row2.appendChild(volLbl);
        var slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0"; slider.max = "150";
        slider.value = String(Math.round((G.musicVolume || 0.045) * 1000));
        slider.style.cssText = "flex:1;accent-color:var(--primary,#527a5f);";
        slider.oninput = function(ev) {
          ev.stopPropagation();
          var v = parseInt(this.value) / 1000;
          G.musicVolume = v;
          if (_musicNodes && _musicNodes.masterGain) _musicNodes.masterGain.gain.value = v;
          saveG();
        };
        row2.appendChild(slider);
        popup.appendChild(row2);
        // Song selector row
        var row3 = document.createElement("div");
        row3.style.cssText = "display:flex;align-items:center;gap:6px;border-top:1px solid var(--border,rgba(60,50,40,0.08));padding-top:8px;margin-top:4px;";
        var prevBtn = document.createElement("button");
        prevBtn.style.cssText = "width:28px;height:28px;border-radius:50%;border:1px solid var(--border,#ccc);background:var(--surface-alt,#f0ece4);font-family:inherit;font-size:0.8em;cursor:pointer;touch-action:manipulation;color:var(--text,#3a3530);";
        prevBtn.textContent = "\u25c0";
        var nextBtn = document.createElement("button");
        nextBtn.style.cssText = prevBtn.style.cssText;
        nextBtn.textContent = "\u25b6";
        var songName = document.createElement("span");
        songName.style.cssText = "flex:1;text-align:center;font-size:0.72em;font-weight:700;color:var(--text,#3a3530);";
        songName.textContent = SONGS[_currentSongIdx].name;
        function updateSongDisplay() {
          songName.textContent = SONGS[_currentSongIdx].name;
          if (_musicEnabled && _musicNodes) { stopAmbientMusic(); startAmbientMusic(); }
        }
        prevBtn.onclick = function(ev) {
          ev.stopPropagation();
          _currentSongIdx = (_currentSongIdx - 1 + SONGS.length) % SONGS.length;
          updateSongDisplay();
        };
        nextBtn.onclick = function(ev) {
          ev.stopPropagation();
          _currentSongIdx = (_currentSongIdx + 1) % SONGS.length;
          updateSongDisplay();
        };
        row3.appendChild(prevBtn);
        row3.appendChild(songName);
        row3.appendChild(nextBtn);
        popup.appendChild(row3);
        document.body.appendChild(popup);
        // Close on tap outside
        setTimeout(function() {
          function closePopup(ev) {
            if (!popup.contains(ev.target) && ev.target !== musicBtn) {
              popup.remove();
              document.removeEventListener("click", closePopup);
              document.removeEventListener("touchstart", closePopup);
            }
          }
          document.addEventListener("click", closePopup);
          document.addEventListener("touchstart", closePopup);
        }, 50);
      };
    }

    // Title screen → Enter button
    console.log("[Garden] wiring Enter button");
    var titleScreen = document.getElementById("titleScreen");
    var titleBtn = document.getElementById("titleEnter");
    console.log("[Garden] titleBtn found:", !!titleBtn);
    if (titleBtn) {
      function enterGame() {
        console.log("[Garden] enterGame called!");
        getAudioCtx(); // unlock audio on first interaction
        // Start ambient music if enabled
        _musicEnabled = G.musicEnabled;
        if (_musicEnabled) { startAmbientMusic(); showContextTip("firstMusic"); }
        playSound("bloom");
        haptic(50);
        titleScreen.classList.add("hidden");
        document.getElementById("gameScreen").style.display = "";
        setTimeout(function() {
          titleScreen.style.display = "none";
          // One-time compensation for packet bug + welcome back
          applyBugfixGift();
          applyOfflineProgress();
          // Show tutorial for new players, then daily login
          if (!G.tutorialDone) {
            showTutorial();
          } else {
            checkDailyLogin();
          }
        }, 500);
      }
      titleBtn.onclick = enterGame;
      titleBtn.addEventListener("touchstart", function(e) {
        e.preventDefault();
        enterGame();
      }, { passive: false });
    }
    } catch(err) {
      console.error("[Garden] initGame deferred error:", err);
      // Ensure Enter button still works even if setup fails
      var fb = document.getElementById("titleEnter");
      if (fb) fb.onclick = function() {
        document.getElementById("titleScreen").style.display = "none";
        document.getElementById("gameScreen").style.display = "";
      };
    }
  }, 0);
}
function updateHUD() {
  document.getElementById("coinDisp").textContent = G.coins;
  const total = Object.values(G.pkt).reduce((a, b) => a + b, 0);
  document.getElementById("pktDisp").textContent = total;
  const invEl = document.getElementById("invDisp");
  if (invEl) invEl.textContent = G.inventory.length;
}

function renderDrops() {
  const row = document.getElementById("dropRow");
  row.innerHTML = "";
  for (let i = 0; i < G.maxWater; i++) {
    const d = document.createElement("div");
    d.className = "wdrop " + (i < G.water ? "full" : "empty");
    row.appendChild(d);
  }
}

function renderGarden() {
  const grid = document.getElementById("gardenGrid");
  grid.innerHTML = "";
  G.plots.forEach((p, i) => grid.appendChild(buildPlotCard(p, i)));
}
function updatePlotCard(i) {
  const grid = document.getElementById("gardenGrid");
  if (grid.children[i]) {
    grid.replaceChild(buildPlotCard(G.plots[i], i), grid.children[i]);
  }
  // Refresh adjacent pots so hybridize badges update
  var adj = getAdjacentBloomed(i);
  [i - 1, i + 1, i - 3, i + 3].forEach(function(n) {
    if (n >= 0 && n < G.plots.length && grid.children[n]) {
      grid.replaceChild(buildPlotCard(G.plots[n], n), grid.children[n]);
    }
  });
}
function potCardSVG(p) {
  var colors = POT_COLORS[G.potStyle] || POT_COLORS.terracotta;
  const rH = colors.rH,
    rM = colors.rM,
    rD = colors.rD;
  const bM = colors.bM,
    bS = colors.bS;
  const sl = "#4e342e",
    sm = "#3e2723",
    sd = "#2a1810";

  // Flower nested into upper 64px of the 103-tall viewBox
  let flPart = "";
  if (p.state !== "empty") {
    const stage = p.state === "bloomed" ? MAX_STAGE : p.stage;
    const fsvg = flowerSVG(p.key, stage);
    flPart = fsvg.replace(/^<svg /, '<svg x="7" y="0" width="66" height="64" ');
  } else {
    flPart = `<text x="40" y="42" text-anchor="middle" font-size="19"
      fill="rgba(175,100,55,.42)" font-weight="bold">+</text>
      <text x="40" y="54" text-anchor="middle" font-size="6.5"
      fill="rgba(175,100,55,.38)" font-weight="bold">tap to plant</text>`;
  }

  // Progress bar (growing/bloomed states)
  let barEl = "";
  if (p.state !== "empty") {
    const totalSteps = MAX_STAGE * STAGE_WATERS;
    const doneSteps = p.stage * STAGE_WATERS + p.waters;
    const barPct =
      p.state === "bloomed" ? 100 : Math.round((doneSteps / totalSteps) * 100);
    const barW = Math.round((barPct * 50) / 100);
    barEl = `<rect x="15" y="93.5" width="50" height="3" rx="1.5" fill="rgba(0,0,0,.2)"/>
      <rect x="15" y="93.5" width="${barW}" height="3" rx="1.5" fill="#81c784"/>`;
  }

  // Pips (watering progress dots)
  let pipEls = "";
  if (p.state === "growing") {
    for (let w = 0; w < STAGE_WATERS; w++) {
      const cx = 52 + w * 8,
        on = w < p.waters;
      pipEls += `<circle cx="${cx}" cy="9" r="4"
        fill="${on ? "#64b5f6" : "rgba(255,255,255,.3)"}"
        filter="drop-shadow(0 1px 2px rgba(0,0,0,.4))"/>`;
    }
  }

  // Rare/legendary crown badge
  const _rar = p.state !== "empty" ? FLOWERS[p.key].rarity : "";
  const crownEl =
    _rar === "unique"
      ? `<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(233,30,99,.92)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u25c6 U</text>`
      : _rar === "legendary"
        ? `<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(230,81,0,.88)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u2726 L</text>`
        : _rar === "rare"
          ? `<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(25,118,210,.86)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u2605 R</text>`
          : "";

  return `<svg class="pot-svg" viewBox="0 0 80 106"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    ${flPart}
    ${pipEls}
    ${crownEl}
    <!-- Rim top highlight -->
    <rect x="8" y="59" width="64" height="4" rx="2.5" fill="${rH}"/>
    <!-- Rim main body -->
    <rect x="8" y="61" width="64" height="9" rx="3.5" fill="${rM}"/>
    <!-- Rim underside shadow -->
    <rect x="9" y="67" width="62" height="3" rx="2" fill="${rD}" opacity=".5"/>
    <!-- Pot body (trapezoid) -->
    <path d="M13 70 L11 90 Q11 97 19 97 L61 97 Q69 97 69 90 L67 70 Z" fill="${bM}"/>
    <!-- Left shine stripe -->
    <path d="M17 70 L15 87 Q15 92 17.5 93.5"
      stroke="rgba(255,210,170,.28)" stroke-width="3.5"
      fill="none" stroke-linecap="round"/>
    <!-- Right shade stripe -->
    <path d="M63 70 L65 87 Q65 92 62.5 93.5"
      stroke="rgba(0,0,0,.14)" stroke-width="2.5"
      fill="none" stroke-linecap="round"/>
    <!-- Center shine dot -->
    <ellipse cx="24" cy="76" rx="3.5" ry="6" fill="rgba(255,210,170,.16)" transform="rotate(-6,24,76)"/>
    <!-- Dark base band -->
    <path d="M11 89 L11 90 Q11 97 19 97 L61 97 Q69 97 69 90 L69 89 Z" fill="${bS}"/>
    <!-- Pot foot / base ridge -->
    <rect x="14" y="95" width="52" height="4" rx="2" fill="${bS}" opacity=".7"/>
    <!-- Ground shadow ellipse -->
    <ellipse cx="40" cy="103" rx="24" ry="3.5" fill="rgba(0,0,0,.18)"/>
    ${colors.deco || ""}
    <!-- Soil surface layers -->
    <ellipse cx="40" cy="66" rx="28" ry="7.5" fill="${sl}"/>
    <ellipse cx="40" cy="64" rx="25" ry="6"   fill="${sm}"/>
    <ellipse cx="40" cy="63" rx="20" ry="4.5" fill="${sd}"/>
    <!-- Soil texture dots -->
    <circle cx="35" cy="63" r="1.5" fill="${sl}" opacity=".6"/>
    <circle cx="44" cy="62" r="1.2" fill="${sl}" opacity=".5"/>
    <circle cx="30" cy="64" r="1"   fill="${sl}" opacity=".4"/>
    ${barEl}
  </svg>`;
}

function buildPlotCard(p, i) {
  const div = document.createElement("div");
  div.className =
    "plot" +
    (p.state === "bloomed"
      ? " bloomed"
      : p.state === "growing"
        ? " has-plant"
        : "");
  div.onclick = () => clickPlot(i);
  div.addEventListener("touchstart", function(e) {
    e.preventDefault();
    getAudioCtx();
    clickPlot(i);
  }, { passive: false });
  const lbl =
    p.state === "empty"
      ? ""
      : p.state === "bloomed"
        ? "\u2728 " + FLOWERS[p.key].name
        : STAGE_NAMES[p.stage];
  var canFuse = p.state === "bloomed" && canHybridize(i);
  var hybBadge = canFuse ? '<div class="hybridize-badge">\ud83e\uddec Fuse!</div>' : "";
  if (canFuse) showContextTip("firstFusion");
  div.insertAdjacentHTML("beforeend", potCardSVG(p) + (lbl ? '<div class="pot-lbl">' + lbl + '</div>' : "") + hybBadge);
  return div;
}
function clickPlot(i) {
  const p = G.plots[i];
  if (p.state === "empty") {
    if (!G.seeds.length) {
      toast("No seeds! Open a packet first 📦", 2000);
      return;
    }
    openPlantModal(i);
  } else if (p.state === "bloomed") {
    openBloomModal(i);
  } else {
    waterPlot(i);
  }
}
function waterPlot(i) {
  if (G.water <= 0) {
    toast("No water! Pump more at the well 🚰", 2000);
    return;
  }
  G.water--;
  G.plots[i].waters++;
  G.totalWaters++;
  renderDrops();
  playSound("water");
  haptic(30);
  // Capture splash position and trigger animation before any DOM replacement
  const grid = document.getElementById("gardenGrid");
  const oldTile = grid.children[i];
  if (oldTile) {
    const r = oldTile.getBoundingClientRect();
    spawnSplash(r.left + r.width / 2, r.top + r.height / 3);
  }
  if (G.plots[i].waters >= watersNeeded()) {
    G.plots[i].waters = 0;
    G.plots[i].stage++;
    if (G.plots[i].stage >= MAX_STAGE) {
      G.plots[i].stage = MAX_STAGE;
      G.plots[i].state = "bloomed";
      G.totalBlooms++;
      G.plots[i].rewarded = true;
      saveG();
      checkAchievements();
      // Animate old tile while bloom delay plays out
      if (oldTile) {
        oldTile.classList.add("watered");
        setTimeout(() => oldTile.classList.remove("watered"), 380);
      }
      setTimeout(() => {
        updatePlotCard(i);
        confettiBurst();
        // Spawn petal-colored bloom particles
        var grid2 = document.getElementById("gardenGrid");
        var plotEl = grid2 ? grid2.children[i] : null;
        var bKey = G.plots[i].key;
        spawnBloomParticles(plotEl, FLOWERS[bKey] ? FLOWERS[bKey].petal : "#f48fb1");
        playSound("bloom");
        haptic(80);
        toast(FLOWERS[G.plots[i].key].name + " bloomed! Tap it! \ud83c\udf38", 2500);
        setTimeout(function() { showContextTip("firstBloom"); }, 3000);
      }, 350);
    } else {
      updatePlotCard(i);
      saveG();
      toast(`${STAGE_NAMES[G.plots[i].stage]} — keep watering! 🌿`, 1500);
      // Apply stage-up growth animation to the new tile
      if (grid.children[i]) {
        grid.children[i].classList.add("stage-up");
        setTimeout(() => { if (grid.children[i]) grid.children[i].classList.remove("stage-up"); }, 600);
      }
    }
  } else {
    updatePlotCard(i);
    saveG();
    // Apply watered animation to the new tile
    if (grid.children[i]) {
      grid.children[i].classList.add("watered");
      setTimeout(() => { if (grid.children[i]) grid.children[i].classList.remove("watered"); }, 380);
    }
  }
}

function renderTray() {
  const tray = document.getElementById("trayItems");
  if (!G.seeds.length) {
    tray.innerHTML =
      '<div class="tray-empty">No seeds! Open a packet from the Packets button above.</div>';
    return;
  }
  tray.innerHTML = "";
  const groups = {};
  G.seeds.forEach((s) => {
    groups[s.key] = (groups[s.key] || 0) + 1;
  });
  Object.entries(groups).forEach(([key, cnt]) => {
    const f = FLOWERS[key];
    const chip = document.createElement("div");
    chip.className = `seed-chip ${f.rarity}`;
    chip.innerHTML = `
      <div class="chip-svg">${flowerSVG(key, 1)}</div>
      <span class="chip-name">${f.name}</span>
      ${cnt > 1 ? `<span class="chip-cnt">x${cnt}</span>` : ""}
    `;
    tray.appendChild(chip);
  });
}

function openPktModal() {
  const total = Object.values(G.pkt).reduce((a, b) => a + b, 0);
  if (!total) {
    toast("No packets! Buy some in the shop 🛒", 2000);
    return;
  }
  G.openedKey = null;
  G.opening = false;
  _ensurePktResultTemplate();
  // render selector cards
  const types = ["common", "uncommon", "rare", "legendary"];
  document.getElementById("pktSelector").innerHTML = types
    .map((t) => {
      const cnt = G.pkt[t] || 0;
      var btns = [1, 3, 5].map(function(n) {
        var canOpen = cnt >= n;
        return '<button class="pkt-qty-btn' + (canOpen ? '' : ' disabled') + '" ' +
          (canOpen ? 'onclick="selectPktType(\'' + t + '\',' + n + ')"' : 'disabled') +
          '>Open ' + n + '</button>';
      }).join('');
      return '<div class="pkt-sel-card pkt-' + t + (cnt ? '' : ' empty') + '">' +
        '<span class="pkt-sel-icon">' + PKT_ICON[t] + '</span>' +
        '<span class="pkt-sel-name">' + PKT_LABEL[t] + '</span>' +
        '<span class="pkt-sel-cnt' + (cnt ? '' : ' none') + '">\u00d7' + cnt + '</span>' +
        (cnt ? '<div class="pkt-qty-row">' + btns + '</div>' : '') +
      '</div>';
    })
    .join("");
  document.getElementById("pktSelector").style.display = "";
  document.getElementById("pktOpenWrap").style.display = "none";
  document.getElementById("pktResult").classList.remove("show");
  document.getElementById("pktTitle").textContent = "🎁 Open a Packet";
  openModal("pktOverlay");
}
function selectPktType(type, qty) {
  qty = qty || 1;
  if (G.pkt[type] < qty || G.opening) return;
  G.pendingPktType = type;
  G.pendingPktQty = qty;
  G.opening = true;
  G.pkt[type] -= qty;
  updateHUD();
  playSound("packet_tear"); // paper tearing SFX
  document.getElementById("pktSelector").style.display = "none";
  document.getElementById("pktTitle").textContent =
    PKT_ICON[type] + " Opening " + qty + " " + PKT_LABEL[type] + (qty > 1 ? " Packets" : " Packet");

  if (qty === 1) {
    // Single packet — show animation
    var card = document.getElementById("pktCardEl");
    card.className = "pkt-card t-" + type;
    card.querySelector(".pkt-icon").textContent = PKT_ICON[type];
    document.getElementById("pktOpenWrap").style.display = "";
    document.getElementById("pktHint").style.display = "";
    playSound("packet_" + type);
    setTimeout(function() {
      if (!G.opening) return; // modal was dismissed
      card.classList.add("shaking");
      setTimeout(function() {
        try {
        if (!G.opening) return; // modal was dismissed
        G.openedKey = weightedRandom(type);
        saveG();
        var f = FLOWERS[G.openedKey];
        playSound("reveal_" + f.rarity);
        haptic(f.rarity === "legendary" || f.rarity === "unique" ? 100 : 40);
        document.getElementById("pktOpenWrap").style.display = "none";
        var resFlowerEl = document.getElementById("resFlower");
        var svgContent = flowerSVG(G.openedKey, MAX_STAGE);
        var wrapper = document.createElement("div");
        wrapper.style.cssText = "width:100%;height:100%";
        wrapper.insertAdjacentHTML("beforeend", svgContent);
        resFlowerEl.textContent = "";
        resFlowerEl.appendChild(wrapper);
        document.getElementById("resName").textContent = f.name;
        var rl = document.getElementById("resRarity");
        rl.textContent = RARITY_LABEL[f.rarity];
        rl.className = "res-rarity " + f.rarity;
        document.getElementById("resMsg").textContent = getRevealMsg(f);
        document.getElementById("pktResult").classList.add("show");
        G.opening = false;
        if (f.rarity === "legendary" || f.rarity === "unique") multiSparkle();
        if (f.rarity === "unique") confettiBurst();
        else spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.4, "\u2728");
        } catch(err) {
          console.error("[Garden] Packet reveal error:", err);
          // Ensure seed is still collected even if rendering fails
          if (G.openedKey) {
            if (!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
            G.seeds.push({ id: G.seedId++, key: G.openedKey });
            G.openedKey = null;
            G.opening = false;
            renderTray();
            saveG();
            closeModal("pktOverlay");
            toast("Seed collected! (display error) \ud83c\udf31", 2000);
          }
        }
      }, 540);
    }, 100);
  } else {
    // Multi-packet — open all at once, show results list
    document.getElementById("pktOpenWrap").style.display = "none";
    document.getElementById("pktHint").style.display = "none";
    var results = [];
    for (var i = 0; i < qty; i++) {
      var key = weightedRandom(type, results);
      results.push(key);
      if (!G.discovered.includes(key)) G.discovered.push(key);
      G.seeds.push({ id: G.seedId++, key: key });
    }
    saveG();
    // Find best rarity for sound
    var rarityOrder = ["unique", "legendary", "rare", "uncommon", "common"];
    var bestRarity = "common";
    results.forEach(function(k) {
      var r = FLOWERS[k].rarity;
      if (rarityOrder.indexOf(r) < rarityOrder.indexOf(bestRarity)) bestRarity = r;
    });
    playSound("reveal_" + bestRarity);
    haptic(bestRarity === "legendary" || bestRarity === "unique" ? 100 : 40);
    // Build result list
    var resultEl = document.getElementById("pktResult");
    resultEl.innerHTML = "";
    results.forEach(function(key, idx) {
      var f = FLOWERS[key];
      var row = document.createElement("div");
      row.className = "pkt-multi-result";
      row.style.animationDelay = (idx * 0.1) + "s";
      row.innerHTML =
        '<div class="pkt-multi-flower">' + flowerSVG(key, MAX_STAGE) + '</div>' +
        '<div class="pkt-multi-info">' +
          '<div class="pkt-multi-name">' + f.name + '</div>' +
          '<div class="res-rarity ' + f.rarity + '" style="font-size:.7em;padding:3px 10px;">' + RARITY_LABEL[f.rarity] + '</div>' +
        '</div>';
      resultEl.appendChild(row);
    });
    var allBtn = document.createElement("button");
    allBtn.className = "btn-collect";
    allBtn.textContent = "All " + qty + " seeds added! \u2714";
    allBtn.onclick = function() { closeModal("pktOverlay"); };
    allBtn.style.animationDelay = (qty * 0.1 + 0.2) + "s";
    resultEl.appendChild(allBtn);
    resultEl.classList.add("show");
    G.openedKey = null; // already auto-collected
    G.opening = false;
    renderTray();
    if (bestRarity === "unique") confettiBurst();
    else if (bestRarity === "legendary" || bestRarity === "rare") multiSparkle();
  }
}

// Restore the single-packet result template if it was destroyed by multi-pack innerHTML
function _ensurePktResultTemplate() {
  var el = document.getElementById("pktResult");
  if (!document.getElementById("resFlower")) {
    el.innerHTML =
      '<div class="res-flower" id="resFlower"></div>' +
      '<div class="res-name" id="resName"></div>' +
      '<div class="res-rarity" id="resRarity"></div>' +
      '<div class="res-msg" id="resMsg"></div>' +
      '<button class="btn-collect" onclick="collectSeed()">Add to Seeds \ud83c\udf31</button>';
    el.classList.remove("show");
  }
}

function getRevealMsg(f) {
  var msgs = {
    common: "A lovely flower for your garden!",
    uncommon: "A beautiful find \u2014 how wonderful!",
    rare: "\u2728 A rare " + f.name + "! Stunning!",
    legendary: "\ud83c\udf1f A legendary " + f.name + "! One of a kind!",
    unique: "\ud83d\udc8e The UNIQUE flower! Unbelievable!",
    hybrid: "\ud83e\uddec A hybrid " + f.name + "!",
  };
  return msgs[f.rarity] || "A beautiful flower!";
}
function collectSeed() {
  if (!G.openedKey) return;
  if (!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
  G.seeds.push({ id: G.seedId++, key: G.openedKey });
  G.openedKey = null;
  closeModal("pktOverlay");
  renderTray();
  saveG();
  toast("Seed added to your tray! 🌱", 1600);
}

function openPlantModal(plotIdx) {
  G.plantPlot = plotIdx;
  const list = document.getElementById("plantList");
  list.innerHTML = "";
  const groups = {};
  G.seeds.forEach((s) => {
    groups[s.key] = (groups[s.key] || 0) + 1;
  });
  Object.entries(groups).forEach(([key, cnt]) => {
    const f = FLOWERS[key];
    const btn = document.createElement("button");
    btn.className = `plant-row ${f.rarity}`;
    btn.innerHTML = `
      <div class="pr-svg">${flowerSVG(key, 2)}</div>
      <div class="pr-info">
        <div class="pr-name">${f.name}</div>
        <div class="pr-sub">${RARITY_LABEL[f.rarity]} · sells for <span class="ic">C</span>${f.sell}</div>
        <div class="pr-cnt">x${cnt} in your tray</div>
      </div>
      <span class="pr-badge ${f.rarity}">${RARITY_LABEL[f.rarity]}</span>
    `;
    btn.onclick = () => plantSeed(key, plotIdx);
    list.appendChild(btn);
  });
  openModal("plantOverlay");
}
function plantSeed(key, plotIdx) {
  const idx = G.seeds.findIndex((s) => s.key === key);
  if (idx === -1) return;
  if (plotIdx < 0 || plotIdx >= G.plots.length) return;
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.seeds.splice(idx, 1);
  G.plots[plotIdx] = {
    id: plotIdx,
    state: "growing",
    key,
    stage: 0,
    waters: 0,
    rewarded: false,
  };
  closeModal("plantOverlay");
  playSound("plant");
  haptic(40);
  renderGarden();
  renderTray();
  saveG();
  toast(`${FLOWERS[key].name} planted! 💧 Water it to grow!`, 2000);
}

function openBloomModal(i) {
  G.bloomPlot = i;
  const f = FLOWERS[G.plots[i].key];
  var bloomFlEl = document.getElementById("bloomFlEl");
  bloomFlEl.textContent = "";
  bloomFlEl.insertAdjacentHTML("beforeend", flowerSVG(G.plots[i].key, MAX_STAGE));
  document.getElementById("bloomTitle").textContent = `${f.name} is fully bloomed! 🎉`;

  // Rarity badge
  const badge = document.getElementById("bloomBadge");
  badge.textContent = RARITY_LABEL[f.rarity];
  badge.className = `bloom-badge ${f.rarity}`;

  // Atmospheric glow color keyed to rarity
  const glowColors = { common: "#9a9488", uncommon: "#9575cd", rare: "#5c7fbf", legendary: "#d4a03a", unique: "#b03068", hybrid: "#66bb6a" };
  document.getElementById("bloomGlow").style.background = glowColors[f.rarity] || "#9a9488";

  // Rarity-correct sub message
  document.getElementById("bloomSub").textContent =
    f.rarity === "unique"
      ? `💎 A unique ${f.name} — the only one of its kind in the entire world! 🌟💎`
      : f.rarity === "legendary"
        ? `✦ A legendary ${f.name} — one of the rarest blooms! Truly extraordinary! 🌟`
        : f.rarity === "rare"
          ? `★ A rare ${f.name} — gorgeous and hard to find! 💙`
          : f.rarity === "uncommon"
            ? `Your ${f.name.toLowerCase()} is absolutely stunning! 💕`
            : `Beautiful! Your ${f.name.toLowerCase()} is glowing! 🌸`;

  var sellBtn = document.getElementById("btnSell");
  var canHyb = canHybridize(i);
  if (canHyb) {
    sellBtn.textContent = "\ud83e\uddec Fuse with neighbor";
    sellBtn.onclick = function() { closeModal("bloomOverlay"); openHybridModal(i); };
    sellBtn.style.display = "";
  } else {
    sellBtn.style.display = "none";
  }
  document.getElementById("btnStore").onclick = storeFlower;
  document.getElementById("btnLeave").onclick = function() {
    closeModal("bloomOverlay");
    toast("Left in pot \u2014 fuse when a neighbor blooms! \ud83c\udf38", 2000);
  };
  // Direct sell: find a matching NPC wanting this flower
  var existingDirectBtn = document.getElementById("btnDirectSell");
  if (existingDirectBtn) existingDirectBtn.remove();
  var flowerKey = G.plots[i].key;
  var matchingNpc = G.npcs.find(function(npc) {
    if (npc.wildcard) return FLOWERS[flowerKey] && FLOWERS[flowerKey].rarity === npc.requestRarity;
    return npc.requestKey === flowerKey;
  });
  if (matchingNpc) {
    var directBtn = document.createElement("button");
    directBtn.id = "btnDirectSell";
    directBtn.className = "btn-store";
    directBtn.style.cssText = "background:linear-gradient(135deg,#f9a825,#ff8f00);color:#fff;font-weight:700;border:none;";
    directBtn.textContent = "\ud83d\udcb0 Sell to " + matchingNpc.name + " for " + matchingNpc.reward + " coins!";
    directBtn.onclick = function() {
      if (G.bloomPlot === null) return;
      var key = G.plots[G.bloomPlot].key;
      var fSold = FLOWERS[key];
      if (!G.discovered.includes(key)) G.discovered.push(key);
      // Remove NPC
      var npcIdx = G.npcs.findIndex(function(n) { return n.id === matchingNpc.id; });
      if (npcIdx !== -1) {
        G.coins += matchingNpc.reward;
        G.totalCoins += matchingNpc.reward;
        G.totalSold++;
        G.npcSales++;
        G.npcStreak++;
        if (G.npcStreak > G.npcBestStreak) G.npcBestStreak = G.npcStreak;
        G.npcs.splice(npcIdx, 1);
      }
      clearPlot(G.bloomPlot);
      G.bloomPlot = null;
      closeModal("bloomOverlay");
      updateHUD();
      renderNPCs();
      saveG();
      playSound("sale");
      haptic(50);
      toast(matchingNpc.name + " loved the " + fSold.name + "! +" + matchingNpc.reward + " coins \ud83d\udcb0", 2500);
      spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.3, "\u2728");
      checkAchievements();
    };
    var actions = document.querySelector(".bloom-actions");
    if (actions) actions.insertBefore(directBtn, actions.firstChild);
  }
  openModal("bloomOverlay");
  // Delay action buttons to prevent accidental taps from spam-tapping the pot
  var actions = document.querySelector(".bloom-actions");
  if (actions) {
    actions.classList.remove("active");
    setTimeout(function() { actions.classList.add("active"); }, 1500);
  }
}
function storeFlower() {
  if (G.bloomPlot === null) return;
  const key = G.plots[G.bloomPlot].key;
  const f = FLOWERS[key];
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.seedId++;
  G.inventory.push({ key, uid: G.seedId, storedAt: Date.now() });
  clearPlot(G.bloomPlot);
  G.bloomPlot = null;
  closeModal("bloomOverlay");
  updateHUD();
  saveG();
  checkAchievements();
  toast(`${f.name} stored in Garden House! 🏡`, 2000);
}
function openInventoryModal() {
  renderMilestoneSection();
  const grid = document.getElementById("invGrid");
  const hdr = document.getElementById("invHeader");
  if (hdr)
    hdr.textContent = G.inventory.length
      ? `${G.inventory.length} flower${G.inventory.length !== 1 ? "s" : ""} in Garden House`
      : "Garden House is empty";
  grid.innerHTML = "";
  if (!G.inventory.length) {
    grid.innerHTML =
      '<div class="tray-empty">Garden House is empty.<br>Tap a bloomed flower and choose Store to keep it here for selling to NPCs!</div>';
    openModal("invOverlay");
    return;
  }
  G.inventory.forEach((item) => {
    const f = FLOWERS[item.key];
    const card = document.createElement("div");
    card.className = "inv-card " + f.rarity;
    const rarLabel =
      f.rarity === "legendary"
        ? "✦ Legendary"
        : f.rarity === "unique"
          ? "◆ Unique"
          : f.rarity.charAt(0).toUpperCase() + f.rarity.slice(1);
    var appVal = getAppreciatedValue(item);
    var appreciated = appVal > f.sell;
    card.innerHTML =
      `<div class="inv-fl">${flowerSVG(item.key, MAX_STAGE)}</div>` +
      `<div class="inv-name">${f.name}</div>` +
      `<div class="inv-badge ${f.rarity}">${rarLabel}</div>` +
      `<div class="inv-sell-val"><span class="ic">C</span>${appVal}` +
      (appreciated ? ` <span class="inv-appreciate">\u2191</span>` : "") +
      `</div>`;
    grid.appendChild(card);
  });
  openModal("invOverlay");
}
function sellFromInventory(uid) {
  const idx = G.inventory.findIndex((x) => x.uid === uid);
  if (idx === -1) return;
  const f = FLOWERS[G.inventory[idx].key];
  G.coins += f.sell;
  G.inventory.splice(idx, 1);
  updateHUD();
  saveG();
  toast(`Sold ${f.name} for ${f.sell} coins! 💰`, 2000);
  openInventoryModal();
}
function clearPlot(i) {
  G.plots[i] = {
    id: i,
    state: "empty",
    key: null,
    stage: 0,
    waters: 0,
    rewarded: false,
  };
  updatePlotCard(i);
}

function getFlowerHint(f) {
  var hints = {
    common: "Common packet",
    uncommon: "Uncommon+",
    rare: "Rare packet",
    legendary: "Keep opening!",
    unique: "Ultra rare\u2026",
    hybrid: "Fuse!",
  };
  return hints[f.rarity] || "???";
}

function openJournalModal() {
  const order = [
    // Common (59)
    "pinkTulip",
    "redTulip",
    "yellowTulip",
    "purpleViolet",
    "blueViolet",
    "purpleIris",
    "yellowDaffodil",
    "whiteDaisy",
    "yellowDaisy",
    "pinkDaisy",
    "pinkCarnation",
    "redCarnation",
    "whiteCarnation",
    "purpleHyacinth",
    "pinkHyacinth",
    "yellowChrysanthemum",
    "pinkChrysanthemum",
    "redGeranium",
    "pinkGeranium",
    "blueBluebell",
    "purpleBluebell",
    "yellowMarigold",
    "orangeMarigold",
    "purplePansy",
    "yellowPansy",
    "pinkPetunia",
    "purplePetunia",
    "yellowPrimrose",
    "pinkPrimrose",
    "purpleCrocus",
    "yellowCrocus",
    "orangeCalendula",
    "yellowCalendula",
    "pinkCosmos",
    "whiteCosmos",
    "pinkZinnia",
    "orangeZinnia",
    "pinkSnapdragon",
    "yellowSnapdragon",
    "blueForgetMeNot",
    "pinkAster",
    "purpleAster",
    "blueCornflower",
    "pinkImpatiens",
    "pinkVerbena",
    "purpleHeather",
    "purpleStatice",
    "orangeGerbera",
    "pinkGerbera",
    "blackEyedSusan",
    "blueSalvia",
    "yellowAlstroemeria",
    "orangeNasturtium",
    "pinkPhlox",
    "purpleVeronica",
    "pinkSweetPea",
    "yellowWallflower",
    "redGaillardia",
    "pinkStock",
    // Uncommon (46)
    "sunflower",
    "lavender",
    "whiteTulip",
    "redRose",
    "pinkRose",
    "pinkLily",
    "blueIris",
    "whiteDaffodil",
    "whiteViolet",
    "pinkPeony",
    "redPoppy",
    "orangePoppy",
    "cherryBlossom",
    "deepCherry",
    "yellowRose",
    "peachRose",
    "purpleRose",
    "pinkAlstroemeria",
    "blueHyacinth",
    "purpleChrysanthemum",
    "whiteMagnolia",
    "pinkMagnolia",
    "redBegonia",
    "pinkBegonia",
    "pinkDahlia",
    "purpleDahlia",
    "orangeDahlia",
    "pinkAzalea",
    "redAnemone",
    "purpleAnemone",
    "yellowFreesia",
    "pinkFreesia",
    "pinkGladiolus",
    "purpleGladiolus",
    "pinkHibiscus",
    "redHibiscus",
    "lilyValley",
    "purpleWisteria",
    "purpleFoxglove",
    "pinkFoxglove",
    "whiteGardenia",
    "pinkCyclamen",
    "pinkRanunculus",
    "whiteJasmine",
    "purpleBuddleia",
    "purpleLantana",
    // Rare (27)
    "tigerLily",
    "goldenIris",
    "pinkDaffodil",
    "redPeony",
    "purpleOrchid",
    "blackTulip",
    "silverRose",
    "crystalDaisy",
    "violetPoppy",
    "goldenCherry",
    "midnightRose",
    "purpleCarnation",
    "pinkFuchsia",
    "purpleClematis",
    "blueHydrangea",
    "pinkHydrangea",
    "whiteCamellia",
    "redCamellia",
    "pinkLotus",
    "pinkPlumeria",
    "pinkBleedingHeart",
    "blueMorningGlory",
    "purpleHellebore",
    "purpleAllium",
    "purpleGloxinia",
    "yellowPlumeria",
    "magentaBougainvillea",
    // Legendary (15)
    "blueRose",
    "blueTulip",
    "goldenRose",
    "blackRose",
    "whitePeony",
    "pinkOrchid",
    "blueOrchid",
    "whiteLotus",
    "saffron",
    "whitePlumeria",
    "greenHydrangea",
    "whiteWisteria",
    "redAmaryllis",
    "orangeBromeliad",
    "darkHellebore",
    // Unique (1)
    "whiteLily",
    // Hybrid (12) — only from hybridization
    "sunsetRose",
    "moonlightLily",
    "crimsonOrchid",
    "goldenDaisy",
    "frostedCherry",
    "shadowIris",
    "coralPeony",
    "stardustLavender",
    "emeraldTulip",
    "phoenixSunflower",
    "crystalViolet",
    "midnightPoppy",
  ];
  const grid = document.getElementById("jnlGrid");
  grid.innerHTML = "";
  // Collect discovered dynamic hybrids and mutations (not in the static order list)
  var dynamicKeys = G.discovered.filter(function(k) {
    return (k.indexOf("dyn_") === 0 || k.indexOf("mut_") === 0) && FLOWERS[k];
  });
  // Sort: mutations first, then dynamic hybrids, alphabetically within each
  dynamicKeys.sort(function(a, b) {
    var aMut = a.indexOf("mut_") === 0 ? 0 : 1;
    var bMut = b.indexOf("mut_") === 0 ? 0 : 1;
    if (aMut !== bMut) return aMut - bMut;
    return (FLOWERS[a].name || a).localeCompare(FLOWERS[b].name || b);
  });
  var fullOrder = order.concat(dynamicKeys);
  var staticCount = order.length;
  const unlocked = fullOrder.filter((k) => G.discovered.includes(k)).length;
  var staticUnlocked = order.filter((k) => G.discovered.includes(k)).length;
  var dynCount = dynamicKeys.length;
  document.getElementById("jnlProg").textContent =
    staticUnlocked + " / " + staticCount + " flowers" + (dynCount > 0 ? " + " + dynCount + " fusion" + (dynCount > 1 ? "s" : "") : "");
  // Fusion Guide button in journal
  var existingFusionBtn = grid.parentElement.querySelector(".jnl-fusion-btn");
  if (existingFusionBtn) existingFusionBtn.remove();
  var fusionBtn = document.createElement("button");
  fusionBtn.className = "jnl-fusion-btn";
  fusionBtn.textContent = "\ud83e\uddec Fusion Guide";
  fusionBtn.onclick = function() { closeModal("journalOverlay"); setTimeout(openBreedGuide, 200); };
  grid.parentElement.insertBefore(fusionBtn, grid);
  // Render static flowers
  order.forEach(function(key) {
    var f = FLOWERS[key];
    var known = G.discovered.includes(key);
    var card = document.createElement("div");
    card.className = "jnl-card" + (known ? "" : " jlocked");
    var isLight = isLightColor(f.petal);
    var isNight = document.body.classList.contains("night-mode") || G.bgStyle === "night";
    if (known && isLight && !isNight) {
      card.style.background = "#e8e4dc";
      card.style.color = "#3a3530";
    }
    var svgHtml = flowerSVG(key, 3);
    var needsDarkText = known && isLight && !isNight;
    var nameColor = needsDarkText ? "color:#3a3530;" : "";
    var sellColor = needsDarkText ? "color:#5a5348;" : "";
    card.insertAdjacentHTML("beforeend",
      '<div class="jnl-svg' + (known ? "" : " jsilhouette") + '">' + svgHtml + '</div>' +
      '<div class="jnl-name' + (known ? "" : " jlocked") + '" style="' + nameColor + '">' + (known ? f.name : getFlowerHint(f)) + '</div>' +
      '<span class="jnl-badge ' + f.rarity + '">' + RARITY_LABEL[f.rarity] + '</span>' +
      '<div class="jnl-sell' + (known ? "" : " jhide") + '"><span class="ic" style="width:13px;height:13px;font-size:.6em">C</span>' + f.sell + '</div>'
    );
    grid.appendChild(card);
  });
  // Render dynamic fusions section
  if (dynamicKeys.length > 0) {
    var divider = document.createElement("div");
    divider.style.cssText = "grid-column:1/-1;text-align:center;padding:12px 0 4px;font-size:.8em;font-weight:700;color:var(--primary,#527a5f);border-top:1px solid var(--border,rgba(60,50,40,0.1));margin-top:8px;";
    divider.textContent = "\ud83e\uddec Your Fusions (" + dynamicKeys.length + ")";
    grid.appendChild(divider);
    dynamicKeys.forEach(function(key) {
      var f = FLOWERS[key];
      if (!f) return;
      var card = document.createElement("div");
      card.className = "jnl-card";
      var isLight = isLightColor(f.petal);
      var isNightF = document.body.classList.contains("night-mode") || G.bgStyle === "night";
      if (isLight && !isNightF) {
        card.style.background = "#e8e4dc";
        card.style.color = "#3a3530";
      }
      var isMut = key.indexOf("mut_") === 0;
      var svgHtml = flowerSVG(key, 3);
      var needsDark = isLight && !isNightF;
      var nameColor = needsDark ? "color:#3a3530;" : "";
      var sellColor = needsDark ? "color:#5a5348;" : "";
      card.insertAdjacentHTML("beforeend",
        '<div class="jnl-svg">' + svgHtml + '</div>' +
        '<div class="jnl-name" style="' + nameColor + '">' + f.name + '</div>' +
        '<span class="jnl-badge hybrid">' + (isMut ? "\u2728 Mutation" : "\ud83e\uddec Fusion") + '</span>' +
        '<div class="jnl-sell" style="' + sellColor + '"><span class="ic" style="width:13px;height:13px;font-size:.6em">C</span>' + f.sell + '</div>'
      );
      grid.appendChild(card);
    });
  }
  openModal("journalOverlay");
}
function openShopModal() {
  updateShopWater();
  updateShopPot();
  showContextTip("firstShop");
  openModal("shopOverlay");
}
function buyPacket(type) {
  const cost = PKT_COST[type];
  if (G.coins < cost) {
    toast(`Need ${cost} coins for a ${PKT_LABEL[type]} Packet! 💰`, 2000);
    return;
  }
  G.coins -= cost;
  G.pkt[type]++;
  updateHUD();
  closeModal("shopOverlay");
  playSound("buy");
  saveG();
  toast(`${PKT_ICON[type]} ${PKT_LABEL[type]} Packet bought!`, 1600);
}

function buyPot() {
  const n = G.plots.length;
  if (n >= MAX_PLOTS) return;
  const cost = POT_PRICES[n] || 600;
  if (G.coins < cost) {
    toast(`Need ${cost} coins for a new pot! 💰`, 2000);
    return;
  }
  G.coins -= cost;
  G.plots.push({
    id: n,
    state: "empty",
    key: null,
    stage: 0,
    waters: 0,
    rewarded: false,
  });
  updateHUD();
  renderGarden();
  updateShopPot();
  playSound("buy");
  haptic(50);
  saveG();
  toast("New pot added! You now have " + G.plots.length + " pots \ud83c\udf3f", 2000);
}

function buyWaterUpgrade() {
  var upgrade = WATER_CAP_UPGRADES.find(function(u) { return G.maxWater < u.cap; });
  if (!upgrade) return;
  if (G.coins < upgrade.cost) {
    toast("Need " + upgrade.cost + " coins for water upgrade!", 2000);
    return;
  }
  G.coins -= upgrade.cost;
  G.maxWater = upgrade.cap;
  updateHUD();
  renderDrops();
  updateShopWater();
  playSound("buy");
  saveG();
  toast("Water capacity upgraded to " + G.maxWater + "! \ud83d\udca7", 2000);
}

function updateShopWater() {
  var item = document.getElementById("shopWaterItem");
  var nameEl = document.getElementById("shopWaterName");
  var detailEl = document.getElementById("shopWaterDetail");
  var priceEl = document.getElementById("waterUpPrice");
  if (!item) return;
  var upgrade = WATER_CAP_UPGRADES.find(function(u) { return G.maxWater < u.cap; });
  if (!upgrade) {
    item.classList.add("sold-out");
    nameEl.textContent = "Max Capacity!";
    detailEl.textContent = "Water can fully upgraded (" + G.maxWater + ")";
    priceEl.textContent = "\u2014";
  } else {
    item.classList.remove("sold-out");
    nameEl.textContent = upgrade.label;
    detailEl.textContent = "Current: " + G.maxWater + " \u2192 " + upgrade.cap;
    priceEl.textContent = upgrade.cost;
  }
}

function updateShopPot() {
  const n = G.plots.length;
  const item = document.getElementById("shopPotItem");
  const nameEl = document.getElementById("shopPotName");
  const detailEl = document.getElementById("shopPotDetail");
  const priceEl = document.getElementById("potPrice");
  if (!item) return;
  if (n >= MAX_PLOTS) {
    item.classList.add("sold-out");
    nameEl.textContent = "Garden Full!";
    detailEl.textContent = "All " + MAX_PLOTS + " pots unlocked";
    priceEl.textContent = "\u2014";
  } else {
    item.classList.remove("sold-out");
    const cost = POT_PRICES[n] || 600;
    nameEl.textContent = "Pot #" + (n + 1);
    detailEl.textContent = "Expand to " + (n + 1) + " pots (" + n + " now)";
    priceEl.textContent = cost;
  }
}


// .tbtn already has touch-action:manipulation so iOS fires click immediately (no 300ms delay)
// We use a time guard on backdrop-dismiss to stop any stray click from closing a freshly opened modal
let _modalOpenTime = 0;
function openModal(id) {
  document.querySelectorAll(".overlay.on").forEach((o) => {
    if (o.id !== id) {
      if (o.id === "pktOverlay" && G.opening && !G.openedKey) {
        G.pkt[G.pendingPktType] += (G.pendingPktQty || 1);
        G.opening = false;
        updateHUD();
        saveG();
      }
      o.classList.remove("on");
    }
  });
  document.getElementById(id).classList.add("on");
  _modalOpenTime = Date.now();
  if (id !== "pktOverlay") G.opening = false;
}
function closeModal(id) {
  // Refund packet if closed mid-animation before seed was revealed
  if (id === "pktOverlay" && G.opening && !G.openedKey) {
    G.pkt[G.pendingPktType] += (G.pendingPktQty || 1);
    G.opening = false;
    updateHUD();
    saveG();
  }
  // Auto-collect seed if packet result is showing but user tapped away
  if (id === "pktOverlay" && G.openedKey) {
    if (!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
    G.seeds.push({ id: G.seedId++, key: G.openedKey });
    G.openedKey = null;
    G.opening = false;
    renderTray();
    saveG();
    toast("Seed auto-collected! \ud83c\udf31", 1200);
  }
  document.getElementById(id).classList.remove("on");
}
// Backdrop dismiss — handles both click (desktop) and touchstart (mobile)
function _backdropDismiss(o, e) {
  if (e.target !== o) return;
  if (Date.now() - _modalOpenTime < 300) return;
  e.preventDefault();
  closeModal(o.id);
}
document.querySelectorAll(".overlay").forEach((o) => {
  o.addEventListener("click", (e) => _backdropDismiss(o, e));
  o.addEventListener("touchstart", (e) => _backdropDismiss(o, e), {
    passive: false,
  });
});

const PKT_POOLS = {
  common: {
    // common flowers
    pinkTulip: 30,
    redTulip: 26,
    yellowTulip: 22,
    purpleViolet: 20,
    blueViolet: 18,
    purpleIris: 14,
    yellowDaffodil: 18,
    whiteDaisy: 20,
    yellowDaisy: 16,
    pinkDaisy: 12,
    pinkCarnation: 25,
    redCarnation: 22,
    whiteCarnation: 20,
    purpleHyacinth: 22,
    pinkHyacinth: 18,
    yellowChrysanthemum: 18,
    pinkChrysanthemum: 16,
    redGeranium: 22,
    pinkGeranium: 20,
    blueBluebell: 20,
    purpleBluebell: 16,
    yellowMarigold: 24,
    orangeMarigold: 20,
    purplePansy: 22,
    yellowPansy: 20,
    pinkPetunia: 22,
    purplePetunia: 20,
    yellowPrimrose: 22,
    pinkPrimrose: 18,
    purpleCrocus: 20,
    yellowCrocus: 18,
    orangeCalendula: 22,
    yellowCalendula: 20,
    pinkCosmos: 22,
    whiteCosmos: 18,
    pinkZinnia: 20,
    orangeZinnia: 18,
    pinkSnapdragon: 18,
    yellowSnapdragon: 16,
    blueForgetMeNot: 24,
    pinkAster: 18,
    purpleAster: 16,
    blueCornflower: 22,
    pinkImpatiens: 20,
    pinkVerbena: 18,
    purpleHeather: 18,
    purpleStatice: 20,
    orangeGerbera: 20,
    pinkGerbera: 18,
    blackEyedSusan: 20,
    blueSalvia: 18,
    yellowAlstroemeria: 18,
    orangeNasturtium: 20,
    pinkPhlox: 18,
    purpleVeronica: 16,
    pinkSweetPea: 18,
    yellowWallflower: 16,
    redGaillardia: 16,
    pinkStock: 18,
    // uncommon bleed-through
    sunflower: 5,
    lavender: 4,
    whiteTulip: 4,
    redRose: 6,
    pinkRose: 3,
    redPoppy: 3,
    cherryBlossom: 2,
  },
  uncommon: {
    // uncommon flowers
    sunflower: 22,
    lavender: 18,
    whiteTulip: 14,
    redRose: 18,
    pinkRose: 12,
    pinkLily: 14,
    blueIris: 12,
    whiteDaffodil: 12,
    whiteViolet: 10,
    pinkPeony: 10,
    redPoppy: 18,
    orangePoppy: 14,
    cherryBlossom: 16,
    deepCherry: 10,
    yellowRose: 10,
    peachRose: 8,
    purpleRose: 6,
    pinkAlstroemeria: 14,
    blueHyacinth: 12,
    purpleChrysanthemum: 12,
    whiteMagnolia: 14,
    pinkMagnolia: 10,
    redBegonia: 14,
    pinkBegonia: 12,
    pinkDahlia: 14,
    purpleDahlia: 12,
    orangeDahlia: 10,
    pinkAzalea: 14,
    redAnemone: 14,
    purpleAnemone: 12,
    yellowFreesia: 14,
    pinkFreesia: 12,
    pinkGladiolus: 14,
    purpleGladiolus: 12,
    pinkHibiscus: 14,
    redHibiscus: 12,
    lilyValley: 12,
    purpleWisteria: 10,
    purpleFoxglove: 12,
    pinkFoxglove: 14,
    whiteGardenia: 10,
    pinkCyclamen: 12,
    pinkRanunculus: 12,
    whiteJasmine: 12,
    purpleBuddleia: 12,
    purpleLantana: 12,
    // rare bleed-through
    blueRose: 3,
    blueTulip: 3,
  },
  rare: {
    // rare flowers
    tigerLily: 20,
    goldenIris: 18,
    pinkDaffodil: 16,
    redPeony: 16,
    purpleOrchid: 16,
    blackTulip: 14,
    silverRose: 14,
    crystalDaisy: 14,
    violetPoppy: 14,
    goldenCherry: 12,
    midnightRose: 10,
    purpleCarnation: 12,
    pinkFuchsia: 12,
    purpleClematis: 12,
    blueHydrangea: 12,
    pinkHydrangea: 10,
    whiteCamellia: 12,
    redCamellia: 10,
    pinkLotus: 10,
    pinkPlumeria: 10,
    pinkBleedingHeart: 10,
    blueMorningGlory: 10,
    purpleHellebore: 10,
    purpleAllium: 10,
    purpleGloxinia: 10,
    yellowPlumeria: 8,
    magentaBougainvillea: 10,
    // legendary bleed-through
    blueRose: 8,
    blueTulip: 8,
    goldenRose: 6,
    blackRose: 4,
    whitePeony: 4,
    pinkOrchid: 3,
    blueOrchid: 2,
    whiteLotus: 3,
    saffron: 2,
    whitePlumeria: 2,
    greenHydrangea: 2,
    whiteWisteria: 2,
    redAmaryllis: 2,
    orangeBromeliad: 2,
    darkHellebore: 1,
    whiteLily: 1,
  },
  legendary: {
    // legendary flowers only
    blueRose: 35,
    blueTulip: 35,
    goldenRose: 25,
    blackRose: 15,
    whitePeony: 12,
    pinkOrchid: 10,
    blueOrchid: 8,
    whiteLotus: 10,
    saffron: 8,
    whitePlumeria: 8,
    greenHydrangea: 6,
    whiteWisteria: 6,
    redAmaryllis: 6,
    orangeBromeliad: 5,
    darkHellebore: 4,
    whiteLily: 3,
  },
};
// Smart pack: duplicate protection + undiscovered boost
// exclude: array of keys to exclude from this batch (multi-pack dedup)
function weightedRandom(type, exclude) {
  type = type || "common";
  exclude = exclude || [];
  var pool = PKT_POOLS[type] || PKT_POOLS.common;
  var keys = Object.keys(pool);
  // Count how many of each flower the player currently owns (seeds + inventory + plots)
  var ownedCount = {};
  G.seeds.forEach(function(s) { ownedCount[s.key] = (ownedCount[s.key] || 0) + 1; });
  G.inventory.forEach(function(i) { ownedCount[i.key] = (ownedCount[i.key] || 0) + 1; });
  G.plots.forEach(function(p) { if (p.key) ownedCount[p.key] = (ownedCount[p.key] || 0) + 1; });
  // Also count batch exclusions
  exclude.forEach(function(k) { ownedCount[k] = (ownedCount[k] || 0) + 1; });
  // Build adjusted weights
  var adjusted = {};
  var total = 0;
  keys.forEach(function(k) {
    var w = pool[k];
    var owned = ownedCount[k] || 0;
    // Reduce weight for duplicates
    if (owned >= 3) w *= 0.1;
    else if (owned >= 2) w *= 0.25;
    else if (owned >= 1) w *= 0.5;
    // Boost undiscovered flowers (especially for legendary)
    if (!G.discovered.includes(k)) {
      w *= (type === "legendary" ? 2.0 : 1.5);
    }
    adjusted[k] = w;
    total += w;
  });
  // Roll
  var r = Math.random() * total;
  for (var i = 0; i < keys.length; i++) {
    r -= adjusted[keys[i]];
    if (r <= 0) return keys[i];
  }
  return keys[keys.length - 1];
}

// ── Valve wheel ─────────────────────────────────────────────────────────────
// ── New Water System: Whirlpool Button + Cloud Tap + Passive Trickle ──────
(function setupWater() {
  var WHIRL_COOLDOWN = 0; // no cooldown
  var WHIRL_AMOUNT = 3;
  var TRICKLE_INTERVAL = 45000; // 45s
  var CLOUD_INTERVAL_MIN = 40000; // 40s
  var CLOUD_INTERVAL_MAX = 60000; // 60s
  var CLOUD_AMOUNT = 2;

  var whirlBtn = document.getElementById("whirlBtn");
  var whirlLabel = document.getElementById("whirlLabel");
  var whirlCdFill = document.getElementById("whirlCdFill");
  var trickleLabel = document.getElementById("trickleLabel");
  var whirlLastUsed = 0;
  var trickleTimer = Date.now();
  var nextCloudAt = Date.now() + CLOUD_INTERVAL_MIN + Math.random() * (CLOUD_INTERVAL_MAX - CLOUD_INTERVAL_MIN);

  function addWater(amount, msg) {
    if (G.water >= G.maxWater) {
      toast("Water tank full! \ud83d\udca7", 1000);
      return;
    }
    G.water = Math.min(G.maxWater, G.water + amount);
    renderDrops();
    saveG();
    if (msg) toast(msg, 1400);
  }

  // Bucket fill mechanic
  var SWIPES_TO_FILL = 8; // up-down swipes needed
  var bucketOverlay = document.getElementById("bucketOverlay");
  var bucketWater = document.getElementById("bucketWater");
  var bucketPct = document.getElementById("bucketPct");
  var bucketHint = document.getElementById("bucketHint");
  var bucketFillLevel = 0;
  var _bucketSwipeStartY = 0;
  var _bucketSwipeDir = 0; // 0=none, 1=down, -1=up
  var _bucketLastDir = 0;
  var _bucketActive = false;

  function whirlReady() {
    return Date.now() - whirlLastUsed >= WHIRL_COOLDOWN;
  }

  function openBucket() {
    if (!whirlReady()) return;
    getAudioCtx();
    _bucketActive = true;
    bucketFillLevel = 0;
    _bucketLastDir = 0;
    updateBucketVisual();
    bucketHint.textContent = "Swipe up \u0026 down to fill!";
    bucketOverlay.classList.add("on");
    playSound("click");
  }

  function updateBucketVisual() {
    var pct = Math.min(100, Math.round((bucketFillLevel / SWIPES_TO_FILL) * 100));
    // Water rect: y goes from 190 (empty) to 60 (full), height = 190 - y
    var waterHeight = (130 * pct / 100);
    var waterY = 190 - waterHeight;
    bucketWater.setAttribute("y", waterY.toFixed(0));
    bucketWater.setAttribute("height", waterHeight.toFixed(0));
    bucketPct.textContent = pct + "%";
  }

  function completeBucket() {
    _bucketActive = false;
    whirlLastUsed = Date.now();
    whirlBtn.disabled = WHIRL_COOLDOWN > 0;
    // Full water!
    var amount = G.maxWater - G.water;
    G.water = G.maxWater;
    renderDrops();
    saveG();
    playSound("whirlpool");
    haptic(80);
    bucketHint.textContent = "\ud83d\udca7 Full! +" + amount + " water!";
    // Burst animation on bucket
    var svg = bucketOverlay.querySelector(".bucket-svg");
    if (svg) svg.classList.add("bucket-full");
    // Splash drops
    for (var i = 0; i < 8; i++) {
      var drop = document.createElement("div");
      drop.className = "bucket-splash-drop";
      drop.textContent = "\ud83d\udca7";
      var cx = window.innerWidth / 2 - 40 + Math.random() * 80;
      var cy = window.innerHeight / 2 - 20 + Math.random() * 40;
      drop.style.cssText = "left:" + cx + "px;top:" + cy + "px;animation-delay:" + (i * 0.06) + "s;";
      document.body.appendChild(drop);
      setTimeout(function(d) { d.remove(); }, 900, drop);
    }
    // Close after short delay
    setTimeout(function() {
      bucketOverlay.classList.remove("on");
      if (svg) svg.classList.remove("bucket-full");
      toast("Water bucket filled to max! \ud83d\udca7", 2000);
    }, 1200);
  }

  // Touch handling for swipe detection (up-down)
  bucketOverlay.addEventListener("touchstart", function(e) {
    if (!_bucketActive) return;
    _bucketSwipeStartY = e.touches[0].clientY;
    _bucketSwipeDir = 0;
  }, { passive: true });

  bucketOverlay.addEventListener("touchmove", function(e) {
    if (!_bucketActive) return;
    e.preventDefault();
    var dy = e.touches[0].clientY - _bucketSwipeStartY;
    if (Math.abs(dy) > 15) {
      var dir = dy > 0 ? 1 : -1;
      // Only count if direction changed from last swipe (alternating)
      if (dir !== _bucketLastDir) {
        _bucketLastDir = dir;
        bucketFillLevel++;
        updateBucketVisual();
        playSound("water");
        haptic(20);
        _bucketSwipeStartY = e.touches[0].clientY; // reset for next swipe

        if (bucketFillLevel >= SWIPES_TO_FILL) {
          completeBucket();
        }
      }
    }
  }, { passive: false });

  // Mouse support (desktop testing)
  var _mouseDown = false;
  bucketOverlay.addEventListener("mousedown", function(e) {
    if (!_bucketActive) return;
    _mouseDown = true;
    _bucketSwipeStartY = e.clientY;
    _bucketSwipeDir = 0;
  });
  bucketOverlay.addEventListener("mousemove", function(e) {
    if (!_bucketActive || !_mouseDown) return;
    var dy = e.clientY - _bucketSwipeStartY;
    if (Math.abs(dy) > 15) {
      var dir = dy > 0 ? 1 : -1;
      if (dir !== _bucketLastDir) {
        _bucketLastDir = dir;
        bucketFillLevel++;
        updateBucketVisual();
        playSound("water");
        _bucketSwipeStartY = e.clientY;
        if (bucketFillLevel >= SWIPES_TO_FILL) {
          _mouseDown = false;
          completeBucket();
        }
      }
    }
  });
  bucketOverlay.addEventListener("mouseup", function() { _mouseDown = false; });

  // Close on tap if not swiping (tap to cancel)
  bucketOverlay.addEventListener("click", function(e) {
    if (e.target === bucketOverlay && _bucketActive && bucketFillLevel === 0) {
      _bucketActive = false;
      bucketOverlay.classList.remove("on");
    }
  });

  whirlBtn.onclick = openBucket;
  whirlBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    getAudioCtx();
    openBucket();
  }, { passive: false });

  // Cloud spawning
  function spawnCloud() {
    var zone = document.getElementById("cloudZone");
    if (!zone) return;
    var cloud = document.createElement("div");
    cloud.className = "drift-cloud";
    cloud.textContent = "\u2601\ufe0f";
    var tapped = false;
    function tapCloud(e) {
      if (tapped) return;
      tapped = true;
      e.preventDefault();
      e.stopPropagation();
      var r = cloud.getBoundingClientRect();
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      // Rain splash effect
      for (var i = 0; i < 5; i++) {
        var drop = document.createElement("div");
        drop.className = "cloud-splash";
        drop.textContent = "\ud83d\udca7";
        drop.style.cssText = "left:" + (cx - 15 + Math.random() * 30) + "px;top:" + (cy + 10) + "px;animation-delay:" + (i * 0.08) + "s;";
        document.body.appendChild(drop);
        setTimeout(function(d) { d.remove(); }, 800, drop);
      }
      cloud.style.opacity = "0";
      cloud.style.transform = "scale(1.5)";
      setTimeout(function() { cloud.remove(); }, 300);
      playSound("cloud");
      addWater(CLOUD_AMOUNT, "+" + CLOUD_AMOUNT + " water from cloud! \u2601\ufe0f");
    }
    cloud.addEventListener("click", tapCloud);
    cloud.addEventListener("touchstart", tapCloud, { passive: false });
    zone.appendChild(cloud);
    // Remove after animation ends
    setTimeout(function() { if (cloud.parentNode) cloud.remove(); }, 8500);
  }

  // Tick — called every 1s from gameTick or standalone
  var _waterTickInterval = setInterval(function() {
    var now = Date.now();

    // Passive trickle (2x speed during rain)
    var effectiveTrickle = G.weather === "rainy" ? TRICKLE_INTERVAL / 2 : TRICKLE_INTERVAL;
    var trickleElapsed = now - trickleTimer;
    if (trickleElapsed >= effectiveTrickle) {
      trickleTimer = now;
      if (G.water < G.maxWater) {
        G.water++;
        renderDrops();
        saveG();
      }
    }
    var trickleRemain = Math.max(0, Math.ceil((effectiveTrickle - (now - trickleTimer)) / 1000));
    if (trickleLabel) {
      trickleLabel.textContent = G.water >= G.maxWater ? "Full!" : "+1 in " + trickleRemain + "s";
    }

    // Whirlpool cooldown UI
    var cdElapsed = now - whirlLastUsed;
    var cdPct = Math.min(100, (cdElapsed / WHIRL_COOLDOWN) * 100);
    if (whirlCdFill) whirlCdFill.style.width = cdPct.toFixed(1) + "%";
    var ready = cdPct >= 100;
    whirlBtn.disabled = !ready;
    if (whirlLabel) whirlLabel.textContent = ready ? "Ready!" : Math.ceil((WHIRL_COOLDOWN - cdElapsed) / 1000) + "s";

    // Cloud spawn
    if (now >= nextCloudAt) {
      nextCloudAt = now + CLOUD_INTERVAL_MIN + Math.random() * (CLOUD_INTERVAL_MAX - CLOUD_INTERVAL_MIN);
      spawnCloud();
    }
  }, 1000);
})();

// ── Wire top-bar buttons via touchstart (most reliable on iOS) ─────────────
// touchstart+preventDefault fires IMMEDIATELY, kills the 300ms delay,
// kills ghost clicks, AND prevents scroll-detection interference.
// onclick stays on the element as the PC/desktop fallback.
// ══════════════════════════════════════════════════════════
// NPC FLOWER SHOP SYSTEM
// ══════════════════════════════════════════════════════════
var NPC_FRIENDS = [
  { name: "Yurie",     avatar: "\ud83d\udc69" },
  { name: "Ana",       avatar: "\ud83d\udc69" },
  { name: "Kinano",    avatar: "\ud83d\udc69" },
  { name: "Tutu",      avatar: "\ud83d\udc69" },
  { name: "Vitor",     avatar: "\ud83d\udc68\ud83c\udfff" },
  { name: "Ian",       avatar: "\ud83d\udc68" },
  { name: "Guilherme", avatar: "\ud83d\udc71" },
  { name: "Klebio",    avatar: "\ud83d\udc71" },
  { name: "Brasil",    avatar: "\ud83d\udc71" },
];
function getNpcMax() {
  if (G.plots.length >= 9) return 5;
  if (G.plots.length >= 6) return 4;
  return 3;
}
const NPC_SPAWN_MIN = 35000; // 35s minimum between spawns
const NPC_SPAWN_MAX = 90000; // 90s max
const NPC_PATIENCE_MIN = 120000; // 2 min
const NPC_PATIENCE_MAX = 300000; // 5 min

function createNPC() {
  if (G.npcs.length >= getNpcMax()) return;
  var requestKey = null;
  var requestRarity = null;
  var isMystery = false;
  var isWildcard = false;
  var isVip = Math.random() < 0.08;

  // Smart customer system: no spoilers
  // 70% — ask for a discovered flower from journal
  // 20% — mystery: ask for an undiscovered flower by rarity silhouette
  // 10% — wildcard: "any [rarity] flower!"
  var roll = Math.random();
  var invKeys = G.inventory.map(function(item) { return item.key; });
  var uniqueInvKeys = invKeys.filter(function(k, i) { return invKeys.indexOf(k) === i; });

  if (roll < 0.70) {
    // Ask for a discovered flower (prefer from inventory if available)
    if (uniqueInvKeys.length > 0 && Math.random() < 0.7) {
      requestKey = uniqueInvKeys[Math.floor(Math.random() * uniqueInvKeys.length)];
    } else {
      // From discovered flowers only
      var discovered = G.discovered.filter(function(k) { return FLOWERS[k] && FLOWERS[k].rarity !== "hybrid"; });
      if (discovered.length > 0) {
        requestKey = discovered[Math.floor(Math.random() * discovered.length)];
      } else {
        // Fallback for very early game: pick from packet pool flowers
        var fallback = Object.keys(FLOWERS).filter(function(k) { return FLOWERS[k].rarity === "common" && FLOWERS[k].w > 0; });
        requestKey = fallback[Math.floor(Math.random() * fallback.length)];
      }
    }
  } else if (roll < 0.90) {
    // Mystery customer — wants an undiscovered flower, show silhouette
    var undiscovered = Object.keys(FLOWERS).filter(function(k) {
      return FLOWERS[k].w > 0 && FLOWERS[k].rarity !== "hybrid" && !G.discovered.includes(k);
    });
    if (undiscovered.length > 0) {
      requestKey = undiscovered[Math.floor(Math.random() * undiscovered.length)];
      isMystery = true;
    } else {
      // All discovered — fall back to discovered
      var disc = G.discovered.filter(function(k) { return FLOWERS[k] && FLOWERS[k].rarity !== "hybrid"; });
      requestKey = disc.length > 0 ? disc[Math.floor(Math.random() * disc.length)] : "pinkTulip";
    }
  } else {
    // Wildcard customer — "any [rarity] flower!"
    isWildcard = true;
    var rarities = ["common", "uncommon"];
    if (G.discovered.some(function(k) { return FLOWERS[k] && FLOWERS[k].rarity === "rare"; })) rarities.push("rare");
    if (G.discovered.some(function(k) { return FLOWERS[k] && FLOWERS[k].rarity === "legendary"; })) rarities.push("legendary");
    requestRarity = rarities[Math.floor(Math.random() * rarities.length)];
    // Pick a placeholder key for reward calculation
    var pool = Object.keys(FLOWERS).filter(function(k) { return FLOWERS[k].rarity === requestRarity && FLOWERS[k].w > 0; });
    requestKey = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : "pinkTulip";
  }

  var f = FLOWERS[requestKey];
  if (!f) { requestKey = "pinkTulip"; f = FLOWERS[requestKey]; }
  var rarityMult = { common: 2.5, uncommon: 3, rare: 4, legendary: 5, unique: 6 };
  var reward = Math.round(f.sell * (rarityMult[f.rarity] || 2.5) * (0.9 + Math.random() * 0.4));
  if (isVip) reward = Math.round(f.sell * 8 * (0.9 + Math.random() * 0.3));
  if (isWildcard) reward = Math.round(reward * 0.8); // slightly less for flexibility

  var _npcFriend = NPC_FRIENDS[Math.floor(Math.random() * NPC_FRIENDS.length)];
  var dialogue;
  if (isWildcard) {
    var rLabel = RARITY_LABEL[requestRarity] || requestRarity;
    dialogue = isVip
      ? "I'll pay top coin for ANY " + rLabel + " flower!"
      : "I'd love any " + rLabel + " flower you have!";
  } else if (isMystery) {
    dialogue = isVip
      ? "I'm looking for something... mysterious. Surprise me!"
      : "I heard you might have a rare flower I've never seen\u2026";
  } else {
    dialogue = getNPCDialogue(f.name, isVip);
  }

  var npc = {
    id: G.npcIdCounter++,
    name: _npcFriend.name,
    avatar: _npcFriend.avatar,
    requestKey: requestKey,
    requestRarity: requestRarity,
    reward: reward,
    vip: isVip,
    mystery: isMystery,
    wildcard: isWildcard,
    dialogue: dialogue,
    spawnedAt: Date.now(),
    patience: NPC_PATIENCE_MIN + Math.random() * (NPC_PATIENCE_MAX - NPC_PATIENCE_MIN),
  };
  if (isVip) { playSound("vip"); haptic(80); }
  G.npcs.push(npc);
  saveG();
  renderNPCs();
  // Contextual tips for customer types
  showContextTip("firstCustomer");
  if (isVip) showContextTip("firstVip");
  if (isMystery) showContextTip("firstMystery");
  if (isWildcard) showContextTip("firstWildcard");
}

function renderNPCs() {
  var section = document.getElementById("npcSection");
  if (!section) return;
  section.textContent = "";
  if (!G.npcs.length) {
    var empty = document.createElement("div");
    empty.className = "npc-empty";
    empty.textContent = "No customers yet\u2026 they visit every 30\u201390 seconds!";
    section.appendChild(empty);
    return;
  }
  G.npcs.forEach(function(npc) {
    var f = FLOWERS[npc.requestKey];
    if (!f) return;
    var card = document.createElement("div");
    card.className = "npc-card" + (npc.vip ? " vip" : "");
    card.onclick = function() { openNPCSellModal(npc.id); };

    var elapsed = Date.now() - npc.spawnedAt;
    var pct = Math.max(0, 100 - (elapsed / npc.patience) * 100);
    var urgent = pct < 25;

    var avatar = document.createElement("div");
    avatar.className = "npc-avatar";
    avatar.textContent = npc.avatar;
    card.appendChild(avatar);

    var info = document.createElement("div");
    info.className = "npc-info";
    var name = document.createElement("div");
    name.className = "npc-name";
    name.textContent = npc.name;
    if (npc.vip) {
      var badge = document.createElement("span");
      badge.className = "npc-vip-badge";
      badge.textContent = "VIP";
      name.appendChild(badge);
    }
    info.appendChild(name);
    var req = document.createElement("div");
    req.className = "npc-request";
    req.textContent = "\u201c" + (npc.dialogue || ("I'd love a " + f.name + "!")) + "\u201d";
    info.appendChild(req);
    var timer = document.createElement("div");
    timer.className = "npc-timer";
    var fill = document.createElement("div");
    fill.className = "npc-timer-fill" + (urgent ? " urgent" : "");
    fill.style.width = pct.toFixed(1) + "%";
    timer.appendChild(fill);
    info.appendChild(timer);
    card.appendChild(info);

    // Show the flower they want (or mystery/wildcard)
    var flowerPreview = document.createElement("div");
    flowerPreview.style.cssText = "width:36px;height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:center;";
    if (npc.mystery) {
      // Silhouette — dark shape with question mark
      flowerPreview.style.cssText += "font-size:1.5em;color:var(--text-light,#b5aea5);opacity:0.6;";
      flowerPreview.textContent = "?";
    } else if (npc.wildcard) {
      // Rarity icon
      var rarityIcons = { common: "\ud83c\udf3c", uncommon: "\ud83c\udf39", rare: "\ud83d\udc8e", legendary: "\u2728" };
      flowerPreview.style.cssText += "font-size:1.3em;";
      flowerPreview.textContent = rarityIcons[npc.requestRarity] || "\ud83c\udf3a";
    } else {
      var svgHtml = flowerSVG(npc.requestKey, MAX_STAGE);
      var temp = document.createElement("div");
      temp.style.cssText = "width:36px;height:44px;";
      temp.insertAdjacentHTML("beforeend", svgHtml);
      flowerPreview.appendChild(temp);
    }
    card.appendChild(flowerPreview);

    var rew = document.createElement("div");
    rew.className = "npc-reward";
    var ic = document.createElement("span");
    ic.className = "ic";
    ic.textContent = "C";
    rew.appendChild(ic);
    rew.appendChild(document.createTextNode(npc.reward));
    card.appendChild(rew);

    section.appendChild(card);
  });
}

function openNPCSellModal(npcId) {
  var npc = G.npcs.find(function(n) { return n.id === npcId; });
  if (!npc) return;
  var f = FLOWERS[npc.requestKey];
  if (!f) return;
  var titleEl = document.getElementById("npcSellTitle");
  if (npc.wildcard) {
    titleEl.textContent = npc.name + " wants: Any " + (RARITY_LABEL[npc.requestRarity] || npc.requestRarity) + " flower";
  } else if (npc.mystery) {
    titleEl.textContent = npc.name + " wants: " + f.name;
  } else {
    titleEl.textContent = npc.name + " wants: " + f.name;
  }
  var list = document.getElementById("npcSellList");
  list.textContent = "";
  // Find matching flowers in inventory
  var matches;
  if (npc.wildcard) {
    // Accept any flower of that rarity
    matches = G.inventory.filter(function(item) { return FLOWERS[item.key] && FLOWERS[item.key].rarity === npc.requestRarity; });
  } else {
    matches = G.inventory.filter(function(item) { return item.key === npc.requestKey; });
  }
  if (!matches.length) {
    var noMatch = document.createElement("div");
    noMatch.className = "tray-empty";
    if (npc.wildcard) {
      noMatch.textContent = "No " + (RARITY_LABEL[npc.requestRarity] || "") + " flowers in your Garden House. Grow and store some!";
    } else {
      noMatch.textContent = "No " + f.name + " in your Garden House. Grow one, let it bloom, tap it and choose Store!";
    }
    list.appendChild(noMatch);
  } else {
    matches.forEach(function(item) {
      var itemF = FLOWERS[item.key] || f;
      var row = document.createElement("button");
      row.className = "plant-row " + itemF.rarity;
      var svg = document.createElement("div");
      svg.className = "pr-svg";
      var svgHtml = flowerSVG(item.key, MAX_STAGE);
      var svgTemp = document.createElement("div");
      svgTemp.insertAdjacentHTML("beforeend", svgHtml);
      svg.appendChild(svgTemp.firstChild || svgTemp);
      row.appendChild(svg);
      var info = document.createElement("div");
      info.className = "pr-info";
      var nm = document.createElement("div");
      nm.className = "pr-name";
      nm.textContent = itemF.name;
      info.appendChild(nm);
      var sub = document.createElement("div");
      sub.className = "pr-sub";
      sub.textContent = "Sell for " + npc.reward + " coins";
      info.appendChild(sub);
      row.appendChild(info);
      var badge = document.createElement("span");
      badge.className = "pr-badge " + itemF.rarity;
      badge.textContent = RARITY_LABEL[itemF.rarity];
      row.appendChild(badge);
      row.onclick = function() { fulfillNPC(npcId, item.uid); };
      list.appendChild(row);
    });
  }
  openModal("npcSellOverlay");
}

function fulfillNPC(npcId, uid) {
  var npcIdx = G.npcs.findIndex(function(n) { return n.id === npcId; });
  if (npcIdx === -1) return;
  var npc = G.npcs[npcIdx];
  var invIdx = G.inventory.findIndex(function(x) { return x.uid === uid; });
  if (invIdx === -1) return;
  var f = FLOWERS[G.inventory[invIdx].key];
  G.inventory.splice(invIdx, 1);
  G.coins += npc.reward;
  G.totalCoins += npc.reward;
  G.totalSold++;
  G.npcSales++;
  G.npcStreak++;
  if (G.npcStreak > G.npcBestStreak) G.npcBestStreak = G.npcStreak;
  G.npcs.splice(npcIdx, 1);
  updateHUD();
  saveG();
  closeModal("npcSellOverlay");
  playSound("sale");
  haptic(50);
  toast(npc.name + " loved the " + f.name + "! +" + npc.reward + " coins \ud83d\udcb0", 2500);
  renderNPCs();
  spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.3, "\u2728");
  checkAchievements();
}

function tickNPCs() {
  var now = Date.now();
  var changed = false;
  // Remove expired NPCs
  G.npcs = G.npcs.filter(function(npc) {
    if (now - npc.spawnedAt > npc.patience) {
      G.npcStreak = 0; // streak broken
      changed = true;
      return false;
    }
    return true;
  });
  // Spawn new NPC if timer elapsed
  if (G.npcs.length < getNpcMax() && now - G.npcTimer > NPC_SPAWN_MIN + Math.random() * (NPC_SPAWN_MAX - NPC_SPAWN_MIN)) {
    G.npcTimer = now;
    createNPC();
    changed = true;
  }
  if (changed) {
    saveG();
    renderNPCs();
  } else {
    renderNPCs(); // update timer bars
  }
}

// ══════════════════════════════════════════════════════════
// WEATHER SYSTEM
// ══════════════════════════════════════════════════════════
function tickWeather() {
  var now = Date.now();
  if (!G.weatherTimer) G.weatherTimer = now + WEATHER_INTERVAL_MIN + Math.random() * (WEATHER_INTERVAL_MAX - WEATHER_INTERVAL_MIN);
  if (now >= G.weatherTimer) {
    var oldWeather = G.weather;
    // Weighted selection: sunny 40%, rainy 30%, drought 15%, snowy 15%
    var weights = { sunny: 40, rainy: 30, drought: 15, snowy: 15 };
    weights[oldWeather] = 0; // never repeat same weather
    var pool = [], total = 0;
    WEATHER_TYPES.forEach(function(w) { total += weights[w]; });
    var r = Math.random() * total, acc = 0;
    G.weather = "sunny"; // fallback
    for (var wi = 0; wi < WEATHER_TYPES.length; wi++) {
      acc += weights[WEATHER_TYPES[wi]];
      if (r < acc) { G.weather = WEATHER_TYPES[wi]; break; }
    }
    G.weatherTimer = now + WEATHER_INTERVAL_MIN + Math.random() * (WEATHER_INTERVAL_MAX - WEATHER_INTERVAL_MIN);
    saveG();
    if (G.weather === "rainy" && G.water < G.maxWater) {
      G.water = Math.min(G.maxWater, G.water + 1);
      renderDrops();
      saveG();
    }
    playSound("weather");
    if (G.weather === "snowy") {
      toast("\u2744\ufe0f Snow! Your growing flowers may get frosty!", 3000);
    } else {
      toast("Weather changed: " + WEATHER_LABELS[G.weather], 2000);
    }
    setTimeout(function() { showContextTip("firstWeather"); }, 2500);
    checkAchievements();
  }
  renderWeather();
}

function renderWeather() {
  var bar = document.getElementById("weatherBar");
  if (!bar) return;
  bar.textContent = WEATHER_LABELS[G.weather] || WEATHER_LABELS.sunny;
  bar.className = "weather-bar " + (WEATHER_CLASSES[G.weather] || WEATHER_CLASSES.sunny);
  // Weather-responsive sway intensity
  var swayMap = { sunny: 1.5, rainy: 2.5, drought: 0.5, snowy: 1.8 };
  document.documentElement.style.setProperty("--sway-intensity", swayMap[G.weather] || 1.5);
  // Apply weather class to garden grid for pot-level effects
  var grid = document.getElementById("gardenGrid");
  if (grid) {
    WEATHER_TYPES.forEach(function(wt) { grid.classList.remove("weather-" + wt); });
    grid.classList.add("weather-" + (G.weather || "sunny"));
  }
  // Visual weather effects
  renderWeatherFx();
  // Update ambient music for weather
  updateMusicForWeather();
  // Rain ambient is SFX, not music
  updateRainSfx();
}

// ── Visual Weather FX ────────────────────────────────────
var _currentWeatherFx = "";
function renderWeatherFx() {
  var fx = document.getElementById("weatherFx");
  if (!fx) return;
  var w = G.weather;
  if (w === _currentWeatherFx) return; // already showing
  // Fade out old
  fx.classList.add("weather-fx-fade");
  fx.style.opacity = "0";
  setTimeout(function() {
    while (fx.firstChild) fx.removeChild(fx.firstChild);
    // Remove sun flare if weather changed from sunny
    var oldFlare = document.querySelector(".sun-lens-flare");
    if (oldFlare && w !== "sunny") oldFlare.remove();
    _currentWeatherFx = w;
    if (w === "rainy") {
      for (var i = 0; i < 35; i++) {
        var drop = document.createElement("div");
        drop.className = "rain-drop";
        var left = Math.random() * 100;
        var h = 15 + Math.random() * 15;
        var dur = 0.8 + Math.random() * 0.6;
        var delay = Math.random() * 2;
        drop.style.cssText = "left:" + left + "%;height:" + h + "px;animation-duration:" + dur + "s;animation-delay:-" + delay + "s;";
        fx.appendChild(drop);
      }
    } else if (w === "sunny") {
      // Diagonal sun rays + lens flare
      var rayAngles = [-30, -15, 0, 12, 25, 38, 50];
      rayAngles.forEach(function(angle, idx) {
        var ray = document.createElement("div");
        ray.className = "sun-ray";
        var left = 5 + idx * 13 + (Math.random() * 6);
        var width = 3 + Math.random() * 3;
        var delay = idx * 0.5 + Math.random() * 0.8;
        ray.style.cssText = "left:" + left + "%;width:" + width + "px;transform:rotate(" + angle + "deg);animation-delay:" + delay + "s;";
        fx.appendChild(ray);
      });
      // Lens flare on top of everything
      var oldFlare = document.querySelector(".sun-lens-flare");
      if (!oldFlare) {
        var flare = document.createElement("div");
        flare.className = "sun-lens-flare";
        document.body.appendChild(flare);
      }
    } else if (w === "snowy") {
      for (var si = 0; si < 20; si++) {
        var flake = document.createElement("div");
        flake.className = "snowflake";
        var sl = Math.random() * 100;
        var ssz = 4 + Math.random() * 5;
        var sdur = 4 + Math.random() * 4;
        var sdelay = Math.random() * 6;
        var drift = (Math.random() - 0.5) * 40;
        flake.style.cssText = "left:" + sl + "%;width:" + ssz + "px;height:" + ssz + "px;animation-duration:" + sdur + "s;animation-delay:-" + sdelay + "s;--snow-drift:" + drift + "px;";
        fx.appendChild(flake);
      }
    }
    fx.style.opacity = "1";
  }, 300);
}

// Rain auto-waters: called in game tick
function rainAutoWater() {
  if (G.weather !== "rainy") return;
  if (G.water < G.maxWater) {
    G.water++;
    renderDrops();
    saveG();
  }
}

// How many waters needed per stage for current weather
function watersNeeded() {
  if (G.weather === "drought") return Math.ceil(STAGE_WATERS * 1.5);
  if (G.weather === "sunny") return Math.max(2, STAGE_WATERS - 1); // sun speeds growth
  return STAGE_WATERS;
}

// ══════════════════════════════════════════════════════════
// HYBRIDIZATION
// ══════════════════════════════════════════════════════════
var HYBRID_COST_BASE = { common: 30, uncommon: 50, rare: 70, legendary: 90, unique: 120 };

function getAdjacentBloomed(plotIdx) {
  var col = plotIdx % 3, row = Math.floor(plotIdx / 3);
  var adj = [];
  if (col > 0) adj.push(plotIdx - 1);
  if (col < 2) adj.push(plotIdx + 1);
  if (row > 0) adj.push(plotIdx - 3);
  if (plotIdx + 3 < G.plots.length) adj.push(plotIdx + 3);
  return adj.filter(function(i) { return G.plots[i] && G.plots[i].state === "bloomed"; });
}

function canHybridize(plotIdx) {
  if (!G.plots[plotIdx] || G.plots[plotIdx].state !== "bloomed") return false;
  return getAdjacentBloomed(plotIdx).length > 0;
}

function openHybridModal(plotIdx) {
  var content = document.getElementById("hybridContent");
  content.textContent = "";
  var p = G.plots[plotIdx];
  var f1 = FLOWERS[p.key];
  var adj = getAdjacentBloomed(plotIdx);
  var desc = document.createElement("p");
  desc.style.cssText = "font-size:.78em;color:var(--text-secondary);text-align:center;margin-bottom:12px;";
  var hybCost = Math.max(HYBRID_COST_BASE[f1.rarity] || 30, HYBRID_COST_BASE[FLOWERS[G.plots[adj[0]].key].rarity] || 30);
  desc.textContent = "Fuse " + f1.name + " with a neighbor. Costs " + hybCost + " coins. Both flowers are consumed.";
  content.appendChild(desc);
  adj.forEach(function(ai) {
    var f2 = FLOWERS[G.plots[ai].key];
    var row = document.createElement("button");
    row.className = "plant-row " + f2.rarity;
    var svg = document.createElement("div");
    svg.className = "pr-svg";
    svg.innerHTML = flowerSVG(G.plots[ai].key, MAX_STAGE);
    row.appendChild(svg);
    var info = document.createElement("div");
    info.className = "pr-info";
    var nm = document.createElement("div");
    nm.className = "pr-name";
    nm.textContent = f1.name + " \u00d7 " + f2.name;
    info.appendChild(nm);
    var sub = document.createElement("div");
    sub.className = "pr-sub";
    var hasRecipe = !!findBreedRecipe(f1.kind, f2.kind);
    sub.textContent = hasRecipe
      ? "\u2728 Recipe match! \u00b7 5% mutation chance \u00b7 10% fail"
      : "New fusion \u00b7 5% mutation chance \u00b7 10% fail";
    info.appendChild(sub);
    row.appendChild(info);
    row.onclick = function() { doHybridize(plotIdx, ai); };
    content.appendChild(row);
  });
  // Fusion Guide button
  var guideWrap = document.createElement("div");
  guideWrap.className = "breed-btn-wrap";
  var guideBtn = document.createElement("button");
  guideBtn.className = "tbtn tbtn-journal";
  guideBtn.style.cssText = "margin-top:12px;font-size:.78em;padding:8px 16px;";
  guideBtn.textContent = "\ud83e\uddec Fusion Guide";
  guideBtn.onclick = function() { closeModal("hybridOverlay"); setTimeout(openBreedGuide, 200); };
  guideWrap.appendChild(guideBtn);
  content.appendChild(guideWrap);
  openModal("hybridOverlay");
}

// ── Fusion animation overlay ──────────────────────────────────────────────
function showFusionAnimation(key1, key2, resultInfo, onDone) {
  // resultInfo: { key, name, badge, badgeClass, sound }
  var overlay = document.createElement("div");
  overlay.className = "fusion-overlay";

  // Left flower
  var left = document.createElement("div");
  left.className = "fusion-flower left";
  left.innerHTML = flowerSVG(key1, MAX_STAGE);
  overlay.appendChild(left);

  // Right flower
  var right = document.createElement("div");
  right.className = "fusion-flower right";
  right.innerHTML = flowerSVG(key2, MAX_STAGE);
  overlay.appendChild(right);

  // Burst effect
  var burst = document.createElement("div");
  burst.className = "fusion-burst";
  overlay.appendChild(burst);

  // Result (shown after merge animation)
  var result = document.createElement("div");
  result.className = "fusion-result";
  if (resultInfo.key && FLOWERS[resultInfo.key]) {
    result.innerHTML =
      '<div class="fusion-result-svg">' + flowerSVG(resultInfo.key, MAX_STAGE) + '</div>' +
      '<div class="fusion-result-name">' + resultInfo.name + '</div>' +
      '<div class="fusion-result-badge ' + (resultInfo.badgeClass || "") + '">' + resultInfo.badge + '</div>';
  } else {
    result.innerHTML =
      '<div class="fusion-result-name">' + resultInfo.name + '</div>' +
      '<div class="fusion-result-badge ' + (resultInfo.badgeClass || "") + '">' + resultInfo.badge + '</div>';
  }
  overlay.appendChild(result);

  // Sparkles
  var sparkles = ["\u2728", "\u2b50", "\u2728", "\ud83c\udf1f"];
  for (var i = 0; i < sparkles.length; i++) {
    var sp = document.createElement("div");
    sp.className = "fusion-sparkle";
    sp.textContent = sparkles[i];
    var angle = (i / sparkles.length) * Math.PI * 2;
    sp.style.cssText = "transform-origin:center;left:calc(50% + " + Math.round(Math.cos(angle) * 50) + "px);top:calc(50% + " + Math.round(Math.sin(angle) * 50) + "px);animation-delay:" + (0.7 + i * 0.1) + "s;";
    overlay.appendChild(sp);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(function() { overlay.classList.add("on"); });

  // Play sound after merge
  setTimeout(function() {
    if (resultInfo.sound) playSound(resultInfo.sound);
    haptic(60);
  }, 700);

  // Dismiss on tap after result shown
  setTimeout(function() {
    overlay.onclick = function() {
      overlay.classList.remove("on");
      setTimeout(function() { overlay.remove(); }, 300);
      if (onDone) onDone();
    };
  }, 1200);

  // Auto-dismiss after 3.5s
  setTimeout(function() {
    if (overlay.parentNode) {
      overlay.classList.remove("on");
      setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 300);
      if (onDone) onDone();
      onDone = null; // prevent double call
    }
  }, 3500);
}

function doHybridize(idx1, idx2) {
  var key1 = G.plots[idx1].key, key2 = G.plots[idx2].key;
  var f1 = FLOWERS[key1], f2 = FLOWERS[key2];
  var cost = Math.max(HYBRID_COST_BASE[f1.rarity] || 30, HYBRID_COST_BASE[f2.rarity] || 30);
  if (G.coins < cost) {
    closeModal("hybridOverlay");
    toast("Not enough coins! Need " + cost + " to fuse \ud83d\udcb0", 2500);
    playSound("click");
    return;
  }
  G.coins -= cost;
  // Clear both plots
  clearPlot(idx1);
  clearPlot(idx2);
  closeModal("hybridOverlay");

  var kind1 = f1.kind, kind2 = f2.kind;

  // Check breed recipes first
  var recipe = findBreedRecipe(kind1, kind2);
  // Also check for pre-defined "golden" hybrid match
  var goldenMatch = Object.keys(FLOWERS).filter(function(k) {
    var h = FLOWERS[k];
    if (!h.parents) return false;
    return (h.parents.includes(kind1) && h.parents.includes(kind2));
  });

  var roll = Math.random();
  // Mutation chance: base 12%, +15% if this exact pair was already discovered, +5% per rare parent
  var mutChance = 0.12;
  var dynTestKey = generateHybridKey(key1, key2);
  if (G.discovered.includes(dynTestKey)) mutChance += 0.15; // repeat pair bonus
  var rarityMutBonus = { rare: 0.05, legendary: 0.08, unique: 0.10 };
  mutChance += (rarityMutBonus[f1.rarity] || 0) + (rarityMutBonus[f2.rarity] || 0);
  mutChance = Math.min(mutChance, 0.50); // cap at 50%
  var isMutation = Math.random() < mutChance;

  // Rarity affects recipe chance: rarer parents = slightly lower recipe chance (more unique outcomes)
  var recipeChance = 0.40;
  if (f1.rarity === "rare" || f2.rarity === "rare") recipeChance = 0.30;
  if (f1.rarity === "legendary" || f2.rarity === "legendary") recipeChance = 0.25;

  // Compute result first, then show animation
  var resultInfo = { key: null, name: "", badge: "", badgeClass: "", sound: "hybrid" };

  if (recipe && roll < recipeChance) {
    var totalW = 0;
    recipe.forEach(function(r) { totalW += r.w; });
    var rr = Math.random() * totalW, racc = 0;
    var resultKey = recipe[0].key;
    for (var ri = 0; ri < recipe.length; ri++) {
      racc += recipe[ri].w;
      if (rr < racc) { resultKey = recipe[ri].key; break; }
    }
    var recipeKey = [kind1, kind2].sort().join("+");
    if (!G.breedDiscovered.includes(recipeKey)) G.breedDiscovered.push(recipeKey);

    if (isMutation && FLOWERS[resultKey]) {
      var baseF = FLOWERS[resultKey];
      var hueShift = 20 + Math.random() * 40;
      if (Math.random() < 0.5) hueShift = -hueShift;
      var mutPetal = shiftHue(baseF.petal, hueShift);
      // Use exotic mutation color name, falling back to prefix + base name
      var mutColorName = colorNameForMutation(mutPetal);
      var speciesName = KIND_DISPLAY[baseF.kind] || baseF.kind.charAt(0).toUpperCase() + baseF.kind.slice(1);
      var mutName = mutColorName + " " + speciesName;
      var mutKey = "mut_" + resultKey + "_" + Date.now();
      FLOWERS[mutKey] = {
        name: mutName, kind: baseF.kind, appearance: baseF.appearance,
        rarity: "hybrid", w: 0, petal: mutPetal, stem: baseF.stem,
        sell: Math.round(baseF.sell * 1.2), dynamic: true, mutation: true,
        parent1: key1, parent2: key2,
      };
      G.seeds.push({ id: G.seedId++, key: mutKey });
      G.hybridCount++;
      G.mutations.push(mutKey);
      if (!G.discovered.includes(mutKey)) G.discovered.push(mutKey);
      resultInfo = { key: mutKey, name: mutName, badge: "\u2728 Mutation!", badgeClass: "mutation", sound: "mutation" };
    } else {
      G.seeds.push({ id: G.seedId++, key: resultKey });
      G.hybridCount++;
      if (!G.discovered.includes(resultKey)) G.discovered.push(resultKey);
      resultInfo = { key: resultKey, name: FLOWERS[resultKey].name, badge: "\u2728 Recipe Hybrid!", badgeClass: "", sound: "reveal_legendary" };
    }
  } else if (goldenMatch.length > 0 && roll < recipeChance + 0.15) {
    var hk = goldenMatch[Math.floor(Math.random() * goldenMatch.length)];
    G.seeds.push({ id: G.seedId++, key: hk });
    G.hybridCount++;
    if (!G.discovered.includes(hk)) G.discovered.push(hk);
    resultInfo = { key: hk, name: FLOWERS[hk].name, badge: "\u2728 Rare Hybrid!", badgeClass: "", sound: "reveal_legendary" };
  } else if (roll < 0.90) {
    var dynKey = getOrCreateDynamicHybrid(key1, key2);

    if (isMutation && FLOWERS[dynKey]) {
      var dBase = FLOWERS[dynKey];
      var dShift = 20 + Math.random() * 40;
      if (Math.random() < 0.5) dShift = -dShift;
      var dPetal = shiftHue(dBase.petal, dShift);
      var dMutColor = colorNameForMutation(dPetal);
      var dSpecies = KIND_DISPLAY[dBase.kind] || dBase.kind.charAt(0).toUpperCase() + dBase.kind.slice(1);
      var dMutKey = "mut_" + dynKey + "_" + Date.now();
      FLOWERS[dMutKey] = {
        name: dMutColor + " " + dSpecies, kind: dBase.kind, appearance: dBase.appearance,
        rarity: "hybrid", w: 0, petal: dPetal, stem: dBase.stem,
        sell: Math.round(dBase.sell * 1.2), dynamic: true, mutation: true,
        parent1: key1, parent2: key2,
      };
      G.seeds.push({ id: G.seedId++, key: dMutKey });
      G.hybridCount++;
      G.mutations.push(dMutKey);
      if (!G.discovered.includes(dMutKey)) G.discovered.push(dMutKey);
      resultInfo = { key: dMutKey, name: FLOWERS[dMutKey].name, badge: "\u2728 Mutation!", badgeClass: "mutation", sound: "mutation" };
    } else {
      G.seeds.push({ id: G.seedId++, key: dynKey });
      G.hybridCount++;
      if (!G.discovered.includes(dynKey)) G.discovered.push(dynKey);
      resultInfo = { key: dynKey, name: FLOWERS[dynKey].name, badge: "\ud83e\uddec New Species!", badgeClass: "", sound: "reveal_hybrid" };
    }
  } else if (roll < 0.96) {
    var parentKey = Math.random() < 0.5 ? key1 : key2;
    G.seeds.push({ id: G.seedId++, key: parentKey });
    G.hybridCount++;
    resultInfo = { key: parentKey, name: FLOWERS[parentKey].name, badge: "\ud83e\uddec Parent Seed", badgeClass: "", sound: "hybrid" };
  } else {
    // Fail — refund coins
    G.coins += cost;
    resultInfo = { key: null, name: "Fusion Failed", badge: "Coins refunded \ud83d\ude1e", badgeClass: "fail", sound: "click" };
  }

  updateHUD();
  renderTray();
  renderGarden();
  saveG();

  // Show the fusion animation
  showFusionAnimation(key1, key2, resultInfo, function() {
    checkAchievements();
  });
}

// ══════════════════════════════════════════════════════════
// BREEDING GUIDE
// ══════════════════════════════════════════════════════════
function openBreedGuide() {
  var grid = document.getElementById("breedGrid");
  var prog = document.getElementById("breedProg");
  while (grid.firstChild) grid.removeChild(grid.firstChild);

  var recipeKeys = Object.keys(BREED_RECIPES);
  var discovered = G.breedDiscovered || [];
  var discCount = 0;

  recipeKeys.forEach(function(rk) {
    var kinds = rk.split("+");
    var isDiscovered = discovered.includes(rk);
    if (isDiscovered) discCount++;

    var card = document.createElement("div");
    card.className = "breed-card" + (isDiscovered ? " discovered" : "");

    // Parent display
    var parents = document.createElement("div");
    parents.className = "breed-parents";

    // Find a sample flower of each kind for SVG preview
    var sample1 = findSampleFlowerByKind(kinds[0]);
    var sample2 = findSampleFlowerByKind(kinds[1]);

    var svg1 = document.createElement("div");
    svg1.style.cssText = "width:32px;height:40px;flex-shrink:0;";
    if (sample1) {
      svg1.insertAdjacentHTML("beforeend", flowerSVG(sample1, MAX_STAGE));
    } else {
      svg1.textContent = "\ud83c\udf3a";
    }
    parents.appendChild(svg1);

    var plus = document.createElement("span");
    plus.className = "breed-plus";
    plus.textContent = "+";
    parents.appendChild(plus);

    var svg2 = document.createElement("div");
    svg2.style.cssText = "width:32px;height:40px;flex-shrink:0;";
    if (sample2) {
      svg2.insertAdjacentHTML("beforeend", flowerSVG(sample2, MAX_STAGE));
    } else {
      svg2.textContent = "\ud83c\udf3a";
    }
    parents.appendChild(svg2);
    card.appendChild(parents);

    // Arrow
    var arrow = document.createElement("span");
    arrow.className = "breed-arrow";
    arrow.textContent = "\u2192";
    card.appendChild(arrow);

    // Result
    var result = document.createElement("div");
    result.className = "breed-result";
    if (isDiscovered) {
      var outcomes = BREED_RECIPES[rk];
      outcomes.forEach(function(o) {
        var nm = document.createElement("div");
        nm.className = "breed-result-name";
        nm.textContent = FLOWERS[o.key] ? FLOWERS[o.key].name : o.key;
        result.appendChild(nm);
      });
    } else {
      var hint = document.createElement("div");
      hint.className = "breed-result-unknown";
      hint.textContent = "???";
      result.appendChild(hint);
      var hintText = document.createElement("div");
      hintText.className = "breed-result-hint";
      var kd = KIND_DISPLAY || {};
      hintText.textContent = "Try " + (kd[kinds[0]] || kinds[0]) + " \u00d7 " + (kd[kinds[1]] || kinds[1]);
      result.appendChild(hintText);
    }
    card.appendChild(result);
    grid.appendChild(card);
  });

  prog.textContent = discCount + " / " + recipeKeys.length + " recipes discovered";
  if (G.mutations && G.mutations.length > 0) {
    prog.textContent += " \u00b7 " + G.mutations.length + " mutation" + (G.mutations.length === 1 ? "" : "s");
  }
  openModal("breedOverlay");
}

function findSampleFlowerByKind(kind) {
  var keys = Object.keys(FLOWERS);
  for (var i = 0; i < keys.length; i++) {
    if (FLOWERS[keys[i]].kind === kind && FLOWERS[keys[i]].w > 0) return keys[i];
  }
  // fallback: any flower of that kind
  for (var j = 0; j < keys.length; j++) {
    if (FLOWERS[keys[j]].kind === kind) return keys[j];
  }
  return null;
}

// ══════════════════════════════════════════════════════════
// FLOWER APPRECIATION
// ══════════════════════════════════════════════════════════
function getAppreciatedValue(item) {
  var f = FLOWERS[item.key];
  if (!f) return 0;
  var base = f.sell;
  var storedAt = item.storedAt || Date.now();
  var hours = (Date.now() - storedAt) / 3600000;
  var mult = Math.min(2, 1 + hours * 0.1); // 10% per hour, cap 2x
  return Math.round(base * mult);
}

// ══════════════════════════════════════════════════════════
// ACHIEVEMENT SYSTEM — 40 achievements
// ══════════════════════════════════════════════════════════
var ACHIEVEMENTS = [
  // Growing (1-10)
  { id:"bloom1", name:"First Bloom", desc:"Bloom your first flower", icon:"\ud83c\udf3c", reward:10, check:function(){return G.totalBlooms>=1;} },
  { id:"bloom10", name:"Green Thumb", desc:"Bloom 10 flowers", icon:"\ud83c\udf3f", reward:25, check:function(){return G.totalBlooms>=10;} },
  { id:"bloom50", name:"Master Gardener", desc:"Bloom 50 flowers", icon:"\ud83c\udf3b", reward:50, check:function(){return G.totalBlooms>=50;} },
  { id:"bloom100", name:"Century Bloom", desc:"Bloom 100 flowers", icon:"\ud83c\udfc6", reward:100, check:function(){return G.totalBlooms>=100;} },
  { id:"fullgarden", name:"Full Garden", desc:"Fill every pot at once", icon:"\ud83c\udf3a", reward:30, check:function(){return G.plots.every(function(p){return p.state!=="empty";});} },
  { id:"speed", name:"Speed Bloom", desc:"Have 3+ bloomed at once", icon:"\u26a1", reward:20, check:function(){return G.plots.filter(function(p){return p.state==="bloomed";}).length>=3;} },
  { id:"patience", name:"Patient Gardener", desc:"Have 6+ pots growing", icon:"\ud83c\udf3e", reward:25, check:function(){return G.plots.filter(function(p){return p.state==="growing";}).length>=6;} },
  { id:"water100", name:"Water Wizard", desc:"Use 100 total waters", icon:"\ud83d\udca7", reward:20, check:function(){return G.totalWaters>=100;} },
  { id:"droughtbloom", name:"Drought Survivor", desc:"Bloom during drought", icon:"\ud83c\udf35", reward:30, check:function(){return G.weather==="drought"&&G.plots.some(function(p){return p.state==="bloomed";});} },
  { id:"rainbloom5", name:"Rain Dancer", desc:"Bloom 5+ flowers in rain", icon:"\ud83c\udf27\ufe0f", reward:25, check:function(){return false;} }, // tracked via flag
  // Collection (11-20)
  { id:"disc10", name:"Curious", desc:"Discover 10 unique flowers", icon:"\ud83d\udd0d", reward:15, check:function(){return G.discovered.length>=10;} },
  { id:"disc25", name:"Botanist", desc:"Discover 25 unique flowers", icon:"\ud83c\udf3f", reward:30, check:function(){return G.discovered.length>=25;} },
  { id:"disc50", name:"Encyclopedist", desc:"Discover 50 flowers", icon:"\ud83d\udcda", reward:50, check:function(){return G.discovered.length>=50;} },
  { id:"alllegendary", name:"Living Legend", desc:"Discover all legendary flowers", icon:"\ud83c\udf1f", reward:100, check:function(){var ls=Object.keys(FLOWERS).filter(function(k){return FLOWERS[k].rarity==="legendary";});return ls.every(function(k){return G.discovered.includes(k);});} },
  { id:"unique", name:"One of a Kind", desc:"Discover the unique flower", icon:"\ud83d\udc8e", reward:75, check:function(){return Object.keys(FLOWERS).filter(function(k){return FLOWERS[k].rarity==="unique";}).some(function(k){return G.discovered.includes(k);});} },
  { id:"rainbow", name:"Rainbow Garden", desc:"Own 5+ different species in inventory", icon:"\ud83c\udf08", reward:20, check:function(){var kinds=new Set(G.inventory.map(function(i){return FLOWERS[i.key].kind;}));return kinds.size>=5;} },
  { id:"specialist", name:"Species Specialist", desc:"Discover all colors of one species", icon:"\ud83d\udd2c", reward:30, check:function(){var byKind={};Object.entries(FLOWERS).forEach(function(e){var k=e[0],v=e[1];byKind[v.kind]=byKind[v.kind]||[];byKind[v.kind].push(k);});return Object.values(byKind).some(function(keys){return keys.length>=3&&keys.every(function(k){return G.discovered.includes(k);});});} },
  { id:"rare5", name:"Rare Hunter", desc:"Discover 5 rare flowers", icon:"\u2b50", reward:25, check:function(){return G.discovered.filter(function(k){return FLOWERS[k]&&FLOWERS[k].rarity==="rare";}).length>=5;} },
  { id:"allcommon", name:"Common Collector", desc:"Discover all common flowers", icon:"\ud83c\udfe1", reward:40, check:function(){var cs=Object.keys(FLOWERS).filter(function(k){return FLOWERS[k].rarity==="common";});return cs.every(function(k){return G.discovered.includes(k);});} },
  { id:"fulljournal", name:"Full Journal", desc:"Discover every flower (100%)", icon:"\ud83d\udcd6", reward:200, check:function(){return G.discovered.length>=Object.keys(FLOWERS).length;} },
  // Commerce (21-30)
  { id:"sell1", name:"First Sale", desc:"Sell a flower to a customer", icon:"\ud83d\udcb0", reward:10, check:function(){return G.npcSales>=1;} },
  { id:"sell25", name:"Merchant", desc:"Complete 25 customer sales", icon:"\ud83d\udcb5", reward:30, check:function(){return G.npcSales>=25;} },
  { id:"coins1000", name:"Tycoon", desc:"Earn 1,000 total coins", icon:"\ud83d\udcb0", reward:50, check:function(){return G.totalCoins>=1000;} },
  { id:"coins5000", name:"Mogul", desc:"Earn 5,000 total coins", icon:"\ud83d\udc51", reward:100, check:function(){return G.totalCoins>=5000;} },
  { id:"streak10", name:"Perfect Service", desc:"10 customer sales in a row", icon:"\ud83c\udf1f", reward:40, check:function(){return G.npcBestStreak>=10;} },
  { id:"quicksell", name:"Quick Serve", desc:"You're a fast seller!", icon:"\u23f1\ufe0f", reward:15, check:function(){return G.npcSales>=5;} },
  { id:"appreciate", name:"Big Tipper", desc:"Sell an appreciated flower", icon:"\ud83d\udcc8", reward:20, check:function(){return G.totalSold>=10;} },
  { id:"legsale", name:"Legendary Sale", desc:"Sell a legendary to a customer", icon:"\u2728", reward:50, check:function(){return false;} }, // tracked via flag
  { id:"bulk5", name:"Bulk Dealer", desc:"Sell 5 flowers total", icon:"\ud83d\udce6", reward:15, check:function(){return G.totalSold>=5;} },
  { id:"sell50", name:"Haggler", desc:"Sell 50 flowers total", icon:"\ud83e\udd1d", reward:40, check:function(){return G.totalSold>=50;} },
  // Garden (31-40)
  { id:"pot3", name:"Expansion I", desc:"Buy your 3rd pot", icon:"\ud83c\udf31", reward:15, check:function(){return G.plots.length>=3;} },
  { id:"pot6", name:"Expansion II", desc:"Buy your 6th pot", icon:"\ud83c\udf31", reward:30, check:function(){return G.plots.length>=6;} },
  { id:"pot12", name:"Expansion III", desc:"Unlock all 12 pots", icon:"\ud83c\udf3e", reward:75, check:function(){return G.plots.length>=12;} },
  { id:"decor1", name:"Decorator", desc:"Unlock a new pot style", icon:"\ud83c\udfa8", reward:20, check:function(){return G.potStyle!=="terracotta";} },
  { id:"landscape1", name:"Landscape Artist", desc:"Unlock a new background", icon:"\ud83c\udf05", reward:20, check:function(){return G.bgStyle!=="default";} },
  { id:"luckypkt", name:"Lucky Packet", desc:"Get legendary from common", icon:"\ud83c\udf1f", reward:50, check:function(){return false;} }, // tracked via flag
  { id:"hybrid1", name:"First Fusion", desc:"Create your first fusion flower", icon:"\ud83e\uddec", reward:20, check:function(){return G.hybridCount>=1;} },
  { id:"hybrid10", name:"Mad Scientist", desc:"Create 10 fusion flowers", icon:"\ud83d\udd2c", reward:50, check:function(){return G.hybridCount>=10;} },
  { id:"allweather", name:"Weather Watcher", desc:"Experience all 3 weather types", icon:"\ud83c\udf24\ufe0f", reward:15, check:function(){return false;} }, // tracked via flag
  { id:"streak7", name:"Dedicated", desc:"Play 7 different days", icon:"\ud83d\udcc5", reward:30, check:function(){return G.daysPlayed.length>=7;} },
];

function checkAchievements() {
  var newUnlocks = [];
  ACHIEVEMENTS.forEach(function(a) {
    if (G.achievements.includes(a.id)) return;
    if (a.check()) {
      G.achievements.push(a.id);
      G.coins += a.reward;
      G.totalCoins += a.reward;
      newUnlocks.push(a);
    }
  });
  if (newUnlocks.length) {
    updateHUD();
    saveG();
    playSound("achieve");
    haptic(60);
    newUnlocks.forEach(function(a) {
      toast("\ud83c\udfc6 " + a.name + "! +" + a.reward + " coins", 3000);
    });
  }
  checkMilestones();
}

function openAchievementsModal() {
  var prog = document.getElementById("achieveProg");
  prog.textContent = G.achievements.length + " / " + ACHIEVEMENTS.length + " unlocked";
  var grid = document.getElementById("achieveGrid");
  grid.textContent = "";
  ACHIEVEMENTS.forEach(function(a) {
    var unlocked = G.achievements.includes(a.id);
    var row = document.createElement("div");
    row.className = "achieve-row " + (unlocked ? "unlocked" : "locked");
    var icon = document.createElement("div");
    icon.className = "achieve-icon";
    icon.textContent = a.icon;
    row.appendChild(icon);
    var info = document.createElement("div");
    info.className = "achieve-info";
    var name = document.createElement("div");
    name.className = "achieve-name";
    name.textContent = unlocked ? a.name : "???";
    info.appendChild(name);
    var desc = document.createElement("div");
    desc.className = "achieve-desc";
    desc.textContent = a.desc;
    info.appendChild(desc);
    row.appendChild(info);
    var rew = document.createElement("div");
    rew.className = "achieve-reward";
    rew.textContent = unlocked ? "\u2705" : "+" + a.reward + "c";
    row.appendChild(rew);
    grid.appendChild(row);
  });
  openModal("achieveOverlay");
}

// ══════════════════════════════════════════════════════════
// COLLECTION MILESTONES
// ══════════════════════════════════════════════════════════
var MILESTONES = [
  { pct: 25, potStyle: "ceramic", bgStyle: null, label: "25% \u2192 Ceramic Pot Style" },
  { pct: 50, potStyle: null, bgStyle: "garden", label: "50% \u2192 Garden Background" },
  { pct: 75, potStyle: "golden", bgStyle: null, label: "75% \u2192 Golden Pot Style" },
  { pct: 100, potStyle: null, bgStyle: "enchanted", label: "100% \u2192 Enchanted Background" },
];

function getJournalPercent() {
  return Math.round((G.discovered.length / Object.keys(FLOWERS).length) * 100);
}

function checkMilestones() {
  var pct = getJournalPercent();
  MILESTONES.forEach(function(m) {
    if (pct >= m.pct) {
      if (m.potStyle && G.potStyle === "terracotta") {
        // Don't auto-switch, just unlock
      }
      if (m.bgStyle && G.bgStyle === "default") {
        // Don't auto-switch, just unlock
      }
    }
  });
}

function isMilestoneUnlocked(m) {
  return getJournalPercent() >= m.pct;
}

function renderMilestoneSection() {
  var section = document.getElementById("milestoneSection");
  if (!section) return;
  var pct = getJournalPercent();
  var wrap = document.createElement("div");
  wrap.className = "milestone-wrap";
  var title = document.createElement("div");
  title.className = "milestone-title";
  title.textContent = "\ud83c\udfc6 Collection: " + pct + "% \u2014 Milestones";
  wrap.appendChild(title);
  MILESTONES.forEach(function(m) {
    var unlocked = pct >= m.pct;
    var row = document.createElement("div");
    row.className = "milestone-row" + (unlocked ? " achieved" : "");
    var label = document.createElement("span");
    label.className = "milestone-label";
    label.textContent = m.label;
    row.appendChild(label);
    var status = document.createElement("span");
    status.className = "milestone-status " + (unlocked ? "done" : "locked");
    status.textContent = unlocked ? "\u2705 Unlocked" : "\ud83d\udd12 " + m.pct + "%";
    row.appendChild(status);
    if (unlocked && (m.potStyle || m.bgStyle)) {
      var btn = document.createElement("button");
      btn.className = "btn-compost"; // reuse compost button style
      btn.style.cssText = "margin-left:8px;font-size:.6em;padding:3px 8px;";
      if (m.potStyle) {
        btn.textContent = G.potStyle === m.potStyle ? "\u2713 Active" : "Use Pot";
        btn.disabled = G.potStyle === m.potStyle;
        btn.onclick = function() { G.potStyle = m.potStyle; saveG(); renderGarden(); openInventoryModal(); toast("Pot style changed!", 1500); };
      } else if (m.bgStyle) {
        btn.textContent = G.bgStyle === m.bgStyle ? "\u2713 Active" : "Use BG";
        btn.disabled = G.bgStyle === m.bgStyle;
        btn.onclick = function() { G.bgStyle = m.bgStyle; applyBgStyle(); saveG(); openInventoryModal(); toast("Background changed!", 1500); };
      }
      row.appendChild(btn);
    }
    wrap.appendChild(row);
  });
  section.textContent = "";
  section.appendChild(wrap);
}

// Petal pools per background theme
// SVG particle shapes for each theme (day + night variants)
function _particleSvg(w, h, inner, fill) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' + inner + '</svg>';
}
var _petalShapes = {
  // Petal (teardrop)
  petal: function(c) { return _particleSvg(12, 16, '<ellipse cx="6" cy="9" rx="5" ry="7" fill="' + c + '" opacity=".6"/>', c); },
  // Small flower (5 petals)
  flower: function(c) { return _particleSvg(14, 14, '<circle cx="7" cy="7" r="2.5" fill="#fff5" /><circle cx="7" cy="2.5" r="2.5" fill="' + c + '" opacity=".5"/><circle cx="11" cy="5.5" r="2.5" fill="' + c + '" opacity=".45"/><circle cx="9.8" cy="10.5" r="2.5" fill="' + c + '" opacity=".4"/><circle cx="4.2" cy="10.5" r="2.5" fill="' + c + '" opacity=".4"/><circle cx="3" cy="5.5" r="2.5" fill="' + c + '" opacity=".45"/>', c); },
  // Leaf
  leaf: function(c) { return _particleSvg(14, 10, '<path d="M1 5Q7 -2 13 5Q7 12 1 5Z" fill="' + c + '" opacity=".5"/><line x1="1" y1="5" x2="13" y2="5" stroke="' + c + '" stroke-width=".5" opacity=".3"/>', c); },
  // Star (4-point)
  star4: function(c) { return _particleSvg(12, 12, '<path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="' + c + '" opacity=".7"/>', c); },
  // Diamond sparkle
  sparkle: function(c) { return _particleSvg(10, 10, '<path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" fill="' + c + '" opacity=".6"/>', c); },
  // Circle dot
  dot: function(c) { return _particleSvg(8, 8, '<circle cx="4" cy="4" r="3" fill="' + c + '" opacity=".5"/>', c); },
  // Wave
  wave: function(c) { return _particleSvg(16, 8, '<path d="M0 4Q4 0 8 4Q12 8 16 4" fill="none" stroke="' + c + '" stroke-width="1.5" opacity=".4"/>', c); },
  // Maple leaf
  maple: function(c) { return _particleSvg(14, 14, '<path d="M7 0L8.5 4L13 3L10 7L14 10L9 9L7 14L5 9L0 10L4 7L1 3L5.5 4Z" fill="' + c + '" opacity=".5"/>', c); },
  // Crescent moon
  moon: function(c) { return _particleSvg(12, 12, '<path d="M8 1a5 5 0 1 0 0 10 4 4 0 0 1 0-10Z" fill="' + c + '" opacity=".6"/>', c); },
  // Snowflake-like
  crystal: function(c) { return _particleSvg(12, 12, '<path d="M6 0v12M0 6h12M1.8 1.8l8.4 8.4M10.2 1.8l-8.4 8.4" stroke="' + c + '" stroke-width=".7" opacity=".5" fill="none"/>', c); },
};

var BG_PETAL_POOLS = {
  "default":   [_petalShapes.petal("#f48fb1"), _petalShapes.petal("#ce93d8"), _petalShapes.flower("#f06292"), _petalShapes.petal("#ef9a9a"), _petalShapes.flower("#e57373"), _petalShapes.petal("#f8bbd0")],
  "garden":    [_petalShapes.leaf("#66bb6a"), _petalShapes.leaf("#81c784"), _petalShapes.leaf("#4caf50"), _petalShapes.dot("#a5d6a7"), _petalShapes.leaf("#388e3c"), _petalShapes.flower("#aed581")],
  "enchanted": [_petalShapes.sparkle("#ce93d8"), _petalShapes.star4("#b39ddb"), _petalShapes.sparkle("#e1bee7"), _petalShapes.crystal("#9575cd"), _petalShapes.star4("#7e57c2"), _petalShapes.sparkle("#ba68c8")],
  "sunset":    [_petalShapes.petal("#ffab91"), _petalShapes.dot("#ff8a65"), _petalShapes.petal("#ffcc80"), _petalShapes.flower("#ef5350"), _petalShapes.petal("#ff7043"), _petalShapes.dot("#ffa726")],
  "ocean":     [_petalShapes.wave("#4dd0e1"), _petalShapes.dot("#80deea"), _petalShapes.wave("#26c6da"), _petalShapes.dot("#00bcd4"), _petalShapes.wave("#b2ebf2"), _petalShapes.dot("#4db6ac")],
  "autumn":    [_petalShapes.maple("#ff8a65"), _petalShapes.maple("#d4a056"), _petalShapes.maple("#8d6e63"), _petalShapes.leaf("#bf360c"), _petalShapes.maple("#e65100"), _petalShapes.maple("#ffb74d")],
  "night":     [_petalShapes.star4("#e8eaf6"), _petalShapes.sparkle("#c5cae9"), _petalShapes.dot("#9fa8da"), _petalShapes.star4("#7986cb"), _petalShapes.sparkle("#e8eaf6"), _petalShapes.dot("#b0bec5")],
};
var BG_PETAL_POOLS_NIGHT = {
  "default":   [_petalShapes.star4("#c5cae9"), _petalShapes.sparkle("#9fa8da"), _petalShapes.dot("#7986cb"), _petalShapes.star4("#e8eaf6"), _petalShapes.dot("#b0bec5")],
  "garden":    [_petalShapes.star4("#a5d6a7"), _petalShapes.sparkle("#81c784"), _petalShapes.dot("#66bb6a"), _petalShapes.star4("#c8e6c9"), _petalShapes.dot("#4caf50")],
  "enchanted": [_petalShapes.sparkle("#ce93d8"), _petalShapes.star4("#e1bee7"), _petalShapes.crystal("#b39ddb"), _petalShapes.sparkle("#ba68c8"), _petalShapes.star4("#9575cd")],
  "sunset":    [_petalShapes.moon("#ffcc80"), _petalShapes.star4("#ff8a65"), _petalShapes.sparkle("#ef9a9a"), _petalShapes.dot("#ffab91"), _petalShapes.star4("#ffa726")],
  "ocean":     [_petalShapes.moon("#80deea"), _petalShapes.star4("#4dd0e1"), _petalShapes.dot("#26c6da"), _petalShapes.sparkle("#b2ebf2"), _petalShapes.star4("#80cbc4")],
  "autumn":    [_petalShapes.moon("#ffcc80"), _petalShapes.star4("#d4a056"), _petalShapes.sparkle("#8d6e63"), _petalShapes.dot("#bf360c"), _petalShapes.star4("#ff8a65")],
  "night":     [_petalShapes.star4("#e8eaf6"), _petalShapes.sparkle("#c5cae9"), _petalShapes.dot("#9fa8da"), _petalShapes.star4("#7986cb"), _petalShapes.sparkle("#e8eaf6"), _petalShapes.dot("#b0bec5")],
};

// Day and night gradients for each background style
var BG_GRADIENTS = {
  "default":   { day: "",
                 night: "linear-gradient(155deg, #1a1e2e 0%, #232840 40%, #1e2444 100%)" },
  "garden":    { day: "linear-gradient(155deg, #e8f5e9 0%, #c8e6c9 40%, #a5d6a7 100%)",
                 night: "linear-gradient(155deg, #0d2818 0%, #1a3a28 40%, #0f3020 100%)" },
  "enchanted": { day: "linear-gradient(155deg, #ede7f6 0%, #d1c4e9 30%, #b39ddb 60%, #e8eaf6 100%)",
                 night: "linear-gradient(155deg, #1a1030 0%, #2a1848 30%, #3a2060 60%, #1a1030 100%)" },
  "sunset":    { day: "linear-gradient(155deg, #fff3e0 0%, #ffcc80 30%, #ff8a65 60%, #ef5350 100%)",
                 night: "linear-gradient(155deg, #1a1018 0%, #2e1520 30%, #4a1828 60%, #1a0a12 100%)" },
  "ocean":     { day: "linear-gradient(155deg, #e0f7fa 0%, #80deea 30%, #4dd0e1 60%, #b2ebf2 100%)",
                 night: "linear-gradient(155deg, #0a1628 0%, #0d2040 30%, #103050 60%, #0a1830 100%)" },
  "autumn":    { day: "linear-gradient(155deg, #fff8e1 0%, #ffcc80 30%, #d4a056 60%, #8d6e63 100%)",
                 night: "linear-gradient(155deg, #1a1408 0%, #2a2010 30%, #3a2818 60%, #1a1208 100%)" },
  "night":     { day: "linear-gradient(155deg, #0d1117 0%, #161b22 30%, #1a1e3a 60%, #0d1117 100%)",
                 night: "linear-gradient(155deg, #0d1117 0%, #161b22 30%, #1a1e3a 60%, #0d1117 100%)" },
};

function applyBgStyle() {
  var canvas = document.querySelector(".bg-canvas");
  if (!canvas) return;
  document.body.classList.remove("bg-night");
  var isNight = document.body.classList.contains("night-mode");
  var gradients = BG_GRADIENTS[G.bgStyle] || BG_GRADIENTS["default"];
  var useDark = isNight || G.bgStyle === "night";
  canvas.style.background = useDark ? gradients.night : gradients.day;
  if (useDark) document.body.classList.add("bg-night");
  // Refresh floating art to match theme
  refreshPetals();
}

function refreshPetals() {
  // Guard: BG_PETAL_POOLS may not be initialized yet during early init
  if (typeof BG_PETAL_POOLS === "undefined" || !BG_PETAL_POOLS) return;
  // Remove old petals
  document.querySelectorAll(".petal").forEach(function(el) { el.remove(); });
  // Create new ones with theme-appropriate pool
  var isNight = document.body.classList.contains("night-mode") || G.bgStyle === "night";
  var pools = isNight ? BG_PETAL_POOLS_NIGHT : BG_PETAL_POOLS;
  var pool = pools[G.bgStyle] || pools["default"];
  var count = isNight ? 20 : 14;
  for (var i = 0; i < count; i++) {
    var el = document.createElement("div");
    el.className = "petal";
    el.innerHTML = pool[Math.floor(Math.random() * pool.length)];
    var left = 5 + Math.random() * 90;
    var dur = isNight ? (4 + Math.random() * 6) : (13 + Math.random() * 18);
    var delay = Math.random() * 20;
    var scale = isNight ? (0.6 + Math.random() * 0.8) : (1 + Math.random() * 1.2);
    el.style.cssText = "left:" + left + "%;transform:scale(" + scale.toFixed(2) + ");animation-duration:" + dur + "s;animation-delay:-" + delay + "s;";
    if (isNight) {
      el.style.animationName = "twinkle";
    }
    document.body.appendChild(el);
  }
}

// ══════════════════════════════════════════════════════════
// GAME TICK — runs every 1s
// ══════════════════════════════════════════════════════════
var _rainWaterCounter = 0;
var _tickSaveCounter = 0;
function gameTick() {
  // Persist last tick time every 30s for offline progress
  _tickSaveCounter++;
  if (_tickSaveCounter >= 30) { _tickSaveCounter = 0; G._lastTickTime = Date.now(); saveG(); }
  tickNPCs();
  tickWeather();
  // Rain auto-water every 60 ticks (60s)
  _rainWaterCounter++;
  if (_rainWaterCounter >= 60) {
    _rainWaterCounter = 0;
    rainAutoWater();
  }
  // Snow frost nip: 15% chance per tick to nip a growing flower (lose 1 water)
  if (G.weather === "snowy" && Math.random() < 0.003) { // ~15% per 50s cycle
    var growingPlots = G.plots.map(function(p, idx) { return p.state === "growing" ? idx : -1; }).filter(function(x) { return x >= 0; });
    if (growingPlots.length > 0) {
      var frostIdx = growingPlots[Math.floor(Math.random() * growingPlots.length)];
      if (G.plots[frostIdx].waters > 0) {
        G.plots[frostIdx].waters--;
        playSound("frost_nip");
        toast("\u2744\ufe0f Frost nipped " + FLOWERS[G.plots[frostIdx].key].name + "! Lost 1 water", 2000);
        updatePlotCard(frostIdx);
        saveG();
      }
    }
  }
  // Softlock safety net: if player is totally broke, gift a packet
  var totalPkt = Object.values(G.pkt).reduce(function(a,b){return a+b;},0);
  var hasAnyFlower = G.plots.some(function(p){return p.state !== "empty";});
  if (G.coins < PKT_COST.common && totalPkt === 0 && G.seeds.length === 0 && G.inventory.length === 0 && !hasAnyFlower) {
    G.pkt.common++;
    G.coins += 5;
    updateHUD();
    saveG();
    toast("\ud83c\udf3a A kind neighbor left you a packet and some coins!", 3500);
    playSound("achieve");
  }
  // Track daily play
  var today = new Date().toISOString().slice(0, 10);
  if (!G.daysPlayed.includes(today)) {
    G.daysPlayed.push(today);
    saveG();
    checkAchievements();
  }
}
// ══════════════════════════════════════════════════════════
// AUDIO SYSTEM — procedural Web Audio sounds (no files)
// ══════════════════════════════════════════════════════════
var _audioCtx = null;
var _soundEnabled = true;
var _sfxGain = null;

function getAudioCtx() {
  if (!_audioCtx) {
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { return null; }
  }
  if (_audioCtx.state === "suspended") _audioCtx.resume();
  // Create SFX master gain on first use
  if (!_sfxGain && _audioCtx) {
    _sfxGain = _audioCtx.createGain();
    _sfxGain.gain.value = G.sfxVolume ?? 1.0;
    _sfxGain.connect(_audioCtx.destination);
  }
  return _audioCtx;
}

// SFX output node — all sounds route through this for volume control
function sfxOut() { return _sfxGain || getAudioCtx().destination; }

function playSound(name) {
  if (!_soundEnabled) return;
  var ctx = getAudioCtx();
  if (!ctx) return;
  var now = ctx.currentTime;
  var osc, gain;

  switch(name) {
    case "water": // realistic water drop — resonant plop with harmonic tail
      // Main drop: high-pitched sine with fast pitch decay (the "plink")
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      var filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 800;
      filter.Q.value = 3;
      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.06);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(filter).connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.25);
      // Resonance bubble: lower sine for the "bloop" body
      var osc3 = ctx.createOscillator();
      var gain3 = ctx.createGain();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(280, now + 0.02);
      osc3.frequency.exponentialRampToValueAtTime(120, now + 0.18);
      gain3.gain.setValueAtTime(0.06, now + 0.02);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc3.connect(gain3).connect(sfxOut());
      osc3.start(now + 0.02); osc3.stop(now + 0.2);
      break;

    case "bloom":
      [523, 659, 784].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.1);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.3);
      });
      break;

    case "sale":
      [400, 500, 600].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.05, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.12);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.06); osc.stop(now + i * 0.06 + 0.12);
      });
      break;

    case "achieve":
      [523, 659, 784, 1047].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.35);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.35);
      });
      break;

    case "click": // soft warm tap
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 600;
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.1);
      break;

    case "vip":
      [440, 554, 659, 880].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.4);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.15); osc.stop(now + i * 0.15 + 0.4);
      });
      break;

    case "plant": // soft earthy thud
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.18);
      break;

    case "packet_common": // gentle pop
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.15);
      break;

    case "packet_uncommon": // two-note chime
      [523, 659].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.2);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.2);
      });
      break;

    case "packet_rare": // shimmering three-note arpeggio
      [587, 740, 880].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.25);
      });
      break;

    case "packet_legendary": // majestic rising four-note fanfare
      [440, 554, 659, 880].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.1);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.1 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.35);
      });
      break;

    case "cloud": // rain patter — randomized resonant drips
      for (var _ri = 0; _ri < 7; _ri++) {
        (function(delay) {
          var ro = ctx.createOscillator();
          var rg = ctx.createGain();
          var rf = ctx.createBiquadFilter();
          rf.type = "bandpass";
          rf.frequency.value = 600 + Math.random() * 800;
          rf.Q.value = 2 + Math.random() * 3;
          var sf = 1000 + Math.random() * 800;
          ro.type = "sine";
          ro.frequency.setValueAtTime(sf, now + delay);
          ro.frequency.exponentialRampToValueAtTime(sf * 0.2, now + delay + 0.08);
          rg.gain.setValueAtTime(0.04 + Math.random() * 0.04, now + delay);
          rg.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.12);
          ro.connect(rf).connect(rg).connect(sfxOut());
          ro.start(now + delay); ro.stop(now + delay + 0.12);
        })(_ri * 0.04 + Math.random() * 0.03);
      }
      break;

    case "whirlpool": // water pouring — bubbling cascade with splash finale
      for (var _wi = 0; _wi < 8; _wi++) {
        (function(idx) {
          var wo = ctx.createOscillator();
          var wg = ctx.createGain();
          var wf = ctx.createBiquadFilter();
          wf.type = "lowpass";
          wf.frequency.value = 400 + idx * 80;
          wf.Q.value = 5;
          wo.type = "sine";
          var bf = 200 + Math.random() * 150;
          wo.frequency.setValueAtTime(bf + 100, now + idx * 0.06);
          wo.frequency.exponentialRampToValueAtTime(bf * 0.5, now + idx * 0.06 + 0.12);
          wg.gain.setValueAtTime(0, now + idx * 0.06);
          wg.gain.linearRampToValueAtTime(0.05, now + idx * 0.06 + 0.02);
          wg.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.15);
          wo.connect(wf).connect(wg).connect(sfxOut());
          wo.start(now + idx * 0.06); wo.stop(now + idx * 0.06 + 0.15);
        })(_wi);
      }
      // Final splash
      var _so = ctx.createOscillator();
      var _sg = ctx.createGain();
      var _sf = ctx.createBiquadFilter();
      _sf.type = "bandpass"; _sf.frequency.value = 1200; _sf.Q.value = 4;
      _so.type = "sine";
      _so.frequency.setValueAtTime(1600, now + 0.5);
      _so.frequency.exponentialRampToValueAtTime(300, now + 0.6);
      _sg.gain.setValueAtTime(0.08, now + 0.5);
      _sg.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      _so.connect(_sf).connect(_sg).connect(sfxOut());
      _so.start(now + 0.5); _so.stop(now + 0.7);
      break;

    case "hybrid": // mysterious DNA merge
      [330, 415, 523, 660].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        osc.frequency.linearRampToValueAtTime(freq * 1.05, now + i * 0.12 + 0.3);
        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.08, now + i * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.35);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.35);
      });
      break;

    case "coins": // soft coin jingle
      [600, 700, 650, 750, 500].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.1);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.05); osc.stop(now + i * 0.05 + 0.1);
      });
      break;

    case "weather": // ambient whoosh
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(300, now + 0.3);
      osc.frequency.linearRampToValueAtTime(100, now + 0.6);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.6);
      break;

    // ── ITEM REVEAL JINGLES (Zelda-style "ta-ra-ram!") ────────
    case "reveal_common": // simple 2-note pickup: da-ding!
      [392, 523].forEach(function(freq, i) { // G4 → C5
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.25);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.25);
      });
      break;

    case "reveal_uncommon": // 3-note rising: da-da-ding!
      [392, 494, 587].forEach(function(freq, i) { // G4 → B4 → D5
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.3);
      });
      break;

    case "reveal_rare": // 4-note fanfare: ta-da-da-DING!
      [330, 392, 494, 659].forEach(function(freq, i) { // E4 → G4 → B4 → E5
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = i < 3 ? "triangle" : "sine";
        osc.frequency.value = freq;
        var vol = i === 3 ? 0.16 : 0.1;
        var dur = i === 3 ? 0.5 : 0.2;
        gain.gain.setValueAtTime(vol, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + dur);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + dur);
      });
      break;

    case "reveal_legendary": // epic 5-note: ta-ra-ra-ra-RAAAAM!! with octave doubling
      [294, 370, 440, 554, 740].forEach(function(freq, i) { // D4 → F#4 → A4 → C#5 → F#5
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        var vol = 0.08 + i * 0.02;
        var dur = i === 4 ? 0.8 : 0.18;
        gain.gain.setValueAtTime(vol, now + i * 0.1);
        if (i === 4) {
          gain.gain.setValueAtTime(0.18, now + i * 0.1);
          gain.gain.linearRampToValueAtTime(0.14, now + i * 0.1 + 0.3);
        }
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + dur);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + dur);
      });
      // Octave doubling on final note for fullness
      osc = ctx.createOscillator(); gain = ctx.createGain();
      osc.type = "sine"; osc.frequency.value = 1480; // F#6
      gain.gain.setValueAtTime(0.06, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
      osc.connect(gain).connect(sfxOut());
      osc.start(now + 0.4); osc.stop(now + 1.1);
      break;

    case "reveal_hybrid": // same as rare — shimmering arpeggio
      [587, 740, 880].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.25);
      });
      break;

    case "reveal_unique": // celestial 6-note ascending with shimmer: the legendary+ reveal
      [262, 330, 392, 494, 587, 784].forEach(function(freq, i) { // C4→E4→G4→B4→D5→G5
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        var vol = 0.07 + i * 0.02;
        var dur = i === 5 ? 1.0 : 0.16;
        gain.gain.setValueAtTime(vol, now + i * 0.09);
        if (i === 5) {
          gain.gain.setValueAtTime(0.18, now + i * 0.09);
          gain.gain.linearRampToValueAtTime(0.12, now + i * 0.09 + 0.5);
        }
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + dur);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.09); osc.stop(now + i * 0.09 + dur);
      });
      // Shimmer: two detuned high octaves for ethereal sparkle
      [1568, 1580].forEach(function(freq, i) {
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = "sine"; osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, now + 0.45);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + 0.45); osc.stop(now + 1.3);
      });
      break;

    case "frost_nip": // crystalline descending tone
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      var frostFilter = ctx.createBiquadFilter();
      frostFilter.type = "highpass"; frostFilter.frequency.value = 2000;
      osc.type = "sine";
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(frostFilter).connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.35);
      break;

    case "mutation": // wobbly detuned bloom
      [523, 530, 659, 670].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.frequency.linearRampToValueAtTime(freq * (i % 2 === 0 ? 1.03 : 0.97), now + 0.3);
        gain.gain.setValueAtTime(0.06, now + (i < 2 ? 0 : 0.1));
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + (i < 2 ? 0 : 0.1)); osc.stop(now + 0.4);
      });
      break;

    case "coin_clink": // soft coin sound
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = 800;
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain).connect(sfxOut());
      osc.start(now); osc.stop(now + 0.12);
      break;

    case "buy": // warm ascending chime (same feel as sale)
      [330, 440, 523].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.06, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.18);
        osc.connect(gain).connect(sfxOut());
        osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.18);
      });
      break;

    case "packet_tear": // short noise burst (paper tearing)
      var bufSz = ctx.sampleRate * 0.08;
      var buf = ctx.createBuffer(1, bufSz, ctx.sampleRate);
      var data = buf.getChannelData(0);
      for (var ni = 0; ni < bufSz; ni++) data[ni] = (Math.random() * 2 - 1) * 0.5;
      var noise = ctx.createBufferSource();
      noise.buffer = buf;
      var tearFilter = ctx.createBiquadFilter();
      tearFilter.type = "highpass"; tearFilter.frequency.value = 3000;
      gain = ctx.createGain();
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      noise.connect(tearFilter).connect(gain).connect(sfxOut());
      noise.start(now); noise.stop(now + 0.08);
      break;
  }
}

function haptic(ms) {
  try { if (navigator.vibrate) navigator.vibrate(ms || 30); } catch(e) {}
}

// ══════════════════════════════════════════════════════════
// AMBIENT MUSIC — cottagecore procedural soundtrack
// 3 voices: warm pad, pentatonic melody, gentle bass
// 80 BPM, C major pentatonic, natural variation
// ══════════════════════════════════════════════════════════
var _musicNodes = null;
var _musicEnabled = false;
var _musicInterval = null;
var _melodyInterval = null;
var _bassInterval = null;
var _rainAmbient = null;

// C major pentatonic scale frequencies (multiple octaves)
var PENTA_LOW  = [130.8, 146.8, 164.8, 196, 220];       // C3-A3
var PENTA_MID  = [261.6, 293.7, 329.6, 392, 440];       // C4-A4
var PENTA_HIGH = [523.3, 587.3, 659.3, 784, 880];       // C5-A5

// ── 5 MUSIC MOODS — rotate every 5 minutes ──────────────
// Each mood has its own chords, progressions, melody patterns, and tempo feel
// ── 10 NAMED SONGS — each has unique character via synthesis params ──
// padWave/melWave: oscillator type. melOctave: 0=mid,1=high,2=mix. restPct: 0-0.5
// padAttack: seconds to fade in. melLen: note length. bassWave: bass timbre
// filterHz: per-song warmth filter override
var SONGS = [
  { id:0, name:"Groovy Garden", weather:"sunny", beatMs:167, filterHz:1200,
    sequencer: true, seqSteps: 128,
    seq: [
      // ═══ BAR 1: Intro — just pad + bass, gentle start ═══
      [{t:"pad",f:[130.8,196,261.6]},{t:"bass",f:65.4}],
      [],[],[],
      [{t:"bass",f:65.4}],
      [],[],[],
      [{t:"pad",f:[87.3,130.8,174.6]},{t:"bass",f:87.3}],
      [],[],[],
      [{t:"bass",f:87.3}],
      [],[],[],

      // ═══ BAR 2: Intro + melody enters ═══
      [{t:"pad",f:[130.8,196,261.6]},{t:"mel",f:392},{t:"bass",f:65.4}],
      [],
      [{t:"mel",f:440}],
      [],
      [{t:"mel",f:523.3}],
      [],[],[],
      [{t:"pad",f:[87.3,130.8,174.6]},{t:"mel",f:440},{t:"bass",f:87.3}],
      [],
      [{t:"mel",f:523.3}],
      [],
      [{t:"mel",f:392}],
      [],[],[],

      // ═══ BAR 3: Verse 1 — full groove (original preset) ═══
      [{t:"pad",f:[130.8,196,261.6]},{t:"mel",f:392},{t:"bass",f:65.4},{t:"kick"}],
      [],
      [{t:"mel",f:440},{t:"hat"}],
      [],
      [{t:"mel",f:523.3},{t:"kick"},{t:"snap"}],
      [],
      [{t:"mel",f:392},{t:"hat"}],
      [],
      [{t:"pad",f:[87.3,130.8,174.6]},{t:"mel",f:440},{t:"bass",f:87.3},{t:"kick"}],
      [],
      [{t:"mel",f:523.3},{t:"hat"}],
      [],
      [{t:"mel",f:329.6},{t:"kick"},{t:"snap"}],
      [],
      [{t:"mel",f:293.7},{t:"hat"}],
      [],

      // ═══ BAR 4: Verse 1 variation — higher melody ═══
      [{t:"pad",f:[130.8,196,261.6]},{t:"mel",f:523.3},{t:"bass",f:65.4},{t:"kick"}],
      [],
      [{t:"mel",f:587.3},{t:"hat"}],
      [],
      [{t:"mel",f:659.3},{t:"kick"},{t:"snap"}],
      [],
      [{t:"mel",f:523.3},{t:"hat"}],
      [],
      [{t:"pad",f:[87.3,130.8,174.6]},{t:"mel",f:587.3},{t:"bass",f:87.3},{t:"kick"}],
      [],
      [{t:"mel",f:440},{t:"hat"}],
      [],
      [{t:"mel",f:392},{t:"kick"},{t:"snap"}],
      [],
      [{t:"mel",f:329.6},{t:"hat"}],
      [],

      // ═══ BAR 5: Chorus — G + Em chords, busier rhythm ═══
      [{t:"pad",f:[98,146.8,196]},{t:"mel",f:392},{t:"bass",f:49},{t:"kick"}],
      [{t:"hat"}],
      [{t:"mel",f:523.3},{t:"hat"}],
      [],
      [{t:"mel",f:659.3},{t:"kick"},{t:"snap"}],
      [{t:"hat"}],
      [{t:"mel",f:523.3},{t:"hat"}],
      [],
      [{t:"pad",f:[82.4,123.5,164.8]},{t:"mel",f:440},{t:"bass",f:82.4},{t:"kick"}],
      [{t:"hat"}],
      [{t:"mel",f:392},{t:"hat"}],
      [],
      [{t:"mel",f:329.6},{t:"kick"},{t:"snap"}],
      [{t:"hat"}],
      [{t:"mel",f:293.7},{t:"hat"}],
      [],

      // ═══ BAR 6: Bridge — Am + Dm, darker, sparser ═══
      [{t:"pad",f:[110,164.8,220]},{t:"bass",f:55},{t:"kick"}],
      [],
      [{t:"mel",f:329.6},{t:"hat"}],
      [],
      [{t:"mel",f:293.7},{t:"kick"}],
      [],
      [{t:"hat"}],
      [],
      [{t:"pad",f:[73.4,110,146.8]},{t:"mel",f:261.6},{t:"bass",f:73.4},{t:"kick"}],
      [],
      [{t:"mel",f:293.7},{t:"hat"}],
      [],
      [{t:"mel",f:329.6},{t:"kick"},{t:"snap"}],
      [],
      [{t:"hat"}],
      [],

      // ═══ BAR 7: Chorus 2 — back to G+C, full energy ═══
      [{t:"pad",f:[98,146.8,196]},{t:"mel",f:523.3},{t:"bass",f:49},{t:"kick"}],
      [{t:"hat"}],
      [{t:"mel",f:440},{t:"hat"}],
      [{t:"mel",f:392}],
      [{t:"mel",f:523.3},{t:"kick"},{t:"snap"}],
      [{t:"hat"}],
      [{t:"mel",f:659.3},{t:"hat"}],
      [],
      [{t:"pad",f:[130.8,196,261.6]},{t:"mel",f:587.3},{t:"bass",f:65.4},{t:"kick"}],
      [{t:"hat"}],
      [{t:"mel",f:523.3},{t:"hat"}],
      [{t:"mel",f:440}],
      [{t:"mel",f:392},{t:"kick"},{t:"snap"}],
      [{t:"hat"}],
      [{t:"mel",f:329.6},{t:"hat"}],
      [],

      // ═══ BAR 8: Outro — winding down, back to basics ═══
      [{t:"pad",f:[130.8,196,261.6]},{t:"mel",f:392},{t:"bass",f:65.4},{t:"kick"}],
      [],
      [{t:"mel",f:329.6},{t:"hat"}],
      [],
      [{t:"kick"}],
      [],
      [{t:"mel",f:293.7},{t:"hat"}],
      [],
      [{t:"pad",f:[87.3,130.8,174.6]},{t:"mel",f:261.6},{t:"bass",f:87.3}],
      [],
      [{t:"hat"}],
      [],
      [{t:"mel",f:293.7}],
      [],
      [{t:"mel",f:261.6}],
      [],
    ],
    padWave:"sine", melWave:"sine", bassWave:"sine", melOctave:1, restPct:0, padAttack:0.3, melLen:0.2,
    chords:[{pad:[130.8,196,261.6],bass:65.4}], progs:[[0]], melodies:[[0,2,4,3]] },

  { id:1, name:"Morning Dew", weather:"sunny", beatMs:700,
    padWave:"sine", melWave:"triangle", bassWave:"sine", melOctave:2, restPct:0.15, padAttack:1.0, melLen:0.35, filterHz:900,
    chords:[{pad:[130.8,196,261.6,329.6],bass:65.4},{pad:[98,146.8,196,293.7],bass:49},{pad:[110,164.8,220,329.6],bass:55},{pad:[87.3,130.8,174.6,261.6],bass:87.3}],
    progs:[[0,1,2,3],[0,2,3,1],[3,2,1,0]], melodies:[[4,3,4,2,3,1,0],[0,1,3,4,3,2,0],[2,3,4,3,2,0,1]] },

  { id:2, name:"Sunflower Waltz", weather:"sunny", beatMs:550,
    padWave:"sine", melWave:"sine", bassWave:"triangle", melOctave:1, restPct:0.05, padAttack:0.5, melLen:0.25, filterHz:1000,
    chords:[{pad:[73.4,110,146.8,220],bass:73.4},{pad:[98,146.8,196,246.9],bass:49},{pad:[130.8,164.8,196,261.6],bass:65.4},{pad:[82.4,123.5,164.8,246.9],bass:82.4}],
    progs:[[0,1,2,3],[2,0,1,3],[1,3,0,2]], melodies:[[2,3,4,3,2,0,1],[0,4,2,3,4,2,1],[1,0,2,4,3,2,0,1]] },

  { id:3, name:"Yurie's Garden", weather:"any", beatMs:780,
    padWave:"sine", melWave:"triangle", bassWave:"sine", melOctave:0, restPct:0.2, padAttack:1.2, melLen:0.4, filterHz:700,
    chords:[{pad:[130.8,196,261.6,329.6],bass:65.4},{pad:[110,164.8,220,329.6],bass:55},{pad:[87.3,130.8,174.6,261.6],bass:87.3},{pad:[98,146.8,196,293.7],bass:49}],
    progs:[[0,2,1,3],[0,3,1,2],[0,1,2,3]], melodies:[[0,2,4,3,2],[0,1,3,2,4],[2,0,3,1,4],[4,3,2,0,1,3]] },

  { id:4, name:"Rainy Lullaby", weather:"rainy", beatMs:950,
    padWave:"sine", melWave:"sine", bassWave:"sine", melOctave:0, restPct:0.35, padAttack:2.0, melLen:0.6, filterHz:500,
    chords:[{pad:[87.3,130.8,174.6,220],bass:87.3},{pad:[130.8,164.8,196,261.6],bass:65.4},{pad:[73.4,110,146.8,220],bass:73.4},{pad:[87.3,116.5,174.6,220],bass:58.3}],
    progs:[[0,1,2,3],[0,2,1,0],[2,0,3,1]], melodies:[[0,1,0,2,1,0],[2,1,3,2,0],[0,2,1,0,1,2,3]] },

  { id:5, name:"Twilight Walk", weather:"any", beatMs:850,
    padWave:"triangle", melWave:"triangle", bassWave:"sine", melOctave:2, restPct:0.25, padAttack:1.5, melLen:0.45, filterHz:650,
    chords:[{pad:[110,164.8,220,261.6],bass:55},{pad:[87.3,130.8,174.6,220],bass:87.3},{pad:[130.8,164.8,196,261.6],bass:65.4},{pad:[82.4,123.5,164.8,246.9],bass:82.4}],
    progs:[[0,1,2,3],[0,3,1,2],[2,0,1,3]], melodies:[[4,3,4,2,1,0],[0,1,0,2,3,2],[3,2,0,1,2,4]] },

  { id:6, name:"Starlight Sonata", weather:"any", beatMs:900,
    padWave:"sine", melWave:"sine", bassWave:"sine", melOctave:1, restPct:0.3, padAttack:2.0, melLen:0.5, filterHz:550,
    chords:[{pad:[82.4,123.5,164.8,246.9],bass:82.4},{pad:[130.8,164.8,196,261.6],bass:65.4},{pad:[98,123.5,164.8,196],bass:49},{pad:[73.4,110,146.8,220],bass:73.4}],
    progs:[[0,1,2,3],[0,2,3,1],[2,0,1,3]], melodies:[[4,3,2,4,3,1,0],[0,2,4,2,0],[3,4,2,1,0,2]] },

  { id:7, name:"Drought Blues", weather:"drought", beatMs:800,
    padWave:"triangle", melWave:"sawtooth", bassWave:"triangle", melOctave:0, restPct:0.4, padAttack:0.8, melLen:0.3, filterHz:600,
    chords:[{pad:[110,164.8,220,261.6],bass:55},{pad:[73.4,110,146.8,220],bass:73.4},{pad:[82.4,123.5,164.8,246.9],bass:82.4},{pad:[110,130.8,164.8,196],bass:55}],
    progs:[[0,1,2,3],[0,2,1,0],[3,1,0,2]], melodies:[[0,1,0,2,0,1],[2,1,0,2,3,2,1],[0,0,2,1,0,3,2]] },

  { id:8, name:"Snowfall Waltz", weather:"snowy", beatMs:880,
    padWave:"sine", melWave:"triangle", bassWave:"sine", melOctave:2, restPct:0.25, padAttack:1.8, melLen:0.5, filterHz:600,
    chords:[{pad:[130.8,164.8,196,261.6],bass:65.4},{pad:[98,146.8,196,246.9],bass:49},{pad:[87.3,130.8,174.6,261.6],bass:87.3},{pad:[110,164.8,220,329.6],bass:55}],
    progs:[[0,1,2,3],[0,2,3,1],[3,0,1,2]], melodies:[[0,2,4,2,0],[4,3,2,3,4],[0,1,2,0,4,3,2]] },

  { id:9, name:"Winter Night", weather:"snowy", beatMs:1000,
    padWave:"sine", melWave:"sine", bassWave:"sine", melOctave:1, restPct:0.3, padAttack:2.5, melLen:0.7, filterHz:450,
    chords:[{pad:[98,146.8,196,293.7],bass:49},{pad:[82.4,123.5,164.8,246.9],bass:82.4},{pad:[130.8,196,261.6,329.6],bass:65.4},{pad:[73.4,110,146.8,220],bass:73.4}],
    progs:[[0,1,2,3],[0,2,1,3],[2,0,3,1]], melodies:[[4,3,2,0,1,0,2,4],[2,3,4,3,2,1,0,1],[0,0,2,3,4,4,3,2],[0,4,2,0,3,4,2]] },
];

var _currentSongIdx = 0;
var _currentMoodIdx = 0;
var _moodChangeTimer = null;
var MOOD_CHANGE_MS = 30000; // rotate progs/melodies every 30s within a song

function startAmbientMusic() {
  if (_musicNodes) return;
  var ctx = getAudioCtx();
  if (!ctx) return;

  // Start with Groovy Garden (song 0)
  if (_currentSongIdx === 0 && !G._userPickedSong) _currentSongIdx = 0;

  // Master output chain
  var masterGain = ctx.createGain();
  masterGain.gain.value = G.musicVolume || 0.045;
  masterGain.connect(ctx.destination);

  // Lo-fi warmth filter — initial value from song, updated per-song
  var warmFilter = ctx.createBiquadFilter();
  warmFilter.type = "lowpass";
  warmFilter.frequency.value = getSong().filterHz || 700;
  warmFilter.Q.value = 0.7;
  warmFilter.connect(masterGain);

  // Separate gains for each voice
  var padGain = ctx.createGain();
  padGain.gain.value = 0.5;
  padGain.connect(warmFilter);

  var melodyGain = ctx.createGain();
  melodyGain.gain.value = 0.35;
  melodyGain.connect(warmFilter);

  var bassGain = ctx.createGain();
  bassGain.gain.value = 0.4;
  bassGain.connect(warmFilter);

  function getSong() {
    return SONGS[_currentSongIdx % SONGS.length];
  }

  var state = {
    progIdx: 0,
    chordStep: 0,
    melodyPatIdx: 0,
    melodyNoteIdx: 0,
    beat: 0,
    padOscs: [],
    bassOsc: null,
    useHighOctave: false,
  };

  // ── PAD VOICE — warm sustained chords, 4 beats per chord ──
  function playPad() {
    var mood = getSong();
    var prog = mood.progs[state.progIdx % mood.progs.length];
    var chord = mood.chords[prog[state.chordStep % prog.length]];
    var now = ctx.currentTime;

    // Fade out old pad
    state.padOscs.forEach(function(o) {
      try { o.g.gain.linearRampToValueAtTime(0, now + 0.8); o.o.stop(now + 1); } catch(e) {}
    });
    state.padOscs = [];

    // Play new chord — use song-specific wave and attack
    var songNow = getSong();
    var pAtk = songNow.padAttack || 1.2;
    chord.pad.forEach(function(freq) {
      for (var d = 0; d < 2; d++) {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = d === 0 ? (songNow.padWave || "sine") : "triangle";
        o.frequency.value = freq + (d === 0 ? -1.5 : 1.5) + (Math.random() - 0.5);
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(d === 0 ? 0.6 : 0.15, now + pAtk);
        g.gain.linearRampToValueAtTime(d === 0 ? 0.4 : 0.1, now + pAtk + 3);
        o.connect(g).connect(padGain);
        o.start(now);
        state.padOscs.push({ o: o, g: g });
      }
    });

    state.chordStep++;
    // Every full progression, maybe switch to a new one within the mood
    var mood = getSong();
    if (state.chordStep % 4 === 0 && Math.random() < 0.4) {
      state.progIdx = Math.floor(Math.random() * mood.progs.length);
    }
  }

  // ── MELODY VOICE — pentatonic notes, syncopated ──
  function playMelody() {
    var now = ctx.currentTime;
    var mood = getSong();
    var pattern = mood.melodies[state.melodyPatIdx % mood.melodies.length];
    var degree = pattern[state.melodyNoteIdx % pattern.length];

    // Choose octave based on song setting
    var songM = getSong();
    var melOct = songM.melOctave || 0;
    var scale;
    if (melOct === 1) scale = PENTA_HIGH;
    else if (melOct === 2) scale = (state.useHighOctave ? PENTA_HIGH : PENTA_MID);
    else scale = PENTA_MID;
    var freq = scale[degree % scale.length];

    var swing = Math.random() * 0.04; // always positive, 0-40ms ahead
    var noteLen = (songM.melLen || 0.35) + Math.random() * 0.1;

    // Rest based on song's rest percentage
    if (Math.random() < (songM.restPct || 0.2)) {
      state.melodyNoteIdx++;
      return;
    }

    var o = ctx.createOscillator();
    var g = ctx.createGain();
    var mFilter = ctx.createBiquadFilter();
    mFilter.type = "lowpass";
    mFilter.frequency.value = (songM.filterHz || 700) + 400;

    o.type = songM.melWave || "sine";
    o.frequency.value = freq + (Math.random() - 0.5) * 3;

    g.gain.setValueAtTime(0, now + swing);
    g.gain.linearRampToValueAtTime(0.7, now + swing + 0.06);
    g.gain.linearRampToValueAtTime(0.3, now + swing + noteLen * 0.6);
    g.gain.linearRampToValueAtTime(0, now + swing + noteLen);
    o.connect(mFilter).connect(g).connect(melodyGain);
    o.start(now + Math.max(0, swing));
    o.stop(now + swing + noteLen + 0.1);

    state.melodyNoteIdx++;
    // When pattern ends, apply variation to avoid exact repetition
    if (state.melodyNoteIdx >= pattern.length) {
      state.melodyNoteIdx = 0;
      var moodNow = getSong();
      // 40% chance: switch to different pattern
      // 30% chance: reverse current pattern
      // 30% chance: keep but shift octave
      var variation = Math.random();
      if (variation < 0.4) {
        state.melodyPatIdx = Math.floor(Math.random() * moodNow.melodies.length);
      } else if (variation < 0.7) {
        // Reverse the pattern in-place for this cycle
        var reversed = pattern.slice().reverse();
        moodNow.melodies[state.melodyPatIdx % moodNow.melodies.length] = reversed;
      }
      state.useHighOctave = Math.random() < 0.3;
    }
  }

  // ── BASS VOICE — root notes, gentle pulse ──
  function playBass() {
    var now = ctx.currentTime;
    var mood = getSong();
    var prog = mood.progs[state.progIdx % mood.progs.length];
    var chord = mood.chords[prog[(state.chordStep - 1 + prog.length) % prog.length]];

    // Stop old bass
    if (state.bassOsc) {
      try { state.bassOsc.g.gain.linearRampToValueAtTime(0, now + 0.3); state.bassOsc.o.stop(now + 0.4); } catch(e) {}
    }

    var songB = getSong();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = songB.bassWave || "sine";
    o.frequency.value = chord.bass;

    // Sometimes play the 5th instead of root for movement
    if (state.beat % 4 === 2 && Math.random() < 0.4) {
      o.frequency.value = chord.bass * 1.5;
    }

    var bLen = songB.beatMs ? (songB.beatMs * 3.5 / 1000) : 2.8;
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.6, now + 0.15);
    g.gain.linearRampToValueAtTime(0.25, now + bLen * 0.5);
    g.gain.linearRampToValueAtTime(0, now + bLen);
    o.connect(g).connect(bassGain);
    o.start(now);
    o.stop(now + bLen + 0.1);
    state.bassOsc = { o: o, g: g };
    state.beat++;
  }

  // Sequencer state
  var _seqStep = 0;

  // ── Look-ahead scheduler (precise Web Audio timing) ──
  // Instead of setInterval firing each note, we use a fast scheduler
  // that checks AudioContext.currentTime and schedules notes ahead
  var _scheduleAhead = 0.1;  // schedule 100ms ahead
  var _schedulerInterval = 25; // check every 25ms
  var _nextBeatTime = 0;
  var _beatCounter = 0;
  var _schedulerTimer = null;

  function scheduler() {
    var song = getSong();
    var beatSec = song.beatMs / 1000;
    // Schedule all beats that fall within the lookahead window
    while (_nextBeatTime < ctx.currentTime + _scheduleAhead) {
      if (song.sequencer) {
        scheduleSeqBeat(_nextBeatTime);
      } else {
        scheduleProceduralBeat(_nextBeatTime);
      }
      _nextBeatTime += beatSec;
      _beatCounter++;
    }
  }

  function scheduleSeqBeat(time) {
    var song = getSong();
    var events = song.seq[_seqStep % song.seqSteps];
    events.forEach(function(evt) {
      if (evt.t === "pad") {
        evt.f.forEach(function(freq) {
          for (var d = 0; d < 2; d++) {
            var o = ctx.createOscillator();
            var g = ctx.createGain();
            o.type = d === 0 ? "sine" : "triangle";
            o.frequency.value = freq + (d === 0 ? -1.5 : 1.5);
            g.gain.setValueAtTime(0, time);
            g.gain.linearRampToValueAtTime(d === 0 ? 0.25 : 0.06, time + 0.08);
            g.gain.linearRampToValueAtTime(0, time + 0.5);
            o.connect(g).connect(warmFilter);
            o.start(time); o.stop(time + 0.55);
          }
        });
      } else if (evt.t === "mel") {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = Math.random() < 0.6 ? "sine" : "triangle";
        o.frequency.value = evt.f + (Math.random() - 0.5) * 2;
        g.gain.setValueAtTime(0, time);
        g.gain.linearRampToValueAtTime(0.35, time + 0.03);
        g.gain.linearRampToValueAtTime(0, time + 0.35);
        o.connect(g).connect(warmFilter);
        o.start(time); o.stop(time + 0.4);
      } else if (evt.t === "bass") {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = evt.f;
        g.gain.setValueAtTime(0, time);
        g.gain.linearRampToValueAtTime(0.45, time + 0.04);
        g.gain.linearRampToValueAtTime(0, time + 0.4);
        o.connect(g).connect(warmFilter);
        o.start(time); o.stop(time + 0.45);
      } else if (evt.t === "kick") {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(160, time);
        o.frequency.exponentialRampToValueAtTime(40, time + 0.12);
        g.gain.setValueAtTime(0.5, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
        o.connect(g).connect(masterGain);
        o.start(time); o.stop(time + 0.25);
      } else if (evt.t === "hat") {
        var bufSz = ctx.sampleRate * 0.05;
        var buf = ctx.createBuffer(1, bufSz, ctx.sampleRate);
        var dd = buf.getChannelData(0);
        for (var ii = 0; ii < bufSz; ii++) dd[ii] = (Math.random() * 2 - 1) * 0.3;
        var src = ctx.createBufferSource();
        src.buffer = buf;
        var hp = ctx.createBiquadFilter();
        hp.type = "highpass"; hp.frequency.value = 7000;
        var g = ctx.createGain();
        g.gain.setValueAtTime(0.25, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.06);
        src.connect(hp).connect(g).connect(masterGain);
        src.start(time); src.stop(time + 0.06);
      } else if (evt.t === "snap") {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = "square";
        o.frequency.value = 1800;
        g.gain.setValueAtTime(0.15, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
        o.connect(g).connect(masterGain);
        o.start(time); o.stop(time + 0.05);
      }
    });
    _seqStep = (_seqStep + 1) % song.seqSteps;
  }

  function scheduleProceduralBeat(time) {
    var song = getSong();
    var localBeat = _beatCounter;
    // Pad: every 4 beats
    if (localBeat % 4 === 0) {
      playPad();
    }
    // Melody: every beat
    playMelody();
    // Bass: every 2 beats
    if (localBeat % 2 === 0) {
      playBass();
    }
  }

  function startTimers() {
    var song = getSong();
    if (song.sequencer) {
      _seqStep = 0;
      warmFilter.frequency.value = 1200;
      warmFilter.Q.value = 0.6;
    } else {
      warmFilter.frequency.value = song.filterHz || 700;
      warmFilter.Q.value = 0.7;
      playPad();
      playBass();
    }
    _nextBeatTime = ctx.currentTime + 0.05; // start slightly ahead
    _beatCounter = 0;
    _schedulerTimer = setInterval(scheduler, _schedulerInterval);
  }

  function clearTimers() {
    if (_schedulerTimer) { clearInterval(_schedulerTimer); _schedulerTimer = null; }
    if (_musicInterval) { clearInterval(_musicInterval); _musicInterval = null; }
    if (_melodyInterval) { clearInterval(_melodyInterval); _melodyInterval = null; }
    if (_bassInterval) { clearInterval(_bassInterval); _bassInterval = null; }
  }

  // Mood rotation every 5 minutes
  _moodChangeTimer = setInterval(function() {
    // Pick a different mood
    // Rotate internal progression/melody within current song
    var song = getSong();
    state.chordStep = 0;
    state.melodyNoteIdx = 0;
    state.progIdx = (state.progIdx + 1) % song.progs.length;
    state.melodyPatIdx = (state.melodyPatIdx + 1) % song.melodies.length;
    // Update filter to match song character
    warmFilter.frequency.value = song.filterHz || 700;
    // Restart timers with new tempo
    clearTimers();
    startTimers();
  }, MOOD_CHANGE_MS);

  startTimers();

  _musicNodes = {
    masterGain: masterGain,
    filter: warmFilter,
    padGain: padGain,
    melodyGain: melodyGain,
    bassGain: bassGain,
    state: state,
    clearTimers: clearTimers,
  };
}

function stopAmbientMusic() {
  if (_moodChangeTimer) { clearInterval(_moodChangeTimer); _moodChangeTimer = null; }
  if (_musicNodes) {
    _musicNodes.clearTimers();
    var s = _musicNodes.state;
    s.padOscs.forEach(function(o) { try { o.o.stop(); } catch(e) {} });
    if (s.bassOsc) try { s.bassOsc.o.stop(); } catch(e) {}
    try { _musicNodes.masterGain.disconnect(); } catch(e) {}
    _musicNodes = null;
  }
  stopRainAmbient();
}

function updateMusicForWeather() {
  if (!_musicNodes) return;
  var filter = _musicNodes.filter;
  var mg = _musicNodes.melodyGain;
  var ctx = getAudioCtx();
  if (!ctx) return;
  var now = ctx.currentTime;
  if (G.weather === "rainy") {
    filter.frequency.linearRampToValueAtTime(500, now + 2);
    mg.gain.linearRampToValueAtTime(0.2, now + 2);
  } else if (G.weather === "snowy") {
    filter.frequency.linearRampToValueAtTime(450, now + 2);
    mg.gain.linearRampToValueAtTime(0.25, now + 2);
  } else if (G.weather === "sunny") {
    filter.frequency.linearRampToValueAtTime(900, now + 2);
    mg.gain.linearRampToValueAtTime(0.4, now + 2);
  } else {
    filter.frequency.linearRampToValueAtTime(600, now + 2);
    mg.gain.linearRampToValueAtTime(0.3, now + 2);
  }
}

// Rain ambient SFX — triggered by weather, not music
function updateRainSfx() {
  if (G.weather === "rainy" && _soundEnabled) {
    startRainAmbient();
  } else {
    stopRainAmbient();
  }
}

function startRainAmbient() {
  if (_rainAmbient) return;
  var ctx = getAudioCtx();
  if (!ctx) return;
  var bufSz = ctx.sampleRate * 2;
  var buf = ctx.createBuffer(1, bufSz, ctx.sampleRate);
  var d = buf.getChannelData(0);
  for (var i = 0; i < bufSz; i++) d[i] = Math.random() * 2 - 1;
  var src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  var bp = ctx.createBiquadFilter();
  bp.type = "bandpass"; bp.frequency.value = 1400; bp.Q.value = 1.2;
  var g = ctx.createGain();
  g.gain.value = 0.005;
  src.connect(bp).connect(g).connect(sfxOut());
  src.start();
  _rainAmbient = { src: src, gain: g };
}

function stopRainAmbient() {
  if (!_rainAmbient) return;
  try { _rainAmbient.src.stop(); } catch(e) {}
  try { _rainAmbient.gain.disconnect(); } catch(e) {}
  _rainAmbient = null;
}

// ══════════════════════════════════════════════════════════
// NIGHT MODE — based on real time
// ══════════════════════════════════════════════════════════
function checkNightMode() {
  var hour = new Date().getHours();
  var isNight = hour >= 20 || hour < 6;
  var wasNight = document.body.classList.contains("night-mode");
  document.body.classList.toggle("night-mode", isNight);
  // Override weather bar to show Moonlight at night
  var bar = document.getElementById("weatherBar");
  if (bar) {
    if (isNight) {
      bar.textContent = "\ud83c\udf19 Moonlight";
      bar.className = "weather-bar weather-moonlight";
    } else if (wasNight) {
      // Transitioning from night to day — restore weather
      renderWeather();
    }
  }
  // Re-apply background gradient for day/night transition
  if (isNight !== wasNight) applyBgStyle();
  return isNight;
}

// ══════════════════════════════════════════════════════════
// PARTICLES — butterflies + pollen (day), fireflies (night)
// ══════════════════════════════════════════════════════════
function initParticles() {
  // Day particles
  var dayPool = ["\ud83e\udd8b", "\u2727", "\ud83c\udf3e", "\ud83c\udf40"];
  for (var i = 0; i < 6; i++) {
    var el = document.createElement("div");
    el.className = "garden-particle";
    el.textContent = dayPool[Math.floor(Math.random() * dayPool.length)];
    var left = 10 + Math.random() * 80;
    var top = 30 + Math.random() * 50;
    var dur = 6 + Math.random() * 8;
    var delay = Math.random() * 10;
    var size = 0.6 + Math.random() * 0.5;
    el.style.cssText = "left:" + left + "%;top:" + top + "%;font-size:" + size + "em;animation-duration:" + dur + "s;animation-delay:-" + delay + "s;";
    el.dataset.dayParticle = "1";
    document.body.appendChild(el);
  }
}

function initFireflies() {
  for (var i = 0; i < 8; i++) {
    var el = document.createElement("div");
    el.className = "firefly";
    var left = 5 + Math.random() * 90;
    var dur = 8 + Math.random() * 12;
    var delay = Math.random() * 15;
    el.style.cssText = "left:" + left + "%;bottom:10%;animation-duration:" + dur + "s;animation-delay:-" + delay + "s;";
    el.dataset.firefly = "1";
    document.body.appendChild(el);
  }
}

function updateParticleVisibility() {
  var isNight = document.body.classList.contains("night-mode");
  document.querySelectorAll("[data-day-particle]").forEach(function(el) {
    el.style.display = isNight ? "none" : "";
  });
  document.querySelectorAll("[data-firefly]").forEach(function(el) {
    el.style.display = isNight ? "" : "none";
  });
}

// ══════════════════════════════════════════════════════════
// NPC DIALOGUE VARIETY
// ══════════════════════════════════════════════════════════
var NPC_DIALOGUES = [
  "I'd love a {flower}!",
  "My garden needs a {flower}\u2026",
  "Do you have a {flower}? I'll pay well!",
  "A {flower} would make my day!",
  "I'm looking for a beautiful {flower}",
  "My partner asked for a {flower} \u2014 help!",
  "Wedding flowers! Need a {flower}!",
  "Can I buy a {flower}? Pretty please!",
  "I've been searching everywhere for a {flower}!",
  "A little {flower} for my windowsill?",
];
var VIP_DIALOGUES = [
  "I'm a collector \u2014 TOP coin for a {flower}!",
  "Money is no object. I need a {flower}!",
  "Special order: one {flower}, price is yours!",
];

function getNPCDialogue(flowerName, isVip) {
  var pool = isVip ? VIP_DIALOGUES : NPC_DIALOGUES;
  var template = pool[Math.floor(Math.random() * pool.length)];
  return template.replace("{flower}", flowerName);
}

// ══════════════════════════════════════════════════════════
// DAILY LOGIN GIFT
// ══════════════════════════════════════════════════════════
function checkDailyLogin() {
  var today = new Date().toISOString().slice(0, 10);
  if (G.lastLoginDate === today) return; // already claimed today

  // Calculate streak
  if (!G.lastLoginDate) {
    G.loginStreak = 0;
  } else {
    var lastDate = new Date(G.lastLoginDate);
    var todayDate = new Date(today);
    var diffDays = Math.round((todayDate - lastDate) / 86400000);
    if (diffDays === 1) {
      // Consecutive day
    } else {
      G.loginStreak = 0; // streak broken
    }
  }

  G.loginStreak = (G.loginStreak || 0) + 1;
  if (G.loginStreak > 7) G.loginStreak = 1; // reset after day 7

  // Determine reward
  var isDay7 = G.loginStreak === 7;
  var rewardPkt = isDay7 ? "rare" : "common";
  var rewardCoins = isDay7 ? 25 : 5 * G.loginStreak;

  // Show login modal
  showLoginGiftModal(G.loginStreak, rewardPkt, rewardCoins, today);
}

function showLoginGiftModal(streak, pktType, coins, today) {
  // Create a standalone overlay (don't reuse tutorial overlay)
  var overlay = document.createElement("div");
  overlay.className = "overlay tutorial-overlay on";
  overlay.style.zIndex = "99998";
  document.body.appendChild(overlay);

  var content = document.createElement("div");
  content.className = "login-gift-card";

  var title = document.createElement("div");
  title.className = "tutorial-title";
  title.textContent = "\ud83c\udf1f Daily Gift!";
  content.appendChild(title);

  // Streak dots
  var dotsWrap = document.createElement("div");
  dotsWrap.className = "login-streak";
  for (var i = 1; i <= 7; i++) {
    var dot = document.createElement("div");
    dot.className = "streak-dot" + (i < streak ? " filled" : "") + (i === streak ? " today" : "");
    dot.textContent = i === 7 ? "\u2605" : i;
    dotsWrap.appendChild(dot);
  }
  content.appendChild(dotsWrap);

  var reward = document.createElement("div");
  reward.className = "login-reward";
  reward.textContent = (streak === 7 ? "\ud83d\udc8e Rare" : "\ud83d\udce6 Common") + " Packet + " + coins + " coins!";
  content.appendChild(reward);

  var btn = document.createElement("button");
  btn.className = "btn-login-claim";
  btn.textContent = "Claim!";
  btn.onclick = function() {
    G.pkt[pktType]++;
    G.coins += coins;
    G.totalCoins += coins;
    G.lastLoginDate = today;
    updateHUD();
    saveG();
    overlay.remove();
    playSound("achieve");
    haptic(50);
    toast("Day " + streak + " gift claimed! " + (streak === 7 ? "\ud83d\udc8e" : "\ud83d\udce6"), 2000);
  };
  content.appendChild(btn);

  // Hide tutorial card, show login card
  overlay.appendChild(content);
}


// ══════════════════════════════════════════════════════════
// GARDEN COSMETICS
// ══════════════════════════════════════════════════════════
var GARDEN_DECORS = [
  { id: "fence", name: "Wooden Fence", icon: "\ud83c\udf3e", type: "fence" },
  { id: "birdbath", name: "Bird Bath", icon: "\ud83d\udc26", type: "item", pos: { top: "-20px", right: "12px" } },
  { id: "gnome", name: "Garden Gnome", icon: "\ud83c\udf44", type: "item", pos: { bottom: "8px", left: "12px" } },
  { id: "butterfly_jar", name: "Butterfly Jar", icon: "\ud83e\udd8b", type: "item", pos: { top: "-20px", left: "12px" } },
  { id: "windchime", name: "Wind Chime", icon: "\ud83c\udfb5", type: "item", pos: { top: "-24px", left: "48%" } },
];

function applyGardenDecor() {
  // Remove old decor item elements only (not the wrapper or grid)
  document.querySelectorAll(".garden-decor-item").forEach(function(el) { el.remove(); });
  var grid = document.getElementById("gardenGrid");
  var wrapper = document.getElementById("gardenWrap");
  if (!grid) return;
  grid.classList.remove("garden-fence");

  if (!G.gardenDecor || !G.gardenDecor.length) return;

  G.gardenDecor.forEach(function(id) {
    var decor = GARDEN_DECORS.find(function(d) { return d.id === id; });
    if (!decor) return;
    if (decor.type === "fence") {
      grid.classList.add("garden-fence");
    } else if (decor.type === "item" && decor.pos && wrapper) {
      var el = document.createElement("div");
      el.className = "garden-decor-item";
      el.textContent = decor.icon;
      Object.assign(el.style, decor.pos);
      wrapper.appendChild(el);
    }
  });
}

setInterval(gameTick, 1000);

// Night mode check every 60s
setInterval(function() {
  checkNightMode();
  updateParticleVisibility();
}, 60000);

// ══════════════════════════════════════════════════════════
// CUSTOMIZE MODAL
// ══════════════════════════════════════════════════════════
var POT_STYLES = [
  { id: "terracotta", name: "Terracotta", icon: "\ud83c\udffa", unlock: "default" },
  { id: "ceramic", name: "Ceramic", icon: "\ud83e\udd63", unlock: "25% Journal" },
  { id: "golden", name: "Golden", icon: "\ud83c\udfc6", unlock: "75% Journal" },
];
var BG_STYLES = [
  { id: "default", name: "Parchment", icon: "\ud83d\udcdc", unlock: "default" },
  { id: "garden", name: "Garden", icon: "\ud83c\udf3f", unlock: "50% Journal" },
  { id: "enchanted", name: "Enchanted", icon: "\u2728", unlock: "100% Journal" },
  { id: "sunset", name: "Sunset", icon: "\ud83c\udf05", unlock: "10 sales" },
  { id: "ocean", name: "Ocean Breeze", icon: "\ud83c\udf0a", unlock: "25 blooms" },
  { id: "autumn", name: "Autumn", icon: "\ud83c\udf42", unlock: "15 fusions" },
  { id: "night", name: "Starry Night", icon: "\u2b50", unlock: "5 days played" },
];

function isPotUnlocked(id) {
  if (id === "terracotta") return true;
  var pct = getJournalPercent();
  if (id === "ceramic") return pct >= 25;
  if (id === "golden") return pct >= 75;
  return false;
}
function isBgUnlocked(id) {
  if (id === "default") return true;
  var pct = getJournalPercent();
  if (id === "garden") return pct >= 50;
  if (id === "enchanted") return pct >= 100;
  if (id === "sunset") return G.npcSales >= 10;
  if (id === "ocean") return G.totalBlooms >= 25;
  if (id === "autumn") return G.hybridCount >= 15;
  if (id === "night") return G.daysPlayed && G.daysPlayed.length >= 5;
  return false;
}

function openCustomizeModal() {
  var content = document.getElementById("customContent");
  content.textContent = "";

  // Pot styles section
  var potSec = document.createElement("div");
  potSec.className = "custom-section";
  var potTitle = document.createElement("div");
  potTitle.className = "custom-section-title";
  potTitle.textContent = "Pot Style";
  potSec.appendChild(potTitle);
  var potGrid = document.createElement("div");
  potGrid.className = "custom-grid";
  POT_STYLES.forEach(function(ps) {
    var unlocked = isPotUnlocked(ps.id);
    var active = G.potStyle === ps.id;
    var card = document.createElement("div");
    card.className = "custom-card" + (active ? " active" : "") + (unlocked ? "" : " locked");
    var icon = document.createElement("div");
    icon.className = "custom-card-icon";
    icon.textContent = ps.icon;
    card.appendChild(icon);
    var name = document.createElement("div");
    name.className = "custom-card-name";
    name.textContent = ps.name;
    card.appendChild(name);
    var status = document.createElement("div");
    status.className = "custom-card-status";
    status.textContent = active ? "\u2713 Equipped" : unlocked ? "Tap to equip" : "\ud83d\udd12 " + ps.unlock;
    card.appendChild(status);
    if (unlocked && !active) {
      card.onclick = function() {
        G.potStyle = ps.id;
        saveG();
        renderGarden();
        openCustomizeModal();
        toast("Pot style: " + ps.name + "!", 1500);
      };
    }
    potGrid.appendChild(card);
  });
  potSec.appendChild(potGrid);
  content.appendChild(potSec);

  // Background section
  var bgSec = document.createElement("div");
  bgSec.className = "custom-section";
  var bgTitle = document.createElement("div");
  bgTitle.className = "custom-section-title";
  bgTitle.textContent = "Background";
  bgSec.appendChild(bgTitle);
  var bgGrid = document.createElement("div");
  bgGrid.className = "custom-grid";
  BG_STYLES.forEach(function(bs) {
    var unlocked = isBgUnlocked(bs.id);
    var active = G.bgStyle === bs.id;
    var card = document.createElement("div");
    card.className = "custom-card" + (active ? " active" : "") + (unlocked ? "" : " locked");
    var icon = document.createElement("div");
    icon.className = "custom-card-icon";
    icon.textContent = bs.icon;
    card.appendChild(icon);
    var name = document.createElement("div");
    name.className = "custom-card-name";
    name.textContent = bs.name;
    card.appendChild(name);
    var status = document.createElement("div");
    status.className = "custom-card-status";
    status.textContent = active ? "\u2713 Equipped" : unlocked ? "Tap to equip" : "\ud83d\udd12 " + bs.unlock;
    card.appendChild(status);
    if (unlocked && !active) {
      card.onclick = function() {
        G.bgStyle = bs.id;
        applyBgStyle();
        saveG();
        openCustomizeModal();
        toast("Background: " + bs.name + "!", 1500);
      };
    }
    bgGrid.appendChild(card);
  });
  bgSec.appendChild(bgGrid);
  content.appendChild(bgSec);

  // Garden decorations section
  var decorSec = document.createElement("div");
  decorSec.className = "custom-section";
  var decorTitle = document.createElement("div");
  decorTitle.className = "custom-section-title";
  decorTitle.textContent = "Garden Decorations";
  decorSec.appendChild(decorTitle);
  var decorGrid = document.createElement("div");
  decorGrid.className = "custom-grid";
  GARDEN_DECORS.forEach(function(d) {
    var equipped = G.gardenDecor && G.gardenDecor.includes(d.id);
    // Unlock: fence at 3 pots, others at various achievement counts
    var unlocked = G.achievements && G.achievements.length >= (GARDEN_DECORS.indexOf(d) * 5 + 3);
    if (d.id === "fence") unlocked = G.plots.length >= 3;
    var card = document.createElement("div");
    card.className = "custom-card" + (equipped ? " active" : "") + (unlocked ? "" : " locked");
    var icon = document.createElement("div");
    icon.className = "custom-card-icon";
    icon.textContent = d.icon;
    card.appendChild(icon);
    var nm = document.createElement("div");
    nm.className = "custom-card-name";
    nm.textContent = d.name;
    card.appendChild(nm);
    var st = document.createElement("div");
    st.className = "custom-card-status";
    st.textContent = equipped ? "\u2713 Equipped" : unlocked ? "Tap to equip" : "\ud83d\udd12 Locked";
    card.appendChild(st);
    if (unlocked) {
      card.onclick = function() {
        if (!G.gardenDecor) G.gardenDecor = [];
        if (equipped) {
          G.gardenDecor = G.gardenDecor.filter(function(x) { return x !== d.id; });
          if (d.type === "fence") document.getElementById("gardenGrid").classList.remove("garden-fence");
        } else {
          G.gardenDecor.push(d.id);
        }
        saveG();
        applyGardenDecor();
        openCustomizeModal();
        playSound("click");
        toast(equipped ? d.name + " removed" : d.name + " equipped!", 1200);
      };
    }
    decorGrid.appendChild(card);
  });
  decorSec.appendChild(decorGrid);
  content.appendChild(decorSec);

  openModal("customOverlay");
}

// ══════════════════════════════════════════════════════════
// TUTORIAL SYSTEM
// ══════════════════════════════════════════════════════════
// ── Short intro tutorial (3 pages) — details shown as contextual tips later ──
var TUTORIAL_STEPS = [
  { icon: "\ud83c\udf3a", title: "Welcome!", desc: "Grow flowers, sell to customers, and build your dream garden. Open packets for seeds, plant in pots, water to bloom!" },
  { icon: "\ud83d\udcb0", title: "Earn Coins", desc: "Customers are your main income! Store bloomed flowers in the Garden House, then tap a customer to sell. Tap the ? button (top-right) anytime for a full guide." },
  { icon: "\ud83d\udcf1", title: "Install as App", desc: "Play full-screen without the browser bar! On iPhone: tap Share \u2192 'Add to Home Screen'. On Android: tap the Install popup or menu \u2192 'Install app'." },
];

// ── Contextual tips — shown ONCE when player first encounters each feature ──
var CONTEXT_TIPS = {
  firstBloom:    "Your first bloom! Tap it to store, fuse, or leave. Customers pay well for flowers!",
  firstCustomer: "A customer! Store bloomed flowers in the Garden House, then tap a customer to sell.",
  firstWeather:  "Weather changed! Each type affects growth differently. Tap ? for details.",
  firstFusion:   "Two bloomed flowers next to each other! Tap one to fuse \u2014 check the Fusion Guide in the Journal.",
  firstVip:      "VIP customer (purple glow)! They pay 8x. Save your best flowers for them!",
  firstMystery:  "Mystery customer (?) \u2014 they want an undiscovered flower. Discover more to fill their order!",
  firstWildcard: "Wildcard customer \u2014 accepts ANY flower of that rarity!",
  firstShop:     "The shop! Buy packets for seeds, new pots to expand, and water upgrades.",
  firstMusic:    "Music is on! Tap \ud83c\udfb5 to adjust volume or switch between 10 songs.",
};

function showContextTip(key) {
  if (!G.contextTips) G.contextTips = {};
  if (G.contextTips[key]) return;
  var msg = CONTEXT_TIPS[key];
  if (!msg) return;
  G.contextTips[key] = true;
  saveG();
  toast("\ud83d\udca1 " + msg, 5000);
}
var _tutStep = 0;

function showTutorial() {
  if (G.tutorialDone) return;
  _tutStep = 0;
  renderTutorialStep();
  document.getElementById("tutorialOverlay").classList.add("on");
  document.getElementById("tutorialSkip").onclick = closeTutorial;
  document.getElementById("tutorialNext").onclick = nextTutorialStep;
}
function renderTutorialStep() {
  var s = TUTORIAL_STEPS[_tutStep];
  document.getElementById("tutorialStep").textContent = (_tutStep + 1) + "/" + TUTORIAL_STEPS.length;
  document.getElementById("tutorialIcon").textContent = s.icon;
  document.getElementById("tutorialTitle").textContent = s.title;
  document.getElementById("tutorialDesc").textContent = s.desc;
  var btn = document.getElementById("tutorialNext");
  btn.textContent = _tutStep === TUTORIAL_STEPS.length - 1 ? "Let's Go!" : "Next";
}
function nextTutorialStep() {
  _tutStep++;
  if (_tutStep >= TUTORIAL_STEPS.length) {
    closeTutorial();
    return;
  }
  renderTutorialStep();
}
function closeTutorial() {
  document.getElementById("tutorialOverlay").classList.remove("on");
  G.tutorialDone = true;
  saveG();
  // Show daily login after tutorial
  setTimeout(function() { checkDailyLogin(); }, 300);
}

// ══════════════════════════════════════════════════════════
// HELP GUIDE — detailed game manual
// ══════════════════════════════════════════════════════════
var HELP_PAGES = [
  {
    title: "Getting Started",
    html: '<h3>Your Flower Shop</h3>'
      + '<p>You run a flower shop! Your goal is to grow flowers, sell them to customers, and expand your garden.</p>'
      + '<p>You start with <b>2 pots</b>, <b>2 seed packets</b>, and <b>5 coins</b>. Open packets to get seeds, plant them in pots, water them to bloom, then sell to customers for profit.</p>'
      + '<div class="help-tip">Customers are your main source of income. Always keep bloomed flowers in your Garden House ready to sell!</div>'
  },
  {
    title: "Water & Growing",
    html: '<h3>How Watering Works</h3>'
      + '<p><b>Water trickles in</b> automatically every 45 seconds. You can also tap the bucket to swipe-fill it faster, or tap drifting clouds for +2 bonus water.</p>'
      + '<p>Each flower needs <b>3 waters per growth stage</b> (Seed \u2192 Sprout \u2192 Growing \u2192 Bloomed). That\'s 9 waters total to bloom.</p>'
      + '<h3>Weather Effects on Growth</h3>'
      + '<p><b>Sunny:</b> Only 2 waters per stage (faster growth!)</p>'
      + '<p><b>Rainy:</b> Free water on change + auto-water every 60s</p>'
      + '<p><b>Drought:</b> 5 waters per stage (slower!)</p>'
      + '<p><b>Snowy:</b> Normal watering, but frost can nip growing flowers and remove 1 water</p>'
  },
  {
    title: "Making Money",
    html: '<h3>Selling to Customers</h3>'
      + '<p>Customers visit every 35\u201390 seconds (up to 3 at a time). Three types:</p>'
      + '<p><b>Regular (70%)</b> \u2014 Ask for a flower you\'ve already discovered. No spoilers!</p>'
      + '<p><b>Mystery (20%)</b> \u2014 Show a "?" silhouette. They want an undiscovered flower \u2014 discover more to find out what!</p>'
      + '<p><b>Wildcard (10%)</b> \u2014 Accept ANY flower of a specific rarity. Great for clearing inventory!</p>'
      + '<h3>Reward Multipliers</h3>'
      + '<p>Common: <b>2.5x</b> | Uncommon: <b>3x</b> | Rare: <b>4x</b> | Legendary: <b>5x</b></p>'
      + '<p><b>VIP customers</b> (8% chance, purple glow) pay <b>8x</b>!</p>'
      + '<div class="help-tip">Keep 3-4 flowers in Garden House at all times. Wildcard customers pay slightly less but accept anything of that rarity!</div>'
  },
  {
    title: "Packets & Seeds",
    html: '<h3>Seed Packets</h3>'
      + '<p>Buy packets from the Shop to get random seeds:</p>'
      + '<p><b>Common</b> (12 coins) \u2014 Tulips, daisies, violets. Low sell value but easy to grow.</p>'
      + '<p><b>Uncommon</b> (35 coins) \u2014 Roses, poppies, cherry blossoms. Better customer prices.</p>'
      + '<p><b>Rare</b> (80 coins) \u2014 Orchids, golden iris. Customers pay top coin.</p>'
      + '<p><b>Legendary</b> (160 coins) \u2014 Blue Rose, Golden Rose. Extremely valuable to VIP customers.</p>'
      + '<div class="help-tip">Invest in better packets early \u2014 one rare flower sold to a customer pays for the packet and more.</div>'
  },
  {
    title: "Flower Fusion",
    html: '<h3>Creating New Flowers</h3>'
      + '<p>When two <b>bloomed flowers sit in adjacent pots</b> (side by side or above/below), you can fuse them!</p>'
      + '<p>Tap a bloomed flower \u2192 Choose "Fuse" \u2192 Pick a neighbor. Both flowers are consumed and you get a new seed.</p>'
      + '<h3>Breeding Recipes</h3>'
      + '<p>There are <b>20 pre-defined recipe combos</b> (e.g., Rose + Tulip = Sunset Rose). Open the <b>Fusion Guide</b> from the Journal to see hints!</p>'
      + '<h3>Mutations</h3>'
      + '<p>Every fusion has a <b>5% mutation chance</b> \u2014 you get a unique color variant with a special name like "Vivid Sunset Rose". Collect them all!</p>'
      + '<div class="help-tip">Hybrids can\'t drop from packets \u2014 they\'re exclusive to breeding. Great for completing your Journal!</div>'
  },
  {
    title: "Weather System",
    html: '<h3>Four Weather Types</h3>'
      + '<p>Weather changes every 2\u20135 minutes and affects your whole garden:</p>'
      + '<p><b>Sunny</b> \u2600\ufe0f \u2014 Faster growth (2 waters/stage instead of 3). Flowers sway more.</p>'
      + '<p><b>Rainy</b> \ud83c\udf27\ufe0f \u2014 Free water! +1 on change, +1 every 60s. Puddles appear under pots.</p>'
      + '<p><b>Drought</b> \ud83c\udf35 \u2014 Needs 5 waters/stage. Conserve water carefully!</p>'
      + '<p><b>Snowy</b> \u2744\ufe0f \u2014 Frost can nip growing flowers, removing 1 water progress. Snowflakes fall and frost appears on pot rims.</p>'
      + '<div class="help-tip">Plan ahead: grow easy flowers during drought, save rare seeds for sunny weather!</div>'
  },
  {
    title: "Garden House & Journal",
    html: '<h3>Garden House</h3>'
      + '<p>When a flower blooms, tap it and choose "Store in Garden House". Stored flowers are ready to sell to customers.</p>'
      + '<p>Flowers in the Garden House <b>appreciate in value over time</b> \u2014 the longer they\'re stored, the more they\'re worth!</p>'
      + '<h3>Flower Journal</h3>'
      + '<p>The Journal tracks every flower species you\'ve discovered. There are <b>147+ flowers</b> across Common, Uncommon, Rare, Legendary, and Hybrid tiers.</p>'
      + '<p>Completing discovery milestones unlocks <b>pot styles, backgrounds, and garden decorations</b> in the Style menu.</p>'
  },
  {
    title: "Achievements & Daily",
    html: '<h3>40 Achievements</h3>'
      + '<p>Earn achievements for milestones like first bloom, 25 customer sales, discovering 50 flowers, etc. Each achievement rewards <b>bonus coins</b>.</p>'
      + '<h3>Daily Login Gifts</h3>'
      + '<p>Come back every day for streak rewards! Day 1\u20136: Common packet + coins. <b>Day 7: Rare packet + 25 coins!</b> Streak resets if you miss a day.</p>'
      + '<h3>Safety Net</h3>'
      + '<p>If you ever run completely out of coins, packets, seeds, and flowers, a kind neighbor will leave you a free packet and some coins to get back on your feet.</p>'
  },
  {
    title: "Music & Tips",
    html: '<h3>Music & Sound</h3>'
      + '<p>Tap <b>\ud83c\udfb5</b> to open a music popup with ON/OFF toggle and volume slider. Tap <b>\ud83d\udd0a</b> for the same with sound effects.</p>'
      + '<p>Two soundtracks: <b>Groovy Garden</b> (upbeat, plays on sunny days) and <b>Yurie\'s Garden</b> (cozy, plays during rain/snow/drought). Each has 3-5 mood variations that rotate every 5 minutes.</p>'
      + '<p>Rain drops are a <b>sound effect</b> (controlled by SFX volume), not music.</p>'
      + '<p>The <b>\ud83d\udd0a button</b> toggles sound effects (water, bloom, sale, weather sounds).</p>'
      + '<h3>Pro Tips</h3>'
      + '<div class="help-tip">Keep 3\u20134 flowers in Garden House at all times \u2014 customers often request what you have!</div>'
      + '<div class="help-tip">Buy uncommon packets early. The customer reward multiplier (3x) pays for the packet in one sale.</div>'
      + '<div class="help-tip">VIP customers (purple glow) are rare but pay 8x. Always have a rare/legendary flower ready for them!</div>'
      + '<div class="help-tip">Fuse during sunny weather \u2014 you\'ll regrow consumed flowers faster.</div>'
  },
];
var _helpPage = 0;

function openHelpGuide() {
  _helpPage = 0;
  renderHelpPage();
  openModal("helpOverlay");
  playSound("click");
}

function renderHelpPage() {
  var page = HELP_PAGES[_helpPage];
  document.getElementById("helpTitle").textContent = page.title;
  var content = document.getElementById("helpContent");
  content.textContent = "";
  // Safe: html content is hardcoded string literals, not user input
  var temp = document.createElement("div");
  temp.innerHTML = page.html;
  while (temp.firstChild) content.appendChild(temp.firstChild);
  document.getElementById("helpPageNum").textContent = (_helpPage + 1) + "/" + HELP_PAGES.length;
  document.getElementById("helpPrev").disabled = _helpPage === 0;
  document.getElementById("helpNext").disabled = _helpPage === HELP_PAGES.length - 1;
  // Nav dots
  var nav = document.getElementById("helpNav");
  nav.textContent = "";
  for (var i = 0; i < HELP_PAGES.length; i++) {
    var dot = document.createElement("div");
    dot.className = "help-nav-dot" + (i === _helpPage ? " active" : "");
    dot.dataset.idx = i;
    dot.onclick = function() { _helpPage = parseInt(this.dataset.idx); renderHelpPage(); };
    nav.appendChild(dot);
  }
}

function helpPage(dir) {
  _helpPage = Math.max(0, Math.min(HELP_PAGES.length - 1, _helpPage + dir));
  renderHelpPage();
  playSound("click");
}

(function wireBtns() {
  const MAP = {
    btnOpenPkt: openPktModal,
    btnJournal: openJournalModal,
    btnShop: openShopModal,
    btnInv: openInventoryModal,
    btnAchieve: openAchievementsModal,
    btnCustom: openCustomizeModal,
  };
  Object.entries(MAP).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Restore onclick for PC
    el.onclick = fn;
    // touchstart for iOS — fires before any scroll detection, preventDefault
    // kills both the ghost click and any scroll-gesture interpretation
    el.addEventListener(
      "touchstart",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        getAudioCtx(); // unlock AudioContext on first touch (iOS requirement)
        this.classList.add("tapped");
        setTimeout(() => this.classList.remove("tapped"), 150);
        playSound("click");
        fn();
      },
      { passive: false },
    );
  });
})();
function toast(msg, ms = 2000) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), ms);
}
function spawnSparkle(x, y, e = "✨") {
  const el = document.createElement("div");
  el.className = "sparkle";
  el.textContent = e;
  el.style.cssText = `left:${x}px;top:${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}
function spawnSplash(x, y) {
  const el = document.createElement("div");
  el.className = "splash";
  el.textContent = "💧";
  el.style.cssText = `left:${x}px;top:${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 680);
}
function multiSparkle() {
  const pool = ["✨", "💙", "⭐", "💫", "🌟", "💎", "🔮", "🫧"];
  for (let i = 0; i < 16; i++)
    setTimeout(() => {
      spawnSparkle(
        window.innerWidth * (0.08 + Math.random() * 0.84),
        window.innerHeight * (0.1 + Math.random() * 0.7),
        pool[Math.floor(Math.random() * pool.length)],
      );
    }, i * 90);
}
// ══════════════════════════════════════════════════════════
// BLOOM PARTICLES — petal-colored burst when flower blooms
// ══════════════════════════════════════════════════════════
function spawnBloomParticles(plotEl, petalColor) {
  if (!plotEl) return;
  var rect = plotEl.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height * 0.3;
  // 8 petal particles + 4 sparkles
  for (var i = 0; i < 8; i++) {
    var el = document.createElement("div");
    el.className = "bloom-particle";
    var sz = 5 + Math.random() * 6;
    var angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.5;
    var dist = 25 + Math.random() * 35;
    var dx = Math.cos(angle) * dist;
    var dy = Math.sin(angle) * dist - 20; // bias upward
    var dur = 1.2 + Math.random() * 0.8;
    el.style.cssText = "left:" + cx + "px;top:" + cy + "px;width:" + sz + "px;height:" + sz + "px;background:" + petalColor + ";position:fixed;--bp-dx:" + dx + "px;--bp-dy:" + dy + "px;--bp-dur:" + dur + "s;animation-delay:" + (Math.random() * 0.15) + "s;";
    document.body.appendChild(el);
    el.addEventListener("animationend", function() { this.remove(); });
  }
  for (var j = 0; j < 4; j++) {
    var sp = document.createElement("div");
    sp.className = "bloom-sparkle";
    var angle2 = (Math.PI * 2 * j) / 4 + (Math.random() - 0.5) * 0.8;
    var dist2 = 15 + Math.random() * 25;
    var dx2 = Math.cos(angle2) * dist2;
    var dy2 = Math.sin(angle2) * dist2 - 15;
    var dur2 = 1 + Math.random() * 0.6;
    sp.textContent = ["✦", "✧", "·", "★"][j % 4];
    sp.style.cssText = "left:" + cx + "px;top:" + cy + "px;color:" + petalColor + ";position:fixed;--bp-dx:" + dx2 + "px;--bp-dy:" + dy2 + "px;--bp-dur:" + dur2 + "s;animation-delay:" + (0.1 + Math.random() * 0.2) + "s;";
    document.body.appendChild(sp);
    sp.addEventListener("animationend", function() { this.remove(); });
  }
}

function confettiBurst() {
  const colors = [
    "#f48fb1",
    "#ce93d8",
    "#90caf9",
    "#a5d6a7",
    "#ffe082",
    "#e91e63",
    "#f9a825",
  ];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    el.className = "confetti-bit";
    const x = window.innerWidth * (0.1 + Math.random() * 0.8);
    const y = window.innerHeight * (0.15 + Math.random() * 0.35);
    const sz = 6 + Math.random() * 9,
      dur = 1.2 + Math.random() * 1.5;
    el.style.cssText = `left:${x}px;top:${y}px;width:${sz}px;height:${sz + 2}px;background:${colors[Math.floor(Math.random() * colors.length)]};animation-duration:${dur}s;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 100);
  }
}

// ══════════════════════════════════════════════════════════
// CONSOLE COMMANDS — type G.help in browser console
// ══════════════════════════════════════════════════════════
Object.defineProperty(G, "help", {
  get: function() {
    console.log("%c Yurie's Flower Shop — Console Commands ", "background:#527a5f;color:#fff;font-weight:bold;padding:4px 8px;border-radius:4px;");
    console.log("");
    console.log("%cState Commands:", "color:#dbb05c;font-weight:bold;");
    console.log("  G.coins = 9999       — Set coins");
    console.log("  G.water = G.maxWater — Fill water");
    console.log("  G.pkt.common = 99    — Give packets (also: uncommon, rare, legendary)");
    console.log("  saveG()              — Save current state");
    console.log("");
    console.log("%cWeather:", "color:#dbb05c;font-weight:bold;");
    console.log('  G.weather = "sunny"; _currentWeatherFx = ""; renderWeather();');
    console.log('  G.weather = "rainy"; _currentWeatherFx = ""; renderWeather();');
    console.log('  G.weather = "snowy"; _currentWeatherFx = ""; renderWeather();');
    console.log('  G.weather = "drought"; _currentWeatherFx = ""; renderWeather();');
    console.log("");
    console.log("%cUnlock:", "color:#dbb05c;font-weight:bold;");
    console.log("  // Discover all flowers:");
    console.log('  Object.keys(FLOWERS).forEach(k => { if(!G.discovered.includes(k)) G.discovered.push(k); }); saveG();');
    console.log("  // Unlock all achievements:");
    console.log('  ACHIEVEMENTS.forEach(a => { if(!G.achievements.includes(a.id)) G.achievements.push(a.id); }); saveG();');
    console.log("  // Max stats:");
    console.log("  G.totalBlooms=200; G.npcSales=50; G.hybridCount=30; G.npcBestStreak=15; G.daysPlayed=['2026-01-01','2026-01-02','2026-01-03','2026-01-04','2026-01-05']; saveG();");
    console.log("");
    console.log("%cBackground:", "color:#dbb05c;font-weight:bold;");
    console.log('  G.bgStyle = "night"; applyBgStyle(); saveG();');
    console.log('  // Options: default, garden, enchanted, sunset, ocean, autumn, night');
    console.log("");
    console.log("%cMusic:", "color:#dbb05c;font-weight:bold;");
    console.log("  startAmbientMusic()   — Start music");
    console.log("  stopAmbientMusic()    — Stop music");
    console.log("  _currentMoodIdx = 2   — Switch mood (0-4)");
    console.log("");
    console.log("%cReset:", "color:#e57373;font-weight:bold;");
    console.log('  localStorage.removeItem("yurieGarden_v1"); location.reload();  — Full reset');
    console.log("");
    console.log("%cUI:", "color:#dbb05c;font-weight:bold;");
    console.log("  updateHUD(); renderGarden(); renderTray(); renderDrops();  — Refresh UI");
    console.log("  openHelpGuide()    — Open help guide");
    console.log("  openBreedGuide()   — Open breeding guide");
    console.log('  G.tutorialDone = false; saveG();  — Re-show tutorial on refresh');
    return "Type any command above in the console.";
  }
});
