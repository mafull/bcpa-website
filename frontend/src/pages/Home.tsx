import React, { Component } from "react";

import { Container, Header, Segment } from "semantic-ui-react";


class Home extends Component {
    render() {
        return (
            <div>
                <Segment
                    inverted
                    textAlign="center"
                    vertical
                >
                    <Container text>
                        <Header
                            as="h1"
                            content="BCPA"
                            inverted
                            style={{
                                fontSize: "4em",
                                fontWeight: "normal"
                            }}
                        />
                        <Header
                            as="h2"
                            content={
                                "British Collegiate Parachute Association"
                                + " - the UK's university skydiving community"
                            }
                            inverted
                            style={{
                                fontSize: "1.7em",
                                fontWeight: "normal"
                            }}
                        />
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default Home;
