---
title: Yuumi
description: Attach to another player as a tiny invulnerable floating companion.
---

Inspired by League of Legends' Yuumi, this plugin lets you attach to another player and become their tiny, floating, magical companion.

## How It Works

When attached:
- You **shrink to 45% size** and float on your host's right shoulder
- You are **invulnerable** — mobs and players can't hurt you
- You **bob gently** in place (no jittery teleporting — it uses smooth vehicle interpolation)
- You **can't break blocks, place blocks, or attack** — you're a companion, not a fighter

## Commands

| Command | Description |
|---------|-------------|
| `/yuumi attach <player>` | Attach to a player (must be within 8 blocks) |
| `/yuumi detach` | Detach from your host |
| `/yuumi heal` | Cast **Zoomies** — heal your host and give them Speed |
| `/yuumi zap` | Cast **Prowling Projectile** — damage and slow the nearest enemy |
| `/yuumi info` | Show who you're attached to and cooldowns |
| `/yuumi reload` | Admin: reload config |

:::tip
You can use `/yu` as a shortcut for `/yuumi`.
:::

## Abilities

### Zoomies (`/yuumi heal`)
- Heals your host for **5 HP**
- Grants **Speed I** for 3 seconds
- **6 second cooldown**

### Prowling Projectile (`/yuumi zap`)
- Targets the **nearest enemy** in a 16-block cone
- Deals **4 damage** (2 hearts)
- Applies **Slowness I** for 2 seconds
- Small knockback
- **4 second cooldown**

### Passive — Bop'n'Block
- Every **4 seconds**, your host is healed for **1 HP** automatically
- This happens silently in the background while attached

## Auto-Detach Triggers

You'll automatically detach if:
- Your host dies
- Your host logs out
- You log out
- Your host changes dimension (Overworld → Nether, etc.)
- You stray more than **16 blocks** from your host

## Tips

- Great for new players who want to explore with a friend without dying
- Healers can focus purely on supporting their host in combat
- You can still chat, use inventory, and drop/pick up items while attached
