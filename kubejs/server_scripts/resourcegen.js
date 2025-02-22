onEvent("recipes", (event) => {
    LakyCompactingRecipes(event);
    LakyCrushingRecipes(event);
});

function LakyCompactingRecipes(event) {
    const recipeList = [
        [
            "create:ochrum",
            "minecraft:sandstone",
            "minecraft:dripstone_block",
            { fluid: "create:honey", amount: 100 * mB },
            "minecraft:yellow_dye",
        ],
        [
            "create:crimsite",
            "minecraft:tuff",
            "minecraft:red_sand",
            { fluid: "tconstruct:blood", amount: 100 * mB },
            "minecraft:red_dye",
        ],
        [
            "create:limestone",
            "minecraft:calcite",
            "minecraft:clay",
            { fluid: "milk:still_milk", amount: 100 * mB },
            "minecraft:white_dye",
        ],
        [
            "create:veridium",
            "minecraft:cobblestone",
            "minecraft:slime_ball",
            { fluid: "minecraft:lava", amount: 100 * mB },
            "minecraft:green_dye",
        ],
        [
            "create:asurine",
            "minecraft:prismarine",
            "minecraft:kelp",
            { fluid: "minecraft:water", amount: 100 * mB },
            "minecraft:blue_dye",
        ],
        [
            "create:scorchia",
            "minecraft:blackstone",
            "ad_astra:moon_sand",
            { fluid: "tconstruct:blazing_blood", amount: 100 * mB },
            "minecraft:black_dye",
        ],
        [
            "create:scoria",
            "tconstruct:seared_stone",
            "minecraft:soul_soil",
            { fluid: "create:chocolate", amount: 100 * mB },
            "minecraft:brown_dye",
        ],
    ];

    recipeList.forEach((entry) => {
        const recipe = {
            output: entry[0],
            input: [entry[1], entry[2], entry[3], entry[4]],
            heat: "",
            time: 400,
        };

        event.recipes
            .createCompacting(recipe.output, recipe.input)
            .heatRequirement(recipe.heat ?? "")
            .processingTime(recipe.time ?? 100);
    });
}
function LakyCrushingRecipes(event) {
    const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
    const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;

    [
        {
            input: "create:ochrum",
            outputs: [
                ["minecraft:raw_gold", 1],
                ["minecraft:raw_gold", 0.5],
                ["minecraft:glowstone_dust", 0.1],
                ["minecraft:sand", 0.5],
                ["ad_astra:desh_nugget", 0.4],
            ],
        },
        {
            input: "create:crimsite",
            outputs: [
                ["minecraft:raw_iron", 1],
                ["minecraft:raw_iron", 0.5],
                ["minecraft:redstone_dust", 0.1],
                ["minecraft:granite", 0.5],
                ["minecraft:red_dye", 0.25],
            ],
        },
        {
            input: "create:limestone",
            outputs: [
                ["techreborn:raw_tin", 1],
                ["minecraft:raw_tin", 0.5],
                ["createastral:lime", 1],
                ["createastral:lime", 0.5],
                ["minecraft:clay", 0.5],
                ["minecraft:andesite", 0.25],
            ],
        },
        {
            input: "create:veridium",
            outputs: [
                ["minecraft:raw_copper", 1],
                ["minecraft:raw_copper", 0.9],
                ["techreborn:olivine_dust", 0.1],
                ["minecraft:sand", 0.5],
                ["minecraft:green_dye", 0.25],
            ],
        },
        {
            input: "create:asurine",
            outputs: [
                ["techreborn:raw_tin", 1],
                ["techreborn:raw_tin", 0.2],
                ["minecraft:lapis_lazuli", 0.5],
                ["techreborn:lazurite_dust", 0.1],
                ["minecraft:blue_dye", 0.25],
                ["minecraft:prismarine_crystals", 0.2],
            ],
        },
        {
            input: "create:scorchia",
            outputs: [
                ["create:raw_zinc", 1],
                ["create:powdered_obsidian", 0.9],
                ["minecraft:black_dye", 0.4],
                ["minecraft:tuff", 0.25],
            ],
        },
        {
            input: "minecraft:blackstone",
            outputs: [
                ["create:powdered_obsidian", 0.3],
                ["tconstruct:seared_cobblestone", 0.3],
            ],
        },
        {
            input: "create:scoria",
            outputs: [
                ["minecraft:magma_cream", 0.9],
                ["minecraft:magma_block", 1],
                ["minecraft:tuff", 0.5],
                ["minecraft:basalt", 0.25],
            ],
        },
        {
            input: "minecraft:tuff",
            outputs: [
                ["minecraft:charcoal", 0.33],
                ["minecraft:basalt", 0.25],
            ],
        },
        {
            input: "minecraft:prismarine",
            outputs: [
                ["minecraft:lapis_lazuli", 0.5],
                ["minecraft:prismarine_crystals", 0.75],
            ],
        },
        {
            input: "minecraft:basalt",
            outputs: [
                ["techreborn:basalt_dust", 1],
                ["techreborn:andesite_dust", 0.5],
            ],
        },
        {
            input: "dbe:vanta_black",
            outputs: [["minecraft:black_dye", 1]],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) cleanoutputs.push(output[0]);
            else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createCrushing(cleanoutputs, recipe.input);
    });
}
