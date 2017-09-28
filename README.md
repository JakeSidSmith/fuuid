# FUUID - Fucking Universally Unique Identifiers [![CircleCI](https://circleci.com/gh/JakeSidSmith/fuuid.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/fuuid)

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
```
bitch-jeb-jeb-arse-shite-bastard-arsehole-wanker-fucker-fuck-bastard-fuck-nob-damn-wank-fucked-wanker-nob-jeb-dick-git-piss-jeb-fucked-head-pillock-shite-bastard-face-butt-fucking-pillock

pillock-ass-bastard-cunt-douche-bugger-fuck-prat-git-wanking-wanking-you-fuck-shitting-dickhead-bellend-pillock-butt-crap-jeb-shit-nob-twat-dickhead-fucked-bloody-bellend-bitch-asshole-fuck-git-bitch

douche-dave-prick-cock-asshole-wanking-bellend-nob-wanker-shite-tosser-shite-butt-you-bastard-ass-wanker-shite-fucking-bell-jeb-arsehole-shitting-ass-git-butt-wanking-bellend-butt-douche-butt-shite

pillock-darn-dave-dave-nob-bell-cunt-face-prat-face-bastard-arse-ass-jeb-fuck-head-fucking-piss-arse-fucked-jeb-asshole-bugger-crap-prat-pillock-fucker-jeb-bellend-dave-bellend-tosser

cunt-fucked-cunt-bollocks-git-bloody-prat-face-you-damn-dick-cunt-face-douche-bollocks-fuck-butt-fuck-fuck-fucking-jeb-twat-darn-tosser-bastard-you-prat-shit-dickhead-face-cunt-wanker
```

To get a censored version of an FUUID simply supply `true` as the only argument to the `fuuid` function.

```typescript
console.log(fuuid(true));
```

Example output:
```
***-***-***-****-****-***-****-********-****-****-****-****-****-****-********-******-****-****-****-*******-********-****-****-****-****-****-******-****-********-****-****-*******
```
