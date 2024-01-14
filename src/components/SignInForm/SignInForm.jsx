import css from './sign-in-form.module.css';
import { Formik, Form, Field } from 'formik';
import AuthButton from '../../btn/AuthButton/AuthButton';
import { signInSchema } from '../../schemas/auth/auth-schemas';

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
              required
            />
            <Field
              type="text"
              name="password"
              placeholder="Password"
              className={css.input}
              required
            />
          </div>
          <AuthButton children="Sign In" />
        </Form>
      </Formik>
    </>
  );
};
export default SignInForm;