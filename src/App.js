import React from 'react';
import PhotoGallery from 'components/PhotoGallery/PhotoGallery';

import karateFudoshin from 'static/images/1.JPG';
import karateClub from 'static/images/2.JPG';
import karateClub1 from 'static/images/3.JPG';
import karateClub2 from 'static/images/4.JPG';
import karateClub3 from 'static/images/5.JPG';
import karateClub4 from 'static/images/6.JPG';
import sunBeach from 'static/images/7.JPG';
import sunBeach2 from 'static/images/8.JPG';
import sunBeach3 from 'static/images/9.jpg';
import sunBeach4 from 'static/images/10.jpg';

const photos = [
  { src: karateFudoshin, alt: 'Photo by Nataliya Obukhova' },
  { src: karateClub, alt: 'Photo by Nataliya Obukhova' },
  { src: karateClub1, alt: 'Photo by Nataliya Obukhova' },
  { src: karateClub2, alt: 'Photo by Nataliya Obukhova' },
  { src: karateClub3, alt: 'Photo by Nataliya Obukhova' },
  { src: karateClub4, alt: 'Photo by Nataliya Obukhova' },
  { src: sunBeach, alt: 'Photo by Nataliya Obukhova' },
  { src: sunBeach2, alt: 'Photo by Nataliya Obukhova' },
  { src: sunBeach3, alt: 'Photo by Nataliya Obukhova' },
  { src: sunBeach4, alt: 'Photo by Nataliya Obukhova' }
];

const App = () => (
  <PhotoGallery photos={photos} />
);

export default App;
