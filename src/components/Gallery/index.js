import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Card, CardImg, Container } from 'reactstrap';
import Img0 from '../assets/images/home/GF02.jpg';

const Slides = [
  {
    img: Img0
  },
  {
    img: Img0
  },
  {
    img: Img0
  },
  {
    img: Img0
  }
]
const Gallery = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Container >
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={'center'}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={3}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={'>'}
        leftChevron={'<'}
      >
        {Slides.map(({ img }) => (
          <Card inverse className="h-100">
            <CardImg top width="100%" src={img} alt="Slide" />
          </Card>
        ))}
      </ItemsCarousel>
    </Container>
  );
};

export default Gallery;