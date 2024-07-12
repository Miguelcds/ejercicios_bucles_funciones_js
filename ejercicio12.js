const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'teleportation' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  // steel skin
  function findMutantByPower(mutants, power) {
   
  let result = "";
  let resultado = "";
  for (const item of mutants) {
    if (power == item.power) {
      resultado += item.name + ", " ;
      result = (`Se ha localizado el/los siguente/s mutante/s : ${resultado} con dicho poder`)
   } else {
    result = "No hemos localizado a ninguno ";
   }
   }
  
   console.log(result);
  
  }
  
  
   findMutantByPower(mutants, "teleportation" )