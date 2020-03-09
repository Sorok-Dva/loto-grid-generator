# LOTO-GRID-GENERATOR

## Loto Rules
To play LOTO, you just have to select 6 numbers: 5 numbers on a grid of 49 numbers (from 1 to 49) and 1 lucky number on a grid of 10 numbers (from 1 to 10). 
You win the jackpot if you have 5 winning numbers and the complementary number.

## How this program works
This program will generate N random games of loto defined on your own settings (see configuration section).
Then it will returns you a final grid based on the most numbers that appears in the previous games.

This method will not increase at all the chances to win, but it's a funny way to play loto when we don't know which numbers to play.

## Configuration
You can edit LOTO rules as you want with the `opts` object.
Here is the default options : 
```javascript
let opts = {
  playLuckyNumbers: true,
  luckMaxSelection: 1,
  numbersMaxSelection: 5
};
```

## Start
```bash
npm start
```
or 
```bash
node app.js
```
Will plays 5 games.
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 7, 27, 11, 46, 24, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 34, 24, 46, 44, 27, 10 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 41, 42, 6, 11, 15, 3 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 13, 42, 3, 28, 11, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#5)
// Results : [ 34, 23, 12, 25, 47, 9 ]
//-------------------------------------//
// Sorting main numbers.
// - 11 : 3 occurences
// - 24 : 2 occurences
// - 27 : 2 occurences
// - 34 : 2 occurences
// - 42 : 2 occurences
// Sorting luck numbers.
// - 2 : 2 occurences
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 11, 24, 27, 34, 42 ]
// Luck Numbers : [ 2 ]
/////////////////////////////////////////
```

You can adjust play count with a `--count` argument in CLI : 

### Example 1
```bash
npm start -- --count=4
```
or 
```bash
node app.js --count=4
```
Will results something like
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 31, 34, 26, 8, 45, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 11, 19, 38, 10, 2, 9 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 12, 23, 22, 13, 28, 3 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 8, 36, 19, 9, 39, 9 ]
//-------------------------------------//
// Sorting main numbers.
// - 8 : 2 occurences
// - 19 : 2 occurences
// - 2 : 1 occurences
// - 9 : 1 occurences
// - 10 : 1 occurences
// Sorting luck numbers.
// - 9 : 2 occurences
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 8, 19, 2, 9, 10 ]
// Luck Numbers : [ 9 ]
/////////////////////////////////////////
```

You can adjust game settings in the play method call : 
### Example 2
```javascript
play(argv || 5, { playLuckyNumbers: false });
```
Will results something like
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 19, 4, 47, 24, 15 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 13, 11, 20, 32, 48 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 25, 35, 2, 43, 10 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 2, 11, 21, 14, 46 ]
//-------------------------------------//
// Sorting main numbers.
// - 2 : 2 occurences
// - 11 : 2 occurences
// - 4 : 1 occurences
// - 10 : 1 occurences
// - 13 : 1 occurences
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 2, 11, 4, 10, 13 ]
// Luck Numbers : false
/////////////////////////////////////////
```
### Example 3
```javascript
play(argv || 5, { 
  playLuckyNumbers: true, 
  numbersMaxSelection: 2, 
  luckMaxSelection: 2 
});
```
Will results something like
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 43, 4, 10, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 23, 25, 5, 9 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 48, 17, 4, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 42, 18, 1, 4 ]
//-------------------------------------//
// Sorting main numbers.
// - 4 : 1 occurences
// - 17 : 1 occurences
// Sorting luck numbers.
// - 4 : 3 occurences
// - 1 : 1 occurences
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 4, 17 ]
// Luck Numbers : [ 4, 1 ]
/////////////////////////////////////////
```

### Example 4 (1 million games)

```
[...]
//-------------------------------------//
// Game played. (#1000000)
// Results : [ 20, 49, 33, 12, 19, 8 ]
//-------------------------------------//
// Sorting main numbers.
// - 18 : 102866 occurences
// - 36 : 102522 occurences
// - 15 : 102486 occurences
// - 2 : 102368 occurences
// - 19 : 102358 occurences
// Sorting luck numbers.
// - 3 : 100544 occurences
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 18, 36, 15, 2, 19 ]
// Luck Numbers : [ 3 ]
/////////////////////////////////////////
```