import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../../../assets/featured.jpg'
import img2 from '../../../../assets/banner3.jpg'
import img3 from '../../../../assets/dessert-bg.jpeg'
import img4 from '../../../../assets/soup-bg.jpg'



const CarouselComponent = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true}>
      <div>
        <img
        className=''
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=80"
          alt="Slide 1"
        />
        <p className="legend m-72  font-bold text-4xl uppercase ">Food that reminds of YOUR HOME!!<br />We serve delicious food that will satisfy your taste buds</p>
      </div>
      <div>
        <img
          src={img3}
          alt="Slide 2"
        />
        <p className="legend m-72  font-bold text-4xl uppercase">Food that reminds of YOUR HOME!!<br />We serve delicious food that will satisfy your taste buds</p>
      </div>
      <div>
        <img
          src={img2}
          alt="Slide 3"
        />
        <p className="legend m-72  font-bold text-4xl uppercase">Food that reminds of YOUR HOME!!<br />We serve delicious food that will satisfy your taste buds</p>
      </div>
      <div>
        <img
          src={img4}
          alt="Slide 3"
        />
        <p className="legend m-72  font-bold text-4xl uppercase">Food that reminds of YOUR HOME!!<br />We serve delicious food that will satisfy your taste buds</p>
      </div>
      <div>
        <img
          src={img1}
          alt="Slide 3"
        />
        <p className="legend m-72  font-bold text-4xl uppercase">Food that reminds of YOUR HOME!!<br />We serve delicious food that will satisfy your taste buds</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
