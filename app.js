const numbers = [...Array(50).keys()].slice(1);
const bonus = [...Array(11).keys()].slice(1);

let playCount = 0;

const play = (count, opts) => {
  let games = [];

  if (!count) count = 5;
  opts = {
    playLuckyNumbers: true,
    luckMaxSelection: 1,
    numbersMaxSelection: 5,
    ...opts
  };

  while (playCount !== count) {
    let grid = [...numbers];
    let lucky = [...bonus];
    let result = [];

    for (let i = 0; i < opts.numbersMaxSelection; i++) {
      let pos = Math.floor(Math.random() * grid.length);
      result.push(grid[pos]);
      grid.splice(pos, 1);
    }

    if (opts.playLuckyNumbers) {
      for (let i = 0; i < opts.luckMaxSelection ; i++) {
        let pos = Math.floor(Math.random() * lucky.length);
        result.push(lucky[pos]);
        lucky.splice(pos, 1);
      }
    }

    games.push(result);
    playCount++;
    console.log('//-------------------------------------//');
    console.log(`// Game played. (#${playCount})`);
    console.log('// Results :', result);
    console.log('//-------------------------------------//');
  }

  let finalGrid = sortFinalNumbers('main', games, opts);
  let finalLucky = sortFinalNumbers('luck', games, opts);
  console.log('/////////////////////////////////////////');
  console.log(`// Generated Grid (based on most numbers that appears).`);
  console.log('// Main Numbers :', finalGrid);
  console.log('// Luck Numbers :', finalLucky);
  console.log('/////////////////////////////////////////');
};

let sortFinalNumbers = (type, games, opts) => {
  if (type === 'luck' && opts.playLuckyNumbers === false)
    return false;

  let sortable = [];
  let numbersCount = {};

  if (type === 'main') {
    games.map(g => {
      let tmp = [...g];
      if (opts.playLuckyNumbers === true)
        tmp.splice(opts.numbersMaxSelection);
      tmp.map(v => isNaN(numbersCount[v]) ? numbersCount[v] = 1 : numbersCount[v]++);
    });
  }

  if (type === 'luck') {
    games.map(g => {
      let tmp = [...g];
      tmp.splice(0, opts.numbersMaxSelection);
      tmp.map(v => isNaN(numbersCount[v]) ? numbersCount[v] = 1 : numbersCount[v]++);
    });
  }

  for (let key in numbersCount)
    if(numbersCount.hasOwnProperty(key))
      sortable.push([key, numbersCount[key]]);

  sortable.sort((a, b) => b[1] - a[1]);

  if (type === 'main') sortable.splice(opts.numbersMaxSelection);
  if (type === 'luck') sortable.splice(opts.luckMaxSelection);

  return sortable.map(v => parseInt(v[0]));
};

play(5, { playLuckyNumbers: true, numbersMaxSelection: 2, luckMaxSelection: 2 });