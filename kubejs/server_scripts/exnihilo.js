// priority: 1
// Bug Fix for https://github.com/NovaMachina-Mods/ExNihiloSequentia/issues/359

ServerEvents.tags('item', event => {
    const raw_ores = event.get('forge:ores').getObjectIds();
    const raw_to_fix = Ingredient.of(/.*exnihilosequentia:raw_.*/);

    raw_ores.forEach(ore => {
        const ore_str = ore.toString();
        if (raw_to_fix.test(ore)) {

            event.removeAllTagsFrom(ore_str);

            event.add('forge:raw_materials', ore_str);

            const material = ore_str.substring(ore_str.lastIndexOf("_") + 1);

            event.add('forge:raw_materials/' + material, ore_str);

            const nugget = `exnihilosequentia:${material}_nugget`

            event.add('forge:nuggets', nugget);

            event.add('forge:nuggets/' + material, nugget);

            const ingot = `exnihilosequentia:${material}_ingot`

            event.add('forge:ingots', ingot);

            event.add('forge:ingots/' + material, ingot);
        }

        // Minecolonies Smeltery Compatibility
        event.add('minecolonies:raw_ore', ore_str);
    })
})
