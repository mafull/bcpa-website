import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import EventList from "ui/pages/EventList";

const carouselContent = [
    {
        image: {
            name: "pre-beach-jump.jpg",
            alt: "BCPA Boogie 2019"
        },
        title: "Boogie 2019",
        text: "Some descrfdbdbdfg"
    }
];

const Home: React.FC<{}> = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems = carouselContent.map(
        ({ image, title, text }, idx): JSX.Element => (
            <Carousel.Item key={idx}>
                <img src={`images/${image.name}`} alt={image.alt} />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    );

    return (
        <React.Fragment>
            <Carousel
                activeIndex={activeIndex}
                interval={5000}
                onSelect={(newIndex: number): void => setActiveIndex(newIndex)}
            >
                {carouselItems}
                {/* <Carousel.Item>
                    <img src="images/boogie19.jpg" alt="BCPA Boogie 2019" />
                    <Carousel.Caption>
                        <h3>Boogie 2019</h3>
                        <p>Some description goes here</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img src="images/carousel1.jpg" alt="Vertex 1" />
                    <Carousel.Caption>
                        <h3>Vertex 1</h3>
                        <p>Some description goes here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/carousel2.jpg" alt="Vertex 2" />
                    <Carousel.Caption>
                        <h3>Vertex 2</h3>
                        <p>Some description goes here</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <h1 className="text-center">Upcoming events</h1> */}
            <hr
                className="hr-text"
                data-content="Upcoming events"
                style={{ color: "black" }}
            />
            <EventList showAll={false} />
        </React.Fragment>
    );
};

export default Home;
