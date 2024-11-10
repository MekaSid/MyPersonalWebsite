// galleryData.ts

export interface Photo {
    src: string;
    alt: string;
    caption: string;
  }
  
  export const photos: Photo[] = [
    { src: '/gallery/redbricks.jpg', alt: 'Redbricks' , caption: 'Redbrick'},
    { src: '/gallery/amsterdam.jpg', alt: 'Amsterdam' , caption: 'Amsterdam'},
    { src: '/gallery/lucernsunset.jpg', alt: 'Lucern' , caption: 'Lucern'},
    // Add more photos here
  ];
  