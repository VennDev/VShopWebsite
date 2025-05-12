const ORES_CATEGORY = "ores";
const TOOLS_CATEGORY = "tools";
const WEAPONS_CATEGORY = "weapons";
const ARMOR_CATEGORY = "armor";
const FOOD_CATEGORY = "food";
const MISC_CATEGORY = "misc";

export const items = [
  {
    name: "Diamond",
    itemId: "minecraft:diamond",
    buyPrice: 100,
    sellPrice: 80,
    inputId: "diamondAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ab/Diamond_JE3_BE3.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Iron Ingot",
    itemId: "minecraft:iron_ingot",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "ironAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Gold Ingot",
    itemId: "minecraft:gold_ingot",
    buyPrice: 20,
    sellPrice: 15,
    inputId: "goldAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8a/Gold_Ingot_JE4_BE2.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Emerald",
    itemId: "minecraft:emerald",
    buyPrice: 200,
    sellPrice: 160,
    inputId: "emeraldAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png",
    category: ORES_CATEGORY,
  },
];
