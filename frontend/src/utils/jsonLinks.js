const BASE = "https://raw.githubusercontent.com/auctionDeveloper/Fueloil-json-data/main/";

const apiFiles = [
  "biofuel",
  "briquette",
  "cnslresin",
  "fueloil",
  "hydrocarbon",
  "lampoil",
  "ldo",
  "mto",
  "product",
  "solvent",
  "whitebaseoil",
  "yellowbaseoil"
];

const dataFolders = {
  biofuel: [
    "BiofuelSupplier",
    "BiofuelTrader",
    "BiofuelImporter",
    "BiofuelManufacture",
    "BiofuelDistributer"
  ],
  briquette: [
    "BriquetteSupplier",
    "BriquetteTrader",
    "BriquetteImporter",
    "BriquetteManufacture", // ✅ Correct spelling matched
    "BriquetteDistributer"   // ⚠️ Keep if your file is spelled as-is
  ],
  cnslresin: [
    "CnslSupplier",
    "CnslTrader",
    "CnslImporter",
    "CnslManufacture",
    "CnslDistributer"
  ],
  fueloil: [
    "FueloilSupplier",
    "FueloilTrader",
    "FueloilImporter",
    "FueloilManufacture",
    "FueloilDistributer"
  ],
  hydrocarbon: [
    "HydrocarbonSupplier",
    "HydrocarbonTrader",
    "HydrocarbonImporter",
    "HydroCarbonManufacture", // ✅ Fixed capitalization
    "HydrocarbonDistributer"
  ],
  lampoil: [
    "LampoilSupplier",
    "LampoilTrader",
    "LampoilImporter",
    "LampoilManufacture",     // ✅ Match to actual file name
    "LampoilDistributer"
  ],
  ldo: [
    "LdoSupplier",
    "LdoTrader",
    "LdoImporter",
    "LdoManufacture",
    "LdoDistributer"
  ],
  mto: [
    "MtoSupplier",
    "MtoTrader",
    "MtoImporter",
    "MtoManufacture",
    "MtoDistributer"
  ],
  solvent: [
    "SolventSupplier",
    "SolventTrader",
    "SolventImporter",
    "SolventManufacture",
    "SolventDistributer"
  ],
  whitebaseoil: [
    "WboSupplier",
    "WboTrader",
    "WboImporter",
    "WboManufacture",
    "WboDistributer"
  ],
  yellowbaseoil: [
    "YboSupplier",
    "YboTrader",
    "YboImporter",
    "YboManufacture",
    "YboDistributer"
  ]
};

export const jsonUrls = {
  api: apiFiles.reduce((acc, name) => {
    acc[name] = `${BASE}api/${name}.json`;
    return acc;
  }, {}),
  data: Object.fromEntries(
    Object.entries(dataFolders).map(([folder, files]) => [
      folder,
      files.reduce((acc, filename) => {
        acc[filename] = `${BASE}data/${folder}/${filename}.json`;
        return acc;
      }, {})
    ])
  )
};
