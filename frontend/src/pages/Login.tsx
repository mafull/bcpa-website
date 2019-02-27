import React    from "react";
import {
    Form,
    Button,
    Container
}               from "semantic-ui-react";


interface LoginState {
    email: string,
    password: string
}


class Login extends React.Component<{}, LoginState> {

    // handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     // const target = event.target as HTMLInputElement;
    //     // this.setState({ target: event.currentTarget.value })
    // }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Input
                        label="Email"
                        type="email"
                        onChange={this.handleInputChange}
                    />
                    <Form.Input
                        label="Password"
                        type="password"
                    />
                    <Button>Log In</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
