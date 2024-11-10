// galleryData.ts

export interface Photo {
    src: string;
    alt: string;
    caption: string;
  }
  
  export const photos: Photo[] = [
    { src: '/gallery/redbricks.jpg', alt: 'Redbricks' , caption: 'Magna Plaza, Amsterdam'},
    { src: '/gallery/amsterdam.jpg', alt: 'Amsterdam' , caption: 'Hartenstraat, Amsterdam'},
    { src: '/gallery/lucernsunset.jpg', alt: 'Luzern' , caption: 'Mt. Pilatus, Luzern'},
    { src: '/gallery/blackvespa.jpg', alt: 'Zürich' , caption: 'Strochengasse, Zürich'},
    { src: '/gallery/larcbarcelona.jpg', alt: 'Barcelona' , caption: "L'Arc de Triomf, Barcelona"},
    { src: '/gallery/mcdonalds.jpg', alt: 'Luzern' , caption: "McDonald's, Luzern"},
    { src: '/gallery/frakmuntegg.jpg', alt: 'Luzern', caption: "Fräkmüntegg, Luzern" },
    { src: '/gallery/oktober.jpg', alt: 'Munich' , caption: "Hacker-Pschorr, Munich"},
    { src: '/gallery/munichred.jpg', alt: 'Munich' , caption: "Munich's Red, Munich"},
    { src: '/gallery/rathaus.jpg', alt: 'Munich' , caption: "Rathaus-Glockenspiel, Munich"},
    { src: '/gallery/marienplatz.jpg', alt: 'Munich' , caption: "Marienplatz, Munich"},
    { src: '/gallery/giovanni.jpg', alt: 'Florence' , caption: "San Giovanni, Florence"},







    // Add more photos here
  ];
  