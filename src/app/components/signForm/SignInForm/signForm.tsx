import React from 'react';
import styles from './SignInForm.module.css'; 

type SignInFormProps = {
    onSignIn: (email: string, password: string, keepSignedIn: boolean) => Promise<void>;
    error: string | null;
};


const SignInForm: React.FC<SignInFormProps> = ({ onSignIn, error }) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        const keepSignedIn = form.keepSignedIn.checked;
        await onSignIn(email, password, keepSignedIn);
    };

    return (
        
        <form className={styles.signInForm} onSubmit=
        {handleSubmit}>
            {error && <div>Error : {error}</div>}
            <div className={styles.inputGroup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.inputIcon} viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <input type="text" placeholder="email" name="email" />
            </div>
            <div className={styles.inputGroup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.inputIcon} viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>
                <input type="password" placeholder="password" name="password" />
            </div>
            <div className={styles.checkboxGroup}>
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>
            <button type="submit" className={styles.signInButton}>SIGN IN</button>
        </form>
    );
};

export default SignInForm;