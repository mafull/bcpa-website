import { Formik, FormikActions, FormikProps }   from "formik";
import React                                    from "react";

import Button   from "react-bootstrap/Button";
import Form     from "react-bootstrap/Form";


interface LoginFormValues {
    email: string;
    password: string;
}

const Login: React.FC<{}> = () => (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: LoginFormValues, { setSubmitting }: FormikActions<LoginFormValues>) => {
            alert(JSON.stringify(["submitting", values]));
            setSubmitting(false);
        }}
    >
        {({ handleChange, handleSubmit, values }: FormikProps<LoginFormValues>) => (
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter email"
                        type="text"
                        value={values.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                        type="password"
                        value={values.password}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Log in</Button>
            </Form>
        )}
    </Formik>
);

export default Login;
