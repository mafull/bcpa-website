import React, { useState }  from "react";

import Carousel from "react-bootstrap/Carousel";


const Home: React.FC<{}> = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={(idx: number) => setActiveIndex(idx)}
        >
            <Carousel.Item>
                <img src="img1.jpg" />
                <Carousel.Caption>
                    <h3>Vertex 1</h3>
                    <p>SOme description goes here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img2.jpg" />
                <Carousel.Caption>
                    <h3>Vertex 2</h3>
                    <p>SOme description goes here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img3.png" />
                <Carousel.Caption>
                    <h3>Suit</h3>
                    <p>SOme description goes here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;
