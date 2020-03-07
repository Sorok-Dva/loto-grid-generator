#LOTO-GRID-GENERATOR

##Loto Rules
To play LOTO, you just have to select 6 numbers: 5 numbers on a grid of 49 numbers (from 1 to 49) and 1 lucky number on a grid of 10 numbers (from 1 to 10). 
You win the jackpot if you have 5 winning numbers and the complementary number.

##How this program works
This program will generate N random games of loto defined on your own settings (see configuration section).
Then it will returns you a final grid based on the most numbers that appears in the previous games.

This method will not increase at all the chances to win, but it's a funny way to play loto when we don't know which numbers to play.

##Configuration
You can edit LOTO rules as you want with the `opts` object.
Here is the default options : 
```javascript
let opts = {
  playLuckyNumbers: true,
  luckMaxSelection: 1,
  numbersMaxSelection: 5
};
```

##Start
```bash
npm start
```
Will play 5 games.
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 32, 11, 7, 10, 5, 7 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 40, 16, 45, 32, 13, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 10, 32, 47, 26, 45, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 7, 9, 32, 47, 30, 10 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#5)
// Results : [ 20, 23, 7, 17, 32, 2 ]
//-------------------------------------//
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 32, 7, 10, 45, 47 ]
// Luck Numbers : [ 2 ]
/////////////////////////////////////////
```

You can adjust play count in the play method call : 

###Example 1
```javascript
play(15);
```
Will results
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 15, 18, 19, 30, 12, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 34, 37, 28, 10, 20, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 30, 29, 21, 15, 2, 8 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 4, 33, 32, 27, 9, 8 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#5)
// Results : [ 2, 38, 43, 36, 11, 8 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#6)
// Results : [ 8, 39, 31, 26, 35, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#7)
// Results : [ 43, 13, 31, 37, 9, 2 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#8)
// Results : [ 47, 42, 4, 3, 11, 1 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#9)
// Results : [ 18, 37, 31, 25, 2, 6 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#10)
// Results : [ 32, 26, 35, 11, 46, 7 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#11)
// Results : [ 20, 7, 5, 31, 24, 6 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#12)
// Results : [ 2, 39, 29, 45, 49, 6 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#13)
// Results : [ 38, 25, 3, 7, 18, 5 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#14)
// Results : [ 8, 13, 37, 4, 22, 8 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#15)
// Results : [ 18, 17, 26, 24, 42, 2 ]
//-------------------------------------//
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 2, 18, 31, 37, 4 ]
// Luck Numbers : [ 2 ]
/////////////////////////////////////////
```

You can adjust play count in the play method call : 
###Example 2
```javascript
play(5, { playLuckyNumbers: false });
```
Will results
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 17, 45, 44, 9, 38 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 48, 42, 18, 27, 32 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 20, 29, 18, 11, 37 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 46, 13, 18, 47, 32 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#5)
// Results : [ 18, 20, 11, 6, 23 ]
//-------------------------------------//
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 18, 11, 20, 32, 6 ]
// Luck Numbers : false
/////////////////////////////////////////
```
###Example 3
```javascript
play(5, { 
  playLuckyNumbers: true, 
  numbersMaxSelection: 2, 
  luckMaxSelection: 2 
});
```
Will results
```
//-------------------------------------//
// Game played. (#1)
// Results : [ 4, 26, 1, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#2)
// Results : [ 31, 24, 2, 7 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#3)
// Results : [ 41, 38, 6, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#4)
// Results : [ 4, 9, 5, 4 ]
//-------------------------------------//
//-------------------------------------//
// Game played. (#5)
// Results : [ 18, 26, 4, 8 ]
//-------------------------------------//
/////////////////////////////////////////
// Generated Grid (based on most numbers that appears).
// Main Numbers : [ 4, 26 ]
// Luck Numbers : [ 4, 1 ]
/////////////////////////////////////////
```