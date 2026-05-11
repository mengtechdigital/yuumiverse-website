---
title: Nightfall
description: Long days, short lethal nights. 21+ mob variants, runner zombies, buffed stats, and no sleep-skip.
---

Nightfall makes the night something to actually fear. The surface becomes deadly after dark with buffed mobs, special variants, and no sleep-skipping.

## Day / Night Cycle

| Phase | Length |
|-------|--------|
| **Day** | 30 minutes |
| **Night** | 5 minutes |

Vanilla is 10/10. Here, days are 3× longer for building and gathering, but nights are half as long and twice as lethal.

## No Sleep-Skipping

Beds **cannot skip the night**. You can still set your spawn point by entering a bed, but time passes naturally. You'll see:

> *"The night refuses to end."*

## Mob Buffs (All Hostile Mobs)

At night, every hostile mob spawned naturally gets these permanent buffs:

| Stat | Multiplier |
|------|-----------|
| Max Health | **2.0×** (+100%) |
| Attack Damage | **1.6×** (+60%) |

### Storm Buff
During rain or thunderstorms, mobs get **extra** stats on top of the base buff:

| Stat | Extra Multiplier |
|------|-----------------|
| Max Health | +25% |
| Attack Damage | +15% |

### Distance Scaling
The further from world spawn a mob spawns, the stronger it becomes:

- Scaling starts at **500 blocks** from spawn
- At **5,000 blocks**, mobs have **2× HP** and **1.5× damage**
- Beyond 5,000 blocks, it keeps stacking infinitely

### Mob Gear
Night mobs can spawn wearing enchanted armor and weapons:

- **Base chance**: 15% at spawn
- **+8%** per 1,000 blocks from spawn
- Gear can exceed vanilla enchant limits (Protection X, Sharpness XV, etc.)
- **22%** chance each gear piece drops on death

## Zombie Special Abilities

### Runner Zombies
**35%** of all zombies (including husks, drowned, zombie villagers) become Runners:
- **Speed II** permanently
- Custom name: `Runner`

### Jumper Zombies
**25%** of all zombies become Jumpers:
- **Jump Boost II** permanently
- Periodically leaps toward nearby players
- A zombie can be **both** a Runner and a Jumper

### Door Breaking
All plain zombies and zombie villagers **force-break doors** regardless of difficulty.

## Mob Variants

Nightfall replaces vanilla night spawns with a weighted extra-spawn system and adds **21 special mob variants**, each with unique abilities.

| Variant | Base Chance | Ability |
|---------|------------|---------|
| **Skeleton Marksman** | 15% | Fires arrows at **double speed** |
| **Desert Zombie** | 20% | Sets you on **fire** + inflicts **Hunger III** on hit |
| **Venomous Spider** | 20% | Inflicts **Poison II** on hit |
| **Witch Doctor** | 15% | Enhanced witch with stronger potions |
| **Brute Creeper** | 15% | Larger explosion radius |
| **Wither Reaper** | 15% | Inflicts **Wither III** on hit |
| **Frozen Stray** | 20% | Arrows/melee inflict **Slowness II** |
| **Ender Stalker** | 12% | Periodically **teleports closer** to you |
| **Plague Zombie** | 18% | Inflicts **Weakness II** + **Nausea** on hit |
| **Vindicator Berserker** | 15% | Enters **rage mode** below 50% HP (Strength II + Speed II) |
| **Phantom Diver** | 20% | Inflicts **Blindness** on hit |
| **Pillager Sniper** | 15% | Crossbow shots deal **extra knockback** |
| **Siege Zombie** | 12% | **Breaks blocks** to reach you — digs down, breaks walls, breaks ceilings |
| **Flash Creeper** | 10% | Explodes **much faster** |
| **Splitter Creeper** | 10% | Splits into smaller creepers on death |
| **Volatile Creeper** | 8% | Explodes on death even if killed before primed |
| **Web Weaver** | 12% | Places cobweb around the player on hit |
| **Pyro Skeleton** | 10% | Shoots **flaming arrows** |
| **Bomber Skeleton** | 10% | Shoots **TNT arrows** that explode on impact |
| **Blaze Archer** | 8% | Skeleton that shoots **fire charges** |
| **Swarm Zombie** | 10% | Spawns additional zombies on death |

Variant spawn chance scales with distance from spawn — at max distance, chances are **doubled**.

## Extra Spawn System

Vanilla natural night spawns are **disabled**. Instead, Nightfall periodically spawns mobs near players:

- **Interval**: Every 8 seconds
- **Per player**: Up to 4 mobs per cycle
- **World cap**: 120 mobs max
- **Range**: 20–40 blocks from player
- **Requires darkness**: Light level ≤ 7

### Spawn Weights

| Mob | Weight |
|-----|--------|
| Zombie | 6 |
| Skeleton | 4 |
| Spider | 3 |
| Creeper | 2 |
| Witch | 2 |
| Blaze | 1 |
| Ghast | 1 |
| Wither Skeleton | 1 |
| Piglin | 1 |
| Enderman | 1 |
| Magma Cube | 1 |

Cross-world mobs can invade! Blazes, Ghasts, and Wither Skeletons may spawn in the Overworld at night.

## Loot

Buffed night mobs drop **4× XP** and have a chance for bonus loot:

- **Base chance**: 45% for an extra drop
- **Storm bonus**: +25% during rain/thunder (70% total)

### Extra Loot Table

| Item | Weight | Amount |
|------|--------|--------|
| Iron Ingot | 25 | 2–5 |
| Copper Ingot | 20 | 3–6 |
| Arrow | 20 | 8–16 |
| Redstone | 18 | 4–8 |
| Gold Ingot | 18 | 2–4 |
| Coal | 15 | 3–6 |
| Lapis Lazuli | 15 | 3–6 |
| Experience Bottle | 12 | 2–4 |
| Emerald | 12 | 1–3 |
| Glowstone Dust | 10 | 3–6 |
| Diamond | 8 | 1–2 |
| Obsidian | 6 | 1–3 |
| Ender Pearl | 6 | 1–2 |
| Blaze Rod | 6 | 1–2 |
| Name Tag | 3 | 1 |
| Totem of Undying | 1 | 1 |

## Logout Dummies

If you disconnect during night in a managed world, a dummy zombie wearing your gear spawns at your location:
- Named: `*Player* (sleeping)`
- If the dummy is killed before you log back in, you **die on rejoin**
- Drops your inventory at the death location
- Fire-resistant so daytime sun won't auto-kill it

## Charged Creepers

During thunderstorms, **60%** of naturally spawned creepers spawn already charged.

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/nightfall status` | `nightfall.admin` | Check day/night status and mob modifiers |
| `/nightfall day` | `nightfall.admin` | Force day |
| `/nightfall night` | `nightfall.admin` | Force night |
| `/nightfall mobs` | `nightfall.admin` | Toggle buffed mobs on/off |
| `/nightfall reload` | `nightfall.admin` | Reload config |

## Tips

- Build walls and lighting around your base **early**
- The night is short — if you can survive the first wave, dawn comes fast
- Runner + Jumper zombies are the biggest threat. Always keep food for sprinting
- Don't disconnect during night unless you're in a completely sealed room
- Underground is **not** safe — Siege Zombies break blocks to reach you
- The further you explore from spawn, the more dangerous nights become
