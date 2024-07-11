// Ejercicio 7


const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  
  // Añade tu código de bucle aquí
  
  let OrderBgenre = {};


for (const item of tracks) {

  // si item no(! negando ) tiene el item.genre en su interior, lo creas 
  if (!OrderBgenre[item.genre]) {
    OrderBgenre[item.genre] = [];
  }

OrderBgenre[item.genre].push(item.title)


}

console.log(OrderBgenre);