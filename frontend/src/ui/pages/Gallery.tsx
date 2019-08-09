import React    from "react";

import Card     from "react-bootstrap/Card";


const Gallery = () => (
    <React.Fragment>
        <h1>Gallery</h1>
        <Card>
            <Card.Img src="images/pre-beach-jump.jpg" />
            Hello I am a card
        </Card>
    </React.Fragment>
);

export default Gallery;
