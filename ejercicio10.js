//Ejercicio 10


const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
  // le pregunto con hasOwnProperty que si capitals tiene como key algun pais de los que pondre en country, y si es true, me lo devuelva por consola 
   if (capitals.hasOwnProperty(country)) {
    console.log(capitals[country]);
  
    // sino le indico que no 
   } else {
    console.log(`La capital de ${country} no esta en nuestra base de datos`);
   }
  
  }
  
   getCapital("")
  
  
  
  function gcapitales(countrys){
  // Compruebo si el pais esta en la lista, preguntando si el valor que le he dado en country esta definido en el array de objetos Capitals
  
    if (capitals[countrys] !== undefined) {
      console.log(capitals[countrys]);
    } else {
      console.log(`La capital de ${countrys} no esta en nuestra base de datos`);
     }
  
  }
  
  
  gcapitales("")