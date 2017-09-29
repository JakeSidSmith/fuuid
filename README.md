# FUUID [![CircleCI](https://circleci.com/gh/JakeSidSmith/fuuid.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/fuuid)

**Flipping universally unique identifiers**

*For a far more obscene variation (but with longer length), check out version 1. Version 1 had 32 terms per FUUID, but version 2 only has 22.*

## About

Unlike a standard UUID, FUUID has the following benefits:

1. Easy to remember

2. More unique than most UUIDs

3. Readable, and therefore great for URLs e.g. `https://domain.com/post/cunt-fucked-cunt-bollocks-git-bloody-prat-face-you-damn-dick-cunt-face-douche-bollocks-fuck-butt-fuck-fuck-fucking-jeb-twat-darn-tosser-bastard-you-prat-shit-dickhead-face-cunt-wanker`

## Installation

Install using npm.

```shell
npm install fuuid
```

Recommended: add `--save` to automatically add to your package.json and `--save-exact` to pin the version.

```shell
npm install fuuid --save --save-exact
```

## Usage

Simply import the function and call it to generate an FUUID.

```typescript
import { fuuid } from 'fuuid';

console.log(fuuid());
```

Example output:

```typescript
'bitch-jeb-jeb-arse-shite-bastard-arsehole-wanker-fucker-fuck-bastard-fuck-nob-damn-wank-fucked-wanker-nob-jeb-dick-git-piss-jeb-fucked-head-pillock-shite-bastard-face-butt-fucking-pillock'

'dickhead-wanking-piss-fuck-jeb-you-bellend-cock-head-butt-bugger-bastard-ass-shitting-bloody-asshole-dick-jeb-wank-pillock-piss-you-dickhead-arse-fucked-pillock-fucking-head-piss-fucked-crap-dick'

'cunt-fucked-cunt-bollocks-git-bloody-prat-face-you-damn-dick-cunt-face-douche-bollocks-fuck-butt-fuck-fuck-fucking-jeb-twat-darn-tosser-bastard-you-prat-shit-dickhead-face-cunt-wanker'

'pillock-darn-dave-dave-nob-bell-cunt-face-prat-face-bastard-arse-ass-jeb-fuck-head-fucking-piss-arse-fucked-jeb-asshole-bugger-crap-prat-pillock-fucker-jeb-bellend-dave-bellend-tosser'

'douche-dave-prick-cock-asshole-wanking-bellend-nob-wanker-shite-tosser-shite-butt-you-bastard-ass-wanker-shite-fucking-bell-jeb-arsehole-shitting-ass-git-butt-wanking-bellend-butt-douche-butt-shite'
```

To get a censored version of an FUUID simply supply `true` as the only argument to the `fuuid` function.

```typescript
console.log(fuuid(true));
```

Example output:

```typescript
'***-***-***-****-****-***-****-********-****-****-****-****-****-****-********-******-****-****-****-*******-********-****-****-****-****-****-******-****-********-****-****-*******'
```
