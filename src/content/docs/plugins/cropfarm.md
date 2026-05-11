---
title: CropFarm
description: Custom seed/crop system with configurable yields.
---

CropFarm adds a full custom agriculture system on top of vanilla farming.

## Custom Seeds

New seed types can be planted that grow into custom crops:
- Each crop has its own growth time, yield range, and biome preferences
- Crops are tracked individually — mods can see who planted what
- Harvesting requires a **hoe** (configurable)

## Seed Bags

Seeds are stored and traded in **Seed Bags** — portable containers that hold up to a stack of one seed type. Use `/cropfarm bag` to manage your collection.

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/cropfarm menu` | `cropfarm.menu` | Open the CropFarm menu |
| `/cropfarm bag` | `cropfarm.menu` | Open your seed bag inventory |
| `/cropfarm give <crop> [amount] [player]` | `cropfarm.give` | Admin: give seeds |
| `/cropfarm reload` | `cropfarm.reload` | Reload config |

## Planting Cap

There's a **per-player planting cap** on each crop type to prevent monoculture domination. Admins can bypass with `cropfarm.bypass-cap`.

## Tips

- Some crops grow faster in specific biomes — experiment!
- Always carry a hoe. Harvesting without one may not work (depending on config)
- Seed bags are great for trading with other players
