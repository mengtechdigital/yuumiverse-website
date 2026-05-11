---
title: WildHarvest
description: TreeFeller + VeinMiner with smart natural-only detection. Drops go straight to inventory.
---

WildHarvest makes gathering resources faster and more satisfying — but only on naturally generated blocks. No exploiting placed blocks.

## TreeFeller

Chop down entire trees by breaking the bottom log:
- All connected logs and leaves break instantly
- Drops go **straight to your inventory** (no item entities on the ground)
- Only works on **naturally generated trees** — player-placed logs are protected

## VeinMiner

Mine entire ore veins by breaking one ore:
- All connected ores of the same type break instantly
- Drops go **straight to your inventory**
- Only works on **naturally generated ores** — placed ore blocks are protected
- Configurable max chain size (default: usually 16-32 blocks)

## Smart Detection

WildHarvest uses CoreProtect data (if available) to distinguish:
- **Natural blocks** — can be chain-mined
- **Player-placed blocks** — break normally, no chain effect

This prevents abuse on server builds, shops, and other player constructions.

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/wildharvest treefeller` | `wildharvest.treefeller` | Toggle TreeFeller on/off |
| `/wildharvest veinminer` | `wildharvest.veinminer` | Toggle VeinMiner on/off |
| `/wildharvest both` | `wildharvest.use` | Toggle both on/off |
| `/wildharvest on` | `wildharvest.use` | Enable both |
| `/wildharvest off` | `wildharvest.use` | Disable both |
| `/wildharvest status` | `wildharvest.use` | Check current toggles |
| `/wildharvest reload` | `wildharvest.reload` | Admin: reload config |

## Tips

- Toggle off VeinMiner when building with ore blocks to avoid accidents
- TreeFeller respects leaf decay — don't worry about floating leaves
- The natural-only detection isn't perfect without CoreProtect. Be careful near player builds
- Both features are enabled by default for all players
- Hold **sneak** while breaking to break blocks normally (bypass chain effect)
