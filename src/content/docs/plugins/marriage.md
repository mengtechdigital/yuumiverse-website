---
title: Marriage
description: Comedic SMP marriage with random Husband/Wife roles, chat prefixes, friendly-fire immunity, separation damage, and drama broadcasts.
---

Marriage adds a lighthearted relationship system to the server. Propose, accept, get married, and enjoy the benefits (and drama).

## Getting Married

1. `/marriage propose <player>` — Send a proposal
2. The other player runs `/marriage accept` within **60 seconds**
3. You're married! The server gets a broadcast announcement

:::caution
You cannot propose to yourself. That's just sad.
:::

## Husband / Wife Roles

When you marry, the plugin **randomly assigns** one partner as **Husband** and one as **Wife**:
- These roles are **permanent** for the duration of the marriage
- Displayed as **chat prefixes** and **tab prefixes**
- No mechanical differences — purely for flavor and comedy

### Prefix Formats
- **Chat**: `[Husband of Partner] `
- **Tab**: `[Husband] `

## Benefits

### Friendly-Fire Immunity
Partners **cannot damage each other** — melee, projectiles, splash potions, etc. Your spouse is the one person you can always trust in PvP zones.

### Separation Damage
If you stray too far from your spouse, you take damage:

| Setting | Value |
|---------|-------|
| **Max distance** | 64 blocks |
| **Damage per tick** | 0.5 hearts |
| **Tick interval** | 5 seconds |
| **Cross-dimension** | Disabled (Nether won't kill your spouse) |

> *"You are too far from your spouse. Get closer or take damage."*

## Divorce

```
/marriage divorce
```

Ends the marriage immediately. Both players get:
- A server-wide dramatic broadcast
- The **Bachelor** title for **24 hours**

:::caution
Divorce announcements are public and dramatic. Think carefully before committing!
:::

## Drama Broadcasts

The server is notified of every relationship milestone with randomly selected messages:

### Weddings
> *"♥ Alice and Bob are now married. May god help them."*

### Divorces
> *"✂ Alice divorced Bob. Reason: irreconcilable differences over diamond storage."*

### Partner Deaths
> *"☠ Alice's spouse Bob just died. After only 3 days. Tragic."*

A **10-second cooldown** prevents death-spam broadcasts.

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/marriage propose <player>` | `marriage.use` | Propose to someone |
| `/marriage accept` | `marriage.use` | Accept a pending proposal |
| `/marriage deny` | `marriage.use` | Deny a pending proposal |
| `/marriage divorce` | `marriage.use` | End the marriage |
| `/marriage info [player]` | `marriage.use` | Show marriage info |
| `/marriage list` | `marriage.use` | List all married couples |
| `/marriage reload` | `marriage.reload` | Admin: reload config |

Alias: `/m` can be used instead of `/marriage`.

## Tips

- Marry someone you actually play with — the separation damage will punish distant relationships
- Your spouse is the one person you can trust in PvP zones
- The chat prefixes are a great way to show off your commitment (or lack thereof)
- Divorce cooldowns don't exist — but the public shame might as well be one
