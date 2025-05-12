const ORES_CATEGORY = "Ores";
const TOOLS_CATEGORY = "Tools";
const WEAPONS_CATEGORY = "Weapons";
const ARMOR_CATEGORY = "Armors";
const FOOD_CATEGORY = "Foods";
const MISC_CATEGORY = "Miscs";

export const items = [
  // Ores
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
    buyPrice: 500,
    sellPrice: 160,
    inputId: "emeraldAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Coal",
    itemId: "minecraft:coal",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "coalAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Coal_JE4_BE3.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Lapis Lazuli",
    itemId: "minecraft:lapis_lazuli",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "lapisAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/43/Lapis_Lazuli_JE2_BE2.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Redstone",
    itemId: "minecraft:redstone",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "redstoneAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Redstone_Dust_JE2_BE2.png",
    category: ORES_CATEGORY,
  },
  {
    name: "NetherQuartz",
    itemId: "minecraft:nether_quartz",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "quartzAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/64/Nether_Quartz_JE2_BE2.png",
    category: ORES_CATEGORY,
  },
  {
    name: "Flint",
    itemId: "minecraft:flint",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "flintAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/97/Flint_JE3_BE3.png",
    category: ORES_CATEGORY,
  },
  // Tools
  {
    name: "Diamond Pickaxe",
    itemId: "minecraft:diamond_pickaxe",
    buyPrice: 400,
    sellPrice: 300,
    inputId: "diamondPickaxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Diamond_Pickaxe_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Iron Pickaxe",
    itemId: "minecraft:iron_pickaxe",
    buyPrice: 100,
    sellPrice: 80,
    inputId: "ironPickaxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Iron_Pickaxe_JE3_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Gold Pickaxe",
    itemId: "minecraft:gold_pickaxe",
    buyPrice: 200,
    sellPrice: 150,
    inputId: "goldPickaxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a6/Golden_Pickaxe_JE4_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Cobblestone Pickaxe",
    itemId: "minecraft:cobblestone_pickaxe",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "cobblestonePickaxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Stone_Pickaxe_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Wooden Pickaxe",
    itemId: "minecraft:wooden_pickaxe",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "woodenPickaxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d2/Wooden_Pickaxe_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Diamond Shovel",
    itemId: "minecraft:diamond_shovel",
    buyPrice: 350,
    sellPrice: 250,
    inputId: "diamondShovelAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ec/Diamond_Shovel_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Iron Shovel",
    itemId: "minecraft:iron_shovel",
    buyPrice: 80,
    sellPrice: 60,
    inputId: "ironShovelAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/aa/Iron_Shovel_JE3_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Gold Shovel",
    itemId: "minecraft:gold_shovel",
    buyPrice: 150,
    sellPrice: 100,
    inputId: "goldShovelAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c9/Golden_Shovel_JE3_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Cobblestone Shovel",
    itemId: "minecraft:cobblestone_shovel",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "cobblestoneShovelAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Stone_Shovel_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Wooden Shovel",
    itemId: "minecraft:wooden_shovel",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "woodenShovelAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Wooden_Shovel_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Diamond Axe",
    itemId: "minecraft:diamond_axe",
    buyPrice: 400,
    sellPrice: 300,
    inputId: "diamondAxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/40/Diamond_Axe_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Iron Axe",
    itemId: "minecraft:iron_axe",
    buyPrice: 70,
    sellPrice: 50,
    inputId: "ironAxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Gold Axe",
    itemId: "minecraft:gold_axe",
    buyPrice: 120,
    sellPrice: 80,
    inputId: "goldAxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Golden_Axe_JE3_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Cobblestone Axe",
    itemId: "minecraft:cobblestone_axe",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "cobblestoneAxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Wooden Axe",
    itemId: "minecraft:wooden_axe",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "woodenAxeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Diamond Hoe",
    itemId: "minecraft:diamond_hoe",
    buyPrice: 350,
    sellPrice: 250,
    inputId: "diamondHoeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Diamond_Hoe_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Iron Hoe",
    itemId: "minecraft:iron_hoe",
    buyPrice: 60,
    sellPrice: 40,
    inputId: "ironHoeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Iron_Hoe_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Gold Hoe",
    itemId: "minecraft:gold_hoe",
    buyPrice: 100,
    sellPrice: 70,
    inputId: "goldHoeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9d/Golden_Hoe_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Cobblestone Hoe",
    itemId: "minecraft:cobblestone_hoe",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "cobblestoneHoeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Stone_Hoe_JE2_BE2.png",
    category: TOOLS_CATEGORY,
  },
  {
    name: "Wooden Hoe",
    itemId: "minecraft:wooden_hoe",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "woodenHoeAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Wooden_Hoe_JE3_BE3.png",
    category: TOOLS_CATEGORY,
  },
  // Weapons
  {
    name: "Diamond Sword",
    itemId: "minecraft:diamond_sword",
    buyPrice: 450,
    sellPrice: 400,
    inputId: "diamondSwordAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Diamond_Sword_JE3_BE3.png",
    category: WEAPONS_CATEGORY,
  },
  {
    name: "Iron Sword",
    itemId: "minecraft:iron_sword",
    buyPrice: 100,
    sellPrice: 80,
    inputId: "ironSwordAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png",
    category: WEAPONS_CATEGORY,
  },
  {
    name: "Gold Sword",
    itemId: "minecraft:gold_sword",
    buyPrice: 200,
    sellPrice: 150,
    inputId: "goldSwordAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Golden_Sword_JE3_BE2.png",
    category: WEAPONS_CATEGORY,
  },
  {
    name: "Cobblestone Sword",
    itemId: "minecraft:cobblestone_sword",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "cobblestoneSwordAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/Stone_Sword_JE2_BE2.png",
    category: WEAPONS_CATEGORY,
  },
  {
    name: "Wooden Sword",
    itemId: "minecraft:wooden_sword",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "woodenSwordAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/Wooden_Sword_JE2_BE2.png",
    category: WEAPONS_CATEGORY,
  },
  {
    name: "Bow",
    itemId: "minecraft:bow",
    buyPrice: 100,
    sellPrice: 80,
    inputId: "bowAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png",
    category: WEAPONS_CATEGORY,
  },
  {
    name: "Arrow",
    itemId: "minecraft:arrow",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "arrowAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Arrow_JE2_BE1.png",
    category: WEAPONS_CATEGORY,
  },
  // Armor
  {
    name: "Diamond Helmet",
    itemId: "minecraft:diamond_helmet",
    buyPrice: 600,
    sellPrice: 450,
    inputId: "diamondHelmetAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/Diamond_Helmet_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Iron Helmet",
    itemId: "minecraft:iron_helmet",
    buyPrice: 380,
    sellPrice: 260,
    inputId: "ironHelmetAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Iron_Helmet_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Gold Helmet",
    itemId: "minecraft:gold_helmet",
    buyPrice: 250,
    sellPrice: 200,
    inputId: "goldHelmetAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Golden_Helmet_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Diamond Chestplate",
    itemId: "minecraft:diamond_chestplate",
    buyPrice: 900,
    sellPrice: 700,
    inputId: "diamondChestplateAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Diamond_Chestplate_JE3_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Iron Chestplate",
    itemId: "minecraft:iron_chestplate",
    buyPrice: 320,
    sellPrice: 200,
    inputId: "ironChestplateAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/31/Iron_Chestplate_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Gold Chestplate",
    itemId: "minecraft:gold_chestplate",
    buyPrice: 400,
    sellPrice: 350,
    inputId: "goldChestplateAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Golden_Chestplate_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Diamond Leggings",
    itemId: "minecraft:diamond_leggings",
    buyPrice: 700,
    sellPrice: 500,
    inputId: "diamondLeggingsAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Diamond_Leggings_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Iron Leggings",
    itemId: "minecraft:iron_leggings",
    buyPrice: 400,
    sellPrice: 280,
    inputId: "ironLeggingsAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Iron_Leggings_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Gold Leggings",
    itemId: "minecraft:gold_leggings",
    buyPrice: 280,
    sellPrice: 130,
    inputId: "goldLeggingsAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bf/Golden_Leggings_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Diamond Boots",
    itemId: "minecraft:diamond_boots",
    buyPrice: 300,
    sellPrice: 150,
    inputId: "diamondBootsAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Diamond_Boots_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Iron Boots",
    itemId: "minecraft:iron_boots",
    buyPrice: 150,
    sellPrice: 40,
    inputId: "ironBootsAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Iron_Boots_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  {
    name: "Gold Boots",
    itemId: "minecraft:gold_boots",
    buyPrice: 150,
    sellPrice: 70,
    inputId: "goldBootsAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/Golden_Boots_JE2_BE2.png",
    category: ARMOR_CATEGORY,
  },
  // Food
  {
    name: "Golden Apple",
    itemId: "minecraft:golden_apple",
    buyPrice: 100,
    sellPrice: 80,
    inputId: "goldenAppleAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/54/Golden_Apple_JE2_BE2.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Enchanted Golden Apple",
    itemId: "minecraft:enchanted_golden_apple",
    buyPrice: 500,
    sellPrice: 260,
    inputId: "enchantedGoldenAppleAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/Enchanted_Golden_Apple_JE2_BE2.gif",
    category: FOOD_CATEGORY,
  },
  {
    name: "Apple",
    itemId: "minecraft:apple",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "appleAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Apple_JE3_BE3.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Cooked Beef",
    itemId: "minecraft:cooked_beef",
    buyPrice: 10,
    sellPrice: 8,
    inputId: "cookedBeefAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Steak_JE4_BE3.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Cooked Chicken",
    itemId: "minecraft:cooked_chicken",
    buyPrice: 8,
    sellPrice: 6,
    inputId: "cookedChickenAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/Cooked_Chicken_JE3_BE3.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Cooked Porkchop",
    itemId: "minecraft:cooked_porkchop",
    buyPrice: 12,
    sellPrice: 9,
    inputId: "cookedPorkchopAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ee/Cooked_Porkchop_JE4_BE3.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Cooked Mutton",
    itemId: "minecraft:cooked_mutton",
    buyPrice: 10,
    sellPrice: 7,
    inputId: "cookedMuttonAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7d/Cooked_Mutton_JE3_BE2.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Cooked Rabbit",
    itemId: "minecraft:cooked_rabbit",
    buyPrice: 10,
    sellPrice: 7,
    inputId: "cookedRabbitAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1b/Cooked_Rabbit_JE3_BE2.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Cooked Fish",
    itemId: "minecraft:cooked_cod",
    buyPrice: 8,
    sellPrice: 6,
    inputId: "cookedFishAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Cooked_Cod_JE4_BE3.png",
    category: FOOD_CATEGORY,
  },
  {
    name: "Bread",
    itemId: "minecraft:bread",
    buyPrice: 5,
    sellPrice: 4,
    inputId: "breadAmount",
    imageSrc:
      "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Bread_JE3_BE3.png",
    category: FOOD_CATEGORY,
  },
];
