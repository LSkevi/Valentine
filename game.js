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

const PKT_COST = { common: 8, uncommon: 25, rare: 60, legendary: 120 };
const POT_PRICES = [0, 0, 15, 40, 80, 150, 300, 500, 800, 1200, 2000, 3500];
const MAX_PLOTS = 12;
const WATER_CAP_UPGRADES = [
  { cap: 12, cost: 75, label: "Water Can +4 (12 max)" },
  { cap: 16, cost: 200, label: "Water Can +4 (16 max)" },
  { cap: 20, cost: 500, label: "Water Can +4 (20 max)" },
];
const WEATHER_TYPES = ["sunny", "rainy", "drought"];
const WEATHER_LABELS = { sunny: "\u2600\ufe0f Sunny", rainy: "\ud83c\udf27\ufe0f Rainy", drought: "\ud83c\udf35 Drought" };
const WEATHER_CLASSES = { sunny: "weather-sunny", rainy: "weather-rainy", drought: "weather-drought" };
const WEATHER_INTERVAL_MIN = 300000;
const WEATHER_INTERVAL_MAX = 900000;

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
  coins: 10,
  pkt: { common: 3, uncommon: 0, rare: 0, legendary: 0 },
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
  water: 8,
  maxWater: 8,
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
  showcase: [null, null, null],
  gardenDecor: [],
  soundEnabled: true,
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
    showcase: G.showcase,
    gardenDecor: G.gardenDecor,
    soundEnabled: G.soundEnabled,
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
      showcase: s.showcase ?? [null, null, null],
      gardenDecor: s.gardenDecor ?? [],
      soundEnabled: s.soundEnabled !== false,
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
  initPetals();
  renderGarden();
  renderTray();
  renderDrops();
  updateHUD();
  updateShopPot();
  renderNPCs();
  renderWeather();
  applyBgStyle();
  // Hide game until title screen dismissed
  document.getElementById("gameScreen").style.display = "none";

  // Defer features that depend on later-defined data
  setTimeout(function() {
    checkAchievements();
    checkNightMode();
    initParticles();
    initFireflies();
    updateParticleVisibility();
    renderShowcase();
    applyGardenDecor();
    _soundEnabled = G.soundEnabled;
    checkDailyLogin();
    // Add sound toggle button
    var toggle = document.createElement("div");
    toggle.className = "sound-toggle";
    toggle.textContent = _soundEnabled ? "\ud83d\udd0a" : "\ud83d\udd07";
    toggle.onclick = function() {
      _soundEnabled = !_soundEnabled;
      G.soundEnabled = _soundEnabled;
      toggle.textContent = _soundEnabled ? "\ud83d\udd0a" : "\ud83d\udd07";
      saveG();
    };
    document.body.appendChild(toggle);

    // Title screen → Enter button
    var titleScreen = document.getElementById("titleScreen");
    var titleBtn = document.getElementById("titleEnter");
    if (titleBtn) {
      function enterGame() {
        getAudioCtx(); // unlock audio on first interaction
        playSound("bloom");
        haptic(50);
        titleScreen.classList.add("hidden");
        document.getElementById("gameScreen").style.display = "";
        setTimeout(function() {
          titleScreen.style.display = "none";
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
      if (!G.plots[i].rewarded) {
        G.pkt.common++;
        G.plots[i].rewarded = true;
        updateHUD();
      }
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
        playSound("bloom");
        haptic(80);
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
  // Decrement immediately to prevent double-spend, but defer save until key is revealed
  G.pkt[type]--;
  updateHUD();
  document.getElementById("pktSelector").style.display = "none";
  document.getElementById("pktTitle").textContent =
    `${PKT_ICON[type]} Open a ${PKT_LABEL[type]} Packet`;
  const card = document.getElementById("pktCardEl");
  card.className = `pkt-card t-${type}`;
  card.querySelector(".pkt-icon").textContent = PKT_ICON[type];
  document.getElementById("pktOpenWrap").style.display = "";
  document.getElementById("pktHint").style.display = "";
  playSound("packet_" + type);
  setTimeout(() => {
    card.classList.add("shaking");
    setTimeout(() => {
      G.openedKey = weightedRandom(type);
      saveG(); // save now that seed is determined — packet spend is committed
      const f = FLOWERS[G.openedKey];
      playSound("reveal_" + f.rarity);
      haptic(f.rarity === "legendary" || f.rarity === "unique" ? 100 : 40);
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
  document.getElementById("bloomFlEl").innerHTML = flowerSVG(G.plots[i].key, MAX_STAGE);
  document.getElementById("bloomTitle").textContent = `${f.name} is fully bloomed! 🎉`;

  // Rarity badge
  const badge = document.getElementById("bloomBadge");
  badge.textContent = RARITY_LABEL[f.rarity];
  badge.className = `bloom-badge ${f.rarity}`;

  // Atmospheric glow color keyed to rarity
  const glowColors = { common: "#9a9488", uncommon: "#9575cd", rare: "#5c7fbf", legendary: "#d4a03a", unique: "#b03068" };
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
  if (canHybridize(i)) {
    sellBtn.textContent = "\ud83e\uddec Hybridize with neighbor";
    sellBtn.onclick = function() { closeModal("bloomOverlay"); openHybridModal(i); };
  } else {
    sellBtn.textContent = "\ud83d\udca1 Store it \u2014 sell to NPCs for more!";
    sellBtn.onclick = storeFlower;
  }
  document.getElementById("btnStore").onclick = storeFlower;
  openModal("bloomOverlay");
}
function storeFlower() {
  if (G.bloomPlot === null) return;
  const key = G.plots[G.bloomPlot].key;
  const f = FLOWERS[key];
  if (!G.discovered.includes(key)) G.discovered.push(key);
  G.seedId++;
  G.inventory.push({ key, uid: G.seedId, storedAt: Date.now() });
  clearPlot(G.bloomPlot);
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
    var appVal = getAppreciatedValue(item);
    var appreciated = appVal > f.sell;
    // Check if flower can be added to showcase
    var emptySlot = G.showcase ? G.showcase.indexOf(null) : -1;
    card.innerHTML =
      `<div class="inv-fl">${flowerSVG(item.key, MAX_STAGE)}</div>` +
      `<div class="inv-name">${f.name}</div>` +
      `<div class="inv-badge ${f.rarity}">${rarLabel}</div>` +
      `<div class="inv-sell-val"><span class="ic">C</span>${appVal}` +
      (appreciated ? ` <span class="inv-appreciate">\u2191</span>` : "") +
      `</div>` +
      (emptySlot >= 0 ? `<button class="btn-inv-sell" data-showcase="${emptySlot}" data-key="${item.key}">\u2b50 Showcase</button>` : "");
    // Wire showcase button
    var scBtn = card.querySelector("[data-showcase]");
    if (scBtn) {
      (function(slotIdx, flowerKey) {
        scBtn.onclick = function(e) {
          e.stopPropagation();
          if (!G.showcase) G.showcase = [null, null, null];
          G.showcase[slotIdx] = flowerKey;
          saveG();
          renderShowcase();
          playSound("click");
          toast(f.name + " added to showcase!", 1200);
          openInventoryModal(); // refresh
        };
      })(emptySlot, item.key);
    }
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
    // Tint background for white/light flowers so they're visible
    var isLight = isLightColor(f.petal);
    if (known && isLight) card.style.background = "#e8e4dc";
    const svgHtml = flowerSVG(key, 3);
    card.innerHTML = `
      <div class="jnl-svg${known ? "" : " jsilhouette"}">${svgHtml}</div>
      <div class="jnl-name${known ? "" : " jlocked"}">${known ? f.name : getFlowerHint(f)}</div>
      <span class="jnl-badge ${f.rarity}">${RARITY_LABEL[f.rarity]}</span>
      <div class="jnl-sell${known ? "" : " jhide"}"><span class="ic" style="width:13px;height:13px;font-size:.6em">C</span>${f.sell}</div>
    `;
    grid.appendChild(card);
  });
  openModal("journalOverlay");
}
function openShopModal() {
  updateShopWater();
  updateShopPot();
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
  playSound("coins");
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
  playSound("coins");
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
        G.pkt[G.pendingPktType]++;
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
    G.pkt[G.pendingPktType]++;
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
  if (o.id === "pktOverlay" && G.opening && !G.openedKey) {
    G.pkt[G.pendingPktType]++;
    G.opening = false;
    updateHUD();
    saveG();
  }
  o.classList.remove("on");
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
// ── New Water System: Whirlpool Button + Cloud Tap + Passive Trickle ──────
(function setupWater() {
  var WHIRL_COOLDOWN = 10000; // 10s
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
  var SWIPES_TO_FILL = 8; // left-right swipes needed
  var bucketOverlay = document.getElementById("bucketOverlay");
  var bucketWater = document.getElementById("bucketWater");
  var bucketPct = document.getElementById("bucketPct");
  var bucketHint = document.getElementById("bucketHint");
  var bucketFillLevel = 0;
  var _bucketSwipeStartX = 0;
  var _bucketSwipeDir = 0; // 0=none, 1=right, -1=left
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
    bucketHint.textContent = "Swipe left \u0026 right to fill!";
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
    whirlBtn.disabled = true;
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

  // Touch handling for swipe detection
  bucketOverlay.addEventListener("touchstart", function(e) {
    if (!_bucketActive) return;
    _bucketSwipeStartX = e.touches[0].clientX;
    _bucketSwipeDir = 0;
  }, { passive: true });

  bucketOverlay.addEventListener("touchmove", function(e) {
    if (!_bucketActive) return;
    e.preventDefault();
    var dx = e.touches[0].clientX - _bucketSwipeStartX;
    if (Math.abs(dx) > 30) {
      var dir = dx > 0 ? 1 : -1;
      // Only count if direction changed from last swipe (alternating)
      if (dir !== _bucketLastDir) {
        _bucketLastDir = dir;
        bucketFillLevel++;
        updateBucketVisual();
        playSound("water");
        haptic(20);
        _bucketSwipeStartX = e.touches[0].clientX; // reset for next swipe

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
    _bucketSwipeStartX = e.clientX;
    _bucketSwipeDir = 0;
  });
  bucketOverlay.addEventListener("mousemove", function(e) {
    if (!_bucketActive || !_mouseDown) return;
    var dx = e.clientX - _bucketSwipeStartX;
    if (Math.abs(dx) > 30) {
      var dir = dx > 0 ? 1 : -1;
      if (dir !== _bucketLastDir) {
        _bucketLastDir = dir;
        bucketFillLevel++;
        updateBucketVisual();
        playSound("water");
        _bucketSwipeStartX = e.clientX;
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
const NPC_NAMES = [
  "Hana","Lily","Rose","Daisy","Iris","Violet","Jasmine","Flora",
  "Ivy","Poppy","Dahlia","Willow","Sakura","Fern","Sage","Meadow",
  "Clover","Briar","Azalea","Primrose","Marigold","Wren","Lark","Robin"
];
const NPC_AVATARS = ["\ud83d\udc69","\ud83d\udc68","\ud83d\udc75","\ud83d\udc74","\ud83d\udc67","\ud83d\udc66","\ud83e\uddd1","\ud83d\udc71"];
const NPC_MAX = 3;
const NPC_SPAWN_MIN = 30000; // 30s minimum between spawns
const NPC_SPAWN_MAX = 75000; // 75s max
const NPC_PATIENCE_MIN = 120000; // 2 min
const NPC_PATIENCE_MAX = 300000; // 5 min

function createNPC() {
  if (G.npcs.length >= NPC_MAX) return;
  var allKeys = Object.keys(FLOWERS);
  var requestKey = allKeys[Math.floor(Math.random() * allKeys.length)];
  var f = FLOWERS[requestKey];
  var rarityMult = { common: 1.3, uncommon: 1.6, rare: 2, legendary: 2.5, unique: 3 };
  var reward = Math.round(f.sell * (rarityMult[f.rarity] || 1.5) * (0.9 + Math.random() * 0.4));
  var isVip = Math.random() < 0.05; // 5% VIP chance
  if (isVip) reward = Math.round(f.sell * 5 * (0.9 + Math.random() * 0.3));
  var npc = {
    id: G.npcIdCounter++,
    name: NPC_NAMES[Math.floor(Math.random() * NPC_NAMES.length)],
    avatar: NPC_AVATARS[Math.floor(Math.random() * NPC_AVATARS.length)],
    requestKey: requestKey,
    requestRarity: null,
    reward: reward,
    vip: isVip,
    dialogue: getNPCDialogue(f.name, isVip),
    spawnedAt: Date.now(),
    patience: NPC_PATIENCE_MIN + Math.random() * (NPC_PATIENCE_MAX - NPC_PATIENCE_MIN),
  };
  if (isVip) { playSound("vip"); haptic(80); }
  G.npcs.push(npc);
  saveG();
  renderNPCs();
}

function renderNPCs() {
  var section = document.getElementById("npcSection");
  if (!section) return;
  section.textContent = "";
  if (!G.npcs.length) {
    var empty = document.createElement("div");
    empty.className = "npc-empty";
    empty.textContent = "No customers right now\u2026 they'll arrive soon!";
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
  titleEl.textContent = npc.name + " wants: " + f.name;
  var list = document.getElementById("npcSellList");
  list.textContent = "";
  // Find matching flowers in inventory
  var matches = G.inventory.filter(function(item) { return item.key === npc.requestKey; });
  if (!matches.length) {
    var noMatch = document.createElement("div");
    noMatch.className = "tray-empty";
    noMatch.textContent = "You don't have a " + f.name + " in your Garden House. Grow one and store it!";
    list.appendChild(noMatch);
  } else {
    matches.forEach(function(item) {
      var row = document.createElement("button");
      row.className = "plant-row " + f.rarity;
      var svg = document.createElement("div");
      svg.className = "pr-svg";
      svg.innerHTML = flowerSVG(item.key, MAX_STAGE);
      row.appendChild(svg);
      var info = document.createElement("div");
      info.className = "pr-info";
      var nm = document.createElement("div");
      nm.className = "pr-name";
      nm.textContent = f.name;
      info.appendChild(nm);
      var sub = document.createElement("div");
      sub.className = "pr-sub";
      sub.textContent = "Sell for " + npc.reward + " coins";
      info.appendChild(sub);
      row.appendChild(info);
      var badge = document.createElement("span");
      badge.className = "pr-badge " + f.rarity;
      badge.textContent = RARITY_LABEL[f.rarity];
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
  if (G.npcs.length < NPC_MAX && now - G.npcTimer > NPC_SPAWN_MIN + Math.random() * (NPC_SPAWN_MAX - NPC_SPAWN_MIN)) {
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
  if (!G.weatherTimer) G.weatherTimer = now;
  var elapsed = now - G.weatherTimer;
  var interval = WEATHER_INTERVAL_MIN + Math.random() * (WEATHER_INTERVAL_MAX - WEATHER_INTERVAL_MIN);
  if (elapsed > interval) {
    var oldWeather = G.weather;
    var options = WEATHER_TYPES.filter(function(w) { return w !== oldWeather; });
    G.weather = options[Math.floor(Math.random() * options.length)];
    G.weatherTimer = now;
    saveG();
    if (G.weather === "rainy" && G.water < G.maxWater) {
      G.water = Math.min(G.maxWater, G.water + 1);
      renderDrops();
      saveG();
    }
    playSound("weather");
    toast("Weather changed: " + WEATHER_LABELS[G.weather], 2000);
    checkAchievements();
  }
  renderWeather();
}

function renderWeather() {
  var bar = document.getElementById("weatherBar");
  if (!bar) return;
  bar.textContent = WEATHER_LABELS[G.weather] || WEATHER_LABELS.sunny;
  bar.className = "weather-bar " + (WEATHER_CLASSES[G.weather] || WEATHER_CLASSES.sunny);
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
  return G.weather === "drought" ? Math.ceil(STAGE_WATERS * 1.5) : STAGE_WATERS;
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
  desc.textContent = "Combine " + f1.name + " with a neighbor. Costs " + hybCost + " coins. Both flowers are consumed.";
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
    sub.textContent = "60% new seed \u00b7 30% rare seed \u00b7 10% fail";
    info.appendChild(sub);
    row.appendChild(info);
    row.onclick = function() { doHybridize(plotIdx, ai); };
    content.appendChild(row);
  });
  openModal("hybridOverlay");
}

function doHybridize(idx1, idx2) {
  var key1 = G.plots[idx1].key, key2 = G.plots[idx2].key;
  var f1 = FLOWERS[key1], f2 = FLOWERS[key2];
  var cost = Math.max(HYBRID_COST_BASE[f1.rarity] || 30, HYBRID_COST_BASE[f2.rarity] || 30);
  if (G.coins < cost) {
    toast("Need " + cost + " coins to hybridize!", 2000);
    return;
  }
  G.coins -= cost;
  // Clear both plots
  clearPlot(idx1);
  clearPlot(idx2);
  playSound("hybrid");
  haptic(60);
  var roll = Math.random();
  if (roll < 0.6) {
    // Success: seed of one parent's species with other's rarity consideration
    var parentKey = Math.random() < 0.5 ? key1 : key2;
    G.seeds.push({ id: G.seedId++, key: parentKey, hybrid: true });
    G.hybridCount++;
    toast("Hybrid success! Got a " + FLOWERS[parentKey].name + " seed \ud83e\uddec", 2500);
  } else if (roll < 0.9) {
    // Rare seed
    var rareKeys = Object.keys(FLOWERS).filter(function(k) { return FLOWERS[k].rarity === "rare"; });
    var rk = rareKeys[Math.floor(Math.random() * rareKeys.length)];
    G.seeds.push({ id: G.seedId++, key: rk, hybrid: true });
    G.hybridCount++;
    toast("Lucky hybrid! Got a rare " + FLOWERS[rk].name + " seed! \u2728", 2500);
  } else {
    // Fail — refund coins
    G.coins += cost;
    toast("Hybridization failed\u2026 coins refunded \ud83d\ude1e", 2500);
  }
  updateHUD();
  renderTray();
  renderGarden();
  saveG();
  closeModal("hybridOverlay");
  checkAchievements();
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
  { id:"patience", name:"Patient Gardener", desc:"Have 6+ pots growing", icon:"\ud83e\uddd1\u200d\ud83c\udf3e", reward:25, check:function(){return G.plots.filter(function(p){return p.state==="growing";}).length>=6;} },
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
  { id:"specialist", name:"Species Specialist", desc:"Discover all colors of one species", icon:"\ud83e\uddea", reward:30, check:function(){var byKind={};Object.entries(FLOWERS).forEach(function(e){var k=e[0],v=e[1];byKind[v.kind]=byKind[v.kind]||[];byKind[v.kind].push(k);});return Object.values(byKind).some(function(keys){return keys.length>=3&&keys.every(function(k){return G.discovered.includes(k);});});} },
  { id:"rare5", name:"Rare Hunter", desc:"Discover 5 rare flowers", icon:"\u2b50", reward:25, check:function(){return G.discovered.filter(function(k){return FLOWERS[k]&&FLOWERS[k].rarity==="rare";}).length>=5;} },
  { id:"allcommon", name:"Common Collector", desc:"Discover all common flowers", icon:"\ud83c\udfe1", reward:40, check:function(){var cs=Object.keys(FLOWERS).filter(function(k){return FLOWERS[k].rarity==="common";});return cs.every(function(k){return G.discovered.includes(k);});} },
  { id:"fulljournal", name:"Full Journal", desc:"Discover every flower (100%)", icon:"\ud83d\udcd6", reward:200, check:function(){return G.discovered.length>=Object.keys(FLOWERS).length;} },
  // Commerce (21-30)
  { id:"sell1", name:"First Sale", desc:"Sell a flower to an NPC", icon:"\ud83d\udcb0", reward:10, check:function(){return G.npcSales>=1;} },
  { id:"sell25", name:"Merchant", desc:"Complete 25 NPC sales", icon:"\ud83d\udcb5", reward:30, check:function(){return G.npcSales>=25;} },
  { id:"coins1000", name:"Tycoon", desc:"Earn 1,000 total coins", icon:"\ud83d\udcb0", reward:50, check:function(){return G.totalCoins>=1000;} },
  { id:"coins5000", name:"Mogul", desc:"Earn 5,000 total coins", icon:"\ud83d\udc51", reward:100, check:function(){return G.totalCoins>=5000;} },
  { id:"streak10", name:"Perfect Service", desc:"10 NPC sales in a row", icon:"\ud83c\udf1f", reward:40, check:function(){return G.npcBestStreak>=10;} },
  { id:"quicksell", name:"Quick Serve", desc:"You're a fast seller!", icon:"\u23f1\ufe0f", reward:15, check:function(){return G.npcSales>=5;} },
  { id:"appreciate", name:"Big Tipper", desc:"Sell an appreciated flower", icon:"\ud83d\udcc8", reward:20, check:function(){return G.totalSold>=10;} },
  { id:"legsale", name:"Legendary Sale", desc:"Sell a legendary to NPC", icon:"\u2728", reward:50, check:function(){return false;} }, // tracked via flag
  { id:"bulk5", name:"Bulk Dealer", desc:"Sell 5 flowers total", icon:"\ud83d\udce6", reward:15, check:function(){return G.totalSold>=5;} },
  { id:"sell50", name:"Haggler", desc:"Sell 50 flowers total", icon:"\ud83e\udd1d", reward:40, check:function(){return G.totalSold>=50;} },
  // Garden (31-40)
  { id:"pot3", name:"Expansion I", desc:"Buy your 3rd pot", icon:"\ud83e\udeb4", reward:15, check:function(){return G.plots.length>=3;} },
  { id:"pot6", name:"Expansion II", desc:"Buy your 6th pot", icon:"\ud83e\udeb4", reward:30, check:function(){return G.plots.length>=6;} },
  { id:"pot12", name:"Expansion III", desc:"Unlock all 12 pots", icon:"\ud83c\udf3e", reward:75, check:function(){return G.plots.length>=12;} },
  { id:"decor1", name:"Decorator", desc:"Unlock a new pot style", icon:"\ud83c\udfa8", reward:20, check:function(){return G.potStyle!=="terracotta";} },
  { id:"landscape1", name:"Landscape Artist", desc:"Unlock a new background", icon:"\ud83c\udf05", reward:20, check:function(){return G.bgStyle!=="default";} },
  { id:"luckypkt", name:"Lucky Packet", desc:"Get legendary from common", icon:"\ud83c\udf1f", reward:50, check:function(){return false;} }, // tracked via flag
  { id:"hybrid1", name:"Hybridizer", desc:"Create your first hybrid", icon:"\ud83e\uddec", reward:20, check:function(){return G.hybridCount>=1;} },
  { id:"hybrid10", name:"Mad Scientist", desc:"Create 10 hybrids", icon:"\ud83e\uddd1\u200d\ud83d\udd2c", reward:50, check:function(){return G.hybridCount>=10;} },
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

function applyBgStyle() {
  var canvas = document.querySelector(".bg-canvas");
  if (!canvas) return;
  switch (G.bgStyle) {
    case "garden":
      canvas.style.background = "linear-gradient(155deg, #e8f5e9 0%, #c8e6c9 40%, #a5d6a7 100%)";
      break;
    case "enchanted":
      canvas.style.background = "linear-gradient(155deg, #ede7f6 0%, #d1c4e9 30%, #b39ddb 60%, #e8eaf6 100%)";
      break;
    default:
      canvas.style.background = "";
  }
}

// ══════════════════════════════════════════════════════════
// GAME TICK — runs every 1s
// ══════════════════════════════════════════════════════════
var _rainWaterCounter = 0;
function gameTick() {
  tickNPCs();
  tickWeather();
  // Rain auto-water every 60 ticks (60s)
  _rainWaterCounter++;
  if (_rainWaterCounter >= 60) {
    _rainWaterCounter = 0;
    rainAutoWater();
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

function getAudioCtx() {
  if (!_audioCtx) {
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { return null; }
  }
  if (_audioCtx.state === "suspended") _audioCtx.resume();
  return _audioCtx;
}

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
      osc.connect(filter).connect(gain).connect(ctx.destination);
      osc.start(now); osc.stop(now + 0.25);
      // Resonance bubble: lower sine for the "bloop" body
      var osc3 = ctx.createOscillator();
      var gain3 = ctx.createGain();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(280, now + 0.02);
      osc3.frequency.exponentialRampToValueAtTime(120, now + 0.18);
      gain3.gain.setValueAtTime(0.06, now + 0.02);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc3.connect(gain3).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.3);
      });
      break;

    case "sale":
      [800, 1000, 1200].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.06, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.12);
        osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.35);
      });
      break;

    case "click":
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 1200;
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now); osc.stop(now + 0.06);
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
        osc.connect(gain).connect(ctx.destination);
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
      osc.connect(gain).connect(ctx.destination);
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
      osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
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
          ro.connect(rf).connect(rg).connect(ctx.destination);
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
          wo.connect(wf).connect(wg).connect(ctx.destination);
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
      _so.connect(_sf).connect(_sg).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.35);
      });
      break;

    case "coins": // jingling coins
      [1800, 2200, 1600, 2000, 1400].forEach(function(freq, i) {
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.03, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.06);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.04); osc.stop(now + i * 0.04 + 0.06);
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
      osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
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
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + dur);
      });
      // Octave doubling on final note for fullness
      osc = ctx.createOscillator(); gain = ctx.createGain();
      osc.type = "sine"; osc.frequency.value = 1480; // F#6
      gain.gain.setValueAtTime(0.06, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + 0.4); osc.stop(now + 1.1);
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
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.09); osc.stop(now + i * 0.09 + dur);
      });
      // Shimmer: two detuned high octaves for ethereal sparkle
      [1568, 1580].forEach(function(freq, i) {
        osc = ctx.createOscillator(); gain = ctx.createGain();
        osc.type = "sine"; osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, now + 0.45);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + 0.45); osc.stop(now + 1.3);
      });
      break;
  }
}

function haptic(ms) {
  try { if (navigator.vibrate) navigator.vibrate(ms || 30); } catch(e) {}
}

// ══════════════════════════════════════════════════════════
// NIGHT MODE — based on real time
// ══════════════════════════════════════════════════════════
function checkNightMode() {
  var hour = new Date().getHours();
  var isNight = hour >= 20 || hour < 6;
  document.body.classList.toggle("night-mode", isNight);
  // Update weather bar emoji for night
  var bar = document.getElementById("weatherBar");
  if (bar && isNight && !bar.textContent.includes("\ud83c\udf19")) {
    // Keep weather text but add moon indicator
  }
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
  "VIP order: one {flower}, price is yours!",
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
// SHOWCASE — 3-slot flower display
// ══════════════════════════════════════════════════════════
function renderShowcase() {
  var existing = document.querySelector(".showcase-wrap");
  if (existing) existing.remove();

  if (!G.showcase) G.showcase = [null, null, null];

  var wrap = document.createElement("div");
  wrap.className = "showcase-wrap";
  var title = document.createElement("div");
  title.className = "showcase-title";
  title.textContent = "\ud83c\udf3a Flower Showcase";
  wrap.appendChild(title);

  var slots = document.createElement("div");
  slots.className = "showcase-slots";
  for (var i = 0; i < 3; i++) {
    var slot = document.createElement("div");
    var key = G.showcase ? G.showcase[i] : null;
    slot.className = "showcase-slot" + (key ? " filled" : "");
    if (key && FLOWERS[key]) {
      slot.innerHTML = '<div class="showcase-flower">' + flowerSVG(key, MAX_STAGE) + '</div><div class="showcase-slot-name">' + FLOWERS[key].name + '</div>';
      (function(idx) {
        slot.onclick = function() {
          G.showcase[idx] = null;
          saveG();
          renderShowcase();
          toast("Removed from showcase", 1200);
        };
      })(i);
    } else {
      var empty = document.createElement("div");
      empty.className = "showcase-slot-empty";
      empty.textContent = "+";
      slot.appendChild(empty);
      (function(idx) {
        slot.onclick = function() { openShowcasePicker(idx); };
      })(i);
    }
    slots.appendChild(slot);
  }
  wrap.appendChild(slots);

  // Insert before garden grid
  var grid = document.getElementById("gardenGrid");
  if (grid && grid.parentNode) {
    grid.parentNode.insertBefore(wrap, grid);
  }
}

function openShowcasePicker(slotIdx) {
  if (!G.inventory.length && !G.discovered.length) {
    toast("Discover flowers first!", 1500);
    return;
  }
  // Use the NPC sell modal as a generic picker
  var titleEl = document.getElementById("npcSellTitle");
  titleEl.textContent = "Pick a flower for showcase";
  var list = document.getElementById("npcSellList");
  list.textContent = "";
  // Show discovered flowers
  G.discovered.forEach(function(key) {
    var f = FLOWERS[key];
    if (!f) return;
    var row = document.createElement("button");
    row.className = "plant-row " + f.rarity;
    var svg = document.createElement("div");
    svg.className = "pr-svg";
    svg.innerHTML = flowerSVG(key, MAX_STAGE);
    row.appendChild(svg);
    var info = document.createElement("div");
    info.className = "pr-info";
    var nm = document.createElement("div");
    nm.className = "pr-name";
    nm.textContent = f.name;
    info.appendChild(nm);
    row.appendChild(info);
    row.onclick = function() {
      if (!G.showcase) G.showcase = [null, null, null];
      G.showcase[slotIdx] = key;
      saveG();
      closeModal("npcSellOverlay");
      renderShowcase();
      playSound("click");
      toast(f.name + " added to showcase!", 1500);
    };
    list.appendChild(row);
  });
  openModal("npcSellOverlay");
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
var TUTORIAL_STEPS = [
  { icon: "\ud83c\udf3a", title: "Welcome to Yurie's Flower Shop!", desc: "Grow beautiful flowers and sell them to visiting customers. Let's learn the basics!" },
  { icon: "\ud83d\udca7", title: "Water Your Plants", desc: "Water fills automatically over time. Tap the \ud83c\udf0a whirlpool button for a burst, or catch drifting clouds for bonus water!" },
  { icon: "\ud83d\udc64", title: "NPC Customers", desc: "Customers arrive asking for specific flowers. Tap them to fulfill orders and earn coins \u2014 they pay more than base price!" },
  { icon: "\u2600\ufe0f", title: "Weather Changes", desc: "Weather shifts between Sunny, Rainy, and Drought. Rain gives free water, drought needs more watering. Plan ahead!" },
  { icon: "\ud83e\uddec", title: "Hybridize Flowers", desc: "When two bloomed flowers are in adjacent pots, you can hybridize them for a chance at rare new seeds!" },
  { icon: "\ud83c\udfc6", title: "Achievements & Style", desc: "Earn 40 achievements for coins. Complete your Journal to unlock pot styles and backgrounds in the Style menu!" },
];
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
