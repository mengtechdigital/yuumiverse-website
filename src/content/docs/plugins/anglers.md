---
title: Anglers
description: Anti-auto-fishing, buffed drops, and extra fishing loot.
---

Anglers overhauls fishing to reward active players and punish AFK fish farms.

## Anti-Auto-Fishing

The plugin tracks where you fish and penalizes farming the same spot repeatedly:

| Stage | Threshold | Effect |
|-------|-----------|--------|
| **Warning** | 5 catches in same spot | *"The fish are growing wary of this spot..."* |
| **Penalty** | 10 catches in same spot | Reduced catch quality |
| **Blocked** | 15 catches in same spot | *"The fish have fled this area entirely. Cast somewhere else!"* |

- **Spot radius**: 3.5 blocks
- Admins can bypass with `anglers.bypass`

## Buffs

All valid fishing catches receive these permanent bonuses:

| Buff | Value |
|------|-------|
| **XP Multiplier** | 3.0× |
| **Fish Amount Multiplier** | 2.0× |

## Extra Loot

Every successful catch has a chance to pull bonus items in addition to normal fishing loot:

| Condition | Bonus Chance |
|-----------|-------------|
| **Base** | 40% |
| **At night** | +20% (60% total) |
| **During storms** | +15% (55% total) |
| **Night + Storm** | +35% (75% total) |

### Extra Loot Table

| Item | Weight | Amount |
|------|--------|--------|
| Iron Ingot | 25 | 2–5 |
| Copper Ingot | 20 | 3–6 |
| Gold Ingot | 18 | 2–4 |
| Redstone | 18 | 4–8 |
| Coal | 15 | 3–6 |
| Lapis Lazuli | 15 | 3–6 |
| Prismarine Shard | 15 | 2–4 |
| Prismarine Crystals | 12 | 2–5 |
| Experience Bottle | 12 | 2–4 |
| Emerald | 12 | 1–3 |
| Glowstone Dust | 10 | 3–6 |
| Diamond | 8 | 1–2 |
| Nautilus Shell | 8 | 1–2 |
| Obsidian | 6 | 1–3 |
| Ender Pearl | 6 | 1–2 |
| Blaze Rod | 6 | 1–2 |
| Enchanted Book | 5 | 1 |
| Saddle | 4 | 1 |
| Name Tag | 3 | 1 |
| Heart of the Sea | 3 | 1 |
| Totem of Undying | 1 | 1 |

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/anglers guide` | `anglers.guide` | Open the fishing guide GUI |
| `/anglers reload` | `anglers.admin` | Reload config |

## Tips

- Move between spots every few catches — the anti-AFK system tracks position
- Fish at night or during storms for the highest extra-loot chance (up to 75%)
- The 3× XP makes fishing a surprisingly good early-game leveling strategy
- Use `/anglers guide` to see the full loot table and your personal stats
