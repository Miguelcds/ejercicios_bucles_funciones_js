// Ejercicio 9


const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1918 }
  ];
  
  function findOldestXMen(xMen) {

    let mostOld = [];
    let number = Infinity;
    for (const item of xMen) {
    if (item.year <= number ) {
      number = item.year
     mostOld = item.name
    }
    }
  console.log(mostOld);
  }
  

findOldestXMen(xMen)