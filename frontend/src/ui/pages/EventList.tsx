import React        from "react";
import { connect }  from "react-redux";
import { Link }     from "react-router-dom";

import Container    from "react-bootstrap/Container";
import Jumbotron    from "react-bootstrap/Jumbotron";
import Col          from "react-bootstrap/Col";
import Row          from "react-bootstrap/Row";


interface EventProps {
    description: string;
    endTime: Date;
    id: number;
    image: string;
    location: string;
    name: string;
    startTime: Date;
}

const EventListItem = ({ event: { id, name, description, location, image, startTime, endTime } }: { event: EventProps }) => (
    <Jumbotron className="event-list-item">
        <Container>
            <Row>
                <Col sm={8} className="text-content">
                    <h1>{name}</h1>
                    <h4>{location}</h4>
                    {/* eslint-disable-next-line max-len */}
                    <h5><i>{`${startTime.toUTCString().replace(" GMT", "")} - ${endTime.toUTCString().replace(" GMT", "")}`}</i></h5>
                    <p>{description}</p>
                </Col>
                <Col sm={4} className="img-content">
                    <img src={`images/${image}`} />
                </Col>
            </Row>
        </Container>
    </Jumbotron>
);


interface EventListProps {
    events: EventProps[];
    showAll?: boolean;
}

const EventList: React.FC<EventListProps> = ({ events, showAll = true }) => (
    <React.Fragment>
        {/* <Container> */}
        {events.map((event) => <EventListItem key={event.name} event={event} />)}
        {showAll
            ? (
                <React.Fragment>
                    <hr className="hr-text" data-content="Previous" />
                    {events.map((event) => (
                        <EventListItem key={event.name} event={event} />
                    ))}
                </React.Fragment>
            )
            : null}
        {/* </Container> */}
    </React.Fragment>
);

export default connect((state: any) => ({
    events: state.events.items
}))(EventList);
