---
title: StackPlus
description: Raises the max item stack size up to 67.
---

StackPlus increases Minecraft's default stack limits, making inventory management far less tedious.

## Stack Sizes

| Item Type | Vanilla Stack | StackPlus Stack |
|-----------|--------------|-----------------|
| Most items | 64 | **67** |
| Tools / Weapons / Armor | 1 | 1 (unchanged) |
| Potions | 1 | 1 (unchanged) |
| Totems | 1 | 1 (unchanged) |
| Ender Pearls | 16 | **67** |
| Snowballs | 16 | **67** |
| Eggs | 16 | **67** |
| Buckets | 16 | **67** |
| Signs | 16 | **67** |

:::tip
The max stack size is capped at **67** (not 99) because values above 64 cause client desync and ghost stacks.
:::

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/stackplus apply` | `stackplus.apply` | Apply stack size changes to your current inventory |
| `/stackplus reload` | `stackplus.admin` | Reload config |

## How It Works

StackPlus hooks into item stacking logic at the server level. This means:
- Stacks of 67 work in **chests, hoppers, droppers, and dispensers**
- Villager trades still respect normal limits
- Item entities on the ground can stack to 67
- The `/stackplus apply` command updates existing items in your inventory to the new max

## Tips

- Run `/stackplus apply` after joining if your inventory still shows old stack limits
- Mining trips become much more efficient — carry 67 stacks of cobblestone instead of 64
- Farms and storage systems benefit massively from the increased density
- Unstackables (tools, armor, potions) remain at 1 to prevent weird behavior
