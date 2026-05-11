---
title: Realms
description: Towny-style towns with Factions-style land claims, raids, power growth, and diplomacy.
---

Realms is the political backbone of Yuumiverse. Create a realm, claim land, invite citizens, form alliances, and wage wars.

## Creating a Realm

```
/realm create <name>
```

This creates your realm at your current location. You'll start with a small amount of **power** that determines how many chunks you can claim.

## Claiming Land

```
/realm claim
```

Claims the chunk you're standing in for your realm. Costs power.

```
/realm unclaim
```

Unclaims the current chunk, refunding some power.

## Members & Roles

| Command | Description |
|---------|-------------|
| `/realm invite <player>` | Invite someone to join |
| `/realm join <realm>` | Accept an invitation |
| `/realm kick <player>` | Remove a member |
| `/realm promote <player>` | Promote to officer |
| `/realm demote <player>` | Demote to member |
| `/realm transfer <player>` | Transfer realm ownership |

## Homes

```
/realm sethome <name>
/realm home <name>
/realm delhome <name>
/realm homes
```

Each realm can have multiple homes for fast travel between claimed areas.

## Diplomacy

| Command | Description |
|---------|-------------|
| `/realm ally <realm>` | Request alliance |
| `/realm enemy <realm>` | Declare enemy |
| `/realm neutral <realm>` | Request neutrality |
| `/realm allies` | List allies |
| `/realm enemies` | List enemies |
| `/realm relations` | Show all relations |

Allies can't hurt each other in your territory. Enemies can raid you during wartime.

## Overclaiming

If a realm's power drops below their claimed chunks, their land becomes **overclaimable**:
- Enemy realms can claim those chunks for free
- Power drops when members die or leave

## Chat

```
/realmchat <message>
```

Sends a message only to your realm members. Alias: `/rc`

## Other Commands

| Command | Description |
|---------|-------------|
| `/realm info [realm]` | Show realm info |
| `/realm here` | Show which realm owns this chunk |
| `/realm who <player>` | Show which realm a player belongs to |
| `/realm list` | List all realms |
| `/realm map` | Show a text-based claim map |
| `/realm top` | Show top realms by power |
| `/realm power` | Check your realm's power |
| `/realm flag <flag> <value>` | Set realm flags |
| `/realm display` | Toggle claim display |
| `/realm togglebar` | Toggle power bar |
| `/realm showclaim` | Highlight your claims |
| `/realm rename <name>` | Rename your realm |
| `/realm title <title>` | Set realm title |
| `/realm disband` | Permanently delete your realm |
| `/realm reload` | Admin: reload config |

## Tips

- Power is everything — protect your members, because deaths cost power
- Alliances are crucial for surviving against larger realms
- Claim strategically around valuable resources
- Use `/realm map` frequently to understand territorial boundaries
- Don't over-extend — claiming more than you can defend makes you vulnerable to overclaiming
