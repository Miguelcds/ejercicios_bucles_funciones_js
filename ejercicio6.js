// Ejercicio 6


const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
  // Añade tu código de bucle aquí
  
  let Orden = {
    "los 70":[],
    "los 80":[],
    "los 90":[],
    "los 2000":[],
    "El 2010":[],
  
  };
  
  for (const item of starWarsMovies) {
   
    if ( item.releaseYear <= 1981 ){
  
      Orden["los 70"].push(item.title)
    
    } else if (item.releaseYear <= 1991){
  
      Orden["los 80"].push(item.title)
  
    } else if (item.releaseYear <= 2001){
  
      Orden["los 90"].push(item.title)
  
    } else if (item.releaseYear <= 2011){
  
      Orden["los 2000"].push(item.title)
    } else{
      Orden["El 2010"].push(item.title)
    }
  
  }
  
   console.log(Orden);



   // otro


   let Orden2 = {};

for (const item of starWarsMovies) {

  let decade = item.releaseYear - (item.releaseYear % 10) ;

  if (!Orden2[decade]){
    Orden2[decade] = []
  }

  Orden2[decade].push(item.title)


}

// console.log(Orden2);