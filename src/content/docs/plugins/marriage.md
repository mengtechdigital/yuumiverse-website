---
title: Marriage
description: Comedic SMP marriage with random roles, chat prefixes, drama broadcasts, and friendly-fire immunity.
---

Marriage adds a lighthearted relationship system to the server. Propose, accept, get married, and enjoy the benefits (and drama).

## Getting Married

1. `/marriage propose <player>` — Send a proposal
2. The other player runs `/marriage accept`
3. You're married! The server gets a broadcast announcement

## Husband / Wife Roles

When you marry, the plugin randomly assigns one partner as **Husband** and one as **Wife**:
- These roles are displayed as **chat prefixes**
- They don't have mechanical differences — it's purely for flavor and comedy

## Benefits

- **Friendly-fire immunity** — You can't hurt your spouse (and they can't hurt you)
- **Separation damage** — If you get too far apart for too long, you both take gradual damage (the plugin calls this "missing each other")
- **Drama broadcasts** — Divorces are announced server-wide for maximum entertainment

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/marriage propose <player>` | `marriage.use` | Propose to someone |
| `/marriage accept` | `marriage.use` | Accept a proposal |
| `/marriage deny` | `marriage.use` | Deny a proposal |
| `/marriage divorce` | `marriage.use` | End the marriage |
| `/marriage info [player]` | `marriage.use` | Show marriage info |
| `/marriage list` | `marriage.use` | List all married couples |
| `/marriage reload` | `marriage.reload` | Admin: reload config |

:::caution
Divorce announcements are public and dramatic. Think carefully before committing!
:::

## Tips

- Marry someone you actually play with — the separation damage will punish distant relationships
- Your spouse is the one person you can trust in PvP zones
- The chat prefixes are a great way to show off your commitment (or lack thereof)
