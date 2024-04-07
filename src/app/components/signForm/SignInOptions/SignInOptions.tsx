import React from 'react';
import styles from './SignInOptions.module.css'; 

const SignInOptions: React.FC = () => (
    <div className={styles.signInOptions}>
        <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
        <div className={styles.signUp}>
            Not a Member? <a href="/sign-up">Sign up</a>
        </div>
    </div>
);

export default SignInOptions;