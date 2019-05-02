import { Formik, FormikActions, FormikProps }   from "formik";
import React, { useState }                      from "react";

import Button   from "react-bootstrap/Button";
import Form     from "react-bootstrap/Form";



interface LoginFormValues {
    email: string,
    password: string
}

const Login: React.FC<{}> = () => (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
            console.log("submitting", values, actions)
        }}
        render={(props: FormikProps<LoginFormValues>) => (
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        onChange={props.handleChange}
                        placeholder="Enter email"
                        type="email"
                        value={props.values.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        onChange={props.handleChange}
                        placeholder="Password"
                        type="password"
                        value={props.values.password}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Log in</Button>
            </Form>
        )}
    />
);

export default Login;
