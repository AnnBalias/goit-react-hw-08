import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css"
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    }

    const hendSub = (values, options) => {
        console.log(values);
        dispatch(loginThunk(values))
            .unwrap()
            .then(response => {
                navigate('/contacts');
                toast.success(`Welcome back, ${response.user.name}`)
            })
            .catch(() => toast.error('Invalid data'));
        options.resetForm();
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={hendSub}>
                <Form className={css.loginForm}>
                    <label className={css.formLabel}>
                        <span>Email</span>
                        <Field name="email" type="email" className={css.formField}/>
                    </label>
                    <label className={css.formLabel}>
                        <span>Password</span>
                        <Field name="password" type="password" className={css.formField}/>
                    </label>
                    <button type="submit" className={css.formBtn}>Login</button>
                </Form>
            </Formik>
            <p className={css.note}>If you don`t have an account yet <Link to="/register" className={css.noteLink}>register here</Link></p>
        </div>
    );
};

export default LoginForm;