import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const initialValues = {
        email: "",
        password: "",
    }

    const hendSub = (values, options) => {
        console.log(values);
        options.resetForm();
    }

    return (
        <div>
            <p>Login</p>
            <Formik initialValues={initialValues} onSubmit={hendSub}>
                <Form>
                    <label>
                        <span>Email</span>
                        <Field name="email" type="email"/>
                    </label>
                    <label>
                        <span>Password</span>
                        <Field name="password" type="password"/>
                    </label>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
            <p>If you don't have an account yet <Link to="/register">register here</Link></p>
        </div>
    );
};

export default LoginForm;