import React    from "react";
import { connect }  from "react-redux";

import ListGroup    from "react-bootstrap/ListGroup";


const EventList: any/*React.FC<{}>*/ = ({ events }: { events: string[]}) => (
    <ListGroup>
        {events.map((event: string) => <ListGroup.Item key={event}>{event}</ListGroup.Item>)}
    </ListGroup>
);

export default connect((state: any) => ({
    events: state.events.items
}))(EventList);
