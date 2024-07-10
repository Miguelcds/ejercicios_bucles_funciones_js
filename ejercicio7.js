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
  
  let genreClass = {};
  
  
  for (const item of tracks) {
  
    if (!genreClass[item.genre]) {
      genreClass[item.genre] = [];
    }
  
    genreClass[item.genre].push(item.title)
  
  }
  
  
  
  console.log(genreClass);