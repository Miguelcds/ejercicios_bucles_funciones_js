// Ejercicio 2

const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

// Añade tu código de bucle aquí

let before2000 = [];

let after2000 = [];

for (const item of movies) {
  if (item.releaseYear < 2000) {
    before2000.push(item);
  } else {
    after2000.push(item);
  }
}

console.log("Antes del año 2000:", before2000.length);
console.log("Despues del año 2000:", after2000.length);
