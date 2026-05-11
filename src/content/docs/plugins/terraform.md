---
title: Terraform
description: Powerful terraforming tools — 3x3 breakers, excavators, wands, and tunnelers.
---

Terraform gives you professional-grade building tools that make large-scale terrain editing actually fun. Every tool is craftable in survival.

## Tools

### Terraform Pickaxe
Mines a **3x3 horizontal area** of pickaxe-compatible blocks in one swing.

**Crafting Recipe:**

![Terraform Pickaxe recipe](/images/mc/terraform-pickaxe.svg)

Works on: stone, cobblestone, deepslate, ores, bricks, nether bricks, basalt, blackstone, end stone, quartz, amethyst, and all `_ORE` / `_BLOCK` materials.

### Terraform Shovel
Digs a **3x3 horizontal area** of shovel-compatible blocks in one swing.

**Crafting Recipe:**

![Terraform Shovel recipe](/images/mc/terraform-shovel.svg)

Works on: grass, dirt, sand, gravel, clay, soul sand, snow, and more.

### Terraform Axe
Chops a **3x3 horizontal area** of axe-compatible blocks in one swing.

**Crafting Recipe:**

![Terraform Axe recipe](/images/mc/terraform-axe.svg)

Works on: all logs, wood, stems, hyphae, planks, fences, doors, trapdoors, signs, chests, bookshelves, pumpkins, melons, and more.

### Terraform Hoe
Breaks a **3x3 area of crops** (wheat, carrots, potatoes, beetroots, nether wart) in one swing. **Right-click** dirt/grass to till a **3x3 area** instantly.

**Crafting Recipe:**

![Terraform Hoe recipe](/images/mc/terraform-hoe.svg)

### Excavator
Hold **sneak** and break to dig a **3x3x3 cube** at once. The ultimate pit-digging and tunnel-starting tool.

**Crafting Recipe:**

![Excavator recipe](/images/mc/terraform-excavator.svg)

Works on pickaxe and shovel materials. Durability cost is halved for the 27 blocks (configurable).

### Builder's Wand
**Right-click** any block face to extend the pattern. Places up to a **3x3 wall** of the same block type in one click, consuming blocks from your inventory.

**Crafting Recipe:**

![Builder's Wand recipe](/images/mc/terraform-wand.svg)

- Max 64 blocks per use (configurable)
- Only places into empty air spaces
- Durability cost per block is 0 by default

### Replace Wand
**Right-click** a block to flood-fill replace all connected blocks of that type with the block held in your **off-hand**.

**Crafting Recipe:**

![Replace Wand recipe](/images/mc/terraform-replace.svg)

- Max 64 blocks per use (configurable)
- Radius: 8 blocks (configurable)
- Cannot replace tile entities (chests, furnaces, etc.)

### Tunneler
Hold **sneak** and break a pickaxe block to carve a **forward tunnel** — 3 blocks long, 2 blocks high — in the direction you're facing.

**Crafting Recipe:**

![Tunneler recipe](/images/mc/terraform-tunneler.svg)

The fastest way to mine long distances. Automatically breaks the center block plus the tunnel ahead of you.

## Durability & Config

| Setting | Default | Description |
|---------|---------|-------------|
| Area multiplier | 1.0x | Durability cost per block for 3x3 tools |
| Excavator multiplier | 0.5x | Durability cost for the 3x3x3 cube |
| Tunneler multiplier | 1.0x | Durability cost for tunnel blocks |
| Wand multiplier | 0.0x | Durability cost per placed block |
| Replace multiplier | 0.0x | Durability cost per replaced block |

All tools respect Unbreaking enchantments.

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/terraform give <tool>` | `terraform.give` | Admin: give a terraforming tool |
| `/terraform recipes` | `terraform.use` | Show crafting recipes GUI |
| `/terraform list` | `terraform.use` | List all available tools |
| `/terraform reload` | `terraform.reload` | Reload config |

## Permissions

| Permission | Description |
|------------|-------------|
| `terraform.use` | Use all terraforming tools |
| `terraform.craft.*` | Craft all tools (default: true) |
| `terraform.craft.<tool>` | Craft a specific tool individually |
| `terraform.give` | Admin: spawn tools directly |

## Tips

- The Builder's Wand is the most powerful tool for large builds — learn it first
- Replace Wand saves hours of manual block replacement
- Tunneler + Excavator combo makes strip mining incredibly fast
- Tools are balanced around being endgame items — the recipes are expensive but achievable
- All tools play sound effects and spawn particles when used
