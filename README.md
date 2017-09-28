# FUUID - Fucking Universally Unique Identifiers [![CircleCI](https://circleci.com/gh/JakeSidSmith/fuuid.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/fuuid)

## About

Unlike a standard UUID, FUUID has the following benefits:

1. Easy to remember

2. More unique than most UUIDs

3. Readable, and therefore great for URLs e.g.

`https://domain.com/post/bugger-crap-shit-fuck-crap-fuck-twat-twat-fucked-arse-bitch-bitch-head-butt-fucking-shite-dick-bollocks-bastard-shit-crap-twat-crap-bastard-shitting-shitting-shite-fucking-twat-ass-you-twat`

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
wank-cock-butt-dick-fucked-head-fucker-arse-bitch-cock-face-shit-bitch-crap-head-fucked-fucker-you-butt-face-fucker-face-wank-bugger-shitting-twat-head-crap-face-wanker-wank-fuck

shit-dick-shite-bitch-cunt-crap-cock-bastard-you-fucker-cock-face-wanking-shite-fuck-wank-crap-wanker-shite-fucking-fucked-bollocks-bastard-bollocks-head-bitch-fuck-fucker-bitch-nob-shite-dick

wanker-bugger-bitch-wank-wanker-face-bitch-bugger-crap-face-cunt-bitch-bollocks-fucker-shitting-twat-butt-face-ass-fucker-cock-bugger-head-bugger-face-bastard-wanker-face-nob-bastard-fucking-fucker

fuck-wank-shit-shitting-fuck-wanker-fucking-fuck-you-bastard-fucked-ass-wanker-bugger-bitch-fucking-wanker-ass-twat-cunt-wank-nob-fuck-nob-fucker-crap-cock-fuck-crap-twat-fucking-fucking

cunt-nob-head-fuck-bastard-nob-cunt-fucked-face-arse-crap-face-twat-fucking-bitch-twat-twat-wanker-bitch-bugger-wank-twat-face-shitting-twat-cock-shitting-cunt-twat-you-head-wanker
```

To get a censored version of an FUUID simply supply `true` as the only argument to the `fuuid` function.

```typescript
console.log(fuuid(true));
```

Example output:
```
***-****-****-****-****-****-******-****-*******-***-****-*******-****-********-****-*****-****-****-*****-******-***-******-****-******-****-******-****-******-*******-********-****-******
```
