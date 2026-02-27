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
};
const RARITY_LABEL = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "★ Rare",
  legendary: "✦ Legendary",
  unique: "✦✦ Unique ✦✦",
};
const STAGE_NAMES = ["🌰 Seed", "🌱 Sprout", "🌿 Growing", "🌸 Bloomed!"];
const STAGE_WATERS = 3,
  MAX_STAGE = 3;

const PKT_COST = { common: 10, uncommon: 30, rare: 55, legendary: 85 };
const PKT_LABEL = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  legendary: "✦ Legendary",
};
const PKT_ICON = { common: "📦", uncommon: "🌹", rare: "💎", legendary: "✨" };

let G = {
  coins: 10,
  pkt: { common: 3, uncommon: 0, rare: 0, legendary: 0 },
  seeds: [],
  seedId: 0,
  plots: Array(6)
    .fill(0)
    .map((_, i) => ({
      id: i,
      state: "empty",
      key: null,
      stage: 0,
      waters: 0,
      rewarded: false,
    })),
  water: 10,
  maxWater: 10,
  inventory: [],
  bloomPlot: null,
  openedKey: null,
  plantPlot: null,
  pendingPktType: "common",
  discovered: [],
  opening: false,
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
    });
    return true;
  } catch (e) {
    return false;
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
  return `<line x1="30" y1="92" x2="30" y2="${y2}" stroke="${S}" stroke-width="${sw}" stroke-linecap="round"/>`;
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

const FLOWER_RENDERERS = {
  radial: renderRadial,
  cup: renderCup,
  spike: renderSpike,
  star: renderStar,
  bell: renderBell,
  rosette: renderRosette,
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
    fn: "radial",
    n: 5,
    rx: 7,
    ry: 10,
    cy: 40,
    cR: 8,
    cFill: "#c62828",
    c2R: 6,
    c2Fill: "#fce4ec",
    leaves: true,
  },
  violet: {
    fn: "radial",
    n: 5,
    rx: 7.5,
    ry: 8,
    cy: 38,
    cR: 6,
    cFill: "#fdd835",
    c2R: 4,
    c2Fill: "#f9a825",
    leaves: true,
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
  iris: { fn: "star", n: 6, rx: 5.5, ry: 11, cy: 38, cR: 6, cFill: "#fdd835" },
  orchid: {
    fn: "star",
    n: 5,
    rx: 5.5,
    ry: 12,
    cy: 38,
    cR: 7,
    cFill: "#f06292",
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
  const f = FLOWERS[key],
    p = f.petal,
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
  initPetals();
  renderGarden();
  renderTray();
  renderDrops();
  updateHUD();
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
}
function potCardSVG(p) {
  // Terra cotta colours
  const rH = "#e8724e",
    rM = "#c9522a",
    rD = "#a83e18";
  const bM = "#c24e26",
    bS = "#7a3010";
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
  const lbl =
    p.state === "empty"
      ? ""
      : p.state === "bloomed"
        ? "\u2728 " + FLOWERS[p.key].name
        : STAGE_NAMES[p.stage];
  div.innerHTML =
    potCardSVG(p) + (lbl ? `<div class="pot-lbl">${lbl}</div>` : "");
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
  renderDrops();
  // Capture splash position and trigger animation before any DOM replacement
  const grid = document.getElementById("gardenGrid");
  const oldTile = grid.children[i];
  if (oldTile) {
    const r = oldTile.getBoundingClientRect();
    spawnSplash(r.left + r.width / 2, r.top + r.height / 3);
  }
  if (G.plots[i].waters >= STAGE_WATERS) {
    G.plots[i].waters = 0;
    G.plots[i].stage++;
    if (G.plots[i].stage >= MAX_STAGE) {
      G.plots[i].stage = MAX_STAGE;
      G.plots[i].state = "bloomed";
      if (!G.plots[i].rewarded) {
        G.pkt.common++;
        G.plots[i].rewarded = true;
        updateHUD();
      }
      saveG();
      // Animate old tile while bloom delay plays out
      if (oldTile) {
        oldTile.classList.add("watered");
        setTimeout(() => oldTile.classList.remove("watered"), 380);
      }
      setTimeout(() => {
        updatePlotCard(i);
        confettiBurst();
        openBloomModal(i);
      }, 350);
    } else {
      updatePlotCard(i);
      saveG();
      toast(`${STAGE_NAMES[G.plots[i].stage]} — keep watering! 🌿`, 1500);
      // Apply watered animation to the new tile
      if (grid.children[i]) {
        grid.children[i].classList.add("watered");
        setTimeout(() => { if (grid.children[i]) grid.children[i].classList.remove("watered"); }, 380);
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
      '<div class="tray-empty">Open a seed packet to start growing! 📦</div>';
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
  // render selector cards
  const types = ["common", "uncommon", "rare", "legendary"];
  document.getElementById("pktSelector").innerHTML = types
    .map((t) => {
      const cnt = G.pkt[t] || 0;
      return `<div class="pkt-sel-card pkt-${t}${cnt ? "" : " empty"}" onclick="selectPktType('${t}')">
      <span class="pkt-sel-icon">${PKT_ICON[t]}</span>
      <span class="pkt-sel-name">${PKT_LABEL[t]} Packet</span>
      <span class="pkt-sel-cnt${cnt ? "" : " none"}">×${cnt}</span>
    </div>`;
    })
    .join("");
  document.getElementById("pktSelector").style.display = "";
  document.getElementById("pktOpenWrap").style.display = "none";
  document.getElementById("pktResult").classList.remove("show");
  document.getElementById("pktTitle").textContent = "🎁 Open a Packet";
  openModal("pktOverlay");
}
function selectPktType(type) {
  if (!G.pkt[type] || G.opening) return;
  G.pendingPktType = type;
  G.opening = true;
  // Decrement and save immediately so rapid taps can't double-spend
  G.pkt[type]--;
  updateHUD();
  saveG();
  document.getElementById("pktSelector").style.display = "none";
  document.getElementById("pktTitle").textContent =
    `${PKT_ICON[type]} Open a ${PKT_LABEL[type]} Packet`;
  const card = document.getElementById("pktCardEl");
  card.className = `pkt-card t-${type}`;
  card.querySelector(".pkt-icon").textContent = PKT_ICON[type];
  document.getElementById("pktOpenWrap").style.display = "";
  document.getElementById("pktHint").style.display = "";
  setTimeout(() => {
    card.classList.add("shaking");
    setTimeout(() => {
      G.openedKey = weightedRandom(type);
      const f = FLOWERS[G.openedKey];
      document.getElementById("pktOpenWrap").style.display = "none";
      document.getElementById("resFlower").innerHTML =
        `<div style="width:100%;height:100%">${flowerSVG(G.openedKey, MAX_STAGE)}</div>`;
      document.getElementById("resName").textContent = f.name;
      const rl = document.getElementById("resRarity");
      rl.textContent = RARITY_LABEL[f.rarity];
      rl.className = `res-rarity ${f.rarity}`;
      const msgs = {
        common: "A lovely flower for your garden! 🌸",
        uncommon: "A beautiful find — how wonderful! 💕",
        rare: `✨ A rare ${f.name}! A stunning bloom, so hard to find! ✨`,
        legendary: `🌟 OH WOW! A legendary ${f.name}! One of the rarest flowers — just like you, one of a kind! 🌟`,
        unique: `💎 UNBELIEVABLE! A WHITE LILY — the UNIQUE flower! Only one in the entire garden. You are truly one of a kind! 🌟💎`,
      };
      document.getElementById("resMsg").textContent =
        msgs[f.rarity] || "A beautiful flower! 🌸";
      document.getElementById("pktResult").classList.add("show");
      G.opening = false;
      if (f.rarity === "legendary" || f.rarity === "unique") {
        multiSparkle();
      }
      if (f.rarity === "unique") confettiBurst();
      else spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.4, "✨");
    }, 540);
  }, 100);
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
  renderGarden();
  renderTray();
  saveG();
  toast(`${FLOWERS[key].name} planted! 💧 Water it to grow!`, 2000);
}

function openBloomModal(i) {
  G.bloomPlot = i;
  const f = FLOWERS[G.plots[i].key];
  document.getElementById("bloomFlEl").innerHTML = flowerSVG(G.plots[i].key, MAX_STAGE);
  document.getElementById("bloomTitle").textContent = `${f.name} is fully bloomed! 🎉`;

  // Rarity badge
  const badge = document.getElementById("bloomBadge");
  badge.textContent = RARITY_LABEL[f.rarity];
  badge.className = `bloom-badge ${f.rarity}`;

  // Atmospheric glow color keyed to rarity
  const glowColors = { common: "#9e9e9e", uncommon: "#ab47bc", rare: "#3949ab", legendary: "#ff8f00" };
  document.getElementById("bloomGlow").style.background = glowColors[f.rarity] || "#9e9e9e";

  // Rarity-correct sub message
  document.getElementById("bloomSub").textContent =
    f.rarity === "legendary"
      ? `✦ A legendary ${f.name} — one of the rarest blooms! Truly extraordinary! 🌟`
      : f.rarity === "rare"
        ? `★ A rare ${f.name} — gorgeous and hard to find! 💙`
        : f.rarity === "uncommon"
          ? `Your ${f.name.toLowerCase()} is absolutely stunning! 💕`
          : `Beautiful! Your ${f.name.toLowerCase()} is glowing! 🌸`;

  document.getElementById("btnSell").innerHTML =
    `💰 Sell for <span class="ic">C</span><span class="coin-val">${f.sell}</span>`;
  document.getElementById("btnSell").onclick = sellFlower;
  document.getElementById("btnStore").onclick = storeFlower;
  openModal("bloomOverlay");
}
function sellFlower() {
  if (G.bloomPlot === null) return;
  const key = G.plots[G.bloomPlot].key;
  const f = FLOWERS[key];
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.coins += f.sell;
  clearPlot(G.bloomPlot);
  closeModal("bloomOverlay");
  updateHUD();
  saveG();
  toast(`Sold for ${f.sell} coins! 💰`, 2000);
}
function storeFlower() {
  if (G.bloomPlot === null) return;
  const key = G.plots[G.bloomPlot].key;
  const f = FLOWERS[key];
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.seedId++;
  G.inventory.push({ key, uid: G.seedId });
  clearPlot(G.bloomPlot);
  closeModal("bloomOverlay");
  updateHUD();
  saveG();
  toast(`${f.name} stored in garden House! `, 2000);
}
function openInventoryModal() {
  const grid = document.getElementById("invGrid");
  const hdr = document.getElementById("invHeader");
  if (hdr)
    hdr.textContent = G.inventory.length
      ? `${G.inventory.length} flower${G.inventory.length !== 1 ? "s" : ""} in Garden House`
      : "Garden House is empty";
  grid.innerHTML = "";
  if (!G.inventory.length) {
    grid.innerHTML =
      '<div class="tray-empty">Your Garden House is empty.<br>Store bloomed flowers to keep them! 🌸</div>';
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
    card.innerHTML =
      `<div class="inv-fl">${flowerSVG(item.key, MAX_STAGE)}</div>` +
      `<div class="inv-name">${f.name}</div>` +
      `<div class="inv-badge ${f.rarity}">${rarLabel}</div>` +
      `<div class="inv-sell-val"><span class="ic">C</span>${f.sell}</div>` +
      `<button class="btn-inv-sell" onclick="sellFromInventory(${item.uid})">💰 Sell</button>`;
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
  renderGarden();
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
  ];
  const grid = document.getElementById("jnlGrid");
  grid.innerHTML = "";
  const unlocked = order.filter((k) => G.discovered.includes(k)).length;
  document.getElementById("jnlProg").textContent =
    `${unlocked} / ${order.length} flowers discovered`;
  order.forEach((key) => {
    const f = FLOWERS[key];
    const known = G.discovered.includes(key);
    const card = document.createElement("div");
    card.className = "jnl-card" + (known ? "" : " jlocked");
    const svgHtml = flowerSVG(key, 3);
    card.innerHTML = `
      <div class="jnl-svg${known ? "" : " jsilhouette"}">${svgHtml}</div>
      <div class="jnl-name${known ? "" : " jlocked"}">${known ? f.name : "??????"}</div>
      <span class="jnl-badge ${f.rarity}">${RARITY_LABEL[f.rarity]}</span>
      <div class="jnl-sell${known ? "" : " jhide"}"><span class="ic" style="width:13px;height:13px;font-size:.6em">C</span>${f.sell}</div>
    `;
    grid.appendChild(card);
  });
  openModal("journalOverlay");
}
function openShopModal() {
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
  saveG();
  toast(`${PKT_ICON[type]} ${PKT_LABEL[type]} Packet bought!`, 1600);
}

// .tbtn already has touch-action:manipulation so iOS fires click immediately (no 300ms delay)
// We use a time guard on backdrop-dismiss to stop any stray click from closing a freshly opened modal
let _modalOpenTime = 0;
function openModal(id) {
  document.querySelectorAll(".overlay.on").forEach((o) => {
    if (o.id !== id) o.classList.remove("on");
  });
  document.getElementById(id).classList.add("on");
  _modalOpenTime = Date.now();
  if (id !== "pktOverlay") G.opening = false;
}
function closeModal(id) {
  document.getElementById(id).classList.remove("on");
}
// Backdrop dismiss — handles both click (desktop) and touchstart (mobile)
function _backdropDismiss(o, e) {
  if (e.target !== o) return;
  if (Date.now() - _modalOpenTime < 300) return;
  e.preventDefault();
  o.classList.remove("on");
  if (o.id === "pktOverlay") G.opening = false;
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
function weightedRandom(type = "common") {
  const pool = PKT_POOLS[type] || PKT_POOLS.common;
  const keys = Object.keys(pool);
  const total = keys.reduce((s, k) => s + pool[k], 0);
  let r = Math.random() * total;
  for (const k of keys) {
    r -= pool[k];
    if (r <= 0) return k;
  }
  return keys.at(-1);
}

// ── Valve wheel ─────────────────────────────────────────────────────────────
(function setupValve() {
  const svg = document.getElementById("valveSvg");
  const lbl = document.getElementById("valveLabel");
  const bar = document.getElementById("valveProgFill");
  const SPINS_NEEDED = 5; // kept for reference, no longer used
  let tracking = false,
    lastAngle = 0,
    accumulated = 0,
    completedSpins = 0,
    visualRot = 0;

  // Init label with current water
  (function initLabel() {
    const l = document.getElementById("valveLabel");
    if (l)
      l.textContent =
        G.water >= G.maxWater
          ? "Tank full! 💧"
          : `${G.water}/${G.maxWater} water 💧`;
  })();

  function angleFrom(cx, cy, ex, ey) {
    return (Math.atan2(ey - cy, ex - cx) * 180) / Math.PI;
  }
  function center() {
    const r = svg.getBoundingClientRect();
    return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
  }
  function applyDelta(delta) {
    if (Math.abs(delta) > 90) return;
    accumulated += Math.abs(delta);
    visualRot += delta;
    svg.style.transform = `rotate(${visualRot}deg)`;
    const newSpins = Math.floor(accumulated / 360);
    // Update progress bar: fraction of current rotation
    const rotProgress = (accumulated % 360) / 360;
    bar.style.width = (rotProgress * 100).toFixed(1) + "%";
    if (newSpins > completedSpins) {
      completedSpins = newSpins;
      if (G.water < G.maxWater) {
        G.water = Math.min(G.maxWater, G.water + 1);
        renderDrops();
        saveG();
        spawnSparkle(window.innerWidth / 2, window.innerHeight * 0.42, "💧");
        toast(
          G.water >= G.maxWater
            ? "Watering can is full! 💧"
            : `+1 water from spinning! 💧 (${G.water}/${G.maxWater})`,
          1400,
        );
      } else {
        toast("Watering can is full! 💧", 1200);
      }
      lbl.textContent =
        G.water >= G.maxWater
          ? "Tank full! 💧"
          : `${G.water}/${G.maxWater} water 💧`;
    } else {
      lbl.textContent =
        G.water >= G.maxWater
          ? "Tank full! 💧"
          : `${G.water}/${G.maxWater} water 💧`;
    }
  }

  // Pointer events — unified touch+mouse, SVG-scoped, no document-level non-passive listener
  svg.addEventListener(
    "pointerdown",
    (e) => {
      svg.setPointerCapture(e.pointerId);
      const { cx, cy } = center();
      lastAngle = angleFrom(cx, cy, e.clientX, e.clientY);
      tracking = true;
      e.preventDefault();
    },
    { passive: false },
  );
  svg.addEventListener("pointermove", (e) => {
    if (!tracking) return;
    const { cx, cy } = center();
    const a = angleFrom(cx, cy, e.clientX, e.clientY);
    let d = a - lastAngle;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    applyDelta(d);
    lastAngle = a;
  });
  svg.addEventListener("pointerup", () => {
    tracking = false;
  });
  svg.addEventListener("pointercancel", () => {
    tracking = false;
  });
})();

// ── Wire top-bar buttons via touchstart (most reliable on iOS) ─────────────
// touchstart+preventDefault fires IMMEDIATELY, kills the 300ms delay,
// kills ghost clicks, AND prevents scroll-detection interference.
// onclick stays on the element as the PC/desktop fallback.
(function wireBtns() {
  const MAP = {
    btnOpenPkt: openPktModal,
    btnJournal: openJournalModal,
    btnShop: openShopModal,
    btnInv: openInventoryModal,
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
        this.classList.add("tapped");
        setTimeout(() => this.classList.remove("tapped"), 150);
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
