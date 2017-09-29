# FUUID [![CircleCI](https://circleci.com/gh/JakeSidSmith/fuuid.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/fuuid)

**Flipping universally unique identifiers**

*For a far more obscene variation (but with longer length), check out version 1. Version 1 had 32 terms per FUUID, but version 2 only has 22.*

## About

Unlike a standard UUID, FUUID has the following benefits:

1. Easy to remember

2. More unique than most UUIDs

3. Readable, and therefore great for URLs e.g. `https://domain.com/post/mr-poopy-butthole-balls-silly-numpty-dave-bum-balls-boob-fardled-lover-butthole-eater-bucket-weewee-jerk-nincompoop-bottom-pee-eater-boogers/`

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
'peepee-jerk-foofoo-balls-weewee-nitwit-boobie-mrs-boobies-hoohoo-stupid-flipping-fudge-bogey-poop-numpty-pee-butt-sod-weewee-boobies-plonker'

'dillweed-boob-lover-frolicking-boobs-sugar-butthole-balls-boogers-bum-mrs-poop-shazbot-wazzock-nincompoop-pillock-boob-foofoo-dave-harpy-weewee-butthole'

'bajingo-boobie-boob-prat-silly-booger-wazzock-crud-peepee-bajingo-person-numpty-weewee-bogey-boobie-eater-person-wee-darn-weewee-pillock-mr'

'cuckoo-boobie-bucket-cuckoo-boobs-silly-flipping-boobs-silly-foofoo-eater-nincompoop-harpy-flipping-sodding-booger-pillock-lover-fardled-bajingo-butthole-sugar'

'mr-poopy-butthole-balls-silly-numpty-dave-bum-balls-boob-fardled-lover-butthole-eater-bucket-weewee-jerk-nincompoop-bottom-pee-eater-boogers'
```

To get a censored version of an FUUID simply supply `true` as the only argument to the `fuuid` function.

```typescript
console.log(fuuid(true));
```

Example output:

```typescript
'*****-*******-****-******-******-****-*******-***-****-***-****-*******-*********-****-*******-*****-***-**-******-******-*********-*****'
```
