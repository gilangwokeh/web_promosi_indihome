import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Paket = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./indihome-paket-2p-telpon.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./indihome-paket-2p-tv.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./indihome-paket-gamer.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Paket