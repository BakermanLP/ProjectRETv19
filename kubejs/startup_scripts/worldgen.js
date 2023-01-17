WorldgenEvents.remove(event => {
  event.printFeatures()
  event.removeFeatureById('underground_ores', [
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
    // "thermal:apatite_ore",
    // "thermal:cinnabar_ore",
    "thermal:lead_ore",
    "thermal:deepslate_lead_ore",
    "thermal:nickel_ore",
    "thermal:deepslate_nickel_ore",
    // "thermal:niter_ore",
    "thermal:silver_ore",
    // "thermal:sulfur_ore",
    "thermal:tin_ore"
  ])
})

