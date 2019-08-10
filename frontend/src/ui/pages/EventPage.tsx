import React from "react";
import { connect } from "react-redux";

interface EventPageProps {
    event: {
        id: number;
        name: string;
        description: string;
        image: string;
        startTime: Date;
        endTime: Date;
    };
}

const EventPage: React.FC<EventPageProps> = ({ event }): JSX.Element => (
    <React.Fragment>
        <h1>{event.name}</h1>
    </React.Fragment>
);

export default connect(
    (state: any, ownProps: any): EventPageProps => ({
        event: state.events.items.find(
            (e: any): boolean => e.id === ownProps.id
        )
    })
)(EventPage);
