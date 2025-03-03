import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const RegistrationForm = () => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    const hendSub = (values, options) => {
        console.log(values);
        options.resetForm();
    }

    return (
        <div>
            <p>Registration</p>
            <Formik initialValues={initialValues} onSubmit={hendSub}>
                <Form>
                    <label>
                        <span>Name</span>
                        <Field name="name" />
                    </label>
                    <label>
                        <span>Email</span>
                        <Field name="email" type="email"/>
                    </label>
                    <label>
                        <span>Password</span>
                        <Field name="password" type="password"/>
                    </label>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
            <p>If you already have an account <Link to="/login">login here</Link></p>
        </div>
    );
};

export default RegistrationForm;