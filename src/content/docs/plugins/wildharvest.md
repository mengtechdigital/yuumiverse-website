---
title: WildHarvest
description: TreeFeller + VeinMiner with smart natural-only detection. Drops go straight to inventory.
---

WildHarvest makes gathering resources faster and more satisfying — but only on naturally generated blocks. No exploiting placed blocks.

## TreeFeller

Chop down entire trees by breaking the bottom log:
- All connected logs break instantly
- **Leaves decay quickly** after felling (one-by-one with particles)
- Drops go **straight to your inventory** (no item entities on the ground)
- Only works on **naturally generated trees** — player-placed logs are protected
- Requires an **axe** to trigger
- Maximum **256 logs** per tree

### Smart Detection
TreeFeller checks that **leaves of the same wood family** are connected to the trunk. This prevents accidentally destroying wooden pillars in player-built houses.

## VeinMiner

Mine entire ore veins by breaking one ore:
- All connected ores of the same type break instantly
- Drops go **straight to your inventory**
- Only works on **naturally generated ores** — placed ore blocks are protected
- Requires the **correct pickaxe tier** (e.g. iron+ for diamond)
- Maximum **64 ores** per vein

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| Max chain size | 256 | Safety cap for both TreeFeller and VeinMiner |
| Sneak disables chain | true | Hold shift to break single blocks normally |
| Hunger exhaustion | 0.005 per block | Vanilla mining is 0.005 — scaled by chain size |
| Min food level | 1 | Minimum hunger required to trigger chains |
| Chain cooldown | 0 ms | Throttle between chains (0 = disabled) |
| Preserve tool | true | Stops chain when tool reaches 1 durability left |

## Toggling

```
/wildharvest treefeller    # Toggle TreeFeller on/off
/wildharvest veinminer     # Toggle VeinMiner on/off
/wildharvest both          # Toggle both
/wildharvest on            # Enable both
/wildharvest off           # Disable both
/wildharvest status        # Check current toggles
```

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/wildharvest treefeller` | `wildharvest.treefeller` | Toggle TreeFeller |
| `/wildharvest veinminer` | `wildharvest.veinminer` | Toggle VeinMiner |
| `/wildharvest both` | `wildharvest.use` | Toggle both |
| `/wildharvest on/off` | `wildharvest.use` | Enable/disable both |
| `/wildharvest status` | `wildharvest.use` | Check toggles |
| `/wildharvest reload` | `wildharvest.reload` | Admin: reload config |

## Tips

- Toggle off VeinMiner when building with ore blocks to avoid accidents
- TreeFeller respects leaf decay — don't worry about floating leaves
- The natural-only detection uses CoreProtect data when available
- Both features are enabled by default for all players
- Hold **sneak** while breaking to bypass the chain effect
- Keep food stocked — large chains consume hunger proportionally
