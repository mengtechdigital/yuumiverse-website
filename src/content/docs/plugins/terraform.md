---
title: Terraform
description: Powerful terraforming tools for Minecraft.
---

Terraform gives you professional-grade building tools that make large-scale terrain editing actually fun.

## Tools

### Terraform Pickaxe
- Mines a **3x3x1 area** (or configurable size)
- Only works on naturally generated stone/ores
- Drops go straight to inventory

### Terraform Shovel
- Digs a **3x3x1 area** of dirt/sand/gravel
- Perfect for clearing large flat areas

### Terraform Axe
- Chops entire trees in one swing
- Works like TreeFeller but as a permanent tool

### Terraform Hoe
- Tills a **3x3 area** in one click
- Also harvests crops in a radius

### Excavator
- Digs a **3x3x3 cube** at once
- The ultimate tunneling and pit-digging tool

### Builder's Wand
- Extends existing patterns
- Right-click a block to extend the pattern in that direction
- Perfect for walls, floors, and roofs

### Replace Wand
- Replaces one block type with another in an area
- Select source block, then target block
- Great for re-texturing builds

### Tunneler
- Creates a **perfect 3x3 tunnel** as you walk
- Automatically places torches (if in inventory)
- The fastest way to mine long distances

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/terraform give <tool>` | `terraform.give` | Admin: give a terraforming tool |
| `/terraform recipes` | `terraform.use` | Show crafting recipes |
| `/terraform list` | `terraform.use` | List all available tools |
| `/terraform reload` | `terraform.reload` | Reload config |

## Crafting

All tools are craftable in survival. Use `/terraform recipes` to see the exact recipes — they're designed to be expensive but achievable for dedicated players.

## Permissions

| Permission | Description |
|------------|-------------|
| `terraform.use` | Use all terraforming tools |
| `terraform.craft.*` | Craft all tools (default: true) |
| `terraform.craft.terraform_pickaxe` | Craft specific tools individually |
| `terraform.give` | Admin: spawn tools directly |

## Tips

- The Builder's Wand is the most powerful tool for large builds — learn it first
- Replace Wand saves hours of manual block replacement
- Tunneler + Excavator combo makes strip mining incredibly fast
- Tools are balanced around being endgame items — expect expensive recipes
