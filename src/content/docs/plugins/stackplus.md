---
title: StackPlus
description: Raises the max item stack size up to 99.
---

StackPlus increases Minecraft's default stack limits, making inventory management far less tedious.

## Stack Sizes

| Item Type | Vanilla Stack | StackPlus Stack |
|-----------|--------------|-----------------|
| Most items | 64 | **99** |
| Tools/Weapons | 1 | 1 (unchanged) |
| Armor | 1 | 1 (unchanged) |
| Potions | 1 | 1 (unchanged) |
| Buckets | 16 | 16 (unchanged) |
| Ender Pearls | 16 | **99** |
| Snowballs | 16 | **99** |
| Eggs | 16 | **99** |

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/stackplus apply` | `stackplus.apply` | Apply stack size changes to your current inventory |
| `/stackplus reload` | `stackplus.admin` | Reload config |

## How It Works

StackPlus hooks into item stacking logic at the server level. This means:
- Stacks of 99 work in **chests, hoppers, droppers, and dispensers**
- Villager trades still respect normal limits
- Item entities on the ground can stack to 99
- The `/stackplus apply` command updates existing items in your inventory to the new max

## Tips

- Run `/stackplus apply` after joining if your inventory still shows old stack limits
- Mining trips become much more efficient — carry 99 stacks of cobblestone instead of 64
- Farms and storage systems benefit massively from the increased density
