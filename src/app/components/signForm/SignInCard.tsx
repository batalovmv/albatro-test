import React from 'react';
import styles from './signin.module.css';

type SignInCardProps = {
    formChildren: React.ReactNode;
    footerChildren?: React.ReactNode; 
};

const SignInCard: React.FC<SignInCardProps> = ({ formChildren, footerChildren }) => {
    return (
        <div className={styles.signInContainer}>
            <div className={styles.signInCard}>
                {formChildren}
            </div>
            {footerChildren} 
        </div>
    );
};

export default SignInCard;