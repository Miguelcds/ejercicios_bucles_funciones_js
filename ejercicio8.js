// Ejercicio 8

const artists = [
    { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
    {
      name: "David Bowie",
      influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
    },
    {
      name: "Eddie Vedder",
      influences: ["The Who", "Neil Young", "Jim Morrison"],
    },
    {
      name: "Freddie Mercury",
      influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
    },
    {
      name: "John Lennon",
      influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
    },
  ];
  
  // Añade tu código de bucle aquí
  
  for (const items of artists) {
  
     console.log("Artist: " + items.name + " Infuencias: " );
  
    for (const item of items.influences) {
      console.log(item);
    }
  
  }