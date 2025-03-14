import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css"
import { registerThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegistrationForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    const hendSub = (values, options) => {
        dispatch(registerThunk(values))
            .unwrap()
            .then(response => {
                navigate('/contacts');
                toast.success(`Welcome back, ${response.user.name}`)
            })
            .catch(() => toast.error('Invalid data'));;
        console.log(values);
        options.resetForm();
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={hendSub}>
                <Form className={css.registrForm}>
                    <label className={css.formLabel}>
                        <span>Name</span>
                        <Field
                            name="name"
                            className={css.formField} />
                    </label>
                    <label className={css.formLabel}>
                        <span>Email</span>
                        <Field
                            name="email"
                            type="email"
                            className={css.formField} />
                    </label>
                    <label className={css.formLabel}>
                        <span>Password</span>
                        <Field
                            name="password"
                            type="password"
                            className={css.formField} />
                    </label>
                    <button className={css.formBtn} type="submit">Register</button>
                </Form>
            </Formik>
            <p className={css.note}>If you already have an account <Link to="/login" className={css.noteLink}>login here</Link></p>
        </div>
    );
};

export default RegistrationForm;