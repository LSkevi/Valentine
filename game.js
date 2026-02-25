let toastTimer;
const FLOWERS = {
  // ── Common (59) ─────────────────────────────────────────────
  pinkTulip:          {name:'Pink Tulip',           kind:'tulip',         rarity:'common',   w:32, petal:'#f06292', stem:'#66bb6a', sell:5 },
  redTulip:           {name:'Red Tulip',            kind:'tulip',         rarity:'common',   w:28, petal:'#e53935', stem:'#66bb6a', sell:6 },
  yellowTulip:        {name:'Yellow Tulip',         kind:'tulip',         rarity:'common',   w:24, petal:'#fdd835', stem:'#66bb6a', sell:6 },
  purpleViolet:       {name:'Purple Violet',        kind:'violet',        rarity:'common',   w:20, petal:'#7e57c2', stem:'#66bb6a', sell:5 },
  blueViolet:         {name:'Blue Violet',          kind:'violet',        rarity:'common',   w:18, petal:'#5c6bc0', stem:'#66bb6a', sell:5 },
  purpleIris:         {name:'Purple Iris',          kind:'iris',          rarity:'common',   w:14, petal:'#9c27b0', stem:'#66bb6a', sell:6 },
  yellowDaffodil:     {name:'Yellow Daffodil',      kind:'daffodil',      rarity:'common',   w:18, petal:'#fff176', stem:'#66bb6a', sell:6 },
  whiteDaisy:         {name:'White Daisy',          kind:'daisy',         rarity:'common',   w:22, petal:'#f5f5f5', stem:'#66bb6a', sell:5 },
  yellowDaisy:        {name:'Yellow Daisy',         kind:'daisy',         rarity:'common',   w:18, petal:'#fff176', stem:'#66bb6a', sell:5 },
  pinkDaisy:          {name:'Pink Daisy',           kind:'daisy',         rarity:'common',   w:14, petal:'#f48fb1', stem:'#66bb6a', sell:6 },
  pinkCarnation:      {name:'Pink Carnation',       kind:'carnation',     rarity:'common',   w:25, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  redCarnation:       {name:'Red Carnation',        kind:'carnation',     rarity:'common',   w:22, petal:'#f44336', stem:'#66bb6a', sell:5 },
  whiteCarnation:     {name:'White Carnation',      kind:'carnation',     rarity:'common',   w:20, petal:'#fafafa', stem:'#66bb6a', sell:5 },
  purpleHyacinth:     {name:'Purple Hyacinth',      kind:'hyacinth',      rarity:'common',   w:22, petal:'#7b1fa2', stem:'#66bb6a', sell:6 },
  pinkHyacinth:       {name:'Pink Hyacinth',        kind:'hyacinth',      rarity:'common',   w:18, petal:'#ec407a', stem:'#66bb6a', sell:6 },
  yellowChrysanthemum:{name:'Yellow Chrysanthemum', kind:'chrysanthemum', rarity:'common',   w:18, petal:'#fdd835', stem:'#66bb6a', sell:5 },
  pinkChrysanthemum:  {name:'Pink Chrysanthemum',   kind:'chrysanthemum', rarity:'common',   w:16, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  redGeranium:        {name:'Red Geranium',         kind:'geranium',      rarity:'common',   w:22, petal:'#e53935', stem:'#66bb6a', sell:5 },
  pinkGeranium:       {name:'Pink Geranium',        kind:'geranium',      rarity:'common',   w:20, petal:'#f06292', stem:'#66bb6a', sell:5 },
  blueBluebell:       {name:'Blue Bluebell',        kind:'bluebell',      rarity:'common',   w:20, petal:'#7986cb', stem:'#66bb6a', sell:5 },
  purpleBluebell:     {name:'Purple Bluebell',      kind:'bluebell',      rarity:'common',   w:16, petal:'#9c27b0', stem:'#66bb6a', sell:5 },
  yellowMarigold:     {name:'Yellow Marigold',      kind:'marigold',      rarity:'common',   w:24, petal:'#fdd835', stem:'#558b2f', sell:5 },
  orangeMarigold:     {name:'Orange Marigold',      kind:'marigold',      rarity:'common',   w:20, petal:'#ff8a65', stem:'#558b2f', sell:5 },
  purplePansy:        {name:'Purple Pansy',         kind:'pansy',         rarity:'common',   w:22, petal:'#7b1fa2', stem:'#66bb6a', sell:5 },
  yellowPansy:        {name:'Yellow Pansy',         kind:'pansy',         rarity:'common',   w:20, petal:'#fdd835', stem:'#66bb6a', sell:5 },
  pinkPetunia:        {name:'Pink Petunia',         kind:'petunia',       rarity:'common',   w:22, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  purplePetunia:      {name:'Purple Petunia',       kind:'petunia',       rarity:'common',   w:20, petal:'#9c27b0', stem:'#66bb6a', sell:5 },
  yellowPrimrose:     {name:'Yellow Primrose',      kind:'primrose',      rarity:'common',   w:22, petal:'#fff176', stem:'#66bb6a', sell:5 },
  pinkPrimrose:       {name:'Pink Primrose',        kind:'primrose',      rarity:'common',   w:18, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  purpleCrocus:       {name:'Purple Crocus',        kind:'crocus',        rarity:'common',   w:20, petal:'#7b1fa2', stem:'#66bb6a', sell:5 },
  yellowCrocus:       {name:'Yellow Crocus',        kind:'crocus',        rarity:'common',   w:18, petal:'#fdd835', stem:'#66bb6a', sell:5 },
  orangeCalendula:    {name:'Orange Calendula',     kind:'calendula',     rarity:'common',   w:22, petal:'#ff8a65', stem:'#558b2f', sell:5 },
  yellowCalendula:    {name:'Yellow Calendula',     kind:'calendula',     rarity:'common',   w:20, petal:'#fdd835', stem:'#558b2f', sell:5 },
  pinkCosmos:         {name:'Pink Cosmos',          kind:'cosmos',        rarity:'common',   w:22, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  whiteCosmos:        {name:'White Cosmos',         kind:'cosmos',        rarity:'common',   w:18, petal:'#f5f5f5', stem:'#66bb6a', sell:5 },
  pinkZinnia:         {name:'Pink Zinnia',          kind:'zinnia',        rarity:'common',   w:20, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  orangeZinnia:       {name:'Orange Zinnia',        kind:'zinnia',        rarity:'common',   w:18, petal:'#ff8a65', stem:'#66bb6a', sell:5 },
  pinkSnapdragon:     {name:'Pink Snapdragon',      kind:'snapdragon',    rarity:'common',   w:18, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  yellowSnapdragon:   {name:'Yellow Snapdragon',    kind:'snapdragon',    rarity:'common',   w:16, petal:'#fdd835', stem:'#66bb6a', sell:5 },
  blueForgetMeNot:    {name:'Blue Forget-me-not',   kind:'forgetmenot',   rarity:'common',   w:24, petal:'#64b5f6', stem:'#66bb6a', sell:5 },
  pinkAster:          {name:'Pink Aster',           kind:'aster',         rarity:'common',   w:18, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  purpleAster:        {name:'Purple Aster',         kind:'aster',         rarity:'common',   w:16, petal:'#9c27b0', stem:'#66bb6a', sell:5 },
  blueCornflower:     {name:'Blue Cornflower',      kind:'cornflower',    rarity:'common',   w:22, petal:'#1e88e5', stem:'#66bb6a', sell:5 },
  pinkImpatiens:      {name:'Pink Impatiens',       kind:'impatiens',     rarity:'common',   w:20, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  pinkVerbena:        {name:'Pink Verbena',         kind:'verbena',       rarity:'common',   w:18, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  purpleHeather:      {name:'Purple Heather',       kind:'heather',       rarity:'common',   w:18, petal:'#9c27b0', stem:'#66bb6a', sell:6 },
  purpleStatice:      {name:'Purple Statice',       kind:'statice',       rarity:'common',   w:20, petal:'#9c27b0', stem:'#66bb6a', sell:5 },
  orangeGerbera:      {name:'Orange Gerbera Daisy', kind:'gerbera',       rarity:'common',   w:20, petal:'#ff8a65', stem:'#558b2f', sell:5 },
  pinkGerbera:        {name:'Pink Gerbera Daisy',   kind:'gerbera',       rarity:'common',   w:18, petal:'#f48fb1', stem:'#558b2f', sell:5 },
  blackEyedSusan:     {name:'Black-eyed Susan',     kind:'blackeyedsusan',rarity:'common',   w:20, petal:'#fdd835', stem:'#558b2f', sell:5 },
  blueSalvia:         {name:'Blue Salvia',          kind:'salvia',        rarity:'common',   w:18, petal:'#3949ab', stem:'#33691e', sell:5 },
  yellowAlstroemeria: {name:'Yellow Alstroemeria',  kind:'alstroemeria',  rarity:'common',   w:18, petal:'#fff176', stem:'#66bb6a', sell:6 },
  orangeNasturtium:   {name:'Orange Nasturtium',    kind:'nasturtium',    rarity:'common',   w:20, petal:'#ff8a65', stem:'#558b2f', sell:5 },
  pinkPhlox:          {name:'Pink Phlox',           kind:'phlox',         rarity:'common',   w:18, petal:'#f48fb1', stem:'#66bb6a', sell:5 },
  purpleVeronica:     {name:'Purple Veronica',      kind:'veronica',      rarity:'common',   w:16, petal:'#9c27b0', stem:'#66bb6a', sell:5 },
  pinkSweetPea:       {name:'Pink Sweet Pea',       kind:'sweetpea',      rarity:'common',   w:18, petal:'#f8bbd0', stem:'#aed581', sell:5 },
  yellowWallflower:   {name:'Yellow Wallflower',    kind:'wallflower',    rarity:'common',   w:16, petal:'#fdd835', stem:'#66bb6a', sell:5 },
  redGaillardia:      {name:'Red Gaillardia',       kind:'gaillardia',    rarity:'common',   w:16, petal:'#f44336', stem:'#558b2f', sell:5 },
  pinkStock:          {name:'Pink Stock',           kind:'stock',         rarity:'common',   w:18, petal:'#f06292', stem:'#66bb6a', sell:5 },
  // ── Uncommon (46) ───────────────────────────────────────────
  sunflower:          {name:'Sunflower',            kind:'sunflower',     rarity:'uncommon', w:16, petal:'#fdd835', stem:'#558b2f', sell:18},
  lavender:           {name:'Lavender',             kind:'lavender',      rarity:'uncommon', w:14, petal:'#b39ddb', stem:'#7cb342', sell:16},
  whiteTulip:         {name:'White Tulip',          kind:'tulip',         rarity:'uncommon', w:12, petal:'#eceff1', stem:'#66bb6a', sell:12},
  redRose:            {name:'Red Rose',             kind:'rose',          rarity:'uncommon', w:12, petal:'#c62828', stem:'#43a047', sell:18},
  pinkRose:           {name:'Pink Rose',            kind:'rose',          rarity:'uncommon', w:8,  petal:'#e91e63', stem:'#43a047', sell:22},
  pinkLily:           {name:'Pink Lily',            kind:'lily',          rarity:'uncommon', w:12, petal:'#f48fb1', stem:'#66bb6a', sell:14},
  blueIris:           {name:'Blue Iris',            kind:'iris',          rarity:'uncommon', w:10, petal:'#1976d2', stem:'#66bb6a', sell:16},
  whiteDaffodil:      {name:'White Daffodil',       kind:'daffodil',      rarity:'uncommon', w:10, petal:'#f5f5f5', stem:'#66bb6a', sell:15},
  whiteViolet:        {name:'White Violet',         kind:'violet',        rarity:'uncommon', w:8,  petal:'#ede7f6', stem:'#66bb6a', sell:14},
  pinkPeony:          {name:'Pink Peony',           kind:'peony',         rarity:'uncommon', w:10, petal:'#f48fb1', stem:'#66bb6a', sell:18},
  redPoppy:           {name:'Red Poppy',            kind:'poppy',         rarity:'uncommon', w:18, petal:'#f44336', stem:'#558b2f', sell:15},
  orangePoppy:        {name:'Orange Poppy',         kind:'poppy',         rarity:'uncommon', w:14, petal:'#ff6d00', stem:'#558b2f', sell:16},
  cherryBlossom:      {name:'Cherry Blossom',       kind:'cherry',        rarity:'uncommon', w:16, petal:'#fce4ec', stem:'#795548', sell:20},
  deepCherry:         {name:'Deep Cherry',          kind:'cherry',        rarity:'uncommon', w:10, petal:'#e91e63', stem:'#795548', sell:22},
  yellowRose:         {name:'Yellow Rose',          kind:'rose',          rarity:'uncommon', w:10, petal:'#f9a825', stem:'#43a047', sell:20},
  peachRose:          {name:'Peach Rose',           kind:'rose',          rarity:'uncommon', w:8,  petal:'#ffcc80', stem:'#43a047', sell:20},
  purpleRose:         {name:'Purple Rose',          kind:'rose',          rarity:'uncommon', w:6,  petal:'#7b1fa2', stem:'#388e3c', sell:25},
  pinkAlstroemeria:   {name:'Pink Alstroemeria',    kind:'alstroemeria',  rarity:'uncommon', w:14, petal:'#f48fb1', stem:'#66bb6a', sell:16},
  blueHyacinth:       {name:'Blue Hyacinth',        kind:'hyacinth',      rarity:'uncommon', w:12, petal:'#1e88e5', stem:'#66bb6a', sell:16},
  purpleChrysanthemum:{name:'Purple Chrysanthemum', kind:'chrysanthemum', rarity:'uncommon', w:12, petal:'#7b1fa2', stem:'#66bb6a', sell:16},
  whiteMagnolia:      {name:'White Magnolia',       kind:'magnolia',      rarity:'uncommon', w:14, petal:'#fafafa', stem:'#795548', sell:18},
  pinkMagnolia:       {name:'Pink Magnolia',        kind:'magnolia',      rarity:'uncommon', w:10, petal:'#ffcdd2', stem:'#795548', sell:20},
  redBegonia:         {name:'Red Begonia',          kind:'begonia',       rarity:'uncommon', w:14, petal:'#f44336', stem:'#66bb6a', sell:15},
  pinkBegonia:        {name:'Pink Begonia',         kind:'begonia',       rarity:'uncommon', w:12, petal:'#f48fb1', stem:'#66bb6a', sell:15},
  pinkDahlia:         {name:'Pink Dahlia',          kind:'dahlia',        rarity:'uncommon', w:14, petal:'#f48fb1', stem:'#66bb6a', sell:18},
  purpleDahlia:       {name:'Purple Dahlia',        kind:'dahlia',        rarity:'uncommon', w:12, petal:'#9c27b0', stem:'#66bb6a', sell:18},
  orangeDahlia:       {name:'Orange Dahlia',        kind:'dahlia',        rarity:'uncommon', w:10, petal:'#ff8a65', stem:'#66bb6a', sell:18},
  pinkAzalea:         {name:'Pink Azalea',          kind:'azalea',        rarity:'uncommon', w:14, petal:'#f48fb1', stem:'#66bb6a', sell:16},
  redAnemone:         {name:'Red Anemone',          kind:'anemone',       rarity:'uncommon', w:14, petal:'#f44336', stem:'#66bb6a', sell:15},
  purpleAnemone:      {name:'Purple Anemone',       kind:'anemone',       rarity:'uncommon', w:12, petal:'#9c27b0', stem:'#66bb6a', sell:16},
  yellowFreesia:      {name:'Yellow Freesia',       kind:'freesia',       rarity:'uncommon', w:14, petal:'#fff176', stem:'#66bb6a', sell:16},
  pinkFreesia:        {name:'Pink Freesia',         kind:'freesia',       rarity:'uncommon', w:12, petal:'#f48fb1', stem:'#66bb6a', sell:16},
  pinkGladiolus:      {name:'Pink Gladiolus',       kind:'gladiolus',     rarity:'uncommon', w:14, petal:'#f48fb1', stem:'#558b2f', sell:18},
  purpleGladiolus:    {name:'Purple Gladiolus',     kind:'gladiolus',     rarity:'uncommon', w:12, petal:'#9c27b0', stem:'#558b2f', sell:18},
  pinkHibiscus:       {name:'Pink Hibiscus',        kind:'hibiscus',      rarity:'uncommon', w:14, petal:'#f48fb1', stem:'#66bb6a', sell:18},
  redHibiscus:        {name:'Red Hibiscus',         kind:'hibiscus',      rarity:'uncommon', w:12, petal:'#f44336', stem:'#66bb6a', sell:18},
  lilyValley:         {name:'Lily of the Valley',   kind:'lilyvalley',    rarity:'uncommon', w:12, petal:'#f5f5f5', stem:'#aed581', sell:20},
  purpleWisteria:     {name:'Purple Wisteria',      kind:'wisteria',      rarity:'uncommon', w:10, petal:'#9c27b0', stem:'#795548', sell:22},
  purpleFoxglove:     {name:'Purple Foxglove',      kind:'foxglove',      rarity:'uncommon', w:12, petal:'#9c27b0', stem:'#558b2f', sell:18},
  pinkFoxglove:       {name:'Pink Foxglove',        kind:'foxglove',      rarity:'uncommon', w:14, petal:'#f48fb1', stem:'#558b2f', sell:16},
  whiteGardenia:      {name:'White Gardenia',       kind:'gardenia',      rarity:'uncommon', w:10, petal:'#fafafa', stem:'#43a047', sell:22},
  pinkCyclamen:       {name:'Pink Cyclamen',        kind:'cyclamen',      rarity:'uncommon', w:12, petal:'#f48fb1', stem:'#66bb6a', sell:18},
  pinkRanunculus:     {name:'Pink Ranunculus',      kind:'ranunculus',    rarity:'uncommon', w:12, petal:'#f48fb1', stem:'#66bb6a', sell:20},
  whiteJasmine:       {name:'White Jasmine',        kind:'jasmine',       rarity:'uncommon', w:12, petal:'#fafafa', stem:'#aed581', sell:18},
  purpleBuddleia:     {name:'Purple Buddleia',      kind:'buddleia',      rarity:'uncommon', w:12, petal:'#9c27b0', stem:'#558b2f', sell:18},
  purpleLantana:      {name:'Purple Lantana',       kind:'lantana',       rarity:'uncommon', w:12, petal:'#9c27b0', stem:'#66bb6a', sell:16},
  // ── Rare (27) ───────────────────────────────────────────────
  tigerLily:          {name:'Tiger Lily',           kind:'lily',          rarity:'rare',     w:4,  petal:'#ff7043', stem:'#558b2f', sell:60},
  goldenIris:         {name:'Golden Iris',          kind:'iris',          rarity:'rare',     w:4,  petal:'#f9a825', stem:'#558b2f', sell:62},
  pinkDaffodil:       {name:'Pink Daffodil',        kind:'daffodil',      rarity:'rare',     w:3,  petal:'#f8bbd0', stem:'#558b2f', sell:58},
  redPeony:           {name:'Red Peony',            kind:'peony',         rarity:'rare',     w:3,  petal:'#e53935', stem:'#558b2f', sell:65},
  purpleOrchid:       {name:'Purple Orchid',        kind:'orchid',        rarity:'rare',     w:3,  petal:'#ab47bc', stem:'#558b2f', sell:68},
  blackTulip:         {name:'Black Tulip',          kind:'tulip',         rarity:'rare',     w:2,  petal:'#263238', stem:'#1b5e20', sell:70},
  silverRose:         {name:'Silver Rose',          kind:'rose',          rarity:'rare',     w:2,  petal:'#90a4ae', stem:'#546e7a', sell:75},
  crystalDaisy:       {name:'Crystal Daisy',        kind:'daisy',         rarity:'rare',     w:2,  petal:'#e3f2fd', stem:'#0288d1', sell:65},
  violetPoppy:        {name:'Violet Poppy',         kind:'poppy',         rarity:'rare',     w:2,  petal:'#6a1b9a', stem:'#1a237e', sell:70},
  goldenCherry:       {name:'Golden Cherry',        kind:'cherry',        rarity:'rare',     w:1,  petal:'#f9a825', stem:'#5d4037', sell:80},
  midnightRose:       {name:'Midnight Rose',        kind:'rose',          rarity:'rare',     w:1,  petal:'#37474f', stem:'#212121', sell:90},
  purpleCarnation:    {name:'Purple Carnation',     kind:'carnation',     rarity:'rare',     w:4,  petal:'#9c27b0', stem:'#1b5e20', sell:60},
  pinkFuchsia:        {name:'Pink Fuchsia',         kind:'fuchsia',       rarity:'rare',     w:4,  petal:'#f06292', stem:'#33691e', sell:62},
  purpleClematis:     {name:'Purple Clematis',      kind:'clematis',      rarity:'rare',     w:4,  petal:'#7b1fa2', stem:'#1b5e20', sell:60},
  blueHydrangea:      {name:'Blue Hydrangea',       kind:'hydrangea',     rarity:'rare',     w:4,  petal:'#64b5f6', stem:'#33691e', sell:62},
  pinkHydrangea:      {name:'Pink Hydrangea',       kind:'hydrangea',     rarity:'rare',     w:3,  petal:'#f48fb1', stem:'#33691e', sell:65},
  whiteCamellia:      {name:'White Camellia',       kind:'camellia',      rarity:'rare',     w:4,  petal:'#fafafa', stem:'#33691e', sell:60},
  redCamellia:        {name:'Red Camellia',         kind:'camellia',      rarity:'rare',     w:3,  petal:'#e53935', stem:'#33691e', sell:62},
  pinkLotus:          {name:'Pink Lotus',           kind:'lotus',         rarity:'rare',     w:3,  petal:'#f48fb1', stem:'#006064', sell:70},
  pinkPlumeria:       {name:'Pink Plumeria',        kind:'plumeria',      rarity:'rare',     w:3,  petal:'#f8bbd0', stem:'#5d4037', sell:68},
  pinkBleedingHeart:  {name:'Pink Bleeding Heart',  kind:'bleedingheart', rarity:'rare',     w:3,  petal:'#f48fb1', stem:'#558b2f', sell:65},
  blueMorningGlory:   {name:'Blue Morning Glory',   kind:'morningglory',  rarity:'rare',     w:3,  petal:'#1e88e5', stem:'#558b2f', sell:65},
  purpleHellebore:    {name:'Purple Hellebore',     kind:'hellebore',     rarity:'rare',     w:3,  petal:'#6a1b9a', stem:'#1b5e20', sell:68},
  purpleAllium:       {name:'Purple Allium',        kind:'allium',        rarity:'rare',     w:3,  petal:'#9c27b0', stem:'#558b2f', sell:65},
  purpleGloxinia:     {name:'Purple Gloxinia',      kind:'gloxinia',      rarity:'rare',     w:3,  petal:'#9c27b0', stem:'#33691e', sell:70},
  yellowPlumeria:     {name:'Yellow Plumeria',      kind:'plumeria',      rarity:'rare',     w:2,  petal:'#fff176', stem:'#5d4037', sell:72},
  magentaBougainvillea:{name:'Magenta Bougainvillea',kind:'bougainvillea', rarity:'rare',    w:3,  petal:'#e91e63', stem:'#795548', sell:68},
  // ── Legendary (15) ──────────────────────────────────────────
  blueRose:           {name:'Blue Rose',            kind:'rose',          rarity:'legendary',w:3,  petal:'#3f51b5', stem:'#388e3c', sell:60},
  blueTulip:          {name:'Blue Tulip',           kind:'tulip',         rarity:'legendary',w:3,  petal:'#1565c0', stem:'#1b5e20', sell:65},
  goldenRose:         {name:'Golden Rose',          kind:'rose',          rarity:'legendary',w:2,  petal:'#f9a825', stem:'#33691e', sell:75},
  blackRose:          {name:'Black Rose',           kind:'rose',          rarity:'legendary',w:1,  petal:'#212121', stem:'#1b5e20', sell:85},
  whitePeony:         {name:'White Peony',          kind:'peony',         rarity:'legendary',w:2,  petal:'#fafafa', stem:'#33691e', sell:80},
  pinkOrchid:         {name:'Pink Orchid',          kind:'orchid',        rarity:'legendary',w:2,  petal:'#f06292', stem:'#33691e', sell:85},
  blueOrchid:         {name:'Blue Orchid',          kind:'orchid',        rarity:'legendary',w:1,  petal:'#42a5f5', stem:'#1b5e20', sell:90},
  whiteLotus:         {name:'White Lotus',          kind:'lotus',         rarity:'legendary',w:3,  petal:'#fafafa', stem:'#006064', sell:80},
  saffron:            {name:'Saffron Crocus',        kind:'saffron',       rarity:'legendary',w:2,  petal:'#ba68c8', stem:'#f9a825', sell:85},
  whitePlumeria:      {name:'White Plumeria',       kind:'plumeria',      rarity:'legendary',w:2,  petal:'#fafafa', stem:'#5d4037', sell:80},
  greenHydrangea:     {name:'Green Hydrangea',      kind:'hydrangea',     rarity:'legendary',w:2,  petal:'#a5d6a7', stem:'#33691e', sell:80},
  whiteWisteria:      {name:'White Wisteria',       kind:'wisteria',      rarity:'legendary',w:2,  petal:'#fafafa', stem:'#795548', sell:82},
  redAmaryllis:       {name:'Red Amaryllis',        kind:'amaryllis',     rarity:'legendary',w:2,  petal:'#f44336', stem:'#33691e', sell:78},
  orangeBromeliad:    {name:'Orange Bromeliad',     kind:'bromeliad',     rarity:'legendary',w:2,  petal:'#ff8a65', stem:'#795548', sell:80},
  darkHellebore:      {name:'Dark Hellebore',       kind:'hellebore',     rarity:'legendary',w:1,  petal:'#4a148c', stem:'#1b5e20', sell:90},
  // ── Unique (1) ──────────────────────────────────────────────
  whiteLily:          {name:'White Lily',           kind:'lily',          rarity:'unique',   w:1,  petal:'#f5f5f5', stem:'#66bb6a', sell:200},
};
const RARITY_LABEL={common:'Common',uncommon:'Uncommon',rare:'★ Rare',legendary:'✦ Legendary',unique:'◆ Unique'};
const STAGE_NAMES=['🌰 Seed','🌱 Sprout','🌿 Growing','🌸 Bloomed!'];
const STAGE_WATERS=3,MAX_STAGE=3;

const PKT_COST={common:10,uncommon:30,rare:55,legendary:85};
const PKT_LABEL={common:'Common',uncommon:'Uncommon',rare:'Rare',legendary:'✦ Legendary'};
const PKT_ICON={common:'📦',uncommon:'🌹',rare:'💎',legendary:'✨'};

let G={
  coins:10,pkt:{common:3,uncommon:0,rare:0,legendary:0},seeds:[],seedId:0,
  plots:Array(6).fill(0).map((_,i)=>({id:i,state:'empty',key:null,stage:0,waters:0,rewarded:false})),
  water:10,maxWater:10,pumpClicks:0,
  bloomPlot:null,openedKey:null,plantPlot:null,pendingPktType:'common',
  discovered:[],opening:false,
};

const SAVE_KEY='yurieGarden_v1';
function saveG(){
  const s={
    coins:G.coins,pkt:G.pkt,seeds:G.seeds,seedId:G.seedId,
    plots:G.plots,water:G.water,
    maxWater:G.maxWater,pumpClicks:G.pumpClicks,discovered:G.discovered,
  };
  try{localStorage.setItem(SAVE_KEY,JSON.stringify(s));}catch(e){}
}
function loadG(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw) return false;
    const s=JSON.parse(raw);
    Object.assign(G,{
      coins:s.coins??G.coins,
      pkt:s.pkt??G.pkt,
      seeds:s.seeds??[],
      seedId:s.seedId??0,
      plots:s.plots??G.plots,
      water:s.water??G.water,
      maxWater:s.maxWater??G.maxWater,
      pumpClicks:s.pumpClicks??0,
      discovered:s.discovered??[],
    });
    return true;
  }catch(e){return false;}
}

function lighter(hex,a=52){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgb(${Math.min(255,r+a)},${Math.min(255,g+a)},${Math.min(255,b+a)})`;
}
function darker(hex,a=44){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgb(${Math.max(0,r-a)},${Math.max(0,g-a)},${Math.max(0,b-a)})`;
}

function flowerSVG(key,stage){
  const f=FLOWERS[key],p=f.petal,S=f.stem;
  const pl=lighter(p),pll=lighter(p,85),pd=darker(p),SD=darker(S,25);
  const rare=f.rarity==='rare'||f.rarity==='unique';
  if(stage===0) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="95" rx="14" ry="4" fill="#6d4c41" opacity=".3"/>
    <path d="M30 93 Q26 78 28 64 Q30 70 32 64 Q34 78 30 93" fill="${S}"/>
    <ellipse cx="30" cy="62" rx="5" ry="4" fill="${SD}" opacity=".9"/>
  </svg>`;
  // SUNFLOWER
  if(f.kind==='sunflower'){
    const ct='#795548',ctD='#4e342e';
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="68" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 83 Q19 76 17 67 Q25 71 30 79" fill="${S}"/><ellipse cx="30" cy="63" rx="6" ry="5" fill="${pd}" opacity=".7"/><ellipse cx="30" cy="61" rx="3.5" ry="2.5" fill="${p}" opacity=".6"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="50" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q16 70 14 60 Q24 65 30 74" fill="${S}"/><path d="M30 78 Q44 70 46 60 Q36 65 30 74" fill="${S}"/><ellipse cx="30" cy="20" rx="5" ry="9" fill="${p}" transform="rotate(0,30,40)" opacity=".8"/><ellipse cx="30" cy="20" rx="5" ry="9" fill="${p}" transform="rotate(90,30,40)" opacity=".8"/><ellipse cx="30" cy="20" rx="5" ry="9" fill="${p}" transform="rotate(180,30,40)" opacity=".8"/><ellipse cx="30" cy="20" rx="5" ry="9" fill="${p}" transform="rotate(270,30,40)" opacity=".8"/><circle cx="30" cy="40" r="9" fill="${ct}"/><circle cx="30" cy="40" r="7" fill="${ctD}"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="45" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q12 64 10 50 Q23 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(0,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(45,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(90,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(135,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(180,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(225,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(270,30,33)"/><ellipse cx="30" cy="19" rx="5.5" ry="10" fill="${p}" transform="rotate(315,30,33)"/><circle cx="30" cy="33" r="10" fill="${ct}"/><circle cx="30" cy="33" r="8" fill="${ctD}"/><circle cx="26" cy="29" r="1.5" fill="${ct}" opacity=".6"/><circle cx="31" cy="27" r="1.5" fill="${ct}" opacity=".6"/><circle cx="34" cy="31" r="1.5" fill="${ct}" opacity=".6"/><circle cx="29" cy="35" r="1.5" fill="${ct}" opacity=".6"/></svg>`;
  }
  // LAVENDER
  if(f.kind==='lavender'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="62" stroke="${S}" stroke-width="2" stroke-linecap="round"/><path d="M30 82 Q20 76 18 68 Q25 72 30 79" fill="${S}"/><ellipse cx="28" cy="60" rx="3" ry="4" fill="${p}" opacity=".65"/><ellipse cx="32" cy="57" rx="3" ry="4" fill="${p}" opacity=".65"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 80 Q17 73 15 63 Q24 67 30 75" fill="${S}"/><path d="M30 80 Q43 73 45 63 Q36 67 30 75" fill="${S}"/><line x1="30" y1="66" x2="22" y2="55" stroke="${S}" stroke-width="1.5"/><line x1="30" y1="66" x2="38" y2="55" stroke="${S}" stroke-width="1.5"/><ellipse cx="28" cy="53" rx="3.5" ry="5" fill="${p}" opacity=".8"/><ellipse cx="32" cy="49" rx="3" ry="4.5" fill="${p}" opacity=".8"/><ellipse cx="28" cy="44" rx="3" ry="4" fill="${p}" opacity=".75"/><ellipse cx="32" cy="40" rx="3" ry="4" fill="${p}" opacity=".7"/><ellipse cx="30" cy="35" rx="2.5" ry="3.5" fill="${p}" opacity=".65"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="55" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q15 70 13 58 Q23 64 30 72" fill="${S}"/><path d="M30 78 Q45 70 47 58 Q37 64 30 72" fill="${S}"/><line x1="30" y1="65" x2="21" y2="52" stroke="${S}" stroke-width="1.5"/><line x1="30" y1="65" x2="39" y2="52" stroke="${S}" stroke-width="1.5"/><ellipse cx="21" cy="50" rx="3" ry="4" fill="${pd}"/><ellipse cx="39" cy="50" rx="3" ry="4" fill="${pd}"/><ellipse cx="27" cy="55" rx="3.5" ry="5" fill="${p}"/><ellipse cx="33" cy="55" rx="3.5" ry="5" fill="${p}"/><ellipse cx="26" cy="47" rx="3" ry="4.5" fill="${p}"/><ellipse cx="34" cy="47" rx="3" ry="4.5" fill="${p}"/><ellipse cx="27" cy="39" rx="3" ry="4" fill="${p}"/><ellipse cx="33" cy="39" rx="3" ry="4" fill="${p}"/><ellipse cx="28" cy="32" rx="2.5" ry="3.5" fill="${p}"/><ellipse cx="32" cy="32" rx="2.5" ry="3.5" fill="${p}"/><ellipse cx="30" cy="25" rx="2.5" ry="3.5" fill="${p}"/><ellipse cx="30" cy="19" rx="2" ry="3" fill="${pd}" opacity=".9"/><ellipse cx="27" cy="54" rx="1.5" ry="1.5" fill="${pll}" opacity=".5"/><ellipse cx="33" cy="46" rx="1.5" ry="1.5" fill="${pll}" opacity=".45"/></svg>`;
  }
  // DAISY
  if(f.kind==='daisy'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="64" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 82 Q19 75 17 66 Q25 70 30 78" fill="${S}"/><ellipse cx="30" cy="59" rx="5" ry="4.5" fill="${pd}" opacity=".7"/><ellipse cx="30" cy="57" rx="3.5" ry="3" fill="${p}" opacity=".65"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 78 Q16 70 14 60 Q24 65 30 72" fill="${S}"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(0,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(45,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(90,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(135,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(180,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(225,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(270,30,44)"/><ellipse cx="30" cy="31" rx="3" ry="7" fill="${p}" opacity=".85" transform="rotate(315,30,44)"/><circle cx="30" cy="44" r="8" fill="#fdd835"/><circle cx="30" cy="44" r="6" fill="#f9a825"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="50" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 76 Q12 64 10 50 Q23 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="41" r="20" fill="${pll}" opacity=".4"/><circle cx="30" cy="41" r="20" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="11" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(0,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(30,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(60,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(90,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(120,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(150,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(180,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(210,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(240,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(270,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(300,30,41)"/><ellipse cx="30" cy="27" rx="3.5" ry="9" fill="${p}" transform="rotate(330,30,41)"/><circle cx="30" cy="41" r="10" fill="#fdd835"/><circle cx="30" cy="41" r="8" fill="#f9a825"/><circle cx="27" cy="38" r="1.5" fill="#e65100" opacity=".7"/><circle cx="33" cy="38" r="1.5" fill="#e65100" opacity=".7"/><circle cx="30" cy="44" r="1.5" fill="#e65100" opacity=".7"/></svg>`;
  }
  // POPPY
  if(f.kind==='poppy'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="63" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 82 Q19 75 17 65 Q25 70 30 78" fill="${S}"/><ellipse cx="30" cy="56" rx="7" ry="9" fill="${p}" opacity=".82"/><ellipse cx="30" cy="54" rx="4.5" ry="5.5" fill="${pl}" opacity=".55"/><ellipse cx="30" cy="52" rx="2.5" ry="3" fill="${pll}" opacity=".4"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="54" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q16 70 14 60 Q24 66 30 72" fill="${S}"/><circle cx="30" cy="30" r="12" fill="${p}" opacity=".88" transform="rotate(0,30,44)"/><circle cx="30" cy="30" r="12" fill="${pd}" opacity=".82" transform="rotate(90,30,44)"/><circle cx="30" cy="30" r="12" fill="${p}" opacity=".88" transform="rotate(180,30,44)"/><circle cx="30" cy="30" r="12" fill="${pd}" opacity=".82" transform="rotate(270,30,44)"/><circle cx="30" cy="44" r="9" fill="#1a1a1a"/><circle cx="30" cy="44" r="7" fill="#263238"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q12 64 10 52 Q23 58 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 52 Q37 58 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="39" r="20" fill="${pll}" opacity=".4"/><circle cx="30" cy="39" r="20" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="9" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<circle cx="30" cy="25" r="14" fill="${p}"/><circle cx="44" cy="39" r="14" fill="${pd}"/><circle cx="30" cy="53" r="14" fill="${p}"/><circle cx="16" cy="39" r="14" fill="${pd}"/><circle cx="30" cy="39" r="10" fill="#1a1a1a"/><circle cx="30" cy="39" r="8" fill="#263238"/><circle cx="28" cy="36" r="1.5" fill="#80cbc4" opacity=".8"/><circle cx="32" cy="36" r="1.5" fill="#80cbc4" opacity=".8"/><circle cx="33" cy="40" r="1.5" fill="#80cbc4" opacity=".8"/><circle cx="27" cy="40" r="1.5" fill="#80cbc4" opacity=".8"/><circle cx="30" cy="34" r="1.5" fill="#80cbc4" opacity=".75"/></svg>`;
  }
  // CHERRY BLOSSOM
  if(f.kind==='cherry'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="65" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 83 Q20 76 18 67 Q26 71 30 80" fill="${S}"/><ellipse cx="30" cy="60" rx="5" ry="5.5" fill="${p}" opacity=".78"/><ellipse cx="30" cy="58" rx="3" ry="3.5" fill="${pll}" opacity=".55"/><circle cx="27" cy="57" r="2" fill="${pd}" opacity=".6"/><circle cx="33" cy="57" r="2" fill="${pd}" opacity=".6"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="54" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 78 Q17 71 15 62 Q24 67 30 74" fill="${S}"/><ellipse cx="30" cy="30" rx="5.5" ry="8" fill="${p}" opacity=".88" transform="rotate(0,30,44)"/><ellipse cx="30" cy="30" rx="5.5" ry="8" fill="${pl}" opacity=".82" transform="rotate(72,30,44)"/><ellipse cx="30" cy="30" rx="5.5" ry="8" fill="${p}" opacity=".88" transform="rotate(144,30,44)"/><ellipse cx="30" cy="30" rx="5.5" ry="8" fill="${pl}" opacity=".82" transform="rotate(216,30,44)"/><ellipse cx="30" cy="30" rx="5.5" ry="8" fill="${p}" opacity=".88" transform="rotate(288,30,44)"/><circle cx="30" cy="44" r="6" fill="${pd}"/><circle cx="30" cy="44" r="4" fill="${pll}"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 76 Q14 65 12 52 Q23 58 30 70" fill="${S}"/><path d="M30 76 Q46 65 48 52 Q37 58 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="40" r="21" fill="${pll}" opacity=".35"/><circle cx="30" cy="40" r="21" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="9" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<ellipse cx="30" cy="23" rx="7" ry="10" fill="${p}" transform="rotate(0,30,40)"/><ellipse cx="30" cy="23" rx="7" ry="10" fill="${pl}" transform="rotate(72,30,40)"/><ellipse cx="30" cy="23" rx="7" ry="10" fill="${p}" transform="rotate(144,30,40)"/><ellipse cx="30" cy="23" rx="7" ry="10" fill="${pl}" transform="rotate(216,30,40)"/><ellipse cx="30" cy="23" rx="7" ry="10" fill="${p}" transform="rotate(288,30,40)"/><circle cx="30" cy="40" r="8" fill="${pd}"/><circle cx="30" cy="40" r="6" fill="${pll}"/><circle cx="28" cy="37" r="1.5" fill="${pd}" opacity=".8"/><circle cx="32" cy="37" r="1.5" fill="${pd}" opacity=".8"/><circle cx="30" cy="35" r="1.5" fill="${pd}" opacity=".7"/></svg>`;
  }
  // VIOLET
  if(f.kind==='violet'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="66" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="30" cy="61" rx="4" ry="5" fill="${p}" opacity=".85"/><ellipse cx="30" cy="59" rx="2.5" ry="3" fill="${pll}" opacity=".6"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="60" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 80 Q18 73 16 63 Q24 68 30 75" fill="${S}"/><ellipse cx="30" cy="41" rx="5" ry="8" fill="${p}" opacity=".85" transform="rotate(0,30,50)"/><ellipse cx="30" cy="41" rx="5" ry="8" fill="${pl}" opacity=".8" transform="rotate(72,30,50)"/><ellipse cx="30" cy="41" rx="5" ry="8" fill="${p}" opacity=".85" transform="rotate(144,30,50)"/><circle cx="30" cy="50" r="4" fill="#fdd835"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="58" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/><path d="M30 78 Q45 68 47 55 Q37 62 30 72" fill="${S}"/>${rare?`<circle cx="30" cy="38" r="20" fill="${pll}" opacity=".4"/><circle cx="30" cy="38" r="20" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="9" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<ellipse cx="30" cy="23" rx="6" ry="9" fill="${p}" transform="rotate(0,30,38)"/><ellipse cx="30" cy="23" rx="6" ry="9" fill="${p}" transform="rotate(72,30,38)"/><ellipse cx="30" cy="23" rx="6" ry="9" fill="${pl}" transform="rotate(144,30,38)"/><ellipse cx="30" cy="23" rx="6" ry="9" fill="${pl}" transform="rotate(216,30,38)"/><ellipse cx="30" cy="23" rx="6" ry="9" fill="${p}" transform="rotate(288,30,38)"/><circle cx="30" cy="38" r="6" fill="#fdd835"/><circle cx="30" cy="38" r="4" fill="#f9a825"/><ellipse cx="28" cy="36" rx="1" ry="1.5" fill="${pd}" opacity=".7"/><ellipse cx="32" cy="36" rx="1" ry="1.5" fill="${pd}" opacity=".7"/></svg>`;
  }
  // LILY
  if(f.kind==='lily'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="60" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/><path d="M25 62 Q24 52 30 47 Q36 52 35 62 Q32 65 30 66 Q28 65 25 62Z" fill="${p}" opacity=".85"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="54" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/><path d="M30 78 Q45 68 47 55 Q37 62 30 72" fill="${S}"/><path d="M21 55 Q18 42 30 37 Q42 42 39 55" fill="${p}" opacity=".88"/><path d="M25 55 Q22 43 30 38 Q38 43 35 55" fill="${pl}" opacity=".3"/><line x1="30" y1="52" x2="24" y2="44" stroke="${pd}" stroke-width="1.2"/><line x1="30" y1="52" x2="36" y2="44" stroke="${pd}" stroke-width="1.2"/><line x1="30" y1="52" x2="30" y2="40" stroke="${pd}" stroke-width="1.2"/><circle cx="24" cy="43" r="1.5" fill="${pd}"/><circle cx="36" cy="43" r="1.5" fill="${pd}"/><circle cx="30" cy="39" r="1.5" fill="${pd}"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q38 57 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="35" r="22" fill="${pll}" opacity=".35"/><circle cx="30" cy="35" r="22" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="5" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<ellipse cx="30" cy="20" rx="5" ry="12" fill="${p}" transform="rotate(0,30,38)"/><ellipse cx="30" cy="20" rx="5" ry="12" fill="${pl}" transform="rotate(60,30,38)"/><ellipse cx="30" cy="20" rx="5" ry="12" fill="${p}" transform="rotate(120,30,38)"/><ellipse cx="30" cy="20" rx="5" ry="12" fill="${pl}" transform="rotate(180,30,38)"/><ellipse cx="30" cy="20" rx="5" ry="12" fill="${p}" transform="rotate(240,30,38)"/><ellipse cx="30" cy="20" rx="5" ry="12" fill="${pl}" transform="rotate(300,30,38)"/><line x1="30" y1="38" x2="20" y2="26" stroke="${pd}" stroke-width="1.5"/><line x1="30" y1="38" x2="40" y2="26" stroke="${pd}" stroke-width="1.5"/><line x1="30" y1="38" x2="30" y2="22" stroke="${pd}" stroke-width="1.5"/><circle cx="20" cy="25" r="2" fill="${pd}"/><circle cx="40" cy="25" r="2" fill="${pd}"/><circle cx="30" cy="21" r="2" fill="${pd}"/></svg>`;
  }
  // IRIS
  if(f.kind==='iris'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="62" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/><path d="M26 64 Q25 54 30 49 Q35 54 34 64 Q32 67 30 68 Q28 67 26 64Z" fill="${p}" opacity=".85"/><ellipse cx="30" cy="54" rx="4" ry="5" fill="${pl}" opacity=".55"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="55" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q15 68 13 56 Q23 62 30 72" fill="${S}"/><path d="M17 55 Q22 42 30 43 Q38 42 43 55 Q38 61 30 62 Q22 61 17 55Z" fill="${p}" opacity=".88"/><path d="M22 49 Q27 40 30 43 Q33 40 38 49 Q34 54 30 55 Q26 54 22 49Z" fill="${pl}" opacity=".4"/><ellipse cx="25" cy="43" rx="4" ry="6" fill="${p}" opacity=".8" transform="rotate(-15,25,43)"/><ellipse cx="35" cy="43" rx="4" ry="6" fill="${p}" opacity=".8" transform="rotate(15,35,43)"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="36" r="22" fill="${pll}" opacity=".35"/><circle cx="30" cy="36" r="22" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="6" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<path d="M12 52 Q18 36 30 40 Q42 36 48 52 Q40 62 30 63 Q20 62 12 52Z" fill="${p}"/><path d="M18 50 Q22 38 30 40 Q38 38 42 50 Q36 57 30 58 Q24 57 18 50Z" fill="${pl}" opacity=".4"/><ellipse cx="20" cy="36" rx="5" ry="9" fill="${p}" transform="rotate(-30,20,36)"/><ellipse cx="40" cy="36" rx="5" ry="9" fill="${p}" transform="rotate(30,40,36)"/><ellipse cx="30" cy="26" rx="5" ry="8" fill="${pl}"/><ellipse cx="28" cy="50" rx="2" ry="3" fill="#fdd835" opacity=".8"/><ellipse cx="32" cy="50" rx="2" ry="3" fill="#fdd835" opacity=".8"/></svg>`;
  }
  // DAFFODIL
  if(f.kind==='daffodil'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="56" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q20 72 18 63 Q25 68 30 76" fill="${S}"/><ellipse cx="30" cy="50" rx="5" ry="8" fill="${p}" opacity=".82" transform="rotate(-20,30,50)"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="54" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/><ellipse cx="30" cy="27" rx="5" ry="11" fill="${p}" opacity=".85" transform="rotate(0,30,42)"/><ellipse cx="30" cy="27" rx="5" ry="11" fill="${p}" opacity=".85" transform="rotate(60,30,42)"/><ellipse cx="30" cy="27" rx="5" ry="11" fill="${p}" opacity=".85" transform="rotate(120,30,42)"/><ellipse cx="30" cy="27" rx="5" ry="11" fill="${p}" opacity=".85" transform="rotate(180,30,42)"/><ellipse cx="30" cy="27" rx="5" ry="11" fill="${p}" opacity=".85" transform="rotate(240,30,42)"/><ellipse cx="30" cy="27" rx="5" ry="11" fill="${p}" opacity=".85" transform="rotate(300,30,42)"/><circle cx="30" cy="42" r="9" fill="${pd}"/><circle cx="30" cy="42" r="7" fill="#fdd835" opacity=".9"/><circle cx="30" cy="42" r="5" fill="${p}"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="50" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q12 64 10 50 Q23 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="35" r="22" fill="${pll}" opacity=".35"/><circle cx="30" cy="35" r="22" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="5" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<ellipse cx="30" cy="20" rx="5.5" ry="12" fill="${p}" transform="rotate(0,30,38)"/><ellipse cx="30" cy="20" rx="5.5" ry="12" fill="${p}" transform="rotate(60,30,38)"/><ellipse cx="30" cy="20" rx="5.5" ry="12" fill="${p}" transform="rotate(120,30,38)"/><ellipse cx="30" cy="20" rx="5.5" ry="12" fill="${p}" transform="rotate(180,30,38)"/><ellipse cx="30" cy="20" rx="5.5" ry="12" fill="${p}" transform="rotate(240,30,38)"/><ellipse cx="30" cy="20" rx="5.5" ry="12" fill="${p}" transform="rotate(300,30,38)"/><circle cx="30" cy="38" r="11" fill="${pd}"/><circle cx="30" cy="38" r="9" fill="#fdd835"/><circle cx="30" cy="38" r="6" fill="${darker(p,20)}" opacity=".9"/><circle cx="30" cy="38" r="4" fill="${pll}" opacity=".7"/></svg>`;
  }
  // PEONY
  if(f.kind==='peony'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="62" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 80 Q19 73 17 63 Q25 68 30 77" fill="${S}"/><circle cx="30" cy="55" r="9" fill="${p}" opacity=".88"/><circle cx="30" cy="53" r="6" fill="${pl}" opacity=".65"/><circle cx="30" cy="51" r="3.5" fill="${pll}" opacity=".5"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="54" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q15 68 13 55 Q23 62 30 72" fill="${S}"/><path d="M30 78 Q45 68 47 55 Q37 62 30 72" fill="${S}"/><circle cx="30" cy="38" r="16" fill="${p}" opacity=".9"/><circle cx="22" cy="34" r="12" fill="${pl}"/><circle cx="38" cy="34" r="12" fill="${pl}"/><circle cx="30" cy="28" r="12" fill="${p}"/><circle cx="30" cy="40" r="10" fill="${pd}"/><circle cx="30" cy="37" r="7" fill="${pl}"/><circle cx="30" cy="35" r="4" fill="${pll}" opacity=".8"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="50" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q12 64 10 50 Q22 57 30 70" fill="${S}"/><path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="32" r="24" fill="${pll}" opacity=".35"/><circle cx="30" cy="32" r="24" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="2" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<circle cx="30" cy="33" r="19" fill="${p}"/><circle cx="18" cy="27" r="14" fill="${pl}"/><circle cx="42" cy="27" r="14" fill="${pl}"/><circle cx="30" cy="20" r="14" fill="${p}"/><circle cx="18" cy="37" r="12" fill="${pd}"/><circle cx="42" cy="37" r="12" fill="${pd}"/><circle cx="30" cy="43" r="13" fill="${p}"/><circle cx="30" cy="31" r="10" fill="${pl}"/><circle cx="30" cy="28" r="7" fill="${pll}"/><circle cx="28" cy="25" r="1.5" fill="#fdd835" opacity=".9"/><circle cx="32" cy="25" r="1.5" fill="#fdd835" opacity=".9"/><circle cx="30" cy="23" r="1.5" fill="#fdd835" opacity=".9"/></svg>`;
  }
  // ORCHID
  if(f.kind==='orchid'){
    if(stage===1) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="96" x2="30" y2="60" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/><path d="M30 80 Q20 74 18 65 Q25 69 30 77" fill="${S}"/><ellipse cx="30" cy="55" rx="4.5" ry="6.5" fill="${p}" opacity=".85"/><ellipse cx="30" cy="53" rx="2.5" ry="3.5" fill="${pll}" opacity=".6"/></svg>`;
    if(stage===2) return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="54" stroke="${S}" stroke-width="3" stroke-linecap="round"/><path d="M30 78 Q16 70 14 57 Q24 64 30 73" fill="${S}"/><ellipse cx="21" cy="40" rx="5" ry="10" fill="${p}" opacity=".88" transform="rotate(-30,21,40)"/><ellipse cx="39" cy="40" rx="5" ry="10" fill="${p}" opacity=".88" transform="rotate(30,39,40)"/><ellipse cx="30" cy="30" rx="5" ry="9" fill="${pl}" opacity=".85"/><ellipse cx="30" cy="48" rx="7" ry="5" fill="${pd}" opacity=".9"/><ellipse cx="30" cy="48" rx="4" ry="3" fill="${pll}" opacity=".7"/></svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/><line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/><path d="M30 76 Q13 65 11 50 Q23 57 30 70" fill="${S}"/><path d="M30 76 Q47 65 49 50 Q37 57 30 70" fill="${S}"/>${rare?`<circle cx="30" cy="34" r="22" fill="${pll}" opacity=".35"/><circle cx="30" cy="34" r="22" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="4" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}<ellipse cx="16" cy="36" rx="5" ry="12" fill="${p}" transform="rotate(-40,16,36)"/><ellipse cx="44" cy="36" rx="5" ry="12" fill="${p}" transform="rotate(40,44,36)"/><ellipse cx="30" cy="20" rx="4.5" ry="10" fill="${pl}"/><ellipse cx="18" cy="50" rx="5" ry="9" fill="${pl}" transform="rotate(25,18,50)"/><ellipse cx="42" cy="50" rx="5" ry="9" fill="${pl}" transform="rotate(-25,42,50)"/><ellipse cx="30" cy="44" rx="9" ry="7" fill="${pd}"/><ellipse cx="30" cy="44" rx="6" ry="4.5" fill="${pll}"/><ellipse cx="30" cy="43" rx="3" ry="2.5" fill="${p}" opacity=".7"/><circle cx="30" cy="41" r="2" fill="#fdd835" opacity=".9"/></svg>`;
  }
  if(stage===1){
    if(f.kind==='tulip') return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/>
      <line x1="30" y1="96" x2="30" y2="62" stroke="${S}" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 80 Q18 72 16 62 Q24 67 30 77" fill="${S}"/>
      <path d="M25 65 Q24 56 30 51 Q36 56 35 65 Q32 68 30 69 Q28 68 25 65Z" fill="${p}" opacity=".82"/>
    </svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="97" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/>
      <line x1="30" y1="96" x2="30" y2="62" stroke="${S}" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 82 Q17 73 15 62 Q23 67 30 78" fill="${S}"/>
      <circle cx="30" cy="53" r="9.5" fill="${pll}" opacity=".8"/>
      <circle cx="30" cy="53" r="7" fill="${p}" opacity=".85"/>
    </svg>`;
  }
  if(stage===2){
    if(f.kind==='tulip') return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/>
      <line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 78 Q14 67 12 54 Q23 61 30 73" fill="${S}"/>
      <path d="M30 78 Q46 67 48 54 Q37 61 30 73" fill="${S}"/>
      <path d="M22 55 Q21 40 30 35 Q39 40 38 55 Q35 60 30 61 Q25 60 22 55Z" fill="${p}"/>
      <path d="M26 55 Q25 41 30 36 Q35 41 34 55" fill="${pl}" opacity=".3"/>
    </svg>`;
    return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="99" rx="13" ry="3.5" fill="#6d4c41" opacity=".28"/>
      <line x1="30" y1="98" x2="30" y2="52" stroke="${S}" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 78 Q14 67 12 53 Q23 60 30 72" fill="${S}"/>
      <path d="M30 78 Q46 67 48 53 Q37 60 30 72" fill="${S}"/>
      <circle cx="30" cy="43" r="14" fill="${pll}" opacity=".7"/>
      <circle cx="22" cy="39" r="10" fill="${pl}"/>
      <circle cx="38" cy="39" r="10" fill="${pl}"/>
      <circle cx="30" cy="36" r="10" fill="${p}"/>
      <circle cx="30" cy="44" r="10" fill="${pd}"/>
    </svg>`;
  }
  if(f.kind==='tulip') return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/>
    <line x1="30" y1="98" x2="30" y2="48" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M30 75 Q12 62 10 47 Q22 55 30 68" fill="${S}"/>
    <path d="M30 75 Q48 62 50 47 Q38 55 30 68" fill="${S}"/>
    ${rare?`<circle cx="30" cy="38" r="22" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".65"/><text x="30" y="11" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`:''}
    <path d="M18 49 Q17 30 30 23 Q43 30 42 49 Q38 55 30 57 Q22 55 18 49Z" fill="${p}"/>
    <path d="M23 49 Q22 32 30 25 Q38 32 37 49" fill="${pl}" opacity=".28"/>
    <path d="M24 31 Q27 24 30 23" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M30 23 Q34 24 36 30" stroke="rgba(255,255,255,.38)" stroke-width="1" stroke-linecap="round"/>
    <ellipse cx="30" cy="50" rx="5" ry="4" fill="${pd}" opacity=".35"/>
  </svg>`;
  return `<svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="99" rx="13" ry="4" fill="#6d4c41" opacity=".28"/>
    <line x1="30" y1="98" x2="30" y2="50" stroke="${S}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M30 76 Q12 64 10 50 Q23 57 30 70" fill="${S}"/>
    <path d="M30 76 Q48 64 50 50 Q37 57 30 70" fill="${S}"/>
    <path d="M25 65 L18 55" stroke="${S}" stroke-width="2"/>
    ${rare
      ?`<circle cx="30" cy="32" r="17" fill="${pll}" opacity=".55"/>
         <circle cx="30" cy="32" r="17" fill="none" stroke="#7986cb" stroke-width="2" stroke-dasharray="4 3" opacity=".7"/>
         <text x="30" y="12" text-anchor="middle" font-size="7" fill="#5c6bc0" opacity=".9">✦ ✦ ✦</text>`
      :`<circle cx="30" cy="32" r="15" fill="${pll}"/>`
    }
    <circle cx="21" cy="27" r="10" fill="${pl}"/>
    <circle cx="39" cy="27" r="10" fill="${pl}"/>
    <circle cx="30" cy="22" r="10" fill="${p}"/>
    <circle cx="22" cy="36" r="9"  fill="${p}"/>
    <circle cx="38" cy="36" r="9"  fill="${p}"/>
    <circle cx="30" cy="35" r="10" fill="${pd}"/>
    <circle cx="30" cy="31" r="6"  fill="${pd}"/>
    <circle cx="30" cy="29" r="3.5" fill="${darker(p,75)}"/>
  </svg>`;
}

function initPetals(){
  const pool=['🌸','🌷','✿','❀','💮','🌺'];
  for(let i=0;i<14;i++){
    const el=document.createElement('div');
    el.className='petal';
    el.textContent=pool[Math.floor(Math.random()*pool.length)];
    const left=5+Math.random()*90,dur=13+Math.random()*18,delay=Math.random()*20;
    el.style.cssText=`left:${left}%;font-size:${.7+Math.random()*.8}em;animation-duration:${dur}s;animation-delay:-${delay}s;`;
    document.body.appendChild(el);
  }
}

// Start game immediately — no welcome screen
loadG();
initGame();

function initGame(){
  initPetals();
  renderGarden();renderTray();renderDrops();updateHUD();renderPump();
}
function updateHUD(){
  document.getElementById('coinDisp').textContent=G.coins;
  const total=Object.values(G.pkt).reduce((a,b)=>a+b,0);
  document.getElementById('pktDisp').textContent=total;
}

function renderDrops(){
  const row=document.getElementById('dropRow');
  row.innerHTML='';
  for(let i=0;i<G.maxWater;i++){
    const d=document.createElement('div');
    d.className='wdrop '+(i<G.water?'full':'empty');
    row.appendChild(d);
  }
}
function renderPump(){
  const pct=(G.pumpClicks/5)*100;
  const fill=document.getElementById('pumpProgFill');
  const lbl=document.getElementById('pumpProgLbl');
  const plbl=document.getElementById('pumpLabel');
  if(fill) fill.style.width=pct+'%';
  if(lbl)  lbl.textContent=G.pumpClicks+'/5';
  if(plbl) plbl.textContent=G.water>=G.maxWater?'Tank full! 💧':`Pump! (${5-G.pumpClicks} more)`;
}
function pumpClick(){
  if(G.water>=G.maxWater){toast('Watering can is full! 💧',1400);return;}
  G.pumpClicks++;
  // animate handle
  const h=document.getElementById('pumpHandle');
  if(h){h.classList.remove('pumping');void h.offsetWidth;h.classList.add('pumping');}
  // water drip from spout every 2 clicks
  if(G.pumpClicks%2===0){
    const btn=document.getElementById('pumpBtn');
    if(btn){const r=btn.getBoundingClientRect();spawnSplash(r.left+26,r.top+84);}
  }
  if(G.pumpClicks>=5){
    G.pumpClicks=0;
    G.water=Math.min(G.maxWater,G.water+1);
    renderDrops();
    spawnSparkle(window.innerWidth/2,window.innerHeight*.38,'💧');
    toast('+1 water! Keep pumping 💧',1200);
  }
  renderPump();
  saveG();
}

function renderGarden(){
  const grid=document.getElementById('gardenGrid');
  grid.innerHTML='';
  G.plots.forEach((p,i)=>grid.appendChild(buildPlotCard(p,i)));
}
function potCardSVG(p){
  // Terra cotta colours
  const rH='#e8724e',rM='#c9522a',rD='#a83e18';
  const bM='#c24e26',bS='#7a3010';
  const sl='#4e342e',sm='#3e2723',sd='#2a1810';

  // Flower nested into upper 64px of the 103-tall viewBox
  let flPart='';
  if(p.state!=='empty'){
    const stage=p.state==='bloomed'?MAX_STAGE:p.stage;
    const fsvg=flowerSVG(p.key,stage);
    flPart=fsvg.replace(/^<svg /,'<svg x="7" y="0" width="66" height="64" ');
  } else {
    flPart=`<text x="40" y="42" text-anchor="middle" font-size="19"
      fill="rgba(175,100,55,.42)" font-weight="bold">+</text>
      <text x="40" y="54" text-anchor="middle" font-size="6.5"
      fill="rgba(175,100,55,.38)" font-weight="bold">tap to plant</text>`;
  }

  // Progress bar (growing/bloomed states)
  let barEl='';
  if(p.state!=='empty'){
    const totalSteps=MAX_STAGE*STAGE_WATERS;
    const doneSteps=p.stage*STAGE_WATERS+p.waters;
    const barPct=p.state==='bloomed'?100:Math.round(doneSteps/totalSteps*100);
    const barW=Math.round(barPct*50/100);
    barEl=`<rect x="15" y="93.5" width="50" height="3" rx="1.5" fill="rgba(0,0,0,.2)"/>
      <rect x="15" y="93.5" width="${barW}" height="3" rx="1.5" fill="#81c784"/>`;
  }

  const labelEl='';

  // Pips (watering progress dots)
  let pipEls='';
  if(p.state==='growing'){
    for(let w=0;w<STAGE_WATERS;w++){
      const cx=52+w*8,on=w<p.waters;
      pipEls+=`<circle cx="${cx}" cy="9" r="4"
        fill="${on?'#64b5f6':'rgba(255,255,255,.3)'}"
        filter="drop-shadow(0 1px 2px rgba(0,0,0,.4))"/>`;
    }
  }

  // Rare/legendary crown badge
  const _rar=p.state!=='empty'?FLOWERS[p.key].rarity:'';
  const crownEl=_rar==='unique'
    ?`<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(233,30,99,.92)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u25c6 U</text>`
    :_rar==='legendary'
    ?`<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(230,81,0,.88)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u2726 L</text>`
    :_rar==='rare'
    ?`<rect x="4" y="3" width="22" height="13" rx="3" fill="rgba(25,118,210,.86)"/>
      <text x="15" y="12.5" text-anchor="middle" font-size="6.5"
        fill="#fff" font-weight="bold">\u2605 R</text>`
    :'';

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
    ${labelEl}
  </svg>`;
}

function buildPlotCard(p,i){
  const div=document.createElement('div');
  div.className='plot'+(p.state==='bloomed'?' bloomed':p.state==='growing'?' has-plant':'');
  div.onclick=()=>clickPlot(i);
  const lbl=p.state==='empty'?''
    :p.state==='bloomed'?'\u2728 '+FLOWERS[p.key].name
    :STAGE_NAMES[p.stage];
  div.innerHTML=potCardSVG(p)+(lbl?`<div class="pot-lbl">${lbl}</div>`:'');
  return div;
}
function clickPlot(i){
  const p=G.plots[i];
  if(p.state==='empty'){
    if(!G.seeds.length){toast('No seeds! Open a packet first 📦',2000);return;}
    openPlantModal(i);
  }else if(p.state==='bloomed'){
    openBloomModal(i);
  }else{
    waterPlot(i);
  }
}
function waterPlot(i){
  if(G.water<=0){toast('No water! Pump more at the well 🚰',2000);return;}
  G.water--;G.plots[i].waters++;renderDrops();
  const tiles=document.querySelectorAll('.plot');
  if(tiles[i]){tiles[i].classList.add('watered');setTimeout(()=>tiles[i].classList.remove('watered'),380);}
  if(tiles[i]){
    const r=tiles[i].getBoundingClientRect();
    spawnSplash(r.left+r.width/2,r.top+r.height/3);
  }
  if(G.plots[i].waters>=STAGE_WATERS){
    G.plots[i].waters=0;G.plots[i].stage++;
    if(G.plots[i].stage>=MAX_STAGE){
      G.plots[i].stage=MAX_STAGE;G.plots[i].state='bloomed';
      if(!G.plots[i].rewarded){G.pkt.common++;G.plots[i].rewarded=true;updateHUD();}
      saveG();
      setTimeout(()=>{renderGarden();confettiBurst();openBloomModal(i);},350);
    }else{
      renderGarden();
      saveG();
      toast(`${STAGE_NAMES[G.plots[i].stage]} — keep watering! 🌿`,1500);
    }
  }else{renderGarden();saveG();}
}

function renderTray(){
  const tray=document.getElementById('trayItems');
  if(!G.seeds.length){tray.innerHTML='<div class="tray-empty">Open a seed packet to start growing! 📦</div>';return;}
  tray.innerHTML='';
  const groups={};
  G.seeds.forEach(s=>{groups[s.key]=(groups[s.key]||0)+1;});
  Object.entries(groups).forEach(([key,cnt])=>{
    const f=FLOWERS[key];
    const chip=document.createElement('div');
    chip.className=`seed-chip ${f.rarity}`;
    chip.innerHTML=`
      <div class="chip-svg">${flowerSVG(key,1)}</div>
      <span class="chip-name">${f.name}</span>
      ${cnt>1?`<span class="chip-cnt">x${cnt}</span>`:''}
    `;
    tray.appendChild(chip);
  });
}

function openPktModal(){
  const total=Object.values(G.pkt).reduce((a,b)=>a+b,0);
  if(!total){toast('No packets! Buy some in the shop 🛒',2000);return;}
  G.openedKey=null;G.opening=false;
  // render selector cards
  const types=['common','uncommon','rare','legendary'];
  document.getElementById('pktSelector').innerHTML=types.map(t=>{
    const cnt=G.pkt[t]||0;
    return `<div class="pkt-sel-card pkt-${t}${cnt?'':' empty'}" onclick="selectPktType('${t}')">
      <span class="pkt-sel-icon">${PKT_ICON[t]}</span>
      <span class="pkt-sel-name">${PKT_LABEL[t]} Packet</span>
      <span class="pkt-sel-cnt${cnt?'':' none'}">×${cnt}</span>
    </div>`;
  }).join('');
  document.getElementById('pktSelector').style.display='';
  document.getElementById('pktOpenWrap').style.display='none';
  document.getElementById('pktResult').classList.remove('show');
  document.getElementById('pktTitle').textContent='🎁 Open a Packet';
  openModal('pktOverlay');
}
function selectPktType(type){
  if(!G.pkt[type]||G.opening) return;
  G.pendingPktType=type;
  G.opening=true;
  document.getElementById('pktSelector').style.display='none';
  document.getElementById('pktTitle').textContent=`${PKT_ICON[type]} Open a ${PKT_LABEL[type]} Packet`;
  const card=document.getElementById('pktCardEl');
  card.className=`pkt-card t-${type}`;
  card.querySelector('.pkt-icon').textContent=PKT_ICON[type];
  document.getElementById('pktOpenWrap').style.display='';
  document.getElementById('pktHint').style.display='';
  setTimeout(()=>{
    card.classList.add('shaking');
    setTimeout(()=>{
      G.pkt[type]--;updateHUD();saveG();
      G.openedKey=weightedRandom(type);
      const f=FLOWERS[G.openedKey];
      document.getElementById('pktOpenWrap').style.display='none';
      document.getElementById('resFlower').innerHTML=`<div style="width:100%;height:100%">${flowerSVG(G.openedKey,MAX_STAGE)}</div>`;
      document.getElementById('resName').textContent=f.name;
      const rl=document.getElementById('resRarity');
      rl.textContent=RARITY_LABEL[f.rarity];
      rl.className=`res-rarity ${f.rarity}`;
      const msgs={
        common:'A lovely flower for your garden! 🌸',
        uncommon:'A beautiful find — how wonderful! 💕',
        rare:`✨ A rare ${f.name}! A stunning bloom, so hard to find! ✨`,
        legendary:`🌟 OH WOW! A legendary ${f.name}! One of the rarest flowers — just like you, one of a kind! 🌟`,
        unique:`💎 UNBELIEVABLE! A WHITE LILY — the UNIQUE flower! Only one in the entire garden. You are truly one of a kind! 🌟💎`,
      };
      document.getElementById('resMsg').textContent=msgs[f.rarity]||'A beautiful flower! 🌸';
      document.getElementById('pktResult').classList.add('show');
      G.opening=false;
      if(f.rarity==='legendary'||f.rarity==='unique'){multiSparkle();}
      if(f.rarity==='unique') confettiBurst();
      else spawnSparkle(window.innerWidth/2,window.innerHeight*.4,'✨');
    },540);
  },100);
}
function collectSeed(){
  if(!G.openedKey) return;
  if(!G.discovered.includes(G.openedKey)) G.discovered.push(G.openedKey);
  G.seeds.push({id:G.seedId++,key:G.openedKey});G.openedKey=null;
  closeModal('pktOverlay');renderTray();saveG();
  toast('Seed added to your tray! 🌱',1600);
}

function openPlantModal(plotIdx){
  G.plantPlot=plotIdx;
  const list=document.getElementById('plantList');
  list.innerHTML='';
  const groups={};
  G.seeds.forEach(s=>{groups[s.key]=(groups[s.key]||0)+1;});
  Object.entries(groups).forEach(([key,cnt])=>{
    const f=FLOWERS[key];
    const btn=document.createElement('button');
    btn.className=`plant-row ${f.rarity}`;
    btn.innerHTML=`
      <div class="pr-svg">${flowerSVG(key,2)}</div>
      <div class="pr-info">
        <div class="pr-name">${f.name}</div>
        <div class="pr-sub">${RARITY_LABEL[f.rarity]} · sells for <span class="ic">C</span>${f.sell}</div>
        <div class="pr-cnt">x${cnt} in your tray</div>
      </div>
      <span class="pr-badge ${f.rarity}">${RARITY_LABEL[f.rarity]}</span>
    `;
    btn.onclick=()=>plantSeed(key,plotIdx);
    list.appendChild(btn);
  });
  openModal('plantOverlay');
}
function plantSeed(key,plotIdx){
  const idx=G.seeds.findIndex(s=>s.key===key);
  if(idx===-1) return;
  if(!G.discovered.includes(key)) G.discovered.push(key);
  G.seeds.splice(idx,1);
  G.plots[plotIdx]={id:plotIdx,state:'growing',key,stage:0,waters:0,rewarded:false};
  closeModal('plantOverlay');renderGarden();renderTray();saveG();
  toast(`${FLOWERS[key].name} planted! 💧 Water it to grow!`,2000);
}

function openBloomModal(i){
  G.bloomPlot=i;
  const f=FLOWERS[G.plots[i].key];
  document.getElementById('bloomFlEl').innerHTML=flowerSVG(G.plots[i].key,MAX_STAGE);
  document.getElementById('bloomTitle').textContent=`${f.name} is fully bloomed! 🎉`;
  document.getElementById('bloomSub').textContent=
    f.rarity==='unique'
      ?`💎 The rarest flower in existence — your White Lily is in full bloom! ✨ Truly one of a kind!`
      :f.rarity==='rare'
      ?`💙 A legendary ${f.name} — incredibly rare and gorgeous! ✨`
      :f.rarity==='uncommon'
        ?`Your ${f.name.toLowerCase()} is absolutely stunning! 💕`
        :`Beautiful! Your ${f.name.toLowerCase()} is glowing! 🌸`;
  document.getElementById('btnSell').innerHTML=`💰 Sell for <span class="ic">C</span><span class="coin-val">${f.sell}</span>`;
  document.getElementById('btnSell').onclick=sellFlower;
  openModal('bloomOverlay');
}
function sellFlower(){
  if(G.bloomPlot===null) return;
  const key=G.plots[G.bloomPlot].key;
  const f=FLOWERS[key];
  if(!G.discovered.includes(key)) G.discovered.push(key);
  G.coins+=f.sell;clearPlot(G.bloomPlot);closeModal('bloomOverlay');updateHUD();saveG();
  toast(`Sold for ${f.sell} coins! 💰`,2000);
}
function clearPlot(i){
  G.plots[i]={id:i,state:'empty',key:null,stage:0,waters:0,rewarded:false};renderGarden();
}

function openJournalModal(){
  const order=[
    // Common (59)
    'pinkTulip','redTulip','yellowTulip','purpleViolet','blueViolet','purpleIris','yellowDaffodil','whiteDaisy','yellowDaisy','pinkDaisy',
    'pinkCarnation','redCarnation','whiteCarnation','purpleHyacinth','pinkHyacinth','yellowChrysanthemum','pinkChrysanthemum',
    'redGeranium','pinkGeranium','blueBluebell','purpleBluebell','yellowMarigold','orangeMarigold','purplePansy','yellowPansy',
    'pinkPetunia','purplePetunia','yellowPrimrose','pinkPrimrose','purpleCrocus','yellowCrocus','orangeCalendula','yellowCalendula',
    'pinkCosmos','whiteCosmos','pinkZinnia','orangeZinnia','pinkSnapdragon','yellowSnapdragon','blueForgetMeNot',
    'pinkAster','purpleAster','blueCornflower','pinkImpatiens','pinkVerbena','purpleHeather','purpleStatice',
    'orangeGerbera','pinkGerbera','blackEyedSusan','blueSalvia','yellowAlstroemeria','orangeNasturtium',
    'pinkPhlox','purpleVeronica','pinkSweetPea','yellowWallflower','redGaillardia','pinkStock',
    // Uncommon (46)
    'sunflower','lavender','whiteTulip','redRose','pinkRose','pinkLily','blueIris','whiteDaffodil','whiteViolet','pinkPeony',
    'redPoppy','orangePoppy','cherryBlossom','deepCherry','yellowRose','peachRose','purpleRose',
    'pinkAlstroemeria','blueHyacinth','purpleChrysanthemum','whiteMagnolia','pinkMagnolia',
    'redBegonia','pinkBegonia','pinkDahlia','purpleDahlia','orangeDahlia','pinkAzalea',
    'redAnemone','purpleAnemone','yellowFreesia','pinkFreesia','pinkGladiolus','purpleGladiolus',
    'pinkHibiscus','redHibiscus','lilyValley','purpleWisteria','purpleFoxglove','pinkFoxglove',
    'whiteGardenia','pinkCyclamen','pinkRanunculus','whiteJasmine','purpleBuddleia','purpleLantana',
    // Rare (27)
    'tigerLily','goldenIris','pinkDaffodil','redPeony','purpleOrchid','blackTulip','silverRose','crystalDaisy','violetPoppy','goldenCherry','midnightRose',
    'purpleCarnation','pinkFuchsia','purpleClematis','blueHydrangea','pinkHydrangea','whiteCamellia','redCamellia',
    'pinkLotus','pinkPlumeria','pinkBleedingHeart','blueMorningGlory','purpleHellebore','purpleAllium','purpleGloxinia','yellowPlumeria','magentaBougainvillea',
    // Legendary (15)
    'blueRose','blueTulip','goldenRose','blackRose','whitePeony','pinkOrchid','blueOrchid',
    'whiteLotus','saffron','whitePlumeria','greenHydrangea','whiteWisteria','redAmaryllis','orangeBromeliad','darkHellebore',
    // Unique (1)
    'whiteLily',
  ];
  const grid=document.getElementById('jnlGrid');
  grid.innerHTML='';
  const unlocked=order.filter(k=>G.discovered.includes(k)).length;
  document.getElementById('jnlProg').textContent=`${unlocked} / ${order.length} flowers discovered`;
  order.forEach(key=>{
    const f=FLOWERS[key];
    const known=G.discovered.includes(key);
    const card=document.createElement('div');
    card.className='jnl-card'+(known?'':' jlocked');
    const svgHtml=flowerSVG(key,3);
    card.innerHTML=`
      <div class="jnl-svg${known?'':' jsilhouette'}">${svgHtml}</div>
      <div class="jnl-name${known?'':' jlocked'}">${known?f.name:'??????'}</div>
      <span class="jnl-badge ${f.rarity}">${RARITY_LABEL[f.rarity]}</span>
      <div class="jnl-sell${known?'':' jhide'}"><span class="ic" style="width:13px;height:13px;font-size:.6em">C</span>${f.sell}</div>
    `;
    grid.appendChild(card);
  });
  openModal('journalOverlay');
}
function openShopModal(){openModal('shopOverlay');}
function buyPacket(type){
  const cost=PKT_COST[type];
  if(G.coins<cost){toast(`Need ${cost} coins for a ${PKT_LABEL[type]} Packet! 💰`,2000);return;}
  G.coins-=cost;G.pkt[type]++;updateHUD();closeModal('shopOverlay');saveG();
  toast(`${PKT_ICON[type]} ${PKT_LABEL[type]} Packet bought!`,1600);
}

// .tbtn already has touch-action:manipulation so iOS fires click immediately (no 300ms delay)
// We use a time guard on backdrop-dismiss to stop any stray click from closing a freshly opened modal
let _modalOpenTime=0;
function openModal(id){
  document.querySelectorAll('.overlay.on').forEach(o=>{if(o.id!==id)o.classList.remove('on');});
  document.getElementById(id).classList.add('on');
  _modalOpenTime=Date.now();
  if(id!=='pktOverlay') G.opening=false;
}
function closeModal(id){document.getElementById(id).classList.remove('on');}
// Backdrop dismiss — handles both click (desktop) and touchstart (mobile)
function _backdropDismiss(o, e){
  if(e.target!==o) return;
  if(Date.now()-_modalOpenTime<900) return;
  e.preventDefault();
  o.classList.remove('on');
  if(o.id==='pktOverlay') G.opening=false;
}
document.querySelectorAll('.overlay').forEach(o=>{
  o.addEventListener('click',     e=>_backdropDismiss(o,e));
  o.addEventListener('touchstart',e=>_backdropDismiss(o,e),{passive:false});
});

const PKT_POOLS={
  common:{
    // common flowers
    pinkTulip:30,redTulip:26,yellowTulip:22,purpleViolet:20,blueViolet:18,purpleIris:14,yellowDaffodil:18,whiteDaisy:20,yellowDaisy:16,pinkDaisy:12,
    pinkCarnation:25,redCarnation:22,whiteCarnation:20,purpleHyacinth:22,pinkHyacinth:18,yellowChrysanthemum:18,pinkChrysanthemum:16,
    redGeranium:22,pinkGeranium:20,blueBluebell:20,purpleBluebell:16,yellowMarigold:24,orangeMarigold:20,purplePansy:22,yellowPansy:20,
    pinkPetunia:22,purplePetunia:20,yellowPrimrose:22,pinkPrimrose:18,purpleCrocus:20,yellowCrocus:18,orangeCalendula:22,yellowCalendula:20,
    pinkCosmos:22,whiteCosmos:18,pinkZinnia:20,orangeZinnia:18,pinkSnapdragon:18,yellowSnapdragon:16,blueForgetMeNot:24,
    pinkAster:18,purpleAster:16,blueCornflower:22,pinkImpatiens:20,pinkVerbena:18,purpleHeather:18,purpleStatice:20,
    orangeGerbera:20,pinkGerbera:18,blackEyedSusan:20,blueSalvia:18,yellowAlstroemeria:18,orangeNasturtium:20,
    pinkPhlox:18,purpleVeronica:16,pinkSweetPea:18,yellowWallflower:16,redGaillardia:16,pinkStock:18,
    // uncommon bleed-through
    sunflower:5,lavender:4,whiteTulip:4,redRose:6,pinkRose:3,redPoppy:3,cherryBlossom:2,blueRose:1,blueTulip:1
  },
  uncommon:{
    // uncommon flowers
    sunflower:22,lavender:18,whiteTulip:14,redRose:18,pinkRose:12,pinkLily:14,blueIris:12,whiteDaffodil:12,whiteViolet:10,pinkPeony:10,
    redPoppy:18,orangePoppy:14,cherryBlossom:16,deepCherry:10,yellowRose:10,peachRose:8,purpleRose:6,
    pinkAlstroemeria:14,blueHyacinth:12,purpleChrysanthemum:12,whiteMagnolia:14,pinkMagnolia:10,
    redBegonia:14,pinkBegonia:12,pinkDahlia:14,purpleDahlia:12,orangeDahlia:10,pinkAzalea:14,
    redAnemone:14,purpleAnemone:12,yellowFreesia:14,pinkFreesia:12,pinkGladiolus:14,purpleGladiolus:12,
    pinkHibiscus:14,redHibiscus:12,lilyValley:12,purpleWisteria:10,purpleFoxglove:12,pinkFoxglove:14,
    whiteGardenia:10,pinkCyclamen:12,pinkRanunculus:12,whiteJasmine:12,purpleBuddleia:12,purpleLantana:12,
    // rare bleed-through
    blueRose:3,blueTulip:3
  },
  rare:{
    // rare flowers
    tigerLily:20,goldenIris:18,pinkDaffodil:16,redPeony:16,purpleOrchid:16,blackTulip:14,silverRose:14,crystalDaisy:14,violetPoppy:14,goldenCherry:12,midnightRose:10,
    purpleCarnation:12,pinkFuchsia:12,purpleClematis:12,blueHydrangea:12,pinkHydrangea:10,whiteCamellia:12,redCamellia:10,
    pinkLotus:10,pinkPlumeria:10,pinkBleedingHeart:10,blueMorningGlory:10,purpleHellebore:10,purpleAllium:10,purpleGloxinia:10,yellowPlumeria:8,magentaBougainvillea:10,
    // legendary bleed-through
    blueRose:8,blueTulip:8,goldenRose:6,blackRose:4,whitePeony:4,pinkOrchid:3,blueOrchid:2,
    whiteLotus:3,saffron:2,whitePlumeria:2,greenHydrangea:2,whiteWisteria:2,redAmaryllis:2,orangeBromeliad:2,darkHellebore:1,
    whiteLily:1
  },
  legendary:{
    // legendary flowers
    blueRose:25,blueTulip:25,goldenRose:20,blackRose:12,whitePeony:10,pinkOrchid:8,blueOrchid:6,
    blackTulip:15,silverRose:12,crystalDaisy:10,violetPoppy:10,goldenCherry:8,midnightRose:6,
    whiteLotus:8,saffron:6,whitePlumeria:6,greenHydrangea:5,whiteWisteria:5,redAmaryllis:5,orangeBromeliad:4,darkHellebore:3,
    whiteLily:2
  },
};
function weightedRandom(type='common'){
  const pool=PKT_POOLS[type]||PKT_POOLS.common;
  const keys=Object.keys(pool);
  const total=keys.reduce((s,k)=>s+pool[k],0);
  let r=Math.random()*total;
  for(const k of keys){r-=pool[k];if(r<=0)return k;}
  return keys.at(-1);
}

// ── Valve wheel ─────────────────────────────────────────────────────────────
(function setupValve(){
  const svg=document.getElementById('valveSvg');
  const lbl=document.getElementById('valveLabel');
  const bar=document.getElementById('valveProgFill');
  const SPINS_NEEDED=5; // kept for reference, no longer used
  let tracking=false,lastAngle=0,accumulated=0,completedSpins=0,visualRot=0;

  // Init label with current water
  (function initLabel(){
    const l=document.getElementById('valveLabel');
    if(l) l.textContent=G.water>=G.maxWater?'Tank full! 💧':`${G.water}/${G.maxWater} water 💧`;
  })();

  function angleFrom(cx,cy,ex,ey){return Math.atan2(ey-cy,ex-cx)*180/Math.PI;}
  function center(){
    const r=svg.getBoundingClientRect();
    return{cx:r.left+r.width/2,cy:r.top+r.height/2};
  }
  function applyDelta(delta){
    if(Math.abs(delta)>90) return;
    accumulated+=Math.abs(delta);
    visualRot+=delta;
    svg.style.transform=`rotate(${visualRot}deg)`;
    const newSpins=Math.floor(accumulated/360);
    // Update progress bar: fraction of current rotation
    const rotProgress=(accumulated%360)/360;
    bar.style.width=(rotProgress*100).toFixed(1)+'%';
    if(newSpins>completedSpins){
      completedSpins=newSpins;
      if(G.water<G.maxWater){
        G.water=Math.min(G.maxWater,G.water+1);
        renderDrops();saveG();
        spawnSparkle(window.innerWidth/2,window.innerHeight*.42,'💧');
        toast(G.water>=G.maxWater?'Watering can is full! 💧':`+1 water from spinning! 💧 (${G.water}/${G.maxWater})`,1400);
      } else {
        toast('Watering can is full! 💧',1200);
      }
      lbl.textContent=G.water>=G.maxWater?'Tank full! 💧':`${G.water}/${G.maxWater} water 💧`;
    } else {
      lbl.textContent=G.water>=G.maxWater?'Tank full! 💧':`${G.water}/${G.maxWater} water 💧`;
    }
  }

  // Pointer events — unified touch+mouse, SVG-scoped, no document-level non-passive listener
  svg.addEventListener('pointerdown',e=>{
    svg.setPointerCapture(e.pointerId);
    const{cx,cy}=center();
    lastAngle=angleFrom(cx,cy,e.clientX,e.clientY);
    tracking=true;
    e.preventDefault();
  },{passive:false});
  svg.addEventListener('pointermove',e=>{
    if(!tracking) return;
    const{cx,cy}=center();
    const a=angleFrom(cx,cy,e.clientX,e.clientY);
    let d=a-lastAngle;
    if(d>180)d-=360;if(d<-180)d+=360;
    applyDelta(d);lastAngle=a;
  });
  svg.addEventListener('pointerup',   ()=>{tracking=false;});
  svg.addEventListener('pointercancel',()=>{tracking=false;});
})();

// ── Wire top-bar buttons via touchstart (most reliable on iOS) ─────────────
// touchstart+preventDefault fires IMMEDIATELY, kills the 300ms delay,
// kills ghost clicks, AND prevents scroll-detection interference.
// onclick stays on the element as the PC/desktop fallback.
(function wireBtns(){
  const MAP={
    btnOpenPkt: openPktModal,
    btnJournal: openJournalModal,
    btnShop:    openShopModal,
  };
  Object.entries(MAP).forEach(([id,fn])=>{
    const el=document.getElementById(id);
    if(!el) return;
    // Restore onclick for PC
    el.onclick=fn;
    // touchstart for iOS — fires before any scroll detection, preventDefault
    // kills both the ghost click and any scroll-gesture interpretation
    el.addEventListener('touchstart',function(e){
      e.preventDefault();
      e.stopPropagation();
      this.classList.add('tapped');
      setTimeout(()=>this.classList.remove('tapped'),150);
      fn();
    },{passive:false});
  });
})();
function toast(msg,ms=2000){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),ms);
}
function spawnSparkle(x,y,e='✨'){
  const el=document.createElement('div');el.className='sparkle';el.textContent=e;
  el.style.cssText=`left:${x}px;top:${y}px`;document.body.appendChild(el);setTimeout(()=>el.remove(),950);
}
function spawnSplash(x,y){
  const el=document.createElement('div');el.className='splash';el.textContent='💧';
  el.style.cssText=`left:${x}px;top:${y}px`;document.body.appendChild(el);setTimeout(()=>el.remove(),680);
}
function multiSparkle(){
  const pool=['✨','💙','⭐','💫','🌟','💎','🔮','🫧'];
  for(let i=0;i<16;i++) setTimeout(()=>{
    spawnSparkle(window.innerWidth*(.08+Math.random()*.84),window.innerHeight*(.1+Math.random()*.7),pool[Math.floor(Math.random()*pool.length)]);
  },i*90);
}
function confettiBurst(){
  const colors=['#f48fb1','#ce93d8','#90caf9','#a5d6a7','#ffe082','#e91e63','#f9a825'];
  for(let i=0;i<30;i++){
    const el=document.createElement('div');el.className='confetti-bit';
    const x=window.innerWidth*(.1+Math.random()*.8);
    const y=window.innerHeight*(.15+Math.random()*.35);
    const sz=6+Math.random()*9,dur=1.2+Math.random()*1.5;
    el.style.cssText=`left:${x}px;top:${y}px;width:${sz}px;height:${sz+2}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${dur}s;`;
    document.body.appendChild(el);setTimeout(()=>el.remove(),dur*1000+100);
  }
}
